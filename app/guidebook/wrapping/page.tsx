import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "WrapLab Christmas Wrapping Tutorials",
  description: "Learn simple Christmas wrapping tutorials for boxes, mugs, bottles, soft gifts, and bows with WrapLab by Holiday Road Map.",
  path: "/guidebook/wrapping"
});

const tutorials = [
  "How to Wrap a Box Cleanly",
  "How to Wrap a Mug Without Making It Awkward",
  "How to Wrap a Bottle for Christmas",
  "How to Wrap a Soft Gift Without a Box",
  "How to Make a Simple Bow Look Expensive"
];

export default function WrappingPage() {
  return (
    <>
      <Hero
        eyebrow="WrapLab"
        title="Simple wrapping tutorials for gifts that do not behave."
        description="WrapLab turns common wrapping problems into calm, repeatable steps: neat corners, awkward shapes, ribbon choices, and quick polish when time is short."
        primaryCta={{ label: "See tutorials", href: "#tutorials" }}
        secondaryCta={{ label: "Print planning pages", href: "/printables" }}
      />
      <section id="tutorials" className="section container">
        <SectionHeader
          eyebrow="Tutorial roadmap"
          title="Start with the shapes people actually wrap."
          description="These tutorial pages can later include photos, short videos, printable checklists, product suggestions, and supply lists."
        />
        <div className="tutorial-grid">
          {tutorials.map((tutorial) => (
            <article className="tutorial-card" key={tutorial}>
              <span aria-hidden="true">〰</span>
              <h2>{tutorial}</h2>
              <p>Coming article: supplies, step-by-step instructions, common mistakes, and a cleaner finishing tip.</p>
            </article>
          ))}
        </div>
        <div className="inline-cta">
          <p>Pair your wrapping plan with a gift tracker.</p>
          <Link className="button secondary" href="/printables">View Road Map Pages</Link>
        </div>
      </section>
    </>
  );
}
