import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flag, Shield, Crosshair, Clock, Zap, ArrowRight } from 'lucide-react';

const experiences = [
  {
    title: 'PocketCTFs',
    subtitle: 'Short practical exercises',
    desc: 'Bite-sized capture-the-flag challenges designed for quick practice. Perfect for a 15-minute skill sharpen.',
    icon: Flag,
    accent: '#28B6F6',
    stats: [{ icon: Zap, label: '50+ challenges' }, { icon: Clock, label: '15 min avg' }],
    cta: 'Start a Challenge',
  },
  {
    title: 'Blue Box',
    subtitle: 'Defensive SOC investigations',
    desc: 'Step into a Security Operations Center. Investigate incidents, analyze logs, and defend against real threats.',
    icon: Shield,
    accent: '#00E5FF',
    stats: [{ icon: Zap, label: '30+ scenarios' }, { icon: Clock, label: '45 min avg' }],
    cta: 'Enter SOC',
  },
  {
    title: 'Red Quest',
    subtitle: 'Offensive attack simulations',
    desc: 'Think like an attacker. Exploit vulnerabilities, escalate privileges, and capture flags in immersive environments.',
    icon: Crosshair,
    accent: '#7C4DFF',
    stats: [{ icon: Zap, label: '40+ quests' }, { icon: Clock, label: '60 min avg' }],
    cta: 'Start Attacking',
  },
];

export default function PlaygroundSection() {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-xs font-mono text-hacklido-cyan uppercase tracking-widest mb-3">Interactive Playground</h2>
          <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Choose Your Experience
          </h3>
          <p className="mt-4 text-slate-400 text-base">
            Three immersive ways to practice. Pick your style, earn XP, and level up.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group relative glass rounded-3xl p-7 overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              {/* Glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-40"
                style={{ background: exp.accent }}
              />

              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3"
                style={{ background: `${exp.accent}15`, boxShadow: `0 0 30px ${exp.accent}25` }}
              >
                <exp.icon className="w-7 h-7" style={{ color: exp.accent }} />
              </div>

              <h4 className="font-heading text-2xl font-bold text-white mb-1">{exp.title}</h4>
              <p className="text-xs text-slate-500 mb-4 font-medium">{exp.subtitle}</p>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">{exp.desc}</p>

              <div className="flex items-center gap-4 mb-6">
                {exp.stats.map((s) => (
                  <div key={s.label} className="flex items-center gap-1.5">
                    <s.icon className="w-3.5 h-3.5" style={{ color: exp.accent }} />
                    <span className="text-xs text-slate-400">{s.label}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/practice"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                style={{ background: `${exp.accent}15`, color: exp.accent, border: `1px solid ${exp.accent}30` }}
              >
                {exp.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}