import type { Page } from "../types";

export const islamPages: Page[] = [
  {
    slug: "islam",
    title: "Understanding Islam",
    description:
      "Islam is a complete way of life that guides humanity in all aspects of existence. Learn about its sources, its practices and its core beliefs.",
    hero: {
      label: "Islam",
      title: "Understanding Islam",
      lede: "Islam is a complete way of life that guides humanity in all aspects of existence. It provides a comprehensive framework for spiritual, social, and personal development.",
      image: { src: "photo-1587617425953-9075d28b8c46", alt: "Interior of a mosque" },
    },
    blocks: [
      {
        type: "cards",
        label: "Explore",
        title: "Welcome to Islam",
        cols: 3,
        items: [
          {
            title: "Quran & Sunnah",
            body: "The primary sources of Islamic guidance and knowledge.",
            href: "/quran-sunnah",
            image: { src: "/images/quran.webp", alt: "A copy of the Quran" },
          },
          {
            title: "Dawah",
            body: "Inviting others to the message of Islam with wisdom.",
            href: "/dawah",
            image: { src: "photo-1627818653012-054f17eb0648", alt: "Worshippers in a mosque" },
          },
          {
            title: "Islam & Marriage",
            body: "Understanding marriage in Islam and family values.",
            href: "/marriage",
            image: { src: "/images/marriage.webp", alt: "Marriage in Islam" },
          },
        ],
      },
      {
        type: "cards",
        label: "Foundations",
        title: "The foundations of faith",
        cols: 3,
        tone: "alt",
        items: [
          {
            title: "The Five Pillars of Islam",
            body: "Learn about the fundamental practices that form the foundation of a Muslim's faith and worship.",
            image: { src: "photo-1744264362119-bd94511b0597", alt: "The Five Pillars of Islam" },
          },
          {
            title: "The Six Articles of Faith",
            body: "Understand the core beliefs that every Muslim must hold in their heart.",
            image: { src: "photo-1579305796288-c534f6cf17ab", alt: "The Six Articles of Faith" },
          },
          {
            title: "The Life of Prophet Muhammad (PBUH)",
            body: "Explore the life and teachings of the final Messenger of Allah.",
            image: { src: "photo-1692977579997-948328cdb7d2", alt: "The Life of Prophet Muhammad (PBUH)" },
          },
        ],
      },
      {
        type: "faq",
        label: "Questions",
        title: "Frequently asked questions",
        items: [
          {
            q: "What is Islam?",
            a: "Islam is a monotheistic religion that teaches the worship of one God (Allah) and follows the teachings of Prophet Muhammad (peace be upon him). It emphasizes peace, mercy, and justice.",
          },
          {
            q: "Who are Muslims?",
            a: "Muslims are followers of Islam who believe in one God and strive to live according to Islamic teachings. There are over 1.8 billion Muslims worldwide from diverse backgrounds.",
          },
          {
            q: "What do Muslims believe?",
            a: "Muslims believe in one God, angels, revealed books, prophets, the Day of Judgment, and divine decree. They follow the Five Pillars of Islam and the Six Articles of Faith.",
          },
        ],
      },
      {
        type: "cta",
        title: "Have a question about Islam? Our scholars are here to help.",
        actions: [
          { label: "Contact us", href: "/contact" },
          { label: "New to Islam", href: "/new-muslims", variant: "secondary" },
        ],
      },
    ],
  },
  {
    slug: "quran-sunnah",
    title: "Quran & Sunnah",
    description:
      "The Quran and Sunnah are the two primary sources of Islamic guidance, together a complete framework for living a righteous life.",
    hero: {
      label: "Islam",
      title: "Quran & Sunnah",
      lede: "The Quran and Sunnah are the two primary sources of Islamic guidance. Together, they provide a complete framework for living a righteous life according to Allah's will.",
      image: { src: "/images/quran.webp", alt: "A copy of the Quran" },
    },
    blocks: [
      {
        type: "columns",
        label: "Primary sources",
        title: "Primary sources of guidance",
        cols: 2,
        items: [
          {
            title: "The Holy Quran",
            body: "The final revelation from Allah to humanity, preserved in its original form.",
            list: ["Revealed over 23 years", "114 chapters (Surahs)", "Over 6,000 verses (Ayahs)", "Preserved in Arabic"],
          },
          {
            title: "The Sunnah",
            body: "The teachings, actions, and approvals of Prophet Muhammad (PBUH).",
            list: ["Authentic Hadith collections", "Prophetic traditions", "Practical examples", "Detailed explanations"],
          },
        ],
      },
      {
        type: "columns",
        label: "Resources",
        title: "Learning resources",
        cols: 3,
        tone: "alt",
        items: [
          { title: "Quran Translation", body: "Access translations of the Quran in multiple languages." },
          { title: "Hadith Collections", body: "Explore authentic collections of Prophetic traditions." },
          { title: "Tafseer", body: "Study detailed explanations of Quranic verses." },
        ],
      },
      {
        type: "columns",
        label: "Significance",
        title: "Why they matter",
        cols: 2,
        items: [
          {
            title: "The Quran's significance",
            body: "The Quran is the literal word of Allah, revealed to Prophet Muhammad (PBUH) through the Angel Gabriel. It serves as:",
            list: [
              "A source of guidance for all humanity",
              "A cure for spiritual ailments",
              "A criterion between right and wrong",
              "A mercy and reminder for believers",
            ],
          },
          {
            title: "The Sunnah's role",
            body: "The Sunnah complements the Quran by providing:",
            list: [
              "Practical examples of Quranic teachings",
              "Detailed explanations of Islamic practices",
              "Guidance for daily life situations",
              "Clarification of ambiguous matters",
            ],
          },
        ],
      },
      {
        type: "cta",
        title: "Study the Quran and Sunnah with qualified teachers.",
        actions: [
          { label: "Browse courses", href: "/courses" },
          { label: "Contact us", href: "/contact", variant: "secondary" },
        ],
      },
    ],
  },
  {
    slug: "dawah",
    title: "Dawah: Inviting to Islam",
    description:
      "Dawah is the act of inviting others to understand and embrace Islam, a noble responsibility that requires knowledge, wisdom, and beautiful preaching.",
    hero: {
      label: "Islam",
      title: "Dawah: inviting to Islam",
      lede: "Dawah is the act of inviting others to understand and embrace Islam. It is a noble responsibility that requires knowledge, wisdom, and beautiful preaching.",
      image: { src: "photo-1627818653012-054f17eb0648", alt: "Worshippers in a mosque" },
    },
    blocks: [
      {
        type: "columns",
        label: "The art of dawah",
        title: "How we share the message",
        cols: 3,
        items: [
          { title: "Personal Conversations", body: "One-on-one discussions about Islam with wisdom and beautiful preaching." },
          { title: "Public Lectures", body: "Organizing and conducting public talks on various Islamic topics." },
          { title: "Online Outreach", body: "Utilizing digital platforms to spread the message of Islam globally." },
        ],
      },
      {
        type: "points",
        label: "Principles",
        title: "Principles of effective dawah",
        tone: "alt",
        items: [
          "Wisdom and good instruction",
          "Beautiful preaching",
          "Patience and perseverance",
          "Knowledge and understanding",
          "Respect and kindness",
          "Authentic information",
        ],
      },
      {
        type: "quote",
        label: "Quranic guidance",
        quote:
          "Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best.",
        cite: "Quran 16:125",
        body: "The Quran provides clear guidance on how to conduct dawah with wisdom, beautiful preaching, and good manners.",
        image: { src: "/images/quran.webp", alt: "A copy of the Quran" },
      },
      {
        type: "quote",
        label: "Prophetic example",
        quote: "Make things easy and do not make things difficult. Give glad tidings and do not make people run away.",
        cite: "Sahih Bukhari",
        body: "Prophet Muhammad (PBUH) demonstrated the best methods of dawah through his words and actions.",
      },
      {
        type: "columns",
        label: "Resources",
        title: "Dawah resources",
        cols: 2,
        tone: "alt",
        items: [
          { title: "Dawah Guide", body: "Learn effective methods and techniques for giving dawah." },
          { title: "Common Questions", body: "Find answers to frequently asked questions about Islam.", href: "/islam" },
        ],
      },
      {
        type: "cta",
        title: "Join our dawah team and help share the message.",
        actions: [
          { label: "Volunteer with us", href: "/volunteers" },
          { label: "Contact us", href: "/contact", variant: "secondary" },
        ],
      },
    ],
  },
  {
    slug: "marriage",
    title: "Marriage in Islam",
    description:
      "Marriage in Islam is a sacred bond based on mutual love, mercy, and understanding, considered half of one's faith.",
    hero: {
      label: "Islam",
      title: "Marriage in Islam",
      lede: "Marriage in Islam is a sacred bond between a man and a woman, based on mutual love, mercy, and understanding. It is considered half of one's faith and a means of achieving tranquility and peace.",
      image: { src: "/images/marriage.webp", alt: "Marriage in Islam" },
    },
    blocks: [
      {
        type: "columns",
        label: "The Islamic perspective",
        title: "The foundations of a marriage",
        cols: 3,
        items: [
          { title: "Mercy and Kindness", body: "The foundation of a successful marriage in Islam is built on mercy, kindness, and mutual respect." },
          { title: "Partnership", body: "Marriage is a partnership where both spouses support and complement each other." },
          { title: "Protection", body: "Marriage provides a lawful means of fulfilling natural desires and protecting one's chastity." },
        ],
      },
      {
        type: "columns",
        label: "Rights",
        title: "Rights of each spouse",
        cols: 2,
        tone: "alt",
        items: [
          {
            title: "Husband's rights",
            list: ["Obedience in what is good", "Protection of his property", "Maintaining family honor", "Respect and kindness"],
          },
          {
            title: "Wife's rights",
            list: ["Financial maintenance", "Kind treatment", "Protection and security", "Respect and honor"],
          },
        ],
      },
      {
        type: "quote",
        label: "Quranic guidance",
        quote:
          "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts.",
        cite: "Quran 30:21",
        body: "The Quran emphasizes the importance of marriage as a means of achieving peace, love, and mercy in one's life. It provides clear guidance on the rights and responsibilities of both spouses.",
      },
      {
        type: "quote",
        label: "Prophetic teachings",
        quote: "The best of you are those who are best to their wives.",
        cite: "Tirmidhi",
        body: "Prophet Muhammad (PBUH) set the perfect example of how to treat one's spouse with kindness, respect, and compassion.",
      },
      {
        type: "columns",
        label: "Preparation",
        title: "Preparing for marriage",
        cols: 2,
        tone: "alt",
        items: [
          {
            title: "Marriage preparation",
            list: [
              "Seeking a righteous spouse",
              "Understanding rights and responsibilities",
              "Learning about Islamic marriage laws",
              "Preparing for family life",
            ],
          },
          {
            title: "Marriage resources",
            list: [
              "Marriage Guide: a comprehensive guide to Islamic marriage and family life",
              "Marriage Counseling: professional guidance for married couples",
            ],
          },
        ],
      },
      {
        type: "cta",
        title: "Looking for guidance on marriage? Speak with our counselors.",
        actions: [{ label: "Contact us", href: "/contact" }],
      },
    ],
  },
];
