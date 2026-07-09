import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsletterSignup";
import RoadMapPageCard from "@/components/RoadMapPageCard";
import SectionHeader from "@/components/SectionHeader";
import { plannerPages } from "@/lib/plannerPages";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Road Map Pages Free Holiday Calendar Library",
  description: "Preview free Holiday Road Map printable planner pages including a gift tracker, holiday budget planner, December calendar, shipping tracker, meal planner, and wrapping checklist.",
  path: "/printables"
});

export default function PrintablesPage() {
  return (
    <>
      <Hero
        eyebrow="Road Map Pages"
        title="Road Map Pages: Free Holiday Calendar Library"
        description="Preview practical holiday planning pages for gifts, budgets, calendars, shipping, meals, cards, wrapping, Christmas week, and the after-Christmas reset. Files are clearly marked until real SVG/PDF downloads are added."
        primaryCta={{ label: "Preview the pages", href: "#page-library" }}
        secondaryCta={{ label: "See the planner concept", href: "/planner" }}
      />
      <section className="section container" id="page-library">
        <SectionHeader
          eyebrow="Free printable library"
          title="Choose the page you need before downloading."
          description="Each page is structured as an individual download target so the site can collect email interest, link naturally to the premium planner, and avoid fake download links while files are still being designed."
        />
        <div className="feature-grid">
          {plannerPages.map((page) => <RoadMapPageCard key={page.slug} page={page} />)}
        </div>
        <div className="inline-cta">
          <p>Starter bundle coming soon: Gift Tracker, Budget Planner, December Calendar, Shipping Tracker, and Meal Planner.</p>
          <Link className="button primary" href="#road-map-letter-heading">Sign up for our newsletter</Link>
        </div>
      </section>
      <section className="section container compact-section">
        <SectionHeader
          eyebrow="Planner upgrade path"
          title="Free pages now, complete planner later."
          description="Road Map Pages are the lead magnet. The Holiday Road Map Planner is the future paid system that turns the same planning logic into a September 1 through January 15 product."
        />
        <Link className="button secondary" href="/planner">Preview The Holiday Road Map Planner</Link>
      </section>
      <section className="section container">
        <NewsletterSignup context="printables" />
      </section>
    </>
  );
}
