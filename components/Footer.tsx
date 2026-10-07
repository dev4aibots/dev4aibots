import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Dev4AIBots</h4>
            <p style={{ fontSize: "0.92rem", maxWidth: "30rem" }}>
              A Udyam-registered Indian micro enterprise building a two-app
              platform that gives local businesses their own branded customer
              app. Honest about status: everything here is labeled working, in
              development, or roadmap.
            </p>
          </div>
          <div>
            <h4>Site</h4>
            <ul>
              <li><Link href="/product">Product</Link></li>
              <li><Link href="/engineering">Engineering</Link></li>
              <li><Link href="/open-source">Open Source</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <ul>
              <li>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                  GitHub — @dev4aibots
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Dev4AIBots · {SITE.location}</span>
          <span>
            Udyam {SITE.udyamType} · {SITE.udyam}
          </span>
        </div>
      </div>
    </footer>
  );
}
