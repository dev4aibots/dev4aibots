import type { Metadata } from "next";
import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import TwoAppDiagram from "@/components/TwoAppDiagram";
import { SITE, REPOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dev4AIBots — Business apps for local businesses",
  description:
    "Dev4AIBots is a Udyam-registered Indian micro enterprise building a two-app platform that gives local businesses their own branded customer app.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* HERO — company identity in the first screen */}
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Dev4AIBots · Registered Micro Enterprise · India</span>
          <h1>
            A two-app platform that gives local businesses their own customer
            app.
          </h1>
          <p className="lede">
            Dev4AIBots is a Udyam-registered micro enterprise in Gujarat, India.
            We are building a platform where a shop or parlour owner publishes
            a branded app — and their customers join it free, with AI chatbots,
            announcements, one-click appointment booking, and reviews. The
            platform is <strong>in development</strong>; what is finished, we
            label as finished.
          </p>
          <div className="hero-meta" aria-label="Company facts">
            <span className="meta-chip">Udyam {SITE.udyam}</span>
            <span className="meta-chip">Solo-founded</span>
            <span className="meta-chip">{SITE.location}</span>
            <span className="meta-chip">Platform status: in development</span>
          </div>

          {/* Current status strip */}
          <div className="status-strip" aria-label="Current status">
            <div className="status-card">
              <div className="label">Company</div>
              <div className="value">Dev4AIBots, registered</div>
              <StatusBadge status="working" />
            </div>
            <div className="status-card">
              <div className="label">Platform</div>
              <div className="value">Two-app business platform</div>
              <StatusBadge status="development" />
            </div>
            <div className="status-card">
              <div className="label">holo-racer</div>
              <div className="value">Webcam racing game, live</div>
              <StatusBadge status="working" />
            </div>
            <div className="status-card">
              <div className="label">Pramaan</div>
              <div className="value">RAG evidence engine</div>
              <StatusBadge status="development" />
            </div>
          </div>
        </div>
      </section>

      {/* THESIS */}
      <section className="section" aria-labelledby="thesis">
        <div className="container">
          <span className="eyebrow">Product thesis</span>
          <h2 id="thesis">Local businesses rent their customer relationships.</h2>
          <p className="lede">
            A neighbourhood shop, salon, or clinic reaches repeat customers
            through aggregators, marketplaces, and group chats — channels it
            does not own, on terms it does not set. Building a custom app is
            out of reach for a business of five people. Our thesis: the answer
            is not another marketplace. It is giving each business its own
            direct channel — cheap to set up, branded as theirs, free for the
            customer.
          </p>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section className="section" aria-labelledby="problem-solution">
        <div className="container">
          <span className="eyebrow">Problem → Solution</span>
          <h2 id="problem-solution">The gap, and what we are building into it.</h2>
          <div className="ps-grid">
            <div className="ps-card">
              <h3>The problem</h3>
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
                  business budget.
                </li>
              </ul>
            </div>
            <div className="ps-card">
              <h3>The solution</h3>
              <ul>
                <li>
                  <strong>Business app:</strong> the owner customizes a
                  customer app in their own branding — theme, services,
                  announcements — on a paid plan.
                </li>
                <li>
                  <strong>Customer app:</strong> free forever. Customers join a
                  business via a code, QR, or link — no marketplace in between.
                </li>
                <li>
                  <strong>Built-in capabilities:</strong> AI chatbots that
                  answer routine questions, one-click appointment booking,
                  announcements, local reviews, and automations.
                </li>
                <li>
                  <strong>Direct relationship:</strong> the business owns the
                  channel to its own customers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" aria-labelledby="how">
        <div className="container">
          <span className="eyebrow">How it works</span>
          <h2 id="how">Two apps, one platform.</h2>
          <p className="lede">
            The owner works in the business app; the customer lives in the
            customer app. The platform connects them with a simple join flow —
            no accounts to configure, no marketplace to join.
          </p>
          <TwoAppDiagram />
          <ol className="steps">
            <li>
              <span className="step-num" aria-hidden="true">1</span>
              <h3>The owner sets up their business app</h3>
              <p>
                Theme and branding, services and prices, announcements —
                configured once, updated anytime. <StatusBadge status="roadmap" />
              </p>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">2</span>
              <h3>The platform issues a business code and QR</h3>
              <p>
                Each business gets a short code, a QR, and a shareable link.
                Printed at the counter or sent by message. <StatusBadge status="roadmap" />
              </p>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">3</span>
              <h3>Customers join free and stay connected</h3>
              <p>
                They chat with the business&apos;s AI assistant, book
                appointments in one tap, read announcements, and leave reviews —
                all inside the business&apos;s own branded app. <StatusBadge status="roadmap" />
              </p>
            </li>
          </ol>
          <p style={{ marginTop: "1.5rem" }}>
            <Link href="/product" className="card-link">
              Full product detail, with per-feature status labels →
            </Link>
          </p>
        </div>
      </section>

      {/* PROOF */}
      <section className="section" aria-labelledby="proof">
        <div className="container">
          <span className="eyebrow">Proof, not promises</span>
          <h2 id="proof">What we have actually built.</h2>
          <p className="lede">
            We do not claim traction we do not have — no funding, no revenue,
            no customers yet. What we can show is real engineering, in public
            repositories, with production deployments.
          </p>
          <div className="grid-2" style={{ marginTop: "2rem" }}>
            <article className="card">
              <StatusBadge status="working" />
              <h3>holo-racer</h3>
              <p>
                A webcam-controlled 3D racing game: Vite + TypeScript +
                Three.js, with MediaPipe hand tracking running in a Web Worker,
                gesture filtering, and production deploys. Deployed and
                playable in the browser.
              </p>
              <div className="card-footer">
                <a
                  className="card-link"
                  href={REPOS.holoRacerLive}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play the live demo →
                </a>
                <a
                  className="card-link"
                  href={REPOS.holoRacer}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository →
                </a>
              </div>
            </article>
            <article className="card">
              <StatusBadge status="development" />
              <h3>Pramaan</h3>
              <p>
                A self-hosted, multi-modal RAG evidence engine in Python:
                authorization before retrieval, hybrid vector + keyword search
                with reranking, claim verification, and a Streamlit + FastAPI
                interface over Docker Compose.
              </p>
              <div className="card-footer">
                <a
                  className="card-link"
                  href={REPOS.pramaan}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository →
                </a>
              </div>
            </article>
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <Link href="/engineering" className="card-link">
              Engineering case studies →
            </Link>
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section" aria-labelledby="founder">
        <div className="container">
          <span className="eyebrow">Founder</span>
          <h2 id="founder">Built by one person, accountable to everyone.</h2>
          <div className="founder-strip">
            <div className="founder-mark" aria-hidden="true">VK</div>
            <div>
              <h3 style={{ margin: "0 0 0.35rem" }}>{SITE.founder}</h3>
              <p style={{ margin: 0 }}>
                Solo founder of Dev4AIBots, based in {SITE.location}. The
                company&apos;s background is documented through public work —
                the holo-racer and Pramaan repositories — not through titles.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "1.25rem" }}>
            <Link href="/about" className="card-link">
              About the founder and the company →
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" aria-labelledby="cta">
        <div className="container">
          <div className="cta-band">
            <h2 id="cta">Talk to us about the platform.</h2>
            <p>
              We are early and honest about it. If you run a local business and
              want your own customer app, or you want to follow the build —
              write to us.
            </p>
            <a className="btn" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <Link className="btn btn-ghost" href="/contact">
              Contact details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
