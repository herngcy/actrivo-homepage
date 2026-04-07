---
paths:
  - "src/**/*.tsx"
  - "src/**/*.css"
  - "src/**/*.ts"
  - "tailwind.config.*"
---

# Brand Tokens

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

# Design Guardrails

- NEVER use default Tailwind palette (indigo-500, blue-600, etc.) — use brand colors above.
- NEVER use `transition-all` — only animate `transform` and `opacity`.
- NEVER use flat `shadow-md` — use layered, color-tinted shadows with low opacity.
- Every clickable element needs hover, focus-visible, and active states. No exceptions.
- Pair display font (Space Grotesk) with body font (Inter). Tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- Surfaces need a layering system: base (`#000`) → elevated (`#0a0a0a`) → floating (with border `#262626`).
- Gradients: layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- Images: add gradient overlay (`bg-gradient-to-t from-black/60`) and color treatment layer with `mix-blend-multiply`.
- Spacing: use intentional, consistent spacing tokens — not random Tailwind steps.
- Check `public/` for existing assets before using placeholders.
