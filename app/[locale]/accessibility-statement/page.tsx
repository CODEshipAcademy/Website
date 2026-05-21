import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === "fr" ? { title: "Declaration d'accessibilite | Academie CODEship", description: "Engagement d'accessibilite numerique selon les principes WCAG 2.2." } : { title: "Accessibility Statement | CODEship Academy", description: "Digital accessibility commitment aligned with WCAG 2.2 principles." };
}

export default async function AccessibilityStatementPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const fr = locale === "fr";
  return (
    <div className="container-shell section-space max-w-4xl space-y-4 text-slate-700">
      <h1 className="font-display text-6xl text-navy">{fr ? "Declaration d'accessibilite" : "Accessibility Statement"}</h1>
      <p>{fr ? "Ce site suit les principes WCAG 2.2: structure semantique, clavier, focus visible et contraste eleve." : "This site is designed for WCAG 2.2-aligned accessibility with semantic landmarks, keyboard navigation, visible focus styles, and high contrast text."}</p>
      <p>{fr ? "Les commentaires et demandes d'accommodement sont encourages via le formulaire de contact." : "Accessibility feedback and accommodation requests are welcomed through the contact form."}</p>
    </div>
  );
}
