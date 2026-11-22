import type { ProjectItem } from '../data/portfolioData';

interface ProjectVisualBannerProps {
  theme: ProjectItem['visualTheme'];
}

export function ProjectVisualBanner({ theme }: ProjectVisualBannerProps) {
  if (theme === 'arcade') {
    return (
      <svg
        viewBox="0 0 480 200"
        className="w-full h-full object-cover"
        aria-hidden="true"
      >
        <rect width="480" height="200" fill="#0b0e15" />
        <g opacity="0.22" stroke="#947dff" strokeWidth="1">
          <path d="M0 40H480M0 80H480M0 120H480M0 160H480" />
          <path d="M80 0V200M160 0V200M240 0V200M320 0V200M400 0V200" />
        </g>
        <rect
          x="110"
          y="34"
          width="260"
          height="132"
          rx="12"
          fill="#181b23"
          stroke="#947dff"
          strokeOpacity="0.45"
        />
        <circle cx="132" cy="52" r="4" fill="#ffb4ab" />
        <circle cx="146" cy="52" r="4" fill="#c1c6d7" />
        <circle cx="160" cy="52" r="4" fill="#00d2fd" />
        <path
          d="M142 104H174M158 88V120"
          stroke="#cabeff"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="316" cy="96" r="8" fill="#00d2fd" fillOpacity="0.85" />
        <circle cx="338" cy="112" r="8" fill="#947dff" fillOpacity="0.85" />
        <rect x="200" y="92" width="76" height="10" rx="5" fill="#272a32" />
        <rect x="200" y="112" width="54" height="8" rx="4" fill="#32353d" />
      </svg>
    );
  }

  if (theme === 'memory') {
    return (
      <svg
        viewBox="0 0 480 200"
        className="w-full h-full object-cover"
        aria-hidden="true"
      >
        <rect width="480" height="200" fill="#0b0e15" />
        <g stroke="#00d2fd" strokeOpacity="0.18" strokeWidth="1">
          <path d="M40 40H440M40 160H440" />
        </g>
        {[0, 1, 2, 3].map((idx) => (
          <g key={idx} transform={`translate(${64 + idx * 94}, 54)`}>
            <rect
              width="74"
              height="92"
              rx="8"
              fill="#181b23"
              stroke={idx === 1 || idx === 2 ? '#00d2fd' : '#484555'}
              strokeWidth="1.2"
            />
            <rect x="12" y="16" width="50" height="8" rx="4" fill="#272a32" />
            <rect
              x="12"
              y="36"
              width="36"
              height="8"
              rx="4"
              fill={idx % 2 === 0 ? '#947dff' : '#00d2fd'}
              fillOpacity="0.7"
            />
            <rect x="12" y="56" width="48" height="8" rx="4" fill="#32353d" />
            <rect x="12" y="72" width="32" height="6" rx="3" fill="#272a32" />
          </g>
        ))}
        <path
          d="M138 100H158M232 100H252M326 100H346"
          stroke="#cabeff"
          strokeWidth="2"
          strokeDasharray="4 3"
        />
      </svg>
    );
  }

  if (theme === 'agent') {
    return (
      <svg
        viewBox="0 0 480 200"
        className="w-full h-full object-cover"
        aria-hidden="true"
      >
        <rect width="480" height="200" fill="#0b0e15" />
        <defs>
          <radialGradient id="agent-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#947dff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0b0e15" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="240" cy="100" r="95" fill="url(#agent-glow)" />
        <g stroke="#cabeff" strokeOpacity="0.45" strokeWidth="1.5">
          <line x1="120" y1="60" x2="240" y2="100" />
          <line x1="120" y1="145" x2="240" y2="100" />
          <line x1="240" y1="100" x2="360" y2="60" />
          <line x1="240" y1="100" x2="360" y2="145" />
          <line x1="120" y1="60" x2="120" y2="145" strokeOpacity="0.25" />
          <line x1="360" y1="60" x2="360" y2="145" strokeOpacity="0.25" />
        </g>
        <circle cx="120" cy="60" r="14" fill="#1d2027" stroke="#947dff" strokeWidth="1.5" />
        <circle cx="120" cy="145" r="14" fill="#1d2027" stroke="#00d2fd" strokeWidth="1.5" />
        <circle cx="240" cy="100" r="22" fill="#272a32" stroke="#cabeff" strokeWidth="2" />
        <circle cx="240" cy="100" r="8" fill="#00d2fd" />
        <circle cx="360" cy="60" r="14" fill="#1d2027" stroke="#00d2fd" strokeWidth="1.5" />
        <circle cx="360" cy="145" r="14" fill="#1d2027" stroke="#947dff" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 480 200"
      className="w-full h-full object-cover"
      aria-hidden="true"
    >
      <rect width="480" height="200" fill="#0b0e15" />
      {[42, 78, 56, 118, 86, 134, 68, 104, 148, 92, 126].map((barHeight, idx) => (
        <rect
          key={idx}
          x={62 + idx * 33}
          y={170 - barHeight}
          width="22"
          height={barHeight}
          rx="4"
          fill={idx === 5 || idx === 8 ? '#00d2fd' : idx % 2 === 0 ? '#947dff' : '#32353d'}
          fillOpacity={idx === 5 || idx === 8 ? 0.9 : 0.75}
        />
      ))}
    </svg>
  );
}
