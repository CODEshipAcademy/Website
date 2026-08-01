"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { type ConsentValue, getConsent, setConsent } from "@/lib/consent";

/**
 * CASL / PIPEDA / Quebec Law 25-aware consent banner. Persists the visitor's
 * choice and broadcasts it so analytics only load after opt-in. Stays hidden
 * until we know a choice hasn't been made (avoids a flash for returning users).
 */
export function CookieConsent({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
  }, []);

  function choose(value: ConsentValue) {
    setConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={fr ? "Préférences de témoins" : "Cookie preferences"}
      className="fixed bottom-4 left-4 right-4 z-40 rounded-lg border border-slate-300 bg-white p-4 shadow-premium md:left-auto md:right-6 md:max-w-md"
    >
      <p className="text-xs text-slate-700">
        {fr
          ? "Ce site utilise des témoins pour son fonctionnement essentiel et l'analyse d'audience. Vos préférences respectent la LCAP, la LPRPDE et la Loi 25 du Québec."
          : "This site uses cookies for essential operation and analytics. Consent preferences follow CASL, PIPEDA, and Quebec Law 25 requirements."}
      </p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => choose("all")}
          className="focus-ring rounded-md bg-navy px-3 py-2 text-xs font-semibold text-white"
        >
          {fr ? "Tout accepter" : "Accept all"}
        </button>
        <button
          onClick={() => choose("essential")}
          className="focus-ring rounded-md border border-navy px-3 py-2 text-xs font-semibold text-navy"
        >
          {fr ? "Essentiels seulement" : "Essential only"}
        </button>
      </div>
    </div>
  );
}
