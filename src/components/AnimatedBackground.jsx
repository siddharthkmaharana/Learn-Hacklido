import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const initParticles = () => {
      const count = Math.min(50, Math.floor(window.innerWidth / 30));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 0.5,
        color: ['#28B6F6', '#00E5FF', '#4F7BFF', '#7C4DFF'][Math.floor(Math.random() * 4)]
      }));
    };
    initParticles();

    const handleMouse = (e) => {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', handleMouse);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.4;
        ctx.fill();
      });

      // Neural network lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = '#28B6F6';
            ctx.globalAlpha = (1 - dist / 130) * 0.08;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden" style={{ background: '#070B16' }}>
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />

      {/* Aurora orbs */}
      <div
        className="aurora-orb"
        style={{ width: '600px', height: '600px', top: '-10%', left: '-5%', background: '#28B6F6' }}
      />
      <div
        className="aurora-orb"
        style={{ width: '500px', height: '500px', bottom: '-5%', right: '0%', background: '#7C4DFF', animationDelay: '-6s' }}
      />
      <div
        className="aurora-orb"
        style={{ width: '400px', height: '400px', top: '40%', left: '50%', background: '#00E5FF', animationDelay: '-3s' }}
      />

      {/* Light rays */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(40,182,246,0.15), transparent)'
        }}
      />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Mouse parallax glow */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle 400px at ${mouseRef.current.x * 100}% ${mouseRef.current.y * 100}%, rgba(40,182,246,0.06), transparent)`
        }}
      />

      {/* Noise texture */}
      <div className="noise-overlay" />
    </div>
  );
}