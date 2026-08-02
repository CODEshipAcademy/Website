import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { postSlugs } from "@/lib/blog";
import { PROGRAM_ORDER } from "@/lib/payment-links";

const base = "https://codeshipacademy.com";
const paths = ["", "/programs", "/inclusive-learning", "/school-programs", "/franchising", "/about", "/contact", "/blog"];
const provinces = ["ontario", "quebec", "british-columbia", "alberta"];

export default function sitemap(): MetadataRoute.Sitemap {
  const localized = locales.flatMap((locale) => [
    ...paths.map((path) => ({
      url: `${base}/${locale}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${base}/en${path}`,
          fr: `${base}/fr${path}`,
        },
      },
    })),
    ...provinces.map((province) => ({
      url: `${base}/${locale}/locations/${province}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...postSlugs.map((slug) => ({
      url: `${base}/${locale}/blog/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: `${base}/en/blog/${slug}`,
          fr: `${base}/fr/blog/${slug}`,
        },
      },
    })),
  ]);

  // Non-localized transactional pages — the primary conversion URLs.
  return [
    {
      url: `${base}/register`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...PROGRAM_ORDER.map((program) => ({
      url: `${base}/register/${program}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...localized,
  ];
}
