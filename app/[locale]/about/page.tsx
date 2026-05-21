import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { metaByPage } from "@/lib/content";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return metaByPage[locale].about;
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const fr = locale === "fr";
  return (
    <div className="container-shell section-space">
      <h1 className="font-display text-6xl text-navy">{fr ? "A propos" : "About"}</h1>
      <div className="mt-8 max-w-4xl space-y-5 text-slate-700">
        <p>{fr ? "CODEship Academy a ete fondee pour offrir a chaque enfant au Canada un acces equitable aux competences d'avenir." : "CODEship Academy was founded to ensure every child in Canada can access future-ready skills through inclusive, community-rooted education."}</p>
        <p>{fr ? "Notre mission relie codage, litteratie IA, collaboration, confiance et usage responsable de la technologie." : "Our mission integrates coding, AI literacy, collaboration, confidence, and ethical technology understanding in a caring learning ecosystem."}</p>
        <p>{fr ? "Nous travaillons avec familles, ecoles et partenaires communautaires pour faire evoluer l'apprentissage au Canada." : "We partner with families, schools, and local organizations to shape the future of learning across diverse Canadian communities."}</p>
      </div>
    </div>
  );
}
