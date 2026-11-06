import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/article";
import { Blocks, PageHero } from "@/components/blocks/render";
import { JsonLd, articleLd, paperLd } from "@/components/seo/json-ld";
import { articlePath, getArticle } from "@/content/articles";
import { getPaper, paperPage, paperPath, researchSlugs, topics } from "@/content/research";
import { pageMetadata } from "@/lib/seo";
import { PageTransition } from "@/components/ui/page-transition";

type Params = PageProps<"/research/[slug]">["params"];

// Same as the content pages: unknown slugs answer with a real 404.
export const ensureStatic = "navigation";

/** Paper summaries and Markdown articles share /research/[slug]. */
export function generateStaticParams() {
  return researchSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const slug = (await params).slug;
  const article = getArticle(slug);
  if (article) return pageMetadata({ title: article.title, description: article.summary, path: articlePath(article) });
  const paper = getPaper(slug);
  if (!paper?.summary) return {};
  return {
    ...pageMetadata({ title: paper.summary.title, description: paper.summary.lede, path: paperPath(paper) }),
    // Highwire tags so Google Scholar ties this page to the published paper.
    other: {
      citation_title: paper.title,
      citation_author: paper.authors,
      citation_publication_date: paper.date.replaceAll("-", "/"),
      ...(paper.journal ? { citation_journal_title: paper.journal } : {}),
      citation_doi: paper.doi,
    },
  };
}

export default async function ResearchPage({ params }: PageProps<"/research/[slug]">) {
  const slug = (await params).slug;
  const article = getArticle(slug);
  if (article) {
    const topic = topics.find((t) => t.id === article.topic)!;
    return (
      <PageTransition>
        <PageHero hero={{ label: `Article · ${topic.label}`, title: article.title, lede: article.summary }} />
        <ArticleBody article={article} />
        <Blocks
          blocks={[
            {
              type: "cta",
              title: "Have a question about this article?",
              body: "Ask us about anything you read here, or about Islam in general.",
              actions: [
                { label: "Ask a question", href: "/contact" },
                { label: "All research", href: "/research", variant: "secondary" },
              ],
            },
          ]}
        />
        <JsonLd data={articleLd(article)} />
      </PageTransition>
    );
  }

  const paper = getPaper(slug);
  if (!paper?.summary) notFound();
  const page = paperPage({ ...paper, summary: paper.summary });
  return (
    <PageTransition>
      <PageHero hero={page.hero} />
      <Blocks blocks={page.blocks} />
      <JsonLd data={paperLd(paper)} />
    </PageTransition>
  );
}
