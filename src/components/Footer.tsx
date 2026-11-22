import { PROFILE } from '../data/portfolioData';
import type { SectionId } from './Navbar';

interface FooterProps {
  onNavigate: (section: SectionId) => void;
}

const FOOTER_SECTIONS: SectionId[] = [
  'home',
  'about',
  'journey',
  'skills',
  'projects',
  'terminal',
  'contact',
];

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-[#0b0e15]/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#938ea1]">
        <p className="text-center sm:text-left">
          &copy; {year} {PROFILE.name} · B.Tech CSE-AIML, {PROFILE.shortUniversity}
        </p>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-5">
          {FOOTER_SECTIONS.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(section);
              }}
              className="capitalize hover:text-[#e0e2ed] transition-colors"
            >
              {section}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
