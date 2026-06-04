'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

const values = [
  { title: 'Innovation First', desc: 'We leverage cutting-edge AI to solve real business problems, not just for the sake of technology.', color: '#3B82F6' },
  { title: 'Results Driven', desc: 'Every engagement has clear KPIs and measurable outcomes. We don\'t deliver slide decks; we deliver growth.', color: '#06B6D4' },
  { title: 'Client Partnership', desc: 'We embed with your team, understand your culture, and become an extension of your business.', color: '#8B5CF6' },
  { title: 'Global Perspective', desc: 'With projects across 15+ countries, we bring diverse insights and proven strategies from global markets.', color: '#F59E0B' },
]

export default function About() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-bold text-accent-violet uppercase tracking-[0.2em] mb-4">About</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-ink-100 mb-6">
            Pioneers in <span className="gradient-text">AI Solutions</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-ink-400 max-w-3xl mx-auto">
            We deliver AI-powered solutions, agentic workflows, and digital transformation for startups and SMEs worldwide.
          </motion.p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink-100 mb-6">Our Story</h2>
              <div className="space-y-4 text-ink-400 leading-relaxed">
                <p>Nik's Consulting was born from a simple observation: most AI consulting firms deliver impressive presentations but struggle with actual implementation. We set out to change that.</p>
                <p>Founded by engineers and entrepreneurs who have built and scaled products across three continents, our team brings together deep technical expertise with practical business acumen.</p>
                <p>Today, we work with startups and SMEs across 15+ countries, helping them harness the power of AI to automate operations, transform customer experiences, and accelerate growth—without the enterprise complexity.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="glass-card p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '300%+', label: 'Avg. Client ROI' },
                  { value: '15+', label: 'Countries Served' },
                  { value: '50+', label: 'Projects Delivered' },
                  { value: '5+', label: 'Years of Experience' },
                ].map((s) => (
                  <div key={s.label} className="text-center py-6">
                    <div className="text-3xl font-display font-bold gradient-text">{s.value}</div>
                    <div className="text-sm text-ink-500 mt-2">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink-100 mb-4">Our Values</h2>
            <p className="text-ink-400 max-w-2xl mx-auto">The principles that guide every engagement and decision we make.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass-card-hover p-8 text-center"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: `${v.color}20` }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={v.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="text-lg font-semibold text-ink-100 mb-3">{v.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--brand-500)_0%,transparent_70%)] opacity-[0.08]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="glass-card p-12 md:p-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink-100 mb-6">Let's build something great together</h2>
            <p className="text-lg text-ink-400 mb-10 max-w-xl mx-auto">Ready to transform your business with AI? Let's talk.</p>
            <a href="/contact" className="glow-button px-10 py-4 rounded-xl text-base">Get in Touch</a>
          </div>
        </div>
      </section>
    </>
  )
}
