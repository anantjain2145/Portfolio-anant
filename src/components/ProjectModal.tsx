import { useEffect, useRef, useState } from 'react';
import { Check, Code2, ExternalLink, Layers, Play, RotateCcw, Shuffle, X, Copy } from 'lucide-react';
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

  // Mini Sorting Visualizer state (for Smart Algorithm Visualizer)
  const [bars, setBars] = useState<number[]>(INITIAL_ARRAY);
  const [comparing, setComparing] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const [sortStatus, setSortStatus] = useState('Click "Run Bubble Sort" to animate step-by-step comparisons.');
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b0e15]/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#181b23] border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 px-6 py-5 bg-[#181b23]/95 backdrop-blur-md border-b border-white/[0.07]">
          <div className="space-y-1 min-w-0">
            <p className="font-mono text-xs text-[#a2e7ff]">
              {project.categoryLabel} · {project.status}
            </p>
            <h3
              id="project-modal-title"
              className="text-xl font-semibold text-[#e0e2ed] leading-snug"
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="w-10 h-10 rounded-lg bg-[#272a32] hover:bg-[#32353d] flex items-center justify-center text-[#c9c4d8] hover:text-[#e0e2ed] transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Segmented Modal Tabs */}
        <div className="px-6 pt-4">
          <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-[#0b0e15] border border-white/[0.07]">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-[#272a32] text-[#cabeff]'
                  : 'text-[#c9c4d8] hover:text-[#e0e2ed]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Overview</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('code')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-[#272a32] text-[#a2e7ff]'
                  : 'text-[#c9c4d8] hover:text-[#e0e2ed]'
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
                    ? 'bg-[#272a32] text-[#a2e7ff]'
                    : 'text-[#c9c4d8] hover:text-[#e0e2ed]'
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
              <p className="text-sm sm:text-base text-[#c9c4d8] leading-relaxed">
                {project.details}
              </p>

              <div className="space-y-2.5">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#938ea1]">
                  Key Focus &amp; Learning Outcomes
                </h4>
                <ul className="space-y-2 text-sm text-[#e0e2ed]">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-[#1d2027] border border-white/[0.05]"
                    >
                      <span className="text-[#a2e7ff] font-mono text-xs mt-0.5">→</span>
                      <span className="text-[#c9c4d8]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-white/[0.07] flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-xs text-[#938ea1]">
                  Stack: {project.concepts.join(' · ')}
                </p>

                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#947dff] text-[#1c0062] text-xs font-semibold hover:brightness-110 transition-all"
                  >
                    <span>Open GitHub Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="font-mono text-xs text-[#cabeff]">
                    GitHub repository URL placeholder (add in portfolioData.ts)
                  </span>
                )}
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="rounded-xl bg-[#0b0e15] border border-white/[0.08] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#1d2027]/70 border-b border-white/[0.06]">
                  <span className="font-mono text-xs text-[#c9c4d8]">
                    {project.codeFilename} · {project.codeLanguage}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopySnippet}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#272a32] hover:bg-[#32353d] text-xs font-mono text-[#c9c4d8] hover:text-[#e0e2ed] transition-colors cursor-pointer"
                  >
                    {copied ? (
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
                <pre className="p-4 overflow-x-auto font-mono text-[13px] leading-relaxed text-[#e0e2ed]">
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-[#1d2027] border border-white/[0.06]">
                <p className="text-xs text-[#c9c4d8]">
                  {project.repoUrl
                    ? 'Full source code is available on GitHub.'
                    : 'Placeholder: Add your real GitHub repository URL in src/data/portfolioData.ts when you publish this project.'}
                </p>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#a2e7ff] hover:underline"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          )}

          {activeTab === 'demo' && project.hasInteractiveVisualizer && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-xs text-[#c9c4d8]">{sortStatus}</p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={runBubbleSort}
                    disabled={isSorting}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#947dff] text-[#1c0062] text-xs font-semibold hover:brightness-110 disabled:opacity-50 transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{isSorting ? 'Sorting...' : 'Run Bubble Sort'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleRandomizeBars}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#272a32] hover:bg-[#32353d] text-xs text-[#e0e2ed] transition-colors cursor-pointer"
                  >
                    <Shuffle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Shuffle</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleResetBars}
                    aria-label="Reset array"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#272a32] hover:bg-[#32353d] text-[#c9c4d8] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="h-52 rounded-xl bg-[#0b0e15] border border-white/[0.08] p-4 flex items-end justify-center gap-2 sm:gap-3">
                {bars.map((val, idx) => {
                  const isComparing = comparing.includes(idx);
                  const isSorted = sortedIndices.includes(idx);
                  let barColor = 'bg-[#947dff]/75';
                  if (isComparing) barColor = 'bg-[#00d2fd]';
                  else if (isSorted) barColor = 'bg-[#cabeff]';

                  return (
                    <div
                      key={idx}
                      className="flex-1 max-w-12 flex flex-col items-center justify-end gap-1.5 h-full"
                    >
                      <span className="font-mono text-[11px] tabular-nums text-[#c9c4d8]">
                        {val}
                      </span>
                      <div
                        style={{ height: `${Math.max(val, 12)}%` }}
                        className={`w-full rounded-t-md transition-all duration-200 ${barColor}`}
                      />
                    </div>
                  );
                })}
              </div>

              <p className="font-mono text-[11px] text-[#938ea1]">
                Cyan: currently comparing · Lavender: sorted position
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
