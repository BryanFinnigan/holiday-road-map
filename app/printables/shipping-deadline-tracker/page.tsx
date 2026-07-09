import type { Metadata } from "next";
import PrintableDetailPage from "@/components/PrintableDetailPage";
import { getPlannerPageMetadata } from "@/lib/plannerPages";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getPlannerPageMetadata("shipping-deadline-tracker"));

export default function ShippingDeadlineTrackerPrintablePage() {
  return <PrintableDetailPage slug="shipping-deadline-tracker" />;
}
