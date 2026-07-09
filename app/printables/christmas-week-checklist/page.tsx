import type { Metadata } from "next";
import PrintableDetailPage from "@/components/PrintableDetailPage";
import { getPlannerPageMetadata } from "@/lib/plannerPages";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getPlannerPageMetadata("christmas-week-checklist"));

export default function ChristmasWeekChecklistPrintablePage() {
  return <PrintableDetailPage slug="christmas-week-checklist" />;
}
