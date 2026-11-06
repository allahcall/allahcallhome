import Link from "next/link";
import type { ComponentProps } from "react";
import Markdown, { type Components, type ExtraProps } from "react-markdown";
import remarkGfm from "remark-gfm";
import { pdfIsLocal, type Article } from "@/content/articles";
import { longDate } from "@/content/research";
import { buttonClass } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

/**
 * Links inside articles: pages on this site go through <Link>, footnotes and
 * other sites are plain links. The URLs were already checked when the site built.
 */
function A({ href = "", children, node, ...rest }: ComponentProps<"a"> & ExtraProps) {
  void node; // react-markdown's syntax tree node, not an attribute for the DOM
  if (href.startsWith("/")) return <Link href={href} {...rest}>{children}</Link>;
  return (
    <a href={href} rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

const components: Components = {
  a: A,
  // The page hero holds the only <h1>; the build rejects # headings, this is a backstop.
  h1: ({ children }) => <h2>{children}</h2>,
  img: ({ src, alt }) =>
    typeof src === "string" && src.startsWith("/articles/") ? (
      // Local files under public/articles, checked at build time.
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt ?? ""} loading="lazy" decoding="async" />
    ) : null,
};

export function ArticleBody({ article }: { article: Article }) {
  const pdfLabel = pdfIsLocal(article) ? "Download the paper (PDF)" : "Read the full paper";
  return (
    <Section>
      <article className="card p-6 md:p-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
          <p className="text-[14px] text-muted">
            <span className="font-medium text-ink-2">{article.authors.join(", ")}</span>
            <span aria-hidden> · </span>
            <time dateTime={article.date}>{longDate(article.date)}</time>
          </p>
          {article.pdf && (
            <a href={article.pdf} rel="noopener noreferrer" className={buttonClass("secondary", "min-h-10 rounded-[12px] text-[14px]")}>
              {pdfLabel}
            </a>
          )}
        </div>
        <div className="article-body mt-6 md:mt-8">
          <Markdown remarkPlugins={[remarkGfm]} skipHtml components={components}>
            {article.body}
          </Markdown>
        </div>
      </article>
    </Section>
  );
}
