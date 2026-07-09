import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LocalMarketCard from "@/components/LocalMarketCard";
import SectionHeader from "@/components/SectionHeader";
import { getLocalMarketsByState } from "@/lib/localMarkets";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Christmas in Ohio Local Holiday Guides",
  description: "Browse planned Holiday Road Map Ohio Christmas guides, starting with the Columbus MerryMap page.",
  path: "/christmas-near-me/ohio"
});

export default function OhioChristmasPage() {
  const markets = getLocalMarketsByState("ohio");

  return (
    <>
      <Hero
        eyebrow="Ohio MerryMap"
        title="Christmas in Ohio, organized by local routes."
        description="Start with the Columbus planned market, then expand only after local source verification."
        primaryCta={{ label: "View Columbus page", href: "/christmas-near-me/ohio/columbus" }}
        secondaryCta={{ label: "Explore MerryMap", href: "/merrymap" }}
      />
      <section className="section container">
        <SectionHeader
          eyebrow="Ohio markets"
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
