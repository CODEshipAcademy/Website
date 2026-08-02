# CODEship Academy Website

Premium, bilingual (`en`/`fr`), accessibility-first Next.js website for CODEship Academy.

## Stack
- Next.js App Router
- Tailwind CSS
- Framer Motion
- Stripe Payment Links for registration (no server-side Stripe SDK in the build)
- Database-free inquiry delivery (email or webhook)
- Cloudflare Pages deployment-ready

## Run
```bash
npm install
npm run dev
```

## Environment
No database is required. Create `.env.local` and set the variables you need.

### Inquiry forms (Contact / School / Franchise)
Submissions are delivered by whichever channel is configured, in this order:

```bash
# Option 1 — email via Resend (recommended)
RESEND_API_KEY=
INQUIRY_TO_EMAIL=leads@codeshipacademy.com          # where inquiries are sent
INQUIRY_FROM_EMAIL="CODEship Academy <hello@codeshipacademy.com>"  # a Resend-verified sender

# Option 2 — generic webhook (Zapier / Make / Slack / Google Apps Script)
INQUIRY_WEBHOOK_URL=

# Shown to visitors if delivery isn't configured yet, so no lead is lost
NEXT_PUBLIC_CONTACT_EMAIL=hello@codeshipacademy.com
```

If neither Resend nor a webhook is set, the form returns a friendly message
asking the visitor to email `NEXT_PUBLIC_CONTACT_EMAIL` directly.

### Analytics (optional, consent-gated)
Loaded only after the visitor accepts analytics cookies.

```bash
NEXT_PUBLIC_FB_PIXEL_ID=
NEXT_PUBLIC_GA_ID=
```

## Cloudflare Pages
Build command: `npm run build`
Output: `.next` (use the Next.js framework preset on Cloudflare Pages)

## Included
- Required marketing pages + a real bilingual blog
- Legal/compliance pages and consent-gated analytics
- Bilingual route structure and dynamic location SEO pages
- Structured data (Organization, Course/Offer, BlogPosting, Event)
- Sitemap and robots
- Stripe-powered registration at `/register`
