import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Clock, Search, TrendingUp } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';

const categories = ['All', 'AI', 'Cybersecurity', 'Cloud', 'DevOps', 'Programming', 'Blockchain'];

const featured = {
  title: 'The Rise of AI Agents: How Autonomous Systems Are Reshaping Software Engineering',
  excerpt: 'From code generation to autonomous debugging, AI agents are fundamentally changing how development teams operate. We explore the top frameworks, real-world deployments, and what it means for the future of engineering.',
  category: 'AI',
  reading_time: 8,
  author: 'Sarah Chen',
  date: 'Jul 22, 2026',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
};

const articles = [
  { title: 'Zero Trust Architecture: A Complete Implementation Guide', category: 'Cybersecurity', reading_time: 6, author: 'Mike Rodriguez', date: 'Jul 21, 2026', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80', excerpt: 'Implementing Zero Trust requires a paradigm shift. Here\'s how to do it right.' },
  { title: 'AWS vs Azure vs GCP: 2026 Cloud Comparison', category: 'Cloud', reading_time: 10, author: 'Alex Park', date: 'Jul 20, 2026', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', excerpt: 'The big three cloud providers compared across 50+ criteria.' },
  { title: 'Rust is Eating the World: Why Systems Programmers Are Switching', category: 'Programming', reading_time: 7, author: 'Emma Wilson', date: 'Jul 19, 2026', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80', excerpt: 'Memory safety without garbage collection is winning developers over.' },
  { title: 'Kubernetes Security: Hardening Your Clusters in 2026', category: 'DevOps', reading_time: 9, author: 'James Liu', date: 'Jul 18, 2026', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80', excerpt: 'Best practices for securing your Kubernetes infrastructure.' },
  { title: 'LLM Security: Prompt Injection and Beyond', category: 'AI', reading_time: 8, author: 'Dr. Lisa Wang', date: 'Jul 17, 2026', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80', excerpt: 'New attack vectors emerge as LLMs become ubiquitous.' },
  { title: 'Smart Contract Auditing: A Practical Guide', category: 'Blockchain', reading_time: 12, author: 'David Kim', date: 'Jul 16, 2026', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80', excerpt: 'How to find and fix vulnerabilities in Solidity contracts.' },
  { title: 'Platform Engineering: The Future of DevOps', category: 'DevOps', reading_time: 6, author: 'Rachel Torres', date: 'Jul 15, 2026', image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&q=80', excerpt: 'Internal developer platforms are the next evolution.' },
  { title: 'The Complete Guide to OAuth 2.1', category: 'Cybersecurity', reading_time: 11, author: 'Tom Anderson', date: 'Jul 14, 2026', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80', excerpt: 'Everything you need to know about the latest OAuth spec.' },
];

export default function Explore() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? articles : articles.filter((a) => a.category === active);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-mono text-hacklido-cyan uppercase tracking-widest mb-3">Explore</h2>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Tech News & <span className="text-gradient-blue">Articles</span>
            </h1>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Daily technology news and in-depth articles from industry experts.
            </p>
          </motion.div>

          {/* Search + filters */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl glass-subtle text-sm text-white placeholder:text-slate-500 outline-none focus:border-hacklido-electric/40 transition-colors"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    active === c
                      ? 'bg-gradient-to-r from-hacklido-electric to-hacklido-cyan text-hacklido-deepest'
                      : 'glass-subtle text-slate-300 hover:text-hacklido-cyan'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Trending */}
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="w-4 h-4 text-hacklido-cyan" />
            <span className="text-xs text-slate-400">Trending:</span>
            {['#AI', '#ZeroTrust', '#Kubernetes', '#Rust', '#CloudNative'].map((t) => (
              <span key={t} className="text-xs text-slate-500 hover:text-hacklido-cyan cursor-pointer transition-colors">{t}</span>
            ))}
          </div>

          {/* Featured */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl overflow-hidden mb-8 group cursor-pointer hover:scale-[1.01] transition-all duration-300">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-hacklido-deepest/50" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded-full glass-subtle text-[10px] font-medium text-hacklido-cyan">{featured.category}</span>
                  <span className="text-[10px] text-hacklido-emerald">Featured</span>
                </div>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-3 leading-snug group-hover:text-hacklido-cyan transition-colors">{featured.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="font-medium text-slate-300">{featured.author}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span>{featured.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.reading_time} min read</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Article grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="group glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-hacklido-card via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md glass-strong text-[10px] font-medium text-hacklido-cyan">{a.category}</span>
                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full glass-strong flex items-center justify-center text-slate-300 hover:text-hacklido-cyan transition-colors">
                    <Bookmark className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-base font-semibold text-white leading-snug mb-2 group-hover:text-hacklido-cyan transition-colors line-clamp-2">{a.title}</h3>
                  <p className="text-xs text-slate-400 mb-3 line-clamp-2">{a.excerpt}</p>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500">
                    <span className="font-medium text-slate-300">{a.author}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span className="flex items-center gap-0.5"><Clock className="w-2.5 h-2.5" />{a.reading_time}m</span>
                  </div>
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