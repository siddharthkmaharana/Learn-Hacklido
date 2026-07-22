import { Link } from 'react-router-dom';
import { Terminal, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const footerLinks = {
  Platform: [
    { label: 'Documentation', path: '/about' },
    { label: 'Blog', path: '/explore' },
    { label: 'Careers', path: '/careers' },
    { label: 'Community', path: '/community' },
  ],
  Resources: [
    { label: 'Learning Paths', path: '/learn' },
    { label: 'Labs', path: '/practice' },
    { label: 'Roadmaps', path: '/careers' },
    { label: 'Pricing', path: '/pricing' },
  ],
  Company: [
    { label: 'About', path: '/about' },
    { label: 'Privacy', path: '/about' },
    { label: 'Terms', path: '/about' },
    { label: 'Contact', path: '/about' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32">
      {/* Glowing divider */}
      <div className="relative h-px overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hacklido-electric to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hacklido-cyan to-transparent blur-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand + Newsletter */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-hacklido-electric to-hacklido-purple flex items-center justify-center glow-blue">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-heading font-bold text-white">
                Hacklido<span className="text-gradient-cyan"> Learn</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs mb-5 leading-relaxed">
              One playground. Every tech skill. Learn, practice, and build your tech career in one connected experience.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Github, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Mail, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg glass-subtle flex items-center justify-center text-slate-400 hover:text-hacklido-cyan hover:border-hacklido-cyan/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-heading font-semibold text-white mb-4">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-hacklido-cyan transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-heading font-semibold text-white mb-1">
                Stay in the loop
              </h4>
              <p className="text-sm text-slate-400">Get the latest tech news and learning updates.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-72 px-4 py-2.5 rounded-xl glass-subtle text-sm text-white placeholder:text-slate-500 outline-none focus:border-hacklido-electric/40 transition-colors"
              />
              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-hacklido-electric to-hacklido-cyan text-sm font-semibold text-hacklido-deepest hover:shadow-lg hover:shadow-hacklido-electric/30 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© 2026 Hacklido Learn. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy</Link>
            <Link to="/about" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms</Link>
            <Link to="/about" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}