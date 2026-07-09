import type { Metadata } from "next";
import PlannerLanding from "@/components/PlannerLanding";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "September 1 to January 15 Christmas Planner",
  description: "Explore the September 1 through January 15 planning rhythm behind The Holiday Road Map Planner.",
  path: "/planner/september-1-january-15"
});

export default function PlannerTimelinePage() {
  return <PlannerLanding />;
}
