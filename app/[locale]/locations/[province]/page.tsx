import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/content";

const provinceNames: Record<string, { en: string; fr: string }> = {
  ontario: { en: "Ontario", fr: "Ontario" },
  quebec: { en: "Quebec", fr: "Québec" },
  "british-columbia": { en: "British Columbia", fr: "Colombie-Britannique" },
  alberta: { en: "Alberta", fr: "Alberta" },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; province: string }>;
}): Promise<Metadata> {
  const { locale, province } = await params;
  const name = provinceNames[province]?.[locale];
  if (!name) return {};
  const fr = locale === "fr";
  const title = fr
    ? `Cours de codage pour enfants en ${name} | CODEship`
    : `Kids Coding Classes in ${name} | CODEship Academy`;
  const description = fr
    ? `Cours de codage et STEM inclusifs pour enfants de 4 à 14 ans en ${name}. Petits groupes, soutien bilingue, inscription en ligne.`
    : `Inclusive coding and STEM classes for kids ages 4–14 in ${name}. Small classes, bilingual support, and online registration.`;
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/locations/${province}`,
      languages: {
        en: `/en/locations/${province}`,
        fr: `/fr/locations/${province}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/locations/${province}`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locale: Locale; province: string }>;
}) {
  const { locale, province } = await params;
  const entry = provinceNames[province];
  if (!entry) notFound();
  const fr = locale === "fr";
  const name = entry[locale];

  return (
    <div className="container-shell section-space">
      <h1 className="font-display text-6xl text-navy">
        {fr ? `Codage pour enfants en ${name}` : `Kids Coding Classes in ${name}`}
      </h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        {fr
          ? `CODEship Academy offre des programmes de codage et de compétences d'avenir pour les familles, écoles et communautés de ${name} — avec soutien bilingue, alignement au curriculum et classes inclusives pour enfants de 4 à 14 ans.`
          : `CODEship Academy delivers coding and future-skills programs for families, schools, and communities across ${name} — with bilingual support, curriculum alignment, and inclusive classes for kids ages 4–14.`}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link className="focus-ring rounded-md bg-yellow px-5 py-3 text-sm font-bold text-navy" href="/register">
          {fr ? "Inscrire mon enfant" : "Register My Child"}
        </Link>
        <Link className="focus-ring rounded-md border border-navy px-5 py-3 text-sm font-bold text-navy" href={`/${locale}/programs`}>
          {fr ? "Voir les programmes" : "View Programs"}
        </Link>
      </div>
    </div>
  );
}
