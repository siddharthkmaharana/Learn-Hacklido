import { motion } from 'framer-motion';
import { TrendingUp, Zap, Flame, BookOpen, Target, Award } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

const chartData = [
  { day: 'M', xp: 120 },
  { day: 'T', xp: 250 },
  { day: 'W', xp: 180 },
  { day: 'T', xp: 400 },
  { day: 'F', xp: 320 },
  { day: 'S', xp: 500 },
  { day: 'S', xp: 450 },
];

export default function DashboardPreview() {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-xs font-mono text-hacklido-cyan uppercase tracking-widest mb-3">Your Dashboard</h2>
          <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Your Tech Career, Tracked
          </h3>
          <p className="mt-4 text-slate-400 text-base">
            Modular glass widgets that track your learning progress, XP, streaks, and AI-powered recommendations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* XP */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-hacklido-cyan" />
              <span className="text-xs text-slate-400">Total XP</span>
            </div>
            <p className="text-2xl font-bold text-white font-mono">12,450</p>
            <p className="text-xs text-hacklido-emerald mt-1">+500 this week</p>
          </div>

          {/* Streak */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="text-xs text-slate-400">Streak</span>
            </div>
            <p className="text-2xl font-bold text-white font-mono">23 days</p>
            <p className="text-xs text-slate-500 mt-1">Keep it up!</p>
          </div>

          {/* Labs */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-hacklido-electric" />
              <span className="text-xs text-slate-400">Labs Done</span>
            </div>
            <p className="text-2xl font-bold text-white font-mono">47/200</p>
            <p className="text-xs text-slate-500 mt-1">23.5% complete</p>
          </div>

          {/* Certificates */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-hacklido-purple" />
              <span className="text-xs text-slate-400">Certificates</span>
            </div>
            <p className="text-2xl font-bold text-white font-mono">5</p>
            <p className="text-xs text-slate-500 mt-1">2 in progress</p>
          </div>

          {/* Weekly Analytics - full width */}
          <div className="col-span-2 lg:col-span-2 glass rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-hacklido-cyan" />
                <span className="text-sm font-medium text-white">Weekly Analytics</span>
              </div>
              <span className="text-xs font-mono text-hacklido-cyan">+24%</span>
            </div>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={chartData}>
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#28B6F6" />
                    <stop offset="100%" stopColor="#00E5FF" />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: '#0D1325', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontSize: 12 }}
                  labelStyle={{ color: '#94a3b8' }}
                />
                <Line type="monotone" dataKey="xp" stroke="url(#lineGrad)" strokeWidth={2} dot={{ fill: '#00E5FF', r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Active Course */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-hacklido-electric" />
              <span className="text-xs text-slate-400">Active Course</span>
            </div>
            <p className="text-sm font-medium text-white mb-2">Python for Security</p>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden mb-1">
              <div className="h-full rounded-full bg-gradient-to-r from-hacklido-electric to-hacklido-cyan" style={{ width: '65%' }} />
            </div>
            <p className="text-xs text-slate-500">65% · Module 4 of 6</p>
          </div>

          {/* AI Recommendation */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm">🤖</span>
              <span className="text-xs text-slate-400">AI Suggests</span>
            </div>
            <p className="text-sm text-white leading-snug mb-2">Try the "Network Forensics" lab next</p>
            <p className="text-xs text-slate-500">Based on your recent progress</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}