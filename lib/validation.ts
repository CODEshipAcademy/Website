import type { Locale } from "@/lib/i18n";

export type InquiryPayload = {
  type: "general" | "parent" | "school" | "franchise" | "media" | "newsletter";
  locale: Locale;
  name: string;
  email: string;
  phone?: string;
  cityProvince?: string;
  organization?: string;
  message?: string;
  investmentRange?: string;
  timeline?: string;
  consentPrivacy: boolean;
  consentCasl: boolean;
  consentBackground?: boolean;
  retentionTag: "p1y" | "p2y" | "p5y";
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInquiry(payload: InquiryPayload): string[] {
  const e: string[] = [];
  if (!payload.name.trim()) e.push(payload.locale === "fr" ? "Le nom est requis." : "Name is required.");
  if (!emailRegex.test(payload.email)) e.push(payload.locale === "fr" ? "Adresse courriel invalide." : "Invalid email address.");
  if (!payload.consentPrivacy) e.push(payload.locale === "fr" ? "Le consentement de confidentialité est requis." : "Privacy consent is required.");
  if (!payload.consentCasl) e.push(payload.locale === "fr" ? "Le consentement CASL est requis." : "CASL consent is required.");
  if (payload.type === "franchise" && !payload.consentBackground) {
    e.push(payload.locale === "fr" ? "L'accusé de vérification d'antécédents est requis." : "Background check acknowledgement is required.");
  }
  return e;
}
