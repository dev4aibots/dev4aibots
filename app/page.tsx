import type { Metadata } from "next";
import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import TwoAppDiagram from "@/components/TwoAppDiagram";
import PhoneMockup from "@/components/PhoneMockup";
import {
  ArrowRight,
  Users,
  Zap,
  MessageCircle,
  PhoneIcon,
  CalendarCheck,
} from "@/components/icons";
import { SITE, REPOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dev4AIBots — Branded customer apps for local businesses",
  description:
    "Dev4AIBots is a Udyam-registered Indian micro enterprise building a two-app platform: local businesses publish their own branded customer app with AI chatbots, bookings, and announcements. In development — honestly labeled.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dev4AIBots — Branded customer apps for local businesses",
    description:
      "A two-app platform that gives local businesses their own branded customer app. AI chatbots, one-click bookings, announcements — in development, honestly labeled.",
    url: SITE.domain,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Dev4AIBots — Branded customer apps for local businesses",
    description:
      "A two-app platform that gives local businesses their own branded customer app. In development — honestly labeled.",
  },
};

const FAQS = [
  {
    q: "What is Dev4AIBots?",
    a: "Dev4AIBots is a Udyam-registered Indian micro enterprise (UDYAM-GJ-29-0019103), founded by Varamal Devraj Kheraj and based in Bhatiya, Gujarat. It is building a two-app platform: a business app where local business owners customize their own branded customer app, and a free customer app where their customers join via a code, QR, or link to use AI chatbots, one-click appointment booking, announcements, and reviews. The platform is in development and has not launched.",
  },
  {
    q: "Is the platform launched?",
    a: "No. The two-app platform is in development: its repositories are not public yet and nothing is deployed. Dev4AIBots claims no funding, no revenue, and no customers. The company publishes per-feature status labels — Working, In development, Roadmap — on the Product page, updated when code ships.",
  },
  {
    q: "How do customers join a business's app?",
    a: "Each business gets a short business code, a QR card, and a shareable link. Customers enter the code or scan the QR in the free customer app — no marketplace account, no aggregator in between. The customer app is free forever.",
  },
  {
    q: "What will the business app cost?",
    a: "Pricing is not published yet. The plan is simple: the customer app stays free forever, and the business app runs on paid plans priced far below what a custom app or aggregator margins would cost a small business. Pricing will be published before any launch.",
  },
  {
    q: "Why should I trust an early-stage company?",
    a: "Check the verifiable record instead of the pitch: a published Udyam registration number, a public GitHub organization with real commit history, a deployed and playable game (holo-racer), and a site-wide honesty policy that labels every feature Working, In development, or Roadmap. Dev4AIBots has twice refused to present non-working products as launched — that refusal is documented policy.",
  },
  {
    q: "How can I reach Dev4AIBots?",
    a: "Write to hello@dev4aibots.com. The company is run by its solo founder, and every message is read by them. Expect a reply within a few business days.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* HERO — single offer, one primary CTA, product preview */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-split">
            <div className="hero-copy">
              <span className="section-label">
                dev4aibots · registered micro enterprise · india
              </span>
              <h1 id="hero-title">
                Every local business deserves its own customer app.
              </h1>
              <p className="lede">
                Dev4AIBots is building a two-app platform for shops, salons,
                and clinics: the owner publishes a branded customer app — AI
                chatbots, one-click booking, announcements, reviews — and
                customers join it free with a code or QR. No aggregator in
                between. The platform is{" "}
                <strong>in development</strong>; everything on this site is
                labeled for what it actually is.
              </p>
              <div className="hero-actions">
                <Link className="btn" href="/contact">
                  Talk to us about your business
                </Link>
                <a className="btn btn-ghost" href="#how">
                  How it works
                </a>
                <Link className="card-link" href="/engineering">
                  Engineering proof <ArrowRight size={16} />
                </Link>
              </div>
              <div className="hero-meta" aria-label="Company facts">
                <span className="meta-tag">
                  <span className="dot" aria-hidden="true" />
                  Udyam {SITE.udyam}
                </span>
                <span className="meta-tag">solo-founded</span>
                <span className="meta-tag">{SITE.location}</span>
                <span className="meta-tag">platform: in development</span>
              </div>
            </div>
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* DEFINITION — extractable answer passage */}
      <section className="section" aria-labelledby="what">
        <div className="container">
          <span className="section-label">the company, in one paragraph</span>
          <h2 id="what">What is Dev4AIBots?</h2>
          <div className="definition">
            <p>
              <span className="def-term">Dev4AIBots</span> is a
              Udyam-registered Indian micro enterprise (UDYAM-GJ-29-0019103),
              solo-founded by Varamal Devraj Kheraj in Bhatiya, Gujarat. It is
              building a two-app platform for local businesses: a paid
              business app where owners customize their own branded customer
              app, and a free customer app where their customers join via a
              code, QR, or link. The platform is in development — not launched,
              with no customers or revenue yet — and every feature is labeled
              Working, In development, or Roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION — split panel */}
      <section className="section" aria-labelledby="gap">
        <div className="container">
          <span className="section-label">problem → solution</span>
          <h2 id="gap">The gap, and what we are building into it.</h2>
          <div className="split">
            <div className="panel">
              <div className="panel-head">
                <span className="panel-icon" aria-hidden="true">
                  <Users size={20} />
                </span>
                <h3 style={{ margin: 0 }}>The problem</h3>
              </div>
              <ul>
                <li>
                  Repeat business for local shops runs on word of mouth,
                  WhatsApp groups, and walk-ins — none of it is a system the
                  owner controls.
                </li>
                <li>
                  Appointment books are paper or memory; missed slots and
                  no-shows cost real revenue.
                </li>
                <li>
                  Customers ask the same questions by phone — hours, prices,
                  availability — burning the owner&apos;s day.
                </li>
                <li>
                  Hiring a developer for a custom app is far beyond a small
                  business budget; agencies quote enterprise prices for
                  brochureware.
                </li>
              </ul>
            </div>
            <div className="panel raised">
              <div className="panel-head">
                <span className="panel-icon" aria-hidden="true">
                  <Zap size={20} />
                </span>
                <h3 style={{ margin: 0 }}>The solution</h3>
              </div>
              <ul>
                <li>
                  <strong>Business app (paid plans):</strong> the owner
                  customizes a customer app in their own branding — theme,
                  services, announcements.
                </li>
                <li>
                  <strong>Customer app (free forever):</strong> customers join
                  a business via code, QR, or link — no marketplace in between.
                </li>
                <li>
                  <strong>Built-in capabilities:</strong> AI chatbots answering
                  routine questions, one-click appointment booking,
                  announcements, local reviews, automations.
                </li>
                <li>
                  <strong>Direct relationship:</strong> the business owns the
                  channel to its own customers.
                </li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <Link href="/product" className="card-link">
              The full product, with per-feature status <ArrowRight size={16} />
            </Link>
          </p>
        </div>
      </section>

      {/* HOW IT WORKS — sequential workflow */}
      <section className="section" aria-labelledby="how">
        <div className="container">
          <span className="section-label">how it works</span>
          <h2 id="how">Two apps, one direct channel.</h2>
          <p className="lede">
            The owner works in the business app; the customer lives in the
            customer app. The platform connects them with a simple join flow.
          </p>
          <TwoAppDiagram />
          <ol className="workflow">
            <li>
              <span className="step-node" aria-hidden="true">
                01
              </span>
              <div className="step-body">
                <h3>
                  The owner sets up their business app{" "}
                  <StatusBadge status="roadmap" />
                </h3>
                <p>
                  Theme and branding, services and prices, announcements —
                  configured once, updated anytime.
                </p>
              </div>
            </li>
            <li>
              <span className="step-node" aria-hidden="true">
                02
              </span>
              <div className="step-body">
                <h3>
                  The platform issues a business code and QR{" "}
                  <StatusBadge status="roadmap" />
                </h3>
                <p>
                  Each business gets a short code, a QR card, and a shareable
                  link — printed at the counter or sent by message.
                </p>
              </div>
            </li>
            <li>
              <span className="step-node" aria-hidden="true">
                03
              </span>
              <div className="step-body">
                <h3>
                  Customers join free and stay connected{" "}
                  <StatusBadge status="roadmap" />
                </h3>
                <p>
                  They chat with the business&apos;s AI assistant, book
                  appointments in one tap, read announcements, and leave
                  reviews — inside the business&apos;s own branded app.
                </p>
              </div>
            </li>
            <li>
              <span className="step-node" aria-hidden="true">
                04
              </span>
              <div className="step-body">
                <h3>
                  The business sees everything flow back{" "}
                  <StatusBadge status="roadmap" />
                </h3>
                <p>
                  Bookings, reviews, and messages land in the business app —
                  the direct customer relationship, owned end to end.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* PROOF — asymmetric bento */}
      <section className="section" aria-labelledby="proof">
        <div className="container">
          <span className="section-label">proof, not promises</span>
          <h2 id="proof">What we have actually built.</h2>
          <p className="lede">
            No funding, no revenue, no customers yet — we state that plainly.
            What we can show is real engineering, in public repositories, with
            production deployments.
          </p>
          <div className="bento">
            <article className="bento-main">
              <StatusBadge status="working" />
              <h3>holo-racer</h3>
              <p>
                A webcam-controlled 3D racing game: Vite + TypeScript +
                Three.js, with MediaPipe hand tracking running in a Web
                Worker, geometric gesture derivation, filtering and debounce
                stages, and production deploys. Deployed and playable in the
                browser — our strongest engineering artifact.
              </p>
              <div className="stat-row">
                <div className="stat">
                  <div className="num">60fps</div>
                  <div className="cap">rendering target</div>
                </div>
                <div className="stat">
                  <div className="num">worker</div>
                  <div className="cap">vision off the main thread</div>
                </div>
                <div className="stat">
                  <div className="num">live</div>
                  <div className="cap">production deploys on Vercel</div>
                </div>
              </div>
              <div className="bento-foot">
                <a
                  className="card-link"
                  href={REPOS.holoRacerLive}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play the live demo <ArrowRight size={16} />
                </a>
                <a
                  className="card-link"
                  href={REPOS.holoRacer}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository <ArrowRight size={16} />
                </a>
              </div>
            </article>
            <div className="bento-side">
              <article className="bento-cell">
                <StatusBadge status="development" />
                <h3>Pramaan</h3>
                <p>
                  A self-hosted, multi-modal RAG evidence engine in Python:
                  authorization before retrieval, hybrid vector + keyword
                  search with reranking, and claim verification.
                </p>
                <div className="bento-foot">
                  <a
                    className="card-link"
                    href={REPOS.pramaan}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository <ArrowRight size={16} />
                  </a>
                </div>
              </article>
              <article className="bento-cell">
                <StatusBadge status="working" />
                <h3>Open source, honestly labeled</h3>
                <p>
                  Two real projects; the rest are learning builds from
                  coursework — labeled exactly that way.
                </p>
                <div className="bento-foot">
                  <Link className="card-link" href="/open-source">
                    Browse the repos <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CHANGES — outcome-led, normal business section */}
      <section className="section" aria-labelledby="what-changes">
        <div className="container">
          <span className="section-label">what changes</span>
          <h2 id="what-changes">Less phone tag. More repeat customers.</h2>
          <p className="lede">
            Most local businesses run on calls and messages: the same
            questions about hours and prices, bookings lost to a missed call,
            offers that never reach the people who would act on them.
            Dev4AIBots gives each business its own direct channel to its
            customers.
          </p>
          <div className="split">
            <div className="panel">
              <div className="panel-head">
                <span className="panel-icon" aria-hidden="true">
                  <PhoneIcon size={20} />
                </span>
                <h3 style={{ margin: 0 }}>Today</h3>
              </div>
              <ul>
                <li>Customers call for hours, prices, and availability.</li>
                <li>Bookings depend on someone picking up the phone.</li>
                <li>
                  Offers go out on social feeds your customers may never see.
                </li>
              </ul>
            </div>
            <div className="panel">
              <div className="panel-head">
                <span className="panel-icon" aria-hidden="true">
                  <CalendarCheck size={20} />
                </span>
                <h3 style={{ margin: 0 }}>With Dev4AIBots</h3>
              </div>
              <ul>
                <li>
                  An AI assistant answers routine questions instantly, inside
                  your business&apos;s own app.
                </li>
                <li>Customers book appointments in one tap, anytime.</li>
                <li>
                  Announcements reach your customers directly — no algorithm
                  in between.
                </li>
              </ul>
            </div>
          </div>
          <div className="note-box">
            <strong>Simple pricing.</strong> The customer app is free for your
            customers, forever. Businesses choose a plan for their branded
            app — details coming as we approach launch.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" aria-labelledby="faq">
        <div className="container">
          <span className="section-label">questions, answered honestly</span>
          <h2 id="faq">Frequently asked questions.</h2>
          <div className="faq">
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q}
                  <span className="faq-icon" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section" aria-labelledby="founder">
        <div className="container">
          <span className="section-label">founder</span>
          <h2 id="founder">Built by one person, accountable to everyone.</h2>
          <div className="founder-strip">
            <div className="founder-mark" aria-hidden="true">
              VK
            </div>
            <div>
              <h3 style={{ margin: "0 0 0.35rem" }}>{SITE.founder}</h3>
              <p style={{ margin: 0 }}>
                Solo founder of Dev4AIBots, based in {SITE.location}. The
                background is documented through public work — the holo-racer
                and Pramaan repositories — not through titles.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "1.25rem" }}>
            <Link href="/about" className="card-link">
              About the founder and the company <ArrowRight size={16} />
            </Link>
          </p>
        </div>
      </section>

      {/* CTA — 1 primary, 1 secondary */}
      <section className="section" aria-labelledby="cta">
        <div className="container">
          <div className="cta-band">
            <h2 id="cta">Talk to us about the platform.</h2>
            <p>
              We are early and honest about it. If you run a local business
              and want your own customer app, or you want to follow the build
              — write to us.
            </p>
            <div className="cta-actions">
              <Link className="btn" href="/contact">
                Contact us
              </Link>
              <a className="btn btn-ghost" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
