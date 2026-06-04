'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}

const serviceCards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
    ),
    title: 'Agentic AI Workflows',
    desc: 'Deploy autonomous agents that handle customer support, research, and data processing 24/7 without breaking a sweat.',
    color: 'from-brand-500 to-brand-700',
    glow: 'rgba(59,130,246,0.15)',
    accent: 'brand-500'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M2 12h20"/><path d="M12 12l4-4"/><path d="M12 12l-4 4"/></svg>
    ),
    title: 'AI Automation',
    desc: 'Streamline operations with intelligent automation that learns and adapts to your unique business workflows.',
    color: 'from-cyan-500 to-cyan-700',
    glow: 'rgba(6,182,212,0.15)',
    accent: 'accent-cyan'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
    ),
    title: 'Digital Transformation',
    desc: 'Modernize legacy systems, migrate to cloud architecture, and streamline your entire digital operations for scale.',
    color: 'from-violet-500 to-violet-700',
    glow: 'rgba(139,92,246,0.15)',
    accent: 'accent-violet'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
    ),
    title: 'Web & App Development',
    desc: 'High-performance, beautifully designed SaaS applications and internal tools built with modern tech stacks.',
    color: 'from-amber-500 to-amber-700',
    glow: 'rgba(245,158,11,0.15)',
    accent: 'accent-amber'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/></svg>
    ),
    title: 'AI Social Media Strategy',
    desc: 'Lean, AI-powered social media strategies for explosive growth, engagement, and brand authority building.',
    color: 'from-pink-500 to-pink-700',
    glow: 'rgba(236,72,153,0.15)',
    accent: 'accent-pink'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="8" height="8" x="8" y="8" rx="1"/></svg>
    ),
    title: 'Agile Project Management',
    desc: 'Proven agile methodologies to deliver projects faster with better outcomes and full transparency.',
    color: 'from-emerald-500 to-emerald-700',
    glow: 'rgba(16,185,129,0.15)',
    accent: 'emerald-500'
  }
]

const caseStudies = [
  {
    title: 'Yoda Pizza Vietnam',
    desc: 'Dominating local online food delivery rankings through AI-driven SEO optimization and digital strategy.',
    tags: ['SEO', 'Digital Transformation', 'AI'],
    results: ['Top 3 Google ranking', '300% more online orders'],
    color: 'from-brand-500/20 to-transparent'
  },
  {
    title: 'OzynicDress',
    desc: 'Building an exclusive cultural fashion brand with global reach through AI-powered e-commerce and branding.',
    tags: ['E-commerce', 'AI', 'Social Media'],
    results: ['200% sales increase', '15+ country expansion'],
    color: 'from-accent-violet/20 to-transparent'
  },
  {
    title: 'Dona Gi Bolos',
    desc: 'Modernizing a traditional Brazilian bakery with AI automation, SEO, and WhatsApp-based ordering systems.',
    tags: ['WhatsApp Automation', 'Local SEO', 'AI'],
    results: ['150% new customers', '60% automated orders'],
    color: 'from-accent-cyan/20 to-transparent'
  },
]

