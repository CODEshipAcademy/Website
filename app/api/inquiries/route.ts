import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { validateInquiry, type InquiryPayload } from "@/lib/validation";

export const runtime = "edge";

export async function POST(request: Request) {
  const body = (await request.json()) as InquiryPayload;
  const errors = validateInquiry(body);
  if (errors.length) return NextResponse.json({ ok: false, errors }, { status: 400 });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseService = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !supabaseService) {
    return NextResponse.json({ ok: false, errors: ["Supabase is not configured."] }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseService);
  const { error } = await supabase.from("inquiries").insert({
    inquiry_type: body.type,
    locale: body.locale,
    name: body.name,
    email: body.email,
    phone: body.phone ?? null,
    city_province: body.cityProvince ?? null,
    organization: body.organization ?? null,
    message: body.message ?? null,
    investment_range: body.investmentRange ?? null,
    timeline: body.timeline ?? null,
    consent_privacy: body.consentPrivacy,
    consent_casl: body.consentCasl,
    consent_background: body.consentBackground ?? false,
    retention_tag: body.retentionTag
  });

  if (error) return NextResponse.json({ ok: false, errors: [error.message] }, { status: 500 });
  return NextResponse.json({ ok: true });
}
