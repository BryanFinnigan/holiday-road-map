import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsletterSignup";
import SectionHeader from "@/components/SectionHeader";
import { printableLinks } from "@/data/printableLinks";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Road Map Pages Free Christmas Printables",
  description: "Download starter Christmas planning printables including a gift tracker, holiday budget planner, December calendar, shipping tracker, and meal planner.",
  path: "/printables"
});

export default function PrintablesPage() {
  return (
    <>
      <Hero
        eyebrow="Road Map Pages"
        title="Free printable pages for a more organized holiday season."
        description="Road Map Pages are simple, useful planning sheets for the tasks that make Christmas feel scattered: gifts, budgets, dates, shipping, meals, and last-minute reminders."
        primaryCta={{ label: "Download the starter pack", href: "#starter-pack" }}
        secondaryCta={{ label: "See the planner concept", href: "/planner" }}
      />
      <section className="section container" id="starter-pack">
        <SectionHeader
          eyebrow="Free printable cards"
          title="Build the starter pack around practical pages."
          description="The download links are placeholders for now. Add real PDFs or vector files when the first printable set is designed."
        />
        <div className="feature-grid">
          {printableLinks.map((printable) => (
            <article className="feature-card" key={printable.title}>
              <div className="feature-icon" aria-hidden="true">▦</div>
              <p className="card-label">{printable.status}</p>
              <h2>{printable.title}</h2>
              <p>{printable.description}</p>
              {/* Future downloadable file link goes here. */}
              <a href="#future-download" aria-label={`Download placeholder for ${printable.title}`}>Download placeholder →</a>
            </article>
          ))}
        </div>
        <div className="inline-cta">
          <p>Want the first bundle when it is ready?</p>
          <Link className="button primary" href="#road-map-letter-heading">Join The Road Map Letter</Link>
        </div>
      </section>
      <section className="section container">
        <NewsletterSignup />
      </section>
    </>
  );
}
