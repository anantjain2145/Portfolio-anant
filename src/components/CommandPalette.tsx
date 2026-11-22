import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Bot,
  Compass,
  FileText,
  Palette,
  Search,
  Sparkles,
  X,
} from 'lucide-react';
import { THEME_LIST, useTheme } from '../context/ThemeContext';
import type { SectionId } from './Navbar';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: SectionId) => void;
  onOpenResume: () => void;
  onOpenAssistant: () => void;
}

interface PaletteAction {
  id: string;
  group: string;
  label: string;
  hint?: string;
  run: () => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onNavigate,
  onOpenResume,
  onOpenAssistant,
}: CommandPaletteProps) {
  const { setTheme, theme } = useTheme();
  const [query, setQuery] = useState('');
  const [secretRevealed, setSecretRevealed] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setSecretRevealed(false);
      return;
    }
    const timer = window.setTimeout(() => inputRef.current?.focus(), 60);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  const actions: PaletteAction[] = useMemo(() => {
    const sections: { id: SectionId; label: string }[] = [
      { id: 'home', label: 'Go to Home' },
      { id: 'about', label: 'Go to About Me' },
      { id: 'now', label: 'Go to Currently Exploring (Now)' },
      { id: 'journey', label: 'Go to Learning Journey Timeline' },
      { id: 'skills', label: 'Go to Skills & Developer Tools' },
      { id: 'projects', label: 'Go to Projects & Case Studies' },
      { id: 'github', label: 'Go to GitHub Integration' },
      { id: 'personality', label: 'Go to Personality & Beyond Code' },
      { id: 'terminal', label: 'Go to Interactive Terminal' },
      { id: 'contact', label: 'Go to Contact Section' },
    ];

    const sectionActions: PaletteAction[] = sections.map((sec) => ({
      id: `nav-${sec.id}`,
      group: 'Navigation',
      label: sec.label,
      hint: `#${sec.id}`,
      run: () => {
        onNavigate(sec.id);
        onClose();
      },
    }));

    const themeActions: PaletteAction[] = THEME_LIST.map((t) => ({
      id: `theme-${t.id}`,
      group: 'Themes',
      label: `Switch Theme: ${t.name}`,
      hint: theme === t.id ? 'Active' : t.tagline,
      run: () => {
        setTheme(t.id);
        onClose();
      },
    }));

    const utilityActions: PaletteAction[] = [
      {
        id: 'action-assistant',
        group: 'Actions',
        label: 'Open AI Portfolio Assistant',
        hint: 'Gemini AI',
        run: () => {
          onClose();
          onOpenAssistant();
        },
      },
      {
        id: 'action-resume',
        group: 'Actions',
        label: 'Open Resume Preview',
        hint: 'PDF / Print',
        run: () => {
          onClose();
          onOpenResume();
        },
      },
      {
        id: 'action-secret',
        group: 'Easter Egg',
        label: 'Reveal Hidden Developer Message',
        hint: 'Dev Note',
        run: () => {
          setSecretRevealed(true);
        },
      },
    ];

    return [...themeActions, ...utilityActions, ...sectionActions];
  }, [onClose, onNavigate, onOpenAssistant, onOpenResume, setTheme, theme]);

  const filteredActions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q) ||
        (item.hint && item.hint.toLowerCase().includes(q))
    );
  }, [actions, query]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-[70] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/65 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-strong)] shadow-[var(--shadow-card)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]">
          <Search className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
          <label htmlFor="command-palette-search" className="sr-only">
            Search commands, sections, or themes
          </label>
          <input
            ref={inputRef}
            id="command-palette-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to section, switch theme, or run action..."
            className="flex-1 bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close command palette"
            className="w-8 h-8 rounded-lg hover:bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {secretRevealed && (
          <div className="mx-3 mt-3 p-3.5 rounded-xl bg-[var(--accent-soft)] border border-[var(--border-strong)] text-xs text-[var(--text-primary)] space-y-1">
            <p className="font-mono font-semibold text-[var(--accent)] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Hidden Developer Note</span>
            </p>
            <p className="leading-relaxed text-[var(--text-secondary)]">
              &quot;Great engineering starts with curiosity, clean fundamentals, and building
              things that genuinely help people.&quot; — Thanks for exploring with Ctrl+K!
            </p>
          </div>
        )}

        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length > 0 ? (
            filteredActions.map((action) => (
              <button
                key={action.id}
                type="button"
                onClick={action.run}
                className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {action.group === 'Themes' ? (
                    <Palette className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                  ) : action.group === 'Actions' ? (
                    action.id === 'action-resume' ? (
                      <FileText
                        className="w-4 h-4 text-[var(--accent)] shrink-0"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bot className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                    )
                  ) : action.group === 'Easter Egg' ? (
                    <Sparkles
                      className="w-4 h-4 text-[var(--accent-secondary)] shrink-0"
                      aria-hidden="true"
                    />
                  ) : (
                    <Compass
                      className="w-4 h-4 text-[var(--text-muted)] shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  <span className="text-sm text-[var(--text-primary)] truncate">
                    {action.label}
                  </span>
                </div>
                {action.hint && (
                  <span className="font-mono text-[11px] text-[var(--text-muted)] shrink-0">
                    {action.hint}
                  </span>
                )}
              </button>
            ))
          ) : (
            <p className="p-6 text-center text-xs text-[var(--text-muted)]">
              No matching command found. Try &quot;space&quot;, &quot;github&quot;, or &quot;projects&quot;.
            </p>
          )}
        </div>

        <div className="px-4 py-2 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
          <span>Click an item to execute</span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
}