const testimonials = [
  {
    quote: "Their AI-powered social media strategy doubled our sales within the first quarter. The team truly understands how to leverage technology for business growth.",
    name: 'Sarah Johnson',
    title: 'Founder, OzynicDress',
    initials: 'SJ',
  },
  {
    quote: "Our online orders tripled and we now dominate local search results. Their AI-driven approach to SEO and customer engagement is game-changing.",
    name: 'Minh Nguyen',
    title: 'Operations Manager, Yoda Pizza Vietnam',
    initials: 'MN',
  },
  {
    quote: "The AI automation for our WhatsApp orders alone transformed how we operate. Nikhil and his team guided us through every step of our digital transformation.",
    name: 'Giuliana Costa',
    title: 'Owner, Dona Gi Bolos',
    initials: 'GC',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/assets/Generate_video_Fast_dolly_sho.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-0/80 via-surface-0/50 to-surface-0" />
        <div className="absolute inset-0 hero-gradient" />

        {/* Floating Glows */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-500/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-violet/10 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '-1s' }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-ink-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              AI-First Consulting
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight text-balance"
          >
            <span className="text-ink-100">We build</span><br />
            <span className="gradient-text">AI-powered</span><br />
            <span className="text-ink-100">solutions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-lg sm:text-xl text-ink-400 max-w-2xl mx-auto leading-relaxed"
          >
            Digital transformation partner for startups and SMEs. Agentic AI, automation, and lean strategies that turn complexity into exponential growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="/get-a-quote" className="glow-button px-8 py-4 rounded-xl text-base">
              Get a Free Quote
            </a>
            <a href="/services" className="px-8 py-4 rounded-xl text-base text-ink-300 border border-white/10 hover:bg-white/5 transition-all duration-300">
              Explore Services
            </a>
          </motion.div>

          {/* Scrolling Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: '300%+', label: 'Avg. ROI' },
              { value: '15+', label: 'Countries' },
              { value: '50+', label: 'Projects' },
            ].map((s, i) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-display font-bold text-ink-100">{s.value}</div>
                <div className="text-sm text-ink-500 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TRUST LOGOS */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-ink-500 uppercase tracking-[0.2em] mb-12"
          >
            Trusted by innovative teams worldwide
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {[
              { name: 'Anthropic', src: '/assets/Anthropic Logo Image Request.png' },
              { name: 'OpenAI', src: '/assets/Copilot_20260524_190259.png' },
              { name: 'GitHub', src: '/assets/Copilot_20260524_190742.png' },
              { name: 'Vercel', src: '/assets/Copilot_20260525_015354.png' },
              { name: 'AWS', src: '/assets/Copilot_20260525_015357.png' },
              { name: 'Stripe', src: '/assets/Copilot_20260525_015955.png' },
            ].map((logo) => (
              <motion.div
                key={logo.name}
                variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                className="w-20 h-20 sm:w-24 sm:h-24 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 flex items-center justify-center hover:bg-white/[0.06] transition-all duration-300 hover:scale-105"
              >
                <img src={logo.src} alt={logo.name} className="w-full h-full object-contain opacity-50 hover:opacity-80 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICE BENTO */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-sm font-bold text-brand-500 uppercase tracking-[0.2em] mb-4">
              Services
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-ink-100 mb-6 leading-tight">
              AI-powered solutions for{' '}
              <span className="gradient-text">modern businesses</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-ink-400 max-w-2xl mx-auto">
              From intelligent automation to full digital transformation — we deliver measurable results, not just slide decks.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 auto-rows-[280px]">
            {serviceCards.map((card, i) => {
              const span = i === 1 ? 'md:col-span-1 md:row-span-2' : ''
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`glass-card-hover p-8 flex flex-col justify-between ${span} ${i === 1 ? 'min-h-[360px]' : ''}`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color}/20 flex items-center justify-center mb-5 text-${card.accent}`}>
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-ink-100 mb-3">{card.title}</h3>
                    <p className="text-sm text-ink-400 leading-relaxed">{card.desc}</p>
                  </div>
                  <a href="/services" className="text-sm font-medium text-ink-500 hover:text-ink-300 transition-colors inline-flex items-center gap-1 mt-4">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 bg-surface-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-sm font-bold text-accent-violet uppercase tracking-[0.2em] mb-4">Results</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-display font-bold text-ink-100 mb-6">
              Real businesses,{' '}
              <span className="gradient-text">real outcomes</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-ink-400 max-w-2xl mx-auto">
              See how AI-powered solutions have transformed operations and driven growth for our clients.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass-card-hover p-8 flex flex-col"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.tags.map((t) => (
                    <span key={t} className="text-[10px] font-medium text-ink-500 bg-white/5 px-2.5 py-1 rounded-full uppercase tracking-wider">{t}</span>
                  ))}
                </div>
                <h3 className="text-xl font-display font-semibold text-ink-100 mb-3">{cs.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed mb-6 flex-1">{cs.desc}</p>
                <div className="space-y-2 mb-6">
                  {cs.results.map((r) => (
                    <div key={r} className="flex items-center gap-2 text-sm text-ink-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                      {r}
                    </div>
                  ))}
                </div>
                <a href="/case-studies" className="text-sm font-medium text-ink-500 hover:text-ink-300 transition-colors inline-flex items-center gap-1">
                  View Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a href="/case-studies" className="inline-flex glow-button px-8 py-4 rounded-xl text-base">
              View All Case Studies
            </a>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-sm font-bold text-accent-cyan uppercase tracking-[0.2em] mb-4">Process</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-display font-bold text-ink-100 mb-6">
              How we work
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-ink-400 max-w-2xl mx-auto">
              A proven process enhanced by AI — from discovery to deployment, we deliver faster and smarter.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Discover', desc: 'We analyze your business, challenges, and goals. AI-powered research accelerates our understanding of your market.', color: 'brand-500' },
              { num: '02', title: 'Strategize', desc: 'A tailored roadmap with data-driven insights, clear milestones, and measurable KPIs for your business.', color: 'accent-violet' },
              { num: '03', title: 'Build', desc: 'Our team builds, tests, and deploys using agile sprints and AI-assisted development for faster delivery.', color: 'accent-cyan' },
              { num: '04', title: 'Scale', desc: 'AI-powered analytics monitor performance. We continuously optimize and scale for sustained growth.', color: 'accent-amber' },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass-card p-8 text-center"
              >
                <div className={`w-14 h-14 rounded-full bg-${step.color}/20 flex items-center justify-center mx-auto mb-6`}>
                  <span className={`text-2xl font-display font-bold text-${step.color}`}>{step.num}</span>
                </div>
                <h3 className="text-lg font-display font-semibold text-ink-100 mb-3">{step.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-surface-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-sm font-bold text-accent-pink uppercase tracking-[0.2em] mb-4">Testimonials</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-display font-bold text-ink-100 mb-6">
              What our clients say
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-ink-400 max-w-2xl mx-auto">
              Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped transform.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass-card p-8 flex flex-col"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-500/40 mb-4 shrink-0" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                <p className="text-sm text-ink-400 leading-relaxed flex-1 mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500/30 to-accent-violet/30 flex items-center justify-center">
                    <span className="text-xs font-bold text-ink-300">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink-100">{t.name}</p>
                    <p className="text-xs text-ink-500">{t.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--brand-500)_0%,transparent_70%)] opacity-[0.08]" />
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-brand-500/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent-violet/10 rounded-full blur-[150px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 md:p-20"
          >
            <div className="w-16 h-16 rounded-full bg-brand-500/20 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-500"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-ink-100 mb-6 leading-tight">
              Ready to build something<br />
              <span className="gradient-text">extraordinary?</span>
            </h2>
            <p className="text-lg text-ink-400 mb-10 max-w-xl mx-auto">
              Book a free discovery call today. We'll audit your current tech stack and outline an AI-integration roadmap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="glow-button px-10 py-4 rounded-xl text-base">
                Book Free Consultation
              </a>
              <a href="/get-a-quote" className="px-8 py-4 rounded-xl text-base text-ink-300 border border-white/10 hover:bg-white/5 transition-all duration-300">
                Get a Free Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
