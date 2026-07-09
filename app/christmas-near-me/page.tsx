import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LocalMarketCard from "@/components/LocalMarketCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import SectionHeader from "@/components/SectionHeader";
import { localMarkets } from "@/lib/localMarkets";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Christmas Near Me Local Holiday Guides",
  description: "Explore planned Holiday Road Map local Christmas guides for events, lights, markets, tree farms, date ideas, family activities, and local gift stops.",
  path: "/christmas-near-me"
});

export default function ChristmasNearMePage() {
  return (
    <>
      <Hero
        eyebrow="Christmas Near Me"
        title="Local Christmas guides, built carefully from verified sources."
        description="This is the index for MerryMap city pages. Planned markets stay clearly labeled until event details, dates, hours, and official source links are verified."
        primaryCta={{ label: "Explore MerryMap", href: "/merrymap" }}
        secondaryCta={{ label: "Plan with printables", href: "/printables" }}
      />
      <section className="section container">
        <SectionHeader
          eyebrow="Local market index"
          title="Choose a city route."
          description="Each market page supports local SEO, event discovery, local gift stops, internal links to gifts, and printable planning tools without inventing listings."
        />
        <div className="market-list">
          {localMarkets.map((market) => <LocalMarketCard key={market.href} market={market} />)}
        </div>
      </section>
      <section className="section container">
        <NewsletterSignup context="merrymap" />
      </section>
    </>
  );
}
