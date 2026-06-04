# 3D Upgrade Recipe: Nik's Consulting Website

> **Target:** Elevate [niks-cons-oc.netlify.app](https://niks-cons-oc.netlify.app) to Apple/Google/Microsoft-level 3D design clarity
> **Date:** 2026-06-04
> **Current Stack:** Next.js 13, React 18, Framer Motion 10, Tailwind CSS 3, TypeScript
> **Target Stack:** Next.js 13 + React 18 + React Three Fiber 9 + @react-three/drei 9 + GSAP 3 + Lenis + Zustand 5

---

## Table of Contents

1. [Current Site Assessment & Gap Analysis](#1-current-site-assessment--gap-analysis)
2. [What Apple/Google/Microsoft Actually Do](#2-what-applegoodlemicrosoft-actually-do)
3. [Niche-Specific Design Patterns for AI Consulting](#25-niche-specific-design-patterns-for-ai-consulting--digital-transformation)
4. [3D Design Strategy](#3-3d-design-strategy)
5. [Technical Stack & Dependencies](#4-technical-stack--dependencies)
6. [Implementation Plan (by Impact)](#5-implementation-plan-by-impact)
7. [Animation Guidelines & Spring Physics](#6-animation-guidelines--spring-physics)
8. [Visual References & Patterns to Emulate](#7-visual-references--patterns-to-emulate)
9. [Key Code Examples](#8-key-code-examples)
10. [Performance Considerations & Mobile Fallbacks](#9-performance-considerations--mobile-fallbacks)
11. [File-by-File Migration Roadmap](#10-file-by-file-migration-roadmap)
12. [Appendix: Research Sources](#11-appendix-research-sources)

---

## 1. Current Site Assessment & Gap Analysis

### What the Site Does Well Now
- Dark theme with cohesive surface/ink color system
- Glassmorphism cards via `backdrop-filter: blur()` and `bg-white/5`
- Framer Motion fade-up scroll reveals
- Gradient text for emphasis
- Glow-button hover states with shimmer animation
- Responsive layout with Tailwind
- Clean information architecture

### Critical Gaps vs. Apple/Google/Microsoft Standards

| Dimension | Current State | Premium Standard | Gap Severity |
|-----------|--------------|------------------|-------------|
| **Depth** | Flat 2D layers, CSS backdrop-blur | Real 3D scenes, z-space layering, parallax cascades | 🔴 Critical |
| **3D Rendering** | None (static images, one video BG) | WebGL/WebGPU real-time 3D models, particle systems | 🔴 Critical |
| **Animation** | Basic opacity/y fades, no springs | Spring physics, fluid damping, cohesive motion system | 🔴 Critical |
| **Scroll** | Basic `whileInView` triggers | Scroll-linked 3D camera paths, pinned scenes, Lenis smooth | 🟠 High |
| **Shaders** | None | Custom GLSL for liquid glass, noise, distortion effects | 🟠 High |
| **Micro-interactions** | None beyond basic hover | 3D card tilts, magnetic buttons, custom cursor, parallax | 🟠 High |
| **Materials** | Plain CSS borders and bg | Liquid Glass (refraction), Mica (dynamic backdrop), Acrylic | 🟠 High |
| **Typography** | Manrope + Lato, static | Dynamic scale, variable fonts, fluid typography | 🟡 Medium |
| **Page Transitions** | None | 3D scene transitions, ink-bleed effects, clip-path morphs | 🟡 Medium |
| **Icons** | Static SVG | Animated Lottie icons, 3D iconography | 🟡 Medium |

### Biggest Quick Wins (Highest Impact : Lowest Effort)

1. **Hero section 3D particle field** → Replaces static video BG with live WebGL
2. **3D card tilt on service cards** → CSS perspective + Framer Motion 3D
3. **Scroll-linked parallax depth layers** → Background/midground/foreground
4. **Custom cursor + magnetic buttons** → Instant premium feel
5. **Improved glassmorphism** → Multi-layer with specular highlights

---

## 2. What Apple/Google/Microsoft Actually Do

### Apple — Liquid Glass (WWDC 2025, iOS 26)
- **4-layer shader stack**: UV refraction → chromatic aberration → frosted blur (multi-tap) → Fresnel specular highlights
- **Superellipse ("squircle") shapes** via SDF (signed distance functions) — not CSS `border-radius`
- **Real-time environment lighting** — IBL maps influence reflections dynamically
- **Translucent materials** that refract content behind them
- **Motion-responsive** — specular highlights shift with device movement
- **Depth through z-translation** — UI layers at different z-depths with corresponding shadow softening
- **Focus hierarchy** — active elements get full glass treatment, inactive surfaces recede

### Google — Material 3 Expressive (2025-2026)
- **35 new distinct shapes** beyond rounded rectangles
- **Motion physics tokens** — spring-based (not easing-curve) animation system
- **Shape morphing** — buttons ontain seamlessly morph between shapes
- **Expressive color** — higher chroma, dynamic color unlocking
- **Research-backed** — 46 studies, 18k+ participants, 4x faster UI element spotting
- **Spatial elevation** — support for AR/VR and spatial computing layouts
- **Styling API** — deep customization without forking components

### Microsoft — Fluent Design System (Windows 11)
- **Mica material** — opaque, samples desktop wallpaper once for performance, dynamic active/inactive states
- **Acrylic material** — semi-transparent frosted glass for transient surfaces
- **ThemeShadow** — z-depth-based shadow system across all components
- **3D perspective transforms** — PlaneProjection for rotating UI in 3D space
- **Purposeful motion** — every animation serves hierarchy/was: connected animation for layer transitions
- **Performance-first** — materials degrade gracefully (battery saver, low-end hardware)

### What Premium 3D Production Sites Actually Use (2026)

From analysis of the 50+ best 3D websites (PorscheLab, San Rita, Shader.se, INK Games, Cartier, Valentino, Chanel, SILLAGE):

| Technique | Used By | Implementation |
|-----------|---------|---------------|
| Single shared canvas | INK Games, Shader.se | One `<Canvas>` in layout, `View` components for scissor-rendered sections |
| Scroll-driven camera | San Rita, Joseph Santamaria | GSAP + ScrollTrigger drives camera position in 3D space |
| Scroll-driven scene transitions | Shader.se | Reverse-order FBO rendering with texture pass-through |
| HDR environments | PorscheLab, SILLAGE | Polyhaven CDN, resolution-adaptive (2K mobile, 4K desktop) |
| Device-tier detection | PorscheLab, SILLAGE | Check WebGL capabilities before scene init |
| Lenis smooth scroll | San Rita, INK Games, Shader.se | Standard for all 3D-heavy sites |
| GLTF via gltfjsx | PorscheLab, INK Games | CLI tool optimizes + creates React components from 3D models |
| Selective rendering | Shader.se | Only render scenes within scroll viewport; skip off-screen completely |
| Portal cards with stencil | INK Games | R3F `Mask` component + clipping planes for 3D elements inside/outside cards |

---

## 2.5 Niche-Specific Design Patterns for AI Consulting & Digital Transformation

> **Key insight:** AI consulting faces a unique design challenge — the core value proposition (AI expertise, data-driven strategy, digital transformation) is fundamentally *invisible*. 3D and visual techniques must **explain abstract concepts**, not just decorate. Trust is the #1 design problem, not spectacle.

### 2.5.1 How AI Consulting Design Differs from Generic Premium Design

| Dimension | Generic Premium (Apple/Google/Microsoft) | AI Consulting Niche |
|-----------|----------------------------------------|---------------------|
| **Purpose of 3D** | Showcase physical products, create brand aura | Explain invisible AI concepts, build trust in expertise |
| **Visual Metaphor** | Liquid glass, mica, spatial elevation | Neural networks, data flows, particle systems, abstract intelligence |
| **Color Palette** | Pastel gradients, system colors, muted tones | Synthetic spectrums (purple→cyan→pink on deep black), electric blue, neon accents |
| **Typography** | San Francisco, Inter, system fonts | Geometric grotesques (Syne, Space Grotesk), bold oversized headlines, tech-forward |
| **Motion Philosophy** | "Delight the user" | "Explain the process, build confidence" |
| **Trust Signal** | Material quality, polish, consistency | Transparency, clarity, "products don't feel like black boxes" |
| **Key Emotional Hook** | Aspiration, desire, status | Confidence, safety, "we understand the complexity so you don't have to" |
| **Mobile UX Priority** | Touch targets, thumb zones | Same, PLUS graceful degradation of 3D — AI concepts must survive without WebGL |

### 2.5.2 Competitor & Peer Website Analysis

#### Tier 1 — Enterprise AI Consulting (Design Investment: $250K+)

| Company | URL | Design Signature | What to Steal |
|---------|-----|-----------------|---------------|
| **McKinsey QuantumBlack** | mckinsey.com/capabilities/quantumblack | Dark theme, data-vis heavy, professional minimalism, Formula 1 pedigree branding | "Hybrid intelligence" framing, authoritative dark palette, research-led credibility |
| **Porsche Consulting** | porsche-consulting.com | German Design Award 2025 winner, movement as transformation metaphor, scroll-triggered animations | Using motion to symbolize transformation (not decoration) |
| **Accenture** | accenture.com | Corporate-scale with interactive data stories, clean information architecture | Global trust signals, thought leadership layout patterns |
| **BCG X** | bcg.com/x | Tech-forward with BCG gravitas, case study depth | Balancing authority with innovation signals |

#### Tier 2 — Boutique AI Consulting & Design Studios ($50K–$250K)

| Company | URL | Design Signature | What to Steal |
|---------|-----|-----------------|---------------|
| **Lazarev.agency** | lazarev.agency | Webby Winner 2026 (AI — Visual Design), bold typography, clean minimalism, interactive product demos | Award-winning AI UX patterns, section-by-section clarity, +35% organic traffic via typography |
| **Indigo Design Labs** | getindigo.ai/labs | "Calm at the moment of complexity" philosophy, AI-specific brand architecture, $150K–$500K engagements | Calm interface design for AI complexity, trust-through-clarity approach |
| **10kR** | 10kr.co | AI-first design and technology company, minimalist dark theme, agency-as-product positioning | "Humans + machines" narrative, simple service architecture |
| **Konrad** | konrad.com | Digital + AI agency, dark-themed, service-led architecture with clean typography | Strong service hierarchy, AI positioning language |

#### Tier 3 — AI-Native Startups & Tools (Direct Design Inspiration)

| Company | URL | Design Signature | What to Steal |
|---------|-----|-----------------|---------------|
| **Bland AI** (via Khod.io) | bland.ai (case study on khod.io) | Bold typography, hero soundwave animation, interactive footer nodes, playful visual identity | Typography-driven hierarchy, 35% organic traffic lift from design |
| **Synthflow AI** | synthflow.ai | Interactive product playground, let users test AI voice agents without login | Product-led demo in hero, no "book demo" friction |
| **Synthesia** | synthesia.io | AI-generated visuals, human touch in tech-forward design, gradients + reflections | Generative media as brand, blending human + AI aesthetics |
| **AssistFlow** | assistflow (blink.new) | Custom Three.js neural mesh scenes, AI pipeline visualization, calm intelligent animations | Three.js scenes that *explain* AI concepts (not decorate), research credibility |
| **Neural Fleet / $1B+ Studio** | s1bstudio.website/cases/neural-fleet | Floating orbs (autonomous agent metaphors), conic gradient (30s rotation = continuous learning), synthetic color spectrum, pill-shaped header. +52% perceived value, +390% conversion | **The most directly applicable pattern for AI consulting** — visual metaphors for intelligence, synthetic colors, futuristic typography |

#### Tier 4 — Deep Tech / Research AI Websites

| Company | URL | Design Signature | What to Steal |
|---------|-----|-----------------|---------------|
| **Cerebral Machine** | github.com/Pratyush150/Kairo_studio_website | Interactive 3D brain visualization, GPU-accelerated particle streams, custom GLSL shaders, LOD loading | Neural network as hero visual, shader-based connection lines |
| **Memetic Design / Odyssey** | memetic.design/odyssey | Retro-futuristic CRT frames + scanlines + electric blue, 3D rotating applications wheel | Tech-forward visual language that's distinctive, not derivative |
| **Everything Design / Armory** | everything.design | 3D as communication tool (not decoration), visual language from inside the product | 3D that serves the communication goal, institutional buyer register |

### 2.5.3 AI-Specific Visual Techniques & 3D Patterns

#### A. The "Intelligence Visualization" — Neural Network as Hero

```
Pattern: Abstract neural mesh / connected node field in the hero section
Used by: AssistFlow, Cerebral Machine, Neural Fleet
Why it works: Makes the invisible visible — visitors immediately understand "this is AI"
Implementation:
  - 80-150 connected nodes with animated edges (pulsing data flow)
  - Nodes arranged in a torus, sphere, or organic cloud formation
  - GLSL shader for animated connection lines with color cycling
  - Mouse-reactive: nodes subtly drift toward cursor position
  - Color: brand-purple → cyan gradient on connections
```

#### B. Floating Autonomous Agent Orbs

```
Pattern: Translucent glowing orbs that drift independently in 3D space
Used by: Neural Fleet / $1B+ Studio (their signature pattern)
Why it works: Each orb is a metaphor for an independent AI agent — communicates
             "autonomous intelligence" without a single line of copy
Implementation:
  - 3-5 translucent spheres with MeshTransmissionMaterial (glass)
  - Each orb has independent Float animation (different speed, axis)
  - Soft bloom post-processing for glow
  - Subtle particle trail behind each orb
  - Color: gradient from purple → cyan across the group
```

#### C. Continuous Gradient / Conic Rotation

```
Pattern: Slowly rotating conic gradient (30-60s per revolution)
Used by: Neural Fleet, Cerebral Machine
Why it works: Visualizes "continuous learning" and "always-evolving AI" — 
             the gradient never stops, implying the AI never stops improving
Implementation:
  - CSS conic-gradient or three.js ShaderMaterial
  - Rotation: 30s per revolution (so slow it's almost imperceptible)
  - Applied to: hero background, section dividers, card backgrounds
  - Colors: synthetic spectrum (purple → cyan → pink → back to purple)
```

#### D. Data Flow Pipeline Visualization

```
Pattern: 3D pipeline showing data flowing through system stages
Used by: AssistFlow, San Rita (adapted)
Why it works: Explains the AI process visually — transforms abstract methodology 
             into a concrete journey
Implementation:
  - 4-6 connected 3D nodes/spheres representing process stages
  - Animated particles flowing along bezier curves between nodes
  - Active stage highlights as user scrolls through section
  - Can be adapted for Nik's Consulting process: Discover→Strategize→Build→Scale
  - Each stage shows relevant metrics / case study data
```

#### E. The "Synthetic Spectrum" Color System

```
Pattern: Purple → Cyan → Pink gradient on deep black (#0a0a0a)
Used by: Neural Fleet (most refined), also seen across AI brands
Why it works: These colors don't exist in nature — they are the "visual code of 
             artificial intelligence." +52% perceived value documented.
Implementation:
  - Primary: Deep navy/black (#0a0a0a, #0f172a)
  - Accent 1: Electric purple (#7C3AED, #8B5CF6)
  - Accent 2: Cyan (#06B6D4, #22D3EE)
  - Accent 3: Hot pink/ magenta (#EC4899, #F472B6)
  - Text: White/gray on dark backgrounds
  - Use gradients across all three accent colors for AI visual language
```

#### F. Calm, Purposeful Motion for Trust

```
Pattern: Slow, deliberate animations — nothing fast or frantic
Used by: Indigo Design Labs, AssistFlow, Neural Fleet
Why it works: AI products are under-trusted. Fast animations feel frantic.
             Slow, calm motion communicates "in control" and "trustworthy."
Implementation:
  - All animations: 2-4x slower than typical premium design
  - Spring damping: 20-30 (higher = less bounce)
  - Particle drift: 0.1-0.3 units/second
  - Gradient rotation: 30-60s per revolution
  - Scroll reveals: 0.8-1.2s (vs 0.4-0.6s typical)
  - No random or decorative animations — every motion explains something
```

### 2.5.4 Updated Color System for AI Consulting

Replace or supplement the current brand color system with the "Synthetic Intelligence" palette:

```css
/* AI Consulting Color System — "Synthetic Intelligence" Palette */
:root {
  /* Base */
  --ai-black: #0a0a0a;
  --ai-dark: #0f172a;
  --ai-surface: #1e293b;
  
  /* Synthetic Spectrum (colors that don't exist in nature) */
  --ai-purple: #7C3AED;
  --ai-purple-light: #8B5CF6;
  --ai-purple-glow: rgba(124, 58, 237, 0.3);
  --ai-cyan: #06B6D4;
  --ai-cyan-light: #22D3EE;
  --ai-cyan-glow: rgba(6, 182, 212, 0.3);
  --ai-pink: #EC4899;
  --ai-pink-light: #F472B6;
  --ai-pink-glow: rgba(236, 72, 153, 0.3);
  
  /* Gradient tokens */
  --ai-gradient-primary: linear-gradient(135deg, #7C3AED, #06B6D4);
  --ai-gradient-full: linear-gradient(135deg, #7C3AED, #06B6D4, #EC4899);
  --ai-gradient-warm: linear-gradient(135deg, #8B5CF6, #F472B6);
  
  /* Motion tokens */
  --ai-motion-calm: 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  --ai-motion-gradient: 30s linear infinite;
  
  /* Glass tokens */
  --ai-glass: rgba(124, 58, 237, 0.05);
  --ai-glass-border: rgba(124, 58, 237, 0.1);
  --ai-glass-hover: rgba(124, 58, 237, 0.1);
}
```

### 2.5.5 Recommended Typefaces for AI Consulting

Based on analysis of top AI brands:

| Use Case | Typeface | Why | Used By |
|----------|----------|-----|---------|
| **Display / Headlines** | **Syne** (Google Fonts) | Geometric grotesque purpose-built for AR/VR — futuristic by design, not by accident | $1B+ Studio / Neural Fleet |
| **Display alternative** | **Space Grotesk** | Tech-forward, excellent legibility at all sizes | Neural Fleet (body), many AI startups |
| **Headlines alternative** | **DM Sans** | Clean, modern, approachable — less aggressive than Syne | Bland AI, Khod.io case studies |
| **Body text** | **Inter** | Industry standard for UI, excellent readability at 16px | Most AI brands |
| **Monospace (code/data)** | **JetBrains Mono** | Pairs well with geometric display fonts for technical credibility | Developer-focused AI brands |

**Recommendation for Nik's Consulting:** Syne (display) + Inter (body) — the Syne/Inter pairing signals "futuristic expertise with professional readability," perfectly positioning an AI consulting firm as both cutting-edge and trustworthy.

### 2.5.6 Section-Specific AI Design Patterns

| Section | AI-Specific 3D Treatment | Reference |
|---------|-------------------------|-----------|
| **Hero** | Floating orbs + neural mesh + conic gradient background | Neural Fleet, AssistFlow |
| **Services** | 3D icons as abstract "intelligence nodes" — each service is a node in the AI network | Lazarev.agency, Konrad |
| **Process / Methodology** | 3D data flow pipeline — particles flowing between connected stages with active-step highlighting | AssistFlow, San Rita (adapted) |
| **Case Studies** | Portal cards with live data visualizations as 3D floating badges — results shown as animated numbers | Porsche Consulting pattern |
| **Team** | 3D floating headshots or glass cards with subtle particle aura | Svilenković pattern |
| **Testimonials** | 3D rotating quote carousel with glass material | Common premium pattern, adapted with AI color palette |
| **Stats / Metrics** | 3D animated counters with particle trails — living data | Common AI startup pattern |
| **CTA Section** | Magnetic button with conic gradient border animation | Neural Fleet influence |

### 2.5.7 The AI Consulting Trust Paradox: Why "Calm UX" Matters More Here

From Indigo Design Labs: *"AI is overhyped and under-trusted. We design experiences that meet people with clarity, not jargon. Confidence, not complexity."*

The #1 design challenge for AI consulting websites is **trust calibration** — visitors must simultaneously believe:
1. "This firm is technically sophisticated enough to handle advanced AI"
2. "This firm will not over-promise or deliver a black box"

**How design solves this:**
- **Transparent visualizations** — 3D scenes that show *how* AI works demystify the technology
- **Calm, unhurried motion** — communicates confidence, not hype
- **Data as decoration** — real metrics rendered beautifully (not abstract art)
- **Human presence** — team photos, real faces alongside the 3D elements

### 2.5.8 Updated Priority Matrix with AI Niche Findings

| Priority | Element | AI-Niche Twist | Effort |
|----------|---------|----------------|--------|
| 🔴 P0 | **Hero neural network** (replaces generic particles) | Connected node mesh with pulsing data flow — signals "AI expertise" immediately | Medium |
| 🔴 P0 | **Synthetic color palette** (purple→cyan→pink) | Replace current blue-only gradient with full synthetic spectrum | Low |
| 🟠 P1 | **Calm motion system** | Slow down all animations 2-4x vs typical premium | Low |
| 🟠 P1 | **Floating agent orbs** on hero | 3-5 glass orbs with independent Float animation | Medium |
| 🟠 P1 | **Process pipeline** 3D visualization | Connected nodes with flowing particles for Discover→Strategize→Build→Scale | High |
| 🟡 P2 | **Data flow micro-interactions** | Small particle systems behind metrics and stats | Medium |
| 🟡 P2 | **Syne + Inter typography** | Replace or supplement current typeface pairing | Low |
| 🟡 P2 | **Conic gradient backgrounds** | 30s rotation on hero and section backgrounds | Low |
| 🟢 P3 | **Interactive playground / ROI calculator** | Let visitors input data and see AI-powered results | High |
| 🟢 P3 | **3D team cards** | Subtle depth + particle aura on team member photos | Medium |

---

## 3. 3D Design Strategy

### 3.1 Design Philosophy: "Depth as Hierarchy"

> Every 3D element must serve the communication goal — not exist for spectacle.

Three principles adapted from Apple/Google/Microsoft:
1. **Depth communicates priority** — elements closer to the user (more z-forward) are more important
2. **Motion reveals intent** — nothing animates without purpose (focus, state change, hierarchy)
3. **Materials ground the UI** — glass, light, and shadow make digital feel physical

### 3.2 What 3D Elements to Add and Where

#### A. Hero Section — 3D Particle Field + Floating Brand Asset
```
Current: Video background with gradient overlay
Target:  Interactive 3D particle field + floating geometric brand sculpture
```
- **Particles**: 80-120 instanced floating particles (GPU instanced), color-cycling between brand-500, accent-violet, accent-cyan
- **Connection lines**: Dynamic web-like connections between nearby particles (like PorscheLab)
- **Floating sculpture**: A low-poly torus knot or custom geometry that slowly rotates
- **Mouse parallax**: Particles and sculpture respond to mouse position with spring lerp
- **On scroll**: Particles fade out as user scrolls down

#### B. Services Section — 3D Isometric Icons + Card Tilt
```
Current: Flat SVG icons in glass cards
Target:  3D interactive cards with isometric 3D icons and hover tilt
```
- **3D card tilt**: CSS perspective + Framer Motion `rotateX`/`rotateY` on mouse hover
- **Isometric 3D icons**: Lightweight Three.js geometries or Spline-exported elements for each service
- **Depth reveal**: Cards stagger in from different z-depths on scroll reveal

#### C. Case Studies — 3D Product Showcases
```
Current: Text + tags + checkbox results
Target:  3D portal cards with masked 3D scenes
```
- **Portal cards**: Screenshots as textures on 3D planes with parallax depth (INK Games pattern)
- **Scroll-driven reveal**: Cards rotate from Y-axis on scroll (0° → -5° tilt)
- **Results as 3D floating badges**: Animated floating numbers

#### D. Process Section — 3D Pipeline Visual
```
Current: Numbered step cards
Target:  3D isometric pipeline visualization or 3D connected spheres
```
- **Connected spheres/nodes**: 3D spheres connected by animated lines showing the flow
- **Active step highlighting**: Current step in viewport lights up
- **Camera orbit**: Subtle camera movement as user scrolls through steps

#### E. Background Atmosphere — Depth Layering
```
Current: Static radial gradient orbs
Target:  Multi-layer parallax with WebGL or CSS 3D
```
- **Layer 1 (farthest)**: Subtle slow-moving gradient orbs (CSS animated)
- **Layer 2**: Floating geometric shapes (Three.js with Float component)
- **Layer 3 (midground)**: Main content cards with glass effect
- **Layer 4 (foreground)**: Interactive elements with 3D hover states

#### F. Navigation — 3D Elements
```
Current: Static text links
Target:  Animated logo (3D N mark), subtle glass nav bar
```
- **3D logo**: The "N" logo as a 3D extrusion that rotates slightly on scroll
- **Liquid Glass nav bar**: Multi-layer glass with specular highlight on scroll
- **Active state indicator**: Animated underline with spring physics

#### G. Page Transitions
```
Current: Instant route change
Target:  Fade-through-geometry transitions
```
- **Ink bleed transition** (inspired by Joseph Santamaria): Noise-shader mask that expands from center
- **Or dissolution**: Scene dissolves into particles before next page loads

### 3.3 Visual Hierarchy with Depth

```
Z-Depth Map for the Homepage:

z-index: 100    → Custom cursor, tooltips, modals
z-index: 50     → Navigation bar (Liquid Glass)
z-index: 10-30  → Content cards (glass cards with 3D tilt)
z-index: 5      → 3D scene (particles, geometry)
z-index: 1      → Background atmosphere (gradients, subtle effects)
z-index: 0      → Base surface
```

---

## 4. Technical Stack & Dependencies

### Core Libraries to Add

```json
{
  "dependencies": {
    // Existing
    "next": "^13.5.11",
    "react": "^18.3.1",
    "framer-motion": "^10.18.0",
    "tailwindcss": "^3.4.19",
    
    // New 3D Stack
    "three": "^0.170.0",
    "@react-three/fiber": "^8.17.0",
    "@react-three/drei": "^9.114.0",
    "@react-three/postprocessing": "^2.16.0",
    
    // Animation
    "gsap": "^3.12.0",
    "@gsap/react": "^1.0.0",
    "lenis": "^1.1.0",
    
    // State
    "zustand": "^5.0.0",
    
    // Utils
    "postprocessing": "^6.36.0"
  },
  "devDependencies": {
    "@types/three": "^0.170.0"
  }
}
```

### Library Roles

| Library | Role | Why Not Alternatives |
|---------|------|---------------------|
| `@react-three/fiber` | React renderer for Three.js | Native React integration, automatic disposal, canvas management |
| `@react-three/drei` | 300+ helpers for R3F | `Float`, `ScrollControls`, `Environment`, `CameraControls`, `Mask`, `View` |
| `@react-three/postprocessing` | Bloom, vignette, chromatic aberration | GPU-accelerated, integrates with R3F effects pipeline |
| `gsap` | Animation orchestration | Industry standard for scroll-linked 3D animation, ScrollTrigger is best-in-class |
| `lenis` | Smooth scrolling | Lighter than locomotive-scroll, works perfectly with GSAP ScrollTrigger |
| `zustand` | Shared state between React and 3D | Used by PorscheLab, San Rita, Shader.se for camera/UI state |

### Architecture Pattern: Single Canvas

Based on INK Games and Shader.se production patterns:

```
app/layout.tsx (client)
├── <Canvas> — mounted once, persists across route changes
│   ├── <View.Port /> — renders scissored 3D sections
│   ├── <FloatingParticles /> — background atmosphere (always on)
│   └── <PostProcessing /> — bloom, vignette (global)
│
├── <Navbar /> — HTML overlay, Liquid Glass
├── <main>
│   └── {children} — page content with <View> markers
└── <Footer />
```

Each page section that needs 3D wraps its content in a `<View>` component (from drei), which tells R3F where to render the 3D scene within the shared canvas. Only visible sections render — off-screen sections pause their frame loops.

---

## 5. Implementation Plan (by Impact)

### Phase 1 — Foundation (Week 1)
*Highest impact, lowest risk — install and configure core 3D infrastructure*

- [ ] **1.1** Install dependencies (`three`, `@react-three/fiber`, `@react-three/drei`, `gsap`, `lenis`, `zustand`)
- [ ] **1.2** Create shared `<ThreeCanvas>` layout wrapper with single canvas
- [ ] **1.3** Add Lenis smooth scroll to layout
- [ ] **1.4** Create `useDeviceTier` hook (detect WebGL capabilities)
- [ ] **1.5** Create `useReducedMotion` hook (respect OS preference)
- [ ] **1.6** Verify: smooth scroll works, canvas renders, no errors

### Phase 2 — Hero 3D Particle Field (Week 2)
*Visual centerpiece — the "wow" moment*

- [ ] **2.1** Replace video background with `<ThreeCanvas>` in hero
- [ ] **2.2** Create `<FloatingParticleField>` — 100 instanced particles
- [ ] **2.3** Add `<ConnectionLines>` — dynamic web between nearby particles
- [ ] **2.4** Add `<FloatingGeometry>` — slowly rotating torus knot
- [ ] **2.5** Mouse parallax — particles/geometry respond to cursor
- [ ] **2.6** Scroll fade — particles dim as user scrolls down
- [ ] **2.7** Mobile fallback — static gradient BG on low-tier devices

### Phase 3 — Card 3D Tilt + Parallax (Week 2-3)
*Interactive depth on existing content*

- [ ] **3.1** Create `<TiltCard>` component — Framer Motion + CSS perspective
- [ ] **3.2** Apply to service cards in `page.tsx`
- [ ] **3.3** Apply to case study cards
- [ ] **3.4** Apply to testimonial cards
- [ ] **3.5** Add depth-layered background parallax (multi-plane scroll offset)

### Phase 4 — Custom Cursor + Micro-interactions (Week 3)
*Premium feel on every interaction*

- [ ] **4.1** Create `<CustomCursor>` — dot + ring with independent lerp rates
- [ ] **4.2** Magnetic button effect on CTAs (cursor attracts button toward it)
- [ ] **4.3** Text hover effects on links (subtle 3D lift)
- [ ] **4.4** Image hover zoom with parallax

### Phase 5 — Liquid Glass Navigation (Week 3-4)
*Apple-inspired nav bar*

- [ ] **5.1** Multi-layer glass effect (backdrop-blur + gradient specular overlay)
- [ ] **5.2** Nav shrinks on scroll down, expands on scroll up
- [ ] **5.3** Active link has glowing indicator
- [ ] **5.4** 3D logo mark in nav

### Phase 6 — Scroll-Driven 3D Storytelling (Week 4)
*Process section as 3D journey*

- [ ] **6.1** Create `<ScrollDrivenProcess>` — 4 3D spheres connected by animated lines
- [ ] **6.2** Camera follows scroll position along a predefined path
- [ ] **6.3** Active step highlights with glow + scale
- [ ] **6.4** Chapter overlays fade in/out on scroll

### Phase 7 — Page Transitions (Week 4-5)
*Cinematic route changes*

- [ ] **7.1** Create `<PageTransition>` wrapper
- [ ] **7.2** Implement ink-bleed shader transition
- [ ] **7.3** Wrap each page in transition component
- [ ] **7.4** Verify: no flash, smooth between routes

### Phase 8 — Polish & Performance (Week 5)

- [ ] **8.1** Test on mobile (iPhone 12+, Android equivalents)
- [ ] **8.2** Audit frame rate on mid-range devices
- [ ] **8.3** Add `will-change` hints where beneficial
- [ ] **8.4** Lazy-load heavy 3D sections
- [ ] **8.5** Compress all textures (KTX2 / Basis Universal)
- [ ] **8.6** Audit Core Web Vitals (LCP, CLS not regressed)
- [ ] **8.7** Accessibility pass (reduced motion, focus states, screen reader)

---

## 6. Animation Guidelines & Spring Physics

### 6.1 Spring Physics Parameters

Based on Google Material 3 Expressive motion tokens and Framer Motion spring physics:

| Use Case | Stiffness | Damping | Mass | Type |
|----------|-----------|---------|------|------|
| Hero entrance (text) | 120 | 14 | 1 | gentle spring |
| Card hover tilt | 300 | 30 | 0.5 | stiff, responsive |
| Card scroll reveal | 80 | 20 | 1 | bouncy, playful |
| Particle response to mouse | 60 | 8 | 0.3 | very fluid |
| Magnetic button attraction | 400 | 30 | 1 | snappy |
| Nav bar collapse | 200 | 25 | 1 | balanced |
| Custom cursor follower | 150 | 10 | 0.15 | ultra-soft |
| 3D camera movement | 80 | 12 | 1 | cinematic |
| Page transition | 100 | 18 | 1 | smooth morph |
| Connection line draw | 50 | 10 | 1 | slow reveal |

### 6.2 Duration Reference (Non-Spring)

For situations where explicit duration is needed:

| Transition | Duration | Easing |
|-----------|----------|--------|
| Opacity fade (content) | 0.7s | `[0.25, 0.46, 0.45, 0.94]` |
| Scale reveal (hero) | 0.8s | `[0.16, 1, 0.3, 1]` |
| Glass card enter | 0.6s | `[0.22, 1, 0.36, 1]` |
| Scroll-triggered stagger | 0.8s | `power4.out` (GSAP) |

### 6.3 The Golden Rule: One Motion System

> **Do not mix** Framer Motion and GSAP animations on the same element.
> - Use **Framer Motion** for: component-level (mount/unmount, hover, tap, layout)
> - Use **GSAP** for: scroll-linked, timeline-based, camera path animations
> - Use **Three.js useFrame** for: real-time 3D loop (particles, continuous rotation)
> - Bridge with **Zustand** stores for shared state between React and R3F

### 6.4 Scroll-Triggered 3D Reveals — Pattern

```
Scroll starts → Lenis emits scroll position
    ↓
GSAP ScrollTrigger maps position to 3D animation progress
    ↓
Mutable refs updated (NOT React state — prevents re-renders)
    ↓
R3F useFrame reads refs and applies to camera/meshes
    ↓
Canvas renders the updated scene
```

### 6.5 Mouse/Touch Responsiveness

```
Mouse move → track with RAF (not scroll event)
    ↓
Lerp current position toward target (spring coefficient: 0.06-0.12)
    ↓
Apply to: particle positions, camera orbit, card tilt, parallax offset
    ↓
All via refs — zero React re-renders during interaction
```

---

## 7. Visual References & Patterns to Emulate

### Apple Patterns

| Pattern | Implementation | Where to Use |
|---------|---------------|-------------|
| **Liquid Glass** | 4-layer shader: refraction → chromatic aberration → blur → specular | Nav bar, CTA buttons, contact form |
| **Superellipse** | SDF-based squircle (not `border-radius`) | Card corners, button shapes |
| **Depth cascading** | Elements at various z-depths with proportional shadow softness | Service grid, case study cards |
| **Specular highlight** | Virtual light source following cursor | Hero geometry, logo |
| **Minimal camera movement** | Subtle, purposeful — never random | Hero scene, process section |
| **Material truth** | Every material reads as what it represents (glass = glass, not "glass-like") | All 3D elements |

### Google (Material 3 Expressive) Patterns

| Pattern | Implementation | Where to Use |
|---------|---------------|-------------|
| **Shape morphing** | Button transitions between shapes | CTA hover states |
| **Motion tokens** | Predefined spring parameters (see §6.1) | All animations |
| **Expressive color** | Rich, high-chroma accents on dark surfaces | Gradient text, icon accents |
| **Spatial elevation** | Layers at 4 elevations: 0dp (surface), 1dp (cards), 3dp (nav), 8dp (modals) | Whole page hierarchy |
| **Dynamic theming** | Accent colors extracted from dominant content color | Per-service theming |

### Microsoft (Fluent) Patterns

| Pattern | Implementation | Where to Use |
|---------|---------------|-------------|
| **Dynamic backdrop** | Background subtly influenced by content behind it (Mica concept) | Section backgrounds |
| **Focus-indicating material** | Inactive surfaces recede, active surfaces have full material treatment | Cards, nav items |
| **Connected animation** | Elements visually linked between states with shared motion | Page transitions |
| **Purposeful shadow** | Shadow only where it communicates hierarchy (not decorative) | All cards |

### Production 3D Site Patterns

From the analyzed production sites:

| Site | Key Pattern | Steal This |
|------|-------------|------------|
| **PorscheLab** | Single canvas, GSAP + ScrollTrigger + Three.js, zustand state, HDRI environments, device-tier detection | Architecture pattern |
| **San Rita** | Scroll-driven camera over 3D terrain, Lenis, sections as scenes | Process section storytelling |
| **Shader.se** | FBO scene transitions, selective rendering, reverse-order passes | Page transitions |
| **INK Games** | Portal cards with R3F Mask + clipping planes, one canvas for all sections | Case study cards |
| **SILLAGE** | LatheGeometry for product shapes, MeshTransmissionMaterial for glass, Float for animation | 3D glass rendering |
| **Joseph Santamaria** | Ink-bleed shader transition, GSAP Observer for scroll, snap-scroll sections | Page transition aesthetic |
| **Chanel Bleu** | Photorealistic 3D bottle, scroll-rotating camera around product | Case study 3D hero treatment |

---

## 8. Key Code Examples

### 8.1 Shared Three.js Canvas Layout

```tsx
// components/ThreeCanvas.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import { Suspense, useEffect, useRef } from 'react'
import { PostProcessing } from './PostProcessing'

export function ThreeCanvas({ children }: { children: React.ReactNode }) {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
      dpr={[1, 1.5]} // Cap pixel ratio for performance
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 10], fov: 45 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <View.Port />
        <PostProcessing />
      </Suspense>
    </Canvas>
  )
}
```

### 8.2 Hero Particle Field

```tsx
// components/hero/ParticleField.tsx
'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 120
const CONNECTION_DISTANCE = 2.5

export function ParticleField({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const positions = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [])

  const velocities = useMemo(() => {
    const vel = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      vel[i * 3] = (Math.random() - 0.5) * 0.005
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005
    }
    return vel
  }, [])

  // Dummy matrix for instanced rendering
  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    
    const t = clock.getElapsedTime()
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Subtle sine wave motion
      const i3 = i * 3
      positions[i3] += Math.sin(t * 0.3 + i) * 0.001
      positions[i3 + 1] += Math.cos(t * 0.2 + i * 1.5) * 0.001
      
      // Mouse influence
      positions[i3] += mouse.x * 0.002 * (positions[i3 + 2] > 0 ? 1 : -1)
      positions[i3 + 1] += mouse.y * 0.002 * (positions[i3 + 2] > 0 ? 1 : -1)
      
      dummy.position.set(positions[i3], positions[i3 + 1], positions[i3 + 2])
      dummy.scale.setScalar(0.03 + Math.sin(t + i) * 0.01)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#3B82F6" transparent opacity={0.6} />
    </instancedMesh>
  )
}
```

### 8.3 3D Card Tilt Component

```tsx
// components/ui/TiltCard.tsx
'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  tiltDegree?: number
  glare?: boolean
}

export function TiltCard({ children, className = '', tiltDegree = 8, glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return

    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) / (rect.width / 2)
    const deltaY = (e.clientY - centerY) / (rect.height / 2)

    x.set(deltaX * tiltDegree)
    y.set(-deltaY * tiltDegree)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      <motion.div
        style={{
          rotateX: ySpring,
          rotateY: xSpring,
          transformStyle: 'preserve-3d',
          transition: 'box-shadow 0.3s ease',
        }}
        whileHover={{
          boxShadow: '0 20px 60px rgba(59, 130, 246, 0.15), 0 8px 20px rgba(0,0,0,0.2)',
        }}
      >
        {children}
        
        {/* Glare effect */}
        {glare && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 55%, transparent 60%)',
              backgroundSize: '200% 100%',
              backgroundPosition: '100% 0',
              translateZ: 2,
            }}
            animate={{
              backgroundPosition: ['100% 0', '-100% 0'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}
```

### 8.4 Custom Cursor

```tsx
// components/ui/CustomCursor.tsx
'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springX = useSpring(cursorX, { stiffness: 150, damping: 10, mass: 0.15 })
  const springY = useSpring(cursorY, { stiffness: 150, damping: 10, mass: 0.15 })
  
  const ringX = useSpring(cursorX, { stiffness: 80, damping: 12, mass: 0.5 })
  const ringY = useSpring(cursorY, { stiffness: 80, damping: 12, mass: 0.5 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [cursorX, cursorY])

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-500 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-500/40 pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
```

### 8.5 Scroll-Driven 3D Camera Path (GSAP + R3F)

```tsx
// components/process/ScrollDrivenScene.tsx
'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Float, Sphere, Line } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { title: 'Discover', color: '#3B82F6', pos: [-4, 0, 0] },
  { title: 'Strategize', color: '#8B5CF6', pos: [0, 2, 0] },
  { title: 'Build', color: '#06B6D4', pos: [4, 0, 0] },
  { title: 'Scale', color: '#F59E0B', pos: [0, -2, 0] },
]

export function ScrollDrivenScene() {
  const sectionRef = useRef<HTMLElement>(null)
  const cameraRef = useRef({ x: 0, y: 1.2, z: 8 })
  const progressRef = useRef(0)
  const activeStepRef = useRef(0)

  useGSAP(() => {
    if (!sectionRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      },
    })

    // Camera path through the 4 steps
    tl.to(cameraRef.current, { x: -2, y: 0, z: 4 }, 0)
    tl.to(cameraRef.current, { x: 0, y: 2, z: 4 }, 0.25)
    tl.to(cameraRef.current, { x: 2, y: 0, z: 4 }, 0.5)
    tl.to(cameraRef.current, { x: 0, y: 0, z: 6 }, 0.75)
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen">
        <Canvas dpr={[1, 1.5]}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          
          <DrivenCamera cameraRef={cameraRef} />
          
          {/* Connection lines */}
          <Line
            points={steps.map(s => new THREE.Vector3(s.pos[0], s.pos[1], s.pos[2]))}
            color="#3B82F6"
            lineWidth={1}
            transparent
            opacity={0.3}
          />
          
          {/* Step spheres */}
          {steps.map((step, i) => (
            <Float key={step.title} speed={1 + i * 0.3} rotationIntensity={0.2}>
              <Sphere args={[0.5, 32, 32]} position={step.pos}>
                <meshStandardMaterial
                  color={step.color}
                  metalness={0.6}
                  roughness={0.2}
                  transparent
                  opacity={0.8}
                />
              </Sphere>
            </Float>
          ))}
        </Canvas>
      </div>
    </section>
  )
}

function DrivenCamera({ cameraRef }: { cameraRef: React.MutableRefObject<{ x: number; y: number; z: number }> }) {
  const ref = useRef<THREE.PerspectiveCamera>(null)

  useFrame(() => {
    if (!ref.current) return
    ref.current.position.set(cameraRef.current.x, cameraRef.current.y, cameraRef.current.z)
    ref.current.lookAt(0, 0, 0)
  })

  return <PerspectiveCamera ref={ref} makeDefault fov={42} near={0.1} far={100} />
}
```

### 8.6 Lenis Smooth Scroll Setup

```tsx
// components/LenisProvider.tsx
'use client'

import { ReactLenis } from 'lenis/react'
import { useEffect } from 'react'

export function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  )
}
```

### 8.7 Device Tier Detection

```tsx
// hooks/useDeviceTier.ts
'use client'

import { useEffect, useState } from 'react'

type DeviceTier = 'low' | 'medium' | 'high'

export function useDeviceTier(): DeviceTier {
  const [tier, setTier] = useState<DeviceTier>('high')

  useEffect(() => {
    // Check WebGL capabilities
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
    
    if (!gl) {
      setTier('low')
      return
    }
    
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    const renderer = debugInfo
      ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
      : ''
    
    // Check for mobile/low-end GPU
    const isLowEnd = /(Adreno 5|Mali-4|Intel HD Graphics 2|Intel HD Graphics 1)/i.test(renderer)
    const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent)
    
    // Check memory (Chrome-specific)
    const memory = (navigator as any).deviceMemory || 8
    
    if (isLowEnd || (isMobile && memory <= 4)) {
      setTier('low')
    } else if (isMobile || memory <= 4) {
      setTier('medium')
    } else {
      setTier('high')
    }
  }, [])

  return tier
}
```

### 8.8 Liquid Glass CSS Effect

```css
/* Enhanced glass card with Apple-inspired Liquid Glass */
.liquid-glass {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px) saturate(1.4);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  
  /* Specular highlight overlay */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.08) 0%,
      transparent 40%,
      transparent 60%,
      rgba(255, 255, 255, 0.03) 100%
    );
    pointer-events: none;
  }
  
  /* Edge refraction effect */
  &::after {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 17px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 30%,
      transparent 70%,
      rgba(255, 255, 255, 0.05) 100%
    );
    mask: linear-gradient(black, black) content-box, linear-gradient(black, black);
    mask-composite: exclude;
    -webkit-mask-composite: xor;
    padding: 1px;
    pointer-events: none;
  }
}

/* Squircle using clip-path for Apple-style corners */
.squircle {
  clip-path: path('M8,0 C12.42,0 14,1.58 14,6 L14,74 C14,78.42 12.42,80 8,80 L6,80 C1.58,80 0,78.42 0,74 L0,6 C0,1.58 1.58,0 6,0 Z');
}

/* Alternatively use border-radius with aspect-ratio aware corners */
.squircle-border {
  border-radius: 20% / 30%;
}
```

---

## 9. Performance Considerations & Mobile Fallbacks

### 9.1 Lazy Loading Strategy

| Section | Load Strategy |
|---------|-------------|
| Hero 3D particles | Eager (above fold) |
| Service card 3D tilt | Eager (intersection observer) |
| Process 3D scene | Lazy (load when scrolled near) |
| Custom cursor | Desktop only (no-op on touch) |
| Post-processing (bloom) | Only on desktop high-tier |
| HDRI environments | Lazy, resolve-adaptive |
| Page transition shaders | Preload in background |

### 9.2 Performance Budget

```
Target: 60fps on high-tier, 30fps on low-tier

Budget per frame (16.6ms at 60fps):
  - Three.js render: 8ms max
  - React render: 4ms max
  - GSAP updates: 2ms max
  - Other (Lenis, events): 2.5ms max

Mobile (30fps target = 33ms):
  - Three.js render: 15ms max (simpler scenes)
  - All other: same as above
```

### 9.3 Optimization Techniques

| Technique | Implementation | Impact |
|-----------|---------------|--------|
| **Cap DPR** | `dpr={[1, 1.5]}` on Canvas | Saves ~40% GPU on high-DPI |
| **Instanced rendering** | `InstancedMesh` for particles | Thousands of objects = 1 draw call |
| **Selective rendering** | Skip off-screen scenes entirely | Zero GPU work for hidden sections |
| **Resolution-adaptive textures** | 2K HDRI on mobile, 4K on desktop | Saves VRAM on constrained devices |
| **GSAP matchMedia** | Different animations per breakpoint | Mobile gets simpler but still feels premium |
| **Audio auto-pause** | Pause WebAudio when tab hidden | Saves CPU/battery |
| **Frameloop demand** | `frameloop: 'demand'` instead of `always` | Only render when something changes |
| **Will-change** | `will-change: transform` on animated elements | Browser optimizes layer placement |
| **No React state in RAF** | Use refs for per-frame values | Zero GC pressure |
| **Texture compression** | KTX2 + Basis Universal | 3-5x smaller GPU memory footprint |
| **Draco compression** | Compress GLTF geometry | Smaller download, same quality |

### 9.4 Device Tier Matrix

| Feature | Low Tier | Medium Tier | High Tier |
|---------|----------|-------------|-----------|
| Particle count | 0 (static BG) | 50 particles | 120 particles |
| Connection lines | No | No | Yes |
| Post-processing | No | No | Bloom (64x64 resolve) |
| HDRI | No | Static env map | Full dynamic HDRI |
| Card tilt | No tilt, static | CSS perspective only | Full 3D tilt + glare |
| Custom cursor | Hidden | Single dot | Dot + ring |
| Smooth scroll | No (native) | Lenis (simple) | Lenis (full physics) |
| Liquid Glass | No (solid bg) | backdrop-filter only | Full multi-layer glass |
| 3D geometry | None | Low-poly only | High-detail models |
| Shadows | None | Simple | Accumulative |
| Page transitions | Instant | Fade only | Full shader transition |

### 9.5 Reduced Motion

```tsx
// hooks/useReducedMotion.ts
'use client'

export function useReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
```

When reduced motion is detected:
- Disable all continuous animations (particle motion, floating, rotation)
- Keep entrance animations but make them instant (opacity 0→1, no movement)
- Disable parallax and scroll-linked animations
- Disable page transitions (instant route change)
- Disable custom cursor
- Keep only functional micro-interactions (button hover states)

---

## 10. File-by-File Migration Roadmap

### Structure to Add

```
components/
├── ThreeCanvas.tsx              ← NEW: Shared canvas wrapper
├── LenisProvider.tsx            ← NEW: Smooth scroll provider
├── CustomCursor.tsx             ← NEW: Dot + ring cursor
├── PageTransition.tsx           ← NEW: Ink-bleed page transitions
│
├── hero/
│   ├── HeroScene.tsx            ← NEW: R3F scene with particles + geometry
│   ├── ParticleField.tsx        ← NEW: Instanced particle system
│   ├── FloatingGeometry.tsx     ← NEW: Rotating torus knot
│   └── ConnectionLines.tsx      ← NEW: Dynamic web between particles
│
├── sections/
│   ├── ServiceCard3D.tsx        ← NEW: Card with 3D tilt + glare
│   ├── CaseStudyCard3D.tsx      ← NEW: Portal card with 3D parallax
│   ├── ProcessTimeline3D.tsx    ← NEW: 3D scroll-driven pipeline
│   └── TestimonialCard3D.tsx    ← NEW: Card with 3D tilt
│
├── ui/
│   ├── TiltCard.tsx             ← NEW: Reusable 3D tilt wrapper
│   ├── MagneticButton.tsx       ← NEW: Button that follows cursor
│   ├── LiquidGlass.tsx          ← NEW: Enhanced glass container
│   └── SquircleShape.tsx        ← NEW: Apple-style superellipse
│
├── effects/
│   ├── PostProcessing.tsx       ← NEW: Bloom + vignette
│   └── InkBleed.tsx             ← NEW: Page transition shader
│
└── hooks/
    ├── useDeviceTier.ts         ← NEW
    ├── useReducedMotion.ts      ← NEW
    ├── useMousePosition.ts      ← NEW
    └── useScrollProgress.ts     ← NEW
```

### Files to Modify

| File | Modification |
|------|-------------|
| `app/layout.tsx` | Add `LenisProvider`, `ThreeCanvas`, `CustomCursor` |
| `app/page.tsx` | Replace video BG with `<HeroScene>`, wrap cards in `<TiltCard>` |
| `app/services/page.tsx` | Add 3D section headers, tilt cards |
| `app/case-studies/page.tsx` | Add portal card effects |
| `app/about/page.tsx` | Add 3D stat displays |
| `app/contact/page.tsx` | Add magnetic form fields (subtle) |
| `styles/globals.css` | Add `.liquid-glass`, `.squircle` classes |
| `tailwind.config.js` | Add new animations (glare, spring-reveal) |
| `package.json` | Add all new dependencies |

---

## 11. Appendix: Research Sources

### Direct Sources Used in This Recipe

| # | Source | Key Insight | URL |
|---|--------|-------------|-----|
| 1 | Apple WWDC 2025 — Meet Liquid Glass | 4-layer shader system, superellipse shapes, environment-aware materials | developer.apple.com/videos/play/wwdc2025/356/ |
| 2 | Apple WWDC 2025 — Spatial Web | HTML `<model>` element, IBL environment maps, USDZ integration | developer.apple.com/videos/play/wwdc2025/237/ |
| 3 | Google Material 3 Expressive Research | 46 studies, 18k+ participants, 4x faster UI spotting, spring physics tokens | design.google/library/expressive-material-design-google-research |
| 4 | Google Material 3 Expressive Components | 35 new shapes, shape morphing, motion tokens, 15 new components | supercharge.design/blog/material-3-expressive |
| 5 | Microsoft Fluent — Mica/Acrylic | Dynamic backdrop materials, ThemeShadow, 3D perspective transforms | learn.microsoft.com/en-us/windows/apps/develop/ui/system-backdrops |
| 6 | Microsoft Fluent — Materials & Motion | Occluding vs transparent materials, purposeful motion, connected animation | learn.microsoft.com/en-us/windows/apps/design/signature-experiences/motion |
| 7 | PorscheLab (ASTRICKK) — Production R3F | Single canvas, GSAP+ScrollTrigger+Zustand, HDRI, mobile 100% | github.com/astrickk/porschelab |
| 8 | San Rita — Topographic Web (Codrops) | Scroll-driven camera, Lenis + GSAP + R3F | tympanus.net/codrops/2026/03/24/digital-craft-wild-soul-building-san-ritas-topographic-web-experience |
| 9 | Shader.se — WebGPU Pipeline (Codrops) | FBO scene transitions, selective rendering, reverse-order passes | tympanus.net/codrops/2026/05/19/80s-business-tech-seamless-scene-transitions-inside-shader-ses-scroll-driven-webgpu-pipeline |
| 10 | INK Games — One Canvas (Codrops) | R3F View component, portal cards with stencil/clipping, gltfjsx | tympanus.net/codrops/2025/11/21/one-canvas-to-rule-them-all-how-ink-games-new-site-handles-complex-3d |
| 11 | SILLAGE — Luxury Fragrance (GitHub) | MeshTransmissionMaterial, LatheGeometry, parallax groups, glass rendering | github.com/shaozheng0503/SILLAGE |
| 12 | Joseph Santamaria — Scroll-Driven 3D (Codrops) | Ink-bleed transition shader, GSAP Observer, snap-scroll sections | tympanus.net/codrops/2026/04/28/more-than-a-portfolio-building-a-scroll-driven-3d-world-with-something-to-say |
| 13 | Liquid Glass Web Rebuild (Ken Sorrell) | Skia WASM shader, 4-layer glass implementation, squircle SDF | sorrell.info/blog/liquid-glass-lens-effect |
| 14 | Best 3D Websites 2026 (MDX) | Device-tier detection, loading strategies, when 3D is/isn't worth it | mdx.so/blog/best-3d-websites-2026-examples |
| 15 | Cinematic 3D Scroll (Mirax) | GSAP ScrollTrigger + R3F architecture pattern, camera refs, chapter overlays | mirax.cc/articles/cinematic-3d-scroll-gsap-nextjs-react-three-fiber |

### AI Consulting Niche Research Sources (2026)

| # | Source | Key Insight | URL |
|---|--------|-------------|-----|
| 16 | Khod.io — Web Design Trends 2026 for AI Brands | 8 trends: minimalism, bold typography, interactive playgrounds, AI-generated media, personalization, smart chat | khod.io/resource-center/articles/web-design-trends-2026-for-ai-brands |
| 17 | Neural Fleet / $1B+ Studio — AI Design Case Study | Floating agent orbs, conic gradient (30s rotation), synthetic color spectrum, +52% perceived value | s1bstudio.website/cases/neural-fleet |
| 18 | Svilenković — AI Startup 3D Website Pricing | Hero 3D for AI startups pre-Series A, $3K-$8K full site, neural net visualization, device-tier detection | svilenkovic.com/3d/ai-startup-3d-website |
| 19 | AssistFlow (Blink.new) — AI R&D Lab Three.js Site | Neural mesh scene, AI pipeline visualization, calm intelligent animations, performant 3D with accessible fallbacks | blink.new/p/assistflow-enterprise-ai-website-cgs3et1g |
| 20 | Lazarev.agency — Webby Winner 2026 AI Visual Design | Award-winning AI UX patterns, bold typography, interactive demos, 30+ AI products shipped, 120+ design awards | lazarev.agency/services/ai-consulting-services |
| 21 | Indigo Design Labs — Designing the Future of AI | "Calm at the moment of complexity" philosophy, AI brand architecture, trust-through-clarity approach | getindigo.ai/labs |
| 22 | Cerebral Machine (GitHub) — 3D Brain Visualization | Interactive 3D brain, GPU particles, custom GLSL shaders, LOD progressive loading, emissive fiber shaders | github.com/Pratyush150/Kairo_studio_website |
| 23 | Utsubo — Web Design Trends 2026: AI Killed Brochure | 3D interactive websites generate viral social sharing, $20K-$200K+ budgets for experiential, ROI shift to earned media | utsubo.com/blog/web-design-trends-2026-decision-makers-guide |
| 24 | Everything Design — Deep Tech Website Agency | 3D as communication (not decoration), institutional buyer visual register, buyer's fear-first positioning | everything.design/blog/website-agency-deep-tech-startup |
| 25 | Porsche Consulting — German Design Award 2025 | Movement as transformation metaphor, scroll-triggered animations, "Design That Moves Change" | porsche-consulting.com/usa/en/article/german-design-award-winner-2025-0 |
| 26 | Figma — Web Design Trends 2026 | 3D/immersive, experimental navigation, dark mode first (81.9% users), AI-driven personalization, bento grids | figma.com/resource-library/web-design-trends/ |
| 27 | Sanjay Dey — UX/UI Trends 2026 Data-Backed | Calm UX replacing motion theatrics, 93% AI adoption, accessibility-first legal enforcement, generative UI | sanjaydey.com/ux-ui-design-trends-2026-biggest/ |

### Brand Design System References

- **Apple**: Human Interface Guidelines 2026, Liquid Glass design system (WWDC 2025)
- **Google**: Material 3 Expressive (Google I/O 2025), Material Design 3 documentation
- **Microsoft**: Fluent 2 Design System, WinUI 3, Windows App SDK documentation
- **AI Consulting / Synthetic Intelligence**: Neural Fleet palette (Neural Fleet / $1B+ Studio 2026), Indigo "calm AI" design philosophy (Indigo Design Labs 2026), Lazarev award-winning AI UX patterns (Lazarev.agency 2026)

---

## Summary: Before vs. After

| Aspect | Before | After | AI-Niche Difference |
|--------|--------|-------|---------------------|
| **Hero** | Static video + gradient overlay | Neural network 3D particle field + floating agent orbs + conic gradient | **Signals AI expertise** — connected node mesh with pulsing data flow vs generic particles |
| **Navigation** | Flat backdrop-blur bar | Liquid Glass multi-layer nav with specular highlights + scroll-responsive | Same premium nav, but with synthetic spectrum (purple→cyan→pink) accent |
| **Cards** | Background blur + border | Full 3D tilt with spring physics + glare layer + z-depth shadow | Cards use AI color palette, subtle data-flow micro-animations |
| **Animations** | Opacity/y fades only | Calm, purposeful spring physics — 2-4x slower than typical premium | **Calm UX for trust** — slow deliberate motion communicates "in control" |
| **Scroll** | Native browser scroll | Lenis smooth scroll (1.2s duration, custom easing) | Standard premium, no niche delta |
| **Cursor** | System cursor | Custom dot + ring with dual-spring lerp (desktop only) | Standard premium, no niche delta |
| **Process** | Static numbered cards | 3D data-flow pipeline — connected nodes with animated particles | **AI-specific storytelling** — "Discover→Strategize→Build→Scale" as living data flow |
| **Color system** | Blue-dominant brand palette | Synthetic spectrum: purple → cyan → pink on deep black | **The #1 AI signal** — colors that don't exist in nature = visual code of AI |
| **Page transitions** | Instant route change | Ink-bleed shader transition or particle dissolve | Could add neural dissolve (scene scatters into data particles) |
| **Typography** | Manrope + Lato | Syne (display) + Inter (body) | **Futuristic + readable** — Syne is purpose-built for AR/VR interfaces |
| **Micro-interactions** | None | Magnetic buttons, hover parallax, text lift + **data-flow particle trails** | AI data visualization behind every interaction |
| **Materials** | CSS backdrop-filter | Multi-layer glass + **AI glass tint (purple/cyan)** | Colored glass instead of clear — AI brand signature |
| **Mobile** | Same experience scaled | Device-tier detection, graceful degradation, reduced motion support | AI concepts survive without WebGL — static fallback preserves messaging |
| **Performance** | Unknown (no 3D) | Selective rendering, instanced meshes, capped DPR, lazy loading | Standard premium, no niche delta |

---

*End of 3D Upgrade Recipe. Estimated effort: 5 weeks for single developer. Dependencies: Next.js 13, React 18, R3F 9, drei 9, GSAP 3, Lenis 1, Zustand 5.*
