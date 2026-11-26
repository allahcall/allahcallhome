import type { Page } from "../types";
import { whatsappLink } from "@/lib/site";

const title = "Noorani Qaida and Nazra with Tajweed";
const enrollment = {
  label: "Join the course",
  href: whatsappLink(`Assalamu alaikum, I would like to join the Noorani Qaida and Nazra with Tajweed course.`),
};

export const qaidaNazra = {
  slug: "noorani-qaida-nazra",
  title,
  description:
    "Live online classes in small batches, 5 days a week, 30 minutes per class, for girls, ladies and little kids to learn to read the Quran correctly from the very first letter to fluent recitation.",
  hero: {
    label: "Live online · Female teacher · Urdu",
    title,
    lede: "Course: Noorani Qaida and Nazra with Tajweed",
    poster: {
      src: "/images/courses/hikmah-qaida-nazra.png",
      alt: "Noorani Qaida and Nazra with Tajweed course poster",
    },
    overview: [
      "Learn to read the Quran correctly, from the very first letter to fluent recitation, with Tajweed.",
      "Live online classes in small batches so every student is heard.",
      "5 days a week, 30 minutes per class. For girls, ladies and little kids (little boys are welcome too).",
    ],
    action: enrollment,
  },
  blocks: [
    {
      type: "columns",
      cols: 3,
      items: [
        { title: "Format", body: "Live online classes." },
        { title: "Schedule", body: "5 days a week, 30 minutes per class." },
        { title: "Who it is for", body: "Girls, ladies and little kids (little boys are welcome too)." },
      ],
    },
    {
      type: "columns",
      cols: 3,
      title: "Course details",
      items: [
        { title: "Batches", body: "Small batches, seats in each batch are limited." },
        { title: "Course fee", body: "PKR 3,000 per month. USD 11 per month for international students." },
        { title: "How to join", body: "Message us on WhatsApp and our team will guide you on the batch timing and the next steps, in sha Allah." },
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
