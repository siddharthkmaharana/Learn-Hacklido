import { motion } from 'framer-motion';
import { Shield, Github, MessageCircle, Twitter, FileText, BookOpen, Lock } from 'lucide-react';

const COLS = [
    { title: 'Platform', links: ['Learning Paths', 'Labs', 'CTF Arena', 'Leaderboard', 'Dashboard'] },
    { title: 'Resources', links: ['Documentation', 'Blog', 'Tutorials', 'Community', 'Discord'] },
    { title: 'Company', links: ['About', 'Careers', 'Partners', 'Press Kit', 'Contact'] },
    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Security', 'Responsible Disclosure', 'Cookie Policy'] },
];

export default function Footer() {
    return (
        <footer id="footer" className="relative mx-auto max-w-7xl px-5 pb-10 pt-20">
            {/* glowing divider */}
            <div className="relative mb-16 h-px w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber/40 to-transparent blur-sm" />
            </div>

            {/* newsletter */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-strong mb-16 flex flex-col items-center justify-between gap-6 rounded-3xl p-8 sm:flex-row"
            >
                <div>
                    <h3 className="font-heading text-2xl font-bold text-white">Stay in the loop</h3>
                    <p className="mt-1 text-sm text-slate-400">New labs, CTF events and career tips — delivered weekly. No spam.</p>
                </div>
                <form className="flex w-full max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="you@domain.com"
                        className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-electric/50 focus:outline-none"
                    />
                    <button className="rounded-xl bg-gradient-to-r from-electric to-cyber px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(40,182,246,0.4)] transition-transform hover:scale-[1.03]">
                        Subscribe
                    </button>
                </form>
            </motion.div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
                <div className="lg:col-span-2">
                    <a href="#home" className="flex items-center gap-2.5">
                        <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric to-neon shadow-[0_0_20px_rgba(40,182,246,0.5)]">
                            <Shield className="h-5 w-5 text-white" strokeWidth={2.4} />
                        </div>
                        <span className="font-heading text-lg font-bold text-white">Hacklido<span className="gradient-text">Learn</span></span>
                    </a>
                    <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
                        The next-generation cybersecurity learning platform. Master real-world attacks through immersive hands-on labs.
                    </p>
                    <div className="mt-5 flex gap-2">
                        {[
                            { icon: Github, label: 'GitHub' },
                            { icon: MessageCircle, label: 'Discord' },
                            { icon: Twitter, label: 'Twitter' },
                            { icon: FileText, label: 'Docs' },
                            { icon: BookOpen, label: 'Blog' },
                        ].map(({ icon: Icon, label }) => (
                            <a key={label} href="#footer" aria-label={label}
                                className="grid h-10 w-10 place-items-center rounded-xl glass text-slate-400 transition-colors hover:text-electric">
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>

                {COLS.map((col) => (
                    <div key={col.title}>
                        <h4 className="font-heading text-sm font-semibold text-white">{col.title}</h4>
                        <ul className="mt-4 space-y-2.5">
                            {col.links.map((l) => (
                                <li key={l}>
                                    <a href="#footer" className="text-sm text-slate-400 transition-colors hover:text-electric">{l}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
                <p className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Lock className="h-3 w-3 text-emerald2" /> © 2026 Hacklido Learn. All rights reserved.
                </p>
                <p className="text-xs text-slate-500">Crafted for the next generation of cybersecurity professionals.</p>
            </div>
        </footer>
    );
}