import { Command } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import type { SectionId } from './Navbar';

interface FooterProps {
  onNavigate: (section: SectionId) => void;
  onOpenCommandPalette: () => void;
}

const FOOTER_SECTIONS: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'now', label: 'Exploring' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'terminal', label: 'Terminal' },
  { id: 'contact', label: 'Contact' },
];

export function Footer({ onNavigate, onOpenCommandPalette }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 theme-surface">
      <div className="site-container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
          <p>
            &copy; {year} {PROFILE.name} · B.Tech CSE-AIML, {PROFILE.shortUniversity}
          </p>
          <span aria-hidden="true" className="hidden sm:inline">
            ·
          </span>
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--accent)] hover:underline cursor-pointer"
          >
            <Command className="w-3 h-3" aria-hidden="true" />
            <span>Ctrl+K Palette</span>
          </button>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {FOOTER_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(section.id);
              }}
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
