import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send } from 'lucide-react';

const suggestions = [
  { icon: '🎯', text: 'Next learning path for my level' },
  { icon: '🔬', text: 'Recommend a lab to practice' },
  { icon: '🗺️', text: 'Build a personalized roadmap' },
  { icon: '📰', text: 'Suggest an article to read' },
  { icon: '💡', text: 'Give me progress insights' },
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-hacklido-electric to-hacklido-purple flex items-center justify-center glow-blue hover:scale-110 transition-transform duration-300 group"
      >
        <div className="absolute inset-0 rounded-2xl pulse-ring" />
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Sparkles className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 glass-strong rounded-3xl p-5 shadow-2xl shadow-black/40"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-hacklido-electric to-hacklido-purple flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white text-sm">AI Learning Assistant</h3>
                <p className="text-xs text-hacklido-cyan">Online · Ready to help</p>
              </div>
            </div>

            <div className="glass-subtle rounded-2xl p-4 mb-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                Hi! I'm your AI learning companion. I can suggest next steps, recommend labs,
                build personalized roadmaps, and help you grow your tech career.
              </p>
            </div>

            <p className="text-xs font-medium text-slate-400 mb-2.5">Quick suggestions</p>
            <div className="space-y-2 mb-4">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl glass-subtle text-left text-sm text-slate-300 hover:text-hacklido-cyan hover:border-hacklido-cyan/20 transition-all duration-200 group"
                >
                  <span className="text-base">{s.icon}</span>
                  <span className="flex-1">{s.text}</span>
                  <Send className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-hacklido-cyan" />
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2.5 rounded-xl glass-subtle text-sm text-white placeholder:text-slate-500 outline-none focus:border-hacklido-electric/40 transition-colors"
              />
              <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-hacklido-electric to-hacklido-cyan flex items-center justify-center hover:scale-105 transition-transform">
                <Send className="w-4 h-4 text-hacklido-deepest" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}