# Dev4AIBots — Startup Program Application Pack

Prepared 2026-10-07 · site rebuilt 2026-10-08 (5 pages: /, /product,
/open-source, /about, /contact). Every claim below is limited
to verified facts.
Non-negotiable rule: never imply traction, launch, customers, revenue,
funding, or functionality that does not exist.

---

## 1-line description

Dev4AIBots is a registered Indian micro-enterprise building a two-app platform that gives local businesses their own branded customer app.

## 50-word description

Dev4AIBots is a Udyam-registered Indian micro-enterprise building a two-app platform for local businesses. Owners customize and publish their branded customer app — announcements, appointment booking, AI chatbots, reviews — while customers join free via code or QR link. Solo-founded by Varamal Devraj Kheraj; platform in development; open-source
work published on GitHub.

## 100-word description

Dev4AIBots is a registered micro-enterprise building a two-app platform that gives local businesses their customer app. The business app lets owners customize themes, publish announcements, and manage appointment bookings on paid plans; the customer app is free forever, joined via a code, QR, or link, with AI chatbots answering questions, one-click booking, and reviews. Target users are shops, salons, and clinics that depend on aggregators and group chats. Status: company registered; platform in development; no funding, revenue, or customers yet. Open source: holo-racer, Pramaan, and four tooling repositories — public on GitHub, described for what they are.

---

## Problem

Local businesses — neighbourhood shops, salons, clinics — reach repeat
customers through channels they do not own: aggregators that take margin,
marketplaces that set the terms, and informal WhatsApp groups that are not
a system at all. Appointment books are paper or memory; missed slots cost
real revenue. Customers phone in the same routine questions (hours, prices,
availability), burning the owner's day. Commissioning a custom app is far
beyond a five-person business's budget. The result: the businesses with the
thinnest margins rent their most valuable asset — the direct customer
relationship.

## Solution

Give each business its own direct channel instead of another marketplace.
One branded customer app per business, published by the owner from a
business app, joined free by customers via a code, QR, or link. The channel
carries what a local business actually needs: AI chatbots that answer
routine questions, one-click appointment booking, announcements, local
reviews, and automations. The business owns the relationship; Dev4AIBots
operates the platform.

## Product

Two applications, one platform:

- **Business app (paid plans)** — the owner's console: customize the
  customer app's theme and branding, publish announcements, manage services
  and bookings, read reviews, configure automations.
- **Customer app (free forever)** — the customer's side: join a business via
  code/QR/link, chat with that business's AI assistant, book appointments in
  one tap, receive announcements, leave reviews.

Status: **in development**. The Product page describes where each feature
stands, and that description changes only when code ships. Public
repositories for the platform are not yet published; no demo exists yet.

## Target users

Primary: neighbourhood shops, salons/parlours, and small clinics in India —
businesses with repeat local customers, appointment or walk-in driven,
currently coordinated by phone, WhatsApp, or paper. Secondary (later):
any local service business that wants a direct customer channel without
building software.

## Current status (matches the rebuilt site, 2026-10-08)

- **Company:** registered. Dev4AIBots is a Udyam-registered Micro enterprise
  (UDYAM-GJ-29-0019103), incorporated 13/06/2026, registered 14/06/2026,
  NIC 62 (computer programming, consultancy and related activities),
  based in Bhatiya, Devbhoomi Dwarka, Gujarat, India.
- **Platform:** in development. Native Android (Kotlin, MVI, Clerk auth);
  MVPs implemented and integration-tested for onboarding, dashboard,
  announcements, services/slots, bookings, AI chatbot (rule-based FAQ,
  honestly labeled), and code/QR join — public repos and deployment pending.
  Reviews and automations are planned, not yet started. Source of truth:
  dev4aibots.com/product.
- **holo-racer:** open-source browser game with a real-time computer-vision
  control pipeline.
- **Pramaan:** open-source Python RAG evidence engine, real repo, active
  development.
- **Traction:** none claimed — see below.

## Technical differentiation

1. **Two-app architecture, not another marketplace.** Incumbents aggregate
   demand and intermediate the relationship; we sell the business its own
   channel. The moat, if one develops, is per-business data and habit —
   customers inside the business's own app — not network effects we rent.
2. **AI as the default interface.** Per-business chatbots grounded in that
   business's own services, hours, and prices — routine questions answered
   without the owner's time. This is where the Claude API fits (see §11).
3. **Demonstrated ability to ship real systems solo.** holo-racer is a
   real-time computer-vision pipeline (MediaPipe in a Web Worker, gesture
   filtering, Three.js rendering) deployed to production; Pramaan is an
   authorization-first RAG architecture. Both public, both inspectable.
4. **Honesty as process.** Plain-language status statements on the site,
   public repos, measured claims only. For a program evaluating early
   founders, the verifiable record is the pitch.

## Traction — verified facts only

- Udyam-registered Micro enterprise: UDYAM-GJ-29-0019103 (incorporated
  13/06/2026, registered 14/06/2026).
- Public GitHub organization: github.com/dev4aibots — real repositories
  with real commit history (holo-racer, Pramaan).
- holo-racer deployed to production and publicly playable at
  https://holo-racer.vercel.app.
- Operational contact: hello@dev4aibots.com.
- **Explicitly not claimed:** no funding, no revenue, no customers, no
  employees, no partnerships, no certifications, no launched product.

