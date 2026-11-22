import { GoogleGenAI } from '@google/genai';
import {
  getDemoAssistantReply,
  PORTFOLIO_SYSTEM_INSTRUCTION,
} from '../src/utils/assistantDemo.ts';

export interface ChatHistoryTurn {
  role: 'user' | 'assistant';
  text: string;
}

export interface ChatApiResult {
  reply: string;
  mode: 'gemini' | 'demo';
}

export function isGeminiConfigured(): boolean {
  const key = process.env.GEMINI_API_KEY?.trim();
  return Boolean(key && key !== 'MY_GEMINI_API_KEY');
}

export function validateChatPayload(body: unknown): {
  valid: boolean;
  message?: string;
  history?: ChatHistoryTurn[];
  error?: string;
} {
  if (!body || typeof body !== 'object') {
    return { valid: false, error: 'Request body must be a JSON object.' };
  }

  const raw = body as Record<string, unknown>;
  if (typeof raw.message !== 'string') {
    return { valid: false, error: 'Message must be a non-empty string.' };
  }

  const trimmedMessage = raw.message.trim();
  if (!trimmedMessage) {
    return { valid: false, error: 'Please enter a message before sending.' };
  }
  if (trimmedMessage.length > 800) {
    return { valid: false, error: 'Message is too long (maximum 800 characters).' };
  }

  const sanitizedHistory: ChatHistoryTurn[] = [];
  if (Array.isArray(raw.history)) {
    for (const item of raw.history.slice(-8)) {
      if (
        item &&
        typeof item === 'object' &&
        ((item as Record<string, unknown>).role === 'user' ||
          (item as Record<string, unknown>).role === 'assistant') &&
        typeof (item as Record<string, unknown>).text === 'string'
      ) {
        const text = ((item as Record<string, unknown>).text as string).trim();
        if (text.length > 0 && text.length <= 1200) {
          sanitizedHistory.push({
            role: (item as Record<string, unknown>).role as 'user' | 'assistant',
            text,
          });
        }
      }
    }
  }

  return { valid: true, message: trimmedMessage, history: sanitizedHistory };
}

export async function handleChatRequest(
  message: string,
  history: ChatHistoryTurn[] = []
): Promise<ChatApiResult> {
  if (!isGeminiConfigured()) {
    return {
      reply: getDemoAssistantReply(message),
      mode: 'demo',
    };
  }

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  const conversationContents = [
    ...history.map((turn) => ({
      role: turn.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: turn.text }],
    })),
    {
      role: 'user',
      parts: [{ text: message }],
    },
  ];

  const response = await ai.models.generateContent({
    model: 'gemini-4-hydrogen',
    contents: conversationContents,
    config: {
      systemInstruction: PORTFOLIO_SYSTEM_INSTRUCTION,
    },
  });

  const replyText = response.text?.trim();
  if (!replyText) {
    throw new Error('The AI model returned an empty response.');
  }

  return {
    reply: replyText,
    mode: 'gemini',
  };
}
