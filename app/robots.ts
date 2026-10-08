import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Standard crawlers get full access; AI crawlers are explicitly allowed so
// the site's honest, extractable content is available to AI search and
// assistants (GPTBot, ClaudeBot, Perplexity, Google AI).
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${SITE.domain}/sitemap.xml`,
  };
}
