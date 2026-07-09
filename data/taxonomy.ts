import type { PageStatus } from "@/data/status";

export type TaxonomyNode = {
  label: string;
  href: string;
  pillar: "plan" | "find" | "explore" | "learn";
  statuses: PageStatus[];
  description: string;
};

export const taxonomy: TaxonomyNode[] = [
  {
    label: "GiftMatch",
    href: "/giftmatch",
    pillar: "find",
    statuses: ["featured", "high-priority-revenue"],
    description: "Primary gift-finding tool and guide-routing experience."
  },
  {
    label: "Gift Guides",
    href: "/gifts",
    pillar: "find",
    statuses: ["featured", "affiliate-ready", "high-priority-seo", "high-priority-revenue"],
    description: "Gift-guide hub by recipient, budget, timing, and gift style."
  },
  {
    label: "Road Map Pages",
    href: "/printables",
    pillar: "plan",
    statuses: ["featured", "downloadable", "planning-tool"],
    description: "Free printable library and newsletter lead magnet."
  },
  {
    label: "The Holiday Road Map Planner",
    href: "/planner",
    pillar: "plan",
    statuses: ["coming-soon", "planning-tool", "high-priority-revenue"],
    description: "Future premium September 1 through January 15 planner product."
  },
  {
    label: "MerryMap",
    href: "/merrymap",
    pillar: "explore",
    statuses: ["featured", "high-priority-seo", "needs-verification"],
    description: "Local Christmas discovery hub for verified-first market pages."
  },
  {
    label: "WrapLab",
    href: "/guidebook/wrapping",
    pillar: "learn",
    statuses: ["featured", "affiliate-ready", "high-priority-seo"],
    description: "Wrapping tutorial hub with future supply affiliate modules."
  },
  {
    label: "The Road Map Letter",
    href: "/newsletter",
    pillar: "plan",
    statuses: ["featured", "high-priority-revenue"],
    description: "Seasonal newsletter and retention engine."
  }
];
