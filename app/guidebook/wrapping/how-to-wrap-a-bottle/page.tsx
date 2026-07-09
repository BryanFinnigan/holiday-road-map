import type { Metadata } from "next";
import WrappingTutorialPage from "@/components/WrappingTutorialPage";
import { getWrappingTutorialMetadata } from "@/lib/wrappingTutorials";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getWrappingTutorialMetadata("how-to-wrap-a-bottle"));

export default function HowToWrapABottlePage() {
  return <WrappingTutorialPage slug="how-to-wrap-a-bottle" />;
}
