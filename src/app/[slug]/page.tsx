import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Blocks, PageHero } from "@/components/blocks/render";
import { getPage, pages } from "@/content/pages";
import { imageSrc } from "@/lib/image";

type Params = PageProps<"/[slug]">["params"];

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
    <div aria-hidden className="wrap animate-pulse pt-14 md:pt-22">
      <div className="h-4 w-20 bg-alt" />
      <div className="mt-6 h-14 w-2/3 bg-alt md:h-24" />
      <div className="mt-12 aspect-[16/10] bg-alt md:mt-16 md:aspect-[21/8]" />
    </div>
  );
}
