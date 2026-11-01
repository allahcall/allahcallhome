import { doiUrl, licenseUrl, paperPath, type Paper } from "@/content/research";
import type { Page } from "@/content/types";
import { nav, site } from "@/lib/site";

type Thing = Record<string, unknown>;

/** Structured data for search engines. `<` is escaped so content can never close the script tag. */
export function JsonLd({ data }: { data: Thing | Thing[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const orgId = `${site.url}/#organization`;

/** Who runs the site; rendered once in the root layout. */
export function siteLd(): Thing[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "NGO",
      "@id": orgId,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.png`, width: 512, height: 512 },
      description: site.description,
      email: site.email.display,
      telephone: site.phone.display.replace(/\s/g, ""),
      taxID: site.ein.replace(/^EIN\s+|\s+·.*$/g, ""),
      sameAs: site.socials.map((s) => s.href),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: site.email.display,
        telephone: site.phone.display.replace(/\s/g, ""),
        availableLanguage: "English",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": orgId },
    },
  ];
}

/** Home → section → page, using the main navigation to find the section. */
export function breadcrumbLd(page: Page): Thing {
  const path = `/${page.slug}`;
  const group = nav.find((g) => g.links.some((l) => l.href === path));
  const trail = [
    { name: "Home", url: site.url },
    ...(group && group.href !== path ? [{ name: group.label, url: `${site.url}${group.href}` }] : []),
    { name: page.title, url: `${site.url}${path}` },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: t.url })),
  };
}

export function faqLd(items: { q: string; a: string }[]): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Breadcrumb plus the paper itself, pointing at the published version by DOI. */
export function paperLd(paper: Paper): Thing[] {
  const url = `${site.url}${paperPath(paper)}`;
  const name = paper.summary?.title ?? paper.title;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { name: "Home", item: site.url },
        { name: "Research", item: `${site.url}/research` },
        { name, item: url },
      ].map((t, i) => ({ "@type": "ListItem", position: i + 1, ...t })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      headline: paper.title,
      abstract: paper.summary?.lede ?? paper.blurb,
      author: paper.authors.map((name) => ({ "@type": "Person", name })),
      datePublished: paper.date,
      ...(paper.journal ? { isPartOf: { "@type": "Periodical", name: paper.journal } } : {}),
      identifier: { "@type": "PropertyValue", propertyID: "DOI", value: paper.doi },
      sameAs: doiUrl(paper),
      license: licenseUrl(paper),
      mainEntityOfPage: url,
    },
  ];
}
