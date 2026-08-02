import type { Metadata } from "next";
import Link from "next/link";
import { dictionary, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/content";
import { HomeExperience } from "@/components/home-experience";
import { ScrollRegisterPopup } from "@/components/scroll-register-popup";
import { PROGRAM_LINKS, PROGRAM_ORDER, programName, ageLabel } from "@/lib/payment-links";
import { getVisitorGeo } from "@/lib/geo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "home", "");
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = dictionary[locale];
  const fr = locale === "fr";
  const { city } = await getVisitorGeo();
  const localePlace = city ?? (fr ? "votre ville" : "your city");
  return (
    <>
      <Link
        href="/register"
        className="focus-ring block bg-navy text-center text-sm font-semibold text-white"
      >
        <span className="container-shell flex items-center justify-center gap-2 py-2.5">
          <span aria-hidden>🍁</span>
          {fr
            ? `Cours en direct en ligne — inscriptions ouvertes à ${localePlace}. `
            : `Live online classes — now enrolling in ${localePlace}. `}
          <span className="font-bold text-yellow underline underline-offset-4">
            {fr ? "S'inscrire →" : "Register →"}
          </span>
        </span>
      </Link>
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
              <Link className="focus-ring rounded-md bg-yellow px-5 py-3 text-sm font-bold text-navy" href="/register">{fr ? "Inscrire mon enfant" : "Register My Child"}</Link>
              <Link className="focus-ring rounded-md bg-navy px-5 py-3 text-sm font-bold text-white" href={`/${locale}/programs`}>{t.ctaExplore}</Link>
              <Link className="focus-ring rounded-md border border-navy px-5 py-3 text-sm font-bold text-navy" href={`/${locale}/school-programs`}>{t.ctaSchool}</Link>
            </div>
            <p className="mt-4 text-sm text-slate-600">{fr ? "Ages 4 à 14 · Petits groupes · À partir de 175 $ CA / semestre" : "Ages 4–14 · Small classes · From CAD $175 / semester"}</p>
          </div>
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80" alt={fr ? "Eleves construisant des projets technologiques en equipe" : "Students building collaborative technology projects"} className="h-[460px] w-full rounded-2xl object-cover shadow-premium" />
        </div>
      </section>
      <section className="border-y border-slate-200 bg-surface py-8">
        <div className="container-shell grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {(fr
            ? ["Petits groupes, plus d'attention", "Éducateurs qualifiés et bienveillants", "Bilingue — anglais et français", "Inclusif et adapté aux neurodivergents"]
            : ["Small classes, more attention", "Qualified, caring educators", "Bilingual — English & French", "Inclusive & neurodiverse-friendly"]).map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm font-semibold text-navy">
              <span aria-hidden className="text-supportBlue">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <h2 className="font-display text-5xl text-navy">{fr ? "Trouvez le bon programme" : "Find the Right Program"}</h2>
          <p className="mt-3 max-w-2xl text-slate-700">{fr ? "Des parcours par age, du premier bloc de code jusqu'a l'IA et au developpement d'applications." : "Age-based pathways from a child's first block of code to AI and app development."}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {PROGRAM_ORDER.map((level) => (
              <article key={level} className="flex flex-col rounded-xl border border-slate-200 p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-supportBlue">{ageLabel(level, fr)}</p>
                <h3 className="mt-1 font-display text-3xl text-navy">{programName(level, fr)}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-700">{fr ? PROGRAM_LINKS[level].techFr : PROGRAM_LINKS[level].techEn}</p>
                <p className="mt-3 text-sm font-semibold text-navy">{fr ? `${PROGRAM_LINKS[level].priceCad} $ CA / semestre` : `CAD $${PROGRAM_LINKS[level].priceCad} / semester`}</p>
                <Link href={`/register/${level}`} className="focus-ring mt-4 inline-block rounded-md bg-yellow px-4 py-2 text-sm font-bold text-navy">
                  {fr ? "Détails et inscription →" : "Details & register →"}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <HomeExperience locale={locale} />
      <ScrollRegisterPopup city={city} locale={locale} />
    </>
  );
}
