import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "@/components/icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Dev4AIBots: solo-founded by Varamal Devraj Kheraj — a Udyam-registered micro enterprise (UDYAM-GJ-29-0019103) in Bhatiya, Gujarat, India, building a two-app platform for local businesses.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · Dev4AIBots",
    description:
      "Solo-founded by Varamal Devraj Kheraj. Udyam-registered micro enterprise in Bhatiya, Gujarat, India.",
    url: `${SITE.domain}/about`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About · Dev4AIBots",
    description:
      "Solo-founded by Varamal Devraj Kheraj. Udyam-registered micro enterprise, Bhatiya, Gujarat.",
  },
};

export default function About() {
  return (
    <>
      <section className="hero" aria-labelledby="about-title">
        <div className="container">
          <span className="section-label">about</span>
          <h1 id="about-title">A company, not a portfolio.</h1>
          <p className="lede">
            Dev4AIBots is a registered business with one founder, one product
            thesis, and a public record of engineering. This page states the
            verifiable facts — nothing invented, nothing inflated.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="founder">
        <div className="container">
          <span className="section-label">founder</span>
          <h2 id="founder">Who founded Dev4AIBots?</h2>
          <p className="lede">
            <strong>{SITE.founder}</strong>, solo founder, based in{" "}
            {SITE.location}. The background is documented through public work
            — the holo-racer and Pramaan repositories, both built and
            maintained in the open — rather than through titles. No degrees,
            no past employers, and no roles claimed that cannot be verified
            in a repository.
          </p>
          <div className="split">
            <div className="panel">
              <h3>What the record shows</h3>
              <ul>
                <li>
                  <strong>holo-racer:</strong> a deployed, tested browser game
                  with a real-time computer-vision control pipeline.
                </li>
                <li>
                  <strong>Pramaan:</strong> a Python RAG system with
                  authorization-first retrieval and an evaluation harness.
                </li>
                <li>
                  Both public on GitHub, both under active development.
                </li>
              </ul>
            </div>
            <div className="panel">
              <h3>How the company is run</h3>
              <ul>
                <li>One person, full accountability.</li>
                <li>
                  Engineering, product, and support are the same inbox —{" "}
                  <code>{SITE.email}</code>.
                </li>
                <li>
                  The status labels across this site are the founder&apos;s
                  personal commitment to honest representation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why">
        <div className="container">
          <span className="section-label">why dev4aibots exists</span>
          <h2 id="why">Why does Dev4AIBots exist?</h2>
          <div className="definition">
            <p>
              The founder&apos;s thesis, stated plainly: a neighbourhood shop
              or parlour loses margin and control every time a repeat customer
              has to go through someone else&apos;s platform. Dev4AIBots exists
              to give those businesses a direct, branded, affordable channel
              to their own customers — starting with the two-app platform on
              the <a href="/product">Product</a> page. It is early, it is in
              development, and it is the entire reason the company was
              registered.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="registration">
        <div className="container">
          <span className="section-label">registration</span>
          <h2 id="registration">Is Dev4AIBots a registered company?</h2>
          <p className="lede">
            Yes. Dev4AIBots is registered with the Ministry of Micro, Small
            and Medium Enterprises, Government of India, under the Udyam
            scheme.
          </p>
          <div className="contact-card">
            <span className="kicker">verified registration facts</span>
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
          <div className="note-box">
            <strong>
              <ShieldCheck
                size={16}
                aria-hidden="true"
                style={{ verticalAlign: "-3px", marginRight: "0.35rem" }}
              />
              Explicitly not claimed:
            </strong>{" "}
            no funding, no revenue, no customers, no employees, no
            partnerships, no certifications, no launched product.
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="cta">
        <div className="container">
          <div className="cta-band">
            <h2 id="cta">Questions about the company?</h2>
            <p>Write directly — every message is read by the founder.</p>
            <div className="cta-actions">
              <Link className="btn" href="/contact">
                Contact <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
