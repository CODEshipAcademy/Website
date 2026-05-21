import { notFound } from "next/navigation";

const provinces = ["ontario", "quebec", "british-columbia", "alberta"];

export function generateStaticParams() {
  return provinces.map((province) => ({ province }));
}

export default async function LocationPage({ params }: { params: Promise<{ province: string }> }) {
  const { province } = await params;
  if (!provinces.includes(province)) notFound();
  return (
    <div className="container-shell section-space">
      <h1 className="font-display text-6xl text-navy">CODEship in {province.replaceAll("-", " ")}</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        Local future-skills programs for families, schools, and communities with bilingual support, curriculum alignment, and inclusive classroom models.
      </p>
    </div>
  );
}
