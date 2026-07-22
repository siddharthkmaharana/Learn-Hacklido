import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Shield, Cloud, Code2, Coffee, GitBranch, Terminal, Network, Blocks, ArrowRight } from 'lucide-react';

const categories = [
  { name: 'AI', icon: Brain, level: 'Beginner → Advanced', duration: '120h', progress: 0, labs: 24, projects: 8, next: 'Python Fundamentals', accent: '#7C4DFF' },
  { name: 'Cybersecurity', icon: Shield, level: 'Beginner → Advanced', duration: '90h', progress: 0, labs: 32, projects: 6, next: 'Network Security Basics', accent: '#28B6F6' },
  { name: 'Cloud', icon: Cloud, level: 'Intermediate', duration: '80h', progress: 0, labs: 18, projects: 5, next: 'AWS Essentials', accent: '#00E5FF' },
  { name: 'Python', icon: Code2, level: 'Beginner', duration: '60h', progress: 0, labs: 20, projects: 10, next: 'Data Structures', accent: '#4F7BFF' },
  { name: 'Java', icon: Coffee, level: 'Beginner → Advanced', duration: '100h', progress: 0, labs: 16, projects: 7, next: 'OOP Concepts', accent: '#28B6F6' },
  { name: 'JavaScript', icon: Code2, level: 'Beginner', duration: '70h', progress: 0, labs: 22, projects: 12, next: 'Async Programming', accent: '#00E5FF' },
  { name: 'DevOps', icon: GitBranch, level: 'Intermediate', duration: '85h', progress: 0, labs: 14, projects: 6, next: 'CI/CD Pipelines', accent: '#00D084' },
  { name: 'Linux', icon: Terminal, level: 'Beginner', duration: '40h', progress: 0, labs: 18, projects: 4, next: 'Shell Scripting', accent: '#4F7BFF' },
  { name: 'Networking', icon: Network, level: 'Beginner → Intermediate', duration: '55h', progress: 0, labs: 12, projects: 3, next: 'TCP/IP Deep Dive', accent: '#28B6F6' },
  { name: 'Blockchain', icon: Blocks, level: 'Advanced', duration: '110h', progress: 0, labs: 10, projects: 5, next: 'Smart Contracts 101', accent: '#7C4DFF' },
];

export default function LearningPathsSection() {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-xs font-mono text-hacklido-cyan uppercase tracking-widest mb-3">Learning Paths</h2>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Choose Your Path
            </h3>
            <p className="mt-3 text-slate-400 text-base max-w-lg">
              Structured tracks across 10 technology domains. Each path includes labs, projects, and a clear next step.
            </p>
          </div>
          <Link
            to="/learn"
            className="flex items-center gap-1.5 text-sm font-semibold text-hacklido-cyan hover:gap-2.5 transition-all"
          >
            View all paths <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group glass rounded-2xl p-5 hover:scale-[1.03] transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ background: `${cat.accent}15`, boxShadow: `0 0 20px ${cat.accent}15` }}
              >
                <cat.icon className="w-5 h-5" style={{ color: cat.accent }} />
              </div>
              <h4 className="font-heading font-bold text-white text-base mb-1">{cat.name}</h4>
              <p className="text-[11px] text-slate-500 mb-3">{cat.level} · {cat.duration}</p>

              {/* Progress */}
              <div className="h-1 rounded-full bg-white/5 mb-1 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${cat.progress}%`, background: cat.accent }}
                />
              </div>
              <p className="text-[10px] text-slate-500 mb-3">{cat.progress}% complete</p>

              <div className="flex items-center gap-3 text-[10px] text-slate-400 mb-3">
                <span>{cat.labs} labs</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span>{cat.projects} projects</span>
              </div>
              <p className="text-[10px] text-slate-500">
                Next: <span style={{ color: cat.accent }}>{cat.next}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}