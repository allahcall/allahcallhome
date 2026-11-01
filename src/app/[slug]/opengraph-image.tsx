import { getPage, pages } from "@/content/pages";
import { ogSize, shareCard } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const page = getPage((await params).slug);
  return shareCard({ label: page?.hero.label ?? site.tagline, title: page?.title ?? site.name });
}
