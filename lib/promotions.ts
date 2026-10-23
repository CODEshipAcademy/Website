/**
 * Time-boxed promotions. The homepage swaps its regular hero for the promo hero
 * while a promotion is live and reverts automatically once it ends — no deploy
 * needed. Dates are absolute instants so the cutover is the same everywhere:
 * midnight Eastern (EST, UTC-5) at the end of the last day.
 */
export const NOVEMBER_FREE_TRIAL = {
  year: 2026,
  // Show from deploy until the end of Nov 30, 2026 (Eastern).
  endsAt: new Date("2026-12-01T05:00:00Z"),
  image: "/promos/november-free-trial.webp",
  policyHref: (locale: string) => `/${locale}/terms-of-use#free-trial`
};

export function isNovemberFreeTrialActive(now: Date = new Date()): boolean {
  return now < NOVEMBER_FREE_TRIAL.endsAt;
}
