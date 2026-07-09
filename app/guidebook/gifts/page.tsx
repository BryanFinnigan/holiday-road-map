import type { Metadata } from "next";
import Link from "next/link";
import GiftGuideGrid from "@/components/GiftGuideGrid";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { getFeaturedGiftGuides } from "@/lib/giftGuides";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Christmas Gift Guides and Listicles",
  description: "Browse Holiday Road Map Christmas gift listicles and gift guide routes for moms, dads, teachers, coworkers, stockings, budgets, and last-minute gifting.",
  path: "/guidebook/gifts"
});

export default function GiftGuidesPage() {
  return (
    <>
      <Hero
        eyebrow="Gift guides"
        title="Christmas gift lists that feel edited, useful, and calm."
        description="This Guidebook section connects the editorial gift stories to the structured gift taxonomy used by GiftMatch and the gift hub."
        primaryCta={{ label: "Browse gift hub", href: "/gifts" }}
        secondaryCta={{ label: "Start GiftMatch", href: "/giftmatch" }}
      />
      <section className="section container">
        <SectionHeader
          eyebrow="Featured list routes"
          title="Gift stories to build first"
          description="These are the highest-priority routes for search demand, affiliate conversion, newsletter reuse, and social packaging."
        />
        <GiftGuideGrid guides={getFeaturedGiftGuides(8)} />
        <div className="inline-cta">
          <p>Need the full taxonomy?</p>
          <Link className="button primary" href="/gifts">Open all gift guides</Link>
        </div>
        <AffiliateDisclosure />
      </section>
    </>
  );
}
