import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { NOVEMBER_FREE_TRIAL } from "@/lib/promotions";

/** Homepage hero shown in place of the regular hero while the November free-trial promo is live. */
export function NovemberTrialHero({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  return (
    <section className="relative overflow-hidden bg-[#0B1424] section-space text-white">
      <div className="container-shell grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-300">{fr ? "Rêver. Coder. Réussir." : "Dream. Code. Achieve."}</p>
          <h1 className="mt-4 font-display leading-none">
            <span className="block text-7xl text-yellow md:text-8xl">{fr ? "Cours d'essai" : "Free"}</span>
            <span className="block text-6xl md:text-7xl">{fr ? "gratuit" : "Trial Class"}</span>
            <span className="mt-2 block text-4xl text-cyan-300 md:text-5xl">{fr ? "En novembre seulement" : "This November Only"}</span>
          </h1>
          <p className="mt-6 max-w-xl font-mono text-base text-slate-300">
            {fr
              ? "// Un cours d'essai gratuit, en ligne ou en personne, pour les élèves de la maternelle à la 8e année."
              : "// One free trial class — live online or in person — for Grades K–8."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="focus-ring rounded-md bg-yellow px-5 py-3 text-sm font-bold text-navy" href="/register">
              {fr ? "S'inscrire maintenant →" : "Register Now →"}
            </Link>
            <Link className="focus-ring rounded-md border border-white/60 px-5 py-3 text-sm font-bold text-white" href={`/${locale}/programs`}>
              {fr ? "Explorer les programmes" : "Explore Programs"}
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            {fr
              ? `Un cours gratuit par élève. Doit être utilisé au plus tard le 30 novembre ${NOVEMBER_FREE_TRIAL.year}. `
              : `One free class per student. Must be redeemed by November 30, ${NOVEMBER_FREE_TRIAL.year}. `}
            <Link href={NOVEMBER_FREE_TRIAL.policyHref(locale)} className="focus-ring rounded-sm underline underline-offset-4">
              {fr ? "Conditions" : "Terms apply"}
            </Link>
          </p>
        </div>
        <img
          src={NOVEMBER_FREE_TRIAL.image}
          alt={
            fr
              ? "CODEship Academy — cours d'essai gratuit en novembre seulement. Cours de codage en ligne ou en personne pour la maternelle à la 8e année."
              : "CODEship Academy — Free trial class, this November only. Live online or in-person coding classes for Grades K–8."
          }
          width={1092}
          height={1440}
          fetchPriority="high"
          className="mx-auto max-h-[560px] w-auto rounded-2xl object-contain shadow-premium"
        />
      </div>
    </section>
  );
}
