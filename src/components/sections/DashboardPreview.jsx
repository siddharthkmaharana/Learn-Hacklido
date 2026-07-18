import { motion } from 'framer-motion';
import { TrendingUp, Award, Calendar, ShieldCheck, Activity, Flame, BookOpen, Clock } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

const activity = [
    { t: 'Solved “Broken Auth”', time: '2m ago', pts: '+150' },
    { t: 'Completed Web Security module', time: '1h ago', pts: '+300' },
    { t: 'Earned “SQL Master” badge', time: '3h ago', pts: '🏆' },
    { t: 'Reached Tier 4', time: '1d ago', pts: '+500' },
];

const cal = [
    3, 0, 2, 1, 4, 2, 0, 1, 3, 2, 4, 1, 0, 2, 0, 3, 4, 2, 1, 3, 2, 4, 0, 1, 2, 3, 4, 2, 1, 3,
];

export default function DashboardPreview() {
    return (
        <section id="dashboard" className="relative mx-auto max-w-7xl px-5 py-24">
            <div className="mb-12 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyber">Your Command Center</p>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    A dashboard that feels like mission control
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                    Track progress, streaks, achievements, certificates and your live cybersecurity score — all in glass widgets.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="grid gap-5 md:grid-cols-3 lg:grid-cols-4"
            >
                {/* Cyber score */}
                <div className="glass-strong rounded-3xl p-6 md:col-span-2 lg:col-span-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="h-5 w-5 text-emerald2" />
                            <span className="font-heading text-sm font-semibold text-white">Cybersecurity Score</span>
                        </div>
                        <span className="rounded-full bg-emerald2/10 px-2.5 py-1 text-xs text-emerald2">+12% this week</span>
                    </div>
                    <div className="mt-4 flex items-end gap-3">
                        <span className="font-heading text-5xl font-bold gradient-text">8,942</span>
                        <span className="mb-1 text-sm text-slate-400">/ 12,000</span>
                    </div>
                    <div className="mt-4 flex items-end gap-1.5">
                        {[40, 55, 30, 70, 45, 80, 60, 90, 50, 75, 65, 95].map((h, i) => (
                            <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}px` }} viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.05 }}
                                className="flex-1 rounded-t-md bg-gradient-to-t from-electric/30 to-cyber" />
                        ))}
                    </div>
                </div>

                {/* Streak */}
                <div className="glass-strong rounded-3xl p-6">
                    <div className="flex items-center gap-2">
                        <Flame className="h-5 w-5 text-orange-400" />
                        <span className="font-heading text-sm font-semibold text-white">Learning Streak</span>
                    </div>
                    <p className="mt-3 font-heading text-5xl font-bold text-white">12</p>
                    <p className="text-sm text-slate-400">days in a row</p>
                    <div className="mt-4 flex gap-1">
                        {Array.from({ length: 14 }).map((_, i) => (
                            <span key={i} className={`h-2 flex-1 rounded-full ${i < 12 ? 'bg-gradient-to-r from-orange-400 to-yellow-400' : 'bg-white/10'}`} />
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="glass-strong rounded-3xl p-6">
                    <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-neon" />
                        <span className="font-heading text-sm font-semibold text-white">Achievements</span>
                    </div>
                    <p className="mt-3 font-heading text-5xl font-bold text-white">37</p>
                    <p className="text-sm text-slate-400">badges earned</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                        {['🔥', '⭐', '🏆', '🛡️', '🎯', '⚡', '💎', '👾'].map((b, i) => (
                            <span key={i} className="grid h-7 w-7 place-items-center rounded-lg bg-white/5 text-sm">{b}</span>
                        ))}
                    </div>
                </div>

                {/* Calendar */}
                <div className="glass-strong rounded-3xl p-6 md:col-span-2">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-electric" />
                        <span className="font-heading text-sm font-semibold text-white">Activity Calendar</span>
                    </div>
                    <div className="mt-4 grid grid-cols-7 gap-1.5">
                        {cal.map((v, i) => (
                            <div key={i} className={`aspect-square rounded-md ${v === 0 ? 'bg-white/5' : v <= 1 ? 'bg-electric/20' : v <= 2 ? 'bg-electric/40' : v <= 3 ? 'bg-cyber/60' : 'bg-cyber/90'
                                }`} />
                        ))}
                    </div>
                    <div className="mt-3 flex items-center justify-end gap-2 text-[10px] text-slate-500">
                        Less <span className="h-2.5 w-2.5 rounded-sm bg-white/5" /><span className="h-2.5 w-2.5 rounded-sm bg-electric/30" /><span className="h-2.5 w-2.5 rounded-sm bg-cyber/60" /><span className="h-2.5 w-2.5 rounded-sm bg-cyber/90" /> More
                    </div>
                </div>

                {/* Recent activity */}
                <div className="glass-strong rounded-3xl p-6 md:col-span-2">
                    <div className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-cyber" />
                        <span className="font-heading text-sm font-semibold text-white">Recent Activity</span>
                    </div>
                    <div className="mt-4 space-y-3">
                        {activity.map((a, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2.5">
                                <div>
                                    <p className="text-sm text-white">{a.t}</p>
                                    <p className="flex items-center gap-1 text-xs text-slate-500"><Clock className="h-3 w-3" /> {a.time}</p>
                                </div>
                                <span className="font-heading text-sm font-bold text-emerald2">{a.pts}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certificates */}
                <div className="glass-strong rounded-3xl p-6">
                    <div className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-indigo2" />
                        <span className="font-heading text-sm font-semibold text-white">Certificates</span>
                    </div>
                    <p className="mt-3 font-heading text-5xl font-bold text-white">5</p>
                    <p className="text-sm text-slate-400">completed</p>
                    <div className="mt-4 space-y-1.5">
                        {['Web Security', 'Network+', 'OSCP Prep'].map((c) => (
                            <div key={c} className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-slate-300">
                                <TrendingUp className="h-3 w-3 text-emerald2" /> {c}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}