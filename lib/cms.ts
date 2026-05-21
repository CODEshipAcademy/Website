export type CmsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  locale: "en" | "fr";
};

export async function getArticlesFromCMS(): Promise<CmsArticle[]> {
  // Placeholder adapter for headless CMS integration (Sanity, Strapi, Contentful, etc.)
  return [];
}
