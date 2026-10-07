import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Dev4AIBots: solo-founded by Varamal Devraj Kheraj, a Udyam-registered micro enterprise in Bhatiya, Gujarat, India — building a two-app platform for local businesses.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">About</span>
          <h1>A company, not a portfolio.</h1>
          <p className="lede">
            Dev4AIBots is a registered business with one founder, one product
            thesis, and a public record of engineering. This page states the
            verifiable facts — nothing invented, nothing inflated.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="founder">
        <div className="container">
          <span className="eyebrow">Founder</span>
          <h2 id="founder">{SITE.founder}, solo founder.</h2>
          <p className="lede">
            Based in {SITE.location}. The founder&apos;s background is
            documented through public work — the holo-racer and Pramaan
            repositories, both built and maintained in the open — rather than
            through titles. We claim no degrees, no past employers, and no
            roles that cannot be verified in a repository.
          </p>
          <div className="grid-2" style={{ marginTop: "2rem" }}>
            <div className="card">
              <h3>What the record shows</h3>
              <p>
                holo-racer: a deployed, tested browser game with a real-time
                computer-vision control pipeline. Pramaan: a Python RAG system
                with authorization-first retrieval and an evaluation harness.
                Both public, both under active development.
              </p>
            </div>
            <div className="card">
              <h3>How the company is run</h3>
              <p>
                One person, full accountability. Engineering, product, and
                support are the same inbox — <code>{SITE.email}</code> — and
                the status labels across this site are the founder&apos;s
                personal commitment to honest representation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why">
        <div className="container">
          <span className="eyebrow">Why Dev4AIBots exists</span>
          <h2 id="why">Local businesses should own their customer channel.</h2>
          <p className="lede">
            The founder&apos;s thesis, stated plainly: a neighbourhood shop or
            parlour loses margin and control every time a repeat customer has
            to go through someone else&apos;s platform. Dev4AIBots exists to
            give those businesses a direct, branded, affordable channel to
            their own customers — starting with the two-app platform described
            on the <Link href="/product">Product</Link> page. It is early, it
            is in development, and it is the entire reason the company was
            registered.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="registration">
        <div className="container">
          <span className="eyebrow">Registration</span>
          <h2 id="registration">A registered micro enterprise.</h2>
          <p className="lede">
            Dev4AIBots is registered with the Ministry of Micro, Small and
            Medium Enterprises, Government of India, under the Udyam scheme.
          </p>
          <div className="contact-card">
            <ul className="fact-list">
              <li>
                <span className="k">Enterprise</span>
                <span className="v">Dev4AIBots — {SITE.udyamType}</span>
              </li>
              <li>
                <span className="k">Udyam number</span>
                <span className="v">{SITE.udyam}</span>
              </li>
              <li>
                <span className="k">Incorporated</span>
                <span className="v">{SITE.incorporated}</span>
              </li>
              <li>
                <span className="k">Udyam registered</span>
                <span className="v">{SITE.udyamRegistered}</span>
              </li>
              <li>
                <span className="k">Activity (NIC {SITE.nicCode})</span>
                <span className="v">{SITE.nicActivity}</span>
              </li>
              <li>
                <span className="k">Location</span>
                <span className="v">
                  Bhatiya, Devbhoomi Dwarka, Gujarat, India — 361315
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="cta">
        <div className="container">
          <div className="cta-band">
            <h2 id="cta">Questions about the company?</h2>
            <p>Write directly — every message is read by the founder.</p>
            <Link className="btn" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
