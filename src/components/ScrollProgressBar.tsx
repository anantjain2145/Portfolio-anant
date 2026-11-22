import { useEffect, useRef } from 'react';
import { useTheme, type ThemeId } from '../context/ThemeContext';

function ThemeScrollCharacter({ theme }: { theme: ThemeId }) {
  if (theme === 'space') {
    return (
      <svg
        viewBox="0 0 32 22"
        className="block w-8 h-[22px] drop-shadow-[0_0_8px_rgba(139,92,246,0.85)]"
        aria-hidden="true"
      >
        {/* Exhaust Flame */}
        <path d="M8.5 8.5L0.5 11L8.5 13.5Z" fill="#38BDF8" className="animate-rocket-flame" />
        <path d="M9.5 9.5L3.5 11L9.5 12.5Z" fill="#F8FAFC" className="animate-rocket-flame" />
        {/* Fins */}
        <path d="M10.5 6L6.5 3L13.5 6Z" fill="#8B5CF6" />
        <path d="M10.5 16L6.5 19L13.5 16Z" fill="#8B5CF6" />
        {/* Rocket Body */}
        <path
          d="M9.5 7.5C14.5 6 23 6.5 31.5 11C23 15.5 14.5 16 9.5 14.5Z"
          fill="#F8FAFC"
          stroke="#8B5CF6"
          strokeWidth="1.2"
        />
        {/* Nose Cone Accent */}
        <path
          d="M24.5 8.2C27.2 9.1 29.6 10.1 31.5 11C29.6 11.9 27.2 12.9 24.5 13.8Z"
          fill="#38BDF8"
        />
        {/* Cockpit Window */}
        <circle cx="19" cy="11" r="2.2" fill="#0B1224" stroke="#38BDF8" strokeWidth="1" />
      </svg>
    );
  }

  if (theme === 'forest') {
    return (
      <svg
        viewBox="0 0 32 24"
        className="block w-8 h-6 drop-shadow-[0_2px_6px_rgba(5,46,22,0.75)] animate-monkey-swing"
        aria-hidden="true"
      >
        {/* Curled Tail */}
        <path
          d="M7 15.5C2 14.5 1 8.5 5 7.5"
          fill="none"
          stroke="#854D0E"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Small Vine Leaf */}
        <path d="M26 3.5C29 2.5 31 4.5 30 7.5C27 7.5 26 5.5 26 3.5Z" fill="#A3E635" />
        {/* Body */}
        <ellipse cx="14.5" cy="16.5" rx="6.2" ry="5.2" fill="#78350F" />
        <ellipse cx="15" cy="17" rx="3.8" ry="3.4" fill="#D97706" opacity="0.65" />
        {/* Ears */}
        <circle cx="12" cy="8" r="2.8" fill="#78350F" />
        <circle cx="12" cy="8" r="1.5" fill="#FDE68A" />
        <circle cx="23" cy="8" r="2.8" fill="#78350F" />
        <circle cx="23" cy="8" r="1.5" fill="#FDE68A" />
        {/* Head */}
        <circle cx="17.5" cy="9" r="5.3" fill="#92400E" />
        {/* Face Mask */}
        <ellipse cx="18.7" cy="10" rx="3.7" ry="3" fill="#FDE68A" />
        {/* Eyes & Smile */}
        <circle cx="17.3" cy="9" r="0.9" fill="#052E16" />
        <circle cx="20.1" cy="9" r="0.9" fill="#052E16" />
        <path
          d="M17.3 11.4C18.1 12.1 19.5 12.1 20.3 11.4"
          fill="none"
          stroke="#451A03"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Exploring Arm */}
        <path d="M18.5 14.5L24.5 12.5" stroke="#78350F" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (theme === 'ocean') {
    return (
      <svg
        viewBox="0 0 34 22"
        className="block w-[34px] h-[22px] drop-shadow-[0_0_8px_rgba(6,182,212,0.75)] animate-whale-swim"
        aria-hidden="true"
      >
        {/* Tiny Trailing Bubbles */}
        <circle cx="2" cy="8" r="1.2" fill="#F0F9FF" opacity="0.7" />
        <circle cx="5" cy="4.5" r="0.95" fill="#06B6D4" opacity="0.8" />
        {/* Tail Fluke */}
        <path
          d="M9 12.5L2.5 8C2 10 2.7 11.5 4.5 12.5C2.7 13.5 2 15 2.5 17Z"
          fill="#06B6D4"
        />
        {/* Dorsal Fin */}
        <path d="M16 7.5L13.5 4C16.5 4.5 18.5 5.7 19.5 7.5Z" fill="#0284C7" />
        {/* Whale Body */}
        <path
          d="M8 12.5C8 8 14 6 22 6.5C28 6.9 33 9.7 33.5 13C33.5 16 28 17.7 20 17.5C13.5 17.3 9.2 15.3 8 12.5Z"
          fill="#06B6D4"
        />
        {/* Belly Crest */}
        <path
          d="M14 15C18 16.9 25.5 17 31.8 14.7C29.8 16.7 24.5 17.7 19 17.5C16.5 17.3 14.8 16.3 14 15Z"
          fill="#F0F9FF"
          opacity="0.88"
        />
        {/* Eye */}
        <circle cx="27.8" cy="11.4" r="1.1" fill="#042F2E" />
        <circle cx="28.1" cy="11.1" r="0.35" fill="#F0F9FF" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 30 20"
      className="block w-[30px] h-5 drop-shadow-[0_2px_4px_rgba(37,99,235,0.28)] animate-plane-glide"
      aria-hidden="true"
    >
      {/* Top Wing */}
      <path
        d="M1 3L29.5 10L9.5 11.5Z"
        fill="#FFFFFF"
        stroke="#2563EB"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Center Fold Shadow */}
      <path d="M9.5 11.5L29.5 10L11.5 15.5Z" fill="#2563EB" />
      {/* Bottom Wing */}
      <path
        d="M11.5 15.5L15.5 18.5L19.5 13.5"
        fill="#93C5FD"
        stroke="#2563EB"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScrollProgressBar() {
  const { theme } = useTheme();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);
  const characterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let rafId = 0;

    const applyPosition = () => {
      rafId = 0;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress =
        scrollableHeight > 0
          ? Math.min(1, Math.max(0, scrollPosition / scrollableHeight))
          : 0;

      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${progress})`;
      }

      if (characterRef.current && trackRef.current) {
        const trackWidth = trackRef.current.clientWidth;
        const charWidth = characterRef.current.offsetWidth;
        const maxTranslateX = Math.max(0, trackWidth - charWidth);
        const x = maxTranslateX * progress;
        characterRef.current.style.transform = `translate3d(${x}px, -50%, 0)`;
      }
    };

    const scheduleSync = () => {
      if (rafId !== 0) return;
      rafId = window.requestAnimationFrame(applyPosition);
    };

    applyPosition();
    const mountSyncRaf = window.requestAnimationFrame(applyPosition);

    window.addEventListener('scroll', scheduleSync, { passive: true });
    window.addEventListener('resize', scheduleSync, { passive: true });

    const resizeObserver = new ResizeObserver(() => {
      scheduleSync();
    });
    resizeObserver.observe(document.documentElement);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener('scroll', scheduleSync);
      window.removeEventListener('resize', scheduleSync);
      resizeObserver.disconnect();
      window.cancelAnimationFrame(mountSyncRaf);
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [theme]);

  const trackLineStyle =
    theme === 'space'
      ? {
          backgroundImage:
            'linear-gradient(to right, rgba(139,92,246,0.45), #8B5CF6, #38BDF8)',
        }
      : theme === 'forest'
      ? {
          backgroundImage: 'linear-gradient(to right, #166534, #22C55E, #A3E635)',
        }
      : theme === 'ocean'
      ? {
          backgroundImage: 'linear-gradient(to right, #1D4ED8, #06B6D4, #67E8F9)',
        }
      : {
          backgroundImage: 'linear-gradient(to right, #93C5FD, #2563EB)',
        };

  return (
    <div
      aria-hidden="true"
      className="fixed top-16 left-0 right-0 z-40 h-7 pointer-events-none select-none bg-[var(--bg-track)]/80 backdrop-blur-sm border-b border-[var(--border-subtle)]/70 theme-surface"
    >
      <div className="site-container h-full flex items-center">
        {/* Track bar coordinate space: 0% at left edge, 100% at right edge */}
        <div ref={trackRef} className="relative w-full h-full flex items-center">
          {/* Theme-Specific Track Ornamentation aligned directly to trackRef bounds */}
          {theme === 'space' && (
            <div
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] opacity-40"
              style={{
                backgroundImage: 'radial-gradient(circle, #f8fafc 1px, transparent 1px)',
                backgroundSize: '26px 4px',
              }}
            />
          )}

          {theme === 'forest' && (
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between opacity-55">
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
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] opacity-45"
              style={{
                backgroundImage: 'radial-gradient(circle, #67e8f9 1px, transparent 1px)',
                backgroundSize: '22px 4px',
              }}
            />
          )}

          {theme === 'professional' && (
            <div
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] opacity-50"
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

          {/* Animated Theme Companion Character positioned strictly within [0, trackWidth - charWidth] */}
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
    </div>
  );
}
