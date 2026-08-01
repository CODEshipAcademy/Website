/**
 * Shared cookie-consent state for CASL / PIPEDA / Quebec Law 25 compliance.
 *
 * Analytics (Meta Pixel, GA4) must not load until the visitor explicitly opts
 * in via the banner. "all" = analytics allowed; "essential" = analytics denied.
 * The choice is persisted in localStorage and broadcast in-tab via a custom
 * event so the Analytics component can react without a page reload.
 */
export const CONSENT_KEY = "codeship-cookie-consent";
export const CONSENT_EVENT = "codeship-consent-change";

export type ConsentValue = "all" | "essential";

export function getConsent(): ConsentValue | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "all" || v === "essential" ? v : null;
  } catch {
    return null;
  }
}

/** True only when the visitor has explicitly accepted analytics cookies. */
export function hasAnalyticsConsent(): boolean {
  return getConsent() === "all";
}

export function setConsent(value: ConsentValue): void {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage unavailable — still broadcast for this session */
  }
  try {
    window.dispatchEvent(new Event(CONSENT_EVENT));
  } catch {
    /* no-op on server */
  }
}
