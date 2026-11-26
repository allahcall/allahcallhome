import type { Page } from "../types";
import { whatsappLink } from "@/lib/site";

const title = "Hikmah Complete Quran Tafsir Program";
const enrollment = {
  label: "Join the course",
  href: whatsappLink(`Assalamu alaikum, I would like to join the Hikmah Complete Quran Tafsir Program.`),
};

export const hikmahTafseer = {
  slug: "hikmah-tafseer-program",
  title,
  description:
    "A guided introduction to tafsir taking students through all 30 Juz of the Quran, passage by passage, taught live online by Shiza Fatima, Aalimah and founder of Hikmah Quran Academy.",
  hero: {
    label: "Live online · Female teacher · Urdu",
    title,
    lede: "Course instructor: Shiza Fatima, Aalimah and founder of Hikmah Quran Academy",
    poster: {
      src: "/images/courses/hikmah-tafseer-poster.webp",
      alt: "Hikmah Complete Quran Tafsir Program poster by Hikmah Quran Academy",
    },
    overview: [
      "The Hikmah Complete Quran Tafsir Program takes students through all 30 Juz of the Quran, passage by passage, so that they can understand what they recite and carry it into daily life.",
      "It is a guided introduction to tafsir, not a word by word academic study, and it welcomes beginners as well as students who already know a little.",
      "Taught by Shiza Fatima, an Aalimah and the founder of Hikmah Quran Academy, in a safe and caring online space for girls, teenagers and ladies.",
    ],
    action: enrollment,
  },
  blocks: [
    {
      type: "columns",
      cols: 3,
      items: [
        { title: "Format", body: "Live online classes, taught in Urdu." },
        { title: "Duration", body: "26 weeks (about 6 months)." },
        { title: "Schedule", body: "4 classes a week, 60 minutes each (104 classes in all)." },
      ],
    },
    {
      type: "columns",
      cols: 3,
      items: [
        { title: "Coverage", body: "All 30 Juz, passage by passage." },
        { title: "Levels", body: "Foundation (for everyone) and Deeper Insight (for those ready)." },
        { title: "Practice", body: "20 to 30 minutes of daily homework." },
      ],
    },
    {
      type: "columns",
      cols: 2,
      title: "What you will receive",
      items: [
        { title: "Live classes", body: "Four live online classes every week with a female teacher." },
        { title: "Small batches", body: "Seats in each batch are limited, so every student is heard." },
        { title: "Tafsir in Urdu", body: "The whole Quran, passage by passage, explained simply and clearly." },
        { title: "Two levels", body: "Foundation for everyone, and Deeper Insight for those who are ready." },
        { title: "Daily practice", body: "A short daily practice, with a weekly quiz and a monthly written progress note." },
        { title: "Certificate", body: "A completion certificate at the end of the programme." },
      ],
    },
    {
      type: "columns",
      cols: 3,
      title: "Course details",
      items: [
        { title: "Study material", body: "Shared upon onboarding." },
        { title: "Assessment", body: "Weekly quiz, monthly written feedback, final assessment, completion certificate." },
        { title: "Who it is for", body: "Girls, teenagers and ladies." },
        { title: "Batches", body: "Small batches, seats in each batch are limited." },
        { title: "Course fee", body: "PKR 4,000 per month (PKR 24,000 for the 6-month programme). USD 18 per month for international students (USD 108 for the 6-month programme)." },
      ],
    },
    {
      type: "prose",
      title: "How to join",
      body: [
        "Message us on WhatsApp and our team will guide you on the batch timing and the next steps, in sha Allah.",
      ],
      action: enrollment,
    },
    {
      type: "cta",
      title: "Ready to begin?",
      actions: [enrollment],
    },
  ],
} satisfies Page;
