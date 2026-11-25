import type { Page } from "../types";
import { whatsappLink } from "@/lib/site";

const title = "Holy Quran Translation and Practical Implementation";
const enrollment = {
  label: "Join the course",
  href: whatsappLink(`Assalamu alaikum, I would like to join the Holy Quran Translation and Practical Implementation course.`),
};

export const holyQuran = {
  slug: "holy-quran-translation-and-practical-implementation",
  title,
  description: "Study the Holy Quran one-on-one, live on Zoom, with Maulana Engineer Muhammad Harris Suhaib — translation, reflection, and practical application tailored to your pace.",
  hero: {
    label: "Live on Zoom · One-on-one · Tailored schedule",
    title,
    lede: "Course instructor: Maulana Engineer Muhammad Harris Suhaib",
    poster: {
      src: "/images/courses/holy-quran-translation-poster.webp",
      alt: "Holy Quran Translation and Practical Implementation course poster featuring Maulana Engineer Muhammad Harris Suhaib",
    },
    overview: [
      "Study the Holy Quran one-on-one, live on Zoom. The course aims to give you a comprehensive understanding of the Quran through translation, reflection and practical application.",
      "Read a passage with your instructor, ask about an unfamiliar word, and explore how the surrounding verses help explain its meaning. Maulana Engineer Muhammad Harris Suhaib teaches each lesson personally and gives you individual attention and time for questions.",
      "You can tailor the pace and focus to your needs. Together, you and your instructor can agree on daily lessons, weekend sessions, or another schedule that suits you both.",
    ],
    action: enrollment,
  },
  blocks: [
    {
      type: "columns",
      cols: 3,
      items: [
        {
          title: "Format",
          body: "One-on-one study, live on Zoom.",
        },
        {
          title: "Instructor",
          body: "Maulana Engineer Muhammad Harris Suhaib teaches each lesson personally.",
        },
        {
          title: "Schedule",
          body: "Daily lessons, weekend sessions, or a schedule that suits you both.",
        },
      ],
    },
    {
      type: "columns",
      cols: 2,
      title: "What you will do",
      items: [
        {
          title: "Read with translation",
          body: "Read a passage with your instructor and study its translation word by word.",
        },
        {
          title: "Ask questions",
          body: "Ask about any unfamiliar word and explore how surrounding verses explain its meaning.",
        },
        {
          title: "Practical application",
          body: "Reflect on how the Quran’s guidance applies to your daily life and circumstances.",
        },
      ],
    },
    {
      type: "prose",
      title: "Individual attention",
      body: [
        "Maulana Engineer Muhammad Harris Suhaib teaches each lesson personally and gives you individual attention and time for questions.",
        "You can tailor the pace and focus to your needs.",
      ],
    },
    {
      type: "columns",
      cols: 2,
      title: "Relevant courses",
      items: [
        {
          title: "Why Islam Is True",
          body: "A one hour recorded crash course on the reasons Muslims believe Islam is true, taught by Maulana Engineer Muhammad Harris Suhaib.",
          href: "/why-islam-is-true",
        },
        {
          title: "Modern Ideologies and Islam",
          body: "Explore modern ideas and ideologies through an Islamic lens in this complementary course.",
          href: "/modern-ideologies-and-islam",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready to begin?",
      actions: [enrollment],
    },
  ],
} satisfies Page;