## Founder

**Varamal Devraj Kheraj** — solo founder, based in Bhatiya, Gujarat, India.
Background is documented through public work (the holo-racer and Pramaan
repositories) rather than titles: no degrees claimed, no past employers
claimed, no roles claimed that cannot be verified in a repository. Runs
engineering, product, and support personally.

## Why Claude — real engineering reasons

1. **Claude API — the product's AI layer.** The platform's per-business
   chatbots need strong instruction-following, low hallucination rates, and
   multilingual quality (English/Hindi/Gujarati for the target market).
   Planned uses: (a) per-business customer chatbots, grounded via RAG over
   that business's services/prices/hours; (b) announcement drafting
   assistance inside the business app; (c) automated claim-verification
   passes in Pramaan's eval pipeline. Not a chatbot wrapper — grounded Q&A
   over each business's own data, with usage metering per business from day
   one.
2. **Claude Code — solo-developer velocity.** Dev4AIBots is one person.
   Claude Code's agentic coding — multi-file edits, test generation,
   repo-scale refactoring — is the difference between a solo founder
   shipping like a small team and shipping like one person. Already the
   proven pattern: holo-racer was built with heavy AI-assisted development.
   Expected to be the primary credit consumer during the build phase
   (business app, customer app, backend services, plus the evaluation
   harnesses that keep claims on the site honest).
3. **Evaluation discipline.** The company's honesty policy requires measured
   claims; Claude as an evaluation judge (rubric-graded outputs, RAGAS-style
   claim checks in Pramaan) fits the existing eval harness rather than
   replacing it.

## How Claude API and Claude Code would be used

- **Claude Code:** day-to-day construction of the platform — business app,
  customer app, backend services — plus test generation and the evaluation
  harnesses that keep claims on the site honest. Expected to be the primary
  credit consumer during the build phase.
- **Claude API:** (a) per-business customer chatbots, grounded via RAG over
  that business's services/prices/hours; (b) announcement drafting
  assistance inside the business app; (c) automated claim-verification
  passes in Pramaan's eval pipeline. All product calls scoped per business
  with usage metering from day one.

## Expected credit impact

Estimates, labeled as such — actuals depend on build scope and pilot count:

- **Build phase (Claude Code):** the dominant cost. A solo founder building
  two apps plus backend agenticly: expect high but bounded usage, roughly
  comparable to a 2–3 person team's AI-assisted output. Credits directly
  convert to shipped features and tests.
- **Product phase (Claude API):** per-business chatbots are low-volume,
  short-context, grounded Q&A — estimated single-digit USD per active
  business per month at pilot scale, before any optimization (caching,
  smaller models for routine intents). Multilingual support is a
  requirement, not a stretch goal, for the Indian local-business market.
- Credits do not fund marketing, salaries, or infrastructure — 100% goes to
  engineering velocity and product AI.

## Proof links

- Company site (this application pack's source): https://dev4aibots.com
- holo-racer live demo: https://holo-racer.vercel.app
- holo-racer repo: https://github.com/dev4aibots/holo-racer
- Pramaan repo: https://github.com/dev4aibots/Pramaan
- GitHub org: https://github.com/dev4aibots
- Contact: hello@dev4aibots.com

---

## Reviewer Q&A — honest answers

**1. Is the product launched?**
No. The two-app platform is in development; its public repositories are not
yet published and no demo exists. The site's Product page describes where
each feature stands, so this is unambiguous.

**2. Do you have customers, revenue, or funding?**
No to all three. We state this explicitly rather than omitting it.

**3. What is actually built and working today?**
holo-racer — a deployed, playable browser game with a real-time vision
pipeline. Pramaan — a real Python RAG codebase in active development. The
company itself — registered and operating. Everything else is in development
or roadmap.

**4. Your GitHub has several "production system" repos. Are they real?**
Two are real projects (holo-racer, Pramaan). The rest are course/tutorial
reference builds, and our Open Source page labels them exactly that way.
We will not present scaffolds as production systems.

**5. Who is the team?**
One person: the founder. No employees, no co-founders, no contractors at
this time.

**6. Why will a small business pay for this?**
The value proposition: a direct, branded customer channel for less than
the margin currently lost to aggregators and missed appointments. Honest
caveat: willingness to pay is not yet validated — that validation is the
next milestone after the MVP, via pilot businesses.

**7. What is the biggest technical risk?**
Per-business AI chatbots that stay grounded and cheap at small-business
price points. Mitigation: RAG over the business's own data only,
conservative abstention, usage metering per business, and model-tiering
(routine intents on smaller models) — architecture planned before scale.

**8. How exactly would you spend Claude credits?**
~70% Claude Code during build (two apps + backend + tests + eval
harnesses); ~30% Claude API as the product's AI layer matures
(per-business chatbots, drafting assistance, eval judging). Zero to
non-engineering uses.

**9. What does success look like in 12 months?**
Targets, not promises: platform MVP with pilot local businesses running
their own branded customer apps; the site's feature list updated as code
ships; chatbot quality measured, not asserted. The honest
version of this answer is also the plan.

**10. Why should a program back a solo founder with no traction?**
Because the verifiable record — registered company, public repos, deployed
production system, and a written honesty policy we have already refused to
break under pressure — is a stronger early signal than a pitch deck. The
ask is engineering leverage (API + Code), which converts directly into the
one thing missing: the product.
