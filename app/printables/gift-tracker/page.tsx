import type { Metadata } from "next";
import PrintableDetailPage from "@/components/PrintableDetailPage";
import { getPlannerPageMetadata } from "@/lib/plannerPages";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getPlannerPageMetadata("gift-tracker"));

export default function GiftTrackerPrintablePage() {
  return <PrintableDetailPage slug="gift-tracker" />;
}
