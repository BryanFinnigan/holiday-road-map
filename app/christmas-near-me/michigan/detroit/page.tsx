import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Christmas in Detroit 2026 Events, Tree Farms, Lights and Markets",
  description: "Sample local Christmas guide page for Detroit 2026 with placeholder sections for events, free events, lights, tree farms, holiday markets, family activities, date ideas, and local gift stops.",
  path: "/christmas-near-me/michigan/detroit"
});

const sections = [
  {
    title: "Best Christmas events in Detroit",
    copy: "Sample content: highlight major downtown holiday attractions, theater traditions, seasonal museum programming, community tree lightings, and ticketed experiences once dates are verified."
  },
  {
    title: "Free Christmas events",
    copy: "Sample content: include public tree lightings, free concerts, community markets, library events, neighborhood strolls, and no-cost family activities after checking current schedules."
  },
  {
    title: "Christmas lights",
    copy: "Sample content: organize lights by drive-through displays, walkable downtown lights, neighborhood routes, and nearby suburbs with strong seasonal displays."
  },
  {
    title: "Christmas tree farms near Detroit",
    copy: "Sample content: list verified farms within a reasonable driving radius, noting cut-your-own options, pre-cut trees, wagon rides, wreaths, hours, and reservation requirements."
  },
  {
    title: "Holiday markets",
    copy: "Sample content: group markets by downtown, suburbs, maker markets, food-focused markets, and last-minute gift shopping weekends."
  },
  {
    title: "Family-friendly activities",
    copy: "Sample content: feature kid-friendly shows, craft days, holiday trains, Santa visits, ice skating, museum events, and low-stress indoor options."
  },
  {
    title: "Christmas date ideas",
    copy: "Sample content: pair lights, dinner, markets, ice skating, dessert stops, concerts, hotel lobbies, and winter walks into simple evening routes."
  },
  {
    title: "Local gift stops",
    copy: "Sample content: add independent bookstores, specialty food shops, maker markets, museum stores, chocolatiers, florists, and local boutiques after verification."
  }
];

export default function DetroitChristmasPage() {
  return (
    <>
      <Hero
        eyebrow="MerryMap sample market"
        title="Christmas in Detroit 2026: Events, Tree Farms, Lights, Markets & Holiday Things to Do"
        description="This is a sample local SEO page showing the intended structure for Holiday Local Index pages. Listings and dates must be verified before publication."
        primaryCta={{ label: "Explore MerryMap", href: "/merrymap" }}
        secondaryCta={{ label: "Plan with printables", href: "/printables" }}
      />
      <section className="section container local-note-card">
        <p className="eyebrow">Verification note</p>
        <h2>Sample content needing verification</h2>
        <p>This Detroit page uses placeholder local content only. Before launch, confirm event names, dates, hours, pricing, accessibility details, addresses, parking notes, official links, and cancellation policies from primary local sources.</p>
        <p><strong>Last updated:</strong> July 1, 2026</p>
      </section>
      <section className="section container">
        <SectionHeader
          eyebrow="Detroit holiday route"
          title="Build each local page around useful planning sections."
          description="Each section should eventually include verified listings, editorial notes, internal links, and practical details like free/paid status, family fit, parking, and weather considerations."
        />
        <div className="local-section-list">
          {sections.map((section) => (
            <article className="local-section-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.copy}</p>
            </article>
          ))}
        </div>
        <div className="inline-cta">
          <p>Planning a Detroit holiday day out?</p>
          <Link className="button primary" href="/giftmatch">Find gifts before you go</Link>
        </div>
      </section>
    </>
  );
}
