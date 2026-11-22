import { motion } from 'motion/react';
import {
  Anchor,
  Award,
  Compass,
  Droplets,
  GraduationCap,
  Leaf,
  Lightbulb,
  Sprout,
  Trees,
  Trophy,
  Users,
  Waves,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONALITY_HIGHLIGHTS, type PersonalityItem } from '../data/portfolioData';

const DEFAULT_ICONS = {
  badminton: Trophy,
  leadership: Users,
  workshop: Award,
  curiosity: Lightbulb,
  academic: GraduationCap,
};

const FOREST_ICONS = {
  badminton: Leaf,
  leadership: Trees,
  workshop: Sprout,
  curiosity: Leaf,
  academic: Sprout,
};

const OCEAN_ICONS = {
  badminton: Waves,
  leadership: Anchor,
  workshop: Droplets,
  curiosity: Compass,
  academic: Waves,
};

export function PersonalitySection() {
  const { theme } = useTheme();
  const iconSet =
    theme === 'forest'
      ? FOREST_ICONS
      : theme === 'ocean'
      ? OCEAN_ICONS
      : DEFAULT_ICONS;

  return (
    <section
      id="personality"
      aria-labelledby="personality-heading"
      className="py-16 sm:py-20 border-t border-[var(--border-subtle)]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            {theme === 'forest'
              ? 'Milestone Leaves & Fruits · Mindset'
              : theme === 'ocean'
              ? 'Beyond Code · Tides & Interests'
              : 'Beyond Code · Mindset & Interests'}
          </p>
          <h2
            id="personality-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]"
          >
            Personality, Leadership &amp; Learning
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl">
            How athletics, event organization, workshops, and everyday curiosity shape the way I
            learn and collaborate.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] whitespace-nowrap shrink-0">
          {theme === 'forest' ? (
            <Leaf className="w-4 h-4 text-[var(--accent-secondary)]" aria-hidden="true" />
          ) : (
            <Compass className="w-4 h-4 text-[var(--accent-secondary)]" aria-hidden="true" />
          )}
          <span>Holistic Student Profile</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PERSONALITY_HIGHLIGHTS.map((item: PersonalityItem, idx: number) => {
          const Icon = iconSet[item.iconKey];
          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.35,
                delay: idx * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="theme-card border border-[var(--border-subtle)] hover:border-[var(--border-strong)] p-5 sm:p-6 flex flex-col justify-between gap-4 shadow-[var(--shadow-card)] transition-colors theme-surface"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div
                    className={`w-10 h-10 flex items-center justify-center shrink-0 ${
                      theme === 'forest'
                        ? 'rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md bg-[var(--accent-soft)] text-[var(--accent-secondary)]'
                        : 'rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]'
                    }`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[var(--text-primary)] leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
