"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/open-source", label: "Open Source" },
  { href: "/about", label: "About" },
];

function BrandMark() {
  return (
    <svg
      className="brand-mark"
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1" y="1" width="30" height="30" rx="7" fill="#121215" stroke="#3b82f6" strokeWidth="1.6" />
      <circle cx="11" cy="16" r="3.2" fill="#3b82f6" />
      <circle cx="21" cy="16" r="3.2" fill="none" stroke="#3b82f6" strokeWidth="1.8" />
      <line x1="14.2" y1="16" x2="17.8" y2="16" stroke="#3b82f6" strokeWidth="1.8" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Dev4AIBots — home">
          <BrandMark />
          <span>
            Dev4AIBots
            <span className="brand-sub">registered micro enterprise · india</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
