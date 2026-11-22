import { useEffect, useRef, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Bot, RotateCcw, Send, Sparkles, User, X } from 'lucide-react';
import { ASSISTANT_SUGGESTED_QUESTIONS } from '../data/portfolioData';
import { getDemoAssistantReply } from '../utils/assistantDemo';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  isError?: boolean;
}

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  text: "Hi! I'm Anant Jain's portfolio assistant. Ask me about his education at GLA University, skills, projects, learning journey, career goals, or contact details.",
};

export function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [assistantMode, setAssistantMode] = useState<'gemini' | 'demo' | 'checking'>('checking');

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    let active = true;
    fetch('/api/health')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!active) return;
        if (data && typeof data.geminiConfigured === 'boolean') {
          setAssistantMode(data.geminiConfigured ? 'gemini' : 'demo');
        } else {
          setAssistantMode('demo');
        }
      })
      .catch(() => {
        if (active) setAssistantMode('demo');
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const timer = window.setTimeout(() => inputRef.current?.focus(), 160);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(timer);
    };
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async (rawText: string) => {
    const trimmed = rawText.trim();
    if (!trimmed || isLoading) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      text: trimmed,
    };

    const historyPayload = messages
      .filter((m) => m.id !== 'welcome' && !m.isError)
      .slice(-8)
      .map((m) => ({ role: m.role, text: m.text }));

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: historyPayload,
        }),
      });

      const contentType = response.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        // Static preview without backend route: fall back explicitly to Demo Mode
        setAssistantMode('demo');
        setMessages((prev) => [
          ...prev,
          {
            id: `a-${Date.now()}`,
            role: 'assistant',
            text: getDemoAssistantReply(trimmed),
          },
        ]);
        return;
      }

      const data = (await response.json()) as {
        reply?: string;
        mode?: 'gemini' | 'demo';
        error?: string;
      };

      if (!response.ok) {
        setMessages((prev) => [
          ...prev,
          {
            id: `e-${Date.now()}`,
            role: 'assistant',
            text: data.error || 'Could not reach the AI service right now. Please try again.',
            isError: true,
          },
        ]);
        return;
      }

      if (data.mode === 'demo' || data.mode === 'gemini') {
        setAssistantMode(data.mode);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: 'assistant',
          text: data.reply || getDemoAssistantReply(trimmed),
        },
      ]);
    } catch {
      setAssistantMode('demo');
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: 'assistant',
          text: getDemoAssistantReply(trimmed),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage(input);
  };

  const handleReset = () => {
    setMessages([WELCOME_MESSAGE]);
  };

  return (
    <>
      {/* Floating AI Assistant Launcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="portfolio-ai-assistant"
        className="fixed bottom-6 left-5 sm:left-8 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#947dff] to-[#613de0] text-[#f5f7fa] text-xs font-medium shadow-[0_8px_28px_-4px_rgba(124,92,252,0.65)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a2e7ff]"
      >
        <Sparkles className="w-4 h-4 text-[#a2e7ff]" aria-hidden="true" />
        <span>{isOpen ? 'Close Assistant' : 'Ask AI Assistant'}</span>
      </button>

      {/* Assistant Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.section
            id="portfolio-ai-assistant"
            role="dialog"
            aria-label="Anant Jain AI Portfolio Assistant"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 left-4 right-4 sm:left-8 sm:right-auto sm:w-[400px] h-[520px] max-h-[75vh] z-50 rounded-2xl bg-[#10131b]/95 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 px-4 py-3.5 bg-[#181b23]/95 border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-[#272a32] border border-[#947dff]/40 flex items-center justify-center text-[#cabeff] shrink-0">
                  <Bot className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-[#e0e2ed] truncate">
                    Anant&apos;s Portfolio Assistant
                  </h3>
                  <p className="font-mono text-[11px] text-[#a2e7ff] truncate">
                    {assistantMode === 'gemini'
                      ? 'Gemini AI · Grounded Q&A'
                      : assistantMode === 'demo'
                      ? 'Demo Mode · Portfolio Knowledge'
                      : 'Connecting...'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={handleReset}
                  aria-label="Reset conversation"
                  className="w-8 h-8 rounded-lg hover:bg-[#272a32] flex items-center justify-center text-[#c9c4d8] hover:text-[#e0e2ed] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close AI assistant"
                  className="w-8 h-8 rounded-lg hover:bg-[#272a32] flex items-center justify-center text-[#c9c4d8] hover:text-[#e0e2ed] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
              {messages.map((msg) => {
                const isUser = msg.role === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : ''}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                        isUser
                          ? 'bg-[#947dff]/25 text-[#cabeff]'
                          : 'bg-[#272a32] text-[#a2e7ff]'
                      }`}
                    >
                      {isUser ? (
                        <User className="w-3.5 h-3.5" aria-hidden="true" />
                      ) : (
                        <Bot className="w-3.5 h-3.5" aria-hidden="true" />
                      )}
                    </div>

                    <div
                      className={`max-w-[82%] rounded-xl px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed whitespace-pre-line ${
                        isUser
                          ? 'bg-[#947dff]/25 border border-[#947dff]/35 text-[#e0e2ed]'
                          : msg.isError
                          ? 'bg-[#93000a]/30 border border-[#ffb4ab]/40 text-[#ffdad6]'
                          : 'bg-[#181b23] border border-white/[0.08] text-[#c9c4d8]'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex items-start gap-2.5" aria-live="polite">
                  <div className="w-7 h-7 rounded-lg bg-[#272a32] text-[#a2e7ff] flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div className="rounded-xl px-3.5 py-2.5 bg-[#181b23] border border-white/[0.08] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cabeff] animate-bounce [animation-delay:-0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a2e7ff] animate-bounce [animation-delay:-0.1s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cabeff] animate-bounce" />
                  </div>
                </div>
              )}

              {/* Suggested First-Time Questions */}
              {messages.length <= 2 && !isLoading && (
                <div className="pt-2 space-y-2">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#938ea1]">
                    Suggested Questions
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {ASSISTANT_SUGGESTED_QUESTIONS.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => void sendMessage(question)}
                        className="text-left px-2.5 py-1.5 rounded-lg bg-[#181b23] hover:bg-[#272a32] border border-white/[0.08] hover:border-[#00d2fd]/40 text-[11px] text-[#e0e2ed] transition-colors cursor-pointer"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Message Composer */}
            <form
              onSubmit={handleSubmit}
              className="p-3 bg-[#181b23]/90 border-t border-white/[0.08] flex items-center gap-2"
            >
              <label htmlFor="assistant-message-input" className="sr-only">
                Ask a question about Anant Jain
              </label>
              <input
                ref={inputRef}
                id="assistant-message-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Anant's skills, projects..."
                maxLength={800}
                className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-[#0b0e15] border border-white/10 text-xs sm:text-sm text-[#e0e2ed] placeholder:text-[#938ea1]/60 focus:outline-none focus:border-[#947dff]"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
                className="w-9 h-9 rounded-lg bg-[#947dff] hover:brightness-110 disabled:opacity-45 text-[#1c0062] flex items-center justify-center shrink-0 transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
