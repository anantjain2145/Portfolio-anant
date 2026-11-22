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
      className="py-16 sm:py-20 border-t border-white/[0.08]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-[#cabeff]">
            Growth Trajectory
          </p>
          <h2
            id="journey-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#e0e2ed]"
          >
            Interactive Learning Journey
          </h2>
          <p className="text-sm sm:text-base text-[#c9c4d8] max-w-2xl">
            From foundational C programming to exploring Cloud Computing, Machine Learning, and
            Agentic AI systems.
          </p>
        </div>

        <p className="font-mono text-xs text-[#a2e7ff] whitespace-nowrap shrink-0">
          {LEARNING_JOURNEY.length} milestones
        </p>
      </div>

      {/* Vertical Cosmic Timeline */}
      <div className="relative pl-6 sm:pl-10 space-y-6">
        {/* Glowing Orbital Rail */}
        <div
          aria-hidden="true"
          className="absolute left-[11px] sm:left-[19px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#947dff] via-[#cabeff]/60 to-[#00d2fd]"
        />

        {LEARNING_JOURNEY.map((stage: JourneyStage, index: number) => {
          const Icon = STAGE_ICONS[stage.iconKey];
          const isSelected = activeStageId === stage.id;
          const isCyan = stage.accent === 'cyan';

          return (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.38,
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
                    ? isCyan
                      ? 'bg-[#0b0e15] border-[#00d2fd] text-[#a2e7ff] shadow-[0_0_18px_rgba(0,210,253,0.45)] scale-105'
                      : 'bg-[#0b0e15] border-[#947dff] text-[#cabeff] shadow-[0_0_18px_rgba(148,125,255,0.45)] scale-105'
                    : 'bg-[#181b23] border-white/15 text-[#c9c4d8]'
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
                className={`w-full text-left rounded-2xl p-5 sm:p-6 border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff] ${
                  isSelected
                    ? 'bg-[#1d2027]/95 border-[#947dff]/55 shadow-[0_12px_32px_-10px_rgba(124,92,252,0.28)] -translate-y-0.5'
                    : 'bg-[#181b23]/85 border-white/[0.08] hover:border-white/20 hover:-translate-y-0.5'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`font-mono text-xs font-semibold ${
                        isCyan ? 'text-[#a2e7ff]' : 'text-[#cabeff]'
                      }`}
                    >
                      {stage.phase}
                    </span>
                    <span aria-hidden="true" className="text-[#484555]">
                      ·
                    </span>
                    <span className="font-mono text-xs text-[#938ea1]">{stage.timeframe}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-[#e0e2ed] mb-1.5">
                  {stage.title}
                </h3>

                <p className="text-sm text-[#c9c4d8] leading-relaxed mb-3">
                  {stage.description}
                </p>

                <p className="font-mono text-xs text-[#938ea1] pt-2.5 border-t border-white/[0.06]">
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
