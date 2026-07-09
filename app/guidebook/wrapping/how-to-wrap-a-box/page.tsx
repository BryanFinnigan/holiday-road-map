import type { Metadata } from "next";
import WrappingTutorialPage from "@/components/WrappingTutorialPage";
import { getWrappingTutorialMetadata } from "@/lib/wrappingTutorials";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getWrappingTutorialMetadata("how-to-wrap-a-box"));

export default function HowToWrapABoxPage() {
  return <WrappingTutorialPage slug="how-to-wrap-a-box" />;
}
