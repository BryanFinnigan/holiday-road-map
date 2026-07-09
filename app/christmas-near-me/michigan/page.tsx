import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LocalMarketCard from "@/components/LocalMarketCard";
import SectionHeader from "@/components/SectionHeader";
import { getLocalMarketsByState } from "@/lib/localMarkets";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Christmas in Michigan Local Holiday Guides",
  description: "Browse planned Holiday Road Map Michigan Christmas guides, starting with the Detroit sample MerryMap page.",
  path: "/christmas-near-me/michigan"
});

export default function MichiganChristmasPage() {
  const markets = getLocalMarketsByState("michigan");

  return (
    <>
      <Hero
        eyebrow="Michigan MerryMap"
        title="Christmas in Michigan, organized by local routes."
        description="Start with the Detroit sample market, then expand into additional Michigan cities only after local source verification."
        primaryCta={{ label: "View Detroit sample", href: "/christmas-near-me/michigan/detroit" }}
        secondaryCta={{ label: "Explore MerryMap", href: "/merrymap" }}
      />
      <section className="section container">
        <SectionHeader
          eyebrow="Michigan markets"
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
