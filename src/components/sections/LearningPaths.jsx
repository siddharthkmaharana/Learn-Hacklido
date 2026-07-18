import { motion } from 'framer-motion';
import {
    Globe, Network, Cloud, Building2, Terminal as TerminalIcon, Monitor,
    Smartphone, Plug, Search, KeyRound, Cpu, Bug, Bot, BrainCircuit,
    Sword, Shield, Eye, Radio, Target,
} from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

const PATHS = [
    { name: 'Web Security', icon: Globe, hours: 28, difficulty: 'Intermediate', progress: 62, instructor: 'M. Vega', color: 'electric', tag: 'OWASP Top 10' },
    { name: 'Network Security', icon: Network, hours: 24, difficulty: 'Beginner', progress: 78, instructor: 'A. Cole', color: 'cyber', tag: 'Nmap · Wireshark' },
    { name: 'Cloud Security', icon: Cloud, hours: 32, difficulty: 'Advanced', progress: 35, instructor: 'S. Rao', color: 'indigo2', tag: 'AWS · Azure' },
    { name: 'Active Directory', icon: Building2, hours: 20, difficulty: 'Advanced', progress: 48, instructor: 'J. Park', color: 'neon', tag: 'Kerberos · BloodHound' },
    { name: 'Linux', icon: TerminalIcon, hours: 18, difficulty: 'Beginner', progress: 90, instructor: 'R. Diaz', color: 'emerald2', tag: 'Privilege Escalation' },
    { name: 'Windows', icon: Monitor, hours: 22, difficulty: 'Intermediate', progress: 55, instructor: 'L. Chen', color: 'electric', tag: 'AD · PowerShell' },
    { name: 'Mobile Security', icon: Smartphone, hours: 26, difficulty: 'Advanced', progress: 20, instructor: 'K. Okafor', color: 'cyber', tag: 'Android · iOS' },
    { name: 'API Security', icon: Plug, hours: 16, difficulty: 'Intermediate', progress: 44, instructor: 'T. Brandt', color: 'indigo2', tag: 'REST · GraphQL' },
    { name: 'OSINT', icon: Search, hours: 14, difficulty: 'Beginner', progress: 67, instructor: 'N. Adler', color: 'neon', tag: 'Recon · Intel' },
    { name: 'Cryptography', icon: KeyRound, hours: 20, difficulty: 'Advanced', progress: 31, instructor: 'E. Vance', color: 'electric', tag: 'AES · RSA · ECC' },
    { name: 'Reverse Engineering', icon: Cpu, hours: 30, difficulty: 'Expert', progress: 18, instructor: 'D. Holt', color: 'cyber', tag: 'Ghidra · IDA' },
    { name: 'Malware Analysis', icon: Bug, hours: 28, difficulty: 'Expert', progress: 12, instructor: 'P. Sandoval', color: 'neon', tag: 'Sandbox · YARA' },
    { name: 'Prompt Injection', icon: Bot, hours: 12, difficulty: 'Intermediate', progress: 40, instructor: 'A. Reyes', color: 'indigo2', tag: 'LLM Attacks' },
    { name: 'AI Security', icon: BrainCircuit, hours: 22, difficulty: 'Advanced', progress: 26, instructor: 'V. Moreau', color: 'emerald2', tag: 'Model · Data Poison' },
    { name: 'Red Team', icon: Sword, hours: 34, difficulty: 'Expert', progress: 30, instructor: 'M. Vega', color: 'electric', tag: 'Adversary Simulation' },
    { name: 'Blue Team', icon: Shield, hours: 30, difficulty: 'Advanced', progress: 52, instructor: 'A. Cole', color: 'cyber', tag: 'Detection · IR' },
    { name: 'Purple Team', icon: Eye, hours: 28, difficulty: 'Advanced', progress: 38, instructor: 'S. Rao', color: 'neon', tag: 'Attack + Defense' },
    { name: 'SOC Analyst', icon: Radio, hours: 26, difficulty: 'Intermediate', progress: 60, instructor: 'J. Park', color: 'indigo2', tag: 'SIEM · Splunk' },
    { name: 'Bug Bounty', icon: Target, hours: 24, difficulty: 'Intermediate', progress: 47, instructor: 'L. Chen', color: 'electric', tag: 'Recon · Disclosure' },
];

const colorMap = {
    electric: { text: 'text-electric', bar: 'from-electric to-cyber', glow: 'group-hover:shadow-[0_0_30px_rgba(40,182,246,0.3)]' },
    cyber: { text: 'text-cyber', bar: 'from-cyber to-electric', glow: 'group-hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]' },
    neon: { text: 'text-neon', bar: 'from-neon to-indigo2', glow: 'group-hover:shadow-[0_0_30px_rgba(124,77,255,0.3)]' },
    indigo2: { text: 'text-indigo2', bar: 'from-indigo2 to-electric', glow: 'group-hover:shadow-[0_0_30px_rgba(79,123,255,0.3)]' },
    emerald2: { text: 'text-emerald2', bar: 'from-emerald2 to-cyber', glow: 'group-hover:shadow-[0_0_30px_rgba(0,208,132,0.3)]' },
};

export default function LearningPaths() {
    return (
        <section id="paths" className="relative mx-auto max-w-7xl px-5 py-24">
            <div className="mb-12 text-center">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-semibold uppercase tracking-[0.25em] text-electric">
                    Learning Paths
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}
                    className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                    Choose your path to mastery
                </motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                    className="mx-auto mt-4 max-w-2xl text-slate-400">
                    250+ structured tracks from beginner to expert. Track progress, earn badges, and validate skills with hands-on labs.
                </motion.p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {PATHS.map((p, i) => {
                    const c = colorMap[p.color];
                    const Icon = p.icon;
                    return (
                        <motion.div
                            key={p.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease }}
                            whileHover={{ y: -6 }}
                            className={`group relative overflow-hidden rounded-3xl glass p-5 transition-shadow ${c.glow}`}
                        >
                            {/* animated gradient border on hover */}
                            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                style={{ background: 'linear-gradient(135deg, rgba(40,182,246,0.12), transparent 40%, rgba(124,77,255,0.12))' }} />

                            <div className="relative">
                                <div className="flex items-start justify-between">
                                    <div className={`grid h-11 w-11 place-items-center rounded-xl bg-white/5 ${c.text}`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-slate-300">
                                        {p.difficulty}
                                    </span>
                                </div>

                                <h3 className="mt-4 font-heading text-lg font-bold text-white">{p.name}</h3>
                                <p className={`mt-0.5 text-xs ${c.text}`}>{p.tag}</p>

                                <div className="mt-4">
                                    <div className="flex items-center justify-between text-xs text-slate-400">
                                        <span>{p.hours}h · {p.progress}%</span>
                                        <span>{p.instructor}</span>
                                    </div>
                                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                                        <motion.div
                                            initial={{ width: 0 }} whileInView={{ width: `${p.progress}%` }} viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 + (i % 4) * 0.08, ease }}
                                            className={`h-full rounded-full bg-gradient-to-r ${c.bar}`}
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex -space-x-1.5">
                                        {['🔥', '⭐', '🏆'].map((b, bi) => (
                                            <span key={bi} className="grid h-6 w-6 place-items-center rounded-full border border-white/10 bg-ink-2 text-[10px]">{b}</span>
                                        ))}
                                    </div>
                                    <span className={`text-xs font-semibold ${c.text} transition-transform group-hover:translate-x-1`}>Explore →</span>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}