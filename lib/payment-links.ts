export type ProgramLevel = "explorers" | "builders" | "developers" | "engineers";

export interface ProgramConfig {
  /** Stable order used for display across the site. */
  order: number;
  label: string;
  labelFr: string;
  /** Canonical age band (single source of truth for the whole site). */
  ageMin: number;
  ageMax: number;
  gradesEn: string;
  gradesFr: string;
  priceCad: number;
  techEn: string;
  techFr: string;
  projectsEn: string;
  projectsFr: string;
  url: string;
}

export const PROGRAM_LINKS: Record<ProgramLevel, ProgramConfig> = {
  explorers: {
    order: 1,
    label: "Explorers",
    labelFr: "Explorateurs",
    ageMin: 4,
    ageMax: 6,
    gradesEn: "K–1",
    gradesFr: "M–1re",
    priceCad: 175,
    techEn: "Scratch Jr, digital literacy, creative problem-solving",
    techFr: "Scratch Jr, littératie numérique, résolution créative",
    projectsEn: "Interactive stories and simple games",
    projectsFr: "Histoires interactives et mini-jeux",
    url: "https://buy.stripe.com/00wbIV4Abdo1dbz7TKdAk09",
  },
  builders: {
    order: 2,
    label: "Builders",
    labelFr: "Bâtisseurs",
    ageMin: 7,
    ageMax: 9,
    gradesEn: "Grades 2–3",
    gradesFr: "2e–3e année",
    priceCad: 175,
    techEn: "Scratch, HTML, CSS, problem-solving, teamwork",
    techFr: "Scratch, HTML, CSS, résolution de problèmes, travail d'équipe",
    projectsEn: "Web pages and classroom challenge sites",
    projectsFr: "Sites web et défis de classe",
    url: "https://buy.stripe.com/7sY8wJ6Ij6ZD6Nb7TKdAk0b",
  },
  developers: {
    order: 3,
    label: "Developers",
    labelFr: "Développeurs",
    ageMin: 9,
    ageMax: 11,
    gradesEn: "Grades 4–5",
    gradesFr: "4e–5e année",
    priceCad: 199,
    techEn: "JavaScript, Python, AI learning foundations",
    techFr: "JavaScript, Python, bases de l'IA",
    projectsEn: "Apps, bots, and data storytelling",
    projectsFr: "Applications, robots logiciels, narration de données",
    url: "https://buy.stripe.com/4gM4gtc2D2JnefD0ridAk0a",
  },
  engineers: {
    order: 4,
    label: "Engineers",
    labelFr: "Ingénieurs",
    ageMin: 11,
    ageMax: 14,
    gradesEn: "Grades 6–8",
    gradesFr: "6e–8e année",
    priceCad: 199,
    techEn: "Advanced JS/Python, app development, product design",
    techFr: "JS/Python avancé, développement d'apps, conception produit",
    projectsEn: "Community impact solutions",
    projectsFr: "Solutions d'impact communautaire",
    url: "https://buy.stripe.com/14AfZbc2D1Fjc7vfmcdAk08",
  },
};

/** Programs in canonical display order. */
export const PROGRAM_ORDER: ProgramLevel[] = (
  Object.keys(PROGRAM_LINKS) as ProgramLevel[]
).sort((a, b) => PROGRAM_LINKS[a].order - PROGRAM_LINKS[b].order);

/** Localized program name. */
export function programName(level: ProgramLevel, fr: boolean): string {
  const c = PROGRAM_LINKS[level];
  return fr ? c.labelFr : c.label;
}

/** Localized age band, e.g. "Ages 4–6 · K–1" / "4–6 ans · M–1re". */
export function ageLabel(level: ProgramLevel, fr: boolean): string {
  const c = PROGRAM_LINKS[level];
  const range = `${c.ageMin}–${c.ageMax}`;
  return fr ? `${range} ans · ${c.gradesFr}` : `Ages ${range} · ${c.gradesEn}`;
}
