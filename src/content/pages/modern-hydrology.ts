import type { Page } from "../types";
import { whatsappLink } from "@/lib/site";

const title = "Modern Hydrology and Islam";
const enrollment = {
  label: "Ask about enrollment on WhatsApp",
  href: whatsappLink(`Assalamu alaikum, I am looking for more information regarding the course Modern Hydrology and Islam.`),
};

export const modernHydrology = {
  slug: "modern-hydrology-and-islam",
  title,
  description: "Explore modern water science and hydrology through an Islamic lens, examining creation, stewardship, and the ethical use of water resources.",
  hero: {
    label: "Coming soon · Live on Zoom · Recordings provided",
    title,
    lede: "Course instructor: Maulana Engineer Muhammad Harris Suhaib",
    poster: {
      src: "/images/courses/modern-hydrology-and-islam-poster.webp",
      alt: "Modern Hydrology and Islam course poster",
    },
  },
  blocks: [
    {
      type: "prose",
      title: "Course overview",
      action: enrollment,
      body: [
        "Water is central to life and to Islamic teaching. This course introduces modern hydrology — the science of water movement, distribution, and management — and examines it alongside Islamic principles of creation, stewardship (khilafah), and the rights of water.",
        "You will study the hydrological cycle, water sources, irrigation, floods and drought, and modern water infrastructure, and reflect on how Islamic jurisprudence and ethics approach the use, conservation, and sharing of water.",
      ],
    },
    {
      type: "columns",
      cols: 3,
      items: [
        {
          title: "Who the course is for",
          body: "This course is for students of Islamic studies, environmental science, engineering, and anyone interested in understanding water from both a scientific and an Islamic perspective.",
        },
        {
          title: "Live lectures and recordings",
          body: "Maulana Engineer Muhammad Harris Suhaib will teach the lectures live on Zoom. Recordings will be provided so enrolled students can catch up or revisit topics at their own pace.",
        },
        {
          title: "Enrollment and course details",
          body: "Coming soon. Check back here for the start date, course duration, class schedule and time zone, teaching language, fees and registration details.",
        },
      ],
    },
    {
      type: "columns",
      cols: 2,
      title: "What you will study",
      lede: "These themes describe the proposed syllabus. The order and depth of topics may vary as the lectures develop.",
      items: [
        {
          title: "Water in the Quran and Sunnah",
          body: "Examine Quranic verses and prophetic teachings on rain, rivers, seas, wells, and the creation of all living things from water.",
        },
        {
          title: "The hydrological cycle",
          body: "Study evaporation, condensation, precipitation, infiltration, runoff, and groundwater flow as understood in modern hydrology.",
        },
        {
          title: "Water sources and distribution",
          body: "Explore surface water, groundwater, springs, and the geographical distribution of freshwater resources.",
        },
        {
          title: "Islamic water law and ethics",
          body: "Consider rules on water ownership, sharing, wastage (israf), and the prohibition of hoarding water, and their relevance to modern water management.",
        },
        {
          title: "Irrigation and agriculture",
          body: "Study traditional and modern irrigation methods, and the Islamic principles governing agricultural water use.",
        },
        {
          title: "Water scarcity and conservation",
          body: "Examine drought, water scarcity, conservation strategies, and the Islamic responsibility to preserve resources for future generations.",
        },
      ],
    },
    {
      type: "points",
      title: "Course learning outcomes",
      lede: "By the end of the lectures, you should be able to:",
      items: [
        "Explain the hydrological cycle and the main processes that govern water movement and distribution.",
        "Describe the main sources of freshwater and the factors that affect their availability.",
        "Discuss Islamic teachings on water, including stewardship, conservation, and fair distribution.",
        "Compare modern hydrological approaches with Islamic principles of water ethics and jurisprudence.",
        "Identify practical steps for conserving water in personal, agricultural, and community contexts.",
      ],
    },
    {
      type: "cta",
      title: "Interested in enrolling?",
      actions: [enrollment],
    },
  ],
} satisfies Page;
