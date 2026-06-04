'use client'

import { motion } from 'framer-motion'

export default function Training() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7 } })
  }

  const programs = [
    { title: 'AI Fundamentals', desc: 'Understand the basics of AI, machine learning, and how to identify opportunities in your business.', duration: '2 days', level: 'Beginner' },
    { title: 'Prompt Engineering', desc: 'Master the art of crafting effective prompts for LLMs like GPT-4, Claude, and Gemini.', duration: '1 day', level: 'Intermediate' },
    { title: 'AI Automation Workshop', desc: 'Learn to build AI-powered automations using no-code and low-code tools for your workflows.', duration: '3 days', level: 'Intermediate' },
    { title: 'Agentic AI Development', desc: 'Deep dive into building autonomous AI agents that can handle complex business tasks.', duration: '5 days', level: 'Advanced' },
  ]

  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/assets/Generate_Video_First_person.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-surface-0/60 backdrop-blur-sm" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-bold text-accent-amber uppercase tracking-[0.2em] mb-4">Training</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-ink-100 mb-6">
            Level up with <span className="gradient-text">AI training</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-ink-400 max-w-3xl mx-auto">
            Hands-on training programs designed to equip your team with practical AI skills. From fundamentals to advanced agentic development.
          </motion.p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass-card-hover p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-ink-500 bg-white/5 px-3 py-1.5 rounded-full uppercase tracking-wider">{p.level}</span>
                  <span className="text-xs text-ink-500">{p.duration}</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-ink-100 mb-3">{p.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed mb-6">{p.desc}</p>
                <a href="/contact" className="text-sm font-medium text-brand-500 hover:text-brand-400 transition-colors inline-flex items-center gap-1">
                  Enroll now
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink-100 mb-6">Want a custom training program for your team?</h2>
            <p className="text-lg text-ink-400 max-w-xl mx-auto mb-10">We design bespoke training programs tailored to your industry, tech stack, and team skill level.</p>
            <a href="/contact" className="glow-button px-10 py-4 rounded-xl text-base">Request Custom Training</a>
          </div>
        </div>
      </section>
    </>
  )
}
