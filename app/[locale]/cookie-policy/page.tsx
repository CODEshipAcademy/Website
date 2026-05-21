import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === "fr" ? { title: "Politique de temoins | Academie CODEship", description: "Gestion des temoins et consentements numeriques de CODEship Academy." } : { title: "Cookie Policy | CODEship Academy", description: "Cookie preferences and digital consent settings for CODEship Academy." };
}

export default async function CookiePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const fr = locale === "fr";
  return (
    <div className="container-shell section-space max-w-4xl space-y-4 text-slate-700">
      <h1 className="font-display text-6xl text-navy">{fr ? "Politique de temoins" : "Cookie Policy"}</h1>
      <p>{fr ? "Les preferences sont gerees via banniere de consentement: essentiel, analytique et marketing." : "Cookie preferences are managed by explicit consent banner with options for essential, analytics, and marketing categories."}</p>
      <p>{fr ? "Les preuves de consentement sont conservees pour audit de conformite." : "Consent records are retained for compliance auditing and can be updated anytime by the user."}</p>
    </div>
  );
}
