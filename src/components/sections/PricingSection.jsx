import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/forever',
    desc: 'Perfect for getting started',
    features: [
      'Access to 5 learning paths',
      '10 PocketCTF challenges',
      'Community access',
      'Basic dashboard',
      'Daily tech news',
    ],
    cta: 'Get Started',
    highlighted: false,
    accent: '#4F7BFF',
  },
  {
    name: 'Pro',
    price: '$24',
    period: '/month',
    desc: 'For serious learners',
    features: [
      'All 50+ learning paths',
      'Unlimited labs & playgrounds',
      'All career roadmaps',
      'Certificates & achievements',
      'AI learning assistant',
      'Advanced analytics',
      'Priority support',
    ],
    cta: 'Get Pro',
    highlighted: true,
    accent: '#00E5FF',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For teams and organizations',
    features: [
      'Everything in Pro',
      'Team management',
      'Custom learning paths',
      'SSO & SAML',
      'Analytics dashboard',
      'Dedicated support',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    highlighted: false,
    accent: '#7C4DFF',
  },
];

export default function PricingSection() {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-xs font-mono text-hacklido-cyan uppercase tracking-widest mb-3">Pricing</h2>
          <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Simple, Transparent Pricing
          </h3>
          <p className="mt-4 text-slate-400 text-base">
            Start free. Upgrade when you're ready. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-7 transition-all duration-300 hover:scale-[1.02] ${
                plan.highlighted
                  ? 'glass-strong border-2'
                  : 'glass hover:border-white/10'
              }`}
              style={plan.highlighted ? { borderColor: `${plan.accent}40`, boxShadow: `0 0 50px ${plan.accent}15` } : {}}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-hacklido-electric to-hacklido-cyan text-xs font-bold text-hacklido-deepest flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <h4 className="font-heading text-lg font-bold text-white mb-1">{plan.name}</h4>
              <p className="text-xs text-slate-400 mb-5">{plan.desc}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white font-heading">{plan.price}</span>
                <span className="text-sm text-slate-500">{plan.period}</span>
              </div>

              <Link
                to="/register"
                className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-300 mb-6 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-hacklido-electric to-hacklido-cyan text-hacklido-deepest hover:shadow-lg hover:shadow-hacklido-electric/30'
                    : 'glass-subtle text-white hover:border-white/20'
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: plan.accent }} />
                    <span className="text-sm text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}