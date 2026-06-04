'use client'

import { motion } from 'framer-motion'

export default function GetAQuote() {
  return (
    <>
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 text-center md:text-left">
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-bold text-brand-500 uppercase tracking-[0.2em] mb-4">
                Get a Quote
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-ink-100 mb-6">
                Tell us about <span className="gradient-text">your project</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base sm:text-lg text-ink-400 max-w-xl">
                Fill out the form below and we&apos;ll get back to you within 24 hours with a tailored proposal.
              </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="hidden md:block md:col-span-2">
              <div className="glass-card overflow-hidden rounded-2xl">
                <img src="/assets/Copilot_20260524_190917.webp" alt="Get a Quote" className="w-full h-72 object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-8 md:p-12">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <h3 className="text-lg font-display font-semibold text-ink-100 mb-4">Your Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ink-300 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ink-100 placeholder:text-ink-500 focus:outline-none focus:border-brand-500/50 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-300 mb-2">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ink-100 placeholder:text-ink-500 focus:outline-none focus:border-brand-500/50 transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-300 mb-2">Company</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ink-100 placeholder:text-ink-500 focus:outline-none focus:border-brand-500/50 transition-colors" placeholder="Your Company" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-300 mb-2">Phone</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ink-100 placeholder:text-ink-500 focus:outline-none focus:border-brand-500/50 transition-colors" placeholder="+1 (123) 456-7890" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-display font-semibold text-ink-100 mb-4">Service You Need</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {['AI Solutions & Agentic AI', 'AI Automation', 'Digital Transformation', 'Web & App Development', 'AI Social Media', 'Agile PM', 'Other'].map((s) => (
                    <label key={s} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5 accent-brand-500" />
                      <span className="text-sm text-ink-300">{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-display font-semibold text-ink-100 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-ink-300 mb-2">Project Budget</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ink-400 focus:outline-none focus:border-brand-500/50 transition-colors">
                      <option value="">Select a range</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-300 mb-2">Timeline</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ink-400 focus:outline-none focus:border-brand-500/50 transition-colors">
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (1-2 weeks)</option>
                      <option value="1month">1 month</option>
                      <option value="3months">2-3 months</option>
                      <option value="6months">3-6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-300 mb-2">Tell us about your project</label>
                    <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ink-100 placeholder:text-ink-500 focus:outline-none focus:border-brand-500/50 transition-colors resize-none" placeholder="Describe your project, goals, and any specific requirements..." />
                  </div>
                </div>
              </div>

              <button type="submit" className="glow-button w-full py-4 rounded-xl text-base">Submit Request</button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}
