import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocks, PageHero } from "@/components/blocks/render";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/seo/json-ld";
import { getPage, pages } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

type Params = PageProps<"/[slug]">["params"];

// Unlisted slugs then render in full before any bytes are sent, so notFound()
// can still answer with a 404 instead of a streamed 200.
export const ensureStatic = "navigation";

// Every slug is known at build time; unknown slugs fall through to notFound().
export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const page = getPage((await params).slug);
  if (!page) return {};
  return pageMetadata({ title: page.title, description: page.description, path: `/${page.slug}` });
}

// Params are awaited outside any <Suspense> so each page prerenders as one
// in-order document: a fallback here was painted first and then swapped,
// shifting the footer and delaying the hero image.
export default async function ContentPage({ params }: PageProps<"/[slug]">) {
  const page = getPage((await params).slug);
  if (!page) notFound();
  const faqs = page.blocks.filter((b) => b.type === "faq");
  return (
    <>
      <PageHero hero={page.hero} />
      <Blocks blocks={page.blocks} />
      <JsonLd data={[breadcrumbLd(page), ...faqs.map((f) => faqLd(f.items))]} />
    </>
  );
}
