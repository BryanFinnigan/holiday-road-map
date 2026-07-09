import type { Metadata } from "next";
import PrintableDetailPage from "@/components/PrintableDetailPage";
import { getPlannerPageMetadata } from "@/lib/plannerPages";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getPlannerPageMetadata("holiday-budget-planner"));

export default function HolidayBudgetPlannerPrintablePage() {
  return <PrintableDetailPage slug="holiday-budget-planner" />;
}
