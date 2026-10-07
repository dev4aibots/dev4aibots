import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dev4AIBots: hello@dev4aibots.com. Run by one person — expect a reply within a few business days.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Write to us. A person replies.</h1>
          <p className="lede">
            No sales team, no ticket queue. Dev4AIBots is run by its solo
            founder, and every message below is read by them.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="details">
        <div className="container">
          <h2 id="details">How to reach us</h2>
          <div className="contact-card">
            <span className="kicker">Email — the fastest way</span>
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
          </div>

          <div className="note-box" style={{ maxWidth: "640px" }}>
            <strong>What to write about.</strong> Local businesses interested
            in the platform, engineers who want to discuss the open-source
            work, and startup programs — all welcome. Please don&apos;t ask us
            to misrepresent our status; the labels on this site are
            non-negotiable.
          </div>
        </div>
      </section>
    </>
  );
}
