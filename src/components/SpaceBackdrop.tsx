import { useEffect, useRef } from 'react';

interface Star {
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

const STAR_TINTS = ['#e0e2ed', '#cabeff', '#a2e7ff', '#e6deff'];

export function SpaceBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationId = 0;
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let lastShootingStarTime = performance.now();

    const initStars = () => {
      const count = Math.min(130, Math.max(55, Math.floor((width * height) / 14000)));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.45 + 0.35,
        baseAlpha: Math.random() * 0.55 + 0.2,
        twinkleSpeed: Math.random() * 0.015 + 0.004,
        phase: Math.random() * Math.PI * 2,
        driftY: Math.random() * 0.08 + 0.02,
        tint: STAR_TINTS[Math.floor(Math.random() * STAR_TINTS.length)],
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
      initStars();
    };

    const renderStatic = () => {
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        ctx.globalAlpha = star.baseAlpha;
        ctx.fillStyle = star.tint;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const animate = (now: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        star.phase += star.twinkleSpeed;
        star.y -= star.driftY;
        if (star.y < -4) {
          star.y = height + 4;
          star.x = Math.random() * width;
        }
        const alpha = star.baseAlpha + Math.sin(star.phase) * 0.2;
        ctx.globalAlpha = Math.max(0.08, Math.min(0.9, alpha));
        ctx.fillStyle = star.tint;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (now - lastShootingStarTime > 5200 && shootingStars.length < 1) {
        lastShootingStarTime = now;
        shootingStars.push({
          x: Math.random() * width * 0.7 + width * 0.1,
          y: Math.random() * height * 0.35,
          vx: 7 + Math.random() * 3,
          vy: 3 + Math.random() * 2,
          length: 85 + Math.random() * 45,
          life: 0,
          maxLife: 42,
        });
      }

      shootingStars = shootingStars.filter((meteor) => {
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        meteor.life += 1;

        const progress = meteor.life / meteor.maxLife;
        const opacity = Math.sin(progress * Math.PI) * 0.75;
        const tailX = meteor.x - meteor.vx * (meteor.length / 8);
        const tailY = meteor.y - meteor.vy * (meteor.length / 8);

        const gradient = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
        gradient.addColorStop(0, 'rgba(148, 125, 255, 0)');
        gradient.addColorStop(0.6, `rgba(162, 231, 255, ${opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(224, 226, 237, ${opacity})`);

        ctx.globalAlpha = 1;
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.stroke();

        return meteor.life < meteor.maxLife;
      });

      ctx.globalAlpha = 1;
      animationId = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);

    if (prefersReducedMotion) {
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
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0b0e15]"
    >
      {/* Subtle Nebula Atmospheric Gradients */}
      <div className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-[#613de0]/12 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 w-[480px] h-[480px] rounded-full bg-[#00d2fd]/8 blur-[120px]" />
      <div className="absolute -bottom-48 left-1/3 w-[560px] h-[560px] rounded-full bg-[#947dff]/10 blur-[130px]" />

      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
