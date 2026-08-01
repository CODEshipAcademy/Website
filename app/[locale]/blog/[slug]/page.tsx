import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/content";
import { getPost } from "@/lib/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(locale, slug);
  if (!post) return {};
  return {
    title: `${post.title} | CODEship Academy`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        en: `/en/blog/${slug}`,
        fr: `/fr/blog/${slug}`,
        "x-default": `/en/blog/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      locale: locale === "fr" ? "fr_CA" : "en_CA",
      url: `${SITE_URL}/${locale}/blog/${slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      siteName: "CODEship Academy",
      images: [{ url: "/codeship-logo.png", width: 512, height: 512, alt: "CODEship Academy" }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/codeship-logo.png"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPost(locale, slug);
  if (!post) notFound();
  const fr = locale === "fr";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    inLanguage: locale === "fr" ? "fr-CA" : "en-CA",
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.keywords.join(", "),
    mainEntityOfPage: `${SITE_URL}/${locale}/blog/${slug}`,
    author: { "@type": "Organization", name: "CODEship Academy" },
    publisher: {
      "@type": "Organization",
      name: "CODEship Academy",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/codeship-logo.png` },
    },
  };

  return (
    <article className="container-shell section-space">
      <Link href={`/${locale}/blog`} className="focus-ring text-sm font-semibold text-supportBlue underline-offset-4 hover:underline">
        ← {fr ? "Toutes les ressources" : "All resources"}
      </Link>
      <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-navy md:text-6xl">{post.title}</h1>
      <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-supportBlue">
        {new Date(post.date).toLocaleDateString(fr ? "fr-CA" : "en-CA", { year: "numeric", month: "long", day: "numeric" })} · {post.readMinutes} {fr ? "min de lecture" : "min read"}
      </p>

      <div className="mt-8 max-w-3xl">
        <p className="text-lg leading-relaxed text-slate-800">{post.intro}</p>
        {post.sections.map((section) => (
          <section key={section.heading} className="mt-8">
            <h2 className="font-display text-3xl text-navy">{section.heading}</h2>
            {section.body.map((paragraph, i) => (
              <p key={i} className="mt-3 leading-relaxed text-slate-700">{paragraph}</p>
            ))}
          </section>
        ))}
      </div>

      <aside className="mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-surface p-7">
        <h2 className="font-display text-3xl text-navy">{post.ctaHeading}</h2>
        <p className="mt-2 text-slate-700">{post.ctaBody}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="focus-ring rounded-md bg-yellow px-5 py-3 text-sm font-bold text-navy" href="/register">
            {fr ? "S'inscrire" : "Register Now"}
          </Link>
          <Link className="focus-ring rounded-md border border-navy px-5 py-3 text-sm font-bold text-navy" href={`/${locale}/programs`}>
            {fr ? "Voir les programmes" : "View Programs"}
          </Link>
        </div>
      </aside>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </article>
  );
}
