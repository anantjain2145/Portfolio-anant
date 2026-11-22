import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Brain,
  Check,
  Cloud,
  Code2,
  Copy,
  Cpu,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Sparkles,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { HERO_PYTHON_SNIPPET, PROFILE } from '../data/portfolioData';
import type { SectionId } from './Navbar';

interface HeroSectionProps {
  onNavigate: (section: SectionId) => void;
}

const ORBIT_SATELLITES = [
  { label: 'Agentic AI', angle: 28, primary: true },
  { label: 'Python & ML', angle: 135, primary: false },
  { label: 'C Systems', angle: 225, primary: true },
  { label: 'Cloud & Web', angle: 320, primary: false },
];

function HeroThemeVisual({
  imgError,
  onImgError,
}: {
  imgError: boolean;
  onImgError: () => void;
}) {
  const { theme } = useTheme();

  if (theme === 'professional') {
    return (
      <div className="relative w-full max-w-[460px] xl:max-w-[500px] rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] p-6 shadow-[var(--shadow-card)] space-y-5 theme-surface">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent)]">
              Engineering Architecture
            </p>
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              AI &amp; Systems Blueprint
            </p>
          </div>
          <span className="font-mono text-xs text-[var(--text-muted)]">CSE-AIML</span>
        </div>

        <svg viewBox="0 0 320 210" className="w-full h-48" aria-hidden="true">
          <defs>
            <pattern id="prof-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="320" height="210" rx="8" fill="#f8fafc" stroke="#e5e7eb" />
          <rect width="320" height="210" rx="8" fill="url(#prof-grid)" />

          {/* Clean System Flow Diagram */}
          <g stroke="#2563eb" strokeWidth="1.5" opacity="0.65">
            <line x1="66" y1="62" x2="160" y2="105" />
            <line x1="66" y1="148" x2="160" y2="105" />
            <line x1="160" y1="105" x2="254" y2="62" />
            <line x1="160" y1="105" x2="254" y2="148" />
          </g>

          <rect x="24" y="42" width="84" height="40" rx="6" fill="#ffffff" stroke="#cbd5e1" />
          <text x="66" y="66" textAnchor="middle" fontSize="11" fill="#0f172a" fontFamily="monospace">
            C Systems
          </text>

          <rect x="24" y="128" width="84" height="40" rx="6" fill="#ffffff" stroke="#cbd5e1" />
          <text x="66" y="152" textAnchor="middle" fontSize="11" fill="#0f172a" fontFamily="monospace">
            Python ML
          </text>

          <rect x="116" y="82" width="88" height="46" rx="8" fill="#2563eb" />
          <text x="160" y="109" textAnchor="middle" fontSize="11.5" fill="#ffffff" fontWeight="bold" fontFamily="monospace">
            Agentic AI
          </text>

          <rect x="212" y="42" width="84" height="40" rx="6" fill="#ffffff" stroke="#cbd5e1" />
          <text x="254" y="66" textAnchor="middle" fontSize="11" fill="#0f172a" fontFamily="monospace">
            Cloud
          </text>

          <rect x="212" y="128" width="84" height="40" rx="6" fill="#ffffff" stroke="#cbd5e1" />
          <text x="254" y="152" textAnchor="middle" fontSize="11" fill="#0f172a" fontFamily="monospace">
            Web Stack
          </text>
        </svg>

        <div className="grid grid-cols-2 gap-2.5 text-xs">
          <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
            <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase">Focus</p>
            <p className="font-semibold text-[var(--text-primary)] mt-0.5">Autonomous Systems</p>
          </div>
          <div className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
            <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase">Base</p>
            <p className="font-semibold text-[var(--text-primary)] mt-0.5">GLA University</p>
          </div>
        </div>
      </div>
    );
  }

  if (theme === 'forest') {
    return (
      <div className="relative w-full max-w-[440px] xl:max-w-[480px] aspect-square flex items-center justify-center p-5">
        {/* Canopy Growth Rings */}
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 56, repeat: Infinity, ease: 'linear' }}
          style={{ borderColor: 'var(--border-strong)' }}
          className="absolute inset-2 rounded-full border border-dashed"
        />
        <div
          aria-hidden="true"
          style={{ borderColor: 'var(--border-subtle)' }}
          className="absolute inset-8 rounded-full border"
        />

        {ORBIT_SATELLITES.map((sat) => {
          const rad = (sat.angle * Math.PI) / 180;
          const xPct = 50 + Math.cos(rad) * 45;
          const yPct = 50 + Math.sin(rad) * 45;
          return (
            <div
              key={sat.label}
              style={{ left: `${xPct}%`, top: `${yPct}%` }}
              className={`hidden sm:flex -translate-x-1/2 -translate-y-1/2 absolute z-20 px-2.5 py-1 rounded-lg bg-[var(--bg-secondary)]/95 backdrop-blur-md border border-[var(--border-strong)] text-[11px] font-mono whitespace-nowrap shadow-[var(--shadow-card)] ${
                sat.primary ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'
              }`}
            >
              {sat.label}
            </div>
          );
        })}

        {/* Living Forest Canopy & Rooted Neural Tree Core */}
        <div className="relative z-10 w-[76%] aspect-square rounded-full overflow-hidden bg-[var(--hero-core-bg)] border-2 border-[var(--border-strong)] shadow-[var(--shadow-glow)] flex items-center justify-center">
          <svg viewBox="0 0 260 260" className="w-full h-full" aria-hidden="true">
            <defs>
              <radialGradient id="forest-sun" cx="65%" cy="22%" r="70%">
                <stop offset="0%" stopColor="#a3e635" stopOpacity="0.34" />
                <stop offset="55%" stopColor="#14532d" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#071a12" stopOpacity="0.96" />
              </radialGradient>
            </defs>
            <rect width="260" height="260" fill="url(#forest-sun)" />

            {/* Mossy Forest Floor */}
            <path d="M0 212C65 198 195 198 260 212V260H0Z" fill="#0f2e1f" />
            <path d="M0 225C80 215 180 215 260 225V260H0Z" fill="#14532d" opacity="0.55" />

            {/* Roots */}
            <g stroke="#78350f" strokeWidth="3.5" strokeLinecap="round" fill="none">
              <path d="M126 210C114 222 96 228 78 232" />
              <path d="M134 210C148 222 166 228 184 232" />
              <path d="M130 210V235" />
            </g>

            {/* Tree Trunk & Branches */}
            <g stroke="#92400e" strokeLinecap="round" fill="none">
              <path d="M130 212V118" strokeWidth="10" />
              <path d="M130 155C110 138 92 126 70 116" strokeWidth="5.5" />
              <path d="M130 145C152 128 172 118 194 108" strokeWidth="5.5" />
              <path d="M130 124C116 104 106 90 96 72" strokeWidth="4" />
              <path d="M130 124C144 104 156 90 168 72" strokeWidth="4" />
            </g>

            {/* Layered Canopy Foliage */}
            <g className="animate-leaf-sway">
              <circle cx="80" cy="112" r="34" fill="#15803d" opacity="0.88" />
              <circle cx="182" cy="108" r="34" fill="#166534" opacity="0.88" />
              <circle cx="130" cy="76" r="42" fill="#22c55e" opacity="0.82" />
              <circle cx="105" cy="92" r="28" fill="#4ade80" opacity="0.52" />
              <circle cx="156" cy="90" r="26" fill="#a3e635" opacity="0.48" />
            </g>

            {/* Illuminated Neural Leaf Synapses */}
            <g stroke="#bef264" strokeWidth="1.2" opacity="0.65">
              <line x1="82" y1="106" x2="130" y2="76" />
              <line x1="130" y1="76" x2="180" y2="104" />
              <line x1="104" y1="68" x2="158" y2="68" />
            </g>
            {[
              [82, 106],
              [130, 76],
              [180, 104],
              [104, 68],
              [158, 68],
              [130, 118],
            ].map(([cx, cy], idx) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r={idx === 1 ? 5.5 : 4}
                fill={idx % 2 === 0 ? '#a3e635' : '#f0fdf4'}
              />
            ))}
          </svg>
        </div>
      </div>
    );
  }

  if (theme === 'ocean') {
    return (
      <div className="relative w-full max-w-[440px] xl:max-w-[480px] aspect-square flex items-center justify-center p-5">
        {/* Sonar Waves */}
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
          style={{ borderColor: 'var(--border-strong)' }}
          className="absolute inset-2 rounded-full border border-dashed"
        />
        <div
          aria-hidden="true"
          style={{ borderColor: 'var(--border-subtle)' }}
          className="absolute inset-8 rounded-full border"
        />

        {ORBIT_SATELLITES.map((sat) => {
          const rad = (sat.angle * Math.PI) / 180;
          const xPct = 50 + Math.cos(rad) * 45;
          const yPct = 50 + Math.sin(rad) * 45;
          return (
            <div
              key={sat.label}
              style={{ left: `${xPct}%`, top: `${yPct}%` }}
              className={`hidden sm:flex -translate-x-1/2 -translate-y-1/2 absolute z-20 px-2.5 py-1 rounded-lg bg-[var(--bg-secondary)]/95 backdrop-blur-md border border-[var(--border-strong)] text-[11px] font-mono whitespace-nowrap shadow-[var(--shadow-card)] ${
                sat.primary ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'
              }`}
            >
              {sat.label}
            </div>
          );
        })}

        {/* Underwater Bioluminescent Current & Sonar Core */}
        <div className="relative z-10 w-[76%] aspect-square rounded-full overflow-hidden bg-[var(--hero-core-bg)] border-2 border-[var(--border-strong)] shadow-[var(--shadow-glow)] flex items-center justify-center">
          <svg viewBox="0 0 260 260" className="w-full h-full" aria-hidden="true">
            <defs>
              <radialGradient id="ocean-depth" cx="50%" cy="28%" r="75%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.34" />
                <stop offset="60%" stopColor="#0b2c40" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#04131e" stopOpacity="1" />
              </radialGradient>
            </defs>
            <rect width="260" height="260" fill="url(#ocean-depth)" />

            {/* Sonar Rings */}
            <circle cx="130" cy="126" r="82" fill="none" stroke="#06b6d4" strokeOpacity="0.28" strokeDasharray="5 5" />
            <circle cx="130" cy="126" r="54" fill="none" stroke="#3b82f6" strokeOpacity="0.4" />
            <circle cx="130" cy="126" r="28" fill="none" stroke="#67e8f9" strokeOpacity="0.55" />

            {/* Flowing Ocean Waves */}
            <path
              d="M0 162C55 138 105 186 165 156C205 136 235 168 260 154V260H0Z"
              fill="#0b3550"
              opacity="0.72"
            />
            <path
              d="M0 186C60 165 120 205 180 182C215 168 240 192 260 184V260H0Z"
              fill="#06b6d4"
              opacity="0.26"
            />

            {/* Bioluminescent Nodes & Rising Bubbles */}
            <circle cx="130" cy="126" r="9" fill="#06b6d4" />
            <circle cx="130" cy="126" r="4" fill="#f0f9ff" />
            {[
              [78, 92, 4],
              [176, 86, 5],
              [96, 152, 3.5],
              [166, 146, 4.5],
              [142, 62, 3],
              [110, 52, 2.5],
            ].map(([cx, cy, r], idx) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke={idx % 2 === 0 ? '#67e8f9' : '#3b82f6'}
                strokeWidth="1.5"
              />
            ))}
          </svg>
        </div>
      </div>
    );
  }

  // SPACE THEME (Default)
  return (
    <div className="relative w-full max-w-[440px] xl:max-w-[480px] aspect-square flex items-center justify-center p-5">
      {/* Outer Orbital Ring */}
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
        style={{ borderColor: 'var(--border-strong)' }}
        className="absolute inset-2 rounded-full border border-dashed"
      >
        <span
          style={{ backgroundColor: 'var(--accent)' }}
          className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-[var(--shadow-glow)]"
        />
      </motion.div>

      {/* Inner Orbital Ring */}
      <motion.div
        aria-hidden="true"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        style={{ borderColor: 'var(--border-subtle)' }}
        className="absolute inset-8 rounded-full border"
      >
        <span
          style={{ backgroundColor: 'var(--accent-secondary)' }}
          className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
        />
      </motion.div>

      {/* Satellite Nodes */}
      {ORBIT_SATELLITES.map((sat) => {
        const rad = (sat.angle * Math.PI) / 180;
        const xPct = 50 + Math.cos(rad) * 45;
        const yPct = 50 + Math.sin(rad) * 45;
        return (
          <div
            key={sat.label}
            style={{ left: `${xPct}%`, top: `${yPct}%` }}
            className={`hidden sm:flex -translate-x-1/2 -translate-y-1/2 absolute z-20 px-2.5 py-1 rounded-lg bg-[var(--bg-secondary)]/95 backdrop-blur-md border border-[var(--border-strong)] text-[11px] font-mono whitespace-nowrap shadow-[var(--shadow-card)] ${
              sat.primary ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'
            }`}
          >
            {sat.label}
          </div>
        );
      })}

      {/* Core Neural Visual */}
      <div className="relative z-10 w-[72%] aspect-square rounded-full overflow-hidden bg-[var(--hero-core-bg)] border-2 border-[var(--border-strong)] shadow-[var(--shadow-glow)] flex items-center justify-center">
        {!imgError ? (
          <img
            src={PROFILE.heroNeuralImage}
            alt="Digital neural network mesh representing artificial intelligence and autonomous systems"
            referrerPolicy="no-referrer"
            onError={onImgError}
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <Brain className="w-16 h-16 text-[var(--accent)]" aria-hidden="true" />
        )}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/15 bg-gradient-to-t from-black/45 via-transparent to-transparent"
        />
      </div>
    </div>
  );
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [consoleView, setConsoleView] = useState<'pillars' | 'code'>('pillars');

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(HERO_PYTHON_SNIPPET);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard fallback not critical
    }
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative pt-14 pb-16 sm:pt-18 sm:pb-24"
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Left Column: Identity, Headline, CTAs & Interactive Focus Deck */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col space-y-6"
        >
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-secondary)]">
              GLA University, Mathura · B.Tech CSE (AI &amp; ML)
            </p>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-semibold tracking-tight leading-[1.08] text-balance text-[var(--text-primary)]"
            >
              {PROFILE.name}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[var(--accent)] flex items-center gap-2">
              <Brain className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>CSE-AIML Student &amp; Aspiring Agentic AI Engineer</span>
            </p>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              {PROFILE.heroBio}
            </p>
          </div>

          {/* Primary & Secondary CTAs + Social Profiles */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] text-sm font-semibold shadow-[var(--shadow-glow)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <span>Explore Projects</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl theme-card hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-primary)] text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <Mail className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
              <span>Contact Me</span>
            </button>

            <div className="flex items-center gap-2 pl-1">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl theme-card hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <Github className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                <span>GitHub</span>
              </a>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl theme-card hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <Linkedin className="w-4 h-4 text-[var(--accent-secondary)]" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Interactive Focus Deck: Switch between Core Tracks & Python Init */}
          <div className="theme-card border border-[var(--border-subtle)] overflow-hidden shadow-[var(--shadow-card)] theme-surface">
            <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
              <div className="inline-flex items-center gap-1 p-0.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => setConsoleView('pillars')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer whitespace-nowrap ${
                    consoleView === 'pillars'
                      ? 'bg-[var(--accent-soft)] text-[var(--accent)] font-medium'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Focus Matrix
                </button>
                <button
                  type="button"
                  onClick={() => setConsoleView('code')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer whitespace-nowrap ${
                    consoleView === 'code'
                      ? 'bg-[var(--accent-secondary-soft)] text-[var(--accent-secondary)] font-medium'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  ai_init.py
                </button>
              </div>

              {consoleView === 'code' ? (
                <button
                  type="button"
                  onClick={handleCopyCode}
                  aria-label="Copy Python snippet"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--bg-elevated)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                      <span className="text-[var(--accent)]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              ) : (
                <span className="font-mono text-[11px] text-[var(--text-muted)]">
                  4 Core Tracks
                </span>
              )}
            </div>

            {consoleView === 'pillars' ? (
              <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-3.5 space-y-1.5 hover:border-[var(--border-strong)] transition-colors">
                  <Sparkles className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                  <p className="text-xs font-semibold text-[var(--text-primary)]">Agentic AI</p>
                  <p className="font-mono text-[11px] text-[var(--text-muted)]">
                    Goal workflows
                  </p>
                </div>
                <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-3.5 space-y-1.5 hover:border-[var(--border-strong)] transition-colors">
                  <Brain className="w-4 h-4 text-[var(--accent-secondary)]" aria-hidden="true" />
                  <p className="text-xs font-semibold text-[var(--text-primary)]">AI &amp; ML</p>
                  <p className="font-mono text-[11px] text-[var(--text-muted)]">
                    Models &amp; search
                  </p>
                </div>
                <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-3.5 space-y-1.5 hover:border-[var(--border-strong)] transition-colors">
                  <Code2 className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                  <p className="text-xs font-semibold text-[var(--text-primary)]">Software</p>
                  <p className="font-mono text-[11px] text-[var(--text-muted)]">
                    C, Python &amp; Web
                  </p>
                </div>
                <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-3.5 space-y-1.5 hover:border-[var(--border-strong)] transition-colors">
                  <Cloud className="w-4 h-4 text-[var(--accent-secondary)]" aria-hidden="true" />
                  <p className="text-xs font-semibold text-[var(--text-primary)]">Cloud</p>
                  <p className="font-mono text-[11px] text-[var(--text-muted)]">
                    Azure foundations
                  </p>
                </div>
              </div>
            ) : (
              <pre className="p-4 overflow-x-auto bg-[var(--bg-code)] font-mono text-[13px] leading-relaxed text-[var(--text-primary)]">
                <code>
                  <span className="text-[var(--accent)]">from</span> agent_mesh{' '}
                  <span className="text-[var(--accent)]">import</span> NeuralAgent{'\n\n'}
                  <span className="text-[var(--accent-secondary)]">agent</span> = NeuralAgent(focus=
                  <span className="text-[var(--accent)]">&quot;agentic-ai&quot;</span>){'\n'}
                  <span className="text-[var(--accent-secondary)]">agent</span>.learn({'\n'}
                  {'    '}domain=
                  <span className="text-[var(--accent)]">
                    &quot;CSE-AIML @ GLA University&quot;
                  </span>
                  ,{'\n'}
                  {'    '}curiosity=<span className="text-[var(--accent)]">float</span>(
                  <span className="text-[var(--accent)]">&quot;inf&quot;</span>){'\n'}){'\n'}
                  <span className="text-[var(--text-muted)]">print</span>(
                  <span className="text-[var(--accent-secondary)]">
                    &quot;Ready to engineer intelligent systems.&quot;
                  </span>
                  )
                </code>
              </pre>
            )}
          </div>
        </motion.div>

        {/* Right Column: Theme-Specific Interactive Visual Anchor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex items-center justify-center"
        >
          <HeroThemeVisual imgError={imgError} onImgError={() => setImgError(true)} />
        </motion.div>
      </div>

      {/* Key Highlights Strip */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3.5 p-4 theme-card border border-[var(--border-subtle)] shadow-[var(--shadow-card)] theme-surface">
          <div className="w-10 h-10 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent)] shrink-0">
            <GraduationCap className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
              Education
            </p>
            <p className="text-sm font-medium text-[var(--text-primary)] truncate">
              1st Year B.Tech @ GLA University
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 p-4 theme-card border border-[var(--border-subtle)] shadow-[var(--shadow-card)] theme-surface">
          <div className="w-10 h-10 rounded-lg bg-[var(--accent-secondary-soft)] flex items-center justify-center text-[var(--accent-secondary)] shrink-0">
            <Brain className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
              Specialization
            </p>
            <p className="text-sm font-medium text-[var(--text-primary)] truncate">
              AI &amp; Machine Learning (CSE-AIML)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 p-4 theme-card border border-[var(--border-subtle)] shadow-[var(--shadow-card)] theme-surface">
          <div className="w-10 h-10 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent)] shrink-0">
            <Cpu className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
              Career Goal
            </p>
            <p className="text-sm font-medium text-[var(--text-primary)] truncate">
              Aspiring Agentic AI Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
