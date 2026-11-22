import { useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { MonogramLogo } from './MonogramLogo';

export type SectionId =
  | 'home'
  | 'about'
  | 'journey'
  | 'skills'
  | 'projects'
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
  { id: 'terminal', label: 'Terminal' },
  { id: 'contact', label: 'Contact' },
];

const MOBILE_NAV_ITEMS: { id: SectionId; label: string }[] = DESKTOP_NAV_ITEMS;

export function Navbar({ activeSection, onNavigate, onOpenResume }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id: SectionId) => {
    setMobileOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#10131b]/85 backdrop-blur-xl border-b border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
        >
          <MonogramLogo className="h-8 w-8 shrink-0" />
          <span className="text-base font-semibold tracking-tight text-[#e0e2ed]">
            Anant Jain
          </span>
        </a>

        {/* Zone 2: Single-line navigation links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-5 lg:gap-6">
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
                className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff] rounded ${
                  isActive ? 'text-[#cabeff]' : 'text-[#c9c4d8] hover:text-[#e0e2ed]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#947dff] to-[#00d2fd]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary action & Mobile toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#272a32] hover:bg-[#32353d] border border-white/10 hover:border-[#00d2fd]/40 text-xs font-medium text-[#e0e2ed] whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
          >
            <FileText className="w-3.5 h-3.5 text-[#a2e7ff]" aria-hidden="true" />
            <span>Resume</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#1d2027] border border-white/10 text-[#e0e2ed] hover:bg-[#272a32] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-white/[0.07] bg-[#10131b]/95 backdrop-blur-2xl px-5 py-4 space-y-1.5"
        >
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
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#272a32] text-[#cabeff]'
                    : 'text-[#c9c4d8] hover:bg-[#181b23] hover:text-[#e0e2ed]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="text-xs font-mono text-[#a2e7ff]">Active</span>}
              </a>
            );
          })}
          <div className="pt-2 border-t border-white/[0.07]">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#947dff]/20 border border-[#947dff]/35 text-sm font-medium text-[#e6deff] hover:bg-[#947dff]/30 transition-colors"
            >
              <FileText className="w-4 h-4 text-[#a2e7ff]" aria-hidden="true" />
              <span>Preview / Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
