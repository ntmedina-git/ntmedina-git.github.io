// All page copy lives here so the section components stay layout-only.

export const identity = {
  name: 'Natália Medina',
  roles: ['Senior Product Designer', 'Design Engineer'],
}

export type SocialLink = { label: string; href?: string }

export const social: SocialLink[] = [
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/ntmedina/' },
  { label: 'Github', href: 'https://github.com/ntmedina-git' },
  { label: 'hello@ntmedina.com' }, // plain text — no mailto link
]

// The three scroll-driven nav indicators (XL / L sidebar).
export const navSections = [
  { id: 'home', label: 'Hello' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
] as const

// Links shown in the M / S burger menu — only Work & About (no Home).
export const menuSections = navSections.filter((s) => s.id !== 'home')

export type NavSectionId = (typeof navSections)[number]['id']

export const hero = {
  // rendered with mixed emphasis — see Hero.tsx
  lead: "Hello, I'm ",
  name: 'Natália Medina',
  line2a: 'a brazilian Senior Product ',
  underline: 'designer',
  line2b: ' based in Rio.',
}

export const intro = [
  'With over 10 years of experience across ux strategy, research, design systems and interaction design, my work is driven by a deep interest in the relationship between art, technology and the design of meaningful digital experiences.',
  "I've always believed that art, science, and technology go hand in hand. Artists and scientists show us that we shouldn't limit ourselves to what's already possible, we work with hypotheses in a world of constant change and uncertainty, we envision something that doesn't exist yet.",
  'Curiosity and the desire to improve, even just a little, our own lives and the lives of others are my driving force and my greatest motivation as a designer, researcher, artist, and human being.',
]

export const selectedWork = [
  {
    logo: '/assets/arco.svg',
    logoAlt: 'Arco Educação',
    logoClass: 'h-8 w-[58px]',
    title: 'Content library',
    company: 'Arco Educação, 2025/2026',
    note: 'Redesign – Evolution',
  },
  {
    logo: '/assets/intelligent.svg',
    logoAlt: 'Arco Educação & OpenAI',
    logoClass: 'h-12 w-[197px]',
    title: 'Inteligent assistant',
    company: 'Arco Educação & Open AI, 2024',
    note: '0 > 1',
  },
  {
    logo: '/assets/itau.svg',
    logoAlt: 'Íon | Itaú',
    logoClass: 'h-8 w-[39px]',
    title: 'Íon | Itaú Investimentos',
    company: 'Work & Co, 2020/2021',
    note: '0 > 1',
  },
  {
    logo: '/assets/dotz.svg',
    logoAlt: 'Dotz',
    logoClass: 'h-[18px] w-[56px]',
    title: 'Conta Digital Dotz',
    company: 'Work & Co, 2021',
    note: '0 > 1',
  },
]

export const about = [
  'I started my career as an undergraduate researcher and have since spent the past decade helping companies design, launch, and scale digital products across different industries and contexts.',
  "Along the way, I've had the opportunity to collaborate with organizations and clients including Globo.com, VTEX, Work & Co, Itaú, Goldman Sachs, Dotz, Dafiti, GoFundMe, Steinway & Sons, TaDa | Zé Delivery and Arco Educação.",
]

export type ListRow = { title: string; subtitle: string; meta: string; href?: string }

export const experience: ListRow[] = [
  { title: 'Senior Product Designer', subtitle: 'Arco Educação', meta: '2023 – 2026' },
  { title: 'Senior Product Designer', subtitle: 'Work&Co', meta: '2020 – 2023' },
  { title: 'Product Designer', subtitle: 'VTEX', meta: '2017 – 2020' },
  { title: 'UX Designer', subtitle: 'Globo.com', meta: '2016 – 2017' },
  { title: 'UX Design Intern', subtitle: 'Globo.com', meta: '2015 – 2016' },
  { title: 'Undergraduate Researcher', subtitle: 'LabVis – UFRJ', meta: '2014 – 2015' },
  { title: 'Undergraduate Researcher', subtitle: 'Lab ACiMA – LNCC', meta: '2013' },
]

export const articles: ListRow[] = [
  {
    title: 'Arco Educação uses GPT‑4 to improve teaching and learning in Brazil',
    subtitle: 'Arco & Open AI',
    meta: '2025',
    href: 'https://openai.com/index/arco-education/',
  },
  {
    title: 'Papo de designer: observações de uma designer de produto digital',
    subtitle: 'UX Collective',
    meta: '2019',
    href: 'https://brasil.uxdesign.cc/papo-de-designer-observa%C3%A7%C3%B5es-de-uma-designer-de-produto-digital-7e2289dfe941',
  },
]

export const community: ListRow[] = [
  { title: 'Hacking Rio', subtitle: 'UX Mentor', meta: '2018' },
  {
    title: 'Designing for developers, developing for designers',
    subtitle: 'Speaker | Brazil JS Conference',
    meta: '2018',
  },
  { title: 'Shell Iniciativa Jovem', subtitle: 'UX Mentor', meta: '2018' },
  {
    title: 'Visualizando dados',
    subtitle: 'Speaker | 2º Meetup R Ladies Rio',
    meta: '2017',
    href: 'https://www.slideshare.net/slideshow/visualizando-dados-2-meetup-r-ladies-rio/80292380',
  },
  { title: '+ Mulheres em UX Rio', subtitle: 'Volunteer & member', meta: '2016' },
  { title: 'Rio Mozilla Club', subtitle: 'Volunteer', meta: '2016' },
]

export const education: ListRow[] = [
  { title: 'Graphic Design', subtitle: 'IBMR', meta: '2026 – Current' },
  { title: 'Design Visual Communication', subtitle: 'EBA – UFRJ', meta: '2013 – 2018' },
  {
    title: 'Information Technology',
    subtitle: 'Instituto Superior de Tecnologia, Petrópolis',
    meta: '2013 – 2013',
  },
]

export const footerText = "Feel free to send me a message, I'd love to connect."
