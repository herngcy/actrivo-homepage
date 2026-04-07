# Repository Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout — metadata, fonts (Inter + Space Grotesk)
│   ├── page.tsx                # Home page — assembles all landing sections
│   ├── globals.css             # CSS variables for brand tokens
│   ├── contact/page.tsx        # Contact page with form + Calendly
│   ├── pricing/page.tsx        # Pricing page with 3 tiers
│   ├── work/page.tsx           # Portfolio page
│   ├── blog/                   # Blog index + [slug] template
│   └── services/               # 9 service pages with shared template
├── components/
│   ├── ui/                     # Reusable UI primitives (bento-grid, marquee, sticky-scroll, etc.)
│   ├── service/                # Service page components (ServicePageTemplate, ServiceHeroV2, etc.)
│   ├── PageWrapper.tsx         # Shared layout wrapper for non-home pages
│   └── [Section].tsx           # Landing page sections (Hero, HowItWorks, BentoFeatures, etc.)
├── lib/
│   ├── utils.ts                # cn() helper (clsx + tailwind-merge)
│   ├── blog-data.ts            # Blog post data
│   └── service-data.ts         # Service page data
public/                         # Static assets (images, icons, logo)
docs/                           # Strategy & research documents
```

# Architecture

- **Multi-page app**: Next.js App Router, 20+ pages. Deployed on Cloudflare via OpenNext.
- **Home page** (`src/app/page.tsx`): Client component with anchor navigation (`#how-it-works`, `#services`).
- **Other pages**: Use `PageWrapper` component. All use `"use client"` for Framer Motion.
- **Service pages**: Reusable components in `src/components/service/`.
- **Styling**: Tailwind CSS v4 with CSS variables in `globals.css`.
- **Animations**: Framer Motion (`motion` library) + `useInView` scroll triggers. CSS keyframes for marquees.

# Key Components (Known History)

- `src/components/ui/hero-orbital.tsx` + `hero-orbital.css` — orbital hero with desktop vignette, mobile ring
- `src/components/ui/sticky-scroll-reveal.tsx` — split mobile/desktop layouts; mobile has sticky step bar
- `src/components/HowItWorks.tsx` — uses StickyScroll with 4 steps
