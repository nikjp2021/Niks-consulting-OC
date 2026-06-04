'use client'

import { motion } from 'framer-motion'

const caseStudies = [
  {
    title: 'Yoda Pizza Vietnam',
    subtitle: 'Dominating Online Recommendations',
    client: 'Yoda Pizza Vietnam',
    industry: 'Food & Beverage',
    location: 'Vietnam',
    challenge: 'A growing pizza chain in Vietnam needed to dominate local search results and online food delivery platforms to compete in a saturated market.',
    solution: 'Implemented a comprehensive AI-powered SEO strategy, optimized Google Business profiles, automated review management, and deployed targeted local ad campaigns.',
    results: ['Top 3 Google ranking for local pizza searches', '300% increase in online orders within 3 months', '50% reduction in cost-per-acquisition'],
    tags: ['SEO', 'Digital Transformation', 'AI'],
    gradient: 'from-brand-500/20',
  },
  {
    title: 'OzynicDress',
    subtitle: 'Building an Exclusive Brand Around African Culture',
    client: 'OzynicDress',
    industry: 'Fashion & E-commerce',
    location: 'USA',
    challenge: 'An African fashion designer based in the USA needed a distinctive online brand identity and e-commerce platform to showcase unique cultural fashion designs to a global audience.',
    solution: 'Built a custom e-commerce platform with AI-powered product recommendations, implemented a content strategy highlighting the cultural story behind each design, and deployed targeted social media campaigns.',
    results: ['200% increase in online sales', 'Expanded customer base to 15+ countries', 'Social media following grew by 500%'],
    tags: ['E-commerce', 'Branding', 'AI', 'Social Media'],
    gradient: 'from-accent-violet/20',
  },
  {
    title: 'Dona Gi Bolos',
    subtitle: 'Achieving Success Through SEO & Digital Marketing',
    client: 'Dona Gi Bolos',
    industry: 'Food & Beverage',
    location: 'Brazil',
    challenge: 'A traditional Brazilian bakery wanted to modernize their business and reach more customers through digital channels, moving beyond their local walk-in customer base.',
    solution: 'Developed a mobile-first website, implemented WhatsApp Business API for automated ordering, optimized local SEO, and launched targeted social media campaigns.',
    results: ['150% increase in new customer acquisition', 'WhatsApp automated ordering became 60% of total orders', 'Google My Business views increased by 400%'],
    tags: ['SEO', 'WhatsApp Automation', 'Local Marketing'],
    gradient: 'from-accent-cyan/20',
  },
  {
    title: 'MediConnect Japan',
    subtitle: 'AI-Powered Patient Triage',
    client: 'MediConnect Japan',
    industry: 'Health Tech',
    location: 'Japan',
    challenge: 'A telehealth startup in Japan struggled with long patient wait times and inefficient triage. Manual assessment of symptoms was creating bottlenecks, causing patients to wait hours for initial consultations.',
    solution: 'Developed an AI-powered symptom assessment and triage system that automatically categorizes patient urgency, routes cases to appropriate specialists, and provides instant preliminary guidance.',
    results: ['70% reduction in patient wait times', 'AI triage accuracy rate of 94%', 'Patient satisfaction scores improved by 40%'],
    tags: ['Health Tech', 'Agentic AI', 'Japan'],
    gradient: 'from-accent-pink/20',
  },
  {
    title: 'ModaExpress',
    subtitle: 'End-to-End E-Commerce Automation',
    client: 'ModaExpress',
    industry: 'E-commerce',
    location: 'Brazil',
    challenge: 'A fast-growing Brazilian fashion e-commerce brand was drowning in manual operations—inventory management, customer support, order processing, and social media posting consumed 80% of the team\'s time.',
    solution: 'Implemented end-to-end AI automation: automated inventory sync, AI chatbot for customer support, automated order processing, and AI-generated social media content scheduling.',
    results: ['80% reduction in manual operational tasks', 'Customer response time dropped from 4 hours to 2 minutes', 'Operational costs reduced by 60%'],
    tags: ['E-Commerce', 'AI Automation', 'Brazil'],
    gradient: 'from-brand-500/20',
  },
  {
    title: 'DataFlow Analytics',
    subtitle: 'Building an AI-Native SaaS Platform',
    client: 'DataFlow Analytics',
    industry: 'SaaS',
    location: 'USA',
    challenge: 'A US-based analytics startup needed to build a minimum viable product (MVP) for their AI-powered business intelligence platform. They had the vision but lacked the technical team to execute within their 4-month runway.',
    solution: 'Assembled a lean engineering team, leveraged AI-assisted development for rapid prototyping, implemented agile sprints with weekly deliverables, and built a scalable cloud-native architecture.',
    results: ['MVP delivered 2 weeks ahead of schedule', 'Secured $1.5M seed funding within 2 months of launch', 'Architecture scaled to handle 100K+ users from day one'],
    tags: ['SaaS', 'AI Development', 'USA'],
    gradient: 'from-accent-violet/20',
  },
]

export default function CaseStudies() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 text-center md:text-left">
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-bold text-accent-cyan uppercase tracking-[0.2em] mb-4">Case Studies</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-ink-100 mb-6">
                Real businesses, <span className="gradient-text">real outcomes</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-ink-400 max-w-xl">
                See how AI-powered solutions have transformed operations and driven growth for our clients around the world.
              </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="hidden md:block md:col-span-2">
              <div className="glass-card overflow-hidden">
                <img src="/assets/Copilot_20260525_015357.webp" alt="Case Studies" className="w-full h-64 object-cover opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass-card-hover overflow-hidden"
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.tags.map((t) => (
                      <span key={t} className="text-[10px] font-medium text-ink-500 bg-white/5 px-2.5 py-1 rounded-full uppercase tracking-wider">{t}</span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-display font-bold text-ink-100 mb-1">{cs.title}</h2>
                  <p className="text-sm text-ink-400 mb-4">{cs.subtitle}</p>
                  <p className="text-sm text-ink-500 mb-4">{cs.client} · {cs.industry} · {cs.location}</p>
                  <div className="space-y-4 text-sm text-ink-400 leading-relaxed">
                    <div>
                      <span className="font-semibold text-ink-300">Challenge: </span>
                      {cs.challenge}
                    </div>
                    <div>
                      <span className="font-semibold text-ink-300">Solution: </span>
                      {cs.solution}
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    {cs.results.map((r) => (
                      <div key={r} className="flex items-center gap-2 text-sm text-ink-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                        {r}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block md:col-span-2 relative overflow-hidden p-8 flex items-center justify-center" style={{ background: `radial-gradient(ellipse at center, rgba(59,130,246,0.08), transparent 70%)` }}>
                  <div className="glass-card p-6 w-full">
                    <div className="flex gap-2 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-500/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-accent-violet/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan/30" />
                    </div>
                    <div className="text-3xl font-display font-bold gradient-text">{cs.results[0].split(': ').pop() || cs.results[0].split(' ')[0]}</div>
                    <div className="text-xs text-ink-500 mt-1">Key Result</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--brand-500)_0%,transparent_70%)] opacity-[0.08]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="glass-card p-12 md:p-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink-100 mb-6">Want results like these?</h2>
            <p className="text-lg text-ink-400 mb-10 max-w-xl mx-auto">Let's discuss how AI can transform your business.</p>
            <a href="/contact" className="glow-button px-10 py-4 rounded-xl text-base">Start Your Transformation</a>
          </div>
        </div>
      </section>
    </>
  )
}
