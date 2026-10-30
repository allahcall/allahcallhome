/**
 * Content model for every inner page. A page is a hero plus an ordered list
 * of blocks; `src/components/blocks` renders each block type.
 *
 * Images are either a local path under /public ("/images/quran.webp") or an
 * Unsplash photo id ("photo-1627818653012-054f17eb0648"), see `lib/image.ts`.
 */

export type Img = { src: string; alt: string };

export type Action = { label: string; href: string; variant?: "primary" | "secondary" };

export type Item = {
  title: string;
  body?: string;
  /** Small heading above `list`, e.g. "Requirements". */
  listLabel?: string;
  list?: string[];
  href?: string;
  /** Short tag shown above the title, e.g. "Beginner · 8 weeks". */
  meta?: string;
};

export type Block =
  /** Label + heading on the left, paragraphs on the right. */
  | { type: "prose"; label?: string; title: string; body: string[] }
  /** Hairline-divided columns of text, optional bullet lists and links. */
  | { type: "columns"; label?: string; title?: string; lede?: string; cols?: 2 | 3 | 4; items: Item[]; tone?: "alt" }
  /** Image-led cards. With `href` the whole card links. */
  | { type: "cards"; label?: string; title?: string; lede?: string; cols?: 2 | 3; items: (Item & { image: Img })[]; tone?: "alt" }
  /** Numbered steps. */
  | { type: "steps"; label?: string; title: string; items: { title: string; body: string }[] }
  /** Short items laid out in a hairline grid (principles, mission points). */
  | { type: "points"; label?: string; title: string; lede?: string; items: string[]; tone?: "alt" }
  /** Large quotation. With `image` it renders as a split feature. */
  | { type: "quote"; label?: string; title?: string; quote: string; cite: string; body?: string; image?: Img }
  /** The Shahada in Arabic, transliteration and translation. */
  | { type: "shahada"; label?: string; title?: string; action?: Action }
  | { type: "stats"; label?: string; title?: string; items: { value: string; label: string; body?: string }[] }
  | { type: "people"; label?: string; title?: string; lede?: string; items: Person[] }
  | { type: "events"; label?: string; title?: string; lede?: string; items: EventItem[] }
  | { type: "gallery"; label?: string; title?: string; lede?: string; groups: { title: string; items: Img[] }[] }
  | { type: "books"; label?: string; title: string; items: { title: string; author: string; body: string; image: Img }[] }
  | { type: "testimonies"; label?: string; title: string; lede?: string; items: Testimony[] }
  | { type: "form"; label?: string; title: string; lede?: string; form: "contact" | "volunteer" }
  | { type: "faq"; label?: string; title?: string; items: { q: string; a: string }[] }
  /** Closing call to action on a dark green band. */
  | { type: "cta"; title: string; body?: string; actions: Action[] };

export type Person = {
  name: string;
  role: string;
  image: Img;
  bio?: string;
  highlights?: string[];
};

export type EventItem = {
  title: string;
  /** ISO date (YYYY-MM-DD). Omit for recurring events. */
  date?: string;
  /** For recurring events, e.g. "Every Saturday". */
  recurring?: string;
  time?: string;
  location: string;
  body: string;
  image: Img;
  action?: Action;
};

export type Testimony = {
  name: string;
  place: string;
  quote: string;
  story: string;
  image: Img;
};

export type Page = {
  slug: string;
  /** <title> and nav label. */
  title: string;
  description: string;
  hero: {
    label: string;
    title: string;
    lede?: string;
    image?: Img;
  };
  blocks: Block[];
};
