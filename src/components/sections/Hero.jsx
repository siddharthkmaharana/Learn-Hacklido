import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Compass, ArrowRight, Cpu, Shield, Cloud, Code, GitBranch, Database } from 'lucide-react';
import AnimatedTerminal from '@/components/AnimatedTerminal';

const heroSkills = [
  { icon: Cpu, label: 'AI', color: '#7C4DFF', delay: 0 },
  { icon: Shield, label: 'Cybersecurity', color: '#28B6F6', delay: 0.1 },
  { icon: Cloud, label: 'Cloud', color: '#00E5FF', delay: 0.2 },
  { icon: Code, label: 'Programming', color: '#4F7BFF', delay: 0.3 },
  { icon: GitBranch, label: 'DevOps', color: '#00D084', delay: 0.4 },
  { icon: Database, label: 'Data Science', color: '#7C4DFF', delay: 0.5 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
};

export default function Hero() {
  return (
    <section className="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-subtle mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-hacklido-emerald animate-pulse" />
              <span className="text-xs font-medium text-slate-300">Hacklido Learn 2.0 is live</span>
              <span className="text-xs text-hacklido-cyan">→</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.05]"
            >
              One Playground.
              <br />
              <span className="text-gradient-blue">Every Tech Skill.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed"
            >
              Learn with structured learning paths, practice in immersive labs, stay updated with
              daily technology news, explore community knowledge, and build your dream career—all
              from one premium platform.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/learn"
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-hacklido-electric to-hacklido-cyan text-sm font-semibold text-hacklido-deepest hover:shadow-xl hover:shadow-hacklido-electric/30 transition-all duration-300 hover:scale-105"
              >
                Start Learning
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/practice"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-subtle text-sm font-semibold text-white hover:border-hacklido-cyan/30 hover:text-hacklido-cyan transition-all duration-300"
              >
                <Compass className="w-4 h-4" />
                Explore Playground
              </Link>
              <Link
                to="/about"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-subtle text-sm font-semibold text-white hover:border-hacklido-cyan/30 hover:text-hacklido-cyan transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Animated dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main glass panel */}
            <div className="relative glass-strong rounded-3xl p-5 shadow-2xl shadow-black/30 animate-float-slow">
              {/* Skill chips */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {heroSkills.map((skill) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + skill.delay }}
                    className="glass-subtle rounded-xl p-3 flex flex-col items-center gap-1.5 hover:scale-105 transition-transform duration-300"
                    style={{ boxShadow: `0 0 20px ${skill.color}15` }}
                  >
                    <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                    <span className="text-[10px] font-medium text-slate-300">{skill.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Mini chart */}
              <div className="glass-subtle rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-slate-400">Learning Progress</span>
                  <span className="text-xs font-mono text-hacklido-cyan">+24% this week</span>
                </div>
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 55, 35, 70, 50, 85, 65].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.8 + i * 0.1, type: 'spring', stiffness: 200 }}
                      className="flex-1 rounded-t"
                      style={{
                        background: `linear-gradient(to top, #28B6F6, #00E5FF)`,
                        opacity: 0.3 + (h / 100) * 0.7,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Terminal */}
              <AnimatedTerminal />
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, type: 'spring' }}
              className="absolute -left-4 top-20 glass-strong rounded-2xl px-4 py-3 shadow-xl animate-float-medium"
              style={{ animationDelay: '1s' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-hacklido-emerald" />
                <span className="text-xs font-medium text-white">Lab Completed</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">+250 XP earned</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, type: 'spring' }}
              className="absolute -right-4 bottom-16 glass-strong rounded-2xl px-4 py-3 shadow-xl animate-float-slow"
              style={{ animationDelay: '2s' }}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">🏆</span>
                <span className="text-xs font-medium text-white">Achievement Unlocked</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">7-day streak!</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}