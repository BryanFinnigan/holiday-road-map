import type { Metadata } from "next";
import PrintableDetailPage from "@/components/PrintableDetailPage";
import { getPlannerPageMetadata } from "@/lib/plannerPages";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getPlannerPageMetadata("card-and-mailing-list"));

export default function CardAndMailingListPrintablePage() {
  return <PrintableDetailPage slug="card-and-mailing-list" />;
}
