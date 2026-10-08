import type { Metadata } from "next";
import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import TwoAppDiagram from "@/components/TwoAppDiagram";
import { ArrowRight, ShieldCheck } from "@/components/icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product",
  description:
    "The Dev4AIBots two-app platform: a business app for owners and a free customer app for their customers. Business app vs customer app compared; every feature honestly labeled — in development or roadmap.",
  alternates: { canonical: "/product" },
  openGraph: {
    title: "Product · Dev4AIBots",
    description:
      "Two apps, one direct channel: the business app (paid plans) and the customer app (free forever). Every feature honestly labeled.",
    url: `${SITE.domain}/product`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Product · Dev4AIBots",
    description:
      "Two apps, one direct channel. Every feature honestly labeled: working, in development, or roadmap.",
  },
};

type Row = {
  feature: string;
  app: string;
  status: "working" | "development" | "roadmap";
  note: string;
};

const FEATURES: Row[] = [
  {
    feature: "Business app (owner console)",
    app: "Business",
    status: "development",
    note: "MVP implemented and verified: onboarding, dashboard, announcements, services/slots, bookings. Public repo + deployment pending.",
  },
  {
    feature: "Theme customization",
    app: "Business",
    status: "development",
    note: "MVP: owner sets brand color + logo text; customer app renders in the business theme. Repo pending.",
  },
  {
    feature: "Announcements",
    app: "Business → Customer",
    status: "development",
    note: "MVP: CRUD + publish toggle in business app; published items feed the customer app via API. Repo pending.",
  },
  {
    feature: "Appointment booking",
    app: "Customer",
    status: "development",
    note: "MVP: service → slot → details → confirm flow, my-bookings lookup + cancel; integration-tested end to end. Repo pending.",
  },
  {
    feature: "AI chatbots",
    app: "Customer",
    status: "development",
    note: "MVP: rule-based FAQ assistant (hours, services, booking help), honestly labeled in-product. Claude API upgrade is roadmap.",
  },
  {
    feature: "Reviews",
    app: "Customer",
    status: "roadmap",
    note: "Local reviews visible to the business and its customers.",
  },
  {
    feature: "Code / QR / link join",
    app: "Customer",
    status: "development",
    note: "MVP: 6-char business code + QR card; join validated against the business API. Repo pending.",
  },
  {
    feature: "Automations",
    app: "Business",
    status: "roadmap",
    note: "Reminders and follow-ups driven by bookings and activity.",
  },
];

const COMPARISON: { aspect: string; business: string; customer: string }[] = [
  {
    aspect: "Who uses it",
    business: "The business owner and staff",
    customer: "The business's customers",
  },
  {
    aspect: "Price",
    business: "Paid plans (pricing not published yet)",
    customer: "Free forever",
  },
  {
    aspect: "Purpose",
    business: "Console: customize, publish, manage, measure",
    customer: "Channel: chat, book, read, review",
  },
  {
    aspect: "Join flow",
    business: "Owner onboards and configures once",
    customer: "Joins via business code, QR, or link",
  },
  {
    aspect: "AI",
    business: "Drafting assistance, review and automation summaries",
    customer: "AI chatbots answering routine questions",
  },
  {
    aspect: "Data owned by",
    business: "The business — its own customer channel",
    customer: "The business — its own customer channel",
  },
  {
    aspect: "Status",
    business: "In development — repos not public yet",
    customer: "In development — repos not public yet",
  },
];

const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Dev4AIBots Platform",
  description:
    "A two-app platform for local businesses: a paid business app where owners customize their branded customer app, and a free customer app where customers join via code, QR, or link. In development — not launched.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android",
  author: { "@id": `${SITE.domain}/#organization` },
  url: `${SITE.domain}/product`,
};

