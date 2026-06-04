'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/training', label: 'Training' },
  { href: '/gifted', label: 'Internship' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-0/80 backdrop-blur-xl border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-violet flex items-center justify-center font-display font-extrabold text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              N
            </div>
            <span className="font-display font-bold text-lg text-ink-100">
              Nik&apos;s <span className="text-brand-500">Consulting</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm text-ink-400 hover:text-brand-500 transition-colors">Home</a>
            <a href="/services" className="text-sm text-ink-400 hover:text-brand-500 transition-colors">Services</a>
            <a href="/case-studies" className="text-sm text-ink-400 hover:text-brand-500 transition-colors">Case Studies</a>
            <a href="/about" className="text-sm text-ink-400 hover:text-brand-500 transition-colors">About</a>
            <a href="/contact" className="text-sm text-ink-400 hover:text-brand-500 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/get-a-quote"
              className="hidden sm:inline-flex glow-button px-5 py-2 rounded-xl text-sm"
            >
              Get a Quote
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-xl hover:bg-white/5 transition-colors text-ink-400 relative z-50"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {open ? (
                  <>
                    <line x1="18" x2="6" y1="6" y2="18" />
                    <line x1="6" x2="18" y1="6" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-surface-1/95 backdrop-blur-xl border-b border-white/[0.06] md:hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm text-ink-300 hover:text-ink-100 hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 px-4">
                <a
                  href="/get-a-quote"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center glow-button px-5 py-3 rounded-xl text-sm"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
