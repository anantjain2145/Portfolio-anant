import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy } from 'lucide-react';
import { SKILL_CATEGORIES, SKILLS_C_SNIPPET, type SkillItem } from '../data/portfolioData';

function SkillDiagram({ iconKey }: { iconKey: SkillItem['iconKey'] }) {
  switch (iconKey) {
    case 'c':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          {[0, 1, 2, 3].map((idx) => (
            <g key={idx} transform={`translate(${10 + idx * 42}, 10)`}>
              <rect
                width="32"
                height="34"
                rx="6"
                fill="#0b0e15"
                stroke={idx === 1 ? '#00d2fd' : '#484555'}
                strokeWidth="1.2"
              />
              <rect x="6" y="8" width="20" height="5" rx="2.5" fill="#947dff" fillOpacity="0.7" />
              <rect x="6" y="18" width="14" height="4" rx="2" fill="#32353d" />
            </g>
          ))}
          <path d="M42 27H52M84 27H94M126 27H136" stroke="#a2e7ff" strokeWidth="1.4" />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          <rect x="8" y="8" width="164" height="40" rx="8" fill="#0b0e15" stroke="#484555" strokeWidth="1" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect
              key={i}
              x={18 + i * 24}
              y={36 - ((i * 7) % 18) - 8}
              width="14"
              height={((i * 7) % 18) + 12}
              rx="3"
              fill={i % 2 === 0 ? '#00d2fd' : '#947dff'}
              fillOpacity="0.8"
            />
          ))}
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          <circle cx="52" cy="28" r="16" fill="none" stroke="#947dff" strokeWidth="1.6" strokeDasharray="6 3" />
          <circle cx="52" cy="28" r="5" fill="#cabeff" />
          <path d="M72 28H116" stroke="#a2e7ff" strokeWidth="1.5" />
          <rect x="120" y="14" width="48" height="28" rx="6" fill="#0b0e15" stroke="#00d2fd" strokeOpacity="0.5" />
          <rect x="128" y="24" width="32" height="6" rx="3" fill="#a2e7ff" fillOpacity="0.7" />
        </svg>
      );
    case 'html':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          <rect x="64" y="6" width="52" height="14" rx="4" fill="#0b0e15" stroke="#a2e7ff" strokeOpacity="0.6" />
          <path d="M90 20V28M90 28H40V36M90 28H140V36" stroke="#484555" strokeWidth="1.4" />
          <rect x="18" y="36" width="44" height="14" rx="4" fill="#0b0e15" stroke="#947dff" strokeOpacity="0.55" />
          <rect x="118" y="36" width="44" height="14" rx="4" fill="#0b0e15" stroke="#947dff" strokeOpacity="0.55" />
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          <rect x="10" y="8" width="48" height="40" rx="6" fill="#0b0e15" stroke="#947dff" strokeOpacity="0.6" />
          <rect x="66" y="8" width="104" height="18" rx="5" fill="#0b0e15" stroke="#484555" />
          <rect x="66" y="31" width="48" height="17" rx="5" fill="#0b0e15" stroke="#00d2fd" strokeOpacity="0.55" />
          <rect x="122" y="31" width="48" height="17" rx="5" fill="#0b0e15" stroke="#484555" />
        </svg>
      );
    case 'cloud':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          <path
            d="M52 38H128C136 38 142 32 142 25C142 18 136 13 129 13C126 7 119 4 111 6C106 2 96 2 90 8C83 7 76 11 74 17C65 17 58 23 58 31"
            fill="#0b0e15"
            stroke="#00d2fd"
            strokeOpacity="0.6"
            strokeWidth="1.5"
          />
          <line x1="70" y1="45" x2="110" y2="45" stroke="#947dff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          <g stroke="#947dff" strokeOpacity="0.5" strokeWidth="1.2">
            <line x1="30" y1="16" x2="90" y2="28" />
            <line x1="30" y1="40" x2="90" y2="28" />
            <line x1="90" y1="28" x2="150" y2="16" />
            <line x1="90" y1="28" x2="150" y2="40" />
          </g>
          <circle cx="30" cy="16" r="5" fill="#947dff" />
          <circle cx="30" cy="40" r="5" fill="#947dff" />
          <circle cx="90" cy="28" r="8" fill="#0b0e15" stroke="#00d2fd" strokeWidth="2" />
          <circle cx="150" cy="16" r="5" fill="#a2e7ff" />
          <circle cx="150" cy="40" r="5" fill="#a2e7ff" />
        </svg>
      );
    case 'ml':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          <line x1="16" y1="44" x2="164" y2="12" stroke="#00d2fd" strokeWidth="1.8" />
          {[
            [28, 42],
            [52, 34],
            [74, 36],
            [98, 22],
            [122, 24],
            [148, 13],
          ].map(([cx, cy], idx) => (
            <circle key={idx} cx={cx} cy={cy} r="3.5" fill="#cabeff" />
          ))}
        </svg>
      );
  }
}

