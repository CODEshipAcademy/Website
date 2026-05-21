import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { metaByPage } from "@/lib/content";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return metaByPage[locale].programs;
}

export default async function ProgramsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const fr = locale === "fr";
  const programs = fr
    ? [
        { name: "Explorateurs", ages: "6-7", tech: "Scratch, litteratie numerique, collaboration", projects: "Histoires interactives et mini-jeux" },
        { name: "Batisseurs", ages: "8-9", tech: "HTML, CSS, resolution de problemes, travail d'equipe", projects: "Sites web et defis de classe" },
        { name: "Developpeurs", ages: "10-12", tech: "JavaScript, Python, bases de l'IA", projects: "Applications, robots logiciels, narration de donnees" },
        { name: "Ingenieurs", ages: "13-16", tech: "JS/Python avance, dev app, conception produit", projects: "Solutions d'impact communautaire" }
      ]
    : [
        { name: "Explorers", ages: "6-7", tech: "Scratch, digital literacy, collaboration", projects: "Interactive stories and simple games" },
        { name: "Builders", ages: "8-9", tech: "HTML, CSS, problem-solving, teamwork", projects: "Web pages and classroom challenge sites" },
        { name: "Developers", ages: "10-12", tech: "JavaScript, Python, AI learning foundations", projects: "Apps, bots, and data storytelling" },
        { name: "Engineers", ages: "13-16", tech: "Advanced JS/Python, app development, product design", projects: "Community impact solutions" }
      ];
  return (
    <div className="container-shell section-space">
      <h1 className="font-display text-6xl text-navy">{fr ? "Programmes" : "Programs"}</h1>
      <p className="mt-4 max-w-3xl text-slate-700">{fr ? "Parcours alignes au curriculum avec resultats clairs, attentes parentales et projets authentiques." : "Curriculum-aligned pathways with clear outcomes, family expectations, and authentic project showcases."}</p>
      <div className="mt-10 space-y-8">
        {programs.map((p) => (
          <section key={p.name} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="font-display text-4xl text-navy">{p.name} ({p.ages})</h2>
            <p className="mt-2 text-slate-700"><strong>{fr ? "Technologies:" : "Technologies:"}</strong> {p.tech}</p>
            <p className="mt-2 text-slate-700"><strong>{fr ? "Projets:" : "Projects:"}</strong> {p.projects}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
