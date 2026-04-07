# CLAUDE.md

Actrivo — Malaysian AI automation agency website. Next.js App Router, Tailwind v4, Framer Motion, Cloudflare deployment via OpenNext. Uses pnpm.

## Commands

```bash
pnpm dev          # Next.js dev server (localhost:3000)
pnpm build        # Production build
pnpm lint         # ESLint
pnpm deploy       # Build + deploy to Cloudflare
```

## Project-Specific Rules

- Do not use default Tailwind blue/indigo as primary color — brand is `#fca311`
- Do not use `transition-all` — only animate `transform` and `opacity`
- Check `public/` for existing assets before using placeholders
- Use `tasks/todo.md` for multi-step work — mark items complete as you go
