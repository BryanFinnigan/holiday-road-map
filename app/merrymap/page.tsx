import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import LocalMarketCard from "@/components/LocalMarketCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import SectionHeader from "@/components/SectionHeader";
import { localMarkets } from "@/lib/localMarkets";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "MerryMap Local Christmas Discovery",
  description: "Explore the MerryMap local Christmas discovery system for events, tree farms, lights, markets, free events, date ideas, family activities, and local gift stops.",
  path: "/merrymap"
});

const categories = [
  "Christmas events",
  "Tree farms",
  "Christmas lights",
  "Holiday markets",
  "Free events",
  "Date ideas",
  "Family activities",
  "Local gift stops"
];

export default function MerryMapPage() {
  return (
    <>
      <Hero
        eyebrow="MerryMap"
        title="Find the local Christmas stops worth adding to your route."
        description="MerryMap is the local discovery side of Holiday Road Map: verified events, lights, markets, tree farms, free things to do, family activities, date ideas, and local gift-stop planning."
        primaryCta={{ label: "View local index", href: "/christmas-near-me" }}
        secondaryCta={{ label: "Plan with printables", href: "/printables" }}
      />
      <section className="section container">
        <SectionHeader
          eyebrow="Holiday Local Index"
          title="A scalable local guide structure for major markets."
          description="Start with planned market pages, keep verification status visible, and only promote listings after checking official local sources."
        />
        <div className="feature-grid">
          {categories.map((category) => (
            <article className="feature-card" key={category}>
              <div className="feature-icon" aria-hidden="true">⌖</div>
              <p className="card-label">Local category</p>
              <h3>{category}</h3>
              <p>Future MerryMap category section with verified listings, helpful notes, dates, cost guidance, and nearby route ideas.</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section container compact-section">
        <SectionHeader
          eyebrow="Seed markets"
          title="First local pages to build carefully."
          description="Detroit is the current sample route. Chicago and Columbus are planned pages and should not contain real event claims until research is complete."
        />
        <div className="market-list">
          {localMarkets.map((market) => <LocalMarketCard key={market.href} market={market} />)}
        </div>
        <div className="inline-cta">
          <p>Going out locally and still need gifts?</p>
          <Link className="button primary" href="/giftmatch">Start GiftMatch</Link>
          <Link className="button secondary" href="/gifts/last-minute">Browse last-minute gifts</Link>
        </div>
      </section>
      <section className="section container">
        <NewsletterSignup context="merrymap" />
      </section>
    </>
  );
}
