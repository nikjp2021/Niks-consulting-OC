'use client'

import { motion } from 'framer-motion'

export default function Gifted() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-bold text-accent-pink uppercase tracking-[0.2em] mb-4">Internship</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-ink-100 mb-6">
            Gifted <span className="gradient-text">Internship</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base sm:text-lg text-ink-400 max-w-3xl mx-auto">
            A unique program for talented individuals who want to work on real AI projects, build their portfolio, and make an impact.
          </motion.p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-display font-bold text-ink-100 mb-6">What is the Gifted Internship?</h2>
              <div className="space-y-4 text-ink-400 leading-relaxed">
                <p>The Gifted Internship is our flagship talent development program. We hand-pick ambitious individuals and give them real responsibility on client projects from day one.</p>
                <p>Unlike traditional internships where you're fetching coffee, you'll be building AI agents, designing solutions, and delivering value to real businesses.</p>
                <p>You'll work alongside senior engineers and consultants who mentor you through every step. By the end of the program, you'll have a portfolio of shipped projects and the skills to lead your own initiatives.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="glass-card overflow-hidden">
                <img src="/assets/Copilot_20260524_190748.webp" alt="Gifted Internship program" className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="glass-card p-8">
                <h3 className="text-lg font-display font-semibold text-ink-100 mb-6">Program Highlights</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Duration', value: '12 weeks (extendable)' },
                    { label: 'Format', value: 'Remote, full-time' },
                    { label: 'Mentorship', value: '1:1 with senior engineers' },
                    { label: 'Projects', value: 'Real client work, not simulations' },
                    { label: 'Stack', value: 'AI/ML, Next.js, Python, Cloud' },
                    { label: 'Compensation', value: 'Stipend + performance bonus' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center pb-3 border-b border-white/[0.04] last:border-0">
                      <span className="text-sm text-ink-400">{item.label}</span>
                      <span className="text-sm font-medium text-ink-100">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink-100 mb-6">Ready to apply?</h2>
            <p className="text-lg text-ink-400 max-w-xl mx-auto mb-10">We're currently accepting applications for the next cohort. Spaces are limited.</p>
            <a href="/contact" className="glow-button px-10 py-4 rounded-xl text-base">Apply Now</a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