export function SkillsSection() {
  const [copiedC, setCopiedC] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleCopyC = async () => {
    try {
      await navigator.clipboard.writeText(SKILLS_C_SNIPPET);
      setCopiedC(true);
      window.setTimeout(() => setCopiedC(false), 2000);
    } catch {
      // Clipboard fallback not critical
    }
  };

  const visibleCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((category) => category.id === activeCategory);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 sm:py-20 border-t border-white/[0.08]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-[#a2e7ff]">
            Technical Orbit · GLA University
          </p>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#e0e2ed]"
          >
            Skills &amp; Competency Areas
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="group"
          aria-label="Filter skill categories"
          className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar"
        >
          {[
            { id: 'all', label: 'All [8]' },
            { id: 'programming', label: 'Programming' },
            { id: 'web', label: 'Web' },
            { id: 'cloud-ai', label: 'Cloud & AI' },
          ].map((tab) => {
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                aria-pressed={isSelected}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#947dff] text-[#1c0062] font-semibold'
                    : 'bg-[#181b23]/90 text-[#c9c4d8] border border-white/[0.08] hover:text-[#e0e2ed]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-10">
        {visibleCategories.map((category) => (
          <div key={category.id} className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#c9c4d8]">
              {category.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill, index) => (
                <motion.article
                  key={skill.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-2xl bg-[#181b23]/90 backdrop-blur-md border border-white/[0.08] hover:border-[#947dff]/45 p-5 flex flex-col justify-between gap-4 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-base font-semibold text-[#e0e2ed]">{skill.name}</h4>
                      <span
                        className={`font-mono text-[11px] shrink-0 ${
                          skill.accent === 'cyan' ? 'text-[#a2e7ff]' : 'text-[#cabeff]'
                        }`}
                      >
                        {skill.stage}
                      </span>
                    </div>

                    {/* Visual Technical Micro-Diagram */}
                    <div className="rounded-xl bg-[#0b0e15]/85 border border-white/[0.05] px-2 py-1.5">
                      <SkillDiagram iconKey={skill.iconKey} />
                    </div>

                    <p className="text-xs sm:text-sm text-[#c9c4d8] leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <p className="font-mono text-[11px] text-[#938ea1] pt-3 border-t border-white/[0.06]">
                    {skill.topics.join(' · ')}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Laboratory Code Snippet */}
      <div className="mt-10 rounded-xl bg-[#0b0e15]/95 border border-white/[0.08] overflow-hidden shadow-lg">
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#181b23]/80 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#c1c6d7]/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#00d2fd]/80" />
            </div>
            <span className="font-mono text-xs text-[#c9c4d8] ml-1">academic_log.c</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-mono text-[11px] text-[#938ea1]">GLA CS LAB</span>
            <button
              type="button"
              onClick={handleCopyC}
              aria-label="Copy C snippet"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#272a32] hover:bg-[#32353d] text-xs font-mono text-[#c9c4d8] hover:text-[#e0e2ed] transition-colors cursor-pointer"
            >
              {copiedC ? (
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
        </div>
        <pre className="p-4 overflow-x-auto font-mono text-[13px] leading-relaxed text-[#e0e2ed]">
          <code>
            <span className="text-[#cabeff]">#include</span>{' '}
            <span className="text-[#a2e7ff]">&lt;stdio.h&gt;</span>
            {'\n\n'}
            <span className="text-[#cabeff]">int</span>{' '}
            <span className="text-[#b4ebff]">main</span>(<span className="text-[#cabeff]">void</span>) {'{\n'}
            {'    '}
            <span className="text-[#938ea1]">// Continuous daily practice in C &amp; fundamentals</span>
            {'\n    '}
            <span className="text-[#c1c6d7]">printf</span>(
            <span className="text-[#a2e7ff]">&quot;Building core mastery step by step.\n&quot;</span>);
            {'\n    '}
            <span className="text-[#cabeff]">return</span> <span className="text-[#a2e7ff]">0</span>;
            {'\n}'}
          </code>
        </pre>
      </div>
    </section>
  );
}
