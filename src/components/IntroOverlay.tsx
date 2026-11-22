import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { MonogramLogo } from './MonogramLogo';

interface IntroOverlayProps {
  onComplete: () => void;
}

const FOCUS_PILLARS = [
  'Agentic AI Systems',
  'Machine Learning',
  'Software Engineering',
];

const FIRST_NAME = 'Anant'.split('');
const LAST_NAME = 'Jain'.split('');

const NEURAL_PATHS = [
  'M 120 280 L 280 180 L 450 240 L 620 140 L 780 220',
  'M 160 120 L 280 180 L 340 340 L 520 310 L 620 140',
  'M 280 180 L 400 95 L 620 140 L 700 320',
  'M 100 200 L 210 320 L 340 340 L 450 240 L 580 360',
];

const NEURAL_NODES = [
  { cx: 120, cy: 280, r: 4, primary: true },
  { cx: 160, cy: 120, r: 3.5, primary: false },
  { cx: 280, cy: 180, r: 5.5, primary: true },
  { cx: 400, cy: 95, r: 4, primary: false },
  { cx: 450, cy: 240, r: 6, primary: false },
  { cx: 340, cy: 340, r: 4, primary: true },
  { cx: 520, cy: 310, r: 4.5, primary: true },
  { cx: 620, cy: 140, r: 5.5, primary: false },
  { cx: 700, cy: 320, r: 4, primary: true },
  { cx: 780, cy: 220, r: 4, primary: false },
];

export function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const [pillarIndex, setPillarIndex] = useState(0);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const pillarTimer = window.setInterval(() => {
      setPillarIndex((prev) => (prev + 1) % FOCUS_PILLARS.length);
    }, 780);

    const completeTimer = window.setTimeout(() => {
      onComplete();
    }, 2600);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearInterval(pillarTimer);
      window.clearTimeout(completeTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onComplete]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio opening sequence"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Top Split Curtain */}
      <motion.div
        aria-hidden="true"
        variants={{
          initial: { y: '0%' },
          animate: { y: '0%' },
          exit: {
            y: '-100%',
            transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] },
          },
        }}
        className="absolute inset-x-0 top-0 h-1/2 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]"
      />

      {/* Bottom Split Curtain */}
      <motion.div
        aria-hidden="true"
        variants={{
          initial: { y: '0%' },
          animate: { y: '0%' },
          exit: {
            y: '100%',
            transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] },
          },
        }}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]"
      />

      {/* Animated Center Seam Glow on Exit */}
      <motion.div
        aria-hidden="true"
        variants={{
          initial: { scaleX: 0, opacity: 0 },
          animate: { scaleX: 0, opacity: 0 },
          exit: {
            scaleX: [0, 1, 1],
            opacity: [0, 1, 0],
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          },
        }}
        style={{
          backgroundImage:
            'linear-gradient(to right, transparent, var(--accent-secondary), transparent)',
        }}
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 z-20"
      />

      {/* Neural Constellation Drawing SVG */}
      <motion.div
        aria-hidden="true"
        variants={{
          initial: { opacity: 1 },
          animate: { opacity: 1 },
          exit: { opacity: 0, scale: 1.05, transition: { duration: 0.3 } },
        }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          style={{ backgroundColor: 'var(--glow-1)' }}
          className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
        />
        <div
          style={{ backgroundColor: 'var(--glow-2)' }}
          className="absolute bottom-1/3 right-1/3 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full blur-3xl"
        />

        <svg viewBox="0 0 900 440" className="w-full max-w-4xl opacity-45" fill="none">
          {NEURAL_PATHS.map((d, index) => (
            <motion.path
              key={d}
              d={d}
              style={{
                stroke: index % 2 === 0 ? 'var(--accent)' : 'var(--accent-secondary)',
              }}
              strokeOpacity="0.4"
              strokeWidth="1.25"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 1.05, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.25, delay: index * 0.08 },
              }}
            />
          ))}

          {NEURAL_NODES.map((node, index) => (
            <motion.circle
              key={`${node.cx}-${node.cy}`}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              style={{
                fill: node.primary ? 'var(--accent)' : 'var(--accent-secondary)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.3, 1], opacity: [0, 1, 0.85] }}
              transition={{
                duration: 0.45,
                delay: 0.2 + index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Center Stage Content */}
      <motion.div
        variants={{
          initial: { opacity: 1, scale: 1 },
          animate: { opacity: 1, scale: 1 },
          exit: {
            opacity: 0,
            scale: 0.94,
            transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
          },
        }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl"
      >
        <div className="relative flex items-center justify-center w-24 h-24 mb-6">
          <motion.svg
            viewBox="0 0 96 96"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 90, opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.circle
              cx="48"
              cy="48"
              r="44"
              fill="none"
              style={{ stroke: 'var(--accent)' }}
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.svg>

          <motion.div
            initial={{ scale: 0.65, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <MonogramLogo className="w-14 h-14 rounded-2xl shadow-[var(--shadow-glow)]" />
          </motion.div>
        </div>

        <h1
          aria-label={PROFILE.name}
          className="flex flex-wrap items-center justify-center gap-x-4 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-none"
        >
          <span className="inline-flex overflow-hidden py-1">
            {FIRST_NAME.map((char, idx) => (
              <motion.span
                key={`first-${idx}`}
                initial={{ y: '115%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block text-[var(--text-primary)]"
              >
                {char}
              </motion.span>
            ))}
          </span>

          <span className="inline-flex overflow-hidden py-1">
            {LAST_NAME.map((char, idx) => (
              <motion.span
                key={`last-${idx}`}
                initial={{ y: '115%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.4 + idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block text-[var(--accent)]"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.div
          aria-hidden="true"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
          style={{
            backgroundImage: 'linear-gradient(to right, transparent, var(--accent), transparent)',
          }}
          className="my-5 h-[1px] w-44 sm:w-64 origin-center"
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2"
        >
          <p className="text-base sm:text-xl font-medium text-[var(--text-primary)]">
            Aspiring {PROFILE.careerGoal}
          </p>

          <p className="font-mono text-xs sm:text-sm text-[var(--text-muted)]">
            B.Tech CSE-AIML · {PROFILE.university}
          </p>

          <div className="h-6 overflow-hidden flex items-center justify-center pt-1">
            <motion.span
              key={FOCUS_PILLARS[pillarIndex]}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs tracking-wider uppercase text-[var(--accent)]"
            >
              {FOCUS_PILLARS[pillarIndex]}
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.68 }}
          className="mt-8 flex flex-col items-center gap-5"
        >
          <div className="w-48 sm:w-56 h-[2px] rounded-full bg-[var(--border-subtle)] overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                backgroundImage:
                  'linear-gradient(to right, var(--accent), var(--accent-secondary))',
              }}
              className="h-full w-full origin-left"
            />
          </div>

          <button
            type="button"
            onClick={onComplete}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <span>Enter Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
