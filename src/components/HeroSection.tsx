import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Copy, FileText, GraduationCap, Brain, Cpu, Mail } from 'lucide-react';
import { HERO_PYTHON_SNIPPET, PROFILE } from '../data/portfolioData';
import type { SectionId } from './Navbar';

interface HeroSectionProps {
  onNavigate: (section: SectionId) => void;
  onOpenResume: () => void;
}

export function HeroSection({ onNavigate, onOpenResume }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

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
      {/* Subtle atmospheric radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#947dff]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 right-1/6 h-64 w-64 rounded-full bg-[#00d2fd]/10 blur-3xl"
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Identity, Pitch & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-[#a2e7ff]">
              Hello, I&apos;m · GLA University, Mathura
            </p>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight leading-[1.1] text-balance bg-gradient-to-r from-[#e0e2ed] via-[#e6deff] to-[#b4ebff] bg-clip-text text-transparent"
            >
              {PROFILE.name}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[#a2e7ff] flex items-center gap-2">
              <Brain className="w-5 h-5 text-[#cabeff] shrink-0" aria-hidden="true" />
              <span>{PROFILE.roleHeadline}</span>
            </p>

            <p className="text-base text-[#c9c4d8] leading-relaxed max-w-2xl">
              {PROFILE.heroBio}
            </p>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#947dff] via-[#613de0] to-[#7c5cfc] text-[#f5f7fa] text-sm font-medium shadow-[0_0_24px_-4px_rgba(124,92,252,0.5)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
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
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#272a32]/85 hover:bg-[#32353d] border border-white/10 hover:border-[#00d2fd]/40 text-[#e0e2ed] text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
            >
              <Mail className="w-4 h-4 text-[#a2e7ff]" aria-hidden="true" />
              <span>Let&apos;s Connect</span>
            </button>

            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-transparent hover:bg-white/[0.05] border border-white/10 text-[#c9c4d8] hover:text-[#e0e2ed] text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
            >
              <FileText className="w-4 h-4 text-[#cabeff]" aria-hidden="true" />
              <span>Resume</span>
            </button>
          </div>

          {/* Terminal Code Snippet */}
          <div className="rounded-xl bg-[#0b0e15] border border-white/[0.08] overflow-hidden shadow-lg">
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#181b23]/80 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c1c6d7]/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00d2fd]/80" />
                </div>
                <span className="font-mono text-xs text-[#c9c4d8] ml-1">ai_init.py</span>
              </div>
              <button
                type="button"
                onClick={handleCopyCode}
                aria-label="Copy Python snippet"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#272a32] hover:bg-[#32353d] text-xs font-mono text-[#c9c4d8] hover:text-[#e0e2ed] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
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
            </div>
            <pre className="p-4 overflow-x-auto font-mono text-[13px] leading-relaxed text-[#e0e2ed]">
              <code>
                <span className="text-[#cabeff]">from</span> agent_mesh{' '}
                <span className="text-[#cabeff]">import</span> NeuralAgent{'\n\n'}
                <span className="text-[#a2e7ff]">agent</span> = NeuralAgent(focus=
                <span className="text-[#b4ebff]">&quot;agentic-ai&quot;</span>){'\n'}
                <span className="text-[#a2e7ff]">agent</span>.learn({'\n'}
                {'    '}domain=<span className="text-[#b4ebff]">&quot;CSE-AIML @ GLA University&quot;</span>,
                {'\n'}
                {'    '}curiosity=<span className="text-[#cabeff]">float</span>(
                <span className="text-[#b4ebff]">&quot;inf&quot;</span>){'\n'}){'\n'}
                <span className="text-[#c1c6d7]">print</span>(
                <span className="text-[#b4ebff]">&quot;Ready to engineer intelligent systems.&quot;</span>)
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Right Column: Featured 3D Neural Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex"
        >
          <div className="relative w-full rounded-2xl overflow-hidden bg-[#0b0e15] border border-white/[0.08] shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 bg-[#181b23]/80 border-b border-white/[0.06]">
              <span className="font-mono text-xs text-[#c9c4d8]">neural_architecture.visual</span>
              <span className="font-mono text-[11px] text-[#a2e7ff]">Agentic AI Focus</span>
            </div>

            <div className="relative flex-1 min-h-[290px] sm:min-h-[340px] bg-[#0b0e15] overflow-hidden flex items-center justify-center">
              {!imgError ? (
                <img
                  src={PROFILE.heroNeuralImage}
                  alt="3D illuminated digital neural network mesh representing artificial intelligence and autonomous systems"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-8 text-center space-y-3 bg-gradient-to-br from-[#181b23] to-[#0b0e15] w-full h-full">
                  <Brain className="w-16 h-16 text-[#cabeff]" aria-hidden="true" />
                  <p className="font-mono text-xs text-[#c9c4d8]">Neural Mesh Visualization</p>
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0e15] via-transparent to-transparent opacity-80"
              />
              <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#c9c4d8]">
                <span>CSE-AIML · Year 1</span>
                <span className="text-[#a2e7ff]">Autonomous Systems</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full-Width Key Highlights Strip Below Split */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#181b23] border border-white/[0.06]">
          <div className="w-10 h-10 rounded-lg bg-[#272a32] flex items-center justify-center text-[#cabeff] shrink-0">
            <GraduationCap className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#938ea1]">
              Academic Path
            </p>
            <p className="text-sm font-medium text-[#e0e2ed] truncate">
              1st Year B.Tech @ GLA University
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#181b23] border border-white/[0.06]">
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

        <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#181b23] border border-white/[0.06]">
          <div className="w-10 h-10 rounded-lg bg-[#272a32] flex items-center justify-center text-[#e6deff] shrink-0">
            <Cpu className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#938ea1]">
              Career Goal
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
