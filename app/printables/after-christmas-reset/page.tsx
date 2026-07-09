import type { Metadata } from "next";
import PrintableDetailPage from "@/components/PrintableDetailPage";
import { getPlannerPageMetadata } from "@/lib/plannerPages";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getPlannerPageMetadata("after-christmas-reset"));

export default function AfterChristmasResetPrintablePage() {
  return <PrintableDetailPage slug="after-christmas-reset" />;
}
