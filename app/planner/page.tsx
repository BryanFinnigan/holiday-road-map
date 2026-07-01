import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "The Holiday Road Map Planner",
  description: "Preview the Holiday Road Map Planner, a future Christmas planner built around the September 1 through January 15 season.",
  path: "/planner"
});

const months = [
  {
    title: "September: Set the Route",
    description: "Define the season, rough budget, travel plans, gift list, card list, traditions, and the first no-rush shopping ideas."
  },
  {
    title: "October: Prepare the Season",
    description: "Refine recipient notes, start printables, compare gift ideas, map events, plan décor, and set the early shipping strategy."
  },
  {
    title: "November: Shop and Schedule",
    description: "Move from ideas to decisions: track orders, sale windows, local pickup, meals, party dates, and wrapping supplies."
  },
  {
    title: "December: Celebrate",
    description: "Keep the month visible with calendars, hosting notes, gift status, school events, travel reminders, and room for small memories."
  },
  {
    title: "January 1–15: Reset and Remember",
    description: "Capture what worked, note returns, save addresses, track thank-you notes, organize decorations, and preserve ideas for next year."
  }
];

export default function PlannerPage() {
  return (
    <>
      <Hero
        eyebrow="The Holiday Road Map Planner"
        title="A Christmas planner that starts before the rush and ends after the reset."
        description="The paid planner concept covers September 1 through January 15, giving the season a beginning, a route, a celebration window, and a calm landing."
        primaryCta={{ label: "Join the planner waitlist", href: "#future-planner" }}
        secondaryCta={{ label: "Download free pages", href: "/printables" }}
      />
      <section className="section container">
        <SectionHeader
          eyebrow="Planner route"
          title="September 1 to January 15, organized by the way the season really unfolds."
          description="This page is the future landing page for a print-on-demand planner line. For now, it defines the product structure, seasonal promise, and internal planning language."
        />
        <div className="timeline-list">
          {months.map((month) => (
            <article className="timeline-card" key={month.title}>
              <h2>{month.title}</h2>
              <p>{month.description}</p>
            </article>
          ))}
        </div>
        <div id="future-planner" className="product-cta-card">
          <p className="eyebrow">Future print-on-demand product</p>
          <h2>The Holiday Road Map Planner</h2>
          <p>Future CTA: connect this area to a paid planner page, print-on-demand storefront, preorder form, or newsletter waitlist when the product is designed.</p>
          {/* Future paid planner link goes here. */}
          <Link className="button primary" href="/printables">Use the free starter pages first</Link>
        </div>
      </section>
    </>
  );
}
