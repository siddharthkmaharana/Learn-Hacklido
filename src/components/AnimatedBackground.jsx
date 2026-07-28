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
    let streams = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize Network Particles (Cybersecurity node structure)
    const initParticles = () => {
      const count = Math.min(40, Math.floor(window.innerWidth / 40));
      particles = Array.from({ length: count }, () => {
        const isDataNode = Math.random() > 0.6;
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: isDataNode ? 8 : Math.random() * 2 + 1,
          isDataNode,
          char: Math.random() > 0.5 ? '1' : '0',
          charTimer: Math.random() * 100,
          color: isDataNode ? '#00E5FF' : '#28B6F6'
        };
      });
    };

    // Initialize Cyber Code Rain Streams
    const initStreams = () => {
      const fontSize = 12;
      const columns = Math.ceil(canvas.width / 32);
      const cyberWords = [
        'SECURE', 'BYPASS', 'ENCRYPT', 'DECRYPT', 'FIREWALL', 'EXPLOIT',
        'KERNEL', 'SSL', 'CIPHER', 'ROOT', 'ACCESS', 'DENIED', 'GRANTED',
        'PACKET', 'HASH', 'PORT', 'TOKEN', 'NODE', 'CYBER'
      ];

      streams = Array.from({ length: columns }, (_, i) => ({
        x: i * 32,
        y: Math.random() * -canvas.height,
        speed: 1.0 + Math.random() * 1.5,
        chars: [],
        maxLength: 8 + Math.floor(Math.random() * 12),
        word: Math.random() > 0.85 ? cyberWords[Math.floor(Math.random() * cyberWords.length)] : null,
        wordIndex: 0,
        opacity: 0.05 + Math.random() * 0.15
      }));
    };

    initParticles();
    initStreams();

    const handleMouse = (e) => {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', handleMouse);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Layer 1: Draw Falling Code Rain (Subtle background matrix)
      ctx.textBaseline = 'top';
      ctx.font = "500 11px 'JetBrains Mono', 'Space Grotesk', monospace";

      streams.forEach((stream) => {
        let char;
        if (stream.word) {
          char = stream.word[stream.wordIndex];
          stream.wordIndex = (stream.wordIndex + 1) % stream.word.length;
          if (stream.wordIndex === 0 && Math.random() > 0.4) {
            stream.word = null;
          }
        } else {
          const rand = Math.random();
          if (rand < 0.5) {
            char = Math.random() > 0.5 ? '1' : '0';
          } else if (rand < 0.8) {
            char = Math.floor(Math.random() * 16).toString(16).toUpperCase();
          } else {
            char = ['$', '#', '@', '&', '%', '*', '[', ']'][Math.floor(Math.random() * 8)];
          }
        }

        stream.chars.push({ char, y: stream.y });
        if (stream.chars.length > stream.maxLength) {
          stream.chars.shift();
        }

        stream.chars.forEach((c, idx) => {
          const progress = idx / stream.chars.length;
          let color = stream.word ? '#7C4DFF' : (idx % 2 === 0 ? '#28B6F6' : '#00E5FF');
          
          if (idx === stream.chars.length - 1) {
            color = '#FFFFFF';
          }

          ctx.fillStyle = color;
          ctx.globalAlpha = progress * stream.opacity;
          ctx.fillText(c.char, stream.x, c.y);
        });

        stream.y += stream.speed;

        if (stream.y > canvas.height) {
          stream.y = -30;
          stream.speed = 1.0 + Math.random() * 1.5;
          stream.maxLength = 8 + Math.floor(Math.random() * 12);
          stream.opacity = 0.05 + Math.random() * 0.15;
          stream.wordIndex = 0;
        }
      });

      // Layer 2: Draw Network Connections & Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        if (p.isDataNode) {
          // Render data node showing flickering 0/1 bits
          p.charTimer -= 1;
          if (p.charTimer <= 0) {
            p.char = Math.random() > 0.5 ? '1' : '0';
            p.charTimer = 20 + Math.random() * 60;
          }
          ctx.font = "600 12px 'JetBrains Mono', monospace";
          ctx.fillStyle = p.color;
          ctx.globalAlpha = 0.35;
          ctx.fillText(p.char, p.x - 4, p.y - 6);
          
          // Draw small bounding box
          ctx.strokeStyle = '#00E5FF';
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = 0.15;
          ctx.strokeRect(p.x - 8, p.y - 8, 16, 16);
        } else {
          // Regular node
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = 0.45;
          ctx.fill();
        }
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particles[i].isDataNode || particles[j].isDataNode ? '#00E5FF' : '#4F7BFF';
            ctx.globalAlpha = (1 - dist / 150) * 0.12;
            ctx.lineWidth = 0.6;
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
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#050811]">
      {/* Cybersecurity scan grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-[0.25]" />

      {/* Cyberpunk dark space gradients (much softer, high-tech, and professional) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% -10%, rgba(0, 229, 255, 0.08), transparent 70%), radial-gradient(circle 80% 60% at 90% 80%, rgba(124, 77, 255, 0.04), transparent 80%), radial-gradient(circle 50% 50% at 10% 90%, rgba(40, 182, 246, 0.05), transparent 70%)'
        }}
      />

      {/* Futuristic Scanline Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
          backgroundSize: '100% 4px'
        }}
      />

      {/* Animated Cybersecurity Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-[0.85] mix-blend-screen" />

      {/* Interactive mouse tracking glow */}
      <div
        className="absolute inset-0 transition-all duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(circle 350px at ${mouseRef.current.x * 100}% ${mouseRef.current.y * 100}%, rgba(0, 229, 255, 0.04), transparent)`
        }}
      />

      {/* Film grain noise overlay */}
      <div className="noise-overlay" />
    </div>
  );
}