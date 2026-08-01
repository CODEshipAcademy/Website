import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/content";
import { EnrollButton } from "@/components/EnrollButton";
import {
  PROGRAM_LINKS,
  PROGRAM_ORDER,
  programName,
  ageLabel,
} from "@/lib/payment-links";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "programs", "/programs");
}

export default async function ProgramsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const fr = locale === "fr";

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PROGRAM_ORDER.map((level, i) => {
      const c = PROGRAM_LINKS[level];
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Course",
          name: `${programName(level, fr)} — ${fr ? "Cours de codage pour enfants" : "Kids Coding Course"}`,
          description: fr ? c.techFr : c.techEn,
          provider: {
            "@type": "EducationalOrganization",
            name: "CODEship Academy",
            sameAs: "https://codeshipacademy.com",
          },
          offers: {
            "@type": "Offer",
            price: c.priceCad,
            priceCurrency: "CAD",
            category: fr ? "Frais de scolarite par semestre" : "Tuition per semester",
            availability: "https://schema.org/InStock",
            url: "https://codeshipacademy.com/register",
          },
        },
      };
    }),
  };

  return (
    <div className="container-shell section-space">
      <h1 className="font-display text-6xl text-navy">{fr ? "Programmes de codage pour enfants" : "Kids Coding Programs"}</h1>
      <p className="mt-4 max-w-3xl text-slate-700">{fr ? "Parcours par age alignes au curriculum, avec resultats clairs, projets authentiques et petits groupes inclusifs. Ages 4 a 14." : "Age-based, curriculum-aligned pathways with clear outcomes, authentic projects, and small inclusive classes. Ages 4–14."}</p>
      <div className="mt-10 space-y-8">
        {PROGRAM_ORDER.map((level) => {
          const c = PROGRAM_LINKS[level];
          return (
            <section key={level} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-display text-4xl text-navy">{programName(level, fr)}</h2>
                <p className="text-lg font-bold text-navy">{fr ? `${c.priceCad} $ CA` : `CAD $${c.priceCad}`}<span className="text-sm font-normal text-slate-600">{fr ? " / semestre" : " / semester"}</span></p>
              </div>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-supportBlue">{ageLabel(level, fr)}</p>
              <p className="mt-3 text-slate-700"><strong>{fr ? "Technologies :" : "Technologies:"}</strong> {fr ? c.techFr : c.techEn}</p>
              <p className="mt-2 text-slate-700"><strong>{fr ? "Projets :" : "Projects:"}</strong> {fr ? c.projectsFr : c.projectsEn}</p>
              <div className="mt-5">
                <EnrollButton program={level} label={fr ? "S'inscrire" : "Register Now"} />
              </div>
            </section>
          );
        })}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
    </div>
  );
}
