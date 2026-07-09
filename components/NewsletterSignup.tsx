type NewsletterSignupProps = {
  context?: "homepage" | "giftmatch" | "gift-guide" | "printables" | "planner" | "merrymap" | "wraplab";
};

const contextCopy: Record<NonNullable<NewsletterSignupProps["context"]>, string> = {
  homepage: "Get printable pages, gift ideas, wrapping shortcuts, local guide updates, and seasonal planning reminders.",
  giftmatch: "Get follow-up gift ideas, printable trackers, budget reminders, and calmer Christmas planning notes.",
  "gift-guide": "Get new gift guides, budget lists, stocking ideas, and practical shopping reminders as the season gets closer.",
  printables: "Get new Road Map Pages, planner updates, gift trackers, and seasonal planning reminders.",
  planner: "Get planner launch updates, free page drops, and September-through-January planning prompts.",
  merrymap: "Get local guide updates, printable planning pages, and ideas for Christmas stops worth adding to your route.",
  wraplab: "Get wrapping shortcuts, supply checklists, printable trackers, and last-minute gift polish ideas."
};

export default function NewsletterSignup({ context = "homepage" }: NewsletterSignupProps) {
  return (
    <section className="newsletter-card" aria-labelledby="road-map-letter-heading">
      <div>
        <p className="eyebrow">The Road Map Letter</p>
        <h2 id="road-map-letter-heading">A calmer Christmas, one useful note at a time.</h2>
        <p>{contextCopy[context]}</p>
      </div>
      <form className="newsletter-form">
        <label htmlFor={`newsletter-email-${context}`}>Email address</label>
        <div className="newsletter-input-row">
          <input id={`newsletter-email-${context}`} name="email" type="email" placeholder="you@example.com" required />
          {/* Future newsletter provider integration goes here. */}
          <button className="button primary" type="submit">Sign up for our newsletter</button>
        </div>
        <p>Coming soon: connect this form to Beehiiv, ConvertKit, Mailchimp, or another provider.</p>
      </form>
    </section>
  );
}
