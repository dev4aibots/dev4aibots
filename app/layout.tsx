import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const TITLE_DEFAULT =
  "Dev4AIBots — Branded customer apps for local businesses";
const DESCRIPTION =
  "Dev4AIBots is a Udyam-registered Indian micro enterprise building a two-app platform that gives local businesses their own branded customer app — AI chatbots, bookings, announcements, reviews.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: TITLE_DEFAULT,
    template: "%s · Dev4AIBots",
  },
  description: DESCRIPTION,
  keywords: [
    "Dev4AIBots",
    "local business apps",
    "branded customer app",
    "appointment booking software",
    "small business customer app",
    "Udyam registered startup India",
  ],
  authors: [{ name: "Dev4AIBots", url: SITE.domain }],
  creator: "Dev4AIBots",
  publisher: "Dev4AIBots",
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
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.domain}/#organization`,
  name: "Dev4AIBots",
  url: SITE.domain,
  email: SITE.email,
  description:
    "Udyam-registered Indian micro enterprise building a two-app platform for local businesses.",
  foundingDate: "2026-06-13",
  identifier: SITE.udyam,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhatiya",
    addressRegion: "Gujarat",
    postalCode: "361315",
    addressCountry: "IN",
  },
  founder: {
    "@type": "Person",
    name: SITE.founder,
  },
  sameAs: [SITE.github],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.domain}/#website`,
  url: SITE.domain,
  name: "Dev4AIBots",
  description: DESCRIPTION,
  publisher: { "@id": `${SITE.domain}/#organization` },
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
