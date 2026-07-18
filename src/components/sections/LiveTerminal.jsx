import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu } from 'lucide-react';

const SEQUENCE = [
    {
        cmd: 'nmap -sV -sC 10.10.14.8', out: [
            'Starting Nmap 7.94 ( https://nmap.org )',
            'PORT    STATE SERVICE  VERSION',
            '22/tcp  open  ssh      OpenSSH 8.9p1',
            '80/tcp  open  http     nginx 1.24.0',
            'Nmap done: 1 IP address scanned in 4.21s',
        ]
    },
    {
        cmd: 'gobuster dir -u http://target -w wordlist.txt', out: [
            '/admin                (Status: 301) [Size: 312]',
            '/login                (Status: 200) [Size: 1284]',
            '/api                  (Status: 200) [Size: 42]',
            '/backup               (Status: 403) [Size: 178]',
        ]
    },
    {
        cmd: 'sqlmap -u "http://target/login" --forms --batch', out: [
            '[*] testing for boolean-based blind',
            '[*] testing for time-based blind',
            '[!] vulnerability detected: boolean-based blind',
            '[*] fetched: HDL{sql1nj3ct10n_m4st3r}',
        ]
    },
    {
        cmd: 'hydra -l admin -P rockyou.txt ssh://10.10.14.8', out: [
            '[ATTEMPT] target 10.10.14.8 - login admin - pass 123456',
            '[ATTEMPT] target 10.10.14.8 - login admin - pass summer',
            '[22][ssh] host: 10.10.14.8  login: admin  password: summer2024',
        ]
    },
    {
        cmd: 'ffuf -u http://target/FUZZ -w api-endpoints.txt', out: [
            'api/v1/users           [Status: 200]',
            'api/v1/secret          [Status: 401]',
            'api/v2/admin           [Status: 403]',
            'api/internal/debug     [Status: 200]',
        ]
    },
];

export default function LiveTerminal() {
    const [lines, setLines] = useState([]);
    const [currentCmd, setCurrentCmd] = useState('');
    const [phase, setPhase] = useState('type'); // type -> out -> next
    const [seqIdx, setSeqIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [outIdx, setOutIdx] = useState(0);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [lines, currentCmd, phase]);

    // typing the command
    useEffect(() => {
        if (phase !== 'type') return;
        const target = SEQUENCE[seqIdx].cmd;
        if (charIdx < target.length) {
            const t = setTimeout(() => {
                setCurrentCmd(target.slice(0, charIdx + 1));
                setCharIdx((c) => c + 1);
            }, 45 + Math.random() * 50);
            return () => clearTimeout(t);
        } else {
            const t = setTimeout(() => {
                setLines((l) => [...l, { type: 'cmd', text: target }]);
                setCurrentCmd('');
                setPhase('out');
                setOutIdx(0);
            }, 400);
            return () => clearTimeout(t);
        }
    }, [phase, charIdx, seqIdx]);

    // printing output
    useEffect(() => {
        if (phase !== 'out') return;
        const outs = SEQUENCE[seqIdx].out;
        if (outIdx < outs.length) {
            const t = setTimeout(() => {
                setLines((l) => [...l, { type: 'out', text: outs[outIdx] }]);
                setOutIdx((o) => o + 1);
            }, 350);
            return () => clearTimeout(t);
        } else {
            const t = setTimeout(() => {
                if (seqIdx + 1 < SEQUENCE.length) {
                    setSeqIdx((s) => s + 1);
                    setCharIdx(0);
                    setPhase('type');
                } else {
                    // restart loop
                    setLines([]);
                    setSeqIdx(0);
                    setCharIdx(0);
                    setPhase('type');
                }
            }, 1600);
            return () => clearTimeout(t);
        }
    }, [phase, outIdx, seqIdx]);

    return (
        <section id="terminal" className="relative mx-auto max-w-5xl px-5 py-24">
            <div className="mb-12 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyber">Live Labs</p>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Real tools. Real targets. Right in your browser.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                    A fully interactive terminal streams live attacks — nmap, gobuster, sqlmap, hydra, ffuf and more. No setup required.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="glass-strong overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-500/80" />
                        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                        <span className="h-3 w-3 rounded-full bg-emerald2/80" />
                        <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-slate-400">
                            <Terminal className="h-3.5 w-3.5" /> hacklido-lab · live session
                        </span>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full bg-emerald2/10 px-2.5 py-1 text-[10px] font-medium text-emerald2">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald2" /> connected
                    </span>
                </div>

                <div ref={scrollRef} className="h-[24rem] overflow-y-auto p-5 font-mono text-xs sm:text-sm">
                    {lines.map((l, i) => (
                        <p key={i} className={l.type === 'cmd' ? 'text-electric' : 'text-slate-300'}>
                            {l.type === 'cmd' ? `$ ${l.text}` : l.text}
                        </p>
                    ))}
                    {phase === 'type' && (
                        <p className="text-electric">
                            $ {currentCmd}<span className="animate-blink">▋</span>
                        </p>
                    )}
                    {phase === 'out' && outIdx < SEQUENCE[seqIdx].out.length && (
                        <p className="text-emerald2"><span className="animate-blink">▋</span></p>
                    )}
                </div>

                <div className="flex flex-wrap items-center gap-2 border-t border-white/10 px-4 py-3">
                    <span className="flex items-center gap-1.5 text-xs text-slate-500"><Cpu className="h-3.5 w-3.5" /> Tools available:</span>
                    {['nmap', 'gobuster', 'curl', 'sqlmap', 'hydra', 'ffuf', 'john', 'burpsuite'].map((t) => (
                        <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[11px] text-slate-400">{t}</span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}