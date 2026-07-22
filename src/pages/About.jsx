import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, Users, BookOpen, Shield } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';

const values = [
  { icon: Zap, title: 'Learn by Doing', desc: 'We believe hands-on practice beats passive watching. Every path includes real labs.', color: '#00E5FF' },
  { icon: BookOpen, title: 'Quality First', desc: 'Every article, lab, and roadmap is crafted by industry experts, not generated.', color: '#28B6F6' },
  { icon: Shield, title: 'Accessible to All', desc: 'Premium tech education should be accessible. Our free tier is genuinely useful.', color: '#4F7BFF' },
  { icon: Users, title: 'Community Driven', desc: 'Learning is better together. Our community is at the heart of everything we build.', color: '#7C4DFF' },
];

const stats = [
  { value: '25,000+', label: 'Active Learners' },
  { value: '200+', label: 'Interactive Labs' },
  { value: '50+', label: 'Learning Paths' },
  { value: '18+', label: 'Career Roadmaps' },
];

export default function About() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-mono text-hacklido-cyan uppercase tracking-widest mb-3">About</h2>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              We're building the <span className="text-gradient-blue">future</span> of tech education.
            </h1>
            <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed">
              Hacklido Learn was born from a simple frustration: tech education is fragmented. You learn theory on one site,
              practice on another, read news on a third, and plan your career on a fourth. We bring it all together into
              one premium, connected experience.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold text-gradient-cyan font-heading">{s.value}</p>
                <p className="text-xs text-slate-400 mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Values */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl font-bold text-white">Our Values</h2>
            <p className="mt-3 text-slate-400">The principles that guide everything we build.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${v.color}15`, boxShadow: `0 0 25px ${v.color}15` }}
                >
                  <v.icon className="w-6 h-6" style={{ color: v.color }} />
                </div>
                <h3 className="font-heading font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative rounded-[2rem] overflow-hidden p-12 text-center">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-hacklido-deepest via-hacklido-dark to-hacklido-deepest" />
              <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-hacklido-electric/20 blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-hacklido-purple/20 blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="font-heading text-3xl font-bold text-white mb-4">Ready to start learning?</h2>
              <p className="text-slate-400 mb-6 max-w-md mx-auto">Join thousands of learners building their tech careers on Hacklido.</p>
              <Link to="/register" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-hacklido-electric to-hacklido-cyan text-sm font-semibold text-hacklido-deepest hover:shadow-xl hover:shadow-hacklido-electric/30 transition-all duration-300 hover:scale-105">
                Get Started Free <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}