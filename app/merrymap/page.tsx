import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { localMarkets } from "@/data/localMarkets";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "MerryMap Local Christmas Discovery",
  description: "Explore the MerryMap local Christmas discovery system for events, tree farms, lights, markets, free events, date ideas, and family activities.",
  path: "/merrymap"
});

const categories = [
  "Christmas events",
  "Tree farms",
  "Christmas lights",
  "Holiday markets",
  "Free events",
  "Date ideas",
  "Family activities"
];

export default function MerryMapPage() {
  return (
    <>
      <Hero
        eyebrow="MerryMap"
        title="Find the local Christmas stops worth adding to your route."
        description="MerryMap is the local discovery side of Holiday Road Map: events, tree farms, lights, markets, free things to do, family activities, and seasonal date ideas."
        primaryCta={{ label: "View Detroit sample", href: "/christmas-near-me/michigan/detroit" }}
        secondaryCta={{ label: "Explore the Guidebook", href: "/guidebook" }}
      />
      <section className="section container">
        <SectionHeader
          eyebrow="Holiday Local Index"
          title="A scalable local guide structure for every major market."
          description="Start with major markets by state, then build deeper city pages from verified local data, event calendars, map listings, editorial notes, and seasonal updates."
        />
        <div className="feature-grid">
          {categories.map((category) => (
            <article className="feature-card" key={category}>
              <div className="feature-icon" aria-hidden="true">⌖</div>
              <p className="card-label">Local category</p>
              <h2>{category}</h2>
              <p>Future MerryMap category page with verified listings, helpful notes, dates, cost guidance, and nearby route ideas.</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section container compact-section">
        <SectionHeader
          eyebrow="First market samples"
          title="Local markets to seed first"
          description="Detroit is included as the first sample route. Other markets are placeholders until real local pages are researched."
        />
        <div className="market-list">
          {localMarkets.map((market) => (
            <Link className="market-card" key={`${market.city}-${market.state}`} href={market.href}>
              <span>{market.status}</span>
              <strong>{market.city}, {market.state}</strong>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
