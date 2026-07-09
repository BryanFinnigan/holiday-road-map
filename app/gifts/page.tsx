import type { Metadata } from "next";
import GiftGuideGrid from "@/components/GiftGuideGrid";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsletterSignup";
import SectionHeader from "@/components/SectionHeader";
import { giftGuides } from "@/lib/giftGuides";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Christmas Gift Guides",
  description: "Browse Holiday Road Map Christmas gift guides by recipient, budget, timing, and gift style.",
  path: "/gifts"
});

export default function GiftsIndexPage() {
  const featuredGuides = giftGuides.filter((guide) => guide.featured).sort((a, b) => b.seasonalPriority - a.seasonalPriority);
  const allGuides = giftGuides.filter((guide) => !guide.featured).sort((a, b) => b.seasonalPriority - a.seasonalPriority);

  return (
    <>
      <Hero
        eyebrow="Gift guides"
        title="Christmas gift guides organized by who, budget, timing, and style."
        description="Browse high-intent gift routes built for practical shopping, GiftMatch recommendations, future affiliate links, and helpful internal linking instead of endless product clutter."
        primaryCta={{ label: "Start GiftMatch", href: "/giftmatch" }}
        secondaryCta={{ label: "Gifts under $50", href: "/gifts/by-budget/under-50" }}
      />
      <section className="section container">
        <SectionHeader
          eyebrow="Featured revenue routes"
          title="Start with the guides most likely to help shoppers decide."
          description="Featured guides are intentionally limited so the homepage and gift hub stay focused on high-intent search, useful GiftMatch routing, and revenue-ready pages."
        />
        <GiftGuideGrid guides={featuredGuides} />
      </section>
      <section className="section container compact-section">
        <SectionHeader
          eyebrow="Additional taxonomy"
          title="More gift routes to build out as links and editorial depth are added."
          description="These pages are available for internal linking and SEO architecture, but only featured pages should be heavily promoted until each guide has enough useful content and real affiliate options."
        />
        <GiftGuideGrid guides={allGuides} />
      </section>
      <section className="section container">
        <NewsletterSignup context="gift-guide" />
      </section>
    </>
  );
}
