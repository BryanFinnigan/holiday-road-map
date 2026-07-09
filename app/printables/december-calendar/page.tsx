import type { Metadata } from "next";
import PrintableDetailPage from "@/components/PrintableDetailPage";
import { getPlannerPageMetadata } from "@/lib/plannerPages";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getPlannerPageMetadata("december-calendar"));

export default function DecemberCalendarPrintablePage() {
  return <PrintableDetailPage slug="december-calendar" />;
}
