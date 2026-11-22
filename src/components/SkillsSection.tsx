import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, GitBranch, Trees, Waves } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { SKILL_CATEGORIES, SKILLS_C_SNIPPET, type SkillItem } from '../data/portfolioData';

function SkillDiagram({ iconKey }: { iconKey: SkillItem['iconKey'] }) {
  const { theme } = useTheme();

  if (theme === 'forest') {
    // Living Branch & Leaf Node Diagram for Forest theme
    const nodeLabels: Record<SkillItem['iconKey'], string[]> = {
      c: ['Pointers', 'Memory', 'Structs'],
      python: ['Syntax', 'OOP', 'Scripting'],
      javascript: ['DOM', 'Async', 'ES6+'],
      html: ['Semantic', 'Forms', 'ARIA'],
      css: ['Flexbox', 'Grid', 'Themes'],
      cloud: ['Azure', 'IaaS', 'Hosting'],
      ai: ['Search', 'Agents', 'Logic'],
      ml: ['Data', 'Models', 'Fit'],
      git: ['Commits', 'Branch', 'GitHub'],
      vscode: ['Debug', 'Extensions', 'Edit'],
      cli: ['Shell', 'GCC', 'Build'],
    };
    const leaves = nodeLabels[iconKey];

    return (
      <svg viewBox="0 0 220 58" className="w-full h-14" aria-hidden="true">
        <path
          d="M14 44C62 40 120 26 202 18"
          fill="none"
          stroke="#92400e"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M72 34C80 22 92 16 106 14"
          fill="none"
          stroke="#92400e"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M134 26C144 36 156 42 172 44"
          fill="none"
          stroke="#92400e"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Leaf Buds */}
        <ellipse cx="44" cy="36" rx="10" ry="6" fill="#22c55e" fillOpacity="0.28" stroke="#22c55e" />
        <ellipse cx="110" cy="14" rx="12" ry="6.5" fill="#a3e635" fillOpacity="0.28" stroke="#a3e635" />
        <ellipse cx="176" cy="42" rx="12" ry="6.5" fill="#22c55e" fillOpacity="0.28" stroke="#22c55e" />
        <text x="44" y="39" textAnchor="middle" fontSize="6.8" fill="#f0fdf4" fontFamily="monospace">
          {leaves[0]}
        </text>
        <text x="110" y="16.5" textAnchor="middle" fontSize="6.8" fill="#f0fdf4" fontFamily="monospace">
          {leaves[1]}
        </text>
        <text x="176" y="44.5" textAnchor="middle" fontSize="6.8" fill="#f0fdf4" fontFamily="monospace">
          {leaves[2]}
        </text>
      </svg>
    );
  }

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
                style={{
                  fill: 'var(--bg-primary)',
                  stroke: idx === 1 ? 'var(--accent)' : 'var(--border-strong)',
                }}
                strokeWidth="1.2"
              />
              <rect
                x="6"
                y="8"
                width="20"
                height="5"
                rx="2.5"
                style={{ fill: 'var(--accent)' }}
                fillOpacity="0.7"
              />
              <rect
                x="6"
                y="18"
                width="14"
                height="4"
                rx="2"
                style={{ fill: 'var(--text-muted)' }}
                fillOpacity="0.45"
              />
            </g>
          ))}
          <path
            d="M42 27H52M84 27H94M126 27H136"
            style={{ stroke: 'var(--accent-secondary)' }}
            strokeWidth="1.4"
          />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          <rect
            x="8"
            y="8"
            width="164"
            height="40"
            rx="8"
            style={{ fill: 'var(--bg-primary)', stroke: 'var(--border-subtle)' }}
            strokeWidth="1"
          />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect
              key={i}
              x={18 + i * 24}
              y={36 - ((i * 7) % 18) - 8}
              width="14"
              height={((i * 7) % 18) + 12}
              rx="3"
              style={{
                fill: i % 2 === 0 ? 'var(--accent)' : 'var(--accent-secondary)',
              }}
              fillOpacity="0.8"
            />
          ))}
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          <circle
            cx="52"
            cy="28"
            r="16"
            fill="none"
            style={{ stroke: 'var(--accent)' }}
            strokeWidth="1.6"
            strokeDasharray="6 3"
          />
          <circle cx="52" cy="28" r="5" style={{ fill: 'var(--accent)' }} />
          <path d="M72 28H116" style={{ stroke: 'var(--accent-secondary)' }} strokeWidth="1.5" />
          <rect
            x="120"
            y="14"
            width="48"
            height="28"
            rx="6"
            style={{ fill: 'var(--bg-primary)', stroke: 'var(--accent)' }}
            strokeOpacity="0.6"
          />
          <rect
            x="128"
            y="24"
            width="32"
            height="6"
            rx="3"
            style={{ fill: 'var(--accent-secondary)' }}
            fillOpacity="0.7"
          />
        </svg>
      );
    case 'html':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          <rect
            x="64"
            y="6"
            width="52"
            height="14"
            rx="4"
            style={{ fill: 'var(--bg-primary)', stroke: 'var(--accent)' }}
            strokeOpacity="0.7"
          />
          <path
            d="M90 20V28M90 28H40V36M90 28H140V36"
            style={{ stroke: 'var(--border-strong)' }}
            strokeWidth="1.4"
          />
          <rect
            x="18"
            y="36"
            width="44"
            height="14"
            rx="4"
            style={{ fill: 'var(--bg-primary)', stroke: 'var(--accent-secondary)' }}
            strokeOpacity="0.7"
          />
          <rect
            x="118"
            y="36"
            width="44"
            height="14"
            rx="4"
            style={{ fill: 'var(--bg-primary)', stroke: 'var(--accent-secondary)' }}
            strokeOpacity="0.7"
          />
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          <rect
            x="10"
            y="8"
            width="48"
            height="40"
            rx="6"
            style={{ fill: 'var(--bg-primary)', stroke: 'var(--accent)' }}
            strokeOpacity="0.7"
          />
          <rect
            x="66"
            y="8"
            width="104"
            height="18"
            rx="5"
            style={{ fill: 'var(--bg-primary)', stroke: 'var(--border-strong)' }}
          />
          <rect
            x="66"
            y="31"
            width="48"
            height="17"
            rx="5"
            style={{ fill: 'var(--bg-primary)', stroke: 'var(--accent-secondary)' }}
            strokeOpacity="0.7"
          />
          <rect
            x="122"
            y="31"
            width="48"
            height="17"
            rx="5"
            style={{ fill: 'var(--bg-primary)', stroke: 'var(--border-strong)' }}
          />
        </svg>
      );
    case 'cloud':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          <path
            d="M52 38H128C136 38 142 32 142 25C142 18 136 13 129 13C126 7 119 4 111 6C106 2 96 2 90 8C83 7 76 11 74 17C65 17 58 23 58 31"
            style={{ fill: 'var(--bg-primary)', stroke: 'var(--accent)' }}
            strokeOpacity="0.75"
            strokeWidth="1.5"
          />
          <line
            x1="70"
            y1="45"
            x2="110"
            y2="45"
            style={{ stroke: 'var(--accent-secondary)' }}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          <g style={{ stroke: 'var(--accent)' }} strokeOpacity="0.5" strokeWidth="1.2">
            <line x1="30" y1="16" x2="90" y2="28" />
            <line x1="30" y1="40" x2="90" y2="28" />
            <line x1="90" y1="28" x2="150" y2="16" />
            <line x1="90" y1="28" x2="150" y2="40" />
          </g>
          <circle cx="30" cy="16" r="5" style={{ fill: 'var(--accent)' }} />
          <circle cx="30" cy="40" r="5" style={{ fill: 'var(--accent)' }} />
          <circle
            cx="90"
            cy="28"
            r="8"
            style={{ fill: 'var(--bg-primary)', stroke: 'var(--accent-secondary)' }}
            strokeWidth="2"
          />
          <circle cx="150" cy="16" r="5" style={{ fill: 'var(--accent-secondary)' }} />
          <circle cx="150" cy="40" r="5" style={{ fill: 'var(--accent-secondary)' }} />
        </svg>
      );
    case 'ml':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          <line
            x1="16"
            y1="44"
            x2="164"
            y2="12"
            style={{ stroke: 'var(--accent-secondary)' }}
            strokeWidth="1.8"
          />
          {[
            [28, 42],
            [52, 34],
            [74, 36],
            [98, 22],
            [122, 24],
            [148, 13],
          ].map(([cx, cy], idx) => (
            <circle key={idx} cx={cx} cy={cy} r="3.5" style={{ fill: 'var(--accent)' }} />
          ))}
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          <line x1="28" y1="20" x2="152" y2="20" style={{ stroke: 'var(--accent)' }} strokeWidth="2" />
          <path
            d="M58 20C74 20 74 38 92 38H132"
            fill="none"
            style={{ stroke: 'var(--accent-secondary)' }}
            strokeWidth="2"
          />
          <circle cx="28" cy="20" r="5" style={{ fill: 'var(--accent)' }} />
          <circle cx="58" cy="20" r="5" style={{ fill: 'var(--accent)' }} />
          <circle cx="105" cy="38" r="5" style={{ fill: 'var(--accent-secondary)' }} />
          <circle cx="152" cy="20" r="5" style={{ fill: 'var(--accent)' }} />
        </svg>
      );
    case 'vscode':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          <rect
            x="16"
            y="8"
            width="148"
            height="40"
            rx="6"
            style={{ fill: 'var(--bg-primary)', stroke: 'var(--border-strong)' }}
          />
          <rect
            x="24"
            y="14"
            width="28"
            height="28"
            rx="4"
            style={{ fill: 'var(--accent-soft)' }}
          />
          <rect x="62" y="16" width="68" height="6" rx="3" style={{ fill: 'var(--accent)' }} />
          <rect
            x="62"
            y="28"
            width="90"
            height="5"
            rx="2.5"
            style={{ fill: 'var(--text-muted)' }}
            fillOpacity="0.55"
          />
          <rect
            x="62"
            y="38"
            width="52"
            height="5"
            rx="2.5"
            style={{ fill: 'var(--accent-secondary)' }}
            fillOpacity="0.7"
          />
        </svg>
      );
    case 'cli':
      return (
        <svg viewBox="0 0 180 56" className="w-full h-14" aria-hidden="true">
          <rect
            x="16"
            y="8"
            width="148"
            height="40"
            rx="6"
            style={{ fill: 'var(--bg-primary)', stroke: 'var(--border-strong)' }}
          />
          <path
            d="M32 22L42 28L32 34"
            fill="none"
            style={{ stroke: 'var(--accent)' }}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="50"
            y1="34"
            x2="96"
            y2="34"
            style={{ stroke: 'var(--accent-secondary)' }}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export function SkillsSection() {
  const { theme } = useTheme();
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

  const totalSkills = SKILL_CATEGORIES.reduce((sum, cat) => sum + cat.skills.length, 0);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 sm:py-20 border-t border-[var(--border-subtle)]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-secondary)]">
            {theme === 'forest'
              ? 'Skill Canopy · Branching Knowledge'
              : theme === 'ocean'
              ? 'Ocean Current Stack · GLA University'
              : 'Technical Stack · GLA University'}
          </p>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]"
          >
            Skills &amp; Developer Tools
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="group"
          aria-label="Filter skill categories"
          className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar"
        >
          {[
            { id: 'all', label: `All [${totalSkills}]` },
            { id: 'programming', label: 'Languages' },
            { id: 'web', label: 'Web' },
            { id: 'ai-ml', label: 'AI & ML' },
            { id: 'cloud', label: 'Cloud' },
            { id: 'tools', label: 'Tools' },
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
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-semibold'
                    : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Forest Skill Tree Overview Banner */}
      {theme === 'forest' && (
        <div className="mb-8 theme-card border border-[var(--border-strong)] p-5 flex flex-col sm:flex-row items-center gap-4 shadow-[var(--shadow-card)] theme-surface">
          <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent)] shrink-0">
            <Trees className="w-6 h-6" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              Skill Branches Growing from One Trunk
            </p>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Each technical domain branches from core C &amp; Python logic into Web Development,
              Cloud Architecture, AI/ML modeling, and everyday Developer Tools.
            </p>
          </div>
        </div>
      )}

      <div className="space-y-10">
        {visibleCategories.map((category, catIdx) => (
          <div key={category.id} className="space-y-4">
            <div className="flex items-center gap-2">
              {theme === 'forest' ? (
                <GitBranch className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
              ) : theme === 'ocean' ? (
                <Waves className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
              ) : null}
              <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                {theme === 'forest' ? `Branch 0${catIdx + 1} · ${category.title}` : category.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill, index) => (
                <motion.article
                  key={skill.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.34,
                    delay: index * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="theme-card border border-[var(--border-subtle)] hover:border-[var(--border-strong)] p-5 flex flex-col justify-between gap-4 shadow-[var(--shadow-card)] transition-colors theme-surface"
                >
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-base font-semibold text-[var(--text-primary)]">
                        {skill.name}
                      </h4>
                      <span
                        className={`font-mono text-[11px] shrink-0 ${
                          skill.accent === 'secondary'
                            ? 'text-[var(--accent-secondary)]'
                            : 'text-[var(--accent)]'
                        }`}
                      >
                        {skill.stage}
                      </span>
                    </div>

                    <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] px-2 py-1.5">
                      <SkillDiagram iconKey={skill.iconKey} />
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <p className="font-mono text-[11px] text-[var(--text-muted)] pt-3 border-t border-[var(--border-subtle)]">
                    {skill.topics.join(' · ')}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Laboratory Code Snippet */}
      <div className="mt-10 rounded-xl bg-[var(--bg-code)] border border-[var(--border-subtle)] overflow-hidden shadow-[var(--shadow-card)] theme-surface">
        <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[var(--text-primary)]">academic_log.c</span>
            <span aria-hidden="true" className="text-[var(--text-muted)]">
              ·
            </span>
            <span className="font-mono text-[11px] text-[var(--text-muted)]">C Lab</span>
          </div>
          <button
            type="button"
            onClick={handleCopyC}
            aria-label="Copy C snippet"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--bg-elevated)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            {copiedC ? (
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
        </div>
        <pre className="p-4 overflow-x-auto font-mono text-[13px] leading-relaxed text-[var(--text-primary)]">
          <code>
            <span className="text-[var(--accent)]">#include</span>{' '}
            <span className="text-[var(--accent-secondary)]">&lt;stdio.h&gt;</span>
            {'\n\n'}
            <span className="text-[var(--accent)]">int</span>{' '}
            <span className="text-[var(--accent-secondary)]">main</span>(
            <span className="text-[var(--accent)]">void</span>) {'{\n'}
            {'    '}
            <span className="text-[var(--text-muted)]">
              // Continuous daily practice in C &amp; fundamentals
            </span>
            {'\n    '}
            <span className="text-[var(--text-secondary)]">printf</span>(
            <span className="text-[var(--accent-secondary)]">
              &quot;Building core mastery step by step.\n&quot;
            </span>
            );
            {'\n    '}
            <span className="text-[var(--accent)]">return</span>{' '}
            <span className="text-[var(--accent-secondary)]">0</span>;
            {'\n}'}
          </code>
        </pre>
      </div>
    </section>
  );
}
