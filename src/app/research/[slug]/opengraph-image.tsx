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
  // The image renderer cannot shape Urdu; keep its title in page metadata.
  if (article) return shareCard(article.language === "ur"
    ? { label: "Article in Urdu", title: site.name }
    : { label: "Article", title: article.title });
  return shareCard({ label: "Research", title: getPaper(slug)?.summary?.title ?? site.name });
}
