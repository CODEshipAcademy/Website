import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { InquiryForm } from "@/components/inquiry-form";
import { metaByPage } from "@/lib/content";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return metaByPage[locale].franchising;
}

export default async function FranchisingPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const fr = locale === "fr";
  return (
    <div className="container-shell section-space">
      <h1 className="font-display text-6xl text-navy">{fr ? "Batissez l'avenir dans votre communaute" : "Build the Future in Your Community"}</h1>
      <p className="mt-3 text-lg text-slate-700">{fr ? "Lancez votre propre Academie CODEship." : "Launch your own CODEship Academy."}</p>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-slate-700">
          <p>{fr ? "Modele educatif a impact avec cout de depart reduit et opportunites de partenariat scolaire." : "Purpose-driven education business with low overhead model design and school partnership opportunities."}</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>{fr ? "Formation, curriculum et accompagnement operationnel" : "Curriculum, training, and instructional systems"}</li>
            <li>{fr ? "Soutien marketing, inscriptions et rayonnement communautaire" : "Marketing, enrollment, and community outreach support"}</li>
            <li>{fr ? "Planification territoriale et processus de decouverte" : "Territory planning and discovery process"}</li>
            <li>{fr ? "Aucune garantie de revenus" : "No earnings guarantees or implied outcomes"}</li>
          </ul>
          <p className="rounded-md bg-surface p-4 text-sm">{fr ? "Les informations de franchise sont fournies a titre informatif et ne constituent pas une promesse de performance." : "Franchise disclosure documents and legal review are required. Revenue statements are not guarantees."}</p>
        </div>
        <InquiryForm locale={locale} type="franchise" />
      </div>
    </div>
  );
}
