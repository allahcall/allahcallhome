import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Blocks, PageHero } from "@/components/blocks/render";
import { getPage, pages } from "@/content/pages";
import { imageSrc } from "@/lib/image";

type Params = PageProps<"/[slug]">["params"];

// Unlisted slugs then render in full before any bytes are sent, so notFound()
// can still answer with a 404 instead of a streamed 200 (or a 500 on Netlify).
export const ensureStatic = "navigation";

// Every slug is known at build time; unknown slugs fall through to notFound().
export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const page = getPage((await params).slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      images: page.hero.image ? [imageSrc(page.hero.image.src, 1200)] : undefined,
    },
  };
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
  return (
    <>
      <PageHero hero={page.hero} />
      <Blocks blocks={page.blocks} />
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
