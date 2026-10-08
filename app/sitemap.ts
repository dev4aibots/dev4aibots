import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const PAGES = [
  "/",
  "/product",
  "/engineering",
  "/open-source",
  "/about",
  "/contact",
];

const LAST_UPDATED = new Date("2026-10-08");

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({
    url: `${SITE.domain}${p === "/" ? "" : p}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: p === "/" ? 1 : 0.8,
  }));
}
