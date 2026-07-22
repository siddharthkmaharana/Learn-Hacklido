import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Shield, Users } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import PricingSection from '@/components/sections/PricingSection';

const faqs = [
  { q: 'Can I switch plans anytime?', a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we prorate the difference.' },
  { q: 'Do you offer student discounts?', a: 'Absolutely. Students with a valid .edu email get 50% off any Pro plan. Contact us with your student email to get set up.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and for Enterprise plans, we can arrange bank transfers and invoicing.' },
  { q: 'Is there a free trial for Pro?', a: 'Yes — every new account gets 14 days of Pro access for free. No credit card required to start your trial.' },
];

export default function Pricing() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xs font-mono text-hacklido-cyan uppercase tracking-widest mb-3">Pricing</h2>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Simple, <span className="text-gradient-blue">Transparent</span> Pricing
            </h1>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Start free. Upgrade when you're ready. Cancel anytime.
            </p>
          </motion.div>

          <PricingSection />

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 mt-12 mb-20"
          >
            {[
              { icon: Shield, label: 'Secure payments' },
              { icon: Zap, label: 'Instant access' },
              { icon: Users, label: '25,000+ learners' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-slate-400">
                <Icon className="w-4 h-4 text-hacklido-cyan" />
                {label}
              </div>
            ))}
          </motion.div>

          {/* FAQ */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="glass rounded-2xl p-5">
                  <h4 className="font-semibold text-white text-sm mb-2">{faq.q}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-20">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <Link to="/register" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-hacklido-electric to-hacklido-cyan text-sm font-semibold text-hacklido-deepest hover:shadow-xl hover:shadow-hacklido-electric/30 transition-all duration-300 hover:scale-105">
              Start Free Trial
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}