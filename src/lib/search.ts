import { pages } from "@/content/pages";
import { paperPage, paperPath, summarized } from "@/content/research";
import type { Block, Page } from "@/content/types";
import { site } from "@/lib/site";

/** One searchable section of a page. `section` is empty for the page hero. */
export type SearchDoc = { id: number; url: string; page: string; section: string; text: string };

// Fields that hold markup choices, links or alt text rather than words a reader sees.
const skip = new Set(["type", "tone", "cols", "variant", "form", "href", "src", "alt", "date", "amazon"]);

function words(value: unknown, out: string[] = []): string[] {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => words(v, out));
  else if (value && typeof value === "object")
    for (const [k, v] of Object.entries(value)) if (!skip.has(k)) words(v, out);
  return out;
}

function sections(page: Page, url: string): Omit<SearchDoc, "id">[] {
  const hero = { url, page: page.title, section: "", text: [page.hero.title, page.hero.lede ?? page.description].join(" ") };
  return [
    hero,
    ...page.blocks.map((block: Block) => {
      const { title, label, ...rest } = block as Block & { title?: string; label?: string };
      return { url, page: page.title, section: title ?? label ?? "", text: words(rest).join(" ") };
    }),
  ];
}

/** Every page split into sections, for the client-side search index. */
export function searchDocs(): SearchDoc[] {
  const home = { url: "/", page: "Home", section: "", text: `${site.name} ${site.tagline}. ${site.description}` };
  return [
    home,
    ...pages.flatMap((p) => sections(p, `/${p.slug}`)),
    ...summarized.flatMap((p) => sections(paperPage({ ...p, summary: p.summary! }), paperPath(p))),
  ]
    .filter((d) => d.section || d.text.trim())
    .map((d, id) => ({ id, ...d }));
}
