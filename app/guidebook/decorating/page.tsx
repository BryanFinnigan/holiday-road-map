import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Christmas Decorating Guides",
  description: "Christmas decorating guides for trees, mantels, small spaces, reusable décor, and simple holiday style formulas.",
  path: "/guidebook/decorating"
});

export default function DecoratingGuidePage() {
  return (
    <>
      <Hero
        eyebrow="Decorating"
        title="Decorating ideas with warmth, restraint, and a plan."
        description="This section will help readers decorate without clutter: simple formulas, reusable pieces, tree themes, mantel ideas, and small-space holiday style."
        primaryCta={{ label: "Browse planning pages", href: "/printables" }}
        secondaryCta={{ label: "Explore the Guidebook", href: "/guidebook" }}
      />
      <section className="section container">
        <SectionHeader
          eyebrow="Starter decorating articles"
          title="Make seasonal style feel practical and repeatable."
          description="Future content can connect décor decisions to budgets, room types, storage, hosting plans, and local shopping."
        />
        <div className="editorial-grid">
          <article><h2>A simple Christmas decorating route for every room</h2><p>Use one visual thread so the house feels festive without feeling overloaded.</p></article>
          <article><h2>How to make a tree feel finished</h2><p>Plan lights, ribbon, ornaments, filler, tree skirt, and topper as one system.</p></article>
          <article><h2>Small-space Christmas decorating</h2><p>Focus on entry points, tabletops, scent, light, and a few high-impact pieces.</p></article>
        </div>
        <div className="inline-cta"><p>Need local places to go after decorating?</p><Link className="button secondary" href="/merrymap">Explore MerryMap</Link></div>
      </section>
    </>
  );
}
