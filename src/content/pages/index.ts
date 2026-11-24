import { researchPage } from "../research";
import type { Page } from "../types";
import { aboutPages } from "./about";
import { islamPages } from "./islam";
import { legalPages } from "./legal";
import { newMuslimPages } from "./new-muslims";
import { programPages } from "./programs";
import { modernIdeologies } from "./modern-ideologies";
import { religionPages } from "./religions";
import { servicePages } from "./services";

export const pages: Page[] = [
  ...aboutPages,
  ...islamPages,
  ...religionPages,
  ...newMuslimPages,
  ...programPages,
  modernIdeologies,
  ...servicePages.filter((page) => page.slug !== "articles-books"),
  {
    ...researchPage,
    blocks: [
      ...researchPage.blocks.filter((block) => block.type !== "cta"),
      ...servicePages.find((page) => page.slug === "articles-books")!.blocks.filter((block) => block.type === "books"),
      {
        type: "cta",
        title: "Have a question about something you read?",
        actions: [{ label: "Ask a question", href: "/contact" }],
      },
    ],
  },
  ...legalPages,
];

export function getPage(slug: string): Page | undefined {
  return pages.find((p) => p.slug === slug);
}
