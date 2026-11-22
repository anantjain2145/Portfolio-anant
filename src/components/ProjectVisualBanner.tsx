import { useTheme } from '../context/ThemeContext';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectVisualBannerProps {
  theme: ProjectItem['visualTheme'];
}

export function ProjectVisualBanner({ theme: visualType }: ProjectVisualBannerProps) {
  const { theme } = useTheme();

  if (theme === 'forest') {
    // Forest Theme: Each project rendered as a distinct tree / botanical system illustration
    if (visualType === 'arcade') {
      return (
        <svg viewBox="0 0 480 200" className="w-full h-full object-cover" aria-hidden="true">
          <rect width="480" height="200" fill="#05140d" />
          <path d="M0 165C120 148 360 148 480 165V200H0Z" fill="#0d291c" />
          {/* Twin Arcade Sapling Trees */}
          <path d="M165 162V106" stroke="#92400e" strokeWidth="7" strokeLinecap="round" />
          <circle cx="165" cy="92" r="28" fill="#15803d" opacity="0.9" />
          <circle cx="150" cy="84" r="14" fill="#22c55e" opacity="0.7" />
          <path d="M315 162V94" stroke="#92400e" strokeWidth="8" strokeLinecap="round" />
          <circle cx="315" cy="78" r="34" fill="#22c55e" opacity="0.86" />
          <circle cx="328" cy="70" r="16" fill="#a3e635" opacity="0.52" />
          {/* Glowing Fruit Milestones */}
          <circle cx="174" cy="95" r="4.5" fill="#a3e635" />
          <circle cx="302" cy="74" r="5" fill="#f0fdf4" />
          <circle cx="326" cy="88" r="4.5" fill="#a3e635" />
        </svg>
      );
    }

    if (visualType === 'memory') {
      return (
        <svg viewBox="0 0 480 200" className="w-full h-full object-cover" aria-hidden="true">
          <rect width="480" height="200" fill="#05140d" />
          <path d="M0 128H480V200H0Z" fill="#0a2016" />
          {/* Deep Memory Roots & Structured Pine */}
          <path d="M240 128V48" stroke="#92400e" strokeWidth="8" strokeLinecap="round" />
          <polygon points="240,26 188,82 292,82" fill="#22c55e" opacity="0.82" />
          <polygon points="240,56 174,116 306,116" fill="#15803d" opacity="0.9" />
          <g stroke="#a3e635" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.75">
            <path d="M236 128C210 154 166 168 112 178" />
            <path d="M244 128C270 154 314 168 368 178" />
            <path d="M240 128V184" />
          </g>
          {[112, 240, 368].map((cx) => (
            <circle key={cx} cx={cx} cy={cx === 240 ? 184 : 178} r="4.5" fill="#a3e635" />
          ))}
        </svg>
      );
    }

    if (visualType === 'agent') {
      return (
        <svg viewBox="0 0 480 200" className="w-full h-full object-cover" aria-hidden="true">
          <rect width="480" height="200" fill="#05140d" />
          <path d="M0 172C160 158 320 158 480 172V200H0Z" fill="#0f2c1f" />
          {/* Agentic Canopy Oak with Interconnected Branches */}
          <path d="M240 172V92" stroke="#92400e" strokeWidth="10" strokeLinecap="round" />
          <path d="M240 122C205 104 176 92 146 78" stroke="#92400e" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M240 122C275 104 304 92 334 78" stroke="#92400e" strokeWidth="4.5" strokeLinecap="round" />
          <circle cx="146" cy="76" r="24" fill="#166534" opacity="0.88" />
          <circle cx="334" cy="76" r="24" fill="#166534" opacity="0.88" />
          <circle cx="240" cy="64" r="36" fill="#22c55e" opacity="0.82" />
          <g stroke="#a3e635" strokeWidth="1.4" opacity="0.72">
            <line x1="146" y1="76" x2="240" y2="64" />
            <line x1="240" y1="64" x2="334" y2="76" />
          </g>
          <circle cx="146" cy="76" r="5" fill="#a3e635" />
          <circle cx="240" cy="64" r="7" fill="#f0fdf4" />
          <circle cx="334" cy="76" r="5" fill="#a3e635" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 480 200" className="w-full h-full object-cover" aria-hidden="true">
        <rect width="480" height="200" fill="#05140d" />
        {/* Growth-Sorted Bamboo / Sapling Columns */}
        {[46, 78, 62, 114, 88, 134, 72, 108, 148, 96, 126].map((h, idx) => (
          <g key={idx}>
            <rect
              x={64 + idx * 33}
              y={174 - h}
              width="14"
              height={h}
              rx="6"
              fill={idx === 5 || idx === 8 ? '#a3e635' : '#22c55e'}
              fillOpacity={idx === 5 || idx === 8 ? 0.92 : 0.56}
            />
            <ellipse
              cx={71 + idx * 33}
              cy={168 - h}
              rx="9"
              ry="4.5"
              fill="#4ade80"
              fillOpacity="0.85"
            />
          </g>
        ))}
      </svg>
    );
  }

  if (theme === 'ocean') {
    if (visualType === 'arcade') {
      return (
        <svg viewBox="0 0 480 200" className="w-full h-full object-cover" aria-hidden="true">
          <rect width="480" height="200" fill="#04131e" />
          <path d="M0 144C120 118 240 168 360 138C410 126 445 140 480 132V200H0Z" fill="#0b2c40" />
          <circle cx="240" cy="96" r="52" fill="none" stroke="#06b6d4" strokeOpacity="0.45" strokeDasharray="5 4" />
          <circle cx="240" cy="96" r="28" fill="none" stroke="#3b82f6" strokeOpacity="0.65" />
          <path d="M226 96H254M240 82V110" stroke="#67e8f9" strokeWidth="4" strokeLinecap="round" />
          {[140, 175, 315, 350].map((cx, idx) => (
            <circle key={cx} cx={cx} cy={65 + idx * 14} r="4.5" fill="none" stroke="#67e8f9" strokeWidth="1.4" />
          ))}
        </svg>
      );
    }

    if (visualType === 'memory') {
      return (
        <svg viewBox="0 0 480 200" className="w-full h-full object-cover" aria-hidden="true">
          <rect width="480" height="200" fill="#04131e" />
          {[0, 1, 2, 3].map((idx) => (
            <g key={idx} transform={`translate(${64 + idx * 94}, 54)`}>
              <rect
                width="74"
                height="92"
                rx="10"
                fill="#0b2c40"
                stroke={idx === 1 || idx === 2 ? '#06b6d4' : '#1e4e6d'}
                strokeWidth="1.4"
              />
              <rect x="12" y="20" width="50" height="7" rx="3.5" fill="#06b6d4" fillOpacity="0.7" />
              <rect x="12" y="38" width="38" height="7" rx="3.5" fill="#3b82f6" fillOpacity="0.8" />
              <rect x="12" y="56" width="44" height="7" rx="3.5" fill="#9cbacb" fillOpacity="0.35" />
            </g>
          ))}
          <path d="M138 100H158M232 100H252M326 100H346" stroke="#67e8f9" strokeWidth="2" />
        </svg>
      );
    }

    if (visualType === 'agent') {
      return (
        <svg viewBox="0 0 480 200" className="w-full h-full object-cover" aria-hidden="true">
          <rect width="480" height="200" fill="#04131e" />
          <path d="M60 112C150 64 330 160 420 96" fill="none" stroke="#06b6d4" strokeOpacity="0.45" strokeWidth="2.5" />
          <path d="M60 88C160 142 320 56 420 116" fill="none" stroke="#3b82f6" strokeOpacity="0.45" strokeWidth="2" />
          <circle cx="130" cy="100" r="14" fill="#0b2c40" stroke="#06b6d4" strokeWidth="1.6" />
          <circle cx="240" cy="100" r="24" fill="#113b54" stroke="#67e8f9" strokeWidth="2" />
          <circle cx="240" cy="100" r="8" fill="#06b6d4" />
          <circle cx="350" cy="100" r="14" fill="#0b2c40" stroke="#3b82f6" strokeWidth="1.6" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 480 200" className="w-full h-full object-cover" aria-hidden="true">
        <rect width="480" height="200" fill="#04131e" />
        {[42, 78, 56, 118, 86, 134, 68, 104, 148, 92, 126].map((barHeight, idx) => (
          <rect
            key={idx}
            x={62 + idx * 33}
            y={170 - barHeight}
            width="22"
            height={barHeight}
            rx="11"
            fill={idx === 5 || idx === 8 ? '#67e8f9' : idx % 2 === 0 ? '#06b6d4' : '#3b82f6'}
            fillOpacity={idx === 5 || idx === 8 ? 0.92 : 0.58}
          />
        ))}
      </svg>
    );
  }

  // SPACE & PROFESSIONAL themes use CSS-variable architectural / space diagrams
  if (visualType === 'arcade') {
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

  if (visualType === 'memory') {
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

  if (visualType === 'agent') {
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
