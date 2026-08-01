import type { Locale } from "@/lib/i18n";

export interface BlogSection {
  heading: string;
  body: string[];
}

export interface BlogPost {
  slug: string;
  /** ISO date, used for sitemap lastmod and Article schema. */
  date: string;
  title: string;
  description: string;
  keywords: string[];
  readMinutes: number;
  /** Lead paragraph shown on the index card and at the top of the article. */
  intro: string;
  sections: BlogSection[];
  ctaHeading: string;
  ctaBody: string;
}

const en: BlogPost[] = [
  {
    slug: "coding-for-kids-canada",
    date: "2026-07-28",
    title: "Coding for Kids in Canada: A Parent's Guide to Getting Started",
    description:
      "How to choose coding classes for kids in Canada — what to look for by age, what your child actually learns, and how to tell a strong program from a weak one.",
    keywords: ["coding for kids Canada", "coding classes for kids", "learn to code for kids", "kids coding classes online"],
    readMinutes: 6,
    intro:
      "If your child is curious about how apps, games, and websites are made, coding is one of the most rewarding skills they can start early. But with so many programs available across Canada, it is hard to know where to begin. This guide breaks down what matters most so you can choose with confidence.",
    sections: [
      {
        heading: "Why coding is worth starting young",
        body: [
          "Coding is not really about memorising a programming language. For children, it is a way to practise problem-solving, break big challenges into small steps, and learn that a first attempt rarely works — and that is fine. Those habits carry over into math, science, reading, and everyday persistence.",
          "Starting young also removes the intimidation factor. A seven-year-old dragging blocks in Scratch is simply playing; by the time the syntax of a real language appears a few years later, the underlying logic already feels familiar.",
        ],
      },
      {
        heading: "What to expect at each age",
        body: [
          "Ages 4–6 work best with visual, block-based tools and lots of storytelling — think animated characters and simple cause-and-effect. The goal is sequencing and confidence, not typing.",
          "Ages 7–9 can build small web pages and games, learning that instructions run in order and that structure matters. Ages 9–11 are ready for text-based languages like JavaScript and Python and their first taste of how AI tools work. From about 11–14, learners can take on real app development and design projects they genuinely care about.",
        ],
      },
      {
        heading: "How to tell a strong program from a weak one",
        body: [
          "Look for small class sizes and a real instructor, not a video your child watches alone. Ask whether lessons are project-based — children stay engaged when they build something they can show a parent or friend.",
          "Check that the program groups children by age and stage, communicates progress to families, and is inclusive of different learning styles. A good provider will happily tell you what your child will make in the first few weeks.",
        ],
      },
    ],
    ctaHeading: "Find the right starting point",
    ctaBody:
      "CODEship Academy runs small, inclusive coding classes for ages 4–14, from first blocks of code to AI and app development. Compare programs and register for the semester in a couple of minutes.",
  },
  {
    slug: "stem-programs-for-schools-ontario",
    date: "2026-07-25",
    title: "Bringing STEM and Coding Programs to Ontario Schools",
    description:
      "A practical look at how schools and community centres can add curriculum-aligned coding and STEM programs — formats, planning, and what to ask a provider.",
    keywords: ["STEM programs for schools", "coding workshops for schools Ontario", "classroom coding program", "after-school coding club"],
    readMinutes: 5,
    intro:
      "Educators across Ontario are under pressure to build digital and future-ready skills without adding to already-full days. Partnering with an outside coding and STEM provider can fill that gap — if the fit is right. Here is how to think it through.",
    sections: [
      {
        heading: "Choosing a format that fits your schedule",
        body: [
          "Coding programs come in several shapes: in-class workshops that a teacher co-facilitates, full-day STEM events, and after-school clubs. In-class sessions integrate most tightly with the curriculum; after-school clubs reach motivated students without touching instructional time.",
          "The best choice depends on your goals. A one-off STEM day builds excitement; a recurring club builds real skill. Many schools start with a workshop and expand once they see engagement.",
        ],
      },
      {
        heading: "Curriculum alignment matters",
        body: [
          "A strong provider maps sessions to Ontario curriculum expectations rather than teaching in a vacuum. Ask how a program connects to what students are already learning in math and coding strands, and whether teachers receive support materials.",
          "Alignment also makes the program easier to justify to administrators and parents, and helps skills stick after the visit ends.",
        ],
      },
      {
        heading: "Questions to ask before you book",
        body: [
          "Who leads the sessions, and what is their experience with this age group? What safety, screening, and accessibility practices are in place? How are different learners supported in the same room?",
          "Finally, ask what students produce and how success is measured. Concrete answers are a good sign; vague ones are a red flag.",
        ],
      },
    ],
    ctaHeading: "Bring CODEship to your classroom",
    ctaBody:
      "CODEship Academy delivers curriculum-aligned coding and STEM workshops for schools, camps, and community centres across Ontario. Tell us about your group and we will design a fit.",
  },
  {
    slug: "coding-for-neurodiverse-children",
    date: "2026-07-20",
    title: "Coding for Neurodiverse Children: What Inclusive Classes Look Like",
    description:
      "How well-designed coding classes support neurodiverse and ADHD learners — pacing, environment, and the small choices that make a big difference.",
    keywords: ["coding for neurodiverse kids", "ADHD coding classes", "inclusive STEM programs", "autism friendly coding classes"],
    readMinutes: 6,
    intro:
      "Coding can be a wonderful fit for neurodiverse children — it rewards focus on things they love, offers clear feedback, and lets them work at their own pace. But the classroom around the coding matters just as much as the curriculum. Here is what inclusive design actually looks like.",
    sections: [
      {
        heading: "Environment first",
        body: [
          "Many neurodiverse learners do best in calm, predictable spaces with low sensory load and clear routines. Small group sizes reduce noise and give instructors room to adjust for each child.",
          "Predictability helps too: knowing what the session will cover, having a visible plan, and being able to take a short break lowers anxiety and keeps attention available for learning.",
        ],
      },
      {
        heading: "Flexible pacing and strengths-based teaching",
        body: [
          "A one-size pace leaves some children bored and others overwhelmed. Inclusive programs let learners move faster on strengths and take more time where needed, without making anyone feel singled out.",
          "Coding lends itself to this naturally — a child can go deep on the part of a project that fascinates them while still hitting the core learning goal.",
        ],
      },
      {
        heading: "What to ask a provider",
        body: [
          "Ask about student-to-instructor ratios, how instructors are trained to support different learners, and how they handle a child who needs a moment to reset. Ask whether goals can be adapted for your child.",
          "You are looking for a program that treats inclusion as part of the design, not an afterthought.",
        ],
      },
    ],
    ctaHeading: "Inclusive by design",
    ctaBody:
      "CODEship Academy builds neurodiverse-friendly classrooms with low ratios, calm pacing, and confidence-first teaching. Explore our inclusive learning approach or register your child today.",
  },
  {
    slug: "ai-classes-for-kids",
    date: "2026-07-15",
    title: "AI Classes for Kids: What They Should — and Shouldn't — Teach",
    description:
      "AI literacy is becoming a core future skill. Here is what age-appropriate AI education for kids looks like, and how to separate substance from hype.",
    keywords: ["AI classes for kids", "AI literacy for children", "coding for kids", "future skills for children"],
    readMinutes: 5,
    intro:
      "Artificial intelligence is now part of everyday life, and children will grow up using it as naturally as we use search engines. Good AI education is less about building models and more about understanding, using, and questioning these tools wisely.",
    sections: [
      {
        heading: "AI literacy, not just AI tools",
        body: [
          "The most valuable thing a child can learn is how AI systems make decisions from data, why they sometimes get things wrong, and how to check their output. This is AI literacy — a thinking skill that outlasts any single product.",
          "Programs that only teach children to type prompts miss the point. The goal is judgement: knowing when a tool helps, when to be skeptical, and how to stay in control.",
        ],
      },
      {
        heading: "Hands-on and age-appropriate",
        body: [
          "Younger children can explore how computers recognise patterns through playful activities. Older learners can connect AI to the coding they already do — building simple projects that use data, and discussing where the data comes from.",
          "Ethics belongs in the room from the start: fairness, privacy, and the idea that people are responsible for what technology does.",
        ],
      },
    ],
    ctaHeading: "Build real AI literacy",
    ctaBody:
      "CODEship Academy weaves AI learning foundations into our Developers and Engineers programs alongside JavaScript and Python. See how the pathways connect and register for the semester.",
  },
  {
    slug: "after-school-coding-programs",
    date: "2026-07-10",
    title: "Are After-School Coding Programs Worth It?",
    description:
      "What after-school coding clubs offer, how they differ from camps and one-off workshops, and how to know if the routine is right for your child.",
    keywords: ["after-school coding programs", "after-school coding club", "coding classes for kids", "kids coding classes online"],
    readMinutes: 4,
    intro:
      "After-school coding programs promise steady progress in a low-pressure setting. Whether they are worth it comes down to consistency, teaching quality, and how well the routine fits your family.",
    sections: [
      {
        heading: "The case for a regular routine",
        body: [
          "Skills like coding grow with repetition. A weekly session gives children time to build on last week's work, revisit ideas, and finish larger projects than a single workshop allows.",
          "The social side matters too — learning alongside the same small group each week builds collaboration and belonging.",
        ],
      },
      {
        heading: "Clubs vs. camps vs. workshops",
        body: [
          "Camps are intensive and great for a burst of momentum, often over a school break. One-off workshops spark interest. After-school clubs are the middle ground: ongoing skill-building without a huge time commitment.",
          "If your child has shown lasting interest, a recurring program usually delivers the most growth per dollar.",
        ],
      },
    ],
    ctaHeading: "A semester of steady progress",
    ctaBody:
      "CODEship Academy's semester programs give children a consistent weekly routine with a dedicated instructor and projects they keep. Register to reserve a spot.",
  },
  {
    slug: "digital-literacy-and-future-jobs",
    date: "2026-07-05",
    title: "Digital Literacy and the Jobs of the Future",
    description:
      "Why digital literacy is a core skill for every child — not just future programmers — and how coding builds it.",
    keywords: ["digital literacy for children", "future skills for children", "coding for kids", "STEM programs for kids"],
    readMinutes: 5,
    intro:
      "Not every child will become a software developer, and they do not need to. Digital literacy — the ability to understand, use, and create with technology responsibly — is becoming a baseline skill for almost every future career.",
    sections: [
      {
        heading: "More than knowing how to use a device",
        body: [
          "Being able to swipe and tap is not digital literacy. True literacy means understanding how digital tools work well enough to use them purposefully, evaluate what they produce, and create rather than only consume.",
          "Coding is one of the clearest ways to build this. When a child makes a program, they see technology as something they can shape, not just something that happens to them.",
        ],
      },
      {
        heading: "Skills that transfer everywhere",
        body: [
          "Breaking problems into steps, testing ideas, spotting patterns, and communicating clearly are valued in medicine, trades, business, the arts, and research alike. Coding practises all of them.",
          "The point is not to push every child toward a tech career, but to give each one the confidence and fluency to thrive in a digital world — whatever path they choose.",
        ],
      },
    ],
    ctaHeading: "Future-ready, whatever the path",
    ctaBody:
      "CODEship Academy focuses on future skills for every child, not just future coders. Explore our programs and register for the coming semester.",
  },
];

