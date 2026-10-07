import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const PAGES = ["/", "/product", "/engineering", "/open-source", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PAGES.map((p) => ({
    url: `${SITE.domain}${p === "/" ? "" : p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "/" ? 1 : 0.8,
  }));
}
