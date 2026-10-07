import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Dev4AIBots — Business apps for local businesses",
    template: "%s · Dev4AIBots",
  },
  description:
    "Dev4AIBots is a Udyam-registered Indian micro enterprise building a two-app platform that gives local businesses their own branded customer app.",
  keywords: [
    "Dev4AIBots",
    "local business apps",
    "appointment booking software",
    "small business customer app",
    "Udyam registered startup India",
  ],
  authors: [{ name: "Dev4AIBots", url: SITE.domain }],
  creator: "Dev4AIBots",
  publisher: "Dev4AIBots",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.domain,
    siteName: "Dev4AIBots",
    title: "Dev4AIBots — Business apps for local businesses",
    description:
      "A Udyam-registered micro enterprise building a two-app platform that gives local businesses their own branded customer app.",
  },
  twitter: {
    card: "summary",
    title: "Dev4AIBots — Business apps for local businesses",
    description:
      "A Udyam-registered micro enterprise building a two-app platform that gives local businesses their own branded customer app.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0a0c10",
  colorScheme: "dark",
};

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dev4AIBots",
  url: SITE.domain,
  email: SITE.email,
  description:
    "Udyam-registered Indian micro enterprise building a two-app platform for local businesses.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhatiya",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  founder: {
    "@type": "Person",
    name: SITE.founder,
  },
  sameAs: [SITE.github],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
