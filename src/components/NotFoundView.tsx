import { ArrowLeft, Terminal } from 'lucide-react';

interface NotFoundViewProps {
  pathname: string;
  onReturnHome: () => void;
}

export function NotFoundView({ pathname, onReturnHome }: NotFoundViewProps) {
  return (
    <main className="min-h-screen flex items-center justify-center px-5 py-16 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="w-full max-w-lg rounded-2xl bg-[var(--bg-card)] border border-[var(--border-strong)] p-8 text-center space-y-5 shadow-[var(--shadow-card)]">
        <div className="w-14 h-14 rounded-2xl bg-[var(--accent-soft)] border border-[var(--border-strong)] flex items-center justify-center mx-auto text-[var(--accent)]">
          <Terminal className="w-7 h-7" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-secondary)]">
            404 · Route Not Found
          </p>
          <h1 className="text-3xl font-semibold text-[var(--text-primary)]">
            Signal Lost in Orbit
          </h1>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            The path <code className="font-mono text-[var(--accent)]">{pathname}</code> does not
            exist on Anant Jain&apos;s portfolio.
          </p>
        </div>

        <div className="rounded-xl bg-[var(--bg-code)] border border-[var(--border-subtle)] p-4 text-left font-mono text-xs text-[var(--text-secondary)] space-y-1">
          <p>
            <span className="text-[var(--accent)]">visitor@anant:~$</span> cd {pathname}
          </p>
          <p className="text-[var(--danger-text)]">
            bash: cd: {pathname}: No such route in portfolio
          </p>
          <p>
            <span className="text-[var(--accent)]">visitor@anant:~$</span> cd /home
          </p>
        </div>

        <button
          type="button"
          onClick={onReturnHome}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] text-sm font-semibold hover:brightness-110 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Return to Portfolio</span>
        </button>
      </div>
    </main>
  );
}
