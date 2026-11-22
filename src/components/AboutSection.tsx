import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Bot,
  Brain,
  Building2,
  Calendar,
  Cloud,
  Code2,
  Compass,
  ExternalLink,
  GraduationCap,
  MapPin,
  Rocket,
  Sparkles,
  User,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const INTEREST_ITEMS = [
  {
    id: 'aiml',
    title: 'Artificial Intelligence & ML',
    subtitle: 'Foundational models & reasoning',
    icon: Brain,
    accent: 'text-[#cabeff]',
    diagram: 'State Search · Supervised Learning · Model Evaluation',
    detail: 'Studying how algorithms learn patterns from data and explore search spaces rationally.',
  },
  {
    id: 'agentic',
    title: 'Agentic AI',
    subtitle: 'Goal-directed autonomous workflows',
    icon: Bot,
    accent: 'text-[#a2e7ff]',
    diagram: 'Observe → Plan → Tool Use → Verify',
    detail: 'Long-term career target: engineering intelligent agents that solve real-world problems.',
  },
  {
    id: 'software',
    title: 'Software & Web Dev',
    subtitle: 'Clean architecture & interfaces',
    icon: Code2,
    accent: 'text-[#e6deff]',
    diagram: 'C Fundamentals · Python OOP · HTML5 / CSS3 / JS',
    detail: 'Turning creative ideas into practical console tools, interactive demos, and web apps.',
  },
  {
    id: 'cloud',
    title: 'Cloud & Problem Solving',
    subtitle: 'Scalable systems & logic',
    icon: Cloud,
    accent: 'text-[#b4ebff]',
    diagram: 'IaaS / PaaS · Algorithms · Structured Debugging',
    detail: 'Combining algorithmic thinking with cloud fundamentals to ship dependable solutions.',
  },
];

const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Academic Foundation',
    summary: 'First-year B.Tech CSE-AIML student at GLA University, Mathura.',
    icon: GraduationCap,
  },
  {
    step: '02',
    title: 'Hands-On Exploration',
    summary: 'Building practical mini-projects in C, Python, and web technologies.',
    icon: Compass,
  },
  {
    step: '03',
    title: 'Long-Term Mission',
    summary: 'Becoming an Agentic AI Engineer crafting real-world intelligent systems.',
    icon: Rocket,
  },
];

