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
  Trees,
  User,
  Waves,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PROFILE } from '../data/portfolioData';

const INTEREST_ITEMS = [
  {
    id: 'aiml',
    title: 'Artificial Intelligence & ML',
    subtitle: 'Foundational models & reasoning',
    icon: Brain,
    diagram: 'State Search · Supervised Learning · Model Evaluation',
    detail: 'Studying how algorithms learn patterns from data and explore search spaces rationally.',
  },
  {
    id: 'agentic',
    title: 'Agentic AI',
    subtitle: 'Goal-directed autonomous workflows',
    icon: Bot,
    diagram: 'Observe → Plan → Tool Use → Verify',
    detail: 'Long-term career target: engineering intelligent agents that solve real-world problems.',
  },
  {
    id: 'software',
    title: 'Software & Web Dev',
    subtitle: 'Clean architecture & interfaces',
    icon: Code2,
    diagram: 'C Fundamentals · Python OOP · HTML5 / CSS3 / JS',
    detail: 'Turning creative ideas into practical console tools, interactive demos, and web apps.',
  },
  {
    id: 'cloud',
    title: 'Cloud & Problem Solving',
    subtitle: 'Microsoft Azure & algorithms',
    icon: Cloud,
    diagram: 'Microsoft Azure · IaaS / PaaS · Structured Debugging',
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
    summary: 'Building practical mini-projects in C, Python, and modern web technologies.',
    icon: Compass,
  },
  {
    step: '03',
    title: 'Long-Term Mission',
    summary: 'Becoming an Agentic AI Engineer crafting real-world intelligent systems.',
    icon: Rocket,
  },
];

