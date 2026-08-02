"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const DISMISS_KEY = "codeship-register-popup-dismissed";

/**
 * Registration prompt that slides in after the visitor scrolls ~40% down the
 * page. City-aware ("Now enrolling in {city}") when geo is available. Dismissed
 * per session so it never nags, and respects reduced-motion preferences.
 */
export function ScrollRegisterPopup({ city, locale }: { city: string | null; locale: Locale }) {
  const fr = locale === "fr";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY)) return;
    } catch {
      /* storage unavailable — still allow the popup */
    }

    let done = false;
    const onScroll = () => {
      if (done) return;
      const scrolled = window.scrollY + window.innerHeight;
      const threshold = document.documentElement.scrollHeight * 0.4;
      if (scrolled >= threshold) {
        done = true;
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function dismiss() {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* no-op */
    }
    setVisible(false);
  }

  if (!visible) return null;

  const headline = city
    ? fr
      ? `Inscriptions ouvertes à ${city}`
      : `Now enrolling in ${city}`
    : fr
      ? "Inscriptions ouvertes partout au Canada"
      : "Now enrolling across Canada";

  return (
    <div
      role="dialog"
      aria-label={fr ? "Inscription" : "Register"}
      className="popup-in fixed bottom-24 left-4 right-4 z-40 rounded-xl border border-slate-200 bg-white p-5 shadow-premium md:left-auto md:right-6 md:max-w-sm"
    >
      <button
        onClick={dismiss}
        aria-label={fr ? "Fermer" : "Close"}
        className="focus-ring absolute right-3 top-3 rounded-md p-1 text-slate-400 hover:text-navy"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
        </svg>
      </button>
      <p className="text-xs font-bold uppercase tracking-wide text-supportBlue">🍁 {headline}</p>
      <p className="mt-2 font-display text-2xl leading-tight text-navy">
        {fr ? "Cours de codage en direct, en ligne" : "Live, online coding classes"}
      </p>
      <p className="mt-1 text-sm text-slate-700">
        {fr
          ? "Petits groupes, âges 4 à 14. Réservez la place de votre enfant pour le semestre."
          : "Small classes, ages 4–14. Reserve your child's spot for the semester."}
      </p>
      <div className="mt-4 flex gap-2">
        <Link
          href="/register"
          className="focus-ring rounded-md bg-yellow px-4 py-2 text-sm font-bold text-navy"
          onClick={dismiss}
        >
          {fr ? "S'inscrire" : "Register Now"}
        </Link>
        <button
          onClick={dismiss}
          className="focus-ring rounded-md px-3 py-2 text-sm font-semibold text-slate-500 hover:text-navy"
        >
          {fr ? "Plus tard" : "Maybe later"}
        </button>
      </div>
    </div>
  );
}
