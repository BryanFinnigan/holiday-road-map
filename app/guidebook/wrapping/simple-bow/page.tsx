import type { Metadata } from "next";
import WrappingTutorialPage from "@/components/WrappingTutorialPage";
import { getWrappingTutorialMetadata } from "@/lib/wrappingTutorials";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getWrappingTutorialMetadata("simple-bow"));

export default function SimpleBowPage() {
  return <WrappingTutorialPage slug="simple-bow" />;
}
