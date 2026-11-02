import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} · ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    lang: "en",
    categories: ["education", "books"],
    // Matches the page's own theme colour and header, so the installed app's title bar blends in.
    background_color: "#f3f5f4",
    theme_color: "#f3f5f4",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    // Long-press the app icon to jump straight to these.
    shortcuts: [
      { name: "Accept Islam", url: "/accept-islam-now", icons: [{ src: "/icon-192.png", sizes: "192x192" }] },
      { name: "Events", url: "/events", icons: [{ src: "/icon-192.png", sizes: "192x192" }] },
      { name: "Contact us", url: "/contact", icons: [{ src: "/icon-192.png", sizes: "192x192" }] },
    ],
  };
}
