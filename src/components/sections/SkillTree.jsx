import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Check, GitBranch, Brain, Shield, Terminal, Bug, Trophy } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

const NODES = [
    { id: 'fund', label: 'Fundamentals', x: 50, y: 8, icon: Shield, status: 'done', detail: 'Networking, Linux & Windows basics, the OSI model and core security principles.' },
    { id: 'web', label: 'Web Security', x: 18, y: 32, icon: GitBranch, status: 'done', detail: 'OWASP Top 10, SQL injection, XSS, SSRF and modern web exploitation.' },
    { id: 'net', label: 'Network', x: 50, y: 32, icon: Terminal, status: 'active', detail: 'Scanning, enumeration, packet analysis and network pivoting techniques.' },
    { id: 'crypto', label: 'Cryptography', x: 82, y: 32, icon: Brain, status: 'locked', detail: 'Symmetric & asymmetric crypto, hashing, PKI and common attacks.' },
    { id: 're', label: 'Reverse Eng', x: 30, y: 58, icon: Bug, status: 'locked', detail: 'Static & dynamic analysis with Ghidra, IDA and disassembly.' },
    { id: 'ad', label: 'Active Dir', x: 70, y: 58, icon: Lock, status: 'locked', detail: 'Kerberos attacks, BloodHound, Golden Tickets and AD exploitation.' },
    { id: 'red', label: 'Red Team', x: 30, y: 84, icon: Terminal, status: 'locked', detail: 'Adversary simulation, C2 frameworks and full attack chain execution.' },
    { id: 'blue', label: 'Blue Team', x: 70, y: 84, icon: Trophy, status: 'locked', detail: 'Detection engineering, SIEM, incident response and threat hunting.' },
];

const EDGES = [
    ['fund', 'web'], ['fund', 'net'], ['fund', 'crypto'],
    ['web', 're'], ['net', 'ad'], ['crypto', 'ad'],
    ['re', 'red'], ['ad', 'red'], ['ad', 'blue'], ['net', 'blue'],
];

const statusStyle = {
    done: { ring: 'stroke-emerald2', fill: '#00D084', text: 'text-emerald2' },
    active: { ring: 'stroke-electric', fill: '#28B6F6', text: 'text-electric' },
    locked: { ring: 'stroke-slate-600', fill: '#334155', text: 'text-slate-500' },
};

export default function SkillTree() {
    const [selected, setSelected] = useState('net');
    const node = NODES.find((n) => n.id === selected);

    return (
        <section className="relative mx-auto max-w-7xl px-5 py-24">
            <div className="mb-12 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">Interactive Roadmap</p>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    A futuristic skill tree, not a boring grid
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                    Glowing nodes mark mastery. Locked nodes stay dark until you unlock them. Click any node to inspect the path.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
                <div className="glass relative overflow-hidden rounded-3xl p-4 sm:p-8">
                    <div className="absolute inset-0 bg-cyber-grid opacity-30" />
                    <svg viewBox="0 0 100 100" className="relative mx-auto aspect-square w-full max-w-2xl" preserveAspectRatio="xMidYMid meet">
                        {EDGES.map(([a, b], i) => {
                            const na = NODES.find((n) => n.id === a);
                            const nb = NODES.find((n) => n.id === b);
                            const lit = na.status === 'done' && (nb.status === 'done' || nb.status === 'active');
                            return (
                                <line key={i} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} strokeWidth="0.4"
                                    className={lit ? 'stroke-electric' : 'stroke-slate-700'} strokeOpacity={lit ? 0.6 : 0.4} />
                            );
                        })}
                        {NODES.map((n) => {
                            const s = statusStyle[n.status];
                            const isSel = selected === n.id;
                            return (
                                <g key={n.id} className="cursor-pointer" onClick={() => setSelected(n.id)}>
                                    {n.status === 'active' && (
                                        <circle cx={n.x} cy={n.y} r="3" fill="none" className="stroke-electric" strokeWidth="0.3" opacity="0.5">
                                            <animate attributeName="r" values="3;6;3" dur="2.5s" repeatCount="indefinite" />
                                            <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
                                        </circle>
                                    )}
                                    <circle cx={n.x} cy={n.y} r={isSel ? '4' : '3.4'} fill={n.status === 'locked' ? 'rgba(30,41,59,0.9)' : s.fill}
                                        className={s.ring} strokeWidth={isSel ? '0.8' : '0.4'} />
                                    {isSel && <circle cx={n.x} cy={n.y} r="5.5" fill="none" stroke="#00E5FF" strokeWidth="0.3" opacity="0.7" />}
                                    <text x={n.x} y={n.y + 7} textAnchor="middle" className="fill-slate-300 font-body" fontSize="2.4">{n.label}</text>
                                </g>
                            );
                        })}
                    </svg>
                </div>

                <motion.div
                    key={selected}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease }}
                    className="glass-strong rounded-3xl p-6"
                >
                    <div className="flex items-center gap-3">
                        <div className={`grid h-12 w-12 place-items-center rounded-xl bg-white/5 ${statusStyle[node.status].text}`}>
                            {node.status === 'locked' ? <Lock className="h-5 w-5" /> :
                                node.status === 'done' ? <Check className="h-5 w-5" /> : <node.icon className="h-5 w-5" />}
                        </div>
                        <div>
                            <h3 className="font-heading text-xl font-bold text-white">{node.label}</h3>
                            <p className={`text-xs uppercase tracking-wide ${statusStyle[node.status].text}`}>{node.status}</p>
                        </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400">{node.detail}</p>

                    <div className="mt-5 space-y-2.5">
                        {node.status === 'done' && (
                            <div className="flex items-center gap-2 text-sm text-emerald2"><Check className="h-4 w-4" /> Completed — badge earned</div>
                        )}
                        {node.status === 'active' && (
                            <div className="flex items-center gap-2 text-sm text-electric"><Terminal className="h-4 w-4" /> In progress · 3 labs remaining</div>
                        )}
                        {node.status === 'locked' && (
                            <div className="flex items-center gap-2 text-sm text-slate-500"><Lock className="h-4 w-4" /> Complete prerequisites to unlock</div>
                        )}
                    </div>

                    <button className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${node.status === 'locked'
                            ? 'glass text-slate-500'
                            : 'bg-gradient-to-r from-electric to-cyber text-white shadow-[0_0_24px_rgba(40,182,246,0.4)]'
                        }`}>
                        {node.status === 'locked' ? 'Locked' : node.status === 'done' ? 'Review Path' : 'Continue Path'}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}