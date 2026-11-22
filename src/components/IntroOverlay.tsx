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
  { cx: 120, cy: 280, r: 4, color: '#947dff' },
  { cx: 160, cy: 120, r: 3.5, color: '#00d2fd' },
  { cx: 280, cy: 180, r: 5.5, color: '#cabeff' },
  { cx: 400, cy: 95, r: 4, color: '#00d2fd' },
  { cx: 450, cy: 240, r: 6, color: '#a2e7ff' },
  { cx: 340, cy: 340, r: 4, color: '#947dff' },
  { cx: 520, cy: 310, r: 4.5, color: '#cabeff' },
  { cx: 620, cy: 140, r: 5.5, color: '#00d2fd' },
  { cx: 700, cy: 320, r: 4, color: '#947dff' },
  { cx: 780, cy: 220, r: 4, color: '#a2e7ff' },
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
    }, 2850);

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
        exit: { opacity: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
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
            transition: { duration: 0.65, ease: [0.77, 0, 0.175, 1] },
          },
        }}
        className="absolute inset-x-0 top-0 h-1/2 bg-[#0b0e15] border-b border-white/[0.06]"
      />

      {/* Bottom Split Curtain */}
      <motion.div
        aria-hidden="true"
        variants={{
          initial: { y: '0%' },
          animate: { y: '0%' },
          exit: {
            y: '100%',
            transition: { duration: 0.65, ease: [0.77, 0, 0.175, 1] },
          },
        }}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#0b0e15] border-t border-white/[0.06]"
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
            transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
          },
        }}
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#00d2fd] to-transparent z-20"
      />

      {/* Neural Constellation Drawing SVG + Ambient Glows */}
      <motion.div
        aria-hidden="true"
        variants={{
          initial: { opacity: 1 },
          animate: { opacity: 1 },
          exit: { opacity: 0, scale: 1.06, transition: { duration: 0.35 } },
        }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#947dff]/15 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-[#00d2fd]/12 blur-3xl" />

        <svg
          viewBox="0 0 900 440"
          className="w-full max-w-4xl opacity-45"
          fill="none"
        >
          {NEURAL_PATHS.map((d, index) => (
            <motion.path
              key={d}
              d={d}
              stroke={index % 2 === 0 ? '#947dff' : '#00d2fd'}
              strokeOpacity="0.45"
              strokeWidth="1.25"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 1.15, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.3, delay: index * 0.1 },
              }}
            />
          ))}

          {NEURAL_NODES.map((node, index) => (
            <motion.circle
              key={`${node.cx}-${node.cy}`}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill={node.color}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.35, 1], opacity: [0, 1, 0.85] }}
              transition={{
                duration: 0.5,
                delay: 0.25 + index * 0.06,
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
            transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
          },
        }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl"
      >
        {/* Rotating Kinetic Orbit + AJ Monogram */}
        <div className="relative flex items-center justify-center w-24 h-24 mb-6">
          <motion.svg
            viewBox="0 0 96 96"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 90, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.circle
              cx="48"
              cy="48"
              r="44"
              fill="none"
              stroke="url(#intro-orbit)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
            <defs>
              <linearGradient id="intro-orbit" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
                <stop stopColor="#947dff" />
                <stop offset="0.5" stopColor="#cabeff" />
                <stop offset="1" stopColor="#00d2fd" />
              </linearGradient>
            </defs>
          </motion.svg>

          <motion.div
            initial={{ scale: 0.65, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <MonogramLogo className="w-14 h-14 rounded-2xl shadow-[0_0_28px_rgba(148,125,255,0.35)]" />
          </motion.div>
        </div>

        {/* Staggered Masked Character Reveal for "Anant Jain" */}
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
                  duration: 0.45,
                  delay: 0.25 + idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block text-[#e0e2ed]"
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
                  duration: 0.45,
                  delay: 0.46 + idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block bg-gradient-to-r from-[#cabeff] to-[#a2e7ff] bg-clip-text text-transparent"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Kinetic Laser Hairline Sweep */}
        <motion.div
          aria-hidden="true"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="my-5 h-[1px] w-44 sm:w-64 origin-center bg-gradient-to-r from-transparent via-[#a2e7ff] to-transparent"
        />

        {/* Role & Academic Identity */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2"
        >
          <p className="text-base sm:text-xl font-medium text-[#e6deff]">
            Aspiring {PROFILE.careerGoal}
          </p>

          <p className="font-mono text-xs sm:text-sm text-[#938ea1]">
            B.Tech CSE-AIML · {PROFILE.university}
          </p>

          {/* Cycling Focus Track */}
          <div className="h-6 overflow-hidden flex items-center justify-center pt-1">
            <motion.span
              key={FOCUS_PILLARS[pillarIndex]}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs tracking-wider uppercase text-[#a2e7ff]"
            >
              {FOCUS_PILLARS[pillarIndex]}
            </motion.span>
          </div>
        </motion.div>

        {/* Kinetic Loading Track & Enter Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.75 }}
          className="mt-8 flex flex-col items-center gap-5"
        >
          <div className="w-48 sm:w-56 h-[2px] rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.05, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full origin-left bg-gradient-to-r from-[#947dff] via-[#cabeff] to-[#00d2fd]"
            />
          </div>

          <button
            type="button"
            onClick={onComplete}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#181b23]/90 hover:bg-[#272a32] border border-white/10 hover:border-[#00d2fd]/40 text-xs font-mono text-[#c9c4d8] hover:text-[#e0e2ed] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
          >
            <span>Enter Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#a2e7ff]" aria-hidden="true" />
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
