import GiftGuideGrid from "@/components/GiftGuideGrid";
import { getGiftGuidesBySlugs } from "@/lib/giftGuides";

type RelatedGiftGuidesProps = {
  slugs: string[];
  heading?: string;
};

export default function RelatedGiftGuides({ slugs, heading = "Related gift guides" }: RelatedGiftGuidesProps) {
  const guides = getGiftGuidesBySlugs(slugs, 4);

  if (guides.length === 0) return null;

  return (
    <section className="related-guides" aria-labelledby="related-guides-heading">
      <h2 id="related-guides-heading">{heading}</h2>
      <GiftGuideGrid guides={guides} />
    </section>
  );
}
