# Aiquire Website — CLAUDE.md

## Project
AI consulting company marketing website. Brief: `Website_Copy_and_Development_Brief_Complete.md`

## Tech Stack
- **Framework:** Next.js 14+ App Router, TypeScript
- **Styling:** Tailwind CSS + custom design tokens
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **CMS:** MDX for blog
- **Deployment:** Vercel

## Commands
```bash
npm run dev       # dev server
npm run build     # production build
npm run lint      # ESLint
npm run type-check # tsc --noEmit
```

## File Structure
```
/app
  /page.tsx                    → Homepage
  /services/page.tsx           → Services hub
  /services/[slug]/page.tsx    → Service detail
  /industries/page.tsx
  /case-studies/page.tsx
  /about/page.tsx
  /blog/page.tsx
  /blog/[slug]/page.tsx
  /contact/page.tsx
  /approach/page.tsx           → NEW
/components                    → Shared UI
/lib                           → Utils, constants, data
/content                       → MDX posts, service data
/public                        → Static assets
```

## Design Tokens
| Token | Value | Use |
|-------|-------|-----|
| Primary Navy | #0F2B46 | Headings, nav, footer |
| Accent Blue | #2980B9 | CTAs, links |
| Accent Light | #3498DB | Hover states |
| Success Green | #27AE60 | Metrics |
| BG Light | #F8F9FA | Section alternation |
| BG Blue | #EBF5FB | Callout boxes |
| Text Primary | #2C3E50 | Body |
| Text Secondary | #5D6D7E | Captions |
| Border | #D5D8DC | Cards, dividers |

**Fonts:** Satoshi/Cabinet Grotesk (headings), DM Sans (body), JetBrains Mono (code)

## Pages (8 total)
1. Homepage — hero, problem, services grid, why us, Double Diamond, stats, testimonials, industries, CTA
2. Services — hub with Double Diamond process + 6 service cards + engagement models
3. Services/[slug] — 6 detail pages
4. Industries — 6 verticals (Healthcare, Finance, Retail, Manufacturing, Logistics, PropTech)
5. About — origin story (McKinsey/BCG/Deloitte/Accenture heritage), Double Diamond, values, team
6. Case Studies — filterable grid
7. Blog — MDX-powered with categories
8. Contact — form + Calendly embed
9. /approach — standalone Double Diamond methodology page

## Key Components
- `DoubleDiamondDiagram` — reusable SVG/animated, 4 phases, draw-on-scroll
- `ServiceCard` — icon, title, desc, link, hover
- `StatCounter` — count-up animation on viewport entry
- `CTABanner` — full-width dark bg
- `SectionWrapper` — consistent padding/max-width
- `TestimonialCard` — quote, author, photo
- `SectionHeading` — overline, heading, subheading

## Animation Rules
- Staggered fade-up on load (100ms intervals)
- Scroll reveal: fade-in + 20px slide-up, trigger once
- Stat counters: 0→target over 1.5s on viewport entry
- Hover: 200ms ease
- NO parallax, NO autoplay video, NO repeat-on-scroll

## Performance Targets
- Lighthouse 90+ all categories
- FCP < 1.5s, CLS < 0.1
- WebP images, lazy loading, font-display: swap

## Brand Voice
"Smart colleague, not corporate brochure" — outcome-led, specific, jargon-light, 9th-grade reading level.
