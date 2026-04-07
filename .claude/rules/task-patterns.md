# Task Patterns

## Website Changes
- Read the relevant component/page file before editing
- Follow brand tokens in `.claude/rules/brand.md`
- Test with `pnpm build` before committing (catches TypeScript/lint errors)

## Writing Blog Articles
- Blog data: `src/lib/blog-data.ts`
- Template: `src/app/blog/[slug]/page.tsx`
- Target Malaysian SME audience — use ringgit amounts, local examples, WhatsApp references
- SEO keywords: "AI automation Malaysia SME", "WhatsApp automation Malaysia", "n8n Malaysia"

## Updating Portfolio / Case Studies
- Portfolio: `src/app/work/page.tsx`
- Current clients: Pikzern (Excel automation), Ecolife (Chatbot + Google Sheets)
- Include: problem, solution, tools used, measurable results, client quote

## Updating Pricing
- Page: `src/app/pricing/page.tsx`, Component: `src/components/PricingCard.tsx`
- Starter: RM 3,500 | Growth: RM 7,500 | Custom: RM 15,000+

## Creating Service Pages
- Data: `src/lib/service-data.ts`
- Template: `src/components/service/ServicePageTemplate.tsx`
- Route: `src/app/services/[service-name]/page.tsx`

