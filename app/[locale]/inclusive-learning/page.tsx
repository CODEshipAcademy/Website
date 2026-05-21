import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { metaByPage } from "@/lib/content";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return metaByPage[locale].inclusive;
}

export default async function InclusiveLearningPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const fr = locale === "fr";
  return (
    <div className="container-shell section-space">
      <h1 className="font-display text-6xl text-navy">{fr ? "Apprentissage inclusif" : "Inclusive Learning"}</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80" alt={fr ? "Classe calme et inclusive" : "Calm inclusive classroom environment"} className="h-[420px] w-full rounded-2xl object-cover shadow-premium" />
        <div className="space-y-4 text-slate-700">
          <p>{fr ? "Conception pedagogique neuroinclusive, rythme adapte TDAH, ratio eleve-enseignant reduit et approche axee sur la confiance." : "Neurodiverse-friendly learning design, ADHD-aware pacing, low student-teacher ratios, and confidence-first instruction."}</p>
          <p>{fr ? "Nos educateurs creent des environnements securitaires et inclusifs, avec des approches souples adaptees a chaque enfant." : "Our educators build safe, gender-inclusive classrooms with flexible teaching approaches that meet each learner where they are."}</p>
        </div>
      </div>
    </div>
  );
}
