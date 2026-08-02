import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { EnrollButton } from "@/components/EnrollButton";
import {
  PROGRAM_LINKS,
  PROGRAM_ORDER,
  type ProgramLevel,
  ageLabel,
} from "@/lib/payment-links";
import { SITE_URL } from "@/lib/content";

function isProgram(value: string): value is ProgramLevel {
  return (PROGRAM_ORDER as string[]).includes(value);
}

export function generateStaticParams() {
  return PROGRAM_ORDER.map((program) => ({ program }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ program: string }>;
}): Promise<Metadata> {
  const { program } = await params;
  if (!isProgram(program)) return {};
  const c = PROGRAM_LINKS[program];
  const title = `${c.label} — Kids Coding Registration (${ageLabel(program, false)}) | CODEship Academy`;
  const description = `${c.summary} Register for the ${c.label} program — CAD $${c.priceCad}/semester. ${c.techEn}.`;
  return {
    title,
    description,
    alternates: { canonical: `/register/${program}` },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${SITE_URL}/register/${program}`,
      siteName: "CODEship Academy",
    },
  };
}

const included = [
  "Live, small-group classes with a dedicated instructor",
  "Weekly, project-based lessons your child keeps and shares",
  "Progress updates for families every step of the way",
  "Inclusive, neurodiverse-friendly classrooms",
];

export default async function ProgramRegisterPage({
  params,
}: {
  params: Promise<{ program: string }>;
}) {
  const { program } = await params;
  if (!isProgram(program)) notFound();
  const c = PROGRAM_LINKS[program];

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${c.label} — Kids Coding Program`,
    description: c.summary,
    provider: {
      "@type": "EducationalOrganization",
      name: "CODEship Academy",
      sameAs: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: c.priceCad,
      priceCurrency: "CAD",
      category: "Tuition per semester",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/register/${program}`,
    },
  };

  return (
    <SiteShell locale="en">
      <main className="container-shell section-space">
        <Link href="/register" className="focus-ring text-sm font-semibold text-supportBlue underline-offset-4 hover:underline">
          ← All programs
        </Link>

        <div className="mt-6 grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-supportBlue">{ageLabel(program, false)}</p>
            <h1 className="mt-1 font-display text-6xl text-navy">{c.label}</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-700">{c.summary}</p>

            <section className="mt-8">
              <h2 className="font-display text-3xl text-navy">What your child will learn</h2>
              <ul className="mt-3 space-y-2">
                {c.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700">
                    <span aria-hidden className="mt-0.5 text-supportBlue">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy">Technologies</h3>
                <p className="mt-2 text-slate-700">{c.techEn}</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy">Projects</h3>
                <p className="mt-2 text-slate-700">{c.projectsEn}</p>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="font-display text-3xl text-navy">Included with every semester</h2>
              <ul className="mt-3 space-y-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700">
                    <span aria-hidden className="mt-0.5 text-supportBlue">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sticky registration card featuring the payment link */}
          <aside className="md:sticky md:top-28 md:self-start">
            <div className="rounded-2xl border border-slate-200 bg-navy p-7 text-white shadow-premium">
              <p className="text-sm font-semibold uppercase tracking-wide text-yellow">{c.label}</p>
              <div className="mt-2 text-4xl font-bold">
                CAD ${c.priceCad}
                <span className="text-base font-normal text-slate-300"> / semester</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{ageLabel(program, false)} · live online classes</p>
              <div className="mt-6">
                <EnrollButton program={program} label={`Register for ${c.label}`} />
              </div>
              <p className="mt-4 text-xs text-slate-400">
                Secure checkout via Stripe. No account required.
              </p>
            </div>
          </aside>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      </main>
    </SiteShell>
  );
}
