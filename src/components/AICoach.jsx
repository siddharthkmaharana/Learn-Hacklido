import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, X, Bot } from 'lucide-react';

const SUGGESTIONS = [
    'Hint for SQL injection lab',
    'Recommend a learning path',
    'Show my progress insights',
    'Walkthrough: nmap basics',
];

const SCRIPTED = {
    'Hint for SQL injection lab':
        'Try a UNION-based payload: ?id=1 UNION SELECT 1,2,table_name FROM information_schema.tables--. Map columns first, then enumerate. The flag is stored in a column named `secret`.',
    'Recommend a learning path':
        'Based on your activity, I recommend the **Web Security** path (28h, intermediate), then branch into **API Security**. You already cleared 40% of Web basics — finishing it unlocks the Red Team track.',
    'Show my progress insights':
        'You are on a 12-day streak. Top skill: Network Security (78%). Weakest area: Cryptography (31%). Spend ~3h/week there to level up to Tier 4.',
    'Walkthrough: nmap basics':
        '1. nmap -sV -sC target (version + scripts).\n2. Add -p- to scan all ports.\n3. Use --open to filter open ports.\n4. nmap -A enables OS detection + traceroute.',
};

export default function AICoach() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Hi, I'm your AI Security Coach. I can give hints, recommend labs, and track your progress. How can I help?" },
    ]);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, typing]);

    const send = (text) => {
        const content = text || input;
        if (!content.trim()) return;
        setMessages((m) => [...m, { role: 'user', content }]);
        setInput('');
        setTyping(true);
        setTimeout(() => {
            const reply = SCRIPTED[content] || "Great question! I'd analyze your learning data and suggest the best next lab. Connect your account for personalized insights.";
            setMessages((m) => [...m, { role: 'assistant', content: reply }]);
            setTyping(false);
        }, 1100);
    };

    return (
        <>
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 15 }}
                onClick={() => setOpen((o) => !o)}
                className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-electric to-neon shadow-[0_0_30px_rgba(124,77,255,0.5)]"
                aria-label="Open AI Coach"
            >
                <span className="absolute inset-0 rounded-2xl bg-electric/40 blur-md animate-pulse-glow" />
                {open ? <X className="relative h-6 w-6 text-white" /> : <Sparkles className="relative h-6 w-6 text-white" />}
            </motion.button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.92 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                        className="glass-strong fixed bottom-24 right-5 z-50 flex h-[30rem] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                    >
                        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
                            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric to-neon">
                                <Bot className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <p className="font-heading text-sm font-bold text-white">AI Security Coach</p>
                                <p className="flex items-center gap-1.5 text-xs text-emerald2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald2" /> Online · always ready
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
                            {messages.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
                                >
                                    <div className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${m.role === 'user'
                                            ? 'bg-gradient-to-br from-electric to-indigo2 text-white'
                                            : 'glass text-slate-200'
                                        }`}>
                                        {m.content}
                                    </div>
                                </motion.div>
                            ))}
                            {typing && (
                                <div className="flex justify-start">
                                    <div className="glass flex gap-1 rounded-2xl px-4 py-3">
                                        {[0, 1, 2].map((d) => (
                                            <span key={d} className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: `${d * 0.15}s` }} />
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div ref={endRef} />
                        </div>

                        <div className="flex flex-wrap gap-1.5 px-4 pb-2">
                            {SUGGESTIONS.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => send(s)}
                                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 transition-colors hover:border-electric/40 hover:text-white"
                                >
                                    {s}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 border-t border-white/10 p-3">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && send()}
                                placeholder="Ask anything..."
                                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-electric/50 focus:outline-none"
                            />
                            <button
                                onClick={() => send()}
                                className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-electric to-neon text-white"
                            >
                                <Send className="h-4 w-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}