import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { metaByPage } from "@/lib/content";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return metaByPage[locale].blog;
}

export default async function BlogPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const fr = locale === "fr";
  const topics = fr
    ? ["Codage pour enfants au Canada", "Programmes STEM pour ecoles en Ontario", "Codage pour enfants neurodivergents", "Cours d'IA pour enfants", "Clubs de codage parascolaires", "Litteratie numerique et emplois du futur"]
    : ["Coding for kids Canada", "STEM programs for schools Ontario", "Coding for neurodiverse children", "AI classes for kids", "After-school coding programs", "Digital literacy and future jobs"];
  return (
    <div className="container-shell section-space">
      <h1 className="font-display text-6xl text-navy">{fr ? "Ressources" : "Blog & Resources"}</h1>
      <p className="mt-4 text-slate-700">{fr ? "Centre de ressources SEO pour familles, ecoles et partenaires communautaires." : "SEO-focused learning hub for families, schools, and community partners."}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {topics.map((topic) => (
          <article key={topic} className="rounded-xl border border-slate-200 p-5">
            <h2 className="font-semibold text-navy">{topic}</h2>
            <p className="mt-2 text-sm text-slate-700">{fr ? "Guides pratiques, alignement pedagogique et mise en oeuvre locale." : "Evidence-led guidance, practical curriculum insight, and local implementation ideas."}</p>
            <Link href={`/${locale}/contact`} className="focus-ring mt-3 inline-block rounded-md text-sm font-semibold text-supportBlue underline-offset-4 hover:underline">{fr ? "Lire l'article" : "Read article"}</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
