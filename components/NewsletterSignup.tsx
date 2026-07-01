export default function NewsletterSignup() {
  return (
    <section className="newsletter-card" aria-labelledby="road-map-letter-heading">
      <div>
        <p className="eyebrow">The Road Map Letter</p>
        <h2 id="road-map-letter-heading">A calmer Christmas, one useful note at a time.</h2>
        <p>Get printable pages, gift ideas, wrapping shortcuts, local guide updates, and seasonal planning reminders.</p>
      </div>
      <form className="newsletter-form">
        <label htmlFor="newsletter-email">Email address</label>
        <div className="newsletter-input-row">
          <input id="newsletter-email" name="email" type="email" placeholder="you@example.com" required />
          {/* Future newsletter provider integration goes here. */}
          <button className="button primary" type="submit">Sign up</button>
        </div>
        <p>Coming soon: connect this form to Beehiiv, ConvertKit, Mailchimp, or another provider.</p>
      </form>
    </section>
  );
}
