import { getArticle } from "@/content/articles";
import { getPaper, researchSlugs } from "@/content/research";
import { ogSize, shareCard } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: Research`;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return researchSlugs.map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const article = getArticle(slug);
  if (article) return shareCard({ label: "Article", title: article.title });
  return shareCard({ label: "Research", title: getPaper(slug)?.summary?.title ?? site.name });
}