function ForestFoundationTree() {
  return (
    <div className="theme-card border border-[var(--border-strong)] p-5 sm:p-6 shadow-[var(--shadow-card)] theme-surface">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <Trees className="w-5 h-5 text-[var(--accent)]" aria-hidden="true" />
          <h3 className="text-base font-semibold text-[var(--text-primary)]">
            Foundation Tree — Roots to Canopy
          </h3>
        </div>
        <span className="font-mono text-xs text-[var(--accent-secondary)]">
          Living Growth Model
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        <div className="lg:col-span-5 rounded-xl bg-[var(--bg-code)] border border-[var(--border-subtle)] p-4">
          <svg viewBox="0 0 280 200" className="w-full h-44" aria-hidden="true">
            <rect width="280" height="200" rx="8" fill="#061911" />
            {/* Forest Ground */}
            <path d="M0 156C75 148 205 148 280 156V200H0Z" fill="#0d291c" />
            {/* Roots */}
            <g stroke="#92400e" strokeWidth="3" strokeLinecap="round" fill="none">
              <path d="M136 156C116 172 90 180 62 186" />
              <path d="M144 156C164 172 190 180 218 186" />
              <path d="M140 156V190" />
            </g>
            {/* Trunk */}
            <path d="M140 158V84" stroke="#92400e" strokeWidth="10" strokeLinecap="round" />
            <path d="M140 116C118 102 100 92 80 80" stroke="#92400e" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M140 110C162 96 180 86 200 76" stroke="#92400e" strokeWidth="4.5" strokeLinecap="round" />
            {/* Canopy Foliage */}
            <circle cx="88" cy="78" r="28" fill="#166534" opacity="0.9" />
            <circle cx="192" cy="74" r="28" fill="#15803d" opacity="0.9" />
            <circle cx="140" cy="52" r="36" fill="#22c55e" opacity="0.82" />
            <circle cx="122" cy="44" r="20" fill="#a3e635" opacity="0.48" />
            {/* Labels */}
            <text x="140" y="55" textAnchor="middle" fontSize="10" fill="#f0fdf4" fontFamily="monospace" fontWeight="bold">
              Agentic AI Canopy
            </text>
            <text x="140" y="132" textAnchor="middle" fontSize="9.5" fill="#d1fae5" fontFamily="monospace">
              CSE-AIML Trunk
            </text>
            <text x="140" y="177" textAnchor="middle" fontSize="9.5" fill="#a3e635" fontFamily="monospace">
              C · Python · Math Roots
            </text>
          </svg>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-4 space-y-1.5">
            <p className="font-mono text-[11px] text-[var(--accent-secondary)] uppercase">Roots</p>
            <p className="text-sm font-semibold text-[var(--text-primary)]">Core Logic &amp; C</p>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Memory pointers, algorithms, and mathematics anchoring my foundation.
            </p>
          </div>
          <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-4 space-y-1.5">
            <p className="font-mono text-[11px] text-[var(--accent)] uppercase">Trunk</p>
            <p className="text-sm font-semibold text-[var(--text-primary)]">GLA University</p>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              First-year B.Tech CSE-AIML coursework, Python, Web &amp; Cloud labs.
            </p>
          </div>
          <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-4 space-y-1.5">
            <p className="font-mono text-[11px] text-[var(--accent-secondary)] uppercase">Canopy</p>
            <p className="text-sm font-semibold text-[var(--text-primary)]">Agentic AI Goal</p>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Branching into intelligent autonomous systems for real-world impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  const { theme } = useTheme();
  const [avatarError, setAvatarError] = useState(false);
  const [selectedInterestId, setSelectedInterestId] = useState(INTEREST_ITEMS[1].id);
  const showAvatarImg = Boolean(PROFILE.avatarUrl) && !avatarError;

  const activeInterest =
    INTEREST_ITEMS.find((item) => item.id === selectedInterestId) ?? INTEREST_ITEMS[0];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-20 border-t border-[var(--border-subtle)]"
    >
      <div className="space-y-2 mb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
          Background &amp; Vision
        </p>
        <h2
          id="about-heading"
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]"
        >
          A Little About Me
        </h2>
      </div>

      {/* Forest Theme Foundation Tree Visual */}
      {theme === 'forest' && (
        <div className="mb-6">
          <ForestFoundationTree />
        </div>
      )}

      {/* Top Row: Portrait Card + Visual Summary & Interest Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Dedicated Portrait Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex"
        >
          <div className="w-full max-w-sm mx-auto lg:max-w-none theme-card border border-[var(--border-subtle)] overflow-hidden shadow-[var(--shadow-card)] flex flex-col theme-surface">
            <div className="relative aspect-[4/5] w-full bg-[var(--bg-secondary)] overflow-hidden flex-1">
              {showAvatarImg ? (
                <img
                  src={PROFILE.avatarUrl}
                  alt="Portrait of Anant Jain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setAvatarError(true)}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-2">
                  <User className="w-12 h-12 text-[var(--accent)]" aria-hidden="true" />
                  <p className="font-mono text-xs text-[var(--text-muted)]">Anant Jain</p>
                </div>
              )}

              <div
                aria-hidden="true"
                style={{
                  backgroundImage: 'linear-gradient(to top, var(--bg-secondary), transparent)',
                }}
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20 opacity-85"
              />
            </div>

            <div className="p-5 border-t border-[var(--border-subtle)] space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {PROFILE.name}
                </h3>
                {theme === 'forest' ? (
                  <Trees className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                ) : theme === 'ocean' ? (
                  <Waves className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                ) : (
                  <Sparkles className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                )}
              </div>
              <p className="font-mono text-xs text-[var(--accent)]">
                {PROFILE.shortUniversity} · B.Tech CSE-AIML
              </p>
              <p className="text-xs text-[var(--text-muted)]">From {PROFILE.hometown}</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual Journey + Interactive Interest Explorer */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.38, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {JOURNEY_STEPS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="theme-card border border-[var(--border-subtle)] p-5 flex flex-col justify-between gap-3 hover:border-[var(--border-strong)] shadow-[var(--shadow-card)] transition-colors theme-surface"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent)]">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs tabular-nums text-[var(--accent-secondary)]">
                      {item.step}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="theme-card border border-[var(--border-subtle)] p-6 space-y-4 flex-1 flex flex-col justify-between shadow-[var(--shadow-card)] theme-surface">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                Core Areas of Interest
              </h3>
              <span className="font-mono text-xs text-[var(--text-muted)]">
                Select a focus node
              </span>
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
                    className={`text-left rounded-xl p-3.5 border transition-all cursor-pointer flex items-start gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                      isSelected
                        ? 'bg-[var(--accent-soft)] border-[var(--border-strong)]'
                        : 'bg-[var(--bg-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                    }`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0 text-[var(--accent)]">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[var(--text-primary)]">
                        {item.title}
                      </p>
                      <p className="font-mono text-[11px] text-[var(--text-muted)] mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-strong)] p-4 space-y-1.5">
              <p className="font-mono text-xs text-[var(--accent)]">{activeInterest.diagram}</p>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                {activeInterest.detail}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Row: Education Trajectory & Campus Coordinates */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="theme-card border border-[var(--border-subtle)] p-6 space-y-4 flex flex-col justify-between shadow-[var(--shadow-card)] theme-surface"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[var(--accent)]" aria-hidden="true" />
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                Education Trajectory
              </h3>
            </div>
            <span className="font-mono text-xs text-[var(--accent-secondary)]">Active</span>
          </div>

          <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-4 space-y-3">
            <div>
              <h4 className="text-base font-semibold text-[var(--text-primary)]">
                {PROFILE.degree}
              </h4>
              <p className="font-mono text-xs text-[var(--accent)] mt-1">
                {PROFILE.specialization}
              </p>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-[var(--text-secondary)]">
              <span className="inline-flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                {PROFILE.university}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono">
                <Calendar
                  className="w-3.5 h-3.5 text-[var(--accent-secondary)]"
                  aria-hidden="true"
                />
                {PROFILE.enrollmentPeriod}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {PROFILE.coursework.map((course, idx) => (
              <div
                key={course}
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]"
              >
                <span className="font-mono text-[11px] tabular-nums text-[var(--accent)]">
                  0{idx + 1}
                </span>
                <span className="text-xs text-[var(--text-primary)] truncate">{course}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.38, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="theme-card border border-[var(--border-subtle)] p-6 space-y-4 flex flex-col justify-between shadow-[var(--shadow-card)] theme-surface"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[var(--accent)]" aria-hidden="true" />
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                Campus Coordinates
              </h3>
            </div>
            <span className="font-mono text-[11px] text-[var(--text-muted)]">
              LAT 27.5706° N
            </span>
          </div>

          <div className="relative h-44 rounded-xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex flex-col justify-end p-4">
            <svg
              viewBox="0 0 400 180"
              className="absolute inset-0 w-full h-full opacity-75"
              aria-hidden="true"
            >
              <defs>
                <pattern id="coord-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path
                    d="M 24 0 L 0 0 0 24"
                    fill="none"
                    style={{ stroke: 'var(--border-subtle)' }}
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="400" height="180" fill="url(#coord-grid)" />

              {theme === 'forest' && (
                <path
                  d="M0 160C80 120 150 150 230 118C300 90 360 130 400 112V180H0Z"
                  style={{ fill: 'var(--accent)' }}
                  fillOpacity="0.14"
                />
              )}

              {theme === 'ocean' && (
                <path
                  d="M0 135C65 112 135 155 205 130C275 105 335 150 400 128V180H0Z"
                  style={{ fill: 'var(--accent)' }}
                  fillOpacity="0.16"
                />
              )}

              <circle
                cx="205"
                cy="86"
                r="68"
                fill="none"
                style={{ stroke: 'var(--accent)' }}
                strokeOpacity="0.32"
                strokeDasharray="4 4"
              />
              <circle
                cx="205"
                cy="86"
                r="42"
                fill="none"
                style={{ stroke: 'var(--accent-secondary)' }}
                strokeOpacity="0.38"
              />
              <circle
                cx="205"
                cy="86"
                r="17"
                style={{ fill: 'var(--accent)' }}
                fillOpacity="0.16"
              />
              <circle cx="205" cy="86" r="5" style={{ fill: 'var(--accent)' }} />
            </svg>

            <div className="relative z-10 flex items-end justify-between gap-3 rounded-lg bg-[var(--bg-card)]/92 backdrop-blur-sm p-3 border border-[var(--border-subtle)]">
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  GLA University Campus
                </p>
                <p className="font-mono text-xs text-[var(--text-secondary)]">
                  Mathura, Uttar Pradesh · {PROFILE.campusCoords}
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=GLA+University+Mathura"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-mono text-[var(--accent)] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <span>Map</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[var(--text-muted)] pt-1">
            <span>Department of Computer Science &amp; AIML</span>
            <span className="font-mono text-[var(--accent)]">B.Tech CSE-AIML</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
