import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { InquiryForm } from "@/components/inquiry-form";
import { metaByPage } from "@/lib/content";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return metaByPage[locale].contact;
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const fr = locale === "fr";
  return (
    <div className="container-shell section-space">
      <h1 className="font-display text-6xl text-navy">Contact</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          {(fr ? ["Demande generale", "Demande parent", "Demande ecole", "Demande franchise", "Demande media"] : ["General inquiry", "Parent inquiry", "School inquiry", "Franchise inquiry", "Media inquiry"]).map((p) => <li key={p}>{p}</li>)}
        </ul>
        <InquiryForm locale={locale} type="general" />
      </div>
    </div>
  );
}
