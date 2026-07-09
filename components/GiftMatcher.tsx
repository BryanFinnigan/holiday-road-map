"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import GiftCard from "@/components/GiftCard";
import { GiftMatchInput, matchGifts } from "@/lib/matchGifts";

const initialForm: GiftMatchInput = {
  recipient: "male preschooler age 4",
  budget: "under 50",
  personality: "energetic curious playful",
  vibe: "hands-on movement-based practical",
  avoidances: "tiny parts fragile complex instructions"
};

export default function GiftMatcher() {
  const [form, setForm] = useState<GiftMatchInput>(initialForm);
  const results = useMemo(() => matchGifts(form), [form]);
  const guideSlugs = useMemo(() => Array.from(new Set(results.flatMap((gift) => gift.relatedGuideSlugs))).slice(0, 5), [results]);

  function updateField(field: keyof GiftMatchInput, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="matcher-layout">
      <form className="planner-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="recipient">Recipient</label>
          <input
            id="recipient"
            name="recipient"
            type="text"
            value={form.recipient}
            onChange={(event) => updateField("recipient", event.target.value)}
            placeholder="Mom, dad, coworker, teacher, preschooler..."
          />
        </div>
        <div>
          <label htmlFor="budget">Budget</label>
          <input
            id="budget"
            name="budget"
            type="text"
            value={form.budget}
            onChange={(event) => updateField("budget", event.target.value)}
            placeholder="Example: under 25, under 50, 100"
          />
        </div>
        <div>
          <label htmlFor="personality">Personality</label>
          <input
            id="personality"
            name="personality"
            type="text"
            value={form.personality}
            onChange={(event) => updateField("personality", event.target.value)}
            placeholder="Practical, sentimental, energetic, creative..."
          />
        </div>
        <div>
          <label htmlFor="vibe">Gift vibe</label>
          <input
            id="vibe"
            name="vibe"
            type="text"
            value={form.vibe}
            onChange={(event) => updateField("vibe", event.target.value)}
            placeholder="Cozy, useful, premium, funny, hands-on..."
          />
        </div>
        <div>
          <label htmlFor="avoidances">Avoidances</label>
          <input
            id="avoidances"
            name="avoidances"
            type="text"
            value={form.avoidances}
            onChange={(event) => updateField("avoidances", event.target.value)}
            placeholder="Fragrance, clutter, tiny parts, fragile..."
          />
        </div>
        <button className="button primary" type="submit">Update matches</button>
        <p className="form-note">GiftMatch keeps inputs light, ranks structured GiftGraph records, and only shows live affiliate buttons when real URLs exist.</p>
      </form>

      <section className="results-panel" aria-label="GiftMatch results">
        <div className="results-header">
          <p className="eyebrow">GiftGraph sample results</p>
          <h2>Ranked gift ideas</h2>
          <p>Use the results as a direction first. Product links stay clearly marked until real affiliate URLs are added.</p>
        </div>
        <div className="gift-results-grid">
          {results.map((gift) => <GiftCard key={gift.id} gift={gift} />)}
        </div>
        <div className="inline-cta">
          <p>Prefer browsing instead of matching?</p>
          <div className="button-row">
            {guideSlugs.map((slug) => (
              <Link key={slug} className="button text-link" href={slug.startsWith("under-") ? `/gifts/by-budget/${slug}` : `/gifts/${slug}`}>
                {slug.replaceAll("-", " ")}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
