export const site = {
  name: "AllahCall",
  tagline: "Islamic Dawah & Education",
  description:
    "A platform dedicated to spreading authentic Islamic knowledge and connecting people with the message of Islam.",
  url: "https://allahcall.com",
  legalName: "AllahCall Institute",
  poweredBy: "Allah Call Education PK",
  ein: "EIN 86-2956026 · 501(c)",
  phone: { display: "+92 304 0496627", href: "tel:+923040496627" },
  email: { display: "allahcall786@gmail.com", href: "mailto:allahcall786@gmail.com" },
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/allah_call1" },
    { label: "YouTube", href: "https://youtube.com/@allahcall2421" },
    { label: "Facebook", href: "https://www.facebook.com/Allah.Call1" },
    { label: "Twitter", href: "https://www.twitter.com/Allah_call1" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/allah-call/" },
  ],
  // Formspree form that receives contact and volunteer submissions.
  // Owned by the allahcall786@gmail.com Formspree account; submissions are emailed there.
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "mrppaaza",
} as const;

export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = { label: string; href: string; links: NavLink[] };

export const nav: NavGroup[] = [
  {
    label: "About",
    href: "/about",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our work", href: "/our-work" },
      { label: "Board of Directors", href: "/board-of-directors" },
      { label: "Volunteers", href: "/volunteers" },
      { label: "Events", href: "/events" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    label: "Islam",
    href: "/islam",
    links: [
      { label: "Understanding Islam", href: "/islam" },
      { label: "Quran & Sunnah", href: "/quran-sunnah" },
      { label: "Dawah", href: "/dawah" },
      { label: "Islam & Marriage", href: "/marriage" },
    ],
  },
  {
    label: "Religions",
    href: "/religions",
    links: [
      { label: "World religions", href: "/religions" },
      { label: "Christianity", href: "/christianity" },
      { label: "Judaism", href: "/judaism" },
      { label: "Hinduism", href: "/hinduism" },
      { label: "Buddhism", href: "/buddhism" },
      { label: "Sikhism", href: "/sikhism" },
    ],
  },
  {
    label: "New Muslims",
    href: "/new-muslims",
    links: [
      { label: "Welcome to Islam", href: "/new-muslims" },
      { label: "Accept Islam now", href: "/accept-islam-now" },
      { label: "The Shahada", href: "/shahada" },
      { label: "New Muslim guidelines", href: "/new-muslim-guidelines" },
      { label: "Testimonies", href: "/testimonies-of-new-muslims" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    links: [
      { label: "All programs", href: "/programs" },
      { label: "Companionship", href: "/companionship" },
      { label: "Courses", href: "/courses" },
    ],
  },
  {
    label: "Services",
    href: "/our-services",
    links: [
      { label: "All services", href: "/our-services" },
      { label: "Articles & Books", href: "/articles-books" },
      { label: "Muslim Revival", href: "/muslim-revival" },
      { label: "Rejoining the Ummah", href: "/rejoining-muslim-ummah" },
      { label: "Publish your work", href: "/publish-your-work" },
    ],
  },
];
