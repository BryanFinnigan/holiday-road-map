import type { Metadata } from "next";
import PlannerLanding from "@/components/PlannerLanding";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "The Holiday Road Map Planner Product Preview",
  description: "Preview the future Holiday Road Map Planner product, a September 1 through January 15 Christmas planning system.",
  path: "/planner/holiday-road-map-planner"
});

export default function HolidayRoadMapPlannerProductPage() {
  return <PlannerLanding />;
}
