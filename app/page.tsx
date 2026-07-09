import type { Metadata } from "next";
import Link from "next/link";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FeatureCard from "@/components/FeatureCard";
import GiftGuideGrid from "@/components/GiftGuideGrid";
import Hero from "@/components/Hero";
import LocalMarketCard from "@/components/LocalMarketCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import RoadMapPageCard from "@/components/RoadMapPageCard";
import SectionHeader from "@/components/SectionHeader";
import { getFeaturedGiftGuides } from "@/lib/giftGuides";
import { localMarkets } from "@/lib/localMarkets";
import { getFeaturedPlannerPages } from "@/lib/plannerPages";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Holiday Road Map",
  description: "Plan a less stressful, more joyful Christmas with GiftMatch, gift guides, free Road Map Pages, MerryMap local guides, WrapLab tutorials, and The Holiday Road Map Planner.",
  path: "/"
});

const productPillars = [
  {
    title: "GiftMatch",
    label: "Gift finder",
    icon: "🎁",
    href: "/giftmatch",
    description: "A simple matching tool that routes shoppers by recipient, budget, personality, vibe, and avoidances."
  },
  {
    title: "Gift Guides",
    label: "Affiliate-ready SEO",
    icon: "✦",
    href: "/gifts",
    description: "High-intent gift routes by recipient, budget, timing, and style, with honest product-link states."
  },
  {
    title: "Road Map Pages",
    label: "Free printables",
    icon: "▦",
    href: "/printables",
    description: "A free holiday calendar library for gifts, budgets, shipping, meals, cards, wrapping, and Christmas week."
  },
  {
    title: "The Holiday Road Map Planner",
    label: "Premium planner · coming soon",
    icon: "★",
    href: "/planner",
    description: "A future September 1 through January 15 planning system for the full Christmas season."
  },
  {
    title: "MerryMap",
    label: "Local discovery",
    icon: "⌖",
    href: "/merrymap",
    description: "Verified-first local Christmas guides for events, lights, markets, tree farms, family activities, and gift stops."
  },
  {
    title: "WrapLab",
    label: "Tutorials",
    icon: "〰",
    href: "/guidebook/wrapping",
    description: "Practical wrapping tutorials with future supply links and printable checklist tie-ins."
  }
];

const seasonalRoute = [
  "Start GiftMatch when you know the person but not the gift.",
  "Browse gift guides when you know the budget or recipient.",
  "Download Road Map Pages when the season starts feeling scattered.",
  "Use MerryMap for local Christmas outings and gift stops.",
  "Use WrapLab and the planner path when December details pile up."
];

export default function HomePage() {
  const featuredGuides = getFeaturedGiftGuides(6);
  const featuredPages = getFeaturedPlannerPages(3);
  const featuredMarkets = localMarkets.slice(0, 3);

  return (
    <>
      <Hero
        eyebrow="Holiday Road Map"
        title="Your Road Map for a Calmer Christmas"
        description="Plan the season. Find the gifts. Enjoy the road. Holiday Road Map helps you match better gifts, print useful planning pages, discover local Christmas stops, learn wrapping shortcuts, and follow a less stressful, more joyful route through the holidays."
        primaryCta={{ label: "Start GiftMatch", href: "/giftmatch" }}
        secondaryCta={{ label: "Browse Gift Guides", href: "/gifts" }}
      />

      <section className="section container">
        <SectionHeader
          eyebrow="The full seasonal system"
          title="One map for gifts, plans, places, and the little details."
          description="Featured homepage stops are intentionally limited to the highest-value paths: matching, gift guides, printables, planner interest, local discovery, wrapping help, and newsletter capture."
        />
        <div className="feature-grid">
          {productPillars.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
        </div>
      </section>

      <section className="section container compact-section">
        <SectionHeader
          eyebrow="Featured gift routes"
          title="Gift guides built for helpful decisions and future affiliate revenue."
          description="These guides are structured for real retailer links later, but placeholder recommendations stay clearly labeled until approved affiliate URLs are added."
        />
        <GiftGuideGrid guides={featuredGuides} />
        <div className="inline-cta">
          <p>Need a more personal starting point?</p>
          <Link className="button primary" href="/giftmatch">Start GiftMatch</Link>
          <Link className="button secondary" href="/gifts/by-budget/under-50">Gifts under $50</Link>
        </div>
      </section>

      <section className="section container compact-section">
        <SectionHeader
          eyebrow="Free Road Map Pages"
          title="Downloadable planning pages should become the lead magnet."
          description="The current library is ready for SVG/PDF files without pretending downloads exist before they are in the repo."
        />
        <div className="feature-grid">
          {featuredPages.map((page) => <RoadMapPageCard key={page.slug} page={page} />)}
        </div>
        <div className="inline-cta">
          <p>Preview the complete free library.</p>
          <Link className="button primary" href="/printables">Open Road Map Pages</Link>
          <Link className="button text-link" href="/planner">Preview the planner</Link>
        </div>
      </section>

      <section className="section container split-panel">
        <div>
          <p className="eyebrow">Seasonal route</p>
          <h2>Every major page should point to the next useful stop.</h2>
          <div className="article-list mini-route-list">
            {seasonalRoute.map((step, index) => (
              <article className="article-row" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><p>{step}</p></div>
              </article>
            ))}
          </div>
        </div>
        <AffiliateDisclosure />
      </section>

      <section className="section container compact-section">
        <SectionHeader
          eyebrow="MerryMap preview"
          title="Local Christmas pages stay useful and clearly verified."
          description="Detroit is the sample market. Chicago and Columbus are planned pages that should not claim live event details until official sources are checked."
        />
        <div className="market-list">
          {featuredMarkets.map((market) => <LocalMarketCard key={market.href} market={market} />)}
        </div>
      </section>

      <section className="section container">
        <NewsletterSignup context="homepage" />
      </section>
    </>
  );
}
