import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { InquiryForm } from "@/components/inquiry-form";
import { metaByPage } from "@/lib/content";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return metaByPage[locale].schools;
}

export default async function SchoolProgramsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const fr = locale === "fr";
  return (
    <div className="container-shell section-space">
      <h1 className="font-display text-6xl text-navy">{fr ? "Apportez CODEship a votre classe" : "Bring CODEship to Your Classroom"}</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          <li>{fr ? "Ateliers en classe, journees STEM et clubs parascolaires" : "In-class workshops, full-day STEM, and after-school coding clubs"}</li>
          <li>{fr ? "Integration au curriculum ontarien et partenariat enseignant" : "Ontario curriculum integration and teacher partnership model"}</li>
          <li>{fr ? "Structure flexible pour ecoles, camps et centres communautaires" : "Flexible booking structures for schools, camps, and community centres"}</li>
          <li>{fr ? "Processus securite et conformite avec implantation" : "Safety/compliance workflow with onboarding and classroom setup"}</li>
        </ul>
        <InquiryForm locale={locale} type="school" />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Event", name: fr ? "Atelier STEM CODEship en milieu scolaire" : "CODEship School STEM Workshop", eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode", eventStatus: "https://schema.org/EventScheduled", location: { "@type": "Place", name: "Ontario Schools" }, organizer: { "@type": "EducationalOrganization", name: "CODEship Academy" } }) }} />
    </div>
  );
}
