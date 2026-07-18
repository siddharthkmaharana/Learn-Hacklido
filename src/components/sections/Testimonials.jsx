import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

const ITEMS = [
    {
        name: 'Aria Mendez', role: 'Penetration Tester @ SecureWave', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces',
        text: 'Hacklido Learn replaced my entire cert-prep stack. The hands-on labs feel like real engagements — I landed my red-team role after 4 months.',
    },
    {
        name: 'Devon Hart', role: 'SOC Analyst @ Cloudflare', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces',
        text: 'The dashboard and progress tracking are unreal. I went from zero to SOC Tier 2 with a 90-day streak. Nothing else comes close.',
    },
    {
        name: 'Yuki Tanaka', role: 'Bug Bounty Hunter', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=faces',
        text: 'The CTF arena is addictive. I earned $14k in bounties using techniques I learned here. The AI coach gives hints that actually teach you.',
    },
    {
        name: 'Sofia Almeida', role: 'Security Engineer @ Stripe', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces',
        text: 'Enterprise-grade polish. The skill tree alone is worth it — it mapped my exact gaps and built a path to close them. Beautiful and effective.',
    },
    {
        name: 'Marcus Reid', role: 'Red Team Lead @ Mandiant', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=faces',
        text: 'I have used every platform out there. Hacklido is the first that feels designed by people who actually do this work daily. Stunning.',
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative overflow-hidden py-24">
            <div className="mx-auto mb-12 max-w-7xl px-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-electric">Community</p>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Loved by 500,000+ security professionals
                </h2>
            </div>

            <div className="relative flex gap-5 overflow-hidden px-5"
                style={{ maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)' }}>
                <div className="flex shrink-0 animate-marquee gap-5">
                    {[...ITEMS, ...ITEMS].map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="glass w-[20rem] shrink-0 rounded-3xl p-6 sm:w-[24rem]"
                        >
                            <Quote className="h-7 w-7 text-electric/40" />
                            <p className="mt-3 text-sm leading-relaxed text-slate-300">{t.text}</p>
                            <div className="mt-5 flex items-center gap-3">
                                <img src={t.img} alt={t.name} className="h-11 w-11 rounded-full object-cover ring-2 ring-electric/30" />
                                <div>
                                    <p className="font-medium text-white">{t.name}</p>
                                    <p className="text-xs text-slate-400">{t.role}</p>
                                </div>
                                <div className="ml-auto flex gap-0.5">
                                    {[0, 1, 2, 3, 4].map((s) => <Star key={s} className="h-3.5 w-3.5 fill-cyber text-cyber" />)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}