import { useState } from 'react';
import { motion } from 'motion/react';
import { Bot, Brain, Cloud, Code2, ExternalLink, GraduationCap, MapPin, Calendar, Building2 } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { MonogramLogo } from './MonogramLogo';

const INTEREST_ICONS = {
  brain: Brain,
  bot: Bot,
  code: Code2,
  cloud: Cloud,
};

export function AboutSection() {
  const [avatarError, setAvatarError] = useState(false);
  const showAvatarImg = Boolean(PROFILE.avatarUrl) && !avatarError;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-20 border-t border-white/[0.06]"
    >
      <div className="space-y-2 mb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[#cabeff]">
          Background &amp; Vision
        </p>
        <h2
          id="about-heading"
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#e0e2ed]"
        >
          A Little About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Bio & Career Vision */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Bio Card */}
          <div className="rounded-2xl bg-[#181b23] border border-white/[0.07] p-6 space-y-5">
            <div className="flex items-center gap-4">
              {showAvatarImg ? (
                <img
                  src={PROFILE.avatarUrl}
                  alt="Portrait of Anant Jain"
                  referrerPolicy="no-referrer"
                  onError={() => setAvatarError(true)}
                  className="w-20 h-20 rounded-2xl object-cover object-[center_18%] border border-[#947dff]/45 shadow-[0_0_20px_rgba(148,125,255,0.18)] shrink-0"
                />
              ) : (
                <div className="w-16 h-16 rounded-2xl bg-[#1d2027] border border-white/10 flex items-center justify-center shrink-0">
                  <MonogramLogo className="w-11 h-11" />
                </div>
              )}

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-[#e0e2ed]">{PROFILE.name}</h3>
                  <span className="font-mono text-xs text-[#cabeff]">· Year 1</span>
                </div>
                <p className="font-mono text-xs text-[#a2e7ff] mt-0.5">
                  {PROFILE.shortUniversity} · CSE-AIML
                </p>
                <p className="text-xs text-[#938ea1] mt-1">
                  Hometown: {PROFILE.hometown}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm sm:text-[15px] leading-relaxed text-[#c9c4d8]">
              {PROFILE.aboutParagraphs.map((para, idx) => (
                <p key={idx} className={idx === 0 ? 'text-[#e0e2ed]' : 'text-[#c9c4d8]'}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Core Interests & Career Direction */}
          <div className="rounded-2xl bg-[#181b23] border border-white/[0.07] p-6 space-y-4 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-semibold text-[#e0e2ed]">
                Core Interests &amp; Career Focus
              </h3>
              <span className="font-mono text-xs text-[#a2e7ff]">Goal: {PROFILE.careerGoal}</span>
            </div>

            <p className="text-sm text-[#c9c4d8]">
              Exploring the intersection of artificial intelligence, software engineering, and
              cloud-backed autonomous problem solving.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {PROFILE.interests.map((interest) => {
                const Icon = INTEREST_ICONS[interest.icon];
                return (
                  <div
                    key={interest.title}
                    className="rounded-xl bg-[#1d2027] border border-white/[0.05] p-4 space-y-2 hover:border-[#947dff]/35 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#272a32] flex items-center justify-center text-[#cabeff]">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-[#e0e2ed]">{interest.title}</h4>
                      <p className="font-mono text-xs text-[#938ea1] mt-0.5">{interest.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Education Roadmap & Campus Location */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Education Card */}
          <div className="rounded-2xl bg-[#181b23] border border-white/[0.07] p-6 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#cabeff]" aria-hidden="true" />
                <h3 className="text-base font-semibold text-[#e0e2ed]">Education Roadmap</h3>
              </div>
              <span className="font-mono text-xs text-[#a2e7ff]">Active Enrollment</span>
            </div>

            <div className="rounded-xl bg-[#1d2027] border border-white/[0.05] p-4 space-y-3">
              <div>
                <h4 className="text-base font-semibold text-[#e0e2ed]">{PROFILE.degree}</h4>
                <p className="font-mono text-xs text-[#a2e7ff] mt-1">
                  Specialization: {PROFILE.specialization}
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-[#c9c4d8] pt-1">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#cabeff] shrink-0" aria-hidden="true" />
                  <span>{PROFILE.university}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#a2e7ff] shrink-0" aria-hidden="true" />
                  <span className="font-mono">{PROFILE.enrollmentPeriod}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06]">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#938ea1] mb-2">
                  Key Coursework &amp; Focus
                </p>
                <p className="font-mono text-xs text-[#c9c4d8] leading-relaxed">
                  {PROFILE.coursework.join(' · ')}
                </p>
              </div>
            </div>
          </div>

          {/* Campus Location Card (Custom SVG Coordinate Visual) */}
          <div className="rounded-2xl bg-[#181b23] border border-white/[0.07] p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#cabeff]" aria-hidden="true" />
                <h3 className="text-base font-semibold text-[#e0e2ed]">Campus &amp; Location</h3>
              </div>
              <span className="font-mono text-[11px] text-[#938ea1]">LAT 27.5706° N</span>
            </div>

            <div className="relative h-44 rounded-xl overflow-hidden bg-[#0b0e15] border border-white/[0.06] flex flex-col justify-end p-4">
              {/* Crisp Topographic Coordinate Grid SVG */}
              <svg
                viewBox="0 0 400 180"
                className="absolute inset-0 w-full h-full opacity-55"
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
                <path
                  d="M 0 110 Q 110 75 200 95 T 400 60"
                  fill="none"
                  stroke="#947dff"
                  strokeOpacity="0.4"
                  strokeWidth="1.5"
                />
                <path
                  d="M 60 0 Q 130 90 220 92 T 340 180"
                  fill="none"
                  stroke="#00d2fd"
                  strokeOpacity="0.35"
                  strokeWidth="1.5"
                />
                <circle cx="205" cy="92" r="22" fill="#00d2fd" fillOpacity="0.08" />
                <circle cx="205" cy="92" r="6" fill="#00d2fd" />
                <circle cx="205" cy="92" r="11" stroke="#cabeff" strokeOpacity="0.6" fill="none" />
              </svg>

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0b0e15] via-[#0b0e15]/50 to-transparent"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
