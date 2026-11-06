import fs from "node:fs";
import path from "node:path";
import type { Root, RootContent } from "mdast";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { parse as parseYaml } from "yaml";
import type { Topic } from "./research";

/**
 * Articles written for this site, one Markdown file each in
 * `src/content/articles/`. The file name is the address: `my-article.md`
 * becomes /research/my-article. See `docs/articles/README.md` for the
 * format, or edit them at /admin. Files starting with `_` are skipped.
 *
 * Every file is checked when the site builds. A file that fails stops the
 * build with a message naming the file and the problem, so Vercel keeps
 * serving the last good version and a broken file never reaches visitors.
 */

export type Article = {
  slug: string;
  title: string;
  topic: Topic;
  /** YYYY-MM-DD */
  date: string;
  /** One or two sentences under the title and on the research page. */
  summary: string;
  authors: string[];
  /** Full paper as a PDF: an https link, or a file in public/papers/. */
  pdf?: string;
  /** Markdown body, already checked. */
  body: string;
};

export const articlesDir = path.join(process.cwd(), "src/content/articles");
const publicDir = path.join(process.cwd(), "public");

const topicIds: Topic[] = ["god", "modern", "quran", "society"];
const fields = new Set(["title", "topic", "date", "summary", "authors", "pdf", "draft"]);
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const defaultAuthor = "Muhammad Harris Suhaib";

const parser = unified().use(remarkParse).use(remarkGfm);

/** Splits the --- header from the text. `offset` is how many lines the header takes, for error line numbers. */
function splitFrontMatter(source: string): { head: string; body: string; offset: number } | undefined {
  const m = /^﻿?---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)([\s\S]*)$/.exec(source);
  if (!m) return undefined;
  const offset = m[0].slice(0, m[0].length - m[2].length).split("\n").length - 1;
  return { head: m[1], body: m[2], offset };
}

const MB = 1024 * 1024;
/** Largest files an article can use. Images uploaded in /admin are resized well under this. */
export const maxImageBytes = 5 * MB;
export const maxPdfBytes = 25 * MB;

/** Size in bytes of a file under public/, or undefined when it isn't there. */
function publicFileSize(urlPath: string): number | undefined {
  let decoded: string;
  try {
    decoded = decodeURI(urlPath);
  } catch {
    return undefined;
  }
  const file = path.normalize(path.join(publicDir, decoded));
  if (!file.startsWith(publicDir + path.sep) || !fs.existsSync(file)) return undefined;
  return fs.statSync(file).size;
}

function sizeProblem(what: string, urlPath: string, folder: string, max: number): string | undefined {
  const size = publicFileSize(urlPath);
  if (size === undefined) return `${what} "${urlPath}" was not found in public/${folder}/`;
  if (size > max) return `${what} "${urlPath}" is ${(size / MB).toFixed(1)} MB, keep it under ${max / MB} MB`;
}

/** Links a reader can follow: other sites over https, email, and pages on this site. */
function linkProblem(url: string): string | undefined {
  if (/^https:\/\/[^\s/]+\.[^\s/]+/.test(url) || /^mailto:[^\s@]+@[^\s@]+$/.test(url) || url.startsWith("#")) return;
  if (url.startsWith("/") && !url.startsWith("//")) return;
  return `link "${url}" must start with https://, mailto:, / or #`;
}

function checkBody(tree: Root, offset: number, problems: string[]) {
  const visit = (node: Root | RootContent) => {
    const line = "position" in node && node.position ? ` (line ${node.position.start.line + offset})` : "";
    switch (node.type) {
      case "html":
        problems.push(`HTML is not allowed in articles, use Markdown instead${line}: ${node.value.slice(0, 60)}`);
        break;
      case "heading":
        if (node.depth === 1) problems.push(`use ## for headings, the title already takes #${line}`);
        break;
      case "link":
      case "definition": {
        const p = linkProblem(node.url);
        if (p) problems.push(p + line);
        break;
      }
      case "image":
        if (!node.alt?.trim()) problems.push(`image "${node.url}" needs a description in the [brackets]${line}`);
        if (!node.url.startsWith("/articles/")) problems.push(`image "${node.url}" must be a file in public/articles/${line}`);
        else {
          const p = sizeProblem("image", node.url, "articles", maxImageBytes);
          if (p) problems.push(p + line);
        }
        break;
      case "imageReference":
        problems.push(`write images as ![description](/articles/file.webp), not as references${line}`);
        break;
    }
    if ("children" in node) node.children.forEach(visit);
  };
  visit(tree);
}

