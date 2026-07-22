import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, Award, MessageSquare, Calendar, ArrowRight } from 'lucide-react';

const leaderboard = [
  { name: 'Alex Cipher', xp: 12450, rank: 1, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80' },
  { name: 'Sarah Byte', xp: 11800, rank: 2, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80' },
  { name: 'Mike Hash', xp: 10200, rank: 3, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80' },
  { name: 'Emma Root', xp: 9500, rank: 4, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80' },
];

const achievements = [
  { title: 'Streak Master', desc: '30-day streak', icon: '🔥', rarity: 'Epic' },
  { title: 'CTF Hunter', desc: '10 flags captured', icon: '🚩', rarity: 'Rare' },
  { title: 'Cloud Native', desc: 'AWS path completed', icon: '☁️', rarity: 'Common' },
];

const events = [
  { title: 'Live CTF Tournament', date: 'Jul 25', time: '7:00 PM UTC' },
  { title: 'AI Security Workshop', date: 'Jul 28', time: '5:00 PM UTC' },
];

export default function CommunitySection() {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-xs font-mono text-hacklido-cyan uppercase tracking-widest mb-3">Community</h2>
          <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Learn Together. Grow Faster.
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <Trophy className="w-5 h-5 text-hacklido-cyan" />
              <h4 className="font-heading font-semibold text-white">Leaderboard</h4>
            </div>
            <div className="space-y-3">
              {leaderboard.map((u) => (
                <div key={u.rank} className="flex items-center gap-3">
                  <span className={`w-6 text-center font-mono font-bold text-sm ${u.rank <= 3 ? 'text-hacklido-cyan' : 'text-slate-500'}`}>
                    #{u.rank}
                  </span>
                  <img src={u.avatar} alt={u.name} className="w-8 h-8 rounded-full object-cover border border-white/10" />
                  <span className="flex-1 text-sm text-white font-medium">{u.name}</span>
                  <span className="text-xs font-mono text-hacklido-cyan">{u.xp.toLocaleString()} XP</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-3xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <Award className="w-5 h-5 text-hacklido-purple" />
              <h4 className="font-heading font-semibold text-white">Recent Achievements</h4>
            </div>
            <div className="space-y-3">
              {achievements.map((a) => (
                <div key={a.title} className="flex items-center gap-3 glass-subtle rounded-xl p-3">
                  <span className="text-2xl">{a.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">{a.title}</p>
                    <p className="text-xs text-slate-500">{a.desc}</p>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    a.rarity === 'Epic' ? 'bg-hacklido-purple/20 text-hacklido-purple' :
                    a.rarity === 'Rare' ? 'bg-hacklido-electric/20 text-hacklido-electric' :
                    'bg-white/5 text-slate-400'
                  }`}>
                    {a.rarity}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Events + Discussions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <Calendar className="w-5 h-5 text-hacklido-emerald" />
              <h4 className="font-heading font-semibold text-white">Upcoming Events</h4>
            </div>
            <div className="space-y-3 mb-5">
              {events.map((e) => (
                <div key={e.title} className="glass-subtle rounded-xl p-3">
                  <p className="text-sm font-medium text-white">{e.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{e.date} · {e.time}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="w-5 h-5 text-hacklido-electric" />
              <h4 className="font-heading font-semibold text-white">Discussions</h4>
            </div>
            <div className="space-y-2">
              {['Best resources for OSCP?', 'Kubernetes vs Docker Swarm', 'Getting started with ML'].map((d) => (
                <div key={d} className="text-sm text-slate-400 hover:text-hacklido-cyan cursor-pointer transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-hacklido-electric" />
                  {d}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <Link to="/community" className="inline-flex items-center gap-1.5 text-sm font-semibold text-hacklido-cyan hover:gap-2.5 transition-all">
            Join the community <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}