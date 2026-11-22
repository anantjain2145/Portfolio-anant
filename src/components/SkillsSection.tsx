import { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Check, Cloud, Copy, Cpu, Globe, Palette, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES, SKILLS_C_SNIPPET, type SkillItem } from '../data/portfolioData';

function SkillIcon({ iconKey }: { iconKey: SkillItem['iconKey'] }) {
  switch (iconKey) {
    case 'c':
      return <Terminal className="w-5 h-5" aria-hidden="true" />;
    case 'python':
      return <Cpu className="w-5 h-5" aria-hidden="true" />;
    case 'javascript':
      return <Globe className="w-5 h-5" aria-hidden="true" />;
    case 'html':
      return <Globe className="w-5 h-5" aria-hidden="true" />;
    case 'css':
      return <Palette className="w-5 h-5" aria-hidden="true" />;
    case 'cloud':
      return <Cloud className="w-5 h-5" aria-hidden="true" />;
    case 'ai':
      return <Brain className="w-5 h-5" aria-hidden="true" />;
    case 'ml':
      return <Brain className="w-5 h-5" aria-hidden="true" />;
  }
}

export function SkillsSection() {
  const [copiedC, setCopiedC] = useState(false);

  const handleCopyC = async () => {
    try {
      await navigator.clipboard.writeText(SKILLS_C_SNIPPET);
      setCopiedC(true);
      window.setTimeout(() => setCopiedC(false), 2000);
    } catch {
      // Clipboard fallback not critical
    }
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 sm:py-20 border-t border-white/[0.06]"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-[#a2e7ff]">
            Active Study Track · GLA University
          </p>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#e0e2ed]"
          >
            Skills &amp; Competency Areas
          </h2>
          <p className="text-sm sm:text-base text-[#c9c4d8] max-w-2xl">
            Core languages, web fundamentals, and AI/cloud domains explored through hands-on
            coursework, coding labs, and problem solving.
          </p>
        </div>

        <p className="font-mono text-xs text-[#938ea1] whitespace-nowrap shrink-0">
          8 focus modules · 3 tracks
        </p>
      </div>

      <div className="space-y-10">
        {SKILL_CATEGORIES.map((category) => (
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
                  className="rounded-xl bg-[#181b23] border border-white/[0.07] hover:border-[#947dff]/40 p-5 flex flex-col justify-between gap-4 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-11 h-11 rounded-lg bg-[#272a32] flex items-center justify-center shrink-0 ${
                          skill.accent === 'cyan' ? 'text-[#a2e7ff]' : 'text-[#cabeff]'
                        }`}
                      >
                        <SkillIcon iconKey={skill.iconKey} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <h4 className="text-base font-semibold text-[#e0e2ed] truncate">
                            {skill.name}
                          </h4>
                          <span
                            className={`font-mono text-[11px] shrink-0 ${
                              skill.accent === 'cyan' ? 'text-[#a2e7ff]' : 'text-[#cabeff]'
                            }`}
                          >
                            {skill.stage}
                          </span>
                        </div>
                        <p className="text-sm text-[#c9c4d8] leading-relaxed mt-1">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="font-mono text-xs text-[#938ea1] pt-3 border-t border-white/[0.06]">
                    {skill.topics.join(' · ')}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Laboratory Code Snippet */}
      <div className="mt-10 rounded-xl bg-[#0b0e15] border border-white/[0.08] overflow-hidden shadow-lg">
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
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#272a32] hover:bg-[#32353d] text-xs font-mono text-[#c9c4d8] hover:text-[#e0e2ed] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
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
