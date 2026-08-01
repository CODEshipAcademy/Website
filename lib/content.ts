import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

export type MetaCopy = { title: string; description: string };

export const SITE_URL = "https://codeshipacademy.com";

/**
 * Titles and descriptions are written for parent, transactional-intent search
 * ("coding classes for kids", "kids coding classes online", "STEM programs for
 * schools", "register / enroll"). Keep titles ≤ ~60 chars and descriptions
 * ≤ ~160 chars so they render in full on the SERP.
 */
export const metaByPage: Record<Locale, Record<string, MetaCopy>> = {
  en: {
    home: {
      title: "Kids Coding Classes in Canada | CODEship Academy",
      description:
        "Inclusive online coding classes for kids ages 4–14 — Scratch, Python & AI in small classes. Register for the semester from CAD $175. Save your child's spot.",
    },
    programs: {
      title: "Kids Coding Programs, Ages 4–14 | CODEship Academy",
      description:
        "Compare age-based coding programs for kids: Scratch, HTML/CSS, JavaScript, Python & AI. Small inclusive classes across Canada, from CAD $175 per semester.",
    },
    inclusive: {
      title: "Neurodiverse-Friendly Coding for Kids | CODEship",
      description:
        "Inclusive, ADHD-aware coding classes for neurodiverse kids. Low student ratios, calm classrooms, and confidence-first teaching. Enroll your child today.",
    },
    schools: {
      title: "Coding & STEM Programs for Schools | CODEship",
      description:
        "Bring curriculum-aligned coding and STEM workshops to your school or classroom — in-class, full-day, and after-school programs across Ontario. Book a session.",
    },
    franchising: {
      title: "Start a Kids Coding Franchise | CODEship Academy",
      description:
        "Launch a purpose-driven kids coding and STEM education franchise in your community. Curriculum, training, and marketing support included. Start the conversation.",
    },
    about: {
      title: "About CODEship Academy | Kids Coding in Canada",
      description:
        "CODEship Academy delivers inclusive, future-ready coding and AI education for kids across Canada. Learn about our mission, educators, and approach.",
    },
    contact: {
      title: "Contact CODEship Academy | Kids Coding Classes",
      description:
        "Questions about coding classes for your child, school programs, or franchising? Contact CODEship Academy — we reply to every family and partner inquiry.",
    },
    blog: {
      title: "Kids Coding & STEM Resources for Parents | CODEship",
      description:
        "Guides on coding for kids, digital literacy, AI classes, and after-school STEM in Canada — practical, evidence-led advice for parents and educators.",
    },
  },
  fr: {
    home: {
      title: "Cours de codage pour enfants au Canada | CODEship",
      description:
        "Cours de codage inclusifs en ligne pour enfants de 4 à 14 ans — Scratch, Python et IA en petits groupes. Inscrivez votre enfant dès 175 $ CA le semestre.",
    },
    programs: {
      title: "Programmes de codage enfants 4–14 ans | CODEship",
      description:
        "Comparez nos programmes de codage par âge : Scratch, HTML/CSS, JavaScript, Python et IA. Petits groupes inclusifs partout au Canada, dès 175 $ CA le semestre.",
    },
    inclusive: {
      title: "Codage inclusif pour enfants neurodivergents | CODEship",
      description:
        "Cours de codage inclusifs et adaptés au TDAH pour enfants neurodivergents. Ratios réduits, classes calmes, approche axée sur la confiance. Inscrivez-vous.",
    },
    schools: {
      title: "Programmes de codage et STEM pour écoles | CODEship",
      description:
        "Apportez des ateliers de codage et STEM alignés au curriculum à votre école — en classe, journée complète et parascolaire en Ontario. Réservez une séance.",
    },
    franchising: {
      title: "Lancez une franchise de codage jeunesse | CODEship",
      description:
        "Lancez une franchise éducative de codage et STEM à impact dans votre communauté. Curriculum, formation et soutien marketing inclus. Démarrez la discussion.",
    },
    about: {
      title: "À propos de CODEship Academy | Codage jeunesse",
      description:
        "CODEship Academy offre une éducation inclusive au codage et à l'IA pour les enfants du Canada. Découvrez notre mission, nos éducateurs et notre approche.",
    },
    contact: {
      title: "Contactez CODEship Academy | Codage pour enfants",
      description:
        "Des questions sur les cours de codage, les programmes scolaires ou la franchise ? Contactez CODEship Academy — nous répondons à chaque demande.",
    },
    blog: {
      title: "Ressources codage et STEM pour parents | CODEship",
      description:
        "Guides sur le codage jeunesse, la littératie numérique, les cours d'IA et le STEM parascolaire au Canada — conseils pratiques pour parents et éducateurs.",
    },
  },
};

/** Transactional-intent keyword clusters per page (en/fr). */
export const keywordsByPage: Record<Locale, Record<string, string[]>> = {
  en: {
    home: ["coding classes for kids", "kids coding classes online", "coding for kids Canada", "learn to code for kids", "STEM programs for kids", "kids coding classes near me"],
    programs: ["kids coding programs", "Scratch coding for kids", "Python for kids", "JavaScript for kids", "AI classes for kids", "coding camp for kids"],
    inclusive: ["coding for neurodiverse kids", "ADHD coding classes", "inclusive STEM programs", "autism friendly coding classes"],
    schools: ["STEM programs for schools", "coding workshops for schools Ontario", "after-school coding club", "classroom coding program"],
    franchising: ["kids coding franchise", "STEM education franchise Canada", "education franchise opportunity"],
    about: ["CODEship Academy", "kids coding Canada", "future skills for children"],
    contact: ["contact kids coding classes", "enroll child in coding", "coding classes inquiry"],
    blog: ["coding for kids", "digital literacy for children", "AI classes for kids", "after-school STEM Canada"],
  },
  fr: {
    home: ["cours de codage pour enfants", "cours de codage en ligne enfants", "codage pour enfants Canada", "programmes STEM enfants"],
    programs: ["programmes de codage enfants", "Scratch pour enfants", "Python pour enfants", "cours d'IA pour enfants", "camp de codage enfants"],
    inclusive: ["codage enfants neurodivergents", "cours de codage TDAH", "programmes STEM inclusifs"],
    schools: ["programmes STEM écoles", "ateliers de codage écoles Ontario", "club de codage parascolaire"],
    franchising: ["franchise codage jeunesse", "franchise éducative STEM Canada"],
    about: ["CODEship Academy", "codage jeunesse Canada"],
    contact: ["contact cours de codage", "inscrire enfant codage"],
    blog: ["codage pour enfants", "littératie numérique enfants", "cours d'IA enfants"],
  },
};

const OG_IMAGE = "/codeship-logo.png";

/**
 * Builds page Metadata with keyword-rich title/description, hreflang alternates
 * (en/fr + x-default), canonical URL, keywords, and Open Graph/Twitter cards.
 */
export function pageMetadata(locale: Locale, page: string, path: string): Metadata {
  const copy = metaByPage[locale][page];
  const keywords = keywordsByPage[locale]?.[page];
  return {
    title: copy.title,
    description: copy.description,
    keywords,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        en: `/en${path}`,
        fr: `/fr${path}`,
        "x-default": `/en${path}`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_CA" : "en_CA",
      url: `${SITE_URL}/${locale}${path}`,
      siteName: "CODEship Academy",
      title: copy.title,
      description: copy.description,
      images: [{ url: OG_IMAGE, width: 512, height: 512, alt: "CODEship Academy" }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [OG_IMAGE],
    },
  };
}
