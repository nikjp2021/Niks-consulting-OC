# Website Build Plan for Nik's Consulting

## 1. Page Architecture (routes, components, layout)
- Next.js 13+ app router structure
- Routes: / (home), /services, /case-studies, /about, /training, /gifted, /contact, /get-a-quote, /blog
- Layout: Shared layout with header, footer, and main content area
- Components organized by feature: ui (buttons, inputs, etc.), sections (hero, stats, etc.), layout (header, footer), animations

## 2. Design Direction
- Aesthetic: Modern, clean, professional with AI-first approach
- Tone: Trustworthy, innovative, expert
- Font Pairing: 
  - Headings: 'Inter' (clean, modern, highly readable)
  - Body: 'Inter' (consistent, accessible)
  - *Note: Will reconsider if these are too common per guidelines*
- Color Scheme: Blue primary (#3B82F6), Green accent (#10B981), Purple secondary (#8B5CF6)

## 3. Animation Strategy
- Hero entrance: Staggered fade-in + slide-up for headline, subheadline, CTA buttons
- Scroll reveals: Sections fade-in + slide-up as they enter viewport
- Hover states: Subtle scale (1.02) and color shifts for buttons, cards
- Page transitions: Fade between pages using AnimatePresence
- Special animations: Counter animations for statistics, gentle hover lift for cards

## 4. Component Sourcing
- From 21st.dev Magic:
  - Navbar with mobile menu (priority)
  - Hero section variants (will customize)
  - Card/feature components for services
  - Testimonial carousel
  - Pricing table (for quote page adaptation)
  - Footer with links and social icons
- Custom builds needed:
  - Statistics counter component
  - Process step visualization
  - Case study filterable grid
  - Detailed case study view

## 5. Agent Invocation Sequence
1. Architect Agent: Create file structure
2. Design Intelligence Agent: Establish design system (tokens.css)
3. Component Sourcing Agent: Pull components from 21st.dev
4. Frontend Build Agent: Build custom components and assemble pages
5. Quality Gate Agent: Audit and fix issues
6. Deploy Agent: Build and deploy to Vercel

## Next Steps
Awaiting approval to proceed with Agent 1 (Architect Agent) to scaffold the project structure.