import { useEffect, useRef } from 'react';
import { useTheme, type ThemeId } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
  driftY: number;
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

const THEME_PARTICLES: Record<ThemeId, string[]> = {
  space: ['#f8fafc', '#8b5cf6', '#38bdf8', '#cbd5e1'],
  professional: ['#2563eb', '#64748b', '#94a3b8'],
  forest: ['#f0fdf4', '#22c55e', '#a3e635', '#a7b8ac'],
  ocean: ['#f0f9ff', '#06b6d4', '#3b82f6', '#9cbacb'],
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
    const tints = THEME_PARTICLES[theme];
    const isMinimalProfessional = theme === 'professional';
    let animationId = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let shootingStars: ShootingStar[] = [];
    let lastShootingStarTime = performance.now();

    const initParticles = () => {
      if (isMinimalProfessional) {
        particles = [];
        return;
      }
      const density = theme === 'space' ? 13500 : 18500;
      const maxCount = theme === 'space' ? 120 : 75;
      const count = Math.min(maxCount, Math.max(40, Math.floor((width * height) / density)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.45 + 0.35,
        baseAlpha: Math.random() * 0.45 + 0.16,
        twinkleSpeed: Math.random() * 0.014 + 0.004,
        phase: Math.random() * Math.PI * 2,
        driftY: theme === 'ocean' ? -(Math.random() * 0.08 + 0.02) : Math.random() * 0.07 + 0.02,
        tint: tints[Math.floor(Math.random() * tints.length)],
      }));
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
        ctx.globalAlpha = p.baseAlpha;
        ctx.fillStyle = p.tint;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const animate = (now: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.phase += p.twinkleSpeed;
        p.y -= p.driftY;
        if (p.y < -4) {
          p.y = height + 4;
          p.x = Math.random() * width;
        } else if (p.y > height + 4) {
          p.y = -4;
          p.x = Math.random() * width;
        }

        const alpha = p.baseAlpha + Math.sin(p.phase) * 0.16;
        ctx.globalAlpha = Math.max(0.06, Math.min(0.8, alpha));
        ctx.fillStyle = p.tint;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
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
      if (!isMinimalProfessional) {
        animationId = window.requestAnimationFrame(animate);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    if (prefersReducedMotion || isMinimalProfessional) {
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
      {/* Subtle Ambient Atmospheric Glows adapted per theme */}
      <div
        style={{ backgroundColor: 'var(--glow-1)' }}
        className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] transition-colors duration-300"
      />
      <div
        style={{ backgroundColor: 'var(--glow-2)' }}
        className="absolute top-1/3 -right-40 w-[460px] h-[460px] rounded-full blur-[120px] transition-colors duration-300"
      />

      {/* Crisp subtle architectural grid in Professional theme */}
      {theme === 'professional' && (
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at top, black 25%, transparent 78%)',
          }}
        />
      )}

      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
