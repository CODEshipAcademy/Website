import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const base = "https://codeshipacademy.ca";
const paths = ["", "/programs", "/inclusive-learning", "/school-programs", "/franchising", "/about", "/contact", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${base}/${locale}${path}`,
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.8
    }))
  );
}
