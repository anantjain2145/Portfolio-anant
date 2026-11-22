import type { IncomingMessage, ServerResponse } from 'node:http';
import {
  handleChatRequest,
  validateChatPayload,
} from '../server/portfolioKnowledge.ts';

interface VercelRequest extends IncomingMessage {
  body?: unknown;
}

interface VercelResponse extends ServerResponse {
  status: (code: number) => VercelResponse;
  json: (data: unknown) => void;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
    return;
  }

  let parsedBody = req.body;
  if (typeof parsedBody === 'string') {
    try {
      parsedBody = JSON.parse(parsedBody);
    } catch {
      res.status(400).json({ error: 'Invalid JSON request body.' });
      return;
    }
  }

  const validation = validateChatPayload(parsedBody);
  if (!validation.valid || !validation.message) {
    res.status(400).json({ error: validation.error || 'Invalid request payload.' });
    return;
  }

  try {
    const result = await handleChatRequest(validation.message, validation.history);
    res.status(200).json(result);
  } catch (error: unknown) {
    const status =
      typeof error === 'object' &&
      error !== null &&
      'status' in error &&
      typeof (error as { status?: unknown }).status === 'number'
        ? (error as { status: number }).status
        : 502;

    console.error('Vercel /api/chat error:', error);
    res.status(status >= 400 && status < 600 ? status : 502).json({
      error: 'Unable to reach Gemini AI right now. You can continue using Demo Mode.',
    });
  }
}
