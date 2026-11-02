import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocks, PageHero } from "@/components/blocks/render";
import { JsonLd, paperLd } from "@/components/seo/json-ld";
import { getPaper, paperPage, paperPath, summarized } from "@/content/research";
import { pageMetadata } from "@/lib/seo";
import { PageTransition } from "@/components/ui/page-transition";

type Params = PageProps<"/research/[slug]">["params"];

// Same as the content pages: unknown slugs answer with a real 404.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return summarized.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const paper = getPaper((await params).slug);
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

export default async function PaperPage({ params }: PageProps<"/research/[slug]">) {
  const paper = getPaper((await params).slug);
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
