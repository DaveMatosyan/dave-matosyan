# David Matosyan Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy the one-page midnight-cinematic portfolio defined in `docs/superpowers/specs/2026-08-03-david-portfolio-design.md`.

**Architecture:** Static Next.js App Router one-pager. All copy in `lib/content.ts`; presentational components per page beat (Hero, Marquee, HowIWork, Work, Contact); tiny motion primitives (`Reveal`, `Magnetic`) shared across sections; global chrome (grain, smooth scroll) in layout. No server code, no data fetching.

**Tech Stack:** Next.js (latest, App Router, TS), Tailwind v4, `motion`, `lenis`, next/font (Space Grotesk, JetBrains Mono, Geist).

## Global Constraints

- Colors exactly per spec: page `#0A0A0B`, surface `#111113`, text `#F4F4F0`, muted `#9B9B94`, hairline `#26262A`, accent `#D6FF3F`, ink-on-accent `#1A2000`.
- Copy comes **verbatim from the spec** (single source of truth) into `lib/content.ts` — no rewording during implementation, no invented metrics.
- First-person voice; mono labels UPPERCASE tracked wide.
- Only two deps beyond scaffold: `motion`, `lenis`.
- Every animated element must degrade under `prefers-reduced-motion` (fade-only or static).
- All components presentational; only files that use hooks/motion get `"use client"`.
- Verification per task = `npm run build` (or `npx tsc --noEmit` for pure-TS tasks) + browser-pane screenshot for visual tasks. Commit after every task.
- Links: mailto `davidmatosyanwork@gmail.com`; LinkedIn `https://linkedin.com/in/david-matosyan-18a02b238`; CV at `/David_Matosyan_CV.pdf`.

---

### Task 1: Scaffold, deps, assets

**Files:**
- Create: Next.js scaffold at repo root (`app/`, `package.json`, etc.)
- Create: `public/david.jpg`, `public/David_Matosyan_CV.pdf`

**Interfaces:**
- Produces: running scaffold; assets at `/david.jpg` and `/David_Matosyan_CV.pdf`.

