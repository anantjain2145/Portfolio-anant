import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'motion/react';
import { Navbar, type SectionId } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ResumeModal } from './components/ResumeModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { IntroOverlay } from './components/IntroOverlay';

const SECTION_IDS: SectionId[] = ['home', 'about', 'skills', 'projects', 'contact'];

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
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
  }, []);

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

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#10131b] text-[#e0e2ed]">
        <AnimatePresence>
          {showIntro && <IntroOverlay onComplete={handleIntroComplete} />}
        </AnimatePresence>

        <ScrollProgressBar />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#947dff] focus:text-[#1c0062] focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>

        <Navbar
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        <main id="main-content" className="flex-1 max-w-6xl w-full mx-auto px-5 sm:px-8">
          <HeroSection
            onNavigate={handleNavigate}
            onOpenResume={() => setResumeModalOpen(true)}
          />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection onOpenResume={() => setResumeModalOpen(true)} />
        </main>

        <Footer onNavigate={handleNavigate} />
        <BackToTop />

        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}
