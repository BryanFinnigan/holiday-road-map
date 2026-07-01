import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Christmas Planning Guides",
  description: "Practical Christmas planning guides for calendars, gift tracking, budgets, shipping, meals, and seasonal routines.",
  path: "/guidebook/planning"
});

export default function PlanningGuidePage() {
  return (
    <>
      <Hero
        eyebrow="Planning"
        title="Christmas planning that makes the season easier to see."
        description="This guidebook section will turn calendars, gift lists, shipping dates, meals, cards, and gatherings into simple planning systems."
        primaryCta={{ label: "Get printables", href: "/printables" }}
        secondaryCta={{ label: "See planner concept", href: "/planner" }}
      />
      <section className="section container">
        <SectionHeader
          eyebrow="Starter planning articles"
          title="Build the planning library around common seasonal pressure points."
          description="Future articles can include checklists, printable tie-ins, newsletter prompts, and internal links to the September through January planner."
        />
        <div className="editorial-grid">
          <article><h2>How to start planning Christmas in September</h2><p>Define the route early without turning the whole fall into holiday homework.</p></article>
          <article><h2>A simple Christmas budget that actually includes extras</h2><p>Account for gifts, food, travel, décor, cards, shipping, hosting, and surprise costs.</p></article>
          <article><h2>The calm gift tracker system</h2><p>Move ideas from maybe to bought, shipped, wrapped, delivered, and thanked.</p></article>
        </div>
        <div className="inline-cta"><p>Ready to make it printable?</p><Link className="button primary" href="/printables">View Road Map Pages</Link></div>
      </section>
    </>
  );
}
