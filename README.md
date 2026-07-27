# Portfolio — Vinícius Machado

My personal portfolio and the home for the projects I ship.

**Live:** https://vinimachadosantana.is-a.dev

---

## Tech stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Motion (Framer Motion)
- **Icons:** lucide-react
- **Testing:** Vitest + React Testing Library
- **CI:** GitHub Actions — lint, type-check, test, build on every PR
- **CD:** Vercel — auto-deploy on merge to `main`, preview deploy per PR

## Architecture

- src/
- app/ # routing, layout, global styles (App Router)
- components/ # one component per page section
- lib/ # typed content model (types.ts) + content (data.ts)
- tests/ # specs
- .github/ # CI workflow + PR template

## Key decisions

- **Content separated from markup.** All copy, links, and project data live in `lib/data.ts`, annotated against types in `lib/types.ts`. Copy changes never touch component code, and TypeScript guards every entry.
- **Server Components by default.** Only components that need interactivity or animation opt into `"use client"` — the navbar (mobile menu) and the animated sections.
- **Accessibility built in.** Semantic landmarks, `aria-label`s on icon-only links, visible focus styles, and a `prefers-reduced-motion` override that disables all animation.
- **Tested where it matters.** Specs cover the content model, interactive behavior (mobile menu toggle), and a full-page render smoke test. `IntersectionObserver` is stubbed in the test setup since jsdom doesn't implement it.
- **Shipped before it was polished.** Deployment and CI were wired up before any UI, so every change since has been built behind a green pipeline and a preview deploy.

## Run locally

```bash
npm install
npm run dev
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run test` | Run tests in watch mode |
| `npm run test:run` | Run tests once |
| `npm run type-check` | TypeScript check, no emit |
| `npm run lint` | ESLint |
| `npm run verify` | Everything CI runs, in order |