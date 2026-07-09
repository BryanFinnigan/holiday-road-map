import type { Metadata } from "next";
import PrintableDetailPage from "@/components/PrintableDetailPage";
import { getPlannerPageMetadata } from "@/lib/plannerPages";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getPlannerPageMetadata("christmas-meal-planner"));

export default function ChristmasMealPlannerPrintablePage() {
  return <PrintableDetailPage slug="christmas-meal-planner" />;
}
