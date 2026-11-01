import { searchDocs } from "@/lib/search";

// Reads only bundled content, so it prerenders at build time and is served
// from the CDN as a static file. The browser downloads it once and searches locally.
export function GET() {
  return Response.json(searchDocs(), { headers: { "X-Robots-Tag": "noindex" } });
}
