import type { Metadata } from "next";
import PrintableDetailPage from "@/components/PrintableDetailPage";
import { getPlannerPageMetadata } from "@/lib/plannerPages";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getPlannerPageMetadata("wrapping-supply-checklist"));

export default function WrappingSupplyChecklistPrintablePage() {
  return <PrintableDetailPage slug="wrapping-supply-checklist" />;
}
