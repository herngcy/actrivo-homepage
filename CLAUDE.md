# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Actrivo is a Malaysian AI automation agency website. Multi-page Next.js app (App Router) targeting Malaysian SMEs with dedicated pages for services, pricing, portfolio, blog, and contact. Deployed on Cloudflare via OpenNext.

## Repository Structure

```
actrivo-deploy/
├── src/                        # Next.js app source (App Router)
│   ├── app/
│   │   ├── layout.tsx          # Root layout — metadata, fonts (Inter + Space Grotesk)
│   │   ├── page.tsx            # Home page — assembles all landing section components
│   │   ├── globals.css         # CSS variables for brand tokens
│   │   ├── contact/page.tsx    # Contact page with form + Calendly
│   │   ├── pricing/page.tsx    # Pricing page with 3 tiers
│   │   ├── work/page.tsx       # Portfolio page
│   │   ├── blog/
│   │   │   ├── page.tsx        # Blog index
│   │   │   └── [slug]/page.tsx # Blog post template
│   │   └── services/
│   │       ├── page.tsx                    # Services index
│   │       ├── data-entry-automation/
│   │       ├── ai-document-processing/
│   │       ├── customer-workflows/
│   │       ├── reporting-dashboards/
│   │       ├── invoice-payment-automation/
│   │       ├── whatsapp-business-automation/
│   │       ├── inventory-management/
│   │       ├── email-marketing/
│   │       └── lead-management/
│   ├── components/
│   │   ├── ui/                 # Reusable UI primitives (bento-grid, marquee, sticky-scroll, etc.)
│   │   ├── service/            # Service page components (ServicePageTemplate, ServiceHeroV2, etc.)
│   │   ├── PageWrapper.tsx     # Shared layout wrapper for all non-home pages
│   │   ├── ServiceHero.tsx     # Reusable service page hero
│   │   ├── ToolsGrid.tsx       # Integration tools grid
│   │   ├── ContactForm.tsx     # Contact form with validation
│   │   ├── PricingCard.tsx     # Pricing tier card
│   │   ├── ProjectCard.tsx     # Portfolio project card
│   │   ├── BlogCard.tsx        # Blog article card
│   │   ├── AboutUs.tsx         # About section
│   │   ├── Accordion.tsx       # FAQ section
│   │   ├── BentoFeatures.tsx   # Service cards grid (links to service pages)
│   │   ├── FinalCTA.tsx        # Wraps cta-with-text-marquee.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx            # Home hero section
│   │   ├── HowItWorks.tsx      # 4-step sticky scroll process
│   │   ├── Marquee.tsx         # Integration tools ticker
│   │   ├── Navbar.tsx
│   │   ├── ProblemSolution.tsx  # Before/after comparison
│   │   ├── SmoothScrollProvider.tsx
│   │   └── TrustGrid.tsx       # Differentiator cards
│   └── lib/
│       ├── utils.ts            # cn() helper (clsx + tailwind-merge)
│       ├── blog-data.ts        # Blog post data
│       └── service-data.ts     # Service page data
├── public/                     # Static assets (images, icons, logo)
├── _reference/                 # Local-only reference materials (gitignored)
│   ├── brand_assets/           # Actrivo logo
│   ├── website_reference/      # Design reference images
│   └── docs/                   # Planning docs (LANDING_PAGE.md, etc.)
├── next.config.ts
├── tailwind.config.ts          # Custom colors, fonts, animations (if present)
├── postcss.config.mjs
├── tsconfig.json
├── eslint.config.mjs
├── open-next.config.ts         # OpenNext/Cloudflare config
├── wrangler.jsonc              # Cloudflare Workers config
└── package.json                # Uses pnpm
```

## Commands

```bash
# Development (run from project root)
pnpm dev                        # Next.js dev server (localhost:3000)
pnpm build                      # Production build
pnpm lint                       # ESLint

# Cloudflare deployment
pnpm deploy                     # Build + deploy to Cloudflare
pnpm preview                    # Build + local Cloudflare preview
pnpm upload                     # Build + upload without deploying
```

### Dev Server Rules
- **Check if a server is already running** before starting a new one.
- Run `netstat -ano | grep -E "LISTENING" | grep -E ":300[0-9]"` to check.
- If one is running, **use that port** — don't spin up a second instance.
- If you must restart, kill the existing process first.

## Architecture

- **Multi-page app**: Next.js App Router with 20 pages (1 home + 4 main + 10 service + 5 blog)
- **Home page** (`src/app/page.tsx`): Client component assembling all landing sections. Uses anchor navigation (`#how-it-works`, `#services`, etc.)
- **Other pages**: Use `PageWrapper` component (shared navbar + footer). All use `"use client"` for Framer Motion animations.
- **Service pages**: Use reusable components from `src/components/service/` (ServicePageTemplate, ServiceHeroV2, ServiceBentoGrid, etc.)
- **Navigation**: Mix of anchor links (home sections) and route links (`/pricing`, `/work`, `/blog`, `/services/*`)
- **Animation stack**: Framer Motion (motion library) for entrance animations + `useInView` scroll triggers. CSS keyframes for marquees.
- **Styling**: Tailwind CSS v4 with CSS variables in `globals.css`. Brand color `actrivo` (#fca311).
- **Deployment**: Cloudflare Pages via OpenNext adapter.

## Brand

| Token | Value |
|-------|-------|
| Primary | #fca311 (amber/gold) — `actrivo` |
| Background | #000000 |
| Foreground | #ffffff |
| Card | #0a0a0a |
| Border | #262626 |
| Body font | Inter (`font-sans`) |
| Display font | Space Grotesk (`font-display`) |
| Logo | `public/actrivo-logo.jpeg` |

## Reference Materials

Brand assets, design references, and planning docs are in `_reference/` (gitignored, local only):
- `_reference/brand_assets/` — Actrivo logo original
- `_reference/website_reference/` — Design inspiration images
- `_reference/docs/` — LANDING_PAGE.md, SERVICE_PAGES_CONTENT.md

## Design Guardrails

- Never use default Tailwind palette (indigo-500, blue-600, etc.) — use brand colors.
- Never use `transition-all` — only animate `transform` and `opacity`.
- Never use flat `shadow-md` — use layered, color-tinted shadows.
- Every clickable element needs hover, focus-visible, and active states.
- Pair display font with body font. Tight tracking on headings, generous line-height on body.
- Surfaces need a layering system (base → elevated → floating).

## Hard Rules

- Do not add sections, features, or content not requested.
- Check `public/` for existing assets before using placeholders.
- Do not use default Tailwind blue/indigo as primary color.
