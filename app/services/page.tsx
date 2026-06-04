'use client'

import { motion } from 'framer-motion'
import { TiltCard } from '@/components/ui/TiltCard'

const services = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Agentic AI',
    desc: 'Design and deploy autonomous AI agents that handle complex business tasks—customer support, data processing, research, and decision-making. Our agentic systems learn, adapt, and scale with your business.',
    features: ['Custom AI agent development', 'LLM integration & fine-tuning', 'Multi-agent orchestration', 'Decision intelligence systems', 'Natural language processing'],
    color: '#3B82F6',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    desc: 'Transform manual workflows into intelligent automated processes. From document processing to customer communication, our AI automation solutions reduce operational costs by up to 80%.',
    features: ['Workflow automation', 'Intelligent document processing', 'Automated customer support', 'Data pipeline automation', 'Integration with existing tools'],
    color: '#06B6D4',
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    desc: 'Strategic digital transformation initiatives that modernize legacy systems, migrate to cloud-native architectures, and position your business for exponential growth in the AI era.',
    features: ['Cloud migration & architecture', 'Legacy system modernization', 'Digital strategy consulting', 'Tech stack optimization', 'DevOps & CI/CD implementation'],
    color: '#8B5CF6',
  },
  {
    id: 'website-development',
    title: 'Website & App Development',
    desc: 'Beautiful, high-performance websites and applications built with modern frameworks. We combine stunning design with robust engineering to create digital products that users love.',
    features: ['Next.js & React applications', 'Progressive web apps', 'API development & integration', 'UI/UX design & prototyping', 'Performance optimization'],
    color: '#F59E0B',
  },
  {
    id: 'ai-social-media',
    title: 'AI-Powered Social Media',
    desc: 'Data-driven social media strategies powered by AI. We analyze trends, optimize content, and automate posting schedules to maximize engagement and brand growth across all platforms.',
    features: ['Content strategy & generation', 'AI-powered analytics', 'Cross-platform management', 'Engagement optimization', 'Brand voice consistency'],
    color: '#EC4899',
  },
  {
    id: 'agile-management',
    title: 'Agile Project Management',
    desc: 'Expert agile project management that keeps your digital initiatives on track. We combine proven methodologies with AI-powered tools to deliver projects faster and with better outcomes.',
    features: ['Scrum & Kanban methodologies', 'AI-assisted sprint planning', 'Risk management', 'Cross-functional team coordination', 'Transparent reporting'],
    color: '#10B981',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 text-center md:text-left">
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-bold text-brand-500 uppercase tracking-[0.2em] mb-4">
                Services
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-ink-100 mb-6">
                Everything you need to <span className="gradient-text">scale with AI</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-ink-400 max-w-xl">
                End-to-end AI solutions tailored for startups and SMEs. Each service is designed to deliver measurable results from day one.
              </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="hidden md:block md:col-span-2">
              <div className="glass-card overflow-hidden">
                <img src="/assets/Copilot_20260525_015354.webp" alt="AI Solutions" className="w-full h-64 object-cover opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <TiltCard className="glass-card overflow-hidden" tiltDegree={6}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-10 md:p-14">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <h2 className="text-3xl font-display font-bold text-ink-100 mb-4">{service.title}</h2>
                    <p className="text-ink-400 leading-relaxed mb-8">{service.desc}</p>
                    <ul className="space-y-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-ink-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden md:block relative overflow-hidden" style={{ background: `radial-gradient(ellipse at center, ${service.color}15, transparent 70%)` }}>
                    <div className="absolute inset-0 flex items-center justify-center p-14">
                      <div className="w-full h-full rounded-2xl border border-white/[0.04] bg-white/[0.02] p-8 relative">
                        <svg viewBox="0 0 200 160" className="w-full h-full opacity-40">
                          <circle cx="30" cy="30" r="4" fill={service.color} opacity="0.6" />
                          <circle cx="60" cy="25" r="3" fill={service.color} opacity="0.4" />
                          <circle cx="100" cy="35" r="5" fill={service.color} opacity="0.5" />
                          <circle cx="140" cy="20" r="3" fill={service.color} opacity="0.3" />
                          <circle cx="170" cy="40" r="4" fill={service.color} opacity="0.5" />
                          <circle cx="20" cy="70" r="3" fill={service.color} opacity="0.4" />
                          <circle cx="50" cy="80" r="5" fill={service.color} opacity="0.3" />
                          <circle cx="90" cy="65" r="4" fill={service.color} opacity="0.6" />
                          <circle cx="120" cy="85" r="6" fill={service.color} opacity="0.4" />
                          <circle cx="160" cy="70" r="3" fill={service.color} opacity="0.5" />
                          <circle cx="180" cy="90" r="4" fill={service.color} opacity="0.3" />
                          <circle cx="40" cy="120" r="4" fill={service.color} opacity="0.5" />
                          <circle cx="70" cy="110" r="3" fill={service.color} opacity="0.4" />
                          <circle cx="110" cy="125" r="5" fill={service.color} opacity="0.3" />
                          <circle cx="150" cy="115" r="4" fill={service.color} opacity="0.6" />
                          <circle cx="30" cy="145" r="3" fill={service.color} opacity="0.4" />
                          <circle cx="80" cy="140" r="4" fill={service.color} opacity="0.5" />
                          <circle cx="130" cy="145" r="3" fill={service.color} opacity="0.3" />
                          <circle cx="170" cy="135" r="5" fill={service.color} opacity="0.5" />
                          <line x1="10" y1="50" x2="190" y2="50" stroke={service.color} strokeWidth="0.5" opacity="0.15" />
                          <line x1="10" y1="100" x2="190" y2="100" stroke={service.color} strokeWidth="0.5" opacity="0.15" />
                          <line x1="10" y1="150" x2="190" y2="150" stroke={service.color} strokeWidth="0.5" opacity="0.15" />
                          <path d="M20 130 Q60 100 100 130 T180 120" stroke={service.color} strokeWidth="1" fill="none" opacity="0.25" />
                          <path d="M20 140 Q60 160 100 140 T180 150" stroke={service.color} strokeWidth="1" fill="none" opacity="0.15" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--brand-500)_0%,transparent_70%)] opacity-[0.08]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="glass-card p-12 md:p-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink-100 mb-6">Not sure which service fits?</h2>
            <p className="text-lg text-ink-400 mb-10 max-w-xl mx-auto">Book a free 30-min consultation. We'll analyze your needs and recommend the perfect AI solution.</p>
            <a href="/contact" className="glow-button px-10 py-4 rounded-xl text-base">Book Free Consultation</a>
          </div>
        </div>
      </section>
    </>
  )
}
