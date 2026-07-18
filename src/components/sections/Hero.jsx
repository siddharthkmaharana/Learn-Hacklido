import { motion } from 'framer-motion';
import { Play, Rocket, Terminal, ShieldCheck, Activity, Globe2, Lock } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

function TerminalCard() {
    const lines = [
        { t: '$ nmap -sV 10.10.14.8', c: 'text-electric' },
        { t: 'PORT     STATE SERVICE  VERSION', c: 'text-slate-400' },
        { t: '22/tcp   open  ssh      OpenSSH 8.9', c: 'text-slate-200' },
        { t: '80/tcp   open  http     nginx 1.24', c: 'text-slate-200' },
        { t: '443/tcp  open  ssl/http nginx 1.24', c: 'text-slate-200' },
        { t: '$ sqlmap -u "http://target/login" --data="user=admin"', c: 'text-cyber' },
        { t: '[!] vulnerability detected: boolean-based', c: 'text-emerald2' },
        { t: '[✓] flag captured: HDL{syn3rgy_r3d_t34m}', c: 'text-neon' },
    ];
    return (
        <div className="glass-strong overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald2/80" />
                <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-slate-400">
                    <Terminal className="h-3.5 w-3.5" /> root@hacklido: ~/labs
                </span>
            </div>
            <div className="space-y-1.5 p-4 font-mono text-xs sm:text-sm">
                {lines.map((l, i) => (
                    <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.45, duration: 0.4, ease }}
                        className={l.c}
                    >
                        {l.t}
                    </motion.p>
                ))}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + lines.length * 0.45 }}
                    className="text-emerald2"
                >
                    <span className="animate-blink">▋</span>
                </motion.p>
            </div>
        </div>
    );
}

function FloatingCard({ children, className, delay, style }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8, ease }}
            style={style}
            className={`glass-strong absolute rounded-2xl p-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.4)] animate-float ${className}`}
        >
            {children}
        </motion.div>
    );
}

export default function Hero() {
    return (
        <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-32 pb-16 lg:pt-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Left */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease }}
                        className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/5 px-3.5 py-1.5 text-xs font-medium text-electric"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
                        </span>
                        500K+ learners · Live CTF arena online
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease }}
                        className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl"
                    >
                        Learn Cybersecurity Through{' '}
                        <span className="gradient-text neon-text-blue">Real-World Attacks.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease }}
                        className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
                    >
                        Master penetration testing, web security, cloud exploitation, reverse engineering, AI security,
                        and defensive operations through immersive hands-on labs.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease }}
                        className="mt-8 flex flex-wrap gap-3"
                    >
                        <a href="#paths" className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-electric to-cyber px-6 py-3.5 font-semibold text-white shadow-[0_0_28px_rgba(40,182,246,0.45)] transition-transform hover:scale-[1.03]">
                            <span className="relative z-10 flex items-center gap-2"><Rocket className="h-4 w-4" /> Start Learning</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-cyber to-neon opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                        <a href="#ctf" className="rounded-2xl glass px-6 py-3.5 font-semibold text-white transition-colors hover:border-electric/40 hover:bg-white/5 flex items-center gap-2">
                            <Terminal className="h-4 w-4 text-cyber" /> Explore Labs
                        </a>
                        <a href="#dashboard" className="rounded-2xl glass px-6 py-3.5 font-semibold text-white transition-colors hover:border-electric/40 hover:bg-white/5 flex items-center gap-2">
                            <Play className="h-4 w-4 text-neon" /> Watch Demo
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500"
                    >
                        <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-emerald2" /> Industry-aligned certifications</span>
                        <span className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-electric" /> Browser-based labs</span>
                        <span className="flex items-center gap-1.5"><Activity className="h-4 w-4 text-cyber" /> Real-time progress</span>
                    </motion.div>
                </div>

                {/* Right — dashboard cluster */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease }}
                    className="relative mx-auto h-[26rem] w-full max-w-lg sm:h-[30rem]"
                >
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-electric/10 via-transparent to-neon/10 blur-2xl" />

                    <div className="relative h-full">
                        {/* main terminal */}
                        <div className="absolute left-0 top-6 w-full animate-float">
                            <TerminalCard />
                        </div>

                        {/* security score card */}
                        <FloatingCard delay={0.9} className="right-0 top-0 w-44">
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-slate-400">Cyber Score</span>
                                <Activity className="h-4 w-4 text-cyber" />
                            </div>
                            <p className="mt-1 font-heading text-2xl font-bold text-white">8,942</p>
                            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-emerald2 to-cyber" />
                            </div>
                        </FloatingCard>

                        {/* globe / nodes card */}
                        <FloatingCard delay={1.1} className="-left-2 bottom-4 w-48" style={{ animationDelay: '1.5s' }}>
                            <div className="flex items-center gap-2">
                                <Globe2 className="h-4 w-4 text-neon" />
                                <span className="text-xs text-slate-400">Active nodes</span>
                            </div>
                            <p className="mt-1 font-heading text-2xl font-bold text-white">128<span className="text-sm text-emerald2">+12</span></p>
                            <div className="mt-2 flex gap-1">
                                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                                    <span key={i} className="h-6 w-1.5 rounded-full bg-gradient-to-t from-electric/30 to-cyber" style={{ height: `${10 + (i % 4) * 6}px` }} />
                                ))}
                            </div>
                        </FloatingCard>

                        {/* threat shield */}
                        <FloatingCard delay={1.3} className="right-2 bottom-10" style={{ animationDelay: '0.8s' }}>
                            <div className="flex items-center gap-2">
                                <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald2/15">
                                    <ShieldCheck className="h-4 w-4 text-emerald2" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400">Threats blocked</p>
                                    <p className="font-heading text-sm font-bold text-white">1,204 today</p>
                                </div>
                            </div>
                        </FloatingCard>
                    </div>
                </motion.div>
            </div>

            {/* Stats + partners */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-20"
            >
                <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-500">Trusted by thousands of learners & partner companies</p>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {[
                        { v: '1,000+', l: 'Hands-on Labs' },
                        { v: '250+', l: 'Learning Paths' },
                        { v: '500K+', l: 'Active Users' },
                        { v: '24/7', l: 'Live CTF Challenges' },
                    ].map((s) => (
                        <div key={s.l} className="glass rounded-2xl px-5 py-6 text-center">
                            <p className="font-heading text-3xl font-bold gradient-text">{s.v}</p>
                            <p className="mt-1 text-sm text-slate-400">{s.l}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-50">
                    {['OSCP', 'CEH', 'CISSP', 'CompTIA', 'AWS', 'OffSec', 'SANS'].map((c) => (
                        <span key={c} className="font-heading text-sm font-semibold tracking-wide text-slate-400">{c}</span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}