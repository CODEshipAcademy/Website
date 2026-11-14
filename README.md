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

## Developers Arcade (`/play`)
One coding game per semester for the **Developers** program (ages 9–11), aligned to the lesson units:

| Semester | Focus | Game | Route |
|---|---|---|---|
| 1 | JavaScript Foundations | **Rover Rescue** — type real JS (sequencing → loops → functions → if → while → variables → debugging) to drive a moon rover | `/play/rover-rescue` |
| 2 | Python, Data & AI | **Bot Trainer** — Python warm-ups, train/test an AI sorting bot (labels, bias), write `if/elif/else` rules | `/play/bot-trainer` |
| 3 | App Development | **App Studio** — build your own app (components, events, variables, lists, conditions), view the generated JavaScript, download it as a standalone HTML app | `/play/app-studio` |

- Shared XP, ranks and badges live in `lib/games/progress.ts`; everything is stored in `localStorage` only (no accounts, no personal data).
- Student JavaScript in Rover Rescue runs in a throwaway Web Worker with a step cap and a 1.5s timeout, so infinite loops can't freeze the page.
- Level/curriculum content is plain data: `lib/games/rover.ts`, `lib/games/bot.ts`, `lib/games/studio.ts`. Add a level by adding an entry.
- Rover Rescue has an "Instructor mode" toggle that unlocks every mission for demos.
- Games are English-only for now; `/play` is excluded from locale redirects in `middleware.ts`.
