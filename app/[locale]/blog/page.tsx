import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/content";
import { listPosts } from "@/lib/blog";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "blog", "/blog");
}

export default async function BlogPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const fr = locale === "fr";
  const posts = listPosts(locale);
  return (
    <div className="container-shell section-space">
      <h1 className="font-display text-6xl text-navy">{fr ? "Ressources" : "Blog & Resources"}</h1>
      <p className="mt-4 max-w-3xl text-slate-700">{fr ? "Guides pratiques pour les familles, écoles et partenaires communautaires : codage jeunesse, apprentissage inclusif, IA et STEM au Canada." : "Practical guides for families, schools, and community partners — kids coding, inclusive learning, AI, and STEM in Canada."}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="flex flex-col rounded-xl border border-slate-200 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-supportBlue">
              {new Date(post.date).toLocaleDateString(fr ? "fr-CA" : "en-CA", { year: "numeric", month: "long", day: "numeric" })} · {post.readMinutes} {fr ? "min de lecture" : "min read"}
            </p>
            <h2 className="mt-2 font-display text-3xl leading-tight text-navy">
              <Link href={`/${locale}/blog/${post.slug}`} className="focus-ring rounded hover:underline">{post.title}</Link>
            </h2>
            <p className="mt-3 flex-1 text-sm text-slate-700">{post.description}</p>
            <Link href={`/${locale}/blog/${post.slug}`} className="focus-ring mt-4 inline-block rounded-md text-sm font-semibold text-supportBlue underline-offset-4 hover:underline">
              {fr ? "Lire l'article →" : "Read article →"}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