const fr: BlogPost[] = [
  {
    slug: "coding-for-kids-canada",
    date: "2026-07-28",
    title: "Le codage pour enfants au Canada : guide du parent pour bien commencer",
    description:
      "Comment choisir des cours de codage pour enfants au Canada — quoi rechercher selon l'âge, ce que votre enfant apprend vraiment, et comment reconnaître un bon programme.",
    keywords: ["codage pour enfants Canada", "cours de codage pour enfants", "cours de codage en ligne enfants"],
    readMinutes: 6,
    intro:
      "Si votre enfant se demande comment sont créés les applis, les jeux et les sites web, le codage est l'une des compétences les plus enrichissantes à commencer tôt. Mais avec autant de programmes offerts au Canada, difficile de savoir par où commencer. Ce guide résume l'essentiel pour choisir en confiance.",
    sections: [
      {
        heading: "Pourquoi commencer jeune",
        body: [
          "Le codage n'est pas qu'une question de mémoriser un langage. Pour un enfant, c'est une façon d'exercer la résolution de problèmes, de décomposer un grand défi en petites étapes et de comprendre qu'un premier essai réussit rarement — et que c'est normal. Ces habitudes servent en maths, en sciences, en lecture et au quotidien.",
          "Commencer jeune enlève aussi l'intimidation. Un enfant de sept ans qui glisse des blocs dans Scratch joue, tout simplement ; quand la syntaxe d'un vrai langage arrive quelques années plus tard, la logique est déjà familière.",
        ],
      },
      {
        heading: "À quoi s'attendre selon l'âge",
        body: [
          "De 4 à 6 ans, les outils visuels par blocs et la narration fonctionnent le mieux — personnages animés et cause à effet simple. L'objectif est le séquençage et la confiance, pas la frappe au clavier.",
          "De 7 à 9 ans, l'enfant construit de petites pages web et des jeux. De 9 à 11 ans, il est prêt pour des langages comme JavaScript et Python et une première initiation à l'IA. Dès 11–14 ans, il peut mener de vrais projets de développement et de conception qui le passionnent.",
        ],
      },
      {
        heading: "Reconnaître un bon programme",
        body: [
          "Privilégiez les petits groupes et un vrai enseignant, pas une vidéo que l'enfant regarde seul. Demandez si les leçons sont axées sur des projets — les enfants restent motivés quand ils construisent quelque chose à montrer.",
          "Vérifiez que le programme regroupe les enfants par âge et par niveau, communique les progrès aux familles et respecte différents styles d'apprentissage.",
        ],
      },
    ],
    ctaHeading: "Trouvez le bon point de départ",
    ctaBody:
      "CODEship Academy offre de petits cours de codage inclusifs pour les 4 à 14 ans, des premiers blocs de code jusqu'à l'IA et au développement d'applications. Comparez les programmes et inscrivez-vous en quelques minutes.",
  },
  {
    slug: "stem-programs-for-schools-ontario",
    date: "2026-07-25",
    title: "Apporter des programmes de codage et STEM aux écoles de l'Ontario",
    description:
      "Un regard pratique sur l'ajout de programmes de codage et STEM alignés au curriculum — formats, planification et questions à poser à un fournisseur.",
    keywords: ["programmes STEM écoles", "ateliers de codage écoles Ontario", "club de codage parascolaire"],
    readMinutes: 5,
    intro:
      "Partout en Ontario, les éducateurs doivent développer des compétences numériques sans alourdir des journées déjà pleines. S'associer à un fournisseur de codage et de STEM peut combler ce besoin — si le choix est bon. Voici comment y réfléchir.",
    sections: [
      {
        heading: "Choisir un format adapté à votre horaire",
        body: [
          "Les programmes prennent plusieurs formes : ateliers en classe coanimés, journées STEM complètes et clubs parascolaires. Les séances en classe s'intègrent le mieux au curriculum ; les clubs rejoignent les élèves motivés sans empiéter sur le temps d'enseignement.",
          "Le meilleur choix dépend de vos objectifs. Une journée STEM crée l'enthousiasme ; un club récurrent développe une réelle compétence.",
        ],
      },
      {
        heading: "L'alignement au curriculum compte",
        body: [
          "Un bon fournisseur relie ses séances aux attentes du curriculum de l'Ontario plutôt que d'enseigner en vase clos. Demandez comment le programme se connecte aux maths et au codage déjà enseignés, et si les enseignants reçoivent du matériel de soutien.",
          "L'alignement facilite aussi la justification auprès de la direction et des parents, et aide les compétences à perdurer.",
        ],
      },
      {
        heading: "Questions à poser avant de réserver",
        body: [
          "Qui anime les séances et quelle est son expérience avec ce groupe d'âge ? Quelles pratiques de sécurité, de vérification et d'accessibilité sont en place ? Comment soutient-on différents apprenants dans une même classe ?",
          "Enfin, demandez ce que les élèves produisent et comment le succès est mesuré. Des réponses concrètes sont bon signe.",
        ],
      },
    ],
    ctaHeading: "Apportez CODEship à votre classe",
    ctaBody:
      "CODEship Academy offre des ateliers de codage et STEM alignés au curriculum pour les écoles, camps et centres communautaires de l'Ontario. Parlez-nous de votre groupe.",
  },
  {
    slug: "coding-for-neurodiverse-children",
    date: "2026-07-20",
    title: "Le codage pour enfants neurodivergents : à quoi ressemble un cours inclusif",
    description:
      "Comment des cours de codage bien conçus soutiennent les apprenants neurodivergents et TDAH — rythme, environnement et petits choix qui font une grande différence.",
    keywords: ["codage enfants neurodivergents", "cours de codage TDAH", "programmes STEM inclusifs"],
    readMinutes: 6,
    intro:
      "Le codage peut très bien convenir aux enfants neurodivergents — il récompense la concentration sur ce qu'ils aiment, offre une rétroaction claire et permet d'avancer à son rythme. Mais la classe autour du codage compte autant que le contenu.",
    sections: [
      {
        heading: "L'environnement d'abord",
        body: [
          "Beaucoup d'apprenants neurodivergents s'épanouissent dans des espaces calmes et prévisibles, à faible charge sensorielle et avec des routines claires. Les petits groupes réduisent le bruit et donnent à l'enseignant la marge d'ajuster pour chaque enfant.",
          "La prévisibilité aide aussi : savoir ce que la séance couvrira, voir un plan visible et pouvoir prendre une courte pause réduit l'anxiété.",
        ],
      },
      {
        heading: "Rythme flexible et approche par les forces",
        body: [
          "Un rythme unique ennuie certains enfants et en submerge d'autres. Les programmes inclusifs laissent avancer plus vite sur les forces et prendre plus de temps au besoin, sans stigmatiser personne.",
          "Le codage s'y prête naturellement — un enfant peut approfondir la partie d'un projet qui le fascine tout en atteignant l'objectif d'apprentissage.",
        ],
      },
      {
        heading: "Quoi demander à un fournisseur",
        body: [
          "Renseignez-vous sur le ratio élève-enseignant, la formation des enseignants pour soutenir différents apprenants et la façon dont on aide un enfant qui a besoin d'une pause. Demandez si les objectifs peuvent être adaptés.",
          "Vous cherchez un programme où l'inclusion fait partie de la conception, pas d'un ajout après coup.",
        ],
      },
    ],
    ctaHeading: "Inclusif par conception",
    ctaBody:
      "CODEship Academy crée des classes adaptées aux neurodivergents, avec des ratios réduits, un rythme calme et une approche axée sur la confiance. Découvrez notre apprentissage inclusif ou inscrivez votre enfant.",
  },
  {
    slug: "ai-classes-for-kids",
    date: "2026-07-15",
    title: "Les cours d'IA pour enfants : ce qu'ils devraient — et ne devraient pas — enseigner",
    description:
      "La littératie en IA devient une compétence d'avenir essentielle. Voici à quoi ressemble une éducation à l'IA adaptée à l'âge, et comment distinguer le fond du battage.",
    keywords: ["cours d'IA pour enfants", "littératie IA enfants", "codage pour enfants"],
    readMinutes: 5,
    intro:
      "L'intelligence artificielle fait désormais partie du quotidien, et les enfants grandiront en l'utilisant aussi naturellement que nous utilisons les moteurs de recherche. Une bonne éducation à l'IA porte moins sur la création de modèles que sur la compréhension et l'usage réfléchi de ces outils.",
    sections: [
      {
        heading: "La littératie, pas seulement les outils",
        body: [
          "Le plus utile pour un enfant est de comprendre comment les systèmes d'IA décident à partir de données, pourquoi ils se trompent parfois et comment vérifier leurs résultats. C'est la littératie en IA — une compétence de pensée qui dépasse tout produit.",
          "Les programmes qui n'apprennent qu'à écrire des requêtes passent à côté. L'objectif est le jugement : savoir quand un outil aide et quand rester sceptique.",
        ],
      },
      {
        heading: "Concret et adapté à l'âge",
        body: [
          "Les plus jeunes peuvent explorer comment un ordinateur reconnaît des motifs par le jeu. Les plus grands relient l'IA au codage qu'ils font déjà — de petits projets utilisant des données, et une discussion sur leur provenance.",
          "L'éthique a sa place dès le départ : équité, vie privée et responsabilité humaine face à la technologie.",
        ],
      },
    ],
    ctaHeading: "Développez une vraie littératie en IA",
    ctaBody:
      "CODEship Academy intègre les bases de l'IA à ses programmes Développeurs et Ingénieurs, aux côtés de JavaScript et Python. Voyez comment les parcours se connectent et inscrivez-vous.",
  },
  {
    slug: "after-school-coding-programs",
    date: "2026-07-10",
    title: "Les programmes de codage parascolaires en valent-ils la peine ?",
    description:
      "Ce qu'offrent les clubs de codage parascolaires, en quoi ils diffèrent des camps et des ateliers ponctuels, et comment savoir si la routine convient à votre enfant.",
    keywords: ["programmes de codage parascolaires", "club de codage parascolaire", "cours de codage pour enfants"],
    readMinutes: 4,
    intro:
      "Les programmes de codage parascolaires promettent des progrès réguliers dans un cadre détendu. Leur valeur dépend de la constance, de la qualité de l'enseignement et de l'adéquation avec votre famille.",
    sections: [
      {
        heading: "L'avantage d'une routine régulière",
        body: [
          "Une compétence comme le codage grandit par la répétition. Une séance hebdomadaire laisse le temps de bâtir sur la semaine précédente et de terminer des projets plus ambitieux qu'un atelier unique.",
          "L'aspect social compte aussi — apprendre chaque semaine avec le même petit groupe développe la collaboration et le sentiment d'appartenance.",
        ],
      },
      {
        heading: "Clubs, camps ou ateliers",
        body: [
          "Les camps sont intensifs, parfaits pour un élan pendant une relâche. Les ateliers ponctuels éveillent l'intérêt. Les clubs parascolaires sont l'entre-deux : un développement continu sans engagement de temps énorme.",
          "Si votre enfant montre un intérêt durable, un programme récurrent offre souvent la meilleure progression.",
        ],
      },
    ],
    ctaHeading: "Un semestre de progrès constants",
    ctaBody:
      "Les programmes semestriels de CODEship Academy offrent une routine hebdomadaire constante avec un enseignant dédié et des projets que l'enfant conserve. Inscrivez-vous pour réserver une place.",
  },
  {
    slug: "digital-literacy-and-future-jobs",
    date: "2026-07-05",
    title: "La littératie numérique et les emplois de demain",
    description:
      "Pourquoi la littératie numérique est une compétence essentielle pour chaque enfant — pas seulement les futurs programmeurs — et comment le codage la développe.",
    keywords: ["littératie numérique enfants", "compétences d'avenir enfants", "codage pour enfants"],
    readMinutes: 5,
    intro:
      "Tous les enfants ne deviendront pas développeurs, et ce n'est pas nécessaire. La littératie numérique — comprendre, utiliser et créer avec la technologie de façon responsable — devient une compétence de base pour presque toutes les carrières.",
    sections: [
      {
        heading: "Plus que savoir utiliser un appareil",
        body: [
          "Savoir glisser et taper n'est pas de la littératie numérique. La vraie littératie, c'est comprendre assez bien les outils pour les utiliser avec intention, évaluer ce qu'ils produisent et créer plutôt que seulement consommer.",
          "Le codage est l'un des moyens les plus clairs d'y parvenir. En créant un programme, l'enfant voit la technologie comme quelque chose qu'il façonne.",
        ],
      },
      {
        heading: "Des compétences qui se transfèrent partout",
        body: [
          "Décomposer un problème, tester des idées, repérer des motifs et communiquer clairement sont valorisés en médecine, dans les métiers, en affaires, dans les arts et en recherche. Le codage exerce tout cela.",
          "Le but n'est pas de pousser chaque enfant vers une carrière techno, mais de lui donner la confiance et l'aisance pour s'épanouir dans un monde numérique, quel que soit son chemin.",
        ],
      },
    ],
    ctaHeading: "Prêt pour l'avenir, quel que soit le chemin",
    ctaBody:
      "CODEship Academy met l'accent sur les compétences d'avenir pour chaque enfant, pas seulement les futurs codeurs. Explorez nos programmes et inscrivez-vous pour le prochain semestre.",
  },
];

export const blogPosts: Record<Locale, BlogPost[]> = { en, fr };

/** Posts newest-first for the given locale. */
export function listPosts(locale: Locale): BlogPost[] {
  return [...blogPosts[locale]].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(locale: Locale, slug: string): BlogPost | undefined {
  return blogPosts[locale].find((p) => p.slug === slug);
}

/** Slugs are shared across locales — used for static params and sitemap. */
export const postSlugs: string[] = en.map((p) => p.slug);
