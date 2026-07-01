import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Christmas Hosting Guides",
  description: "Christmas hosting guides for meals, timelines, guest comfort, traditions, prep lists, and low-stress holiday gatherings.",
  path: "/guidebook/hosting"
});

export default function HostingGuidePage() {
  return (
    <>
      <Hero
        eyebrow="Hosting"
        title="Holiday hosting that starts with a useful route."
        description="This section will help hosts plan meals, timelines, guest details, traditions, and small comforts without making the day feel overproduced."
        primaryCta={{ label: "Print meal planner", href: "/printables" }}
        secondaryCta={{ label: "Visit planning guides", href: "/guidebook/planning" }}
      />
      <section className="section container">
        <SectionHeader
          eyebrow="Starter hosting articles"
          title="Keep gatherings warm, practical, and prepared."
          description="Future articles can include prep timelines, grocery planning, seating notes, make-ahead menus, and local market tie-ins."
        />
        <div className="editorial-grid">
          <article><h2>A Christmas hosting timeline that starts one week out</h2><p>Break cleaning, shopping, cooking, table setup, and guest details into manageable steps.</p></article>
          <article><h2>How to plan a Christmas meal without losing the day</h2><p>Choose make-ahead sides, a simple drink plan, and a realistic prep schedule.</p></article>
          <article><h2>Small guest comforts that make a house feel welcoming</h2><p>Use lighting, coat space, drinks, labels, music, and a visible plan for the meal.</p></article>
        </div>
        <div className="inline-cta"><p>Looking for gifts for guests or hosts?</p><Link className="button primary" href="/giftmatch">Try GiftMatch</Link></div>
      </section>
    </>
  );
}
