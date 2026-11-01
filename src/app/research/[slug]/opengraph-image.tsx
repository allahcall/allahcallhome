import { getPaper, summarized } from "@/content/research";
import { ogSize, shareCard } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: Research`;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return summarized.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const paper = getPaper((await params).slug);
  return shareCard({ label: "Research", title: paper?.summary?.title ?? site.name });
}
