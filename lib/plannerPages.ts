import { plannerPages, type PlannerPageRecord } from "@/data/plannerPages";

export { plannerPages };
export type { PlannerPageRecord };

export function getPlannerPageBySlug(slug: string) {
  return plannerPages.find((page) => page.slug === slug);
}

export function getFeaturedPlannerPages(limit = 4) {
  return plannerPages.filter((page) => page.featured).slice(0, limit);
}

export function getPlannerPageMetadata(slug: string) {
  const page = getPlannerPageBySlug(slug);

  if (!page) {
    return {
      title: "Road Map Page",
      description: "Preview a Holiday Road Map printable planning page.",
      path: "/printables"
    };
  }

  return {
    title: `${page.title} Printable`,
    description: page.description,
    path: page.href
  };
}
