import type { Metadata } from "next";
import Link from "next/link";
import { dictionary, type Locale } from "@/lib/i18n";
import { metaByPage } from "@/lib/content";
import { HomeExperience } from "@/components/home-experience";
import { EnrollButton } from "@/components/EnrollButton";
import type { ProgramLevel } from "@/lib/payment-links";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return metaByPage[locale].home;
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = dictionary[locale];
  const fr = locale === "fr";
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-surface to-white section-space">
        <div className="container-shell grid items-center gap-10 md:grid-cols-2">
          <div>
            <img src="/codeship-logo.png" alt="CODEship Academy logo" className="mb-4 h-20 w-20 rounded-full object-cover" />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-supportBlue">{fr ? "Canada | Inclusif | Competences d'avenir" : "Canada | Inclusive | Future Skills"}</p>
            <h1 className="mt-4 font-display text-6xl leading-none text-navy md:text-7xl">{t.tag}</h1>
            <p className="mt-6 max-w-xl text-lg text-slate-700">
              {fr
                ? "Chaque enfant merite l'acces aux competences d'avenir. CODEship Academy construit ce futur avec un apprentissage inclusif et credible."
                : "Every child deserves access to future-ready skills. CODEship Academy builds that future through trusted, inclusive, project-based learning."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="focus-ring rounded-md bg-navy px-5 py-3 text-sm font-bold text-white" href={`/${locale}/programs`}>{t.ctaExplore}</Link>
              <Link className="focus-ring rounded-md border border-navy px-5 py-3 text-sm font-bold text-navy" href={`/${locale}/school-programs`}>{t.ctaSchool}</Link>
              <Link className="focus-ring rounded-md border border-supportBlue px-5 py-3 text-sm font-bold text-supportBlue" href={`/${locale}/franchising`}>{t.ctaFranchise}</Link>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80" alt={fr ? "Eleves construisant des projets technologiques en equipe" : "Students building collaborative technology projects"} className="h-[460px] w-full rounded-2xl object-cover shadow-premium" />
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell grid gap-6 md:grid-cols-4">
          {(fr
            ? [
                { level: "explorers", label: "Explorateurs 6-7" },
                { level: "builders", label: "Batisseurs 8-9" },
                { level: "developers", label: "Developpeurs 10-12" },
                { level: "engineers", label: "Ingenieurs 13-16" }
              ]
            : [
                { level: "explorers", label: "Explorers 6-7" },
                { level: "builders", label: "Builders 8-9" },
                { level: "developers", label: "Developers 10-12" },
                { level: "engineers", label: "Engineers 13-16" }
              ]).map((p) => (
            <article key={p.label} className="flex flex-col rounded-xl border border-slate-200 p-5">
              <h2 className="font-display text-3xl text-navy">{p.label}</h2>
              <p className="mt-2 text-sm text-slate-700">{fr ? "Parcours interactif avec resultats, projets reels et visibilite parentale." : "Interactive pathway with outcomes, real projects, and family progress visibility."}</p>
              <div className="mt-4">
                <EnrollButton program={p.level as ProgramLevel} label={fr ? "S'inscrire" : "Register Now"} />
              </div>
            </article>
          ))}
        </div>
      </section>
      <HomeExperience locale={locale} />
    </>
  );
}