export function AboutSection() {
  const [avatarError, setAvatarError] = useState(false);
  const [selectedInterestId, setSelectedInterestId] = useState(INTEREST_ITEMS[1].id);
  const showAvatarImg = Boolean(PROFILE.avatarUrl) && !avatarError;

  const activeInterest =
    INTEREST_ITEMS.find((item) => item.id === selectedInterestId) ?? INTEREST_ITEMS[0];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-20 border-t border-white/[0.08]"
    >
      <div className="space-y-2 mb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[#cabeff]">
          Explorer Profile · Background &amp; Vision
        </p>
        <h2
          id="about-heading"
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#e0e2ed]"
        >
          A Little About Me
        </h2>
      </div>

      {/* Top Row: Cosmic Portrait Card + Visual Journey & Interactive Interest Constellation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Dedicated Portrait Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex"
        >
          <div className="w-full max-w-sm mx-auto lg:max-w-none rounded-2xl bg-[#181b23]/90 backdrop-blur-md border border-white/[0.09] overflow-hidden shadow-xl flex flex-col">
            <div className="relative aspect-[4/5] w-full bg-[#0b0e15] overflow-hidden flex-1">
              {showAvatarImg ? (
                <img
                  src={PROFILE.avatarUrl}
                  alt="Portrait of Anant Jain"
                  referrerPolicy="no-referrer"
                  onError={() => setAvatarError(true)}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-2">
                  <User className="w-12 h-12 text-[#cabeff]" aria-hidden="true" />
                  <p className="font-mono text-xs text-[#938ea1]">Anant Jain</p>
                </div>
              )}

              {/* Subtle cosmic vignette & orbital ring accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#181b23] via-[#181b23]/45 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#0b0e15]/80 backdrop-blur-md border border-[#947dff]/35 font-mono text-[11px] text-[#a2e7ff]"
              >
                CSE-AIML · Y1
              </div>
            </div>

            <div className="p-5 border-t border-white/[0.06] space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-[#e0e2ed]">{PROFILE.name}</h3>
                <Sparkles className="w-4 h-4 text-[#cabeff]" aria-hidden="true" />
              </div>
              <p className="font-mono text-xs text-[#a2e7ff]">
                {PROFILE.shortUniversity} · Mathura
              </p>
              <p className="text-xs text-[#938ea1]">From {PROFILE.hometown}</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual Journey + Interactive Interest Constellation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 flex flex-col gap-6"
        >
          {/* 3-Step Visual Journey Cards instead of dense paragraphs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {JOURNEY_STEPS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="rounded-2xl bg-[#181b23]/90 backdrop-blur-md border border-white/[0.08] p-5 flex flex-col justify-between gap-3 hover:border-[#947dff]/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-[#272a32] flex items-center justify-center text-[#cabeff]">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs text-[#a2e7ff]">{item.step}</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-[#e0e2ed]">{item.title}</h3>
                    <p className="text-xs text-[#c9c4d8] leading-relaxed">{item.summary}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Interest Constellation Explorer */}
          <div className="rounded-2xl bg-[#181b23]/90 backdrop-blur-md border border-white/[0.08] p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base font-semibold text-[#e0e2ed]">
                Interest Constellation
              </h3>
              <span className="font-mono text-xs text-[#938ea1]">Select a focus node</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INTEREST_ITEMS.map((item) => {
                const Icon = item.icon;
                const isSelected = item.id === selectedInterestId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedInterestId(item.id)}
                    aria-pressed={isSelected}
                    className={`text-left rounded-xl p-3.5 border transition-all cursor-pointer flex items-start gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff] ${
                      isSelected
                        ? 'bg-[#272a32]/90 border-[#947dff]/60 shadow-[0_0_20px_-6px_rgba(148,125,255,0.45)]'
                        : 'bg-[#0b0e15]/70 border-white/[0.06] hover:border-white/15'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg bg-[#181b23] flex items-center justify-center shrink-0 ${item.accent}`}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[#e0e2ed]">{item.title}</p>
                      <p className="font-mono text-[11px] text-[#938ea1] mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Constellation Detail Box */}
            <div className="rounded-xl bg-[#0b0e15]/85 border border-[#00d2fd]/25 p-4 space-y-1.5">
              <p className="font-mono text-xs text-[#a2e7ff]">{activeInterest.diagram}</p>
              <p className="text-xs sm:text-sm text-[#c9c4d8]">{activeInterest.detail}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Row: Visual Trajectory Timeline & Orbital Campus Radar */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Education Trajectory Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-[#181b23]/90 backdrop-blur-md border border-white/[0.08] p-6 space-y-4 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#cabeff]" aria-hidden="true" />
              <h3 className="text-base font-semibold text-[#e0e2ed]">Education Trajectory</h3>
            </div>
            <span className="font-mono text-xs text-[#a2e7ff]">Active</span>
          </div>

          <div className="rounded-xl bg-[#0b0e15]/75 border border-white/[0.06] p-4 space-y-3">
            <div>
              <h4 className="text-base font-semibold text-[#e0e2ed]">{PROFILE.degree}</h4>
              <p className="font-mono text-xs text-[#a2e7ff] mt-1">
                {PROFILE.specialization}
              </p>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-[#c9c4d8]">
              <span className="inline-flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#cabeff]" aria-hidden="true" />
                {PROFILE.university}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono">
                <Calendar className="w-3.5 h-3.5 text-[#a2e7ff]" aria-hidden="true" />
                {PROFILE.enrollmentPeriod}
              </span>
            </div>
          </div>

          {/* Visual 4-Node Coursework Track */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {PROFILE.coursework.map((course, idx) => (
              <div
                key={course}
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#1d2027]/80 border border-white/[0.05]"
              >
                <span className="font-mono text-[11px] text-[#cabeff]">0{idx + 1}</span>
                <span className="text-xs text-[#e0e2ed] truncate">{course}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Orbital Campus Radar Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-[#181b23]/90 backdrop-blur-md border border-white/[0.08] p-6 space-y-4 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#cabeff]" aria-hidden="true" />
              <h3 className="text-base font-semibold text-[#e0e2ed]">Campus Coordinates</h3>
            </div>
            <span className="font-mono text-[11px] text-[#938ea1]">LAT 27.5706° N</span>
          </div>

          <div className="relative h-44 rounded-xl overflow-hidden bg-[#0b0e15] border border-white/[0.07] flex flex-col justify-end p-4">
            {/* Orbital Radar Coordinate Grid SVG */}
            <svg
              viewBox="0 0 400 180"
              className="absolute inset-0 w-full h-full opacity-65"
              aria-hidden="true"
            >
              <defs>
                <pattern id="coord-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path
                    d="M 24 0 L 0 0 0 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="400" height="180" fill="url(#coord-grid)" />
              <circle
                cx="205"
                cy="90"
                r="72"
                fill="none"
                stroke="#947dff"
                strokeOpacity="0.25"
                strokeDasharray="4 4"
              />
              <circle
                cx="205"
                cy="90"
                r="44"
                fill="none"
                stroke="#00d2fd"
                strokeOpacity="0.28"
              />
              <circle cx="205" cy="90" r="18" fill="#00d2fd" fillOpacity="0.1" />
              <circle cx="205" cy="90" r="5" fill="#00d2fd" />
            </svg>

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#0b0e15] via-[#0b0e15]/45 to-transparent"
            />

            <div className="relative z-10 flex items-end justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-[#e0e2ed]">GLA University Campus</p>
                <p className="font-mono text-xs text-[#c9c4d8]">
                  Mathura, Uttar Pradesh · {PROFILE.campusCoords}
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=GLA+University+Mathura"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#272a32]/90 hover:bg-[#32353d] border border-white/10 text-xs font-mono text-[#a2e7ff] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
              >
                <span>Map</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#938ea1] pt-1">
            <span>Department of Computer Science &amp; AIML</span>
            <span className="font-mono text-[#cabeff]">B.Tech CSE-AIML</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
