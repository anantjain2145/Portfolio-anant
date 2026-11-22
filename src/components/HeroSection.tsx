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
  FileText,
  GraduationCap,
  Mail,
  Orbit,
  Sparkles,
} from 'lucide-react';
import { HERO_PYTHON_SNIPPET, PROFILE } from '../data/portfolioData';
import type { SectionId } from './Navbar';

interface HeroSectionProps {
  onNavigate: (section: SectionId) => void;
  onOpenResume: () => void;
}

const ORBIT_SATELLITES = [
  { label: 'Agentic AI', angle: 25, color: 'text-[#cabeff] border-[#947dff]/45' },
  { label: 'Python', angle: 135, color: 'text-[#a2e7ff] border-[#00d2fd]/45' },
  { label: 'C Systems', angle: 225, color: 'text-[#e6deff] border-[#cabeff]/40' },
  { label: 'Cloud & Web', angle: 320, color: 'text-[#b4ebff] border-[#3cd7ff]/40' },
];

export function HeroSection({ onNavigate, onOpenResume }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [consoleView, setConsoleView] = useState<'code' | 'pillars'>('pillars');

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
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Cosmic Identity, Visual Cards & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col space-y-6"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#a2e7ff]">
              <Orbit className="w-4 h-4 text-[#cabeff]" aria-hidden="true" />
              <span>GLA University, Mathura · B.Tech CSE-AIML</span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[58px] font-semibold tracking-tight leading-[1.08] text-balance bg-gradient-to-r from-[#e0e2ed] via-[#e6deff] to-[#b4ebff] bg-clip-text text-transparent"
            >
              {PROFILE.name}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[#a2e7ff] flex items-center gap-2">
              <Brain className="w-5 h-5 text-[#cabeff] shrink-0" aria-hidden="true" />
              <span>Aspiring Agentic AI Engineer</span>
            </p>

            <p className="text-sm sm:text-base text-[#c9c4d8] leading-relaxed max-w-xl">
              Exploring intelligent autonomous systems, machine learning, and modern software
              engineering to turn ideas into real-world technology.
            </p>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#947dff] via-[#613de0] to-[#7c5cfc] text-[#f5f7fa] text-sm font-medium shadow-[0_0_24px_-4px_rgba(124,92,252,0.55)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
            >
              <span>Explore My Work</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#181b23]/90 hover:bg-[#272a32] border border-white/10 hover:border-[#00d2fd]/45 text-[#e0e2ed] text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
            >
              <Mail className="w-4 h-4 text-[#a2e7ff]" aria-hidden="true" />
              <span>Let&apos;s Connect</span>
            </button>

            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#181b23]/60 hover:bg-white/[0.06] border border-white/10 text-[#c9c4d8] hover:text-[#e0e2ed] text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
            >
              <FileText className="w-4 h-4 text-[#cabeff]" aria-hidden="true" />
              <span>Resume</span>
            </button>
          </div>

          {/* Interactive Visual Deck: Switch between Focus Pillars & Python Init */}
          <div className="rounded-2xl bg-[#181b23]/85 backdrop-blur-md border border-white/[0.08] overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0b0e15]/80 border-b border-white/[0.06]">
              <div className="inline-flex items-center gap-1 p-0.5 rounded-lg bg-[#181b23] border border-white/[0.06]">
                <button
                  type="button"
                  onClick={() => setConsoleView('pillars')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                    consoleView === 'pillars'
                      ? 'bg-[#272a32] text-[#a2e7ff]'
                      : 'text-[#938ea1] hover:text-[#e0e2ed]'
                  }`}
                >
                  Focus Matrix
                </button>
                <button
                  type="button"
                  onClick={() => setConsoleView('code')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                    consoleView === 'code'
                      ? 'bg-[#272a32] text-[#cabeff]'
                      : 'text-[#938ea1] hover:text-[#e0e2ed]'
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
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#272a32] hover:bg-[#32353d] text-xs font-mono text-[#c9c4d8] hover:text-[#e0e2ed] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#a2e7ff]" aria-hidden="true" />
                      <span className="text-[#a2e7ff]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              ) : (
                <span className="font-mono text-[11px] text-[#938ea1]">4 Core Tracks</span>
              )}
            </div>

            {consoleView === 'pillars' ? (
              <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-xl bg-[#0b0e15]/80 border border-white/[0.06] p-3.5 space-y-2 hover:border-[#947dff]/40 transition-colors">
                  <Sparkles className="w-4 h-4 text-[#cabeff]" aria-hidden="true" />
                  <p className="text-xs font-semibold text-[#e0e2ed]">Agentic AI</p>
                  <p className="font-mono text-[11px] text-[#938ea1]">Autonomous goal loops</p>
                </div>
                <div className="rounded-xl bg-[#0b0e15]/80 border border-white/[0.06] p-3.5 space-y-2 hover:border-[#00d2fd]/40 transition-colors">
                  <Brain className="w-4 h-4 text-[#a2e7ff]" aria-hidden="true" />
                  <p className="text-xs font-semibold text-[#e0e2ed]">AI &amp; ML</p>
                  <p className="font-mono text-[11px] text-[#938ea1]">Models &amp; search</p>
                </div>
                <div className="rounded-xl bg-[#0b0e15]/80 border border-white/[0.06] p-3.5 space-y-2 hover:border-[#947dff]/40 transition-colors">
                  <Code2 className="w-4 h-4 text-[#e6deff]" aria-hidden="true" />
                  <p className="text-xs font-semibold text-[#e0e2ed]">Software</p>
                  <p className="font-mono text-[11px] text-[#938ea1]">C, Python &amp; Web</p>
                </div>
                <div className="rounded-xl bg-[#0b0e15]/80 border border-white/[0.06] p-3.5 space-y-2 hover:border-[#00d2fd]/40 transition-colors">
                  <Cloud className="w-4 h-4 text-[#b4ebff]" aria-hidden="true" />
                  <p className="text-xs font-semibold text-[#e0e2ed]">Cloud</p>
                  <p className="font-mono text-[11px] text-[#938ea1]">Scalable hosting</p>
                </div>
              </div>
            ) : (
              <pre className="p-4 overflow-x-auto font-mono text-[13px] leading-relaxed text-[#e0e2ed]">
                <code>
                  <span className="text-[#cabeff]">from</span> agent_mesh{' '}
                  <span className="text-[#cabeff]">import</span> NeuralAgent{'\n\n'}
                  <span className="text-[#a2e7ff]">agent</span> = NeuralAgent(focus=
                  <span className="text-[#b4ebff]">&quot;agentic-ai&quot;</span>){'\n'}
                  <span className="text-[#a2e7ff]">agent</span>.learn({'\n'}
                  {'    '}domain=
                  <span className="text-[#b4ebff]">&quot;CSE-AIML @ GLA University&quot;</span>,
                  {'\n'}
                  {'    '}curiosity=<span className="text-[#cabeff]">float</span>(
                  <span className="text-[#b4ebff]">&quot;inf&quot;</span>){'\n'}){'\n'}
                  <span className="text-[#c1c6d7]">print</span>(
                  <span className="text-[#b4ebff]">
                    &quot;Ready to engineer intelligent systems.&quot;
                  </span>
                  )
                </code>
              </pre>
            )}
          </div>
        </motion.div>

        {/* Right Column: Cosmic Orbital Gyroscope + Neural Core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex items-center justify-center"
        >
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-5">
            {/* Outer Orbital Ring (Slow rotation) */}
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-2 rounded-full border border-dashed border-[#947dff]/35"
            >
              <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#947dff] shadow-[0_0_12px_#947dff]" />
            </motion.div>

            {/* Inner Orbital Ring (Counter-rotation) */}
            <motion.div
              aria-hidden="true"
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-8 rounded-full border border-[#00d2fd]/25"
            >
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#00d2fd] shadow-[0_0_12px_#00d2fd]" />
            </motion.div>

            {/* Satellite Nodes Around Orbit */}
            {ORBIT_SATELLITES.map((sat) => {
              const rad = (sat.angle * Math.PI) / 180;
              const xPct = 50 + Math.cos(rad) * 45;
              const yPct = 50 + Math.sin(rad) * 45;
              return (
                <div
                  key={sat.label}
                  style={{ left: `${xPct}%`, top: `${yPct}%` }}
                  className={`hidden sm:flex -translate-x-1/2 -translate-y-1/2 absolute z-20 px-2.5 py-1 rounded-lg bg-[#0b0e15]/90 backdrop-blur-md border text-[11px] font-mono whitespace-nowrap shadow-lg ${sat.color}`}
                >
                  {sat.label}
                </div>
              );
            })}

            {/* Core Neural Sphere */}
            <div className="relative z-10 w-[72%] aspect-square rounded-full overflow-hidden bg-[#0b0e15] border-2 border-[#cabeff]/35 shadow-[0_0_60px_-10px_rgba(148,125,255,0.45)] flex items-center justify-center">
              {!imgError ? (
                <img
                  src={PROFILE.heroNeuralImage}
                  alt="3D illuminated digital neural network mesh representing artificial intelligence and autonomous systems"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <Brain className="w-16 h-16 text-[#cabeff]" aria-hidden="true" />
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/15 bg-gradient-to-t from-[#0b0e15]/60 via-transparent to-transparent"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Key Highlights Strip */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#181b23]/85 backdrop-blur-md border border-white/[0.07]">
          <div className="w-10 h-10 rounded-lg bg-[#272a32] flex items-center justify-center text-[#cabeff] shrink-0">
            <GraduationCap className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#938ea1]">
              Academic Orbit
            </p>
            <p className="text-sm font-medium text-[#e0e2ed] truncate">
              1st Year B.Tech @ GLA University
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#181b23]/85 backdrop-blur-md border border-white/[0.07]">
          <div className="w-10 h-10 rounded-lg bg-[#272a32] flex items-center justify-center text-[#a2e7ff] shrink-0">
            <Brain className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#938ea1]">
              Specialization
            </p>
            <p className="text-sm font-medium text-[#e0e2ed] truncate">
              AI &amp; Machine Learning (CSE-AIML)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#181b23]/85 backdrop-blur-md border border-white/[0.07]">
          <div className="w-10 h-10 rounded-lg bg-[#272a32] flex items-center justify-center text-[#e6deff] shrink-0">
            <Cpu className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#938ea1]">
              North Star
            </p>
            <p className="text-sm font-medium text-[#e0e2ed] truncate">
              Aspiring Agentic AI Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
