import type { Metadata } from "next";
import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import TwoAppDiagram from "@/components/TwoAppDiagram";

export const metadata: Metadata = {
  title: "Product",
  description:
    "The Dev4AIBots two-app platform: a business app for owners and a free customer app for their customers. Every feature honestly labeled — in development or roadmap.",
  alternates: { canonical: "/product" },
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
    note: "MVP: rule-based FAQ assistant (hours, services, booking help), honestly labeled in-product. LLM upgrade is roadmap.",
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

export default function Product() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Product · Status: in development</span>
          <h1>Two apps. One direct channel between a business and its customers.</h1>
          <p className="lede">
            The <strong>business app</strong> is the owner&apos;s console: they
            customize their branded customer app, manage services and bookings,
            and write announcements — on a paid plan. The{" "}
            <strong>customer app</strong> is free forever: customers join a
            business with a code, QR, or link, then chat with AI assistants,
            book appointments, and leave reviews. Nothing here is launched;
            every feature below carries its honest status.
          </p>
          <div className="hero-meta">
            <span className="meta-chip">Platform: in development</span>
            <span className="meta-chip">No public repos published yet</span>
            <span className="meta-chip">Statuses track published code</span>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="diagram">
        <div className="container">
          <span className="eyebrow">Architecture</span>
          <h2 id="diagram">How the two apps connect.</h2>
          <TwoAppDiagram />
        </div>
      </section>

      <section className="section" aria-labelledby="features">
        <div className="container">
          <span className="eyebrow">Feature status</span>
          <h2 id="features">Every feature, honestly labeled.</h2>
          <p className="lede">
            &ldquo;Working&rdquo; means shipped and usable. &ldquo;In
            development&rdquo; means being built now. &ldquo;Roadmap&rdquo;
            means planned, with design and scope but no implementation yet.
            Statuses are updated when code is published.
          </p>
          <div className="table-wrap" style={{ marginTop: "2rem" }}>
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
                    <td>{f.app}</td>
                    <td>
                      <StatusBadge status={f.status} />
                    </td>
                    <td style={{ color: "var(--muted)" }}>{f.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="note-box">
            <strong>What &ldquo;in development&rdquo; means here.</strong> The
            business and customer app MVPs are implemented and
            integration-tested, but their repositories are not public yet and
            nothing is deployed — so nothing is marked &ldquo;working&rdquo;
            until it is published and usable. This page is the source of truth
            for what exists.
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="roadmap">
        <div className="container">
          <span className="eyebrow">Roadmap</span>
          <h2 id="roadmap">Realistic, in order, without dates we can&apos;t keep.</h2>
          <p className="lede">
            A solo founder builds in sequence. These are targets, not
            commitments — the order is the promise, not the timeline.
          </p>
          <ol className="steps">
            <li>
              <span className="step-num" aria-hidden="true">1</span>
              <h3>Now — foundations</h3>
              <p>
                Publish the platform repositories, stand up the business and
                customer app shells, and implement the code/QR/link join flow
                end to end.
              </p>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">2</span>
              <h3>Next — the business loop</h3>
              <p>
                Theme customization, announcements, and one-click appointment
                booking — the smallest loop that makes a business&apos;s app
                useful on day one.
              </p>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">3</span>
              <h3>Later — intelligence</h3>
              <p>
                Per-business AI chatbots grounded in that business&apos;s own
                data, local reviews, and automations like booking reminders.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="cta">
        <div className="container">
          <div className="cta-band">
            <h2 id="cta">Want this for your business?</h2>
            <p>
              We are building in the open and talking to local businesses early.
              Tell us what your shop actually needs — it shapes what gets built
              first.
            </p>
            <Link className="btn" href="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
