"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { dictionary, type Locale } from "@/lib/i18n";
import { usePathname } from "next/navigation";
import { CookieConsent } from "@/components/cookie-consent";

export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = dictionary[locale];
  const path = usePathname();
  const other = locale === "en" ? "fr" : "en";
  const switched = path?.replace(`/${locale}`, `/${other}`) ?? `/${other}`;

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur">
        <div className="container-shell flex items-center justify-between py-4">
          <Link href={`/${locale}`} className="focus-ring rounded-md">
            <p className="font-display text-3xl tracking-wide text-navy">{t.brand}</p>
          </Link>
          <nav aria-label="Primary navigation" className="hidden gap-6 md:flex">
            {[
              ["", t.nav.home],
              ["/programs", t.nav.programs],
              ["/inclusive-learning", t.nav.inclusive],
              ["/school-programs", t.nav.schools],
              ["/franchising", t.nav.franchise],
              ["/about", t.nav.about],
              ["/blog", t.nav.blog],
              ["/contact", t.nav.contact]
            ].map(([href, label]) => (
              <Link key={href} href={`/${locale}${href}`} className="focus-ring rounded-md text-sm font-semibold text-navy">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/register"
              className="focus-ring rounded-md bg-yellow px-4 py-2 text-sm font-bold text-navy"
            >
              {t.nav.register}
            </Link>
            <Link href={switched} hrefLang={other} className="focus-ring rounded-md border border-navy px-3 py-2 text-xs font-semibold uppercase tracking-wide text-navy">
              {other}
            </Link>
          </div>
        </div>
      </header>
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        {children}
      </motion.main>
      <footer className="border-t border-slate-200 bg-surface">
        <div className="container-shell grid gap-10 py-14 md:grid-cols-4">
          <div>
            <p className="font-display text-3xl text-navy">{t.brand}</p>
            <p className="mt-3 text-sm text-slate-700">{t.tag}</p>
            <Link href="/register" className="focus-ring mt-4 inline-block rounded-md bg-yellow px-4 py-2 text-sm font-bold text-navy">
              {t.nav.register}
            </Link>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-navy">{locale === "fr" ? "Régions" : "Locations"}</p>
            <div className="mt-4 space-y-2 text-sm">
              {[
                ["ontario", "Ontario"],
                ["quebec", locale === "fr" ? "Québec" : "Quebec"],
                ["british-columbia", locale === "fr" ? "Colombie-Britannique" : "British Columbia"],
                ["alberta", "Alberta"]
              ].map(([slug, label]) => (
                <Link key={slug} href={`/${locale}/locations/${slug}`} className="focus-ring block rounded-md text-navy underline-offset-4 hover:underline">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-navy">Legal</p>
            <div className="mt-4 space-y-2 text-sm">
              {["privacy-policy", "terms-of-use", "cookie-policy", "accessibility-statement"].map((slug) => (
                <Link key={slug} href={`/${locale}/${slug}`} className="focus-ring block rounded-md text-navy underline-offset-4 hover:underline">
                  {slug.replaceAll("-", " ")}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-700">PIPEDA, CASL, COPPA-aware privacy practices and Quebec Law 25-aligned consent controls are built into our inquiry flows.</p>
          </div>
        </div>
      </footer>
      <CookieConsent locale={locale} />
    </div>
  );
}
