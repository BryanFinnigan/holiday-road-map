"use client";

import { FormEvent, useMemo, useState } from "react";
import GiftCard from "@/components/GiftCard";
import { GiftMatchInput, matchGifts } from "@/lib/matchGifts";

const initialForm: GiftMatchInput = {
  recipient: "mom",
  budget: "50",
  personality: "busy practical cozy",
  vibe: "thoughtful useful",
  avoidances: ""
};

export default function GiftMatcher() {
  const [form, setForm] = useState<GiftMatchInput>(initialForm);
  const results = useMemo(() => matchGifts(form), [form]);

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
            placeholder="Mom, dad, coworker, teen..."
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
            placeholder="Example: 25, under 50, 100"
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
            placeholder="Practical, sentimental, creative..."
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
            placeholder="Cozy, useful, premium, funny..."
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
            placeholder="Fragrance, clutter, gadgets..."
          />
        </div>
        <button className="button primary" type="submit">Update matches</button>
        <p className="form-note">This MVP ranks static sample records only. It does not create crawlable filter URLs.</p>
      </form>

      <section className="results-panel" aria-label="GiftMatch results">
        <div className="results-header">
          <p className="eyebrow">GiftGraph sample results</p>
          <h2>Ranked gift ideas</h2>
        </div>
        <div className="gift-results-grid">
          {results.map((gift) => <GiftCard key={gift.id} gift={gift} />)}
        </div>
      </section>
    </div>
  );
}
