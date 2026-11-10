import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { BAR_COLORS } from "@/lib/theme";

// Not yet in Next's manifest type: colours to use instead while the phone is in dark mode.
type DarkPreferences = {
  user_preferences: { color_scheme_dark: { theme_color: string; background_color: string } };
};

export default function manifest(): MetadataRoute.Manifest & DarkPreferences {
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
    // An installed Android app paints its system bars from these before the page
    // loads, and its bottom navigation bar keeps them; the page can't recolour it.
    background_color: BAR_COLORS.light,
    theme_color: BAR_COLORS.light,
    // The manifest spec's dark-mode overrides, so the bars can follow the phone's
    // dark mode where Chrome supports them.
    user_preferences: {
      color_scheme_dark: { theme_color: BAR_COLORS.dark, background_color: BAR_COLORS.dark },
    },
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
