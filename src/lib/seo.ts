import type { Metadata } from "next";
import { site } from "./site";

const twitterHandle = `@${new URL(site.socials.find((s) => s.label === "Twitter")!.href).pathname.slice(1)}`;

/**
 * Complete metadata for one page. Next.js merges `openGraph` and `twitter`
 * shallowly, so every page repeats the site-wide fields here instead of
 * relying on the root layout. Share images come from the `opengraph-image`
 * and `twitter-image` files next to each route.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  /** Page title without the brand; the layout's template appends " · AllahCall". */
  title?: string;
  description: string;
  /** Path starting with "/", e.g. "/islam". */
  path: string;
}): Metadata {
  const fullTitle = title ? `${title} · ${site.name}` : `${site.name} · ${site.tagline}`;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: twitterHandle,
    },
  };
}
