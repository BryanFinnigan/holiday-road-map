import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsletterSignup";
import SectionHeader from "@/components/SectionHeader";
import StatusBadge from "@/components/StatusBadge";
import { wrappingTutorials } from "@/lib/wrappingTutorials";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "WrapLab Christmas Wrapping Tutorials",
  description: "Learn simple Christmas wrapping tutorials for boxes, mugs, bottles, soft gifts, and bows with WrapLab by Holiday Road Map.",
  path: "/guidebook/wrapping"
});

export default function WrappingPage() {
  return (
    <>
      <Hero
        eyebrow="WrapLab"
        title="Simple wrapping tutorials for gifts that do not behave."
        description="WrapLab turns common wrapping problems into calm, repeatable steps: neat corners, awkward shapes, ribbon choices, supply planning, and quick polish when time is short."
        primaryCta={{ label: "See tutorials", href: "#tutorials" }}
        secondaryCta={{ label: "Print wrapping checklist", href: "/printables/wrapping-supply-checklist" }}
      />
      <section id="tutorials" className="section container">
        <SectionHeader
          eyebrow="Tutorial roadmap"
          title="Start with the shapes people actually wrap."
          description="Each tutorial can support supplies, step-by-step instructions, mistakes to avoid, related printables, and future affiliate links for paper, tape, bows, ribbon, tags, bags, boxes, scissors, and storage."
        />
        <div className="tutorial-grid">
          {wrappingTutorials.map((tutorial) => (
            <article className="tutorial-card" key={tutorial.slug}>
              <span aria-hidden="true">〰</span>
              <div className="status-row">
                {tutorial.statuses.slice(0, 2).map((status) => <StatusBadge key={status} status={status} />)}
              </div>
              <h2>{tutorial.title}</h2>
              <p>{tutorial.description}</p>
              <Link href={tutorial.href}>Open tutorial →</Link>
            </article>
          ))}
        </div>
        <div className="inline-cta">
          <p>Pair your wrapping plan with a supply checklist and gift tracker.</p>
          <Link className="button secondary" href="/printables/wrapping-supply-checklist">View wrapping checklist</Link>
          <Link className="button text-link" href="/printables/gift-tracker">Open gift tracker</Link>
        </div>
      </section>
      <section className="section container">
        <NewsletterSignup context="wraplab" />
      </section>
    </>
  );
}
