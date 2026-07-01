# Holiday Road Map

A first branded Next.js App Router MVP for **Holiday Road Map** — a holiday planning and gift-discovery website with GiftMatch, GiftGraph sample data, The Holiday Guidebook, WrapLab, Road Map Pages, The Holiday Road Map Planner, MerryMap, and local Christmas SEO page structure.

## Stack

- Next.js App Router
- TypeScript
- CSS in `app/globals.css`
- Static sample data in `data/`
- No external APIs
- No authentication
- No database setup yet

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Use the default Next.js settings.
4. Optional: set `NEXT_PUBLIC_SITE_URL` in Vercel to your production domain.

## Important future hooks

- `components/GiftCard.tsx`: replace placeholder affiliate links with real affiliate URLs and use `rel="sponsored nofollow"`.
- `components/NewsletterSignup.tsx`: connect the form to Beehiiv, ConvertKit, Mailchimp, or another email provider.
- `app/printables/page.tsx`: replace placeholder download anchors with real printable PDF/vector files.
- `app/planner/page.tsx`: connect the product CTA to a print-on-demand storefront or planner waitlist.
- `app/christmas-near-me/michigan/detroit/page.tsx`: verify all local listings, dates, prices, addresses, and official source links before publication.
- `data/gifts.ts`: expand GiftGraph into a larger structured gift dataset.
