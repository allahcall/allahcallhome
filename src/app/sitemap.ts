import type { MetadataRoute } from "next";
import { pages } from "@/content/pages";
import { site } from "@/lib/site";

// Pages people search for directly rank above supporting pages.
const key = new Set(["islam", "new-muslims", "accept-islam-now", "shahada", "courses", "religions", "contact"]);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    ...pages.map((p) => ({
      url: `${site.url}/${p.slug}`,
      changeFrequency: p.slug === "events" ? ("weekly" as const) : ("monthly" as const),
      priority: key.has(p.slug) ? 0.9 : 0.7,
    })),
  ];
}
