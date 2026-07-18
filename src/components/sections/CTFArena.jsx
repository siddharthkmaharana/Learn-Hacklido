import { motion } from 'framer-motion';
import { Globe, KeyRound, Search, Bug, Cloud, Cpu, Brain, Lock, Clock, Users, Zap } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

const CHALLENGES = [
    { name: 'Broken Auth', cat: 'Web', icon: Globe, diff: 'Easy', pts: 150, solved: 4218, time: '30m', color: 'electric' },
    { name: 'RSA Rescue', cat: 'Crypto', icon: KeyRound, diff: 'Hard', pts: 400, solved: 612, time: '2h', color: 'neon' },
    { name: 'Memory Dump', cat: 'Forensics', icon: Search, diff: 'Medium', pts: 250, solved: 1890, time: '1h', color: 'cyber' },
    { name: 'Buffer Overflow', cat: 'Pwn', icon: Bug, diff: 'Insane', pts: 600, solved: 204, time: '4h', color: 'neon' },
    { name: 'Trace the Ghost', cat: 'OSINT', icon: Search, diff: 'Easy', pts: 120, solved: 5402, time: '45m', color: 'indigo2' },
    { name: 'S3 Bucket Hunt', cat: 'Cloud', icon: Cloud, diff: 'Medium', pts: 280, solved: 1340, time: '1.5h', color: 'electric' },
    { name: 'Binary Maze', cat: 'Reverse', icon: Cpu, diff: 'Hard', pts: 450, solved: 388, time: '3h', color: 'cyber' },
    { name: 'Jailbreak GPT', cat: 'AI', icon: Brain, diff: 'Medium', pts: 320, solved: 980, time: '1h', color: 'indigo2' },
];

const colorMap = {
    electric: { text: 'text-electric', border: 'group-hover:border-electric/50', glow: 'group-hover:shadow-[0_0_30px_rgba(40,182,246,0.25)]' },
    cyber: { text: 'text-cyber', border: 'group-hover:border-cyber/50', glow: 'group-hover:shadow-[0_0_30px_rgba(0,229,255,0.25)]' },
    neon: { text: 'text-neon', border: 'group-hover:border-neon/50', glow: 'group-hover:shadow-[0_0_30px_rgba(124,77,255,0.25)]' },
    indigo2: { text: 'text-indigo2', border: 'group-hover:border-indigo2/50', glow: 'group-hover:shadow-[0_0_30px_rgba(79,123,255,0.25)]' },
};

const diffColor = { Easy: 'text-emerald2', Medium: 'text-electric', Hard: 'text-neon', Insane: 'text-red-400' };

export default function CTFArena() {
    return (
        <section id="ctf" className="relative mx-auto max-w-7xl px-5 py-24">
            <div className="mb-12 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-electric">CTF Arena</p>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Compete. Solve. Climb the ranks.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                    Live capture-the-flag challenges across 8 categories. Earn points, claim flags, and rise on the global leaderboard.
                </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {CHALLENGES.map((c, i) => {
                    const col = colorMap[c.color];
                    const Icon = c.icon;
                    return (
                        <motion.div
                            key={c.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease }}
                            whileHover={{ y: -8 }}
                            className={`group relative overflow-hidden rounded-3xl glass border border-white/10 p-5 transition-all ${col.border} ${col.glow}`}
                        >
                            {/* neon animated border */}
                            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                style={{ boxShadow: 'inset 0 0 0 1px rgba(0,229,255,0.25)' }} />

                            <div className="relative">
                                <div className="flex items-center justify-between">
                                    <div className={`grid h-11 w-11 place-items-center rounded-xl bg-white/5 ${col.text}`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <span className={`rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-bold ${diffColor[c.diff]}`}>{c.diff}</span>
                                </div>

                                <span className="mt-4 block text-[10px] uppercase tracking-wider text-slate-500">{c.cat}</span>
                                <h3 className="font-heading text-lg font-bold text-white">{c.name}</h3>

                                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                                    <div className="rounded-lg bg-white/5 py-2">
                                        <Zap className="mx-auto h-3.5 w-3.5 text-cyber" />
                                        <p className="mt-1 font-heading text-sm font-bold text-white">{c.pts}</p>
                                    </div>
                                    <div className="rounded-lg bg-white/5 py-2">
                                        <Users className="mx-auto h-3.5 w-3.5 text-slate-400" />
                                        <p className="mt-1 font-heading text-sm font-bold text-white">{c.solved.toLocaleString()}</p>
                                    </div>
                                    <div className="rounded-lg bg-white/5 py-2">
                                        <Clock className="mx-auto h-3.5 w-3.5 text-slate-400" />
                                        <p className="mt-1 font-heading text-sm font-bold text-white">{c.time}</p>
                                    </div>
                                </div>

                                <button className={`mt-4 w-full rounded-xl bg-gradient-to-r from-electric/90 to-cyber/90 py-2.5 text-sm font-semibold text-white opacity-90 transition-opacity group-hover:opacity-100`}>
                                    Start Challenge
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}