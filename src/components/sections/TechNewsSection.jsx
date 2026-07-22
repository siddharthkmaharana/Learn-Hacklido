import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bookmark, Clock, ArrowRight, TrendingUp } from 'lucide-react';

const trending = ['#AI', '#Cybersecurity', '#Cloud', '#DevOps', '#Rust', '#Kubernetes'];

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
  { title: 'Zero Trust Architecture: A Complete Implementation Guide', category: 'Cybersecurity', reading_time: 6, author: 'Mike Rodriguez', date: 'Jul 21, 2026', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80' },
  { title: 'AWS vs Azure vs GCP: 2026 Cloud Comparison', category: 'Cloud', reading_time: 10, author: 'Alex Park', date: 'Jul 20, 2026', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80' },
  { title: 'Rust is Eating the World: Why Systems Programmers Are Switching', category: 'Programming', reading_time: 7, author: 'Emma Wilson', date: 'Jul 19, 2026', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80' },
  { title: 'Kubernetes Security: Hardening Your Clusters in 2026', category: 'DevOps', reading_time: 9, author: 'James Liu', date: 'Jul 18, 2026', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
];

export default function TechNewsSection() {
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
            <h2 className="text-xs font-mono text-hacklido-cyan uppercase tracking-widest mb-3">Explore</h2>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Tech News & Articles
            </h3>
          </div>
          <Link to="/explore" className="flex items-center gap-1.5 text-sm font-semibold text-hacklido-cyan hover:gap-2.5 transition-all">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Trending */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <TrendingUp className="w-4 h-4 text-hacklido-cyan mr-1" />
          {trending.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full glass-subtle text-xs text-slate-300 hover:text-hacklido-cyan cursor-pointer transition-colors">
              {t}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured article */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group glass rounded-3xl overflow-hidden hover:scale-[1.01] transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-hacklido-deepest via-hacklido-deepest/40 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full glass-strong text-xs font-medium text-hacklido-cyan">
                {featured.category}
              </span>
              <span className="absolute top-4 right-4 w-9 h-9 rounded-full glass-strong flex items-center justify-center text-slate-300 hover:text-hacklido-cyan cursor-pointer transition-colors">
                <Bookmark className="w-4 h-4" />
              </span>
            </div>
            <div className="p-6">
              <h4 className="font-heading text-xl font-bold text-white mb-2 leading-snug group-hover:text-hacklido-cyan transition-colors">
                {featured.title}
              </h4>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="font-medium text-slate-300">{featured.author}</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span>{featured.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.reading_time} min</span>
              </div>
            </div>
          </motion.div>

          {/* Article grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {articles.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative h-32 overflow-hidden">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-hacklido-card to-transparent" />
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md glass-strong text-[10px] font-medium text-hacklido-cyan">
                    {a.category}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-heading text-sm font-semibold text-white leading-snug mb-2 group-hover:text-hacklido-cyan transition-colors line-clamp-2">
                    {a.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500">
                    <span>{a.author}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span className="flex items-center gap-0.5"><Clock className="w-2.5 h-2.5" />{a.reading_time}m</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}