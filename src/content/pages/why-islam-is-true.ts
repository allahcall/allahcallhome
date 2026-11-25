import type { Page } from "../types";
import { whatsappLink } from "@/lib/site";

const title = "Why Islam Is True";
const enrollment = {
  label: "Join the crash course",
  href: whatsappLink(`Assalamu alaikum, I would like to join the Why Islam Is True crash course.`),
};

export const whyIslamIsTrue = {
  slug: "why-islam-is-true",
  title,
  description: "A one hour recorded crash course with Maulana Engineer Muhammad Harris Suhaib on the reasons Muslims believe Islam is true, available on demand.",
  hero: {
    label: "Recorded · Available on demand · One hour",
    title,
    lede: "Course instructor: Maulana Engineer Muhammad Harris Suhaib",
    poster: {
      src: "/images/courses/why-islam-is-true-poster.webp",
      alt: "Why Islam Is True course poster featuring Maulana Engineer Muhammad Harris Suhaib",
    },
    overview: [
      "Why Islam Is True is a one hour recorded crash course for anyone who wants a clear and thoughtful introduction to the reasons Muslims believe Islam is true. It brings together the central questions, provides a structured starting point, and helps learners continue their study with greater confidence and direction.",
      "The course is designed for people exploring Islam, Muslims strengthening their understanding, and anyone seeking a concise response to the question of why Islam is true. You can watch the recording at a time that suits you and revisit the material whenever you wish.",
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
          body: "One hour recorded crash course. A focused introduction that presents the central question and prepares you for deeper learning.",
        },
        {
          title: "Access",
          body: "Available on demand. Study at your own pace, return to key points, and use the recording as a foundation for further reflection.",
        },
        {
          title: "Course fee",
          body: "PKR 2,000 or USD 20.",
        },
      ],
    },
    {
      type: "columns",
      cols: 2,
      title: "What you will receive",
      items: [
        {
          title: "Question space",
          body: "Ask questions at any time through the course question space and continue the conversation as you study.",
        },
        {
          title: "Learning community",
          body: "Join a community of learners who are studying, reflecting, and progressing together.",
        },
        {
          title: "Pathway to deeper study",
          body: "Use this crash course as the first step toward the complete Why Islam Is True programme, with more than 40 hours of guided learning.",
        },
      ],
    },
    {
      type: "prose",
      title: "Course experience",
      body: [
        "The recording gives you a practical entry point into a much larger conversation. It is concise enough to complete in one sitting while offering a meaningful framework for your next steps.",
        "As you work through the course, you can submit questions and take part in the learner community so that your study remains connected and supported.",
      ],
    },
    {
      type: "prose",
      title: "The complete programme",
      body: [
        "Why Islam Is True is the introduction to a forthcoming comprehensive course of more than 40 hours. The full programme will explore the subject in greater depth, allowing learners to develop a fuller understanding over time.",
        "This crash course helps you begin that journey with clarity.",
      ],
    },
    {
      type: "columns",
      cols: 2,
      title: "Related course",
      items: [
        {
          title: "Modern Ideologies and Islam",
          body: "Explore modern ideas and ideologies through an Islamic lens in this complementary course.",
          href: "/modern-ideologies-and-islam",
        },
        {
          title: "Course details",
          body: "Question support: Ask questions at any time through the course question space · Community: Participation in a learner community · Next step: A foundation for the 40 plus hour complete Why Islam Is True programme.",
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
