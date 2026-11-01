import { researchPage } from "../research";
import type { Page } from "../types";
import { aboutPages } from "./about";
import { islamPages } from "./islam";
import { legalPages } from "./legal";
import { newMuslimPages } from "./new-muslims";
import { programPages } from "./programs";
import { religionPages } from "./religions";
import { servicePages } from "./services";

export const pages: Page[] = [
  ...aboutPages,
  ...islamPages,
  ...religionPages,
  ...newMuslimPages,
  ...programPages,
  ...servicePages,
  researchPage,
  ...legalPages,
];

export function getPage(slug: string): Page | undefined {
  return pages.find((p) => p.slug === slug);
}
