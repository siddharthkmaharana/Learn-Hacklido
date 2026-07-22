import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Shield, Cloud, Code2, Coffee, GitBranch, Terminal, Network, Blocks, ArrowRight, Clock, FlaskConical, FolderGit2 } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';

const paths = [
  { name: 'AI', icon: Brain, level: 'Beginner → Advanced', duration: '120h', labs: 24, projects: 8, next: 'Python Fundamentals', accent: '#7C4DFF', desc: 'Master machine learning, deep learning, and AI agent development from the ground up.' },
  { name: 'Cybersecurity', icon: Shield, level: 'Beginner → Advanced', duration: '90h', labs: 32, projects: 6, next: 'Network Security Basics', accent: '#28B6F6', desc: 'From ethical hacking to SOC analysis — become a complete security professional.' },
  { name: 'Cloud', icon: Cloud, level: 'Intermediate', duration: '80h', labs: 18, projects: 5, next: 'AWS Essentials', accent: '#00E5FF', desc: 'Master AWS, Azure, and GCP with hands-on cloud engineering labs.' },
  { name: 'Python', icon: Code2, level: 'Beginner', duration: '60h', labs: 20, projects: 10, next: 'Data Structures', accent: '#4F7BFF', desc: 'The world\'s most versatile language — from scripts to web apps to data science.' },
  { name: 'Java', icon: Coffee, level: 'Beginner → Advanced', duration: '100h', labs: 16, projects: 7, next: 'OOP Concepts', accent: '#28B6F6', desc: 'Enterprise-grade programming with Spring Boot, microservices, and more.' },
  { name: 'JavaScript', icon: Code2, level: 'Beginner', duration: '70h', labs: 22, projects: 12, next: 'Async Programming', accent: '#00E5FF', desc: 'The language of the web — from frontend to full-stack with Node.js.' },
  { name: 'DevOps', icon: GitBranch, level: 'Intermediate', duration: '85h', labs: 14, projects: 6, next: 'CI/CD Pipelines', accent: '#00D084', desc: 'Docker, Kubernetes, Terraform, and the complete DevOps toolchain.' },
  { name: 'Linux', icon: Terminal, level: 'Beginner', duration: '40h', labs: 18, projects: 4, next: 'Shell Scripting', accent: '#4F7BFF', desc: 'Master the terminal, system administration, and shell automation.' },
  { name: 'Networking', icon: Network, level: 'Beginner → Intermediate', duration: '55h', labs: 12, projects: 3, next: 'TCP/IP Deep Dive', accent: '#28B6F6', desc: 'From OSI model to advanced routing — understand how the internet works.' },
  { name: 'Blockchain', icon: Blocks, level: 'Advanced', duration: '110h', labs: 10, projects: 5, next: 'Smart Contracts 101', accent: '#7C4DFF', desc: 'Solidity, DeFi, NFTs, and the future of decentralized applications.' },
];

export default function Learn() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-mono text-hacklido-cyan uppercase tracking-widest mb-3">Learning Paths</h2>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Learn <span className="text-gradient-blue">Anything</span>
            </h1>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Structured, sequential learning paths across 10 technology domains. Each path includes labs, projects, and real code examples.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paths.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="group glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ background: `${p.accent}15`, boxShadow: `0 0 25px ${p.accent}15` }}
                  >
                    <p.icon className="w-6 h-6" style={{ color: p.accent }} />
                  </div>
                  <span className="px-2.5 py-1 rounded-full glass-subtle text-[10px] font-medium text-slate-400">
                    {p.level}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">{p.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{p.desc}</p>
                <div className="grid grid-cols-3 gap-2 mb-5">
                  <div className="glass-subtle rounded-lg p-2.5 text-center">
                    <Clock className="w-3.5 h-3.5 mx-auto mb-1 text-slate-500" />
                    <p className="text-xs font-mono text-white">{p.duration}</p>
                  </div>
                  <div className="glass-subtle rounded-lg p-2.5 text-center">
                    <FlaskConical className="w-3.5 h-3.5 mx-auto mb-1 text-slate-500" />
                    <p className="text-xs font-mono text-white">{p.labs}</p>
                  </div>
                  <div className="glass-subtle rounded-lg p-2.5 text-center">
                    <FolderGit2 className="w-3.5 h-3.5 mx-auto mb-1 text-slate-500" />
                    <p className="text-xs font-mono text-white">{p.projects}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">Next: <span style={{ color: p.accent }}>{p.next}</span></span>
                  <Link to="/register" className="flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2" style={{ color: p.accent }}>
                    Start <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}