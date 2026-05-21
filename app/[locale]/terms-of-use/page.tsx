import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === "fr" ? { title: "Conditions d'utilisation | Academie CODEship", description: "Conditions legales d'utilisation du site CODEship Academy." } : { title: "Terms of Use | CODEship Academy", description: "Legal terms for use of the CODEship Academy website." };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const fr = locale === "fr";
  return (
    <div className="container-shell section-space max-w-4xl space-y-4 text-slate-700">
      <h1 className="font-display text-6xl text-navy">{fr ? "Conditions d'utilisation" : "Terms of Use"}</h1>
      <p>{fr ? "En utilisant ce site, vous acceptez une utilisation legale et des informations exactes." : "By using this site, users agree to lawful use, respectful communication, and accurate information submission."}</p>
      <p>{fr ? "Les resultats educatifs varient selon l'apprenant. Le contenu franchise/ecole est informatif." : "Educational outcomes vary by learner. Franchise and school information is informational only and not legal or financial advice."}</p>
    </div>
  );
}