function text(value: unknown, field: string, problems: string[], max: number): string {
  if (typeof value !== "string" || !value.trim()) {
    problems.push(`"${field}" is required`);
    return "";
  }
  const v = value.trim();
  if (v.length > max) problems.push(`"${field}" is ${v.length} characters, keep it under ${max}`);
  return v;
}

function validDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const d = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().startsWith(value);
}

/** Reads and checks one file. Returns the article, `null` for a draft, or a list of problems. */
export function parseArticle(file: string, source: string): Article | null | string[] {
  const problems: string[] = [];
  const slug = file.replace(/\.md$/, "");
  if (!slugPattern.test(slug)) problems.push("file name must be lowercase words joined by hyphens, e.g. why-we-believe.md");

  const parts = splitFrontMatter(source);
  if (!parts) return [...problems, "file must start with a --- header block, see the README in this folder"];

  let head: Record<string, unknown>;
  try {
    const parsed: unknown = parseYaml(parts.head);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("the header is empty");
    head = parsed as Record<string, unknown>;
  } catch (e) {
    return [...problems, `header could not be read: ${(e as Error).message.split("\n")[0]}`];
  }

  for (const key of Object.keys(head))
    if (!fields.has(key)) problems.push(`unknown header field "${key}", allowed: ${[...fields].join(", ")}`);
  if (head.draft !== undefined && typeof head.draft !== "boolean") problems.push(`"draft" must be true or false`);

  const title = text(head.title, "title", problems, 120);
  const summary = text(head.summary, "summary", problems, 320);

  const topic = head.topic as Topic;
  if (!topicIds.includes(topic)) problems.push(`"topic" must be one of: ${topicIds.join(", ")}`);

  const date = typeof head.date === "string" ? head.date.trim() : "";
  if (!validDate(date)) problems.push(`"date" must be a real date written YYYY-MM-DD, e.g. 2026-11-06`);

  let authors = [defaultAuthor];
  if (head.authors !== undefined) {
    const list = typeof head.authors === "string" ? [head.authors] : head.authors;
    if (!Array.isArray(list) || !list.length || list.some((a) => typeof a !== "string" || !a.trim() || a.length > 80))
      problems.push(`"authors" must be a name or a list of names`);
    else authors = list.map((a: string) => a.trim());
  }

  let pdf: string | undefined;
  if (head.pdf !== undefined) {
    pdf = typeof head.pdf === "string" ? head.pdf.trim() : "";
    if (pdf.startsWith("/")) {
      if (!/^\/papers\/[\w.-]+\.pdf$/.test(pdf)) problems.push(`"pdf" on this site must look like /papers/file-name.pdf`);
      else {
        const p = sizeProblem('"pdf"', pdf, "papers", maxPdfBytes);
        if (p) problems.push(p);
      }
    } else if (!/^https:\/\/[^\s/]+\.[^\s/]+\S*$/.test(pdf)) problems.push(`"pdf" must be an https:// link or /papers/file-name.pdf`);
  }

  // Any length is fine; only a published article needs text at all.
  const body = parts.body.trim();
  if (!body && head.draft !== true) problems.push("the article has no text under the header");
  checkBody(parser.parse(parts.body), parts.offset, problems);

  if (problems.length) return problems;
  if (head.draft === true) return null;
  return { slug, title, topic, date, summary, authors, ...(pdf ? { pdf } : {}), body };
}

function load(): Article[] {
  const files = fs.existsSync(articlesDir) ? fs.readdirSync(articlesDir).filter((f) => f.endsWith(".md") && f !== "README.md" && !f.startsWith("_")) : [];
  const errors: string[] = [];
  const articles: Article[] = [];
  for (const file of files) {
    const result = parseArticle(file, fs.readFileSync(path.join(articlesDir, file), "utf8"));
    if (Array.isArray(result)) errors.push(`${file}:\n${result.map((p) => `  - ${p}`).join("\n")}`);
    else if (result) articles.push(result);
  }
  if (errors.length) throw new Error(`Some articles in src/content/articles need fixing:\n\n${errors.join("\n\n")}\n`);
  return articles.sort((a, b) => b.date.localeCompare(a.date));
}

/** Published articles, newest first. Drafts are left out. */
export const articles: Article[] = load();

export const articlePath = (a: Article) => `/research/${a.slug}`;

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/** True when `pdf` is a file on this site rather than a link elsewhere. */
export const pdfIsLocal = (a: Article) => !!a.pdf?.startsWith("/");
