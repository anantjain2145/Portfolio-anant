import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import {
  LEARNING_JOURNEY,
  PROFILE,
  PROJECTS,
  SKILL_CATEGORIES,
  TERMINAL_SUGGESTIONS,
} from '../data/portfolioData';

interface TerminalLine {
  id: number;
  kind: 'system' | 'command' | 'output' | 'accent' | 'error';
  text: string;
}

interface TerminalEntry {
  id: number;
  command: string;
  lines: TerminalLine[];
}

const INITIAL_BANNER: TerminalLine[] = [
  {
    id: 1,
    kind: 'accent',
    text: 'Anant Jain Portfolio Shell — Interactive Developer Console',
  },
  {
    id: 2,
    kind: 'system',
    text: "Type 'help' to see all commands, use ArrowUp/ArrowDown for history, or click a suggestion below.",
  },
];

function buildCommandOutput(rawCmd: string): TerminalLine[] {
  const cmd = rawCmd.trim().toLowerCase();
  const baseId = Date.now();

  switch (cmd) {
    case 'help':
      return [
        { id: baseId + 1, kind: 'accent', text: 'Available commands:' },
        { id: baseId + 2, kind: 'output', text: '  help       Display all available commands' },
        { id: baseId + 3, kind: 'output', text: '  about      Display introduction and career goal' },
        { id: baseId + 4, kind: 'output', text: '  skills     Show technical skills & tools' },
        { id: baseId + 5, kind: 'output', text: '  projects   Display portfolio projects & prototypes' },
        { id: baseId + 6, kind: 'output', text: '  education  Show academic background at GLA University' },
        { id: baseId + 7, kind: 'output', text: '  journey    Display 6-stage learning journey' },
        { id: baseId + 8, kind: 'output', text: '  contact    Display verified contact & GitHub links' },
        { id: baseId + 9, kind: 'output', text: '  clear      Clear the terminal' },
        { id: baseId + 10, kind: 'system', text: "  Tip: Try 'secret' or press Ctrl+K anywhere." },
      ];

    case 'about':
      return [
        { id: baseId + 1, kind: 'accent', text: `${PROFILE.name} — ${PROFILE.roleHeadline}` },
        { id: baseId + 2, kind: 'output', text: PROFILE.aboutParagraphs[0] },
        { id: baseId + 3, kind: 'output', text: PROFILE.aboutParagraphs[1] },
        {
          id: baseId + 4,
          kind: 'system',
          text: `Hometown: ${PROFILE.hometown} · Interests: Badminton, Organizing Events, Tech Workshops`,
        },
      ];

    case 'skills':
      return [
        { id: baseId + 1, kind: 'accent', text: 'Technical Competency Areas:' },
        ...SKILL_CATEGORIES.map((category, idx) => ({
          id: baseId + 2 + idx,
          kind: 'output' as const,
          text: `  [${category.title}] -> ${category.skills.map((s) => s.name).join(', ')}`,
        })),
      ];

    case 'projects':
      return [
        { id: baseId + 1, kind: 'accent', text: 'Projects & Prototypes:' },
        ...PROJECTS.map((project, idx) => ({
          id: baseId + 2 + idx,
          kind: 'output' as const,
          text: `  ${idx + 1}. ${project.title} (${project.status}) — ${project.concepts.join(', ')}`,
        })),
      ];

    case 'education':
      return [
        { id: baseId + 1, kind: 'accent', text: 'Academic Background:' },
        { id: baseId + 2, kind: 'output', text: `  Degree: ${PROFILE.degree}` },
        { id: baseId + 3, kind: 'output', text: `  Specialization: ${PROFILE.specialization}` },
        { id: baseId + 4, kind: 'output', text: `  Institution: ${PROFILE.university}` },
        { id: baseId + 5, kind: 'output', text: `  Period: ${PROFILE.enrollmentPeriod}` },
        {
          id: baseId + 6,
          kind: 'system',
          text: `  Coursework: ${PROFILE.coursework.join(' · ')}`,
        },
      ];

    case 'journey':
      return [
        { id: baseId + 1, kind: 'accent', text: 'Learning Journey Timeline:' },
        ...LEARNING_JOURNEY.map((stage, idx) => ({
          id: baseId + 2 + idx,
          kind: 'output' as const,
          text: `  ${stage.phase} (${stage.title}): ${stage.description}`,
        })),
      ];

    case 'contact':
      return [
        { id: baseId + 1, kind: 'accent', text: 'Verified Contact Information:' },
        { id: baseId + 2, kind: 'output', text: `  Email:    ${PROFILE.email}` },
        { id: baseId + 3, kind: 'output', text: `  GitHub:   ${PROFILE.githubUrl}` },
        { id: baseId + 4, kind: 'output', text: `  LinkedIn: ${PROFILE.linkedinUrl}` },
        { id: baseId + 5, kind: 'system', text: `  Campus:   ${PROFILE.university}` },
      ];

    case 'secret':
      return [
        { id: baseId + 1, kind: 'accent', text: 'Hidden Developer Note:' },
        {
          id: baseId + 2,
          kind: 'output',
          text: '"Every complex intelligent agent begins with one clear function, curiosity, and consistent daily practice." — Anant Jain',
        },
      ];

    default:
      return [
        {
          id: baseId + 1,
          kind: 'error',
          text: `Command not found: '${rawCmd.trim()}'. Type 'help' to see available commands.`,
        },
      ];
  }
}

