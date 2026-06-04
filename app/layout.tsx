import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: "Nik's Consulting | AI-First Digital Transformation",
  description: 'Digital transformation partner for startups and SMEs. Agentic AI, automation, and lean strategies that turn complexity into growth.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-0/80 backdrop-blur-xl border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-violet flex items-center justify-center font-display font-extrabold text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              N
            </div>
            <span className="font-display font-bold text-lg text-ink-100">
              Nik's <span className="text-brand-500">Consulting</span>
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
            <button className="md:hidden p-2 rounded-xl hover:bg-white/5 transition-colors text-ink-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-surface-0 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-violet flex items-center justify-center font-display font-extrabold text-white">N</div>
              <span className="font-display font-bold text-lg text-ink-100">Nik's <span className="text-brand-500">Consulting</span></span>
            </a>
            <p className="text-sm text-ink-500 leading-relaxed max-w-xs">
              Digital transformation partner for startups and SMEs. Agentic AI, automation, and lean strategies that turn complexity into growth.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-ink-100 mb-4 text-sm">Services</h4>
            <div className="flex flex-col gap-2">
              <a href="/services#ai-solutions" className="text-sm text-ink-500 hover:text-brand-500 transition-colors">AI Solutions</a>
              <a href="/services#ai-automation" className="text-sm text-ink-500 hover:text-brand-500 transition-colors">AI Automation</a>
              <a href="/services#digital-transformation" className="text-sm text-ink-500 hover:text-brand-500 transition-colors">Digital Transformation</a>
              <a href="/services#website-development" className="text-sm text-ink-500 hover:text-brand-500 transition-colors">Web Development</a>
              <a href="/services#ai-social-media" className="text-sm text-ink-500 hover:text-brand-500 transition-colors">Social Media</a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-ink-100 mb-4 text-sm">Company</h4>
            <div className="flex flex-col gap-2">
              <a href="/about" className="text-sm text-ink-500 hover:text-brand-500 transition-colors">About Us</a>
              <a href="/case-studies" className="text-sm text-ink-500 hover:text-brand-500 transition-colors">Case Studies</a>
              <a href="/training" className="text-sm text-ink-500 hover:text-brand-500 transition-colors">AI Training</a>
              <a href="/gifted" className="text-sm text-ink-500 hover:text-brand-500 transition-colors">Internship</a>
              <a href="/blog" className="text-sm text-ink-500 hover:text-brand-500 transition-colors">Blog</a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-ink-100 mb-4 text-sm">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@niksconsulting.com" className="text-sm text-ink-500 hover:text-brand-500 transition-colors">hello@niksconsulting.com</a>
              <a href="/contact" className="text-sm text-ink-500 hover:text-brand-500 transition-colors">Book a Consultation</a>
              <a href="/get-a-quote" className="text-sm text-ink-500 hover:text-brand-500 transition-colors">Get a Quote</a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500">© 2026 Nik's Consulting. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-xs text-ink-500 hover:text-ink-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-ink-500 hover:text-ink-300 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
