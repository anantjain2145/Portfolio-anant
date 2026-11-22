import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, FileText, Menu, X } from 'lucide-react';
import { THEME_LIST, useTheme } from '../context/ThemeContext';
import { MonogramLogo } from './MonogramLogo';

export type SectionId =
  | 'home'
  | 'about'
  | 'now'
  | 'journey'
  | 'skills'
  | 'projects'
  | 'github'
  | 'personality'
  | 'terminal'
  | 'contact';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  onOpenResume: () => void;
}

const DESKTOP_NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
];

const MOBILE_NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'now', label: 'Exploring' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'personality', label: 'Beyond Code' },
  { id: 'terminal', label: 'Terminal' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ activeSection, onNavigate, onOpenResume }: NavbarProps) {
  const { theme, themeMeta, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const themeMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!themeMenuOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
        setThemeMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setThemeMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [themeMenuOpen]);

  const handleNavClick = (id: SectionId) => {
    setMobileOpen(false);
    setThemeMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--bg-header)] backdrop-blur-xl border-b border-[var(--border-subtle)] theme-surface">
      <div className="site-container h-16 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          <MonogramLogo className="h-8 w-8 shrink-0" />
          <span className="text-base font-semibold tracking-tight text-[var(--text-primary)]">
            Anant Jain
          </span>
        </a>

        {/* Primary Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-4 lg:gap-6">
          {DESKTOP_NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded ${
                  isActive
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, var(--accent), var(--accent-secondary))',
                    }}
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions Zone: Theme Switcher + Resume + Mobile Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Theme Switcher Dropdown */}
          <div className="relative" ref={themeMenuRef}>
            <button
              type="button"
              onClick={() => setThemeMenuOpen((prev) => !prev)}
              aria-expanded={themeMenuOpen}
              aria-haspopup="menu"
              aria-label={`Change website theme (current: ${themeMeta.name})`}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-medium text-[var(--text-primary)] whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] theme-surface"
            >
              <span aria-hidden="true" className="text-sm leading-none">
                {themeMeta.emoji}
              </span>
              <span className="hidden sm:inline">{themeMeta.name}</span>
              <span
                aria-hidden="true"
                className="w-2.5 h-2.5 rounded-full border border-[var(--border-strong)]"
                style={{ backgroundColor: themeMeta.previewAccent }}
              />
              <ChevronDown
                className={`w-3.5 h-3.5 text-[var(--text-muted)] transition-transform duration-150 ${
                  themeMenuOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {themeMenuOpen && (
              <div
                role="menu"
                aria-label="Select website theme"
                className="absolute right-0 mt-2 w-72 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-strong)] shadow-[var(--shadow-card)] p-2 z-50 backdrop-blur-xl theme-surface"
              >
                <div className="flex items-center justify-between px-2.5 py-1.5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                    Select Experience
                  </p>
                  <span className="font-mono text-[10px] text-[var(--accent)]">4 Worlds</span>
                </div>
                <div className="space-y-1.5">
                  {THEME_LIST.map((item) => {
                    const isSelected = theme === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        role="menuitemradio"
                        aria-checked={isSelected}
                        onClick={() => {
                          setTheme(item.id);
                          setThemeMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between gap-3 px-2.5 py-2.5 rounded-lg text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] border ${
                          isSelected
                            ? 'bg-[var(--accent-soft)] border-[var(--border-strong)] text-[var(--text-primary)]'
                            : 'border-transparent hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            aria-hidden="true"
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0 border"
                            style={{
                              backgroundColor: item.previewPrimary,
                              borderColor: item.previewAccent,
                            }}
                          >
                            {item.emoji}
                          </span>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <p className="text-xs font-semibold text-[var(--text-primary)] truncate">
                                {item.name}
                              </p>
                              <div aria-hidden="true" className="flex items-center gap-0.5 shrink-0">
                                <span
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: item.previewAccent }}
                                />
                                <span
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: item.previewAccentSecondary }}
                                />
                              </div>
                            </div>
                            <p className="text-[11px] text-[var(--text-muted)] truncate">
                              {item.tagline} · {item.scrollCompanion}
                            </p>
                          </div>
                        </div>

                        {isSelected && (
                          <Check className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-medium text-[var(--text-primary)] whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <FileText className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
            <span>Resume</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]/95 backdrop-blur-2xl px-5 py-4 space-y-3"
        >
          <div className="grid grid-cols-2 gap-1.5">
            {MOBILE_NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Quick Theme Selector */}
          <div className="pt-2 border-t border-[var(--border-subtle)] space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
              Theme
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {THEME_LIST.map((item) => {
                const isSelected = theme === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTheme(item.id)}
                    aria-pressed={isSelected}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--accent-soft)] border-[var(--border-strong)] text-[var(--text-primary)]'
                        : 'bg-[var(--bg-secondary)] border-[var(--border-subtle)] text-[var(--text-secondary)]'
                    }`}
                  >
                    <span aria-hidden="true">{item.emoji}</span>
                    <span className="truncate">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-2 border-t border-[var(--border-subtle)]">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] text-sm font-medium hover:brightness-110 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              <span>Preview / Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
