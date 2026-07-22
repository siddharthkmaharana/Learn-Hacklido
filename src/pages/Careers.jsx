import { motion } from 'framer-motion';
import { Brain, Cloud, ShieldCheck, Radar, GitBranch, Server, Code2, Database, Blocks, Cpu, Smartphone, Wifi, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';

const roadmaps = [
  { title: 'AI Engineer', icon: Brain, time: '8-12 months', accent: '#7C4DFF', prerequisites: ['Python', 'Math', 'Statistics'], certs: ['TensorFlow Developer', 'AWS ML Specialty'] },
  { title: 'Cloud Engineer', icon: Cloud, time: '6-10 months', accent: '#00E5FF', prerequisites: ['Linux', 'Networking'], certs: ['AWS SAA', 'Azure AZ-104'] },
  { title: 'Cloud Security Engineer', icon: ShieldCheck, time: '8-12 months', accent: '#28B6F6', prerequisites: ['Cloud Basics', 'Security+'], certs: ['CCSP', 'AWS Security'] },
  { title: 'SOC Analyst', icon: Radar, time: '4-6 months', accent: '#4F7BFF', prerequisites: ['Networking', 'OS Basics'], certs: ['CompTIA Security+', 'CySA+'] },
  { title: 'Penetration Tester', icon: ShieldCheck, time: '6-9 months', accent: '#7C4DFF', prerequisites: ['Networking', 'Linux', 'Scripting'], certs: ['OSCP', 'CEH'] },
  { title: 'DevOps Engineer', icon: GitBranch, time: '5-8 months', accent: '#00D084', prerequisites: ['Linux', 'Programming'], certs: ['CKA', 'AWS DevOps'] },
  { title: 'Platform Engineer', icon: Server, time: '6-9 months', accent: '#28B6F6', prerequisites: ['DevOps', 'Kubernetes'], certs: ['CKA', 'Terraform Associate'] },
  { title: 'Software Engineer', icon: Code2, time: '6-12 months', accent: '#4F7BFF', prerequisites: ['Programming', 'DSA'], certs: ['AWS SAA'] },
  { title: 'Backend Engineer', icon: Database, time: '5-8 months', accent: '#00E5FF', prerequisites: ['Programming', 'Databases'], certs: ['AWS SAA'] },
  { title: 'Frontend Engineer', icon: Code2, time: '5-8 months', accent: '#28B6F6', prerequisites: ['HTML/CSS', 'JavaScript'], certs: [] },
  { title: 'Full Stack Developer', icon: Code2, time: '8-14 months', accent: '#28B6F6', prerequisites: ['Frontend', 'Backend'], certs: ['AWS SAA'] },
  { title: 'Machine Learning Engineer', icon: Cpu, time: '8-12 months', accent: '#7C4DFF', prerequisites: ['Python', 'AI Basics'], certs: ['TensorFlow Developer', 'GCP ML'] },
  { title: 'Prompt Engineer', icon: Brain, time: '3-5 months', accent: '#4F7BFF', prerequisites: ['Basic Programming'], certs: [] },
  { title: 'Blockchain Developer', icon: Blocks, time: '6-10 months', accent: '#4F7BFF', prerequisites: ['JavaScript', 'Smart Contracts'], certs: ['Ethereum Developer'] },
  { title: 'Site Reliability Engineer', icon: Server, time: '6-10 months', accent: '#28B6F6', prerequisites: ['Linux', 'Programming', 'DevOps'], certs: ['CKA', 'GCP DevOps'] },
  { title: 'Cyber Crime Investigator', icon: Radar, time: '6-9 months', accent: '#7C4DFF', prerequisites: ['Security+', 'Networking'], certs: ['GCFA', 'GCFE'] },
  { title: 'Mobile Developer', icon: Smartphone, time: '5-8 months', accent: '#00E5FF', prerequisites: ['Programming'], certs: [] },
  { title: 'IoT Engineer', icon: Wifi, time: '6-10 months', accent: '#4F7BFF', prerequisites: ['Networking', 'Embedded'], certs: ['AWS IoT'] },
];

const nodeLevels = ['Fundamentals', 'Intermediate', 'Advanced', 'Specialization', 'Mastery'];

export default function Careers() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-mono text-hacklido-cyan uppercase tracking-widest mb-3">Career Roadmaps</h2>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Build Your <span className="text-gradient-purple">Career</span>
            </h1>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Interactive node-graph roadmaps for 18+ tech careers. Track your skill progression, prerequisites, and certifications.
            </p>
          </motion.div>

          {/* Interactive node graph preview */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-3xl p-8 mb-12">
            <h3 className="font-heading text-lg font-bold text-white mb-6">Sample: AI Engineer Roadmap</h3>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {nodeLevels.map((level, i) => (
                <div key={level} className="flex flex-col lg:flex-row items-center gap-4 flex-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15 }}
                    className="glass-subtle rounded-2xl p-4 w-full lg:w-44 text-center"
                    style={{ borderColor: i === 0 ? '#00E5FF40' : 'rgba(255,255,255,0.05)', boxShadow: i === 0 ? '0 0 30px #00E5FF20' : 'none' }}
                  >
                    <div className={`w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center ${i === 0 ? 'bg-hacklido-cyan/15' : 'bg-white/5'}`}>
                      {i === 0 ? <CheckCircle2 className="w-5 h-5 text-hacklido-cyan" /> : <span className="text-sm font-mono text-slate-400">{i + 1}</span>}
                    </div>
                    <p className="text-sm font-semibold text-white mb-1">{level}</p>
                    <p className="text-[10px] text-slate-500">
                      {['Python, Math, Stats', 'ML Algorithms', 'Deep Learning', 'NLP & LLMs', 'AI Agents'][i]}
                    </p>
                  </motion.div>
                  {i < nodeLevels.length - 1 && (
                    <div className="hidden lg:block w-12 h-px bg-gradient-to-r from-hacklido-electric/40 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Roadmap cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {roadmaps.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="group glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ background: `${r.accent}15`, boxShadow: `0 0 25px ${r.accent}15` }}
                  >
                    <r.icon className="w-6 h-6" style={{ color: r.accent }} />
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-slate-500">
                    <Clock className="w-3 h-3" />{r.time}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">{r.title}</h3>

                {/* Prerequisites */}
                <div className="mb-3">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5">Prerequisites</p>
                  <div className="flex flex-wrap gap-1.5">
                    {r.prerequisites.map((p) => (
                      <span key={p} className="px-2 py-0.5 rounded-md glass-subtle text-[10px] text-slate-300">{p}</span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                {r.certs.length > 0 && (
                  <div className="mb-4">
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5">Certifications</p>
                    <div className="flex flex-wrap gap-1.5">
                      {r.certs.map((c) => (
                        <span key={c} className="px-2 py-0.5 rounded-md text-[10px]" style={{ background: `${r.accent}15`, color: r.accent }}>{c}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2" style={{ color: r.accent }}>
                  View Roadmap <ArrowRight className="w-4 h-4" />
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