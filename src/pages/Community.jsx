import { motion } from 'framer-motion';
import { Trophy, Award, MessageSquare, Calendar, FlaskConical, TrendingUp } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';

const leaderboard = [
  { name: 'Alex Cipher', xp: 12450, rank: 1, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80', badge: '🏆' },
  { name: 'Sarah Byte', xp: 11800, rank: 2, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80', badge: '🥈' },
  { name: 'Mike Hash', xp: 10200, rank: 3, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80', badge: '🥉' },
  { name: 'Emma Root', xp: 9500, rank: 4, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80' },
  { name: 'David Kernel', xp: 8900, rank: 5, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80' },
  { name: 'Lisa Stack', xp: 7800, rank: 6, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80' },
];

const achievements = [
  { title: 'Streak Master', desc: '30-day learning streak', icon: '🔥', rarity: 'Epic', color: '#7C4DFF' },
  { title: 'CTF Hunter', desc: '10 flags captured', icon: '🚩', rarity: 'Rare', color: '#28B6F6' },
  { title: 'Cloud Native', desc: 'AWS path completed', icon: '☁️', rarity: 'Common', color: '#00E5FF' },
  { title: 'Code Warrior', desc: '100 challenges solved', icon: '⚔️', rarity: 'Legendary', color: '#00D084' },
  { title: 'Bug Hunter', desc: '5 vulnerabilities reported', icon: '🐛', rarity: 'Rare', color: '#4F7BFF' },
  { title: 'Fast Learner', desc: '3 paths in a month', icon: '⚡', rarity: 'Epic', color: '#7C4DFF' },
];

const discussions = [
  { title: 'Best resources for OSCP preparation?', author: 'Mike Hash', replies: 24, upvotes: 156, category: 'Cybersecurity' },
  { title: 'Kubernetes vs Docker Swarm in 2026', author: 'Emma Root', replies: 18, upvotes: 92, category: 'DevOps' },
  { title: 'Getting started with ML - complete roadmap', author: 'Sarah Byte', replies: 31, upvotes: 203, category: 'AI' },
  { title: 'Rust or Go for backend services?', author: 'David Kernel', replies: 45, upvotes: 178, category: 'Programming' },
];

const events = [
  { title: 'Live CTF Tournament', date: 'Jul 25', time: '7:00 PM UTC', desc: 'Compete against the best in a 3-hour CTF showdown.' },
  { title: 'AI Security Workshop', date: 'Jul 28', time: '5:00 PM UTC', desc: 'Learn how to secure LLMs and AI agents.' },
  { title: 'Cloud Architecture Bootcamp', date: 'Aug 2', time: '2:00 PM UTC', desc: '3-day intensive on building scalable cloud systems.' },
];

const newLabs = [
  { name: 'Advanced SQL Injection', type: 'Red Quest', difficulty: 'Hard' },
  { name: 'SIEM Log Analysis', type: 'Blue Box', difficulty: 'Medium' },
  { name: 'Crypto Wallet Exploit', type: 'PocketCTF', difficulty: 'Insane' },
];

export default function Community() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-mono text-hacklido-cyan uppercase tracking-widest mb-3">Community</h2>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Learn <span className="text-gradient-cyan">Together</span>
            </h1>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Compete, collaborate, and grow with 25,000+ learners in the Hacklido community.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Leaderboard */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Trophy className="w-5 h-5 text-hacklido-cyan" />
                <h3 className="font-heading font-semibold text-white">Leaderboard</h3>
              </div>
              <div className="space-y-3">
                {leaderboard.map((u) => (
                  <div key={u.rank} className="flex items-center gap-3 glass-subtle rounded-xl p-2.5">
                    <span className="w-7 text-center font-mono font-bold text-sm text-slate-400">{u.badge || `#${u.rank}`}</span>
                    <img src={u.avatar} alt={u.name} className="w-8 h-8 rounded-full object-cover border border-white/10" />
                    <span className="flex-1 text-sm text-white font-medium">{u.name}</span>
                    <span className="text-xs font-mono text-hacklido-cyan">{u.xp.toLocaleString()} XP</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Award className="w-5 h-5 text-hacklido-purple" />
                <h3 className="font-heading font-semibold text-white">Recent Achievements</h3>
              </div>
              <div className="space-y-3">
                {achievements.map((a) => (
                  <div key={a.title} className="flex items-center gap-3 glass-subtle rounded-xl p-3">
                    <span className="text-2xl">{a.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{a.title}</p>
                      <p className="text-xs text-slate-500">{a.desc}</p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: `${a.color}20`, color: a.color }}>{a.rarity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* New Labs + Events */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <FlaskConical className="w-5 h-5 text-hacklido-emerald" />
                <h3 className="font-heading font-semibold text-white">Newly Released Labs</h3>
              </div>
              <div className="space-y-3 mb-6">
                {newLabs.map((lab) => (
                  <div key={lab.name} className="glass-subtle rounded-xl p-3">
                    <p className="text-sm font-medium text-white">{lab.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-hacklido-cyan">{lab.type}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                        lab.difficulty === 'Hard' ? 'bg-orange-500/15 text-orange-400' : 'bg-red-500/15 text-red-400'
                      }`}>{lab.difficulty}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-hacklido-electric" />
                <h3 className="font-heading font-semibold text-white">Upcoming Events</h3>
              </div>
              <div className="space-y-2">
                {events.map((e) => (
                  <div key={e.title} className="glass-subtle rounded-xl p-3">
                    <p className="text-sm font-medium text-white">{e.title}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{e.date} · {e.time}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Discussions */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-5">
              <MessageSquare className="w-5 h-5 text-hacklido-cyan" />
              <h3 className="font-heading text-xl font-bold text-white">Active Discussions</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {discussions.map((d) => (
                <div key={d.title} className="glass rounded-2xl p-5 hover:scale-[1.01] transition-all duration-300 cursor-pointer group">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-2 py-0.5 rounded-md glass-subtle text-[10px] font-medium text-hacklido-cyan">{d.category}</span>
                    <TrendingUp className="w-4 h-4 text-slate-600 group-hover:text-hacklido-cyan transition-colors" />
                  </div>
                  <h4 className="font-heading text-base font-semibold text-white mb-3 group-hover:text-hacklido-cyan transition-colors">{d.title}</h4>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span>by {d.author}</span>
                    <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" />{d.replies}</span>
                    <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3" />{d.upvotes}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}