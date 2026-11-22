import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'motion/react';
import { Navbar, type SectionId } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { NowSection } from './components/NowSection';
import { JourneySection } from './components/JourneySection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GitHubSection } from './components/GitHubSection';
import { PersonalitySection } from './components/PersonalitySection';
import { DeveloperTerminalSection } from './components/DeveloperTerminalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ResumeModal } from './components/ResumeModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { IntroOverlay } from './components/IntroOverlay';
import { SpaceBackdrop } from './components/SpaceBackdrop';
import { PortfolioAssistant } from './components/PortfolioAssistant';
import { CommandPalette } from './components/CommandPalette';
import { NotFoundView } from './components/NotFoundView';

const SECTION_IDS: SectionId[] = [
  'home',
  'about',
  'now',
  'journey',
  'skills',
  'projects',
  'github',
  'personality',
  'terminal',
  'contact',
];

function isRootPath(pathname: string): boolean {
  return pathname === '/' || pathname === '/index.html' || pathname === '';
}

export default function App() {
  const [pathname, setPathname] = useState<string>(() => window.location.pathname);
  const [showIntro, setShowIntro] = useState<boolean>(() => isRootPath(window.location.pathname));
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [assistantOpenSignal, setAssistantOpenSignal] = useState(0);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setPaletteOpen((prev) => !prev);
      } else if (event.key === 'Escape' && paletteOpen) {
        setPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [paletteOpen]);

  useEffect(() => {
    if (!isRootPath(pathname)) return;
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const topId = visibleEntries[0].target.id as SectionId;
          setActiveSection(topId);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const handleNavigate = useCallback((sectionId: SectionId) => {
    setActiveSection(sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  const handleReturnHome = useCallback(() => {
    window.history.pushState({}, '', '/');
    setPathname('/');
    setShowIntro(false);
  }, []);

  if (!isRootPath(pathname)) {
    return (
      <MotionConfig reducedMotion="user">
        <NotFoundView pathname={pathname} onReturnHome={handleReturnHome} />
      </MotionConfig>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] theme-surface">
        <SpaceBackdrop />

        <AnimatePresence>
          {showIntro && <IntroOverlay onComplete={handleIntroComplete} />}
        </AnimatePresence>

        <ScrollProgressBar />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--accent)] focus:text-[var(--accent-contrast)] focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>

        <Navbar
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        <main
          id="main-content"
          className="relative z-10 flex-1 site-container pb-12"
        >
          <HeroSection onNavigate={handleNavigate} />
          <AboutSection />
          <NowSection />
          <JourneySection />
          <SkillsSection />
          <ProjectsSection />
          <GitHubSection />
          <PersonalitySection />
          <DeveloperTerminalSection />
          <ContactSection onOpenResume={() => setResumeModalOpen(true)} />
        </main>

        <div className="relative z-10">
          <Footer
            onNavigate={handleNavigate}
            onOpenCommandPalette={() => setPaletteOpen(true)}
          />
        </div>

        <PortfolioAssistant externalOpenSignal={assistantOpenSignal} />
        <BackToTop />

        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />

        <CommandPalette
          isOpen={paletteOpen}
          onClose={() => setPaletteOpen(false)}
          onNavigate={handleNavigate}
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenAssistant={() => setAssistantOpenSignal((n) => n + 1)}
        />
      </div>
    </MotionConfig>
  );
}