export function DeveloperTerminalSection() {
  const [bannerLines, setBannerLines] = useState<TerminalLine[]>(INITIAL_BANNER);
  const [entries, setEntries] = useState<TerminalEntry[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyCursor, setHistoryCursor] = useState<number>(-1);
  const [typingText, setTypingText] = useState<string | null>(null);
  const [typingEntryId, setTypingEntryId] = useState<number | null>(null);

  const outputRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [entries, typingText, bannerLines]);

  useEffect(() => {
    if (typingEntryId === null) return;
    const entry = entries.find((item) => item.id === typingEntryId);
    if (!entry) return;

    const fullText = entry.lines.map((l) => l.text).join('\n');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTypingText(null);
      setTypingEntryId(null);
      return;
    }

    let index = 0;
    setTypingText('');
    const step = Math.max(2, Math.ceil(fullText.length / 36));
    const timer = window.setInterval(() => {
      index += step;
      if (index >= fullText.length) {
        window.clearInterval(timer);
        setTypingText(null);
        setTypingEntryId(null);
      } else {
        setTypingText(fullText.slice(0, index));
      }
    }, 18);

    return () => window.clearInterval(timer);
  }, [typingEntryId, entries]);

  const executeCommand = (rawInput: string) => {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    const cmd = trimmed.toLowerCase();
    setHistory((prev) => [...prev, trimmed]);
    setHistoryCursor(-1);
    setInputValue('');

    if (cmd === 'clear') {
      setBannerLines([]);
      setEntries([]);
      setTypingText(null);
      setTypingEntryId(null);
      return;
    }

    const lines = buildCommandOutput(trimmed);
    const newId = Date.now() + Math.floor(Math.random() * 1000);
    setEntries((prev) => [...prev, { id: newId, command: trimmed, lines }]);
    setTypingEntryId(newId);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    executeCommand(inputValue);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (history.length === 0) return;
      const nextCursor =
        historyCursor === -1 ? history.length - 1 : Math.max(0, historyCursor - 1);
      setHistoryCursor(nextCursor);
      setInputValue(history[nextCursor]);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (historyCursor === -1) return;
      const nextCursor = historyCursor + 1;
      if (nextCursor >= history.length) {
        setHistoryCursor(-1);
        setInputValue('');
      } else {
        setHistoryCursor(nextCursor);
        setInputValue(history[nextCursor]);
      }
    } else if (event.key === 'Tab') {
      event.preventDefault();
      const partial = inputValue.trim().toLowerCase();
      if (!partial) return;
      const match = [...TERMINAL_SUGGESTIONS, 'secret'].find((cmd) => cmd.startsWith(partial));
      if (match) {
        setInputValue(match);
      }
    }
  };

  return (
    <section
      id="terminal"
      aria-labelledby="terminal-heading"
      className="py-16 sm:py-20 border-t border-[var(--border-subtle)]"
    >
      <div className="space-y-2 mb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-secondary)]">
          Command-Line Explorer
        </p>
        <h2
          id="terminal-heading"
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]"
        >
          Interactive Developer Terminal
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl">
          Explore my background, skills, projects, and journey directly via terminal commands.
        </p>
      </div>

      <div className="rounded-2xl bg-[var(--bg-code)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] overflow-hidden theme-surface">
        {/* Terminal Top Window Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
            <span className="font-mono text-xs text-[var(--text-primary)]">
              anant@portfolio:~
            </span>
          </div>

          <span className="font-mono text-[11px] text-[var(--text-muted)]">
            Tab: autocomplete · ↑/↓: history
          </span>
        </div>

        {/* Clickable Command Suggestions */}
        <div
          aria-label="Quick terminal commands"
          className="flex items-center gap-2 px-4 py-2.5 bg-[var(--bg-card)] border-b border-[var(--border-subtle)] overflow-x-auto no-scrollbar"
        >
          <span className="font-mono text-[11px] text-[var(--text-muted)] shrink-0">Try:</span>
          {TERMINAL_SUGGESTIONS.map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => {
                executeCommand(cmd);
                inputRef.current?.focus();
              }}
              className="px-2.5 py-1 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-mono text-xs text-[var(--accent)] whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Scrollable Buffer */}
        <div
          ref={outputRef}
          onClick={() => {
            if (window.getSelection()?.toString() === '') {
              inputRef.current?.focus();
            }
          }}
          className="p-4 sm:p-6 h-80 sm:h-96 overflow-y-auto font-mono text-xs sm:text-[13px] leading-relaxed space-y-4 cursor-text"
        >
          {bannerLines.length > 0 && (
            <div className="space-y-1">
              {bannerLines.map((line) => (
                <p
                  key={line.id}
                  className={
                    line.kind === 'accent'
                      ? 'text-[var(--accent)] font-medium'
                      : 'text-[var(--text-muted)]'
                  }
                >
                  {line.text}
                </p>
              ))}
            </div>
          )}

          {entries.map((entry) => {
            const isCurrentlyTyping = entry.id === typingEntryId && typingText !== null;
            return (
              <div key={entry.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-[var(--text-primary)]">
                  <span className="text-[var(--accent)]">visitor@anant</span>
                  <span className="text-[var(--text-muted)]">:~$</span>
                  <span>{entry.command}</span>
                </div>

                {isCurrentlyTyping ? (
                  <pre className="whitespace-pre-wrap text-[var(--text-secondary)] font-mono">
                    {typingText}
                    <span className="inline-block w-2 h-4 align-middle bg-[var(--accent)] ml-0.5 animate-pulse" />
                  </pre>
                ) : (
                  <div className="space-y-0.5 pl-0 sm:pl-1">
                    {entry.lines.map((line) => {
                      let colorClass = 'text-[var(--text-secondary)]';
                      if (line.kind === 'accent') colorClass = 'text-[var(--accent)] font-medium';
                      else if (line.kind === 'system') colorClass = 'text-[var(--text-muted)]';
                      else if (line.kind === 'error') colorClass = 'text-[var(--danger-text)]';

                      return (
                        <p key={line.id} className={`whitespace-pre-wrap break-words ${colorClass}`}>
                          {line.text}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* Interactive Prompt Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
            <label htmlFor="terminal-command-input" className="sr-only">
              Enter terminal command
            </label>
            <span className="text-[var(--accent)] shrink-0">visitor@anant</span>
            <span className="text-[var(--text-muted)] shrink-0">:~$</span>
            <div className="relative flex-1 flex items-center min-w-0">
              {!inputValue && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 w-2 h-4 bg-[var(--accent)] animate-pulse"
                />
              )}
              <input
                ref={inputRef}
                id="terminal-command-input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck={false}
                placeholder="type 'help' and press Enter..."
                className={`w-full bg-transparent text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/65 focus:outline-none font-mono caret-[var(--accent)] ${
                  !inputValue ? 'pl-3.5' : ''
                }`}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
