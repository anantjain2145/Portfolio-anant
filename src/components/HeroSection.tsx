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
      className="relative pt-10 pb-16 sm:pt-14 sm:pb-24"
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
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
              className="text-4xl sm:text-5xl lg:text-[58px] font-semibold tracking-tight leading-[1.08] text-balance text-[var(--text-primary)]"
            >
              {PROFILE.name}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[var(--accent)] flex items-center gap-2">
              <Brain className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>CSE-AIML Student &amp; Aspiring Agentic AI Engineer</span>
            </p>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
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
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-primary)] text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
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
                className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <Github className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                <span>GitHub</span>
              </a>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <Linkedin className="w-4 h-4 text-[var(--accent-secondary)]" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Interactive Focus Deck: Switch between Core Tracks & Python Init */}
          <div className="rounded-2xl bg-[var(--bg-card)] backdrop-blur-md border border-[var(--border-subtle)] overflow-hidden shadow-[var(--shadow-card)] theme-surface">
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

        {/* Right Column: Interactive Orbital Neural Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex items-center justify-center"
        >
          <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center p-5">
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
            <div className="relative z-10 w-[72%] aspect-square rounded-full overflow-hidden bg-[#050816] border-2 border-[var(--border-strong)] shadow-[var(--shadow-glow)] flex items-center justify-center">
              {!imgError ? (
                <img
                  src={PROFILE.heroNeuralImage}
                  alt="Digital neural network mesh representing artificial intelligence and autonomous systems"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
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
        </motion.div>
      </div>

      {/* Key Highlights Strip */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[var(--bg-card)] backdrop-blur-md border border-[var(--border-subtle)] shadow-[var(--shadow-card)] theme-surface">
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

        <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[var(--bg-card)] backdrop-blur-md border border-[var(--border-subtle)] shadow-[var(--shadow-card)] theme-surface">
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

        <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[var(--bg-card)] backdrop-blur-md border border-[var(--border-subtle)] shadow-[var(--shadow-card)] theme-surface">
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