- [ ] **Step 1: Scaffold into the repo root** (`docs/` and `.git` are on create-next-app's allowlist; it skips git-init inside an existing repo)

```bash
npx -y create-next-app@latest . --ts --tailwind --eslint --app --no-src-dir --import-alias "@/*" --turbopack
```

Fallback if it refuses the non-empty dir: scaffold into the scratchpad dir, then `cp -R` everything except `.git` into the repo root.

- [ ] **Step 2: Install motion deps**

```bash
npm i motion lenis
```

- [ ] **Step 3: Copy assets**

```bash
cp "/Users/dev/Downloads/46ae81c2-c281-4ee1-9d48-6b576c9d9b25.jpeg" public/david.jpg
cp "/Users/dev/Downloads/CV_David_Matosyan_v2.pdf" public/David_Matosyan_CV.pdf
```

- [ ] **Step 4: Verify** — create `.claude/launch.json` (npm run dev, port 3000), `preview_start`, confirm default Next page renders.

- [ ] **Step 5: Commit** — `chore: scaffold Next.js app with motion deps and assets`

### Task 2: Foundation — tokens, fonts, chrome, motion primitives

**Files:**
- Modify: `app/globals.css`, `app/layout.tsx`
- Create: `components/Grain.tsx`, `components/SmoothScroll.tsx`, `components/Reveal.tsx`, `components/Magnetic.tsx`

**Interfaces:**
- Produces: Tailwind color utilities `ink/surface/cream/fog/line/lime/lime-ink`; font utilities `font-display`, `font-mono`, `font-sans`; `<Reveal delay?: number>` (whileInView rise+fade wrapper); `<Magnetic strength?: number>` (pointer-attracted wrapper); `.label` CSS class (mono uppercase tracked).

- [ ] **Step 1: globals.css** — Tailwind v4 theme + base:

```css
@import "tailwindcss";
@theme {
  --color-ink: #0A0A0B; --color-surface: #111113; --color-cream: #F4F4F0;
  --color-fog: #9B9B94; --color-line: #26262A; --color-lime: #D6FF3F;
  --color-lime-ink: #1A2000;
  --font-display: var(--font-space-grotesk); --font-mono: var(--font-jetbrains);
  --font-sans: var(--font-geist);
}
html { background: #0A0A0B; color: #F4F4F0; scroll-behavior: smooth; }
::selection { background: #D6FF3F; color: #1A2000; }
.label { font-family: var(--font-jetbrains); text-transform: uppercase; letter-spacing: .18em; font-size: 11px; }
@keyframes marquee { to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } .marquee-track { animation: none !important; } }
```

- [ ] **Step 2: layout.tsx** — load `Space_Grotesk`, `JetBrains_Mono`, `Geist` via next/font with CSS variables; body `bg-ink text-cream font-sans antialiased`; mount `<Grain/>` and `<SmoothScroll/>`; placeholder metadata (final SEO in Task 7).

- [ ] **Step 3: Grain.tsx** — fixed inset-0 pointer-events-none div, z-50, opacity ~0.055, `backgroundImage` = inline SVG feTurbulence data-URI (fractalNoise, baseFrequency .9, 128px tile).

- [ ] **Step 4: SmoothScroll.tsx** — `"use client"`; useEffect: if `matchMedia("(prefers-reduced-motion: reduce)")` matches, skip; else `new Lenis({ lerp: 0.1 })` + rAF loop; destroy on cleanup. Renders null.

- [ ] **Step 5: Reveal.tsx / Magnetic.tsx**

```tsx
"use client";
import { motion, useReducedMotion } from "motion/react";
export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
```

`Magnetic`: wraps children in a `motion.div` with `useSpring`-driven x/y (stiffness ~150, damping ~15); on pointermove translate toward cursor capped at ±8px, reset on leave; inert when `useReducedMotion()`.

- [ ] **Step 6: Verify** — temp heading on page in `font-display` + `.label` line; build passes; screenshot shows dark page, grain, fonts.

- [ ] **Step 7: Commit** — `feat: design tokens, fonts, grain, smooth scroll, motion primitives`

### Task 3: Content module

**Files:**
- Create: `lib/content.ts`

**Interfaces:**
- Produces (consumed by Tasks 4–6):

```ts
export const hero: { eyebrow: string; location: string; nameLines: [string, string]; line: string };
export const marquee: string[];   // skill terms, rendered twice for loop
export const how: { intro: string; steps: { num: string; title: string; body: string }[]; closer: string };
export type Motif = "streams" | "ledger" | "lattice" | "ticket";
export type Project = { index: string; title: string; role: string; problem: string; built: string; impact: string; chips: string[]; motif: Motif };
export const projects: Project[];  // Flux, EasyPay, Vault, Ticketing — spec order
export const contact: { badge: string; line: string; email: string; linkedin: string; languages: string; footer: string };
```

- [ ] **Step 1:** Fill every field **verbatim from spec sections 1–5** (hero line, 3 steps, closer, 4 projects' Problem/Built/Impact, chips, contact copy, footer line).
- [ ] **Step 2: Verify** — `npx tsc --noEmit` passes.
- [ ] **Step 3: Commit** — `feat: site copy as typed content module`

### Task 4: Hero + Marquee

**Files:**
- Create: `components/Hero.tsx`, `components/Marquee.tsx`
- Modify: `app/page.tsx` (compose sections as they land)

**Interfaces:**
- Consumes: `hero`, `marquee` from content; `Magnetic`; tokens.
- Produces: `<Hero/>`, `<Marquee/>`; section ids `#work`, `#contact` used by CTAs.

- [ ] **Step 1: Hero.tsx** (`"use client"`) — full-viewport (`min-h-svh`) flex column:
  - Cursor glow: absolute inset-0 overflow-hidden; a ~640px radial `#D6FF3F` blob at 5% alpha, `blur-3xl`, springs toward pointer (motion values; static center under reduced motion).
  - Top row: eyebrow + location as `.label` text-fog, hairline underneath.
  - Name: two `overflow-hidden` line wrappers; inner `motion.span` y `110%→0`, stagger 0.12s on load; `font-display font-bold uppercase tracking-tighter` `text-[clamp(4.5rem,14vw,9.5rem)] leading-[0.9]`.
  - Positioning line: max-w-xl text-fog, the word "can't" wrapped in `text-lime`.
  - Headshot: next/image `/david.jpg`, ~112px, `rounded-full grayscale contrast-105 hover:grayscale-0 transition` with lime ring on hover.
  - CTAs (each in `Magnetic`): "View work" lime pill (`bg-lime text-lime-ink rounded-full px-6 py-3` hover slight scale) → `#work`; "Download CV" hairline-border pill → `/David_Matosyan_CV.pdf` `download`; "LinkedIn ↗" text link, external.
  - Scroll cue: `.label` "SCROLL" + animated ↓, bottom center.
- [ ] **Step 2: Marquee.tsx** — border-y hairline strip; `.marquee-track` flex w-max `animation: marquee 40s linear infinite`, content = `marquee` terms joined with `·` rendered twice, `aria-hidden` on the duplicate; `.label` text-fog py-4.
- [ ] **Step 3: Verify** — build passes; screenshot: name animates in, glow follows cursor, marquee loops seamlessly, CV link downloads.
- [ ] **Step 4: Commit** — `feat: hero and skills marquee`

### Task 5: How I work + Work panels

**Files:**
- Create: `components/HowIWork.tsx`, `components/Work.tsx`, `components/motifs.tsx`

**Interfaces:**
- Consumes: `how`, `projects`, `Motif` from content; `Reveal`.
- Produces: `<HowIWork/>`, `<Work/>` (renders `id="work"`); `motifs.tsx` exports `Motif → JSX` map of decorative SVGs.

- [ ] **Step 1: HowIWork.tsx** — section `px-6 md:px-16 py-32 max-w-6xl mx-auto`:
  - `.label` text-lime section marker `01 — HOW I WORK`; intro as `text-2xl md:text-4xl font-display` in `Reveal`.
  - Three rows, hairline-divided: huge fog index (`font-display text-6xl`), title (`text-3xl font-display`), body (text-fog max-w-lg); each in `Reveal` with stepped delay; row hover: index turns lime.
  - Closer line italic-free, `text-lime` accent on "This site is the proof".
- [ ] **Step 2: motifs.tsx** — four small decorative SVG components (`streams`: 5 drifting horizontal bezier lines; `ledger`: dotted grid with a lit column; `lattice`: diagonal key/lock line lattice; `ticket`: big rounded rect with perforation circles). All `stroke`/`fill` from tokens: line + lime at low opacity, `aria-hidden`.
- [ ] **Step 3: Work.tsx** — `id="work"`; heading row (`.label` `02 — SELECTED WORK`); then per project a sticky-stack panel:
  - Wrapper: `div` per project `h-[110vh]`; inner panel `sticky top-0 min-h-svh bg-ink border-t border-line px-6 md:px-16 py-24 flex flex-col justify-center` — later panels naturally slide over earlier ones.
  - Panel content (staggered `Reveal`s): mono index text-lime; title `font-display uppercase text-[clamp(2.5rem,7vw,5.5rem)] leading-none`; role `.label` text-fog; three rows PROBLEM/BUILT/IMPACT — `.label` key + text; chips row (hairline-border rounded-full `.label` px-3 py-1); motif SVG positioned right/background at low opacity.
- [ ] **Step 4: Verify** — build; screenshots: sticky stacking works scrolling through all 4, motifs distinct, copy matches spec.
- [ ] **Step 5: Commit** — `feat: how-i-work section and sticky work panels`

### Task 6: Contact + footer

**Files:**
- Create: `components/Contact.tsx`, `components/Clock.tsx`

**Interfaces:**
- Consumes: `contact` from content; `Magnetic`, `Reveal`.
- Produces: `<Contact/>` with `id="contact"`, includes footer.

- [ ] **Step 1: Clock.tsx** — `"use client"`; renders `--:--:--` until mounted, then 1s interval `Intl.DateTimeFormat("en-GB",{ timeZone:"Asia/Yerevan", hour12:false, hour:"2-digit", minute:"2-digit", second:"2-digit" })`; `.label` text-fog `YEREVAN HH:MM:SS`.
- [ ] **Step 2: Contact.tsx** — section `border-t border-line py-32 px-6 md:px-16 max-w-6xl mx-auto`:
  - Badge: inline-flex hairline pill, pulsing lime dot (`animate-ping` twin + solid dot; static under reduced motion) + `.label` badge text.
  - `contact.line` as `text-3xl md:text-5xl font-display max-w-3xl`.
  - Email as the hero CTA of the section: huge `font-display underline decoration-lime underline-offset-8 hover:text-lime transition` mailto, wrapped in `Magnetic`.
  - Row: LinkedIn ↗ pill, Download CV pill (same styles as hero), languages `.label` text-fog, `<Clock/>`.
  - Footer: hairline-top row — `© 2026 David Matosyan` and `contact.footer`, `.label` text-fog.
- [ ] **Step 3: Verify** — build; screenshot; clock ticks Yerevan time; mailto href exact.
- [ ] **Step 4: Commit** — `feat: contact section with live Yerevan clock and footer`

### Task 7: SEO, icons, OG, reduced-motion audit

**Files:**
- Modify: `app/layout.tsx`
- Create: `app/icon.svg`, `app/opengraph-image.tsx`
- Delete: scaffold leftovers (`app/favicon.ico` if superseded, unused template assets in `public/`)

**Interfaces:**
- Consumes: nothing new. Produces: final metadata.

- [ ] **Step 1: Metadata** — title `David Matosyan — Backend Engineer × AI-Native Builder`; description from hero line; `metadataBase` `https://davidmatosyan.vercel.app`; OpenGraph + Twitter card `summary_large_image`; viewport export with `themeColor: "#0A0A0B"`.
- [ ] **Step 2: icon.svg** — 64px rounded square `#0A0A0B`, `DM` in lime Space-Grotesk-esque bold path/text.
- [ ] **Step 3: opengraph-image.tsx** — next/og `ImageResponse` 1200×630: ink background, lime eyebrow `BACKEND ENGINEER × AI-NATIVE BUILDER`, giant `DAVID MATOSYAN`, fog footer line with site URL.
- [ ] **Step 4: Reduced-motion audit** — toggle emulation; confirm: no Lenis, reveals fade-only, marquee static, glow static, ping dot static.
- [ ] **Step 5: Verify** — `npm run build` clean (lint + types).
- [ ] **Step 6: Commit** — `feat: metadata, favicon, OG image; reduced-motion audit`

### Task 8: Full visual verification + fixes

- [ ] **Step 1:** Browser pane at 1280×800: full-page scroll-through screenshots of all 5 beats; check type scale, spacing rhythm, grain visibility, sticky behavior, hover states.
- [ ] **Step 2:** 375×812: hero fits, name doesn't overflow, panels readable, CTAs tappable.
- [ ] **Step 3:** Click-through: View work scrolls, CV downloads the real PDF, LinkedIn opens profile URL, mailto opens with correct address.
- [ ] **Step 4:** Fix everything found; re-screenshot until clean.
- [ ] **Step 5: Commit** — `fix: visual QA pass at desktop and mobile widths`

### Task 9: Deploy to Vercel

- [ ] **Step 1:** Confirm `vercel` CLI availability; if missing, David runs `npm i -g vercel` then `vercel login` (his auth — I never enter credentials).
- [ ] **Step 2:** `vercel --yes` (preview) → verify preview URL renders.
- [ ] **Step 3:** `vercel --prod` → live at `davidmatosyan.vercel.app` (or assigned URL; rename project in dashboard if needed).
- [ ] **Step 4:** Load production URL in browser pane; confirm OG tags via view-source.
- [ ] **Step 5: Commit** — `chore: deployed v1` (+ note prod URL in README).

## Self-review

- **Spec coverage:** 5 beats → Tasks 4–6; tokens/fonts/grain/glow → Task 2; copy verbatim → Task 3; motion + reduced-motion → Tasks 2, 4–7; SEO/OG/favicon → Task 7; verification → Task 8; deploy → Task 9. Out-of-scope items absent. ✓
- **Placeholders:** none — every step names exact files, classes, values, or commands. ✓
- **Type consistency:** `Motif`/`Project` defined once in Task 3, consumed by Tasks 5's `motifs.tsx` map; primitives named `Reveal`/`Magnetic` consistently. ✓
