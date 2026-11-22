import { useEffect, useRef, useState } from 'react';
import {
  Check,
  Code2,
  Copy,
  ExternalLink,
  Github,
  Layers,
  Play,
  RotateCcw,
  Shuffle,
  X,
} from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  initialTab?: 'overview' | 'code' | 'demo';
  onClose: () => void;
}

const INITIAL_ARRAY = [64, 28, 82, 42, 95, 19, 54, 73];

export function ProjectModal({ project, initialTab = 'overview', onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'demo'>(initialTab);
  const [copied, setCopied] = useState(false);

  const [bars, setBars] = useState<number[]>(INITIAL_ARRAY);
  const [comparing, setComparing] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const [sortStatus, setSortStatus] = useState(
    'Click "Run Bubble Sort" to animate step-by-step comparisons.'
  );
  const cancelRef = useRef(false);

  useEffect(() => {
    setActiveTab(initialTab);
    setCopied(false);
    cancelRef.current = true;
    setIsSorting(false);
    setBars(INITIAL_ARRAY);
    setComparing([]);
    setSortedIndices([]);
    setSortStatus('Click "Run Bubble Sort" to animate step-by-step comparisons.');
  }, [project, initialTab]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      cancelRef.current = true;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopySnippet = async () => {
    try {
      await navigator.clipboard.writeText(project.codeSnippet);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard fallback not critical
    }
  };

  const handleRandomizeBars = () => {
    cancelRef.current = true;
    setIsSorting(false);
    setComparing([]);
    setSortedIndices([]);
    const next = Array.from({ length: 8 }, () => Math.floor(Math.random() * 80) + 15);
    setBars(next);
    setSortStatus('Array randomized. Ready to sort.');
  };

  const handleResetBars = () => {
    cancelRef.current = true;
    setIsSorting(false);
    setBars(INITIAL_ARRAY);
    setComparing([]);
    setSortedIndices([]);
    setSortStatus('Array reset to initial values.');
  };

  const runBubbleSort = async () => {
    if (isSorting) return;
    cancelRef.current = false;
    setIsSorting(true);
    setSortedIndices([]);
    const working = [...bars];
    const done: number[] = [];

    for (let i = 0; i < working.length; i++) {
      for (let j = 0; j < working.length - i - 1; j++) {
        if (cancelRef.current) return;
        setComparing([j, j + 1]);
        setSortStatus(`Comparing ${working[j]} and ${working[j + 1]}`);
        await new Promise((res) => window.setTimeout(res, 280));
        if (cancelRef.current) return;

        if (working[j] > working[j + 1]) {
          [working[j], working[j + 1]] = [working[j + 1], working[j]];
          setBars([...working]);
          setSortStatus(`Swapped ${working[j + 1]} and ${working[j]}`);
          await new Promise((res) => window.setTimeout(res, 220));
        }
      }
      done.push(working.length - i - 1);
      setSortedIndices([...done]);
    }

    setComparing([]);
    setIsSorting(false);
    setSortStatus('Sorting complete. All elements are in ascending order.');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-strong)] shadow-[var(--shadow-card)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 px-6 py-5 bg-[var(--bg-secondary)]/95 backdrop-blur-md border-b border-[var(--border-subtle)]">
          <div className="space-y-1 min-w-0">
            <p className="font-mono text-xs text-[var(--accent)]">
              {project.categoryLabel} · {project.status}
            </p>
            <h3
              id="project-modal-title"
              className="text-xl font-semibold text-[var(--text-primary)] leading-snug"
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="w-10 h-10 rounded-lg bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="px-6 pt-4">
          <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Case Study</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('code')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Code Sample</span>
            </button>
            {project.hasInteractiveVisualizer && (
              <button
                type="button"
                onClick={() => setActiveTab('demo')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  activeTab === 'demo'
                    ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Play className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Live Visualizer</span>
              </button>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-5">
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {project.details}
              </p>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-1.5">
                  <p className="font-mono text-xs font-semibold text-[var(--accent)]">
                    Main Challenge
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-1.5">
                  <p className="font-mono text-xs font-semibold text-[var(--accent-secondary)]">
                    Engineering Solution
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Key Focus &amp; Learning Outcomes
                </h4>
                <ul className="space-y-2 text-sm">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]"
                    >
                      <span className="text-[var(--accent)] font-mono text-xs mt-0.5">→</span>
                      <span className="text-[var(--text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-xs text-[var(--text-muted)]">
                  Stack: {project.concepts.join(' · ')}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}

                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-semibold hover:brightness-110 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>GitHub Repo</span>
                    </a>
                  ) : (
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      Local / coursework build (repo link pending)
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="rounded-xl bg-[var(--bg-code)] border border-[var(--border-subtle)] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
                  <span className="font-mono text-xs text-[var(--text-secondary)]">
                    {project.codeFilename} · {project.codeLanguage}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopySnippet}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--bg-elevated)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                  >
                    {copied ? (
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
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'demo' && project.hasInteractiveVisualizer && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-xs text-[var(--text-secondary)]">{sortStatus}</p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={runBubbleSort}
                    disabled={isSorting}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-semibold hover:brightness-110 disabled:opacity-50 transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{isSorting ? 'Sorting...' : 'Run Bubble Sort'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleRandomizeBars}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[var(--bg-elevated)] text-xs text-[var(--text-primary)] transition-colors cursor-pointer"
                  >
                    <Shuffle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Shuffle</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleResetBars}
                    aria-label="Reset array"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--bg-elevated)] text-[var(--text-secondary)] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="h-52 rounded-xl bg-[var(--bg-code)] border border-[var(--border-subtle)] p-4 flex items-end justify-center gap-2 sm:gap-3">
                {bars.map((val, idx) => {
                  const isComparing = comparing.includes(idx);
                  const isSorted = sortedIndices.includes(idx);
                  let barBg = 'var(--accent)';
                  let opacity = 0.6;
                  if (isComparing) {
                    barBg = 'var(--accent-secondary)';
                    opacity = 1;
                  } else if (isSorted) {
                    barBg = 'var(--accent)';
                    opacity = 1;
                  }

                  return (
                    <div
                      key={idx}
                      className="flex-1 max-w-12 flex flex-col items-center justify-end gap-1.5 h-full"
                    >
                      <span className="font-mono text-[11px] tabular-nums text-[var(--text-secondary)]">
                        {val}
                      </span>
                      <div
                        style={{
                          height: `${Math.max(val, 12)}%`,
                          backgroundColor: barBg,
                          opacity,
                        }}
                        className="w-full rounded-t-md transition-all duration-200"
                      />
                    </div>
                  );
                })}
              </div>

              <p className="font-mono text-[11px] text-[var(--text-muted)]">
                Secondary accent: comparing pair · Primary accent: sorted element
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
