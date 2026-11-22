import { useEffect, useRef } from 'react';
import { useTheme, type ThemeId } from '../context/ThemeContext';

interface BackdropParticle {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  phase: number;
  speedPhase: number;
  vx: number;
  vy: number;
  rotation: number;
  spin: number;
  tint: string;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  life: number;
  maxLife: number;
}

const THEME_PALETTES: Record<ThemeId, string[]> = {
  space: ['#f8fafc', '#8b5cf6', '#38bdf8', '#cbd5e1'],
  professional: [],
  forest: ['#22c55e', '#4ade80', '#a3e635', '#15803d', '#bef264'],
  ocean: ['#67e8f9', '#06b6d4', '#3b82f6', '#e0f2fe'],
};

export function SpaceBackdrop() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tints = THEME_PALETTES[theme];
    let animationId = 0;
    let width = 0;
    let height = 0;
    let particles: BackdropParticle[] = [];
    let shootingStars: ShootingStar[] = [];
    let lastShootingStarTime = performance.now();

    const initParticles = () => {
      if (theme === 'professional') {
        particles = [];
        return;
      }

      const density = theme === 'space' ? 14000 : theme === 'forest' ? 28000 : 24000;
      const maxCount = theme === 'space' ? 110 : 48;
      const count = Math.min(maxCount, Math.max(24, Math.floor((width * height) / density)));

      particles = Array.from({ length: count }, () => {
        if (theme === 'forest') {
          const isLeaf = Math.random() > 0.42;
          return {
            x: Math.random() * width,
            y: Math.random() * height,
            size: isLeaf ? Math.random() * 4.5 + 4.5 : Math.random() * 1.8 + 1.1,
            baseAlpha: isLeaf ? Math.random() * 0.35 + 0.25 : Math.random() * 0.45 + 0.2,
            phase: Math.random() * Math.PI * 2,
            speedPhase: Math.random() * 0.02 + 0.008,
            vx: (Math.random() - 0.35) * 0.24,
            vy: isLeaf ? Math.random() * 0.35 + 0.18 : -(Math.random() * 0.14 + 0.04),
            rotation: Math.random() * Math.PI * 2,
            spin: (Math.random() - 0.5) * 0.014,
            tint: tints[Math.floor(Math.random() * tints.length)],
          };
        }

        if (theme === 'ocean') {
          return {
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 4.2 + 1.8,
            baseAlpha: Math.random() * 0.32 + 0.14,
            phase: Math.random() * Math.PI * 2,
            speedPhase: Math.random() * 0.02 + 0.01,
            vx: 0,
            vy: -(Math.random() * 0.38 + 0.16),
            rotation: 0,
            spin: 0,
            tint: tints[Math.floor(Math.random() * tints.length)],
          };
        }

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.45 + 0.4,
          baseAlpha: Math.random() * 0.48 + 0.18,
          phase: Math.random() * Math.PI * 2,
          speedPhase: Math.random() * 0.015 + 0.005,
          vx: 0,
          vy: -(Math.random() * 0.07 + 0.02),
          rotation: 0,
          spin: 0,
          tint: tints[Math.floor(Math.random() * tints.length)],
        };
      });
    };

    const drawParticle = (p: BackdropParticle, alpha: number) => {
      ctx.globalAlpha = alpha;

      if (theme === 'forest' && p.size >= 4) {
        // Leaf silhouette
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.tint;
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.quadraticCurveTo(p.size * 0.75, 0, 0, p.size);
        ctx.quadraticCurveTo(-p.size * 0.75, 0, 0, -p.size);
        ctx.fill();
        ctx.restore();
        return;
      }

      if (theme === 'ocean') {
        // Translucent rising ocean bubble with specular highlight
        ctx.strokeStyle = p.tint;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#f0f9ff';
        ctx.beginPath();
        ctx.arc(p.x - p.size * 0.3, p.y - p.size * 0.3, Math.max(0.6, p.size * 0.22), 0, Math.PI * 2);
        ctx.fill();
        return;
      }

      // Space star or Forest firefly mote
      ctx.fillStyle = p.tint;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const renderStatic = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        drawParticle(p, p.baseAlpha);
      }
      ctx.globalAlpha = 1;
    };

    const animate = (now: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.phase += p.speedPhase;
        p.x += p.vx + (theme === 'forest' ? Math.sin(p.phase) * 0.16 : theme === 'ocean' ? Math.sin(p.phase) * 0.12 : 0);
        p.y += p.vy;
        p.rotation += p.spin;

        if (p.y < -12) {
          p.y = height + 12;
          p.x = Math.random() * width;
        } else if (p.y > height + 12) {
          p.y = -12;
          p.x = Math.random() * width;
        }

        if (p.x < -12) p.x = width + 12;
        if (p.x > width + 12) p.x = -12;

        const alpha = Math.max(0.08, Math.min(0.82, p.baseAlpha + Math.sin(p.phase) * 0.14));
        drawParticle(p, alpha);
      }

      if (theme === 'space' && now - lastShootingStarTime > 5800 && shootingStars.length < 1) {
        lastShootingStarTime = now;
        shootingStars.push({
          x: Math.random() * width * 0.7 + width * 0.1,
          y: Math.random() * height * 0.35,
          vx: 7 + Math.random() * 3,
          vy: 3 + Math.random() * 2,
          length: 80 + Math.random() * 40,
          life: 0,
          maxLife: 40,
        });
      }

      shootingStars = shootingStars.filter((meteor) => {
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        meteor.life += 1;

        const progress = meteor.life / meteor.maxLife;
        const opacity = Math.sin(progress * Math.PI) * 0.7;
        const tailX = meteor.x - meteor.vx * (meteor.length / 8);
        const tailY = meteor.y - meteor.vy * (meteor.length / 8);

        const gradient = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0)');
        gradient.addColorStop(0.6, `rgba(56, 189, 248, ${opacity * 0.55})`);
        gradient.addColorStop(1, `rgba(248, 250, 252, ${opacity})`);

        ctx.globalAlpha = 1;
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.stroke();

        return meteor.life < meteor.maxLife;
      });

      ctx.globalAlpha = 1;
      if (theme !== 'professional') {
        animationId = window.requestAnimationFrame(animate);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    if (prefersReducedMotion || theme === 'professional') {
      renderStatic();
    } else {
      animationId = window.requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) {
        window.cancelAnimationFrame(animationId);
      }
    };
  }, [theme]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[var(--bg-primary)] theme-surface"
    >
      {/* Ambient Atmospheric Glows */}
      <div
        style={{ backgroundColor: 'var(--glow-1)' }}
        className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full blur-[120px] transition-colors duration-300"
      />
      <div
        style={{ backgroundColor: 'var(--glow-2)' }}
        className="absolute top-1/3 -right-40 w-[480px] h-[480px] rounded-full blur-[120px] transition-colors duration-300"
      />

      {/* SPACE: Subtle Galaxy Halo */}
      {theme === 'space' && (
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[780px] h-[360px] rounded-full opacity-25 blur-3xl rotate-12"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(139,92,246,0.34), rgba(56,189,248,0.12) 55%, transparent 78%)',
          }}
        />
      )}

      {/* PROFESSIONAL: Clean Minimal Architectural Blueprint Grid */}
      {theme === 'professional' && (
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at top, black 22%, transparent 76%)',
          }}
        />
      )}

      {/* FOREST: Sunlit Canopy Rays + Layered Pine/Deciduous Horizon + Swaying Foliage */}
      {theme === 'forest' && (
        <>
          <div
            className="absolute -top-24 right-0 w-[620px] h-[520px] opacity-30 blur-2xl"
            style={{
              background:
                'conic-gradient(from 205deg at 80% 10%, transparent 0deg, rgba(163,230,53,0.36) 24deg, transparent 50deg, rgba(34,197,94,0.28) 72deg, transparent 105deg)',
            }}
          />
          <svg
            viewBox="0 0 1440 240"
            preserveAspectRatio="none"
            className="absolute bottom-0 inset-x-0 w-full h-36 sm:h-48 opacity-40"
          >
            {/* Distant Ridge Trees */}
            <path
              d="M0 240V160L45 110L90 155L140 90L195 150L250 105L310 165L375 95L435 155L510 115L575 168L650 100L720 158L795 92L865 160L940 112L1010 162L1085 88L1160 155L1235 105L1310 160L1385 98L1440 148V240Z"
              fill="#0b2419"
            />
            {/* Closer Canopy Silhouette */}
            <path
              d="M0 240V188C60 158 120 165 180 192C250 152 330 155 400 195C470 162 550 168 620 202C700 155 780 160 855 198C930 164 1015 162 1090 196C1170 154 1265 158 1350 195C1390 178 1418 178 1440 186V240Z"
              fill="#10291d"
            />
          </svg>
        </>
      )}

      {/* OCEAN: Underwater Surface Light Caustics + Layered Ocean Waves */}
      {theme === 'ocean' && (
        <>
          <div
            className="absolute -top-20 inset-x-0 h-[420px] opacity-28 blur-2xl"
            style={{
              background:
                'repeating-linear-gradient(108deg, transparent 0 70px, rgba(6,182,212,0.22) 70px 108px, transparent 108px 185px)',
              maskImage: 'linear-gradient(to bottom, black 10%, transparent 92%)',
            }}
          />
          <svg
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            className="absolute bottom-0 -inset-x-6 w-[calc(100%+3rem)] h-32 sm:h-40 opacity-38 animate-wave-float"
          >
            <path
              d="M0 110C180 65 340 150 540 108C740 66 900 148 1100 105C1250 72 1360 120 1440 96V200H0Z"
              fill="#0b2c40"
            />
            <path
              d="M0 142C220 112 400 172 640 138C880 104 1060 172 1280 135C1355 122 1405 135 1440 142V200H0Z"
              fill="#0f3954"
              opacity="0.72"
            />
          </svg>
        </>
      )}

      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