export default function Product() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }}
      />

      <section className="hero" aria-labelledby="product-title">
        <div className="container">
          <span className="section-label">
            product · status: in development
          </span>
          <h1 id="product-title">
            Two apps. One direct channel between a business and its customers.
          </h1>
          <div className="definition">
            <p>
              <span className="def-term">The Dev4AIBots platform</span> is a
              two-app system for local businesses. The{" "}
              <span className="def-term">business app</span> is the
              owner&apos;s paid console: they customize their branded customer
              app, manage services and bookings, and write announcements. The{" "}
              <span className="def-term">customer app</span> is free forever:
              customers join a business with a code, QR, or link, then chat
              with AI assistants, book appointments, and leave reviews. The
              platform is in development — its repositories are not public
              yet, and nothing below is marked &ldquo;working&rdquo; until it
              is published and usable.
            </p>
          </div>
          <div className="hero-meta" aria-label="Platform facts">
            <span className="meta-tag">
              <span className="dot" aria-hidden="true" />
              platform: in development
            </span>
            <span className="meta-tag">repos not public yet</span>
            <span className="meta-tag">native Android · Kotlin</span>
            <span className="meta-tag">statuses track published code</span>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="compare">
        <div className="container">
          <span className="section-label">business app vs customer app</span>
          <h2 id="compare">How do the two apps differ?</h2>
          <p className="lede">
            They are opposite ends of the same channel: one console for the
            owner, one free channel for the customer. The business owns both
            sides of the relationship.
          </p>
          <div className="table-wrap">
            <table>
              <caption>Business app vs customer app — Dev4AIBots platform</caption>
              <thead>
                <tr>
                  <th scope="col">Aspect</th>
                  <th scope="col">Business app</th>
                  <th scope="col">Customer app</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((r) => (
                  <tr key={r.aspect}>
                    <td>{r.aspect}</td>
                    <td className="muted-cell">{r.business}</td>
                    <td className="muted-cell">{r.customer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="features">
        <div className="container">
          <span className="section-label">feature status</span>
          <h2 id="features">Every feature, honestly labeled.</h2>
          <p className="lede">
            &ldquo;Working&rdquo; means shipped and usable. &ldquo;In
            development&rdquo; means being built now. &ldquo;Roadmap&rdquo;
            means planned, with design and scope but no implementation yet.
            Statuses change only when code is published.
          </p>
          <div className="table-wrap">
            <table>
              <caption>Feature status table — Dev4AIBots platform</caption>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">App</th>
                  <th scope="col">Status</th>
                  <th scope="col">Detail</th>
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((f) => (
                  <tr key={f.feature}>
                    <td>
                      {f.feature}
                      <span className="note">{f.app} side</span>
                    </td>
                    <td className="muted-cell">{f.app}</td>
                    <td>
                      <StatusBadge status={f.status} />
                    </td>
                    <td className="muted-cell">{f.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="note-box">
            <strong>What &ldquo;in development&rdquo; means here.</strong> The
            business and customer app MVPs are implemented and
            integration-tested — native Android in Kotlin, MVI architecture,
            Clerk auth — but their repositories are not public yet and
            nothing is deployed, so nothing is marked &ldquo;working&rdquo;
            until it is published and usable. This page is the source of truth
            for what exists.
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="diagram">
        <div className="container">
          <span className="section-label">architecture</span>
          <h2 id="diagram">How the two apps connect.</h2>
          <TwoAppDiagram />
        </div>
      </section>

      <section className="section" aria-labelledby="honesty">
        <div className="container">
          <span className="section-label">the honesty policy</span>
          <h2 id="honesty">Why the labels are non-negotiable.</h2>
          <div className="panel" style={{ maxWidth: "75ch" }}>
            <div className="panel-head">
              <span className="panel-icon" aria-hidden="true">
                <ShieldCheck size={20} />
              </span>
              <h3 style={{ margin: 0 }}>Measured claims only</h3>
            </div>
            <p style={{ margin: 0, fontSize: "0.93rem" }}>
              A number on this site is either measured or it does not appear.
              A feature is &ldquo;working&rdquo; only when it is published and
              usable — never when it is &ldquo;almost done.&rdquo; The founder
              has twice refused requests to present non-working products as
              launched; that refusal is written company policy and it applies
              to partners, programs, and press.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="cta">
        <div className="container">
          <div className="cta-band">
            <h2 id="cta">Want this for your business?</h2>
            <p>
              We are building in the open and talking to local businesses
              early. Tell us what your shop actually needs — it shapes what
              gets built first.
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
