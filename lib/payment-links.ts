export type ProgramLevel = "explorers" | "builders" | "developers" | "engineers";

interface ProgramConfig {
  label: string;
  ageRange: string;
  priceCad: number;
  url: string;
}

export const PROGRAM_LINKS: Record<ProgramLevel, ProgramConfig> = {
  explorers: {
    label: "Explorers",
    ageRange: "Ages 4–6 / K–1",
    priceCad: 175,
    url: "https://buy.stripe.com/00wbIV4Abdo1dbz7TKdAk09",
  },
  builders: {
    label: "Builders",
    ageRange: "Ages 7–9 / Grades 2–3",
    priceCad: 175,
    url: "https://buy.stripe.com/7sY8wJ6Ij6ZD6Nb7TKdAk0b",
  },
  developers: {
    label: "Developers",
    ageRange: "Ages 9–11 / Grades 4–5",
    priceCad: 199,
    url: "https://buy.stripe.com/4gM4gtc2D2JnefD0ridAk0a",
  },
  engineers: {
    label: "Engineers",
    ageRange: "Ages 11–14 / Grades 6–8",
    priceCad: 199,
    url: "https://buy.stripe.com/14AfZbc2D1Fjc7vfmcdAk08",
  },
};
