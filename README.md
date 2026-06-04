# Nik's Consulting Website

A modern, colorful website for Nik's Consulting featuring AI-powered solutions and digital transformation services.

## Features

- Vibrant, Apple/Google-inspired design with gradients and glassmorphism
- Smooth animations and micro-interactions
- Responsive layout for all device sizes
- Video-ready hero section
- Interactive components with visual feedback
- Accessible and performant

## Pages

- Home (`/`) - Landing page with hero, services, case studies, process, testimonials
- Services (`/services`) - Detailed service offerings
- Case Studies (`/case-studies`) - Client success stories
- About (`/about`) - Company information
- Training (`/training`) - AI training programs
- Gifted (`/gifted`) - Internship program
- Contact (`/contact`) - Contact information and form
- Get a Quote (`/get-a-quote`) - Quote request form
- Blog (`/blog`) - Coming soon

## Deployment to Netlify

1. Push this repository to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will automatically detect the Next.js project
4. Configure build settings:
   - Build command: `next build`
   - Publish directory: `.next`
5. Deploy!

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

## Design System

All design tokens are defined in `styles/tokens.css` including:
- Colors (primary, secondary, accent, backgrounds, text)
- Typography scale
- Spacing scale
- Border radius
- Shadows
- Animation durations and easings

## Components

UI components are located in `components/ui/` and use only CSS variables from the design system.
Page sections are organized in `components/sections/`.
Layout components are in `components/layout/`.
Animation utilities are in `components/animations/`.
