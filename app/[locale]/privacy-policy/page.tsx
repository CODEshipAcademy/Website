import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === "fr" ? { title: "Politique de confidentialite | Academie CODEship", description: "Protection des donnees, consentement et retention conformes pour CODEship Academy." } : { title: "Privacy Policy | CODEship Academy", description: "Data protection, consent, and retention policy for CODEship Academy." };
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const fr = locale === "fr";
  return (
    <div className="container-shell section-space max-w-4xl space-y-4 text-slate-700">
      <h1 className="font-display text-6xl text-navy">{fr ? "Politique de confidentialite" : "Privacy Policy"}</h1>
      <p>{fr ? "CODEship Academy suit les principes de la LPRPDE, la LCAP, la sensibilite COPPA et la Loi 25 du Quebec." : "CODEship Academy follows PIPEDA principles, CASL consent practices, COPPA-aware child privacy safeguards, and Quebec Law 25-aligned transparency."}</p>
      <p>{fr ? "Nous collectons uniquement les donnees necessaires et appliquons des periodes de retention documentees." : "We collect only necessary inquiry and enrollment data, maintain documented retention windows, and provide rights access/correction pathways."}</p>
      <p>{fr ? "L'usage de photos et medias exige un consentement eclaire." : "Media/photo usage requires informed consent and can be revoked according to stated process."}</p>
    </div>
  );
}
