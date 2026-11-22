import type { ProjectItem } from '../data/portfolioData';

interface ProjectVisualBannerProps {
  theme: ProjectItem['visualTheme'];
}

export function ProjectVisualBanner({ theme }: ProjectVisualBannerProps) {
  if (theme === 'arcade') {
    return (
      <svg viewBox="0 0 480 200" className="w-full h-full object-cover" aria-hidden="true">
        <rect width="480" height="200" style={{ fill: 'var(--bg-code)' }} />
        <g opacity="0.22" style={{ stroke: 'var(--accent)' }} strokeWidth="1">
          <path d="M0 40H480M0 80H480M0 120H480M0 160H480" />
          <path d="M80 0V200M160 0V200M240 0V200M320 0V200M400 0V200" />
        </g>
        <rect
          x="110"
          y="34"
          width="260"
          height="132"
          rx="12"
          style={{ fill: 'var(--bg-secondary)', stroke: 'var(--accent)' }}
          strokeOpacity="0.48"
        />
        <circle cx="132" cy="52" r="4" style={{ fill: 'var(--accent)' }} />
        <circle cx="146" cy="52" r="4" style={{ fill: 'var(--text-muted)' }} />
        <circle cx="160" cy="52" r="4" style={{ fill: 'var(--accent-secondary)' }} />
        <path
          d="M142 104H174M158 88V120"
          style={{ stroke: 'var(--accent)' }}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="316" cy="96" r="8" style={{ fill: 'var(--accent-secondary)' }} fillOpacity="0.85" />
        <circle cx="338" cy="112" r="8" style={{ fill: 'var(--accent)' }} fillOpacity="0.85" />
        <rect
          x="200"
          y="92"
          width="76"
          height="10"
          rx="5"
          style={{ fill: 'var(--text-muted)' }}
          fillOpacity="0.35"
        />
        <rect
          x="200"
          y="112"
          width="54"
          height="8"
          rx="4"
          style={{ fill: 'var(--text-muted)' }}
          fillOpacity="0.22"
        />
      </svg>
    );
  }

  if (theme === 'memory') {
    return (
      <svg viewBox="0 0 480 200" className="w-full h-full object-cover" aria-hidden="true">
        <rect width="480" height="200" style={{ fill: 'var(--bg-code)' }} />
        <g style={{ stroke: 'var(--accent-secondary)' }} strokeOpacity="0.2" strokeWidth="1">
          <path d="M40 40H440M40 160H440" />
        </g>
        {[0, 1, 2, 3].map((idx) => (
          <g key={idx} transform={`translate(${64 + idx * 94}, 54)`}>
            <rect
              width="74"
              height="92"
              rx="8"
              style={{
                fill: 'var(--bg-secondary)',
                stroke: idx === 1 || idx === 2 ? 'var(--accent-secondary)' : 'var(--border-strong)',
              }}
              strokeWidth="1.2"
            />
            <rect
              x="12"
              y="16"
              width="50"
              height="8"
              rx="4"
              style={{ fill: 'var(--text-muted)' }}
              fillOpacity="0.3"
            />
            <rect
              x="12"
              y="36"
              width="36"
              height="8"
              rx="4"
              style={{ fill: idx % 2 === 0 ? 'var(--accent)' : 'var(--accent-secondary)' }}
              fillOpacity="0.75"
            />
            <rect
              x="12"
              y="56"
              width="48"
              height="8"
              rx="4"
              style={{ fill: 'var(--text-muted)' }}
              fillOpacity="0.24"
            />
            <rect
              x="12"
              y="72"
              width="32"
              height="6"
              rx="3"
              style={{ fill: 'var(--text-muted)' }}
              fillOpacity="0.18"
            />
          </g>
        ))}
        <path
          d="M138 100H158M232 100H252M326 100H346"
          style={{ stroke: 'var(--accent)' }}
          strokeWidth="2"
          strokeDasharray="4 3"
        />
      </svg>
    );
  }

  if (theme === 'agent') {
    return (
      <svg viewBox="0 0 480 200" className="w-full h-full object-cover" aria-hidden="true">
        <rect width="480" height="200" style={{ fill: 'var(--bg-code)' }} />
        <g style={{ stroke: 'var(--accent)' }} strokeOpacity="0.45" strokeWidth="1.5">
          <line x1="120" y1="60" x2="240" y2="100" />
          <line x1="120" y1="145" x2="240" y2="100" />
          <line x1="240" y1="100" x2="360" y2="60" />
          <line x1="240" y1="100" x2="360" y2="145" />
          <line x1="120" y1="60" x2="120" y2="145" strokeOpacity="0.25" />
          <line x1="360" y1="60" x2="360" y2="145" strokeOpacity="0.25" />
        </g>
        <circle
          cx="120"
          cy="60"
          r="14"
          style={{ fill: 'var(--bg-secondary)', stroke: 'var(--accent)' }}
          strokeWidth="1.5"
        />
        <circle
          cx="120"
          cy="145"
          r="14"
          style={{ fill: 'var(--bg-secondary)', stroke: 'var(--accent-secondary)' }}
          strokeWidth="1.5"
        />
        <circle
          cx="240"
          cy="100"
          r="22"
          style={{ fill: 'var(--bg-elevated)', stroke: 'var(--accent)' }}
          strokeWidth="2"
        />
        <circle cx="240" cy="100" r="8" style={{ fill: 'var(--accent-secondary)' }} />
        <circle
          cx="360"
          cy="60"
          r="14"
          style={{ fill: 'var(--bg-secondary)', stroke: 'var(--accent-secondary)' }}
          strokeWidth="1.5"
        />
        <circle
          cx="360"
          cy="145"
          r="14"
          style={{ fill: 'var(--bg-secondary)', stroke: 'var(--accent)' }}
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 480 200" className="w-full h-full object-cover" aria-hidden="true">
      <rect width="480" height="200" style={{ fill: 'var(--bg-code)' }} />
      {[42, 78, 56, 118, 86, 134, 68, 104, 148, 92, 126].map((barHeight, idx) => (
        <rect
          key={idx}
          x={62 + idx * 33}
          y={170 - barHeight}
          width="22"
          height={barHeight}
          rx="4"
          style={{
            fill:
              idx === 5 || idx === 8
                ? 'var(--accent-secondary)'
                : idx % 2 === 0
                ? 'var(--accent)'
                : 'var(--text-muted)',
          }}
          fillOpacity={idx === 5 || idx === 8 ? 0.9 : 0.55}
        />
      ))}
    </svg>
  );
}
