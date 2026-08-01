import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

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
  ]);

  // Non-localized transactional page — the primary conversion URL.
  return [
    {
      url: `${base}/register`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...localized,
  ];
}
