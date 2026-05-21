// Program data for Programs pages
export const PROGRAMS = [
  {
    id: 'explorers',
    slug: 'explorers',
    name: 'Explorers',
    ageRange: '6–7 years',
    description:
      'Introduction to computational thinking and basic coding concepts through interactive, play-based learning.',
    learningOutcomes: [
      'Understand basic programming concepts',
      'Develop problem-solving skills',
      'Learn sequencing and logic',
      'Build confidence with technology',
      'Collaborate with peers',
    ],
    technologies: ['Scratch Jr', 'Visual coding blocks', 'Robotics basics'],
    projects: ['Design a simple game', 'Create an animated story', 'Build a robot guide'],
    skills: ['Computational thinking', 'Collaboration', 'Creativity', 'Digital literacy'],
    curriculumAlignment: ['Ontario Curriculum: Technology', 'STEM foundations'],
    color: '#3F51B5',
  },
  {
    id: 'builders',
    slug: 'builders',
    name: 'Builders',
    ageRange: '8–9 years',
    description:
      'Deepen coding skills with Scratch, explore web basics, and learn through real project-based learning.',
    learningOutcomes: [
      'Master Scratch programming',
      'Understand HTML & CSS basics',
      'Design and prototype digital projects',
      'Work in teams on larger projects',
      'Debug code independently',
    ],
    technologies: ['Scratch', 'HTML', 'CSS', 'Basic design tools'],
    projects: ['Build an interactive game', 'Create a personal web page', 'Design a digital art project'],
    skills: ['Web development basics', 'Project planning', 'Critical thinking', 'Communication'],
    curriculumAlignment: ['Ontario Curriculum: Technology & Science', 'Digital literacy'],
    color: '#FFD740',
  },
  {
    id: 'developers',
    slug: 'developers',
    name: 'Developers',
    ageRange: '10–12 years',
    description: 'Transition to real programming languages. Learn JavaScript, app development, and AI fundamentals.',
    learningOutcomes: [
      'Write Python and JavaScript code',
      'Develop full web applications',
      'Understand AI and machine learning basics',
      'Lead peer collaboration',
      'Present technical projects',
    ],
    technologies: ['JavaScript', 'Python', 'HTML/CSS', 'APIs', 'AI/ML intro'],
    projects: [
      'Build a web app with database',
      'Create an AI chatbot',
      'Develop a mobile-friendly application',
    ],
    skills: ['Advanced programming', 'Systems thinking', 'Technical presentation', 'Problem solving'],
    curriculumAlignment: ['Ontario Curriculum: Grade 5-6 Technology & CS', 'Industry-aligned'],
    color: '#2E3246',
  },
  {
    id: 'engineers',
    slug: 'engineers',
    name: 'Engineers',
    ageRange: '13–16 years',
    description:
      'Advanced programming, app development, AI, and emerging technologies. Prepare for post-secondary STEM.',
    learningOutcomes: [
      'Master multiple programming languages',
      'Build sophisticated applications',
      'Understand AI, machine learning, cybersecurity',
      'Lead innovation projects',
      'Explore career pathways in tech',
    ],
    technologies: [
      'Python',
      'JavaScript/React',
      'App development frameworks',
      'AI/ML tools',
      'Cloud platforms',
    ],
    projects: [
      'Full-stack web application',
      'Machine learning model',
      'Mobile app development',
      'Capstone innovation project',
    ],
    skills: [
      'Advanced full-stack development',
      'Systems architecture',
      'Team leadership',
      'Innovation mindset',
    ],
    curriculumAlignment: ['Ontario Curriculum: Grades 7-10 CS & STEM', 'Post-secondary preparation'],
    color: '#3F51B5',
  },
] as const;

// Navigation data
export const NAV_MAIN = [
  { label: 'Home', href: '/' },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'Explorers (6–7)', href: '/programs/explorers' },
      { label: 'Builders (8–9)', href: '/programs/builders' },
      { label: 'Developers (10–12)', href: '/programs/developers' },
      { label: 'Engineers (13–16)', href: '/programs/engineers' },
    ],
  },
  { label: 'Inclusive Learning', href: '/inclusive-learning' },
  { label: 'School Programs', href: '/schools' },
  { label: 'Franchising', href: '/franchise' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
] as const;

export const NAV_LEGAL = [
  { label: 'Privacy Policy', href: '/legal/privacy' },
  { label: 'Terms of Use', href: '/legal/terms' },
  { label: 'Cookie Policy', href: '/legal/cookies' },
  { label: 'Accessibility Statement', href: '/legal/accessibility' },
] as const;

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/company/codeshipacademy' },
  { label: 'Twitter', icon: 'twitter', href: 'https://twitter.com/CODEshipAcademy' },
  { label: 'Instagram', icon: 'instagram', href: 'https://instagram.com/codeshipacademy' },
  { label: 'Facebook', icon: 'facebook', href: 'https://facebook.com/codeshipacademy' },
] as const;
