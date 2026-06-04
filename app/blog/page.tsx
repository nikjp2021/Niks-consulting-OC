'use client'

import { motion } from 'framer-motion'

export default function Blog() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 hero-gradient" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
          <div className="glass-card p-16 md:p-24">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-500/20 to-accent-violet/20 flex items-center justify-center mx-auto mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-500"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
            </div>
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-ink-100 mb-6">Coming Soon</h1>
            <p className="text-lg text-ink-400 max-w-xl mx-auto mb-10">We're crafting insightful articles about AI, digital transformation, and building products that scale.</p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input type="email" placeholder="your@email.com" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ink-100 placeholder:text-ink-500 focus:outline-none focus:border-brand-500/50 transition-colors" />
                <button className="glow-button px-6 py-3 rounded-xl text-sm shrink-0">Notify Me</button>
              </div>
              <p className="text-xs text-ink-500 mt-3">Get notified when we publish our first article.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
