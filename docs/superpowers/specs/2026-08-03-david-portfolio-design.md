# David Matosyan — Personal Site Design Spec

**Date:** 2026-08-03
**Goal:** Replace the PDF CV with a one-page site that lands David his next role by positioning him as an **AI-native engineer**: backend judgment × AI speed. The site's polish is itself the proof he ships product.
**Live target:** `davidmatosyan.vercel.app` (custom domain later).

## Audience & narrative

Recruiters, hiring managers, founders. Core story: *"Claude writes most of my code. I do the parts AI can't — knowing what the product needs, catching what's wrong, shipping what's right."* Three years of fintech backend (payments, secrets, ticketing) is the credibility layer: you can't review what you don't understand. The site is built by that exact workflow — David directing, Claude building, David reviewing — and says so.

**Copy rules:** first person, short sentences, confident, zero corporate filler. No invented metrics — everything traceable to the CV.

## Visual direction — "Midnight cinematic"

| Token | Value |
|---|---|
| Background | `#0A0A0B` (page), `#111113` (raised surfaces) |
| Text | `#F4F4F0` primary, `#9B9B94` muted |
| Hairlines | `#26262A` |
| Accent | `#D6FF3F` acid lime; ink-on-accent `#1A2000` |
| Display font | Space Grotesk (next/font/google) |
| Body font | Geist Sans |
| Label font | JetBrains Mono, uppercase, tracked wide |
| Texture | SVG turbulence film grain overlay ~5% opacity, fixed |
| Light | Cursor-following radial lime glow in hero (~5% alpha) |

## Page flow (one scroll, 5 beats)

### 1. Hero — full viewport
- Mono eyebrow: `BACKEND ENGINEER × AI-NATIVE BUILDER` · `YEREVAN, ARMENIA`
- H1 `DAVID MATOSYAN` — huge (clamp ~4.5rem→9rem), tight tracking, lines animate in on load
- Positioning line: *"Claude writes most of my code. I do the parts AI can't — knowing what the product needs, catching what's wrong, shipping what's right."*
- Headshot (`46ae81c2…jpeg` → `public/david.jpg`) small, monochrome-treated with lime duotone on hover
- CTAs: **View work** (scrolls) · **Download CV** (`public/David_Matosyan_CV.pdf`) · **LinkedIn ↗**
- Scroll cue at bottom
- **Marquee strip** under hero: `C# / .NET · PAYMENTS · SECRETS MGMT · TICKETING · AGENTIC AI · SQL · REST APIS · LLM PIPELINES ·` looping

### 2. How I work — the centerpiece
Intro: *"Three years of fintech backend taught me what production code has to survive. Now I use that judgment to direct AI instead of typing everything myself."*

Three numbered rows (large index, title, one line):
- **01 — Direct.** *"I break the product problem into instructions AI can execute. Scope, constraints, edge cases — the thinking is mine."*
- **02 — Review.** *"Every line gets read. Payments code taught me what breaks in production — that's what I hunt for in AI output."*
- **03 — Shape.** *"AI gives options; the product decides. I cut what doesn't serve it and ship what does."*

Closer: *"This site is the proof — directed by me, built by Claude, reviewed line by line."*

### 3. Selected work — 4 sticky-stacking full-bleed panels
Each panel: mono index, project title (big), role line, three short lines (Problem / Built / Impact), tech chips, code-generated abstract visual (slot swappable for Higgsfield renders later).

**01 · Flux AI Outreach** — Backend Developer · Flux Technologies · 2025–2026
- Problem: B2B cold outreach is manual — research every company, write every email, track every campaign.
- Built: the backend of an AI marketing platform: campaign creation, scheduling, and tracking at scale, plus an AI pipeline that researches each prospect and writes personalized copy.
- Impact: end-to-end automation — from raw prospect list to personalized emails delivered.
- Chips: `.NET` `LLM pipeline` `agentic workflows`
- Visual motif: flowing signal/stream lines.

**02 · EasyPay** — Software Developer · PandaTech · 2023–2025
- Problem: a live payments platform needed a ground-up rebuild.
- Built: core contributor on the new platform — APIs, business logic, and data layer in C#/.NET with Entity Framework and SQL.
- Impact: real money moves through code I helped design.
- Chips: `C#` `.NET` `EF` `SQL`
- Visual motif: transaction grid / ledger lines.

**03 · Vault** — Software Developer · PandaTech
- Problem: every project managed env vars and config by hand, with manual DevOps steps for each change.
- Built: designed and built the company's internal secrets-management service across dev and prod.
- Impact: adopted by every project in the company; teams pull configuration directly.
- Chips: `C#` `.NET` `security`
- Visual motif: key/lock lattice.

**04 · Ticketing Platform** — Software Developer · PandaTech
- Problem: venues, events, and ticket sales needed one system — including the admin side.
- Built: venue, event, and ticket-sales systems end to end, plus the admin panel that manages them.
- Impact: the full sales flow shipped as one platform.
- Chips: `C#` `.NET` `SQL`
- Visual motif: perforated ticket edge.

### 4. Contact
- Badge: `● OPEN TO NEW ROLES` (pulsing lime dot)
- Line: *"Looking for a team that ships fast and isn't afraid of AI-native engineers."*
- Big mailto CTA → `davidmatosyanwork@gmail.com`; **LinkedIn ↗** → `linkedin.com/in/david-matosyan-18a02b238`; **Download CV**
- Languages row: `ARMENIAN — NATIVE · RUSSIAN — C1 · ENGLISH — C1`
- Live Yerevan clock (client-side)

### 5. Footer
`© 2026 David Matosyan` · *"Directed by David. Built with Claude."*

## Motion spec

- **Lenis** smooth scroll (lerp ~0.1)
- Section reveals: `motion` whileInView — y 24→0 + fade, stagger 0.08s, once
- Hero name: per-line rise-in on load (no layout shift)
- Work panels: CSS `position: sticky` stacking; outgoing panel scales to ~0.95 + dims
- Marquee: CSS keyframes, duplicated content, ~40s loop
- Buttons: magnetic hover (spring toward cursor, ≤8px), lime fill sweep
- `prefers-reduced-motion`: Lenis off, reveals become fade-only, marquee static

## Tech

- **Next.js (App Router) + Tailwind v4**, TypeScript. Fully static — no server code, no DB.
- Deps beyond scaffold: `motion`, `lenis` only.
- All copy lives in `lib/content.ts` so David can edit words without touching markup.
- Components: `Hero`, `Marquee`, `HowIWork`, `WorkPanel`, `Contact`, `Grain` (+ tiny hooks). `app/page.tsx` composes them.
- Assets into `public/`: `david.jpg` (headshot), `David_Matosyan_CV.pdf`, favicon (DM monogram SVG), `og.png` (dark card, name + lime accent).
- SEO: metadata + OpenGraph/Twitter tags, `theme-color #0A0A0B`. Title: *"David Matosyan — Backend Engineer × AI-Native Builder"*.

## Verification (definition of done)

1. `npm run build` passes clean.
2. Browser-pane visual check of all 5 beats at 1280px and 375px — screenshots reviewed.
3. Reduced-motion mode spot-checked.
4. CV downloads; mailto and LinkedIn URLs correct.
5. Deployed to Vercel production URL (needs David to run `npm i -g vercel` + `vercel login` when we get there).

## Out of scope (v1)

Contact form backend, career timeline, personality/festival-photo section, blog, analytics, custom domain, Higgsfield-generated assets (v1 ships code-generated visuals in slots designed for later swap).

## Later (post-v1 ideas)

Higgsfield cinematic hero loop + per-project renders; custom domain; OG image per case study.
