import type { Page } from "../types";

export const programPages: Page[] = [
  {
    slug: "programs",
    title: "Islamic Learning Programs",
    description:
      "Whether you're new to Islam or seeking to deepen your knowledge, our programs provide structured learning paths with expert guidance and community support.",
    hero: {
      label: "Programs",
      title: "Islamic learning programs",
      lede: "Embark on your journey of Islamic knowledge with structured guidance.",
      image: { src: "photo-1660795670724-0dfa88fc1dda", alt: "A mosque, home to our learning programs" },
    },
    blocks: [
      {
        type: "prose",
        label: "Programs",
        title: "Our programs",
        body: [
          "Whether you're new to Islam or seeking to deepen your knowledge, our programs provide structured learning paths with expert guidance and community support.",
        ],
      },
      {
        type: "columns",
        cols: 2,
        items: [
          {
            title: "Companionship Program",
            body: "Connect with experienced Muslims who will guide and support you on your Islamic journey through one-on-one mentorship.",
            href: "/companionship",
          },
          {
            title: "Islamic Courses",
            body: "Comprehensive courses on various Islamic topics, from basic fundamentals to advanced studies in Quran and Sunnah.",
            href: "/courses",
          },
        ],
      },
      {
        type: "columns",
        label: "Features",
        title: "Program features",
        cols: 4,
        tone: "alt",
        items: [
          { title: "Expert Guidance", body: "Learn from qualified scholars and experienced teachers who provide authentic Islamic knowledge." },
          { title: "Flexible Learning", body: "Access programs online or in-person, with schedules that fit your lifestyle and commitments." },
          { title: "Supportive Community", body: "Join a welcoming community of learners and mentors who support each other's growth." },
          { title: "Practical Application", body: "Focus on implementing Islamic teachings in daily life through practical exercises and guidance." },
        ],
      },
      {
        type: "quote",
        label: "Seeking knowledge",
        quote:
          "Allah will raise those who have believed among you and those who were given knowledge, by degrees.",
        cite: "Quran 58:11",
        body: "Join our programs to enhance your understanding of Islam and grow spiritually in a supportive environment.",
      },
      {
        type: "cta",
        title: "Ready to start learning?",
        body: "Choose from our range of programs and begin your journey of Islamic knowledge today.",
        actions: [
          { label: "Browse courses", href: "/courses" },
          { label: "Contact us", href: "/contact", variant: "secondary" },
        ],
      },
    ],
  },
  {
    slug: "companionship",
    title: "Companionship Program",
    description:
      "Our Companionship Program pairs you with experienced Muslims who provide personal guidance, support, and friendship on your Islamic journey.",
    hero: {
      label: "Programs",
      title: "Companionship program",
      lede: "Journey together with experienced Muslim mentors.",
      image: { src: "photo-1681505526188-b05e68c77582", alt: "A mosque where companions meet" },
    },
    blocks: [
      {
        type: "prose",
        label: "Companionship",
        title: "Walk the path together",
        body: [
          "Our Companionship Program pairs you with experienced Muslims who provide personal guidance, support, and friendship on your Islamic journey.",
        ],
      },
      {
        type: "columns",
        cols: 4,
        items: [
          { title: "Personal Guidance", body: "One-on-one mentorship with experienced Muslims who understand your journey and challenges." },
          { title: "Flexible Schedule", body: "Meet with your companion at times that work for both of you, whether online or in person." },
          { title: "Customized Support", body: "Receive guidance tailored to your specific needs, questions, and pace of learning." },
          { title: "Lifelong Connection", body: "Build lasting relationships with mentors who become part of your support network." },
        ],
      },
      {
        type: "columns",
        label: "Details",
        title: "Program details",
        cols: 3,
        tone: "alt",
        items: [
          {
            title: "Weekly Meetings",
            list: [
              "One-hour sessions with your companion",
              "Flexible scheduling options",
              "Choice of online or in-person meetings",
              "Progress tracking and goal setting",
            ],
          },
          {
            title: "Learning Areas",
            list: [
              "Islamic beliefs and practices",
              "Quran reading and understanding",
              "Daily prayers and worship",
              "Islamic character development",
            ],
          },
          {
            title: "Support Services",
            list: [
              "24/7 WhatsApp support",
              "Monthly group activities",
              "Access to learning resources",
              "Community events participation",
            ],
          },
        ],
      },
      {
        type: "quote",
        label: "From our participants",
        quote:
          "Having a companion to guide me through my journey in Islam has been invaluable. The personal support and friendship have made all the difference.",
        cite: "Sarah, Program Participant",
      },
      {
        type: "cta",
        title: "Join the program",
        body: "Ready to be paired with a companion? Fill out our application form and we'll match you with a suitable mentor based on your needs and preferences.",
        actions: [{ label: "Contact us", href: "/contact" }],
      },
    ],
  },
  {
    slug: "courses",
    title: "Islamic Courses",
    description:
      "Choose from our range of carefully designed courses that cater to different levels of learning and areas of Islamic knowledge.",
    hero: {
      label: "Programs",
      title: "Islamic courses",
      lede: "Structured learning paths for your Islamic education.",
      image: { src: "photo-1711202675885-d0a0ce63b5bf", alt: "A mosque, setting for our Islamic courses" },
    },
    blocks: [
      {
        type: "prose",
        label: "Courses",
        title: "Our courses",
        body: [
          "Choose from our range of carefully designed courses that cater to different levels of learning and areas of Islamic knowledge.",
        ],
      },
      {
        type: "cards",
        cols: 2,
        items: [
          {
            title: "Fundamentals of Islam",
            meta: "Beginner · 8 weeks",
            body: "Learn the basic principles of Islam, including beliefs, prayers, and essential practices.",
            listLabel: "Topics covered",
            list: ["Islamic Beliefs", "Five Pillars", "Prayer Basics", "Purification"],
            image: { src: "photo-1544685584-9d18c3420eb4", alt: "Study materials for the Fundamentals of Islam course" },
          },
          {
            title: "Quran Reading",
            meta: "All Levels · 12 weeks",
            body: "Master Quran recitation with proper tajweed rules and pronunciation.",
            listLabel: "Topics covered",
            list: ["Arabic Letters", "Tajweed Rules", "Recitation Practice", "Memorization Techniques"],
            image: { src: "photo-1582033133673-0191060657a9", alt: "An open Quran for recitation practice" },
          },
          {
            title: "Islamic Ethics & Character",
            meta: "Intermediate · 6 weeks",
            body: "Develop noble character traits based on Islamic teachings and prophetic guidance.",
            listLabel: "Topics covered",
            list: ["Islamic Morals", "Prophet's Character", "Social Ethics", "Family Values"],
            image: { src: "photo-1589366786784-20a72800cebb", alt: "Islamic Ethics & Character course" },
          },
          {
            title: "Advanced Islamic Studies",
            meta: "Advanced · 16 weeks",
            body: "Deep dive into Islamic sciences, including fiqh, hadith, and tafseer.",
            listLabel: "Topics covered",
            list: ["Usul al-Fiqh", "Hadith Studies", "Tafseer", "Contemporary Issues"],
            image: { src: "photo-1652751207037-f6f5097fdb9a", alt: "Classical texts for Advanced Islamic Studies" },
          },
        ],
      },
      {
        type: "columns",
        label: "Features",
        title: "Course features",
        cols: 4,
        tone: "alt",
        items: [
          { title: "Expert Teachers", body: "Learn from qualified scholars with years of teaching experience." },
          { title: "Flexible Learning", body: "Access course materials anytime, anywhere through our online platform." },
          { title: "Interactive Sessions", body: "Engage in live discussions and Q&A sessions with instructors." },
          { title: "Progress Tracking", body: "Monitor your learning journey with assessments and progress reports." },
        ],
      },
      {
        type: "quote",
        label: "Lifelong learning",
        quote: "Seeking knowledge is an obligation upon every Muslim.",
        cite: "Ibn Majah",
        body: "Start your learning journey today with our comprehensive Islamic courses.",
      },
      {
        type: "cta",
        title: "Ready to enroll?",
        body: "Contact us to learn more about course schedules, fees, and enrollment process.",
        actions: [{ label: "Contact us", href: "/contact" }],
      },
    ],
  },
];
