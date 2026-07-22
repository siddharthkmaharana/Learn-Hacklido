import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 25000, suffix: '+', label: 'Learners' },
  { value: 600, suffix: '+', label: 'Articles' },
  { value: 200, suffix: '+', label: 'Interactive Labs' },
  { value: 50, suffix: '+', label: 'Learning Paths' },
  { value: 20, suffix: '+', label: 'Career Roadmaps' },
  { value: 0, suffix: '', label: 'Daily Tech News', isDaily: true },
];

const partners = ['CompTIA', 'AWS', 'Google Cloud', 'Microsoft', 'Cisco', '(ISC)²'];

function AnimatedCounter({ value, suffix, isDaily }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    if (isDaily) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, value, isDaily]);

  if (isDaily) return <span className="text-3xl sm:text-4xl font-bold text-gradient-cyan">Daily</span>;

  return (
    <span className="text-3xl sm:text-4xl font-bold text-white">
      {count.toLocaleString()}
      <span className="text-gradient-cyan">{suffix}</span>
    </span>
  );
}

export default function TrustSection() {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-subtle rounded-3xl p-8 lg:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isDaily={stat.isDaily} />
                <p className="text-xs text-slate-400 mt-1.5 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Partner logos */}
          <div className="mt-10 pt-8 border-t border-white/5">
            <p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-6">
              Trusted by learners preparing for industry certifications
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
              {partners.map((p) => (
                <span
                  key={p}
                  className="text-sm font-heading font-semibold text-slate-500 hover:text-slate-300 transition-colors cursor-default"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}