import type { Page } from "../types";

export const legalPages: Page[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    description:
      "How AllahCall handles the information you share through our contact, volunteer and event update forms, and what our hosting and analytics collect.",
    hero: {
      label: "Legal",
      title: "Privacy policy",
      lede: "How AllahCall handles the information you share with us. Last updated 1 November 2026.",
    },
    blocks: [
      {
        type: "prose",
        label: "Who we are",
        title: "AllahCall Institute",
        body: [
          "This website is run by AllahCall Institute (EIN 86-2956026). If you have any question about this policy or your information, email allahcall786@gmail.com.",
        ],
      },
      {
        type: "prose",
        label: "What we collect",
        title: "Only what you choose to send",
        body: [
          "Contact form: your name, email address, the topic you pick and your message.",
          "Volunteer form: your name, email address, phone number if you give one, the role you are interested in and your message.",
          "Event updates: your email address, and your name if you give one.",
          "You do not need an account to use this site, and we do not set our own cookies.",
        ],
      },
      {
        type: "prose",
        label: "Who processes it",
        title: "The services behind this site",
        body: [
          "Formspree receives form submissions, emails them to our team and stores them on our behalf.",
          "Vercel hosts the website. Like any web host, it processes technical data such as IP addresses to deliver pages and protect the site from abuse.",
          "Vercel Web Analytics counts page views so we can see which pages are useful. It does not use cookies and does not build a profile of you.",
        ],
      },
      {
        type: "prose",
        label: "How we use it",
        title: "To help you, and nothing else",
        body: [
          "We use what you send to reply to you, to arrange volunteering, and to send the event updates you asked for.",
          "We never sell your information or use it for advertising.",
        ],
      },
      {
        type: "prose",
        label: "How long we keep it",
        title: "No longer than we need it",
        body: [
          "We keep messages for as long as we need them to respond and follow up. We keep your email on the event updates list until you ask us to remove it.",
        ],
      },
      {
        type: "prose",
        label: "Your choices",
        title: "See, correct or delete your information",
        body: [
          "Email allahcall786@gmail.com to ask what we hold about you, to correct it, or to have it deleted, and we will do so.",
          "If we change this policy, we will update it on this page and change the date at the top.",
        ],
      },
    ],
  },
];
