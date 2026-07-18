import { useEffect, useRef } from 'react';

/**
 * Animated cyber background: moving grid, glowing particles,
 * floating blurred orbs, neural network lines, and a noise overlay.
 * Rendered fixed behind all content.
 */
export default function CyberBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let raf;
        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        const COUNT = Math.min(70, Math.floor((w * h) / 26000));
        const dots = Array.from({ length: COUNT }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            r: Math.random() * 1.6 + 0.4,
        }));

        const palette = ['40,182,246', '0,229,255', '124,77,255', '79,123,255'];

        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            // neural network lines
            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const a = dots[i], b = dots[j];
                    const dx = a.x - b.x, dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 130) {
                        ctx.strokeStyle = `rgba(40,182,246,${0.12 * (1 - dist / 130)})`;
                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }
            // particles
            dots.forEach((d, idx) => {
                d.x += d.vx;
                d.y += d.vy;
                if (d.x < 0 || d.x > w) d.vx *= -1;
                if (d.y < 0 || d.y > h) d.vy *= -1;
                const c = palette[idx % palette.length];
                ctx.fillStyle = `rgba(${c},0.6)`;
                ctx.beginPath();
                ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                ctx.fill();
            });
            raf = requestAnimationFrame(draw);
        };
        draw();

        const onResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', onResize);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#070B16]">
            {/* deep gradient base */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#101A32_0%,#0D1325_45%,#070B16_100%)]" />

            {/* animated cyber grid */}
            <div className="absolute inset-0 bg-cyber-grid animate-grid-move opacity-60" />

            {/* slow moving light rays */}
            <div className="absolute -top-1/3 left-1/4 h-[140%] w-[40%] -rotate-12 bg-gradient-to-b from-electric/10 to-transparent blur-3xl" />
            <div className="absolute -top-1/4 right-1/4 h-[120%] w-[30%] rotate-6 bg-gradient-to-b from-neon/10 to-transparent blur-3xl" />

            {/* blurred glowing circles */}
            <div className="absolute top-[12%] left-[8%] h-72 w-72 rounded-full bg-electric/20 blur-[120px] animate-pulse-glow" />
            <div className="absolute top-[55%] right-[6%] h-80 w-80 rounded-full bg-neon/20 blur-[130px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-[8%] left-[40%] h-64 w-64 rounded-full bg-cyber/15 blur-[110px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

            {/* particle canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

            {/* noise texture overlay */}
            <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />

            {/* vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
        </div>
    );
}