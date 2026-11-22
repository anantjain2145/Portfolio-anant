import { motion } from 'motion/react';
import { Compass } from 'lucide-react';
import { NOW_EXPLORING } from '../data/portfolioData';

export function NowSection() {
  return (
    <section
      id="now"
      aria-labelledby="now-heading"
      className="py-14 sm:py-16 border-t border-[var(--border-subtle)]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-secondary)]">
            Now · Active Focus
          </p>
          <h2
            id="now-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]"
          >
            Currently Exploring
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl">
            Topics, coursework fundamentals, and software prototypes I am actively learning right now.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] whitespace-nowrap shrink-0">
          <Compass className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
          <span>First-Year CSE-AIML Track</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {NOW_EXPLORING.map((item, idx) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.35,
              delay: idx * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="theme-card border border-[var(--border-subtle)] hover:border-[var(--border-strong)] p-5 sm:p-6 flex flex-col justify-between gap-4 shadow-[var(--shadow-card)] transition-colors theme-surface"
          >
            <div className="space-y-2.5">
              <p className="font-mono text-xs text-[var(--accent)]">{item.area}</p>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </div>

            <p className="font-mono text-xs text-[var(--text-muted)] pt-3 border-t border-[var(--border-subtle)]">
              {item.focusTags.join(' · ')}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
