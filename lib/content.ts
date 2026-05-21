import type { Locale } from "@/lib/i18n";

export type MetaCopy = { title: string; description: string };

export const metaByPage: Record<Locale, Record<string, MetaCopy>> = {
  en: {
    home: { title: "Home | CODEship Academy", description: "Canada's Inclusive Future Skills Academy for Children." },
    programs: { title: "Programs | CODEship Academy", description: "Age-based pathways from Scratch to AI and app development." },
    inclusive: { title: "Inclusive Learning | CODEship Academy", description: "Neurodiverse-friendly coding education with calm and flexible teaching." },
    schools: { title: "School Programs | CODEship Academy", description: "Bring CODEship to your classroom with curriculum-aligned STEM workshops." },
    franchising: { title: "Franchising | CODEship Academy", description: "Build the future in your community with a purpose-driven education model." },
    about: { title: "About | CODEship Academy", description: "Mission-led Canadian future-skills learning ecosystem for children." },
    contact: { title: "Contact | CODEship Academy", description: "Contact CODEship for parent, school, franchise, media, and partnership inquiries." },
    blog: { title: "Blog & Resources | CODEship Academy", description: "Guides on coding for kids, digital literacy, AI learning, and school STEM initiatives." }
  },
  fr: {
    home: { title: "Accueil | Académie CODEship", description: "L'académie canadienne inclusive de compétences d'avenir pour les enfants." },
    programs: { title: "Programmes | Académie CODEship", description: "Parcours par âge, de Scratch à l'IA et au développement d'applications." },
    inclusive: { title: "Apprentissage inclusif | Académie CODEship", description: "Environnement calme et souple pour les enfants neurodivergents et tous les apprenants." },
    schools: { title: "Programmes scolaires | Académie CODEship", description: "Apportez CODEship en classe avec des ateliers STEM alignés au curriculum." },
    franchising: { title: "Franchise | Académie CODEship", description: "Bâtissez l'avenir dans votre communauté avec un modèle éducatif à impact." },
    about: { title: "À propos | Académie CODEship", description: "Écosystème canadien de compétences d'avenir, inclusif et centré sur l'enfant." },
    contact: { title: "Contact | Académie CODEship", description: "Contactez CODEship pour les demandes parent, école, franchise, média et partenariat." },
    blog: { title: "Ressources | Académie CODEship", description: "Guides sur le codage jeunesse, la littératie numérique, l'IA et les initiatives STEM scolaires." }
  }
};
