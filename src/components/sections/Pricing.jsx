import { motion } from 'framer-motion';
import { Check, Zap, Building2 } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

const PLANS = [
    {
        name: 'Free', price: '$0', tag: 'Get started', icon: Zap, highlight: false,
        features: ['50 starter labs', '5 learning paths', 'Community access', 'Basic progress tracking', 'Limited CTF challenges'],
        cta: 'Start Free',
    },
    {
        name: 'Pro', price: '$24', tag: 'Most popular', icon: Zap, highlight: true,
        features: ['1,000+ labs', 'All 250+ learning paths', 'Full CTF arena access', 'AI Security Coach', 'Certificates of completion', 'Priority lab spawns', 'Advanced analytics'],
        cta: 'Start Pro Trial',
    },
    {
        name: 'Enterprise', price: 'Custom', tag: 'For teams', icon: Building2, highlight: false,
        features: ['Everything in Pro', 'Team dashboards', 'SSO & SAML', 'Custom learning paths', 'Dedicated support', 'Compliance reporting', 'On-prem lab option'],
        cta: 'Contact Sales',
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="relative mx-auto max-w-7xl px-5 py-24">
            <div className="mb-12 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">Pricing</p>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Invest in your security career
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                    Start free, upgrade when you are ready. Cancel anytime — no lock-in.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {PLANS.map((p, i) => (
                    <motion.div
                        key={p.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, delay: i * 0.1, ease }}
                        whileHover={{ y: -8 }}
                        className={`relative overflow-hidden rounded-3xl p-7 ${p.highlight
                                ? 'glass-strong border-electric/40 shadow-[0_0_50px_rgba(40,182,246,0.2)]'
                                : 'glass'
                            }`}
                    >
                        {p.highlight && (
                            <>
                                <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-electric/20 blur-3xl" />
                                <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-electric to-cyber px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                                    {p.tag}
                                </span>
                            </>
                        )}

                        <div className="relative">
                            <div className={`grid h-11 w-11 place-items-center rounded-xl ${p.highlight ? 'bg-gradient-to-br from-electric to-neon text-white' : 'bg-white/5 text-electric'}`}>
                                <p.icon className="h-5 w-5" />
                            </div>
                            <h3 className="mt-4 font-heading text-xl font-bold text-white">{p.name}</h3>
                            {!p.highlight && <p className="mt-0.5 text-xs text-slate-500">{p.tag}</p>}

                            <div className="mt-4 flex items-end gap-1">
                                <span className="font-heading text-4xl font-bold text-white">{p.price}</span>
                                {p.price !== 'Custom' && <span className="mb-1 text-sm text-slate-400">/mo</span>}
                            </div>

                            <button className={`mt-5 w-full rounded-xl py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${p.highlight
                                    ? 'bg-gradient-to-r from-electric to-cyber text-white shadow-[0_0_24px_rgba(40,182,246,0.4)]'
                                    : 'glass text-white hover:bg-white/10'
                                }`}>
                                {p.cta}
                            </button>

                            <ul className="mt-6 space-y-3">
                                {p.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                                        <span className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full ${p.highlight ? 'bg-electric/20 text-electric' : 'bg-emerald2/15 text-emerald2'}`}>
                                            <Check className="h-2.5 w-2.5" strokeWidth={3} />
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}