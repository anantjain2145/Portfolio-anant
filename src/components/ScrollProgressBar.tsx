import { useEffect, useRef } from 'react';
import { useTheme, type ThemeId } from '../context/ThemeContext';

const CHARACTER_HALF_WIDTH_PX = 16;

function ThemeScrollCharacter({ theme }: { theme: ThemeId }) {
  if (theme === 'space') {
    return (
      <svg
        viewBox="0 0 36 24"
        className="w-8 h-5 drop-shadow-[0_0_8px_rgba(139,92,246,0.85)]"
        aria-hidden="true"
      >
        {/* Exhaust Flame */}
        <path
          d="M9 9.5L1 12L9 14.5Z"
          fill="#38BDF8"
          className="animate-rocket-flame"
        />
        <path
          d="M10 10.5L4 12L10 13.5Z"
          fill="#F8FAFC"
          className="animate-rocket-flame"
        />
        {/* Fins */}
        <path d="M11 7L7 4L14 7Z" fill="#8B5CF6" />
        <path d="M11 17L7 20L14 17Z" fill="#8B5CF6" />
        {/* Rocket Body */}
        <path
          d="M10 8.5C15 7 23 7.5 31 12C23 16.5 15 17 10 15.5Z"
          fill="#F8FAFC"
          stroke="#8B5CF6"
          strokeWidth="1.2"
        />
        {/* Nose Cone Accent */}
        <path d="M25 9.2C27.5 10.1 29.6 11.1 31 12C29.6 12.9 27.5 13.9 25 14.8Z" fill="#38BDF8" />
        {/* Cockpit Window */}
        <circle cx="19.5" cy="12" r="2.2" fill="#0B1224" stroke="#38BDF8" strokeWidth="1" />
      </svg>
    );
  }

  if (theme === 'forest') {
    return (
      <svg
        viewBox="0 0 36 28"
        className="w-8 h-6 drop-shadow-[0_2px_6px_rgba(5,46,22,0.75)] animate-monkey-swing"
        aria-hidden="true"
      >
        {/* Curled Tail */}
        <path
          d="M9 17C4 16 3 10 7 9"
          fill="none"
          stroke="#854D0E"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Small Vine Leaf Beside Monkey */}
        <path d="M27 5C30 4 32 6 31 9C28 9 27 7 27 5Z" fill="#A3E635" />
        {/* Body */}
        <ellipse cx="16" cy="18" rx="6.5" ry="5.5" fill="#78350F" />
        <ellipse cx="16.5" cy="18.5" rx="4" ry="3.6" fill="#D97706" opacity="0.65" />
        {/* Ears */}
        <circle cx="13.5" cy="9.5" r="3" fill="#78350F" />
        <circle cx="13.5" cy="9.5" r="1.6" fill="#FDE68A" />
        <circle cx="24.5" cy="9.5" r="3" fill="#78350F" />
        <circle cx="24.5" cy="9.5" r="1.6" fill="#FDE68A" />
        {/* Head */}
        <circle cx="19" cy="10.5" r="5.5" fill="#92400E" />
        {/* Face Mask */}
        <ellipse cx="20.2" cy="11.5" rx="3.8" ry="3.2" fill="#FDE68A" />
        {/* Eyes & Smile */}
        <circle cx="18.8" cy="10.5" r="0.9" fill="#052E16" />
        <circle cx="21.6" cy="10.5" r="0.9" fill="#052E16" />
        <path
          d="M18.8 13C19.6 13.7 21 13.7 21.8 13"
          fill="none"
          stroke="#451A03"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Reached Exploring Arm */}
        <path
          d="M20 16L25 14"
          stroke="#78350F"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (theme === 'ocean') {
    return (
      <svg
        viewBox="0 0 38 26"
        className="w-9 h-6 drop-shadow-[0_0_8px_rgba(6,182,212,0.75)] animate-whale-swim"
        aria-hidden="true"
      >
        {/* Tiny Trailing Bubbles */}
        <circle cx="3" cy="10" r="1.3" fill="#F0F9FF" opacity="0.7" />
        <circle cx="6" cy="6.5" r="1" fill="#06B6D4" opacity="0.8" />
        {/* Tail Fluke */}
        <path
          d="M10 14L4 9.5C3.5 11.5 4.2 13 6 14C4.2 15 3.5 16.5 4 18.5Z"
          fill="#06B6D4"
        />
        {/* Dorsal Fin */}
        <path d="M17 9L14.5 5.5C17.5 6 19.5 7.2 20.5 9Z" fill="#0284C7" />
        {/* Whale Body */}
        <path
          d="M9 14C9 9.5 15 7.5 23 8C29 8.4 33.5 11.2 34 14.5C34 17.5 28.5 19.2 21 19C14.5 18.8 10.2 16.8 9 14Z"
          fill="#06B6D4"
        />
        {/* Belly Crest */}
        <path
          d="M15 16.5C19 18.4 26.5 18.5 32.5 16.2C30.5 18.2 25.5 19.2 20 19C17.5 18.8 15.8 17.8 15 16.5Z"
          fill="#F0F9FF"
          opacity="0.88"
        />
        {/* Eye */}
        <circle cx="28.5" cy="13" r="1.1" fill="#042F2E" />
        <circle cx="28.8" cy="12.7" r="0.35" fill="#F0F9FF" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 34 24"
      className="w-8 h-5 drop-shadow-[0_2px_4px_rgba(37,99,235,0.28)] animate-plane-glide"
      aria-hidden="true"
    >
      {/* Top Wing */}
      <path d="M4 5L31 12L11 13Z" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.2" strokeLinejoin="round" />
      {/* Center Fold Shadow */}
      <path d="M11 13L31 12L13 17Z" fill="#2563EB" />
      {/* Bottom Wing */}
      <path d="M13 17L17 19.5L21 15" fill="#93C5FD" stroke="#2563EB" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

export function ScrollProgressBar() {
  const { theme } = useTheme();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);
  const characterRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<number>(0);

  useEffect(() => {
    let rafId = 0;

    const applyPosition = () => {
      rafId = 0;
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, scrollTop / maxScroll)) : 0;
      progressRef.current = ratio;

      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${ratio})`;
      }

      if (characterRef.current && trackRef.current) {
        const trackWidth = trackRef.current.clientWidth;
        const usableSpan = Math.max(0, trackWidth - CHARACTER_HALF_WIDTH_PX * 2);
        const x = CHARACTER_HALF_WIDTH_PX + usableSpan * ratio;
        characterRef.current.style.transform = `translate3d(${x - CHARACTER_HALF_WIDTH_PX}px, -50%, 0)`;
      }
    };

    const scheduleSync = () => {
      if (rafId !== 0) return;
      rafId = window.requestAnimationFrame(applyPosition);
    };

    applyPosition();

    window.addEventListener('scroll', scheduleSync, { passive: true });
    window.addEventListener('resize', scheduleSync, { passive: true });

    const resizeObserver = new ResizeObserver(() => {
      scheduleSync();
    });
    resizeObserver.observe(document.documentElement);

    return () => {
      window.removeEventListener('scroll', scheduleSync);
      window.removeEventListener('resize', scheduleSync);
      resizeObserver.disconnect();
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [theme]);

  const trackLineStyle =
    theme === 'space'
      ? {
          backgroundImage:
            'linear-gradient(to right, rgba(139,92,246,0.35), #8B5CF6, #38BDF8)',
        }
      : theme === 'forest'
      ? {
          backgroundImage:
            'linear-gradient(to right, #166534, #22C55E, #A3E635)',
        }
      : theme === 'ocean'
      ? {
          backgroundImage:
            'linear-gradient(to right, #1D4ED8, #06B6D4, #67E8F9)',
        }
      : {
          backgroundImage:
            'linear-gradient(to right, #93C5FD, #2563EB)',
        };

  return (
    <div
      aria-hidden="true"
      className="fixed top-16 left-0 right-0 z-40 h-6 pointer-events-none select-none bg-[var(--bg-track)]/75 backdrop-blur-sm border-b border-[var(--border-subtle)]/70 theme-surface"
    >
      <div
        ref={trackRef}
        className="relative max-w-6xl mx-auto h-full px-3 sm:px-6 flex items-center"
      >
        {/* Subtle Theme-Specific Track Ornamentation */}
        {theme === 'space' && (
          <div
            className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-[2px] opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(circle, #f8fafc 1px, transparent 1px)',
              backgroundSize: '26px 4px',
            }}
          />
        )}

        {theme === 'forest' && (
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-55">
            {[0, 1, 2, 3, 4, 5, 6].map((leaf) => (
              <span
                key={leaf}
                className="w-1.5 h-1.5 rounded-tl-full rounded-br-full bg-[var(--accent)]"
              />
            ))}
          </div>
        )}

        {theme === 'ocean' && (
          <div
            className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-[2px] opacity-45"
            style={{
              backgroundImage:
                'radial-gradient(circle, #67e8f9 1px, transparent 1px)',
              backgroundSize: '22px 4px',
            }}
          />
        )}

        {theme === 'professional' && (
          <div
            className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-[1px] opacity-50"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to right, #94a3b8 0 4px, transparent 4px 10px)',
            }}
          />
        )}

        {/* Base Thin Track */}
        <div className="relative w-full h-[3px] rounded-full bg-[var(--border-subtle)] overflow-hidden">
          <div
            ref={fillRef}
            style={{
              ...trackLineStyle,
              transform: 'scaleX(0)',
            }}
            className="h-full w-full origin-left rounded-full will-change-transform"
          />
        </div>

        {/* Animated Theme Companion Character */}
        <div
          ref={characterRef}
          style={{
            transform: 'translate3d(0px, -50%, 0)',
          }}
          className="absolute left-0 top-1/2 z-10 flex items-center justify-center will-change-transform"
        >
          <ThemeScrollCharacter theme={theme} />
        </div>
      </div>
    </div>
  );
}
