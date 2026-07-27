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

          {/* Right: Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <Link to="/practice">
              <img
                src="https://learn.hacklido.com/api/uploads/category_thumbs/rahul_1778220490.png?t=1778220491986"
                style={{
                  width: "580px",
                  height: "auto",
                  display: "block",
                  filter: "drop-shadow(0 0 18px rgba(0,212,255,0.7)) drop-shadow(0 0 40px rgba(0,150,255,0.4))",
                  animation: "mascotFloat 4s ease-in-out infinite",
                }}
                alt="Hacklido Mascot"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}