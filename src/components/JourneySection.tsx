import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Anchor,
  Brain,
  Cloud,
  Code2,
  Droplets,
  Globe,
  Leaf,
  Rocket,
  Sprout,
  Terminal,
  Trees,
  Waves,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { LEARNING_JOURNEY, type JourneyStage } from '../data/portfolioData';

const SPACE_ICONS = {
  terminal: Terminal,
  code: Code2,
  globe: Globe,
  cloud: Cloud,
  brain: Brain,
  rocket: Rocket,
};

const FOREST_ICONS = {
  terminal: Sprout,
  code: Leaf,
  globe: Leaf,
  cloud: Trees,
  brain: Trees,
  rocket: Trees,
};

const OCEAN_ICONS = {
  terminal: Droplets,
  code: Waves,
  globe: Anchor,
  cloud: Waves,
  brain: Waves,
  rocket: Anchor,
};

const FOREST_BOTANICAL_LABELS = [
  'Deep Roots',
  'First Sprout',
  'Young Trunk',
  'Upper Branches',
  'Dense Foliage',
  'Canopy Crown',
];

const OCEAN_DEPTH_LABELS = [
  'Shoreline',
  'Sunlit Shallows',
  'Coral Shelf',
  'Open Current',
  'Deep Pelagic',
  'Ocean Horizon',
];

export function JourneySection() {
  const { theme } = useTheme();
  const [activeStageId, setActiveStageId] = useState<string>(LEARNING_JOURNEY[4].id);

  const iconMap =
    theme === 'forest'
      ? FOREST_ICONS
      : theme === 'ocean'
      ? OCEAN_ICONS
      : SPACE_ICONS;

  const spineStyle =
    theme === 'forest'
      ? { backgroundImage: 'linear-gradient(to bottom, #92400e, #22c55e, #a3e635)' }
      : theme === 'ocean'
      ? { backgroundImage: 'linear-gradient(to bottom, #67e8f9, #06b6d4, #1d4ed8)' }
      : theme === 'professional'
      ? { backgroundColor: '#cbd5e1' }
      : { backgroundImage: 'linear-gradient(to bottom, var(--accent), var(--accent-secondary))' };

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="py-16 sm:py-20 border-t border-[var(--border-subtle)]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            {theme === 'forest'
              ? 'Roots · Trunk · Branches · Leaves'
              : theme === 'ocean'
              ? 'Currents & Exploration Depth'
              : 'Growth Trajectory'}
          </p>
          <h2
            id="journey-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]"
          >
            Learning Journey Timeline
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl">
            {theme === 'forest'
              ? 'Growing from C programming roots through Python, Web, and Cloud branches toward an Agentic AI canopy.'
              : 'Step-by-step progression from foundational C programming to Cloud Computing, Machine Learning, and Agentic AI systems.'}
          </p>
        </div>

        <p className="font-mono text-xs tabular-nums text-[var(--accent-secondary)] whitespace-nowrap shrink-0">
          {LEARNING_JOURNEY.length} stages
        </p>
      </div>

      {/* Vertical Theme-Adaptive Timeline */}
      <div className="relative pl-6 sm:pl-10 space-y-6">
        <div
          aria-hidden="true"
          style={spineStyle}
          className={`absolute left-[11px] sm:left-[19px] top-3 bottom-3 ${
            theme === 'forest' ? 'w-[3px] rounded-full opacity-85' : 'w-[2px] opacity-65'
          }`}
        />

        {LEARNING_JOURNEY.map((stage: JourneyStage, index: number) => {
          const Icon = iconMap[stage.iconKey];
          const isSelected = activeStageId === stage.id;
          const isSecondary = stage.accent === 'secondary';
          const themeStageNote =
            theme === 'forest'
              ? FOREST_BOTANICAL_LABELS[index]
              : theme === 'ocean'
              ? OCEAN_DEPTH_LABELS[index]
              : null;

          return (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              {/* Node Marker */}
              <div
                aria-hidden="true"
                className={`absolute -left-6 sm:-left-10 top-6 w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-200 ${
                  isSelected
                    ? isSecondary
                      ? 'bg-[var(--bg-primary)] border-[var(--accent-secondary)] text-[var(--accent-secondary)] shadow-[var(--shadow-glow)] scale-105'
                      : 'bg-[var(--bg-primary)] border-[var(--accent)] text-[var(--accent)] shadow-[var(--shadow-glow)] scale-105'
                    : 'bg-[var(--bg-secondary)] border-[var(--border-subtle)] text-[var(--text-muted)]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* Forest horizontal branch stem connector */}
              {theme === 'forest' && (
                <span
                  aria-hidden="true"
                  className="hidden sm:block absolute -left-0 top-11 w-2.5 h-[2px] bg-[var(--accent)] opacity-60"
                />
              )}

              {/* Interactive Timeline Card */}
              <button
                type="button"
                onClick={() => setActiveStageId(stage.id)}
                onMouseEnter={() => setActiveStageId(stage.id)}
                aria-expanded={isSelected}
                className={`w-full text-left theme-card p-5 sm:p-6 border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] theme-surface ${
                  isSelected
                    ? 'border-[var(--border-strong)] shadow-[var(--shadow-card)] -translate-y-0.5'
                    : 'border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:-translate-y-0.5'
                }`}
              >
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span
                    className={`font-mono text-xs font-semibold ${
                      isSecondary ? 'text-[var(--accent-secondary)]' : 'text-[var(--accent)]'
                    }`}
                  >
                    {stage.phase}
                  </span>
                  <span aria-hidden="true" className="text-[var(--text-muted)]">
                    ·
                  </span>
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {stage.timeframe}
                  </span>
                  {themeStageNote && (
                    <>
                      <span aria-hidden="true" className="text-[var(--text-muted)]">
                        ·
                      </span>
                      <span className="font-mono text-xs text-[var(--accent-secondary)]">
                        {themeStageNote}
                      </span>
                    </>
                  )}
                </div>

                <div className="lg:flex lg:items-start lg:justify-between lg:gap-8">
                  <div className="max-w-2xl">
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-1.5">
                      {stage.title}
                    </h3>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3 lg:mb-0">
                      {stage.description}
                    </p>
                  </div>

                  <p className="font-mono text-xs text-[var(--text-muted)] pt-2.5 lg:pt-1 lg:text-right border-t lg:border-t-0 border-[var(--border-subtle)] lg:max-w-xs shrink-0">
                    {stage.technologies.join(' · ')}
                  </p>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
