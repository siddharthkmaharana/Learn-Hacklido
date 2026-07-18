import { motion } from 'framer-motion';
import { Trophy, Flame, Award, MapPin } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

const RANK = [
    { name: 'NovaStrike', xp: 184250, country: '🇺🇸', rank: 1, badges: 42, streak: 128, achievement: 'Legendary Hall of Famer' },
    { name: 'zer0day', xp: 176800, country: '🇩🇪', rank: 2, badges: 39, streak: 96, achievement: 'Red Team Specialist' },
    { name: 'ghostByte', xp: 168400, country: '🇯🇵', rank: 3, badges: 37, streak: 74, achievement: 'CTF Champion' },
    { name: 'crypt0queen', xp: 159200, country: '🇧🇷', rank: 4, badges: 35, streak: 61, achievement: 'Crypto Wizard' },
    { name: 'shadowRunner', xp: 151050, country: '🇮🇳', rank: 5, badges: 33, streak: 52, achievement: 'OSINT Master' },
    { name: 'nullRoute', xp: 142900, country: '🇫🇷', rank: 6, badges: 30, streak: 47, achievement: 'Blue Team Guardian' },
];

const medal = ['from-yellow-400 to-amber-500', 'from-slate-300 to-slate-400', 'from-amber-600 to-orange-700'];

export default function Leaderboard() {
    return (
        <section id="leaderboard" className="relative mx-auto max-w-5xl px-5 py-24">
            <div className="mb-12 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">Global Leaderboard</p>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Where legends are ranked
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                    Real-time rankings update as players capture flags worldwide. Climb the tiers and earn your place.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="glass-strong overflow-hidden rounded-3xl"
            >
                {/* header */}
                <div className="grid grid-cols-12 gap-2 border-b border-white/10 px-4 py-3 text-[10px] uppercase tracking-wider text-slate-500 sm:px-6 sm:text-xs">
                    <div className="col-span-1">Rank</div>
                    <div className="col-span-4">Player</div>
                    <div className="col-span-2 hidden text-center sm:block">Streak</div>
                    <div className="col-span-3 hidden text-center sm:block">Badges</div>
                    <div className="col-span-7 text-right sm:col-span-2">XP</div>
                </div>

                {RANK.map((p, i) => (
                    <motion.div
                        key={p.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08, ease }}
                        className="grid grid-cols-12 items-center gap-2 border-b border-white/5 px-4 py-4 transition-colors last:border-0 hover:bg-white/5 sm:px-6"
                    >
                        <div className="col-span-1">
                            {i < 3 ? (
                                <div className={`grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br ${medal[i]} text-white`}>
                                    <Trophy className="h-4 w-4" />
                                </div>
                            ) : (
                                <span className="font-heading text-lg font-bold text-slate-500">{p.rank}</span>
                            )}
                        </div>
                        <div className="col-span-4 flex items-center gap-3">
                            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-electric to-neon font-heading text-sm font-bold text-white">
                                {p.name[0].toUpperCase()}
                            </div>
                            <div className="min-w-0">
                                <p className="truncate font-medium text-white">{p.name}</p>
                                <p className="flex items-center gap-1 text-xs text-slate-500"><MapPin className="h-3 w-3" /> {p.country} · {p.achievement}</p>
                            </div>
                        </div>
                        <div className="col-span-2 hidden items-center justify-center gap-1.5 sm:flex">
                            <Flame className="h-3.5 w-3.5 text-orange-400" />
                            <span className="text-sm text-white">{p.streak}</span>
                        </div>
                        <div className="col-span-3 hidden items-center justify-center gap-1.5 sm:flex">
                            <Award className="h-3.5 w-3.5 text-cyber" />
                            <span className="text-sm text-white">{p.badges}</span>
                        </div>
                        <div className="col-span-7 text-right sm:col-span-2">
                            <span className="font-heading text-base font-bold gradient-text sm:text-lg">{p.xp.toLocaleString()}</span>
                            <span className="ml-1 text-xs text-slate-500">XP</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <p className="mt-4 text-center text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald2" /> Updating in real time</span>
            </p>
        </section>
    );
}