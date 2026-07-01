import type { Metadata } from "next";
import Link from "next/link";
import Disclosure from "@/components/Disclosure";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsletterSignup";
import SectionHeader from "@/components/SectionHeader";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Holiday Road Map",
  description: "Plan Christmas with GiftMatch, printable Road Map Pages, MerryMap local holiday guides, WrapLab tutorials, and The Holiday Guidebook.",
  path: "/"
});

const features = [
  {
    title: "GiftMatch",
    label: "Gift tool",
    icon: "🎁",
    href: "/giftmatch",
    description: "A simple matching tool that uses sample GiftGraph data to suggest thoughtful gifts by recipient, budget, personality, and vibe."
  },
  {
    title: "Road Map Pages",
    label: "Free printables",
    icon: "▦",
    href: "/printables",
    description: "Printable planner pages for gift tracking, budgets, calendars, shipping deadlines, and Christmas meals."
  },
  {
    title: "MerryMap",
    label: "Local discovery",
    icon: "⌖",
    href: "/merrymap",
    description: "A scalable local Christmas guide system for events, lights, markets, tree farms, free activities, and date ideas."
  },
  {
    title: "The Holiday Guidebook",
    label: "Content hub",
    icon: "✍",
    href: "/guidebook",
    description: "Magazine-like guides for gifts, wrapping, planning, decorating, hosting, and practical Christmas decisions."
  },
  {
    title: "WrapLab",
    label: "Tutorials",
    icon: "〰",
    href: "/guidebook/wrapping",
    description: "Straightforward wrapping tutorials for common gift shapes, clean corners, ribbons, bows, and awkward packages."
  },
  {
    title: "The Holiday Road Map Planner",
    label: "Paid planner concept",
    icon: "★",
    href: "/planner",
    description: "A future print-on-demand planner designed around the full September 1 through January 15 holiday season."
  }
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Holiday Road Map"
        title="Your Road Map for a Calmer Christmas"
        description="Find thoughtful gifts, plan the season, print useful holiday pages, discover local events, and learn simple wrapping tricks — all in one place."
        primaryCta={{ label: "Start GiftMatch", href: "/giftmatch" }}
        secondaryCta={{ label: "Download Free Planner Pages", href: "/printables" }}
      />

      <section className="section container">
        <SectionHeader
          eyebrow="The full seasonal system"
          title="One map for gifts, plans, places, and the little details."
          description="Holiday Road Map is built to grow into a trusted Christmas planning ecosystem: editorial content, structured gift data, local discovery pages, printable planning tools, and future matching products."
        />
        <div className="feature-grid">
          {features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
        </div>
      </section>

      <section className="section container split-panel">
        <div>
          <p className="eyebrow">GiftGraph foundation</p>
          <h2>Gift recommendations should feel edited, not dumped into a grid.</h2>
          <p>GiftGraph will eventually organize gift records by recipient, budget, personality, timing, category, buying context, avoidances, and editorial notes. In this MVP, GiftMatch uses a compact static dataset so the structure is easy to test before adding a database or affiliate feeds.</p>
          <div className="button-row">
            <Link className="button primary" href="/giftmatch">Try the matcher</Link>
            <Link className="button text-link" href="/gifts/by-budget/under-50">Browse gifts under $50</Link>
          </div>
        </div>
        <Disclosure />
      </section>

      <section className="section container">
        <NewsletterSignup />
      </section>
    </>
  );
}
