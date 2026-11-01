import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
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

export default function ContentPage({ params }: PageProps<"/[slug]">) {
  // The boundary lets client navigations between content pages show the hero
  // placeholder at once while the page streams in.
  return (
    <Suspense fallback={<HeroPlaceholder />}>
      <Content params={params} />
    </Suspense>
  );
}

async function Content({ params }: { params: Params }) {
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

function HeroPlaceholder() {
  return (
    <div aria-hidden className="wrap animate-pulse pt-1.5 md:pt-4">
      <div className="min-h-[340px] rounded-[24px] bg-alt md:min-h-[460px]" />
    </div>
  );
}
