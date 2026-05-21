"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export function HomeExperience({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const journey = fr
    ? ["Découvrir", "Construire", "Collaborer", "Créer un impact"]
    : ["Discover", "Build", "Collaborate", "Create impact"];
  return (
    <>
      <section className="section-space">
        <div className="container-shell">
          <h2 className="font-display text-5xl text-navy">{fr ? "Parcours d'apprentissage" : "Learning Journey"}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {journey.map((step, i) => (
              <motion.article key={step} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }} className="rounded-xl border border-slate-200 p-5">
                <p className="text-xs font-bold text-supportBlue">0{i + 1}</p>
                <h3 className="mt-2 font-display text-3xl text-navy">{step}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-surface section-space">
        <div className="container-shell grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-5xl text-navy">{fr ? "Visualisation des compétences d'avenir" : "Future Skills Visualization"}</h2>
            <p className="mt-3 text-slate-700">{fr ? "Des parcours animés qui relient les projets réels aux carrières futures." : "Animated pathways connecting real projects to future careers."}</p>
            <Link className="focus-ring mt-5 inline-block rounded-md bg-navy px-5 py-3 text-sm font-bold text-white" href={`/${locale}/programs`}>
              {fr ? "Voir les parcours" : "View Pathways"}
            </Link>
          </div>
          <motion.div className="rounded-2xl border border-slate-200 bg-white p-6" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            {[75, 62, 88, 54].map((n, i) => (
              <div key={n} className="mb-4">
                <p className="mb-1 text-sm text-slate-700">{fr ? `Indicateur ${i + 1}` : `Indicator ${i + 1}`}</p>
                <div className="h-3 rounded bg-slate-100">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${n}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} className="h-3 rounded bg-supportBlue" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
