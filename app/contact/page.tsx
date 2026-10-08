import type { Metadata } from "next";
import { ArrowRight } from "@/components/icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dev4AIBots: hello@dev4aibots.com. Run by one person — expect a reply within a few business days.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Dev4AIBots",
    description:
      "hello@dev4aibots.com — every message is read by the founder.",
    url: `${SITE.domain}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact · Dev4AIBots",
    description: "hello@dev4aibots.com — a person replies.",
  },
};

export default function Contact() {
  return (
    <>
      <section className="hero" aria-labelledby="contact-title">
        <div className="container">
          <span className="section-label">contact</span>
          <h1 id="contact-title">Write to us. A person replies.</h1>
          <p className="lede">
            No sales team, no ticket queue. Dev4AIBots is run by its solo
            founder, and every message is read by them.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="details">
        <div className="container">
          <span className="section-label">how to reach us</span>
          <h2 id="details">How do I contact Dev4AIBots?</h2>
          <div className="contact-card">
            <span className="kicker">email — the fastest way</span>
            <a className="email" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <ul className="fact-list">
              <li>
                <span className="k">Response time</span>
                <span className="v">
                  Honest expectation: a reply within a few business days. One
                  person reads everything; during heavy build weeks it can
                  take a little longer.
                </span>
              </li>
              <li>
                <span className="k">Location</span>
                <span className="v">{SITE.location}</span>
              </li>
              <li>
                <span className="k">GitHub</span>
                <span className="v">
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/dev4aibots
                  </a>
                </span>
              </li>
            </ul>
            <div className="cta-actions" style={{ marginTop: "1.75rem", justifyContent: "flex-start" }}>
              <a className="btn" href={`mailto:${SITE.email}`}>
                Email the founder <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="note-box" style={{ maxWidth: "42rem" }}>
            <strong>What to write about.</strong> Local businesses interested
            in the platform and engineers who want to discuss the
            open-source work — all welcome. Please don&apos;t ask us
            to misrepresent our status; honest representation is
            non-negotiable.
          </div>
        </div>
      </section>
    </>
  );
}
