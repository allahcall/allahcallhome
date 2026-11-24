import { articles, articlePath } from "@/content/articles";
import { papers, topics, paperPath, doiUrl } from "@/content/research";
import { nav, type NavGroup } from "./site";

// Build on the server; only link labels and URLs are passed to client menus.
export const navigation: NavGroup[] = nav.map((group) => group.href !== "/articles" ? group : {
  ...group,
  links: [
    { label: "All articles", href: "/articles" },
    ...topics.map((topic) => ({
      label: topic.label,
      href: `/articles#${topic.id}`,
      links: [
        ...articles.filter((article) => article.topic === topic.id).map((article) => ({
          label: article.title,
          href: articlePath(article),
        })),
        ...papers.filter((paper) => paper.topic === topic.id).map((paper) => ({
          label: paper.summary?.title ?? paper.title,
          href: paper.summary ? paperPath(paper) : doiUrl(paper),
        })),
      ],
    })),
    { label: "Books", href: "/articles#books" },
  ],
});
