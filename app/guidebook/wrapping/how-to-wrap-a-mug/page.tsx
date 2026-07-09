import type { Metadata } from "next";
import WrappingTutorialPage from "@/components/WrappingTutorialPage";
import { getWrappingTutorialMetadata } from "@/lib/wrappingTutorials";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getWrappingTutorialMetadata("how-to-wrap-a-mug"));

export default function HowToWrapAMugPage() {
  return <WrappingTutorialPage slug="how-to-wrap-a-mug" />;
}
