# dev4aibots-site

The company website for **Dev4AIBots** — a Udyam-registered Indian micro
enterprise (UDYAM-GJ-29-0019103) building a two-app platform for local
businesses. Next.js (App Router) + TypeScript, minimal dependencies, custom
CSS — no UI framework, no heavy deps.

## Honesty policy (non-negotiable)

The site states plainly what is built and what is not — no status-label
system, no launch claims. We never imply traction, launch, customers,
revenue, funding, or functionality that does not exist. Company facts live
in [`lib/site.ts`](lib/site.ts) — a claim on a page must be traceable there.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npx tsc --noEmit # typecheck
npm run build    # production build
```

## Structure

- `app/` — routes: `/` `/product` `/open-source` `/about`
  `/contact`, plus `robots.ts` and `sitemap.ts`
- `components/` — Header, Footer, TwoAppDiagram (hand-built SVG)
- `lib/site.ts` — single source of truth for company facts
- `docs/startup-program-application.md` — program application pack
  (descriptions, Q&A, credit usage)
- `docs/technical-overview.md` — architecture write-up of holo-racer,
  the strongest open-source system

## Deployment

Deployment and domains are handled separately (Vercel). This repo is
build-only: `npm run build` must pass cleanly.
