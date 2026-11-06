import type { NextConfig } from "next";

// Static pages can't carry per-request nonces, so inline scripts are allowed
// (Next's guidance for statically rendered sites); everything else is locked
// to this origin plus Formspree, which receives the forms.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' https://formspree.io",
  "form-action 'self' https://formspree.io",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

// The article editor at /admin runs Sveltia CMS from unpkg (pinned with an
// integrity hash in public/admin/index.html) and talks to GitHub's API. This
// policy replaces the site-wide one there and only there.
const adminCsp = [
  "default-src 'self'",
  "script-src 'self' https://unpkg.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' https://cdn.jsdelivr.net",
  "img-src 'self' blob: data: https://*.githubusercontent.com",
  "media-src blob:",
  "frame-src blob:",
  "connect-src 'self' blob: data: https://unpkg.com https://api.github.com https://*.githubusercontent.com https://www.githubstatus.com",
  "manifest-src blob:",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  // Not `no-referrer`: Formspree's domain restriction relies on the Referer header.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // Production only: preview deployments load Vercel's toolbar from other origins.
  ...(process.env.VERCEL_ENV === "production" ? [{ key: "Content-Security-Policy", value: csp }] : []),
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  poweredByHeader: false,
  // Articles are read from disk (src/content/articles.ts). Ship them with any
  // route rendered on demand, such as a 404 under /research.
  outputFileTracingIncludes: { "/**": ["./src/content/articles/*.md"] },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Later entries win for the same header, so this replaces the CSP above.
      ...(process.env.VERCEL_ENV === "production"
        ? [{ source: "/admin/:path*", headers: [{ key: "Content-Security-Policy", value: adminCsp }] }]
        : []),
      { source: "/admin/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }, { key: "Cache-Control", value: "no-cache" }] },
      // Browsers must always fetch the latest service worker so updates reach installed apps.
      { source: "/sw.js", headers: [{ key: "Cache-Control", value: "no-cache, no-store, must-revalidate" }] },
      // Deployment URLs like allahcallhome.vercel.app mirror the site; keep them out of search.
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
  partialPrefetching: true,
  images: {
    qualities: [75, 85],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-**" }],
  },
  // Addresses that existed on the previous site.
  async redirects() {
    return [
      { source: "/board", destination: "/board-of-directors", permanent: true },
      { source: "/services", destination: "/our-services", permanent: true },
      // The article editor is a static page in public/admin.
      { source: "/admin", destination: "/admin/index.html", permanent: false },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
