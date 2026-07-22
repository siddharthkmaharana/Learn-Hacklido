import { motion } from 'framer-motion';
import { Flag, Shield, Crosshair, Clock, Lock } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import AnimatedTerminal from '@/components/AnimatedTerminal';

const experiences = [
  {
    title: 'PocketCTFs',
    subtitle: 'Short practical exercises',
    desc: 'Bite-sized capture-the-flag challenges designed for quick practice. Perfect for a 15-minute skill sharpen during your break.',
    icon: Flag,
    accent: '#28B6F6',
    labs: [
      { name: 'SQL Injection Basics', difficulty: 'Easy', xp: 100, time: '10 min' },
      { name: 'XSS Hunter', difficulty: 'Medium', xp: 150, time: '15 min' },
      { name: 'Buffer Overflow', difficulty: 'Hard', xp: 250, time: '20 min' },
      { name: 'Crypto Puzzle', difficulty: 'Medium', xp: 200, time: '15 min' },
    ],
  },
  {
    title: 'Blue Box',
    subtitle: 'Defensive SOC investigations',
    desc: 'Step into a Security Operations Center. Investigate incidents, analyze logs, and defend against real threats in a simulated environment.',
    icon: Shield,
    accent: '#00E5FF',
    labs: [
      { name: 'Phishing Analysis', difficulty: 'Easy', xp: 150, time: '30 min' },
      { name: 'SIEM Investigation', difficulty: 'Medium', xp: 300, time: '45 min' },
      { name: 'Incident Response', difficulty: 'Hard', xp: 400, time: '60 min' },
      { name: 'Threat Hunting', difficulty: 'Insane', xp: 500, time: '90 min' },
    ],
  },
  {
    title: 'Red Quest',
    subtitle: 'Offensive attack simulations',
    desc: 'Think like an attacker. Exploit vulnerabilities, escalate privileges, and capture flags in immersive environments.',
    icon: Crosshair,
    accent: '#7C4DFF',
    labs: [
      { name: 'Web App Pentest', difficulty: 'Medium', xp: 300, time: '45 min' },
      { name: 'Privilege Escalation', difficulty: 'Hard', xp: 400, time: '60 min' },
      { name: 'Active Directory Attack', difficulty: 'Hard', xp: 500, time: '90 min' },
      { name: 'Full System Compromise', difficulty: 'Insane', xp: 750, time: '120 min' },
    ],
  },
];

export default function Practice() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-mono text-hacklido-cyan uppercase tracking-widest mb-3">Interactive Playground</h2>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              The <span className="text-gradient-cyan">Playground</span>
            </h1>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Three immersive ways to practice. Pick your style, earn XP, and level up your skills.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                className="glass rounded-3xl p-6 hover:scale-[1.01] transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${exp.accent}15`, boxShadow: `0 0 30px ${exp.accent}25` }}
                >
                  <exp.icon className="w-7 h-7" style={{ color: exp.accent }} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-1">{exp.title}</h3>
                <p className="text-xs text-slate-500 mb-3 font-medium">{exp.subtitle}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{exp.desc}</p>

                <div className="space-y-2">
                  {exp.labs.map((lab) => (
                    <div key={lab.name} className="flex items-center gap-3 glass-subtle rounded-xl p-3 hover:border-white/10 transition-colors cursor-pointer group">
                      <Lock className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{lab.name}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                            lab.difficulty === 'Easy' ? 'bg-hacklido-emerald/15 text-hacklido-emerald' :
                            lab.difficulty === 'Medium' ? 'bg-hacklido-electric/15 text-hacklido-electric' :
                            lab.difficulty === 'Hard' ? 'bg-orange-500/15 text-orange-400' :
                            'bg-red-500/15 text-red-400'
                          }`}>
                            {lab.difficulty}
                          </span>
                          <span className="text-[10px] text-slate-500 flex items-center gap-0.5">
                            <Clock className="w-2.5 h-2.5" />{lab.time}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono" style={{ color: exp.accent }}>+{lab.xp}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal demo */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <h3 className="font-heading text-xl font-bold text-white mb-4 text-center">Live Lab Environment Preview</h3>
            <AnimatedTerminal />
          </motion.div>
        </div>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}