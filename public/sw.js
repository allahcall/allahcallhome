// AllahCall service worker: makes the installed app work offline.
// Pages are fetched fresh and saved as you browse; with no connection the saved
// copy is shown, or /offline for pages not saved yet. Bump VERSION to clear old caches.
const VERSION = "v1";
const PAGES = `pages-${VERSION}`;
const ASSETS = `assets-${VERSION}`;
const STATIC = `static-${VERSION}`;
const PRECACHE = ["/offline", "/", "/icon-192.png", "/logo.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PAGES)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  const keep = [PAGES, ASSETS, STATIC];
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => !keep.includes(k)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

// Keeps a cache to its newest `max` entries.
async function trim(name, max) {
  const cache = await caches.open(name);
  const keys = await cache.keys();
  await Promise.all(keys.slice(0, Math.max(0, keys.length - max)).map((k) => cache.delete(k)));
}

async function page(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(PAGES);
      await cache.put(request, response.clone());
      trim(PAGES, 60);
    }
    return response;
  } catch {
    return (await caches.match(request, { ignoreSearch: true })) ?? (await caches.match("/offline"));
  }
}

// Hashed build files never change, so a saved copy is always right.
async function cacheFirst(request) {
  const saved = await caches.match(request);
  if (saved) return saved;
  const response = await fetch(request);
  if (response.ok) (await caches.open(STATIC)).put(request, response.clone()).then(() => trim(STATIC, 250));
  return response;
}

// Images, fonts and the search index: show the saved copy at once, refresh it in the background.
async function staleWhileRevalidate(request, event) {
  const cache = await caches.open(ASSETS);
  const saved = await cache.match(request);
  const fresh = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone()).then(() => trim(ASSETS, 150));
      return response;
    })
    .catch(() => saved);
  if (saved) {
    event.waitUntil(fresh);
    return saved;
  }
  return fresh;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;
  // Analytics, the article editor, and the data Next.js fetches for in-app navigation, always go to the network.
  if (url.pathname.startsWith("/_vercel/") || url.pathname.startsWith("/admin") || request.headers.has("RSC") || url.searchParams.has("_rsc"))
    return;

  if (request.mode === "navigate") event.respondWith(page(request));
  else if (url.pathname.startsWith("/_next/static/")) event.respondWith(cacheFirst(request));
  else if (
    url.pathname.startsWith("/_next/image") ||
    url.pathname.startsWith("/images/") ||
    url.pathname === "/search-index.json" ||
    /\.(png|jpe?g|webp|avif|svg|ico|woff2?)$/.test(url.pathname)
  )
    event.respondWith(staleWhileRevalidate(request, event));
});
