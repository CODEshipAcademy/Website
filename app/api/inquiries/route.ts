import { NextResponse } from "next/server";
import { validateInquiry, type InquiryPayload } from "@/lib/validation";

export const runtime = "edge";

/**
 * Database-free inquiry pipeline. A submitted form is delivered by whichever
 * channel is configured, in priority order:
 *
 *   1. Resend email  — set RESEND_API_KEY, INQUIRY_TO_EMAIL, INQUIRY_FROM_EMAIL
 *   2. Generic webhook — set INQUIRY_WEBHOOK_URL (Zapier / Make / Slack /
 *      Google Apps Script, etc.); the full JSON payload is POSTed to it.
 *
 * If neither is configured we return a friendly, localized message pointing the
 * visitor to a contact email (NEXT_PUBLIC_CONTACT_EMAIL) so no lead is lost.
 */

function label(fr: boolean) {
  return {
    unconfigured: (email?: string) =>
      fr
        ? `Le formulaire n'est pas encore configuré. Écrivez-nous directement${email ? ` à ${email}` : ""}.`
        : `Our form isn't set up yet. Please email us directly${email ? ` at ${email}` : ""}.`,
    failed: (email?: string) =>
      fr
        ? `Nous n'avons pas pu envoyer votre demande. Réessayez ou écrivez-nous${email ? ` à ${email}` : ""}.`
        : `We couldn't send your inquiry. Please try again or email us${email ? ` at ${email}` : ""}.`,
  };
}

function formatInquiry(body: InquiryPayload): { subject: string; text: string } {
  const rows: [string, string | undefined][] = [
    ["Type", body.type],
    ["Locale", body.locale],
    ["Name", body.name],
    ["Email", body.email],
    ["Phone", body.phone],
    ["City / Province", body.cityProvince],
    ["Organization", body.organization],
    ["Investment range", body.investmentRange],
    ["Timeline", body.timeline],
    ["Message", body.message],
    ["Consent — privacy", String(body.consentPrivacy)],
    ["Consent — CASL", String(body.consentCasl)],
    ["Consent — background check", String(body.consentBackground ?? false)],
    ["Retention preference", body.retentionTag],
  ];
  const text = rows
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  return { subject: `New ${body.type} inquiry — ${body.name}`, text };
}

async function sendViaResend(body: InquiryPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL;
  if (!apiKey || !to || !from) return false;

  const { subject, text } = formatInquiry(body);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: [to], reply_to: body.email, subject, text }),
  });
  return res.ok;
}

async function sendViaWebhook(body: InquiryPayload): Promise<boolean> {
  const url = process.env.INQUIRY_WEBHOOK_URL;
  if (!url) return false;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.ok;
}

export async function POST(request: Request) {
  const body = (await request.json()) as InquiryPayload;
  const errors = validateInquiry(body);
  if (errors.length) return NextResponse.json({ ok: false, errors }, { status: 400 });

  const fr = body.locale === "fr";
  const t = label(fr);
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  const hasResend = Boolean(process.env.RESEND_API_KEY && process.env.INQUIRY_TO_EMAIL && process.env.INQUIRY_FROM_EMAIL);
  const hasWebhook = Boolean(process.env.INQUIRY_WEBHOOK_URL);
  if (!hasResend && !hasWebhook) {
    return NextResponse.json({ ok: false, errors: [t.unconfigured(contactEmail)] }, { status: 503 });
  }

  try {
    const delivered = (await sendViaResend(body)) || (await sendViaWebhook(body));
    if (!delivered) {
      return NextResponse.json({ ok: false, errors: [t.failed(contactEmail)] }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, errors: [t.failed(contactEmail)] }, { status: 502 });
  }
}
