/**
 * One-time local setup — not a server, not deployed, and intentionally kept out
 * of the site's package.json so the Stripe SDK never ships with the deployed
 * build. Install its deps locally just for the run, then execute it:
 *
 *   npm i -D stripe tsx
 *   STRIPE_SECRET_KEY=sk_live_... NEXT_PUBLIC_SITE_URL=https://... \
 *     npx tsx scripts/configure-payment-links.ts
 *
 * It edits each Payment Link's post-payment redirect and custom fields, then exits.
 */
import Stripe from "stripe";
import { PROGRAM_LINKS } from "../lib/payment-links";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-06-20" });
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

if (!SITE_URL) {
  throw new Error("NEXT_PUBLIC_SITE_URL is not set — cannot build the redirect URL.");
}

async function main() {
  const allLinks = await stripe.paymentLinks.list({ limit: 100 });

  for (const [program, config] of Object.entries(PROGRAM_LINKS)) {
    const match = allLinks.data.find((l) => l.url === config.url);
    if (!match) {
      console.error(`Could not find a Payment Link matching ${config.url} for ${program}`);
      continue;
    }

    await stripe.paymentLinks.update(match.id, {
      after_completion: {
        type: "redirect",
        redirect: {
          url: `${SITE_URL}/register/success?session_id={CHECKOUT_SESSION_ID}&program=${program}`,
        },
      },
      custom_fields: [
        {
          key: "child_name",
          label: { type: "custom", custom: "Child's full name" },
          type: "text",
        },
        {
          key: "child_age_grade",
          label: { type: "custom", custom: "Child's age or grade" },
          type: "text",
        },
      ],
    });

    console.log(`done: ${program} (${match.id})`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
