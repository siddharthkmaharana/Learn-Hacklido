import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Cloud, ShieldCheck, Shield, Radar, GitBranch, Server, Code2, Database, Blocks, Cpu, ArrowRight } from 'lucide-react';

const roadmaps = [
  { title: 'AI Engineer', icon: Brain, time: '8-12 months', accent: '#7C4DFF' },
  { title: 'Cloud Engineer', icon: Cloud, time: '6-10 months', accent: '#00E5FF' },
  { title: 'Cloud Security Engineer', icon: ShieldCheck, time: '8-12 months', accent: '#28B6F6' },
  { title: 'SOC Analyst', icon: Radar, time: '4-6 months', accent: '#4F7BFF' },
  { title: 'Penetration Tester', icon: Shield, time: '6-9 months', accent: '#7C4DFF' },
  { title: 'DevOps Engineer', icon: GitBranch, time: '5-8 months', accent: '#00D084' },
  { title: 'Platform Engineer', icon: Server, time: '6-9 months', accent: '#28B6F6' },
  { title: 'Software Engineer', icon: Code2, time: '6-12 months', accent: '#4F7BFF' },
  { title: 'Backend Engineer', icon: Database, time: '5-8 months', accent: '#00E5FF' },
  { title: 'Full Stack Developer', icon: Code2, time: '8-14 months', accent: '#28B6F6' },
  { title: 'ML Engineer', icon: Cpu, time: '8-12 months', accent: '#7C4DFF' },
  { title: 'Blockchain Developer', icon: Blocks, time: '6-10 months', accent: '#4F7BFF' },
];

export default function RoadmapsSection() {
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
            <h2 className="text-xs font-mono text-hacklido-cyan uppercase tracking-widest mb-3">Career Roadmaps</h2>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Map Your Career Journey
            </h3>
            <p className="mt-3 text-slate-400 text-base max-w-lg">
              Interactive node graphs with skill progression, prerequisites, certifications, and recommended paths.
            </p>
          </div>
          <Link to="/careers" className="flex items-center gap-1.5 text-sm font-semibold text-hacklido-cyan hover:gap-2.5 transition-all">
            All 18+ roadmaps <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {roadmaps.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group glass rounded-2xl p-5 hover:scale-[1.04] transition-all duration-300 cursor-pointer"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ background: `${r.accent}15`, boxShadow: `0 0 20px ${r.accent}15` }}
              >
                <r.icon className="w-5 h-5" style={{ color: r.accent }} />
              </div>
              <h4 className="font-heading font-semibold text-white text-sm mb-1 leading-tight">{r.title}</h4>
              <p className="text-[11px] text-slate-500">{r.time}</p>

              {/* Mini node graph preview */}
              <div className="mt-4 flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((n) => (
                  <div key={n} className="flex items-center gap-1">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${n === 0 ? '' : 'opacity-30'}`}
                      style={{ background: r.accent }}
                    />
                    {n < 4 && <div className="w-3 h-px bg-white/10" />}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}