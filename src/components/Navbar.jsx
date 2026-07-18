import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';

const LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'Learning Paths', href: '#paths' },
    { label: 'Labs', href: '#terminal' },
    { label: 'CTF Arena', href: '#ctf' },
    { label: 'Leaderboard', href: '#leaderboard' },
    { label: 'Community', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#footer' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24));

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => (document.body.style.overflow = '');
    }, [open]);

    return (
        <motion.header
            initial={{ y: -90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 16 }}
            className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
        >
            <nav
                className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5 ${scrolled ? 'glass-strong shadow-[0_8px_40px_rgba(0,0,0,0.45)]' : 'glass'
                    }`}
                style={{ width: scrolled ? 'min(72rem, 100%)' : 'min(80rem, 100%)', transition: 'width 0.5s ease' }}
            >
                <a href="#home" className="flex items-center gap-2.5">
                    <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric to-neon shadow-[0_0_20px_rgba(40,182,246,0.5)]">
                        <Shield className="h-5 w-5 text-white" strokeWidth={2.4} />
                    </div>
                    <span className="font-heading text-lg font-bold tracking-tight text-white">
                        Hacklido<span className="gradient-text">Learn</span>
                    </span>
                </a>

                <div className="hidden items-center gap-1 lg:flex">
                    {LINKS.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white hover:bg-white/5"
                        >
                            {l.label}
                        </a>
                    ))}
                </div>

                <div className="hidden items-center gap-2 lg:flex">
                    <a
                        href="#home"
                        className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:text-white"
                    >
                        Login
                    </a>
                    <a
                        href="#pricing"
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-electric to-cyber px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(40,182,246,0.45)] transition-transform hover:scale-[1.03]"
                    >
                        <span className="relative z-10">Sign Up</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-cyber to-neon opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                </div>

                <button
                    onClick={() => setOpen((o) => !o)}
                    className="grid h-10 w-10 place-items-center rounded-xl glass text-white lg:hidden"
                    aria-label="Toggle menu"
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </nav>

            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-strong absolute inset-x-4 top-20 rounded-2xl p-4 lg:hidden"
                >
                    <div className="flex flex-col gap-1">
                        {LINKS.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5"
                            >
                                {l.label}
                            </a>
                        ))}
                        <div className="mt-2 flex gap-2">
                            <a href="#home" onClick={() => setOpen(false)} className="flex-1 rounded-xl glass px-4 py-2.5 text-center text-sm font-semibold text-white">
                                Login
                            </a>
                            <a href="#pricing" onClick={() => setOpen(false)} className="flex-1 rounded-xl bg-gradient-to-r from-electric to-cyber px-4 py-2.5 text-center text-sm font-semibold text-white">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}