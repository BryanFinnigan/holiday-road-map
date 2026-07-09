export type PageStatus =
  | "featured"
  | "affiliate-ready"
  | "planning-tool"
  | "downloadable"
  | "sample"
  | "coming-soon"
  | "needs-verification"
  | "high-priority-seo"
  | "high-priority-revenue";

export const pageStatusLabels: Record<PageStatus, string> = {
  featured: "Featured",
  "affiliate-ready": "Affiliate-ready",
  "planning-tool": "Planning tool",
  downloadable: "Downloadable",
  sample: "Sample",
  "coming-soon": "Coming soon",
  "needs-verification": "Needs verification",
  "high-priority-seo": "High-priority SEO",
  "high-priority-revenue": "High-priority revenue"
};

export const pageStatusDescriptions: Record<PageStatus, string> = {
  featured: "Eligible for homepage and major navigation placement.",
  "affiliate-ready": "Structured to support real retailer links when approved URLs are added.",
  "planning-tool": "Useful as a planning or checklist experience, even before monetization.",
  downloadable: "Designed for downloadable Road Map Pages or file-backed lead magnets.",
  sample: "Useful as a model page, but not positioned as final commercial content.",
  "coming-soon": "Honest placeholder for an upcoming page, file, guide, or product.",
  "needs-verification": "Requires primary-source review before publishing time-sensitive facts.",
  "high-priority-seo": "Important for organic search architecture and internal linking.",
  "high-priority-revenue": "Important for affiliate clicks, planner interest, newsletter capture, or sponsorship potential."
};

export function formatStatus(status: PageStatus | string) {
  return pageStatusLabels[status as PageStatus] ?? status;
}
