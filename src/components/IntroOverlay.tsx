import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { MonogramLogo } from './MonogramLogo';

interface IntroOverlayProps {
  onComplete: () => void;
}

export function IntroOverlay({ onComplete }: IntroOverlayProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = window.setTimeout(() => {
      onComplete();
    }, 2400);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onComplete]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio welcome animation"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -24, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[100] bg-[#0b0e15] flex flex-col items-center justify-center px-6 overflow-hidden select-none"
    >
      {/* Atmospheric background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#947dff]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/3 right-1/3 translate-x-1/2 translate-y-1/2 w-72 h-72 rounded-full bg-[#00d2fd]/12 blur-3xl"
      />

      {/* Center Identity Sequence */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl space-y-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <MonogramLogo className="w-16 h-16 shadow-[0_0_28px_rgba(148,125,255,0.3)] rounded-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2.5"
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a2e7ff]">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight bg-gradient-to-r from-[#e0e2ed] via-[#e6deff] to-[#b4ebff] bg-clip-text text-transparent">
            {PROFILE.name}
          </h1>

          <p className="text-base sm:text-lg font-medium text-[#cabeff]">
            Aspiring {PROFILE.careerGoal}
          </p>

          <p className="font-mono text-xs sm:text-sm text-[#938ea1]">
            B.Tech CSE-AIML · {PROFILE.university}
          </p>
        </motion.div>

        {/* Kinetic Progress Track */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="w-52 sm:w-64 pt-2 space-y-2"
        >
          <div className="h-[3px] w-full rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full origin-left bg-gradient-to-r from-[#947dff] via-[#cabeff] to-[#00d2fd]"
            />
          </div>
          <p className="font-mono text-[11px] text-[#938ea1]">
            AI · Machine Learning · Software Development
          </p>
        </motion.div>
      </div>

      {/* Skip Intro Action */}
      <motion.button
        type="button"
        onClick={onComplete}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="mt-10 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#181b23] hover:bg-[#272a32] border border-white/10 text-xs font-mono text-[#c9c4d8] hover:text-[#e0e2ed] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
      >
        <span>Enter Portfolio</span>
        <ArrowRight className="w-3.5 h-3.5 text-[#a2e7ff]" aria-hidden="true" />
      </motion.button>
    </motion.div>
  );
}
