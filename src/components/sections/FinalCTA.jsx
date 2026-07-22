import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden p-12 lg:p-20 text-center"
        >
          {/* Cinematic gradient background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-hacklido-deepest via-hacklido-dark to-hacklido-deepest" />
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-hacklido-electric/20 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-hacklido-purple/20 blur-3xl" />
            <div className="absolute inset-0 cyber-grid-bg opacity-30" />
          </div>

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
            >
              Start Building Your
              <br />
              <span className="text-gradient-blue">Tech Career Today.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-base sm:text-lg text-slate-400 max-w-xl mx-auto"
            >
              Join 25,000+ learners who are already leveling up their tech skills on Hacklido Learn.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link
                to="/learn"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-hacklido-electric to-hacklido-cyan text-sm font-semibold text-hacklido-deepest hover:shadow-xl hover:shadow-hacklido-electric/30 transition-all duration-300 hover:scale-105"
              >
                Explore Learning Paths
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/practice"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl glass-strong text-sm font-semibold text-white hover:border-hacklido-cyan/30 hover:text-hacklido-cyan transition-all duration-300"
              >
                <Compass className="w-4 h-4" />
                Enter the Playground
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}