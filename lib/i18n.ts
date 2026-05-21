export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const dictionary = {
  en: {
    brand: "CODEship Academy",
    tag: "Canada's Inclusive Future Skills Academy for Children",
    ctaExplore: "Explore Programs",
    ctaSchool: "Bring CODEship to Your School",
    ctaFranchise: "Start a Franchise Conversation",
    nav: {
      home: "Home",
      programs: "Programs",
      inclusive: "Inclusive Learning",
      schools: "School Programs",
      franchise: "Franchising",
      about: "About",
      blog: "Blog",
      contact: "Contact"
    }
  },
  fr: {
    brand: "Académie CODEship",
    tag: "L'académie canadienne inclusive de compétences d'avenir pour les enfants",
    ctaExplore: "Explorer les programmes",
    ctaSchool: "Offrir CODEship à votre école",
    ctaFranchise: "Commencer une discussion franchise",
    nav: {
      home: "Accueil",
      programs: "Programmes",
      inclusive: "Apprentissage inclusif",
      schools: "Programmes scolaires",
      franchise: "Franchise",
      about: "À propos",
      blog: "Ressources",
      contact: "Contact"
    }
  }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
