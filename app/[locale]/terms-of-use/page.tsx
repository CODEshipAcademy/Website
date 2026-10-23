import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { NOVEMBER_FREE_TRIAL } from "@/lib/promotions";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === "fr" ? { title: "Conditions d'utilisation | Academie CODEship", description: "Conditions legales d'utilisation du site CODEship Academy." } : { title: "Terms of Use | CODEship Academy", description: "Legal terms for use of the CODEship Academy website." };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const fr = locale === "fr";
  const year = NOVEMBER_FREE_TRIAL.year;
  return (
    <div className="container-shell section-space max-w-4xl space-y-4 text-slate-700">
      <h1 className="font-display text-6xl text-navy">{fr ? "Conditions d'utilisation" : "Terms of Use"}</h1>
      <p>{fr ? "En utilisant ce site, vous acceptez une utilisation legale et des informations exactes." : "By using this site, users agree to lawful use, respectful communication, and accurate information submission."}</p>
      <p>{fr ? "Les resultats educatifs varient selon l'apprenant. Le contenu franchise/ecole est informatif." : "Educational outcomes vary by learner. Franchise and school information is informational only and not legal or financial advice."}</p>
      <section id="free-trial" className="scroll-mt-24 space-y-3 pt-6">
        <h2 className="font-display text-4xl text-navy">{fr ? `Offre de cours d'essai gratuit — novembre ${year}` : `November ${year} Free Trial Class Offer`}</h2>
        <ul className="list-disc space-y-2 pl-6">
          {(fr
            ? [
                "CODEship Academy offre un (1) cours d'essai gratuit par élève.",
                "L'offre s'applique aux cours en ligne et en personne.",
                `Le cours d'essai doit être utilisé (suivi) en novembre ${year}, au plus tard le 30 novembre ${year}. Les essais non utilisés expirent après cette date et ne peuvent pas être reportés.`,
                "Le cours d'essai n'a aucune valeur monétaire, n'est pas remboursable et ne peut pas être transféré ni échangé contre de l'argent ou un crédit.",
                "Les places sont limitées et sous réserve de disponibilité."
              ]
            : [
                "CODEship Academy offers one (1) free trial class per student.",
                "The offer applies to both online and in-person classes.",
                `The trial class must be redeemed (attended) in November ${year}, no later than November 30, ${year}. Unused trials expire after that date and cannot be carried over.`,
                "The trial class has no cash value, is non-refundable, and cannot be transferred or exchanged for cash or credit.",
                "Spots are limited and subject to availability."
              ]
          ).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
