import { useEffect } from 'react';
import { Download, ExternalLink, FileText, Printer, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadPlaceholder = () => {
    if (PROFILE.resumeUrl) {
      const anchor = document.createElement('a');
      anchor.href = PROFILE.resumeUrl;
      anchor.download = 'Anant_Jain_Resume.pdf';
      anchor.click();
      return;
    }

    const htmlResume = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Anant Jain - Resume (Starter Template)</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; max-width: 780px; margin: 40px auto; padding: 0 24px; color: #111827; line-height: 1.6; }
    h1 { margin: 0 0 4px; font-size: 28px; }
    .meta { color: #4b5563; font-size: 14px; margin-bottom: 24px; }
    h2 { font-size: 16px; text-transform: uppercase; letter-spacing: 0.06em; border-bottom: 1px solid #e5e7eb; padding-bottom: 6px; margin-top: 24px; }
    ul { padding-left: 20px; }
    .note { margin-top: 32px; padding: 12px 16px; background: #f3f4f6; border-radius: 8px; font-size: 13px; color: #374151; }
  </style>
</head>
<body>
  <h1>${PROFILE.name}</h1>
  <div class="meta">
    ${PROFILE.roleHeadline}<br />
    ${PROFILE.university} · Hometown: ${PROFILE.hometown}<br />
    Email: ${PROFILE.email} · LinkedIn: ${PROFILE.linkedinUrl}
  </div>
  <h2>Career Objective</h2>
  <p>First-year B.Tech CSE-AIML student aspiring to become an Agentic AI Engineer and build intelligent AI systems that solve real-world problems.</p>
  <h2>Education</h2>
  <p><strong>${PROFILE.degree}</strong> — ${PROFILE.specialization}<br />${PROFILE.university} (${PROFILE.enrollmentPeriod})</p>
  <h2>Technical Skills &amp; Interests</h2>
  <ul>
    <li><strong>Programming:</strong> C, Python, JavaScript</li>
    <li><strong>Web Development:</strong> HTML5, CSS3</li>
    <li><strong>Core Interests:</strong> Artificial Intelligence, Machine Learning, Agentic AI, Cloud Computing, Problem Solving</li>
  </ul>
  <div class="note">
    <strong>Placeholder Notice:</strong> This is an auto-generated starter resume using verified profile details. Replace with your final PDF resume at <code>public/resume.pdf</code> and set <code>resumeUrl: '/resume.pdf'</code> in <code>src/data/portfolioData.ts</code>.
  </div>
</body>
</html>`;

    const blob = new Blob([htmlResume], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'Anant_Jain_Resume_Placeholder.html';
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b0e15]/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#181b23] border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-6 py-5 border-b border-white/[0.07]">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#a2e7ff]" aria-hidden="true" />
            <h3 id="resume-modal-title" className="text-lg font-semibold text-[#e0e2ed]">
              Resume Preview
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume preview"
            className="w-10 h-10 rounded-lg bg-[#272a32] hover:bg-[#32353d] flex items-center justify-center text-[#c9c4d8] hover:text-[#e0e2ed] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {!PROFILE.resumeUrl && (
            <div className="p-3.5 rounded-xl bg-[#0b0e15] border border-[#947dff]/35 text-xs text-[#c9c4d8] leading-relaxed">
              <span className="font-mono text-[#cabeff] font-medium">Placeholder Mode:</span>{' '}
              Showing a starter resume generated from your verified details. Once you export your
              final PDF resume, place it at{' '}
              <code className="font-mono text-[#a2e7ff]">public/resume.pdf</code> and update{' '}
              <code className="font-mono text-[#a2e7ff]">resumeUrl</code> in{' '}
              <code className="font-mono text-[#a2e7ff]">src/data/portfolioData.ts</code>.
            </div>
          )}

          {/* Printable Resume Card */}
          <div className="rounded-xl bg-[#1d2027] border border-white/[0.06] p-5 space-y-4">
            <div className="border-b border-white/[0.07] pb-3">
              <h4 className="text-xl font-semibold text-[#e0e2ed]">{PROFILE.name}</h4>
              <p className="text-xs font-mono text-[#a2e7ff] mt-0.5">{PROFILE.roleHeadline}</p>
              <p className="text-xs text-[#938ea1] mt-1">
                {PROFILE.email} · {PROFILE.university}
              </p>
            </div>

            <div className="space-y-1.5">
              <h5 className="font-mono text-[11px] uppercase tracking-wider text-[#cabeff]">
                Career Objective
              </h5>
              <p className="text-xs sm:text-sm text-[#c9c4d8] leading-relaxed">
                First-year B.Tech CSE-AIML student aiming to become an Agentic AI Engineer and
                build intelligent AI systems that solve real-world problems.
              </p>
            </div>

            <div className="space-y-1.5">
              <h5 className="font-mono text-[11px] uppercase tracking-wider text-[#cabeff]">
                Education
              </h5>
              <p className="text-sm font-medium text-[#e0e2ed]">{PROFILE.degree}</p>
              <p className="text-xs text-[#c9c4d8]">
                {PROFILE.specialization} · {PROFILE.university} ({PROFILE.enrollmentPeriod})
              </p>
            </div>

            <div className="space-y-1.5">
              <h5 className="font-mono text-[11px] uppercase tracking-wider text-[#cabeff]">
                Core Technical Focus
              </h5>
              <p className="font-mono text-xs text-[#c9c4d8] leading-relaxed">
                C · Python · JavaScript · HTML5 · CSS3 · Cloud Computing · Artificial Intelligence ·
                Machine Learning · Agentic AI
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={handleDownloadPlaceholder}
              className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#947dff] to-[#613de0] text-[#f5f7fa] text-xs font-semibold hover:brightness-110 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>
                {PROFILE.resumeUrl ? 'Download Resume PDF' : 'Download Starter Resume'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#272a32] hover:bg-[#32353d] border border-white/10 text-xs font-medium text-[#e0e2ed] transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-[#a2e7ff]" aria-hidden="true" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-transparent hover:bg-white/[0.05] text-xs font-mono text-[#a2e7ff] transition-colors"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
