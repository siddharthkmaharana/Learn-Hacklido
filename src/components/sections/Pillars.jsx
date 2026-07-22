import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Swords, BookOpen, Newspaper, Map, TrendingUp, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: GraduationCap,
    title: 'Learn',
    desc: 'Structured learning paths that guide you from beginner to expert with sequential lessons and code examples.',
    cta: 'Browse Paths',
    link: '/learn',
    color: '#28B6F6',
  },
  {
    icon: Swords,
    title: 'Practice',
    desc: 'PocketCTFs, Blue Box defensive labs, and Red Quest offensive simulations. Hands-on, immersive, real.',
    cta: 'Enter Playground',
    link: '/practice',
    color: '#00E5FF',
  },
  {
    icon: BookOpen,
    title: 'Read',
    desc: 'In-depth blogs and technical articles written by industry experts, covering the latest in tech.',
    cta: 'Read Articles',
    link: '/explore',
    color: '#4F7BFF',
  },
  {
    icon: Newspaper,
    title: 'Stay Updated',
    desc: 'Daily technology news curated and categorized so you never miss what matters in the tech world.',
    cta: 'Latest News',
    link: '/explore',
    color: '#7C4DFF',
  },
  {
    icon: Map,
    title: 'Plan',
    desc: 'Interactive career roadmaps with skill progression, prerequisites, and certifications for 18+ careers.',
    cta: 'Explore Roadmaps',
    link: '/careers',
    color: '#28B6F6',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    desc: 'Community achievements, leaderboards, and weekly analytics that keep you motivated and growing.',
    cta: 'Join Community',
    link: '/community',
    color: '#00D084',
  },
];

export default function Pillars() {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-xs font-mono text-hacklido-cyan uppercase tracking-widest mb-3">
            The Learner Journey
          </h2>
          <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Six Pillars. One Platform.
          </h3>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Everything you need to learn, practice, stay updated, and build your career—beautifully connected.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 200, damping: 20 }}
              className="group glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              style={{ '--glow-color': p.color }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{ background: `${p.color}15`, boxShadow: `0 0 30px ${p.color}20` }}
              >
                <p.icon className="w-6 h-6" style={{ color: p.color }} />
              </div>
              <h4 className="font-heading text-xl font-bold text-white mb-2">{p.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">{p.desc}</p>
              <Link
                to={p.link}
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                style={{ color: p.color }}
              >
                {p.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}