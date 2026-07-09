import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LocalMarketCard from "@/components/LocalMarketCard";
import SectionHeader from "@/components/SectionHeader";
import { getLocalMarketsByState } from "@/lib/localMarkets";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Christmas in Illinois Local Holiday Guides",
  description: "Browse planned Holiday Road Map Illinois Christmas guides, starting with the Chicago MerryMap page.",
  path: "/christmas-near-me/illinois"
});

export default function IllinoisChristmasPage() {
  const markets = getLocalMarketsByState("illinois");

  return (
    <>
      <Hero
        eyebrow="Illinois MerryMap"
        title="Christmas in Illinois, organized by local routes."
        description="Start with the Chicago planned market, then expand only after local source verification."
        primaryCta={{ label: "View Chicago page", href: "/christmas-near-me/illinois/chicago" }}
        secondaryCta={{ label: "Explore MerryMap", href: "/merrymap" }}
      />
      <section className="section container">
        <SectionHeader
          eyebrow="Illinois markets"
          title="Verified-first local pages."
          description="Each city page should clearly state its verification status before presenting event details."
        />
        <div className="market-list">
          {markets.map((market) => <LocalMarketCard key={market.href} market={market} />)}
        </div>
      </section>
    </>
  );
}
