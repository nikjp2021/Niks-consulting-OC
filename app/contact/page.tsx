'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-bold text-brand-500 uppercase tracking-[0.2em] mb-4">Contact</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-ink-100 mb-6">
            Let's <span className="gradient-text">talk</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-ink-400 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="glass-card p-8 md:p-10">
                <h2 className="text-2xl font-display font-bold text-ink-100 mb-8">Send us a message</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-ink-300 mb-2">Name</label>
                      <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ink-100 placeholder:text-ink-500 focus:outline-none focus:border-brand-500/50 transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-ink-300 mb-2">Email</label>
                      <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ink-100 placeholder:text-ink-500 focus:outline-none focus:border-brand-500/50 transition-colors" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-ink-300 mb-2">Subject</label>
                    <input type="text" id="subject" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ink-100 placeholder:text-ink-500 focus:outline-none focus:border-brand-500/50 transition-colors" placeholder="What is this about?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink-300 mb-2">Message</label>
                    <textarea id="message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ink-100 placeholder:text-ink-500 focus:outline-none focus:border-brand-500/50 transition-colors resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="glow-button w-full py-4 rounded-xl text-base">Send Message</button>
                </form>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="glass-card p-8">
                <h3 className="text-lg font-display font-semibold text-ink-100 mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {[
                    { icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    ), label: 'Phone', value: '+1 (234) 567-890' },
                    { icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    ), label: 'Email', value: 'hello@niksconsulting.com' },
                    { icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    ), label: 'Location', value: 'Your City, Country' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center shrink-0 text-brand-500">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-ink-500 uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm text-ink-300 mt-0.5">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-lg font-display font-semibold text-ink-100 mb-4">Response Time</h3>
                <p className="text-sm text-ink-400 leading-relaxed">We typically respond within 24 hours. For urgent inquiries, book a call directly and we'll get back to you within the hour.</p>
                <a href="/get-a-quote" className="mt-4 inline-flex glow-button px-6 py-3 rounded-xl text-sm">Book a Call</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
