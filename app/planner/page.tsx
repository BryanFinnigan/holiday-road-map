import type { Metadata } from "next";
import PlannerLanding from "@/components/PlannerLanding";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "The Holiday Road Map Planner",
  description: "Preview The Holiday Road Map Planner, a future September 1 through January 15 Christmas planning system built around gifts, budgets, calendars, hosting, wrapping, and the after-Christmas reset.",
  path: "/planner"
});

export default function PlannerPage() {
  return <PlannerLanding />;
}
