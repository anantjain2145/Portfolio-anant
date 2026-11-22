import { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Cloud, Code2, Globe, Rocket, Terminal } from 'lucide-react';
import { LEARNING_JOURNEY, type JourneyStage } from '../data/portfolioData';

const STAGE_ICONS = {
  terminal: Terminal,
  code: Code2,
  globe: Globe,
  cloud: Cloud,
  brain: Brain,
  rocket: Rocket,
};

export function JourneySection() {
  const [activeStageId, setActiveStageId] = useState<string>(LEARNING_JOURNEY[4].id);

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="py-16 sm:py-20 border-t border-[var(--border-subtle)]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            Growth Trajectory
          </p>
          <h2
            id="journey-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]"
          >
            Learning Journey Timeline
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl">
            Step-by-step progression from foundational C programming to Cloud Computing, Machine
            Learning, and Agentic AI systems.
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
          style={{
            backgroundImage: 'linear-gradient(to bottom, var(--accent), var(--accent-secondary))',
          }}
          className="absolute left-[11px] sm:left-[19px] top-3 bottom-3 w-[2px] opacity-65"
        />

        {LEARNING_JOURNEY.map((stage: JourneyStage, index: number) => {
          const Icon = STAGE_ICONS[stage.iconKey];
          const isSelected = activeStageId === stage.id;
          const isSecondary = stage.accent === 'secondary';

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
              {/* Orbital Node Dot */}
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

              {/* Interactive Timeline Card */}
              <button
                type="button"
                onClick={() => setActiveStageId(stage.id)}
                onMouseEnter={() => setActiveStageId(stage.id)}
                aria-expanded={isSelected}
                className={`w-full text-left rounded-2xl p-5 sm:p-6 border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] theme-surface ${
                  isSelected
                    ? 'bg-[var(--bg-elevated)] border-[var(--border-strong)] shadow-[var(--shadow-card)] -translate-y-0.5'
                    : 'bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:-translate-y-0.5'
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
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-1.5">
                  {stage.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {stage.description}
                </p>

                <p className="font-mono text-xs text-[var(--text-muted)] pt-2.5 border-t border-[var(--border-subtle)]">
                  {stage.technologies.join(' · ')}
                </p>
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
