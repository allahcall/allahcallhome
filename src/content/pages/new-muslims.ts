import type { Page } from "../types";

export const newMuslimPages: Page[] = [
  {
    slug: "new-muslims",
    title: "Welcome to Islam",
    description:
      "Curious about Islam or newly Muslim? Get knowledge, community and practical guidance for every step of your journey with AllahCall.",
    hero: {
      label: "New Muslims",
      title: "Welcome to Islam",
      lede: "Begin your journey to spiritual fulfillment with guidance and support",
      image: { src: "photo-1616596871445-bb8290a7a2c2", alt: "A mosque courtyard in soft light" },
    },
    blocks: [
      {
        type: "columns",
        label: "Your path",
        title: "Your path to Islam",
        lede: "Whether you're curious about Islam or have already taken your Shahada, we're here to support your journey with knowledge, community, and practical guidance.",
        cols: 4,
        items: [
          {
            title: "Accept Islam Now",
            body: "Take your first step towards embracing Islam. Learn about the declaration of faith (Shahada) and begin your spiritual journey.",
            href: "/accept-islam-now",
          },
          {
            title: "Shahada",
            body: "Understand the meaning and significance of the testimony of faith, the foundation of becoming a Muslim.",
            href: "/shahada",
          },
          {
            title: "New Muslim Guidelines",
            body: "Essential guidance and practical tips for those who have recently embraced Islam.",
            href: "/new-muslim-guidelines",
          },
          {
            title: "Testimonies of New Muslims",
            body: "Read inspiring stories of people who have found peace and purpose in Islam.",
            href: "/testimonies-of-new-muslims",
          },
        ],
      },
      {
        type: "columns",
        label: "Support",
        title: "How we support you",
        cols: 4,
        tone: "alt",
        items: [
          { title: "Personal Support", body: "One-on-one guidance from experienced mentors to help you on your journey." },
          {
            title: "Learning Resources",
            body: "Access to educational materials, books, and courses designed for new Muslims.",
          },
          {
            title: "Community Connection",
            body: "Join a welcoming community of Muslims and fellow converts for support and friendship.",
          },
          {
            title: "Practical Guidance",
            body: "Learn about daily prayers, Islamic practices, and lifestyle with step-by-step assistance.",
          },
        ],
      },
      {
        type: "cta",
        title: "Ready to learn more?",
        body: "Our team is here to answer your questions and provide guidance on your journey to Islam.",
        actions: [
          { label: "Accept Islam now", href: "/accept-islam-now" },
          { label: "Contact us", href: "/contact", variant: "secondary" },
        ],
      },
    ],
  },
  {
    slug: "accept-islam-now",
    title: "Accept Islam Today",
    description:
      "How to accept Islam: understand the faith, then declare your belief in One God (Allah) and His final messenger, Prophet Muhammad (peace be upon him).",
    hero: {
      label: "New Muslims",
      title: "Accept Islam today",
      lede: "Take your first step towards eternal peace and guidance",
      image: { src: "photo-1627818653012-054f17eb0648", alt: "Worshippers in a mosque" },
    },
    blocks: [
      {
        type: "prose",
        label: "Introduction",
        title: "Embracing Islam",
        body: [
          "Accepting Islam is a beautiful and straightforward process. It begins with understanding and declaring your belief in One God (Allah) and His final messenger, Prophet Muhammad (peace be upon him).",
        ],
      },
      {
        type: "steps",
        label: "Steps",
        title: "Steps to accept Islam",
        items: [
          {
            title: "Understanding the Shahada",
            body: "The declaration of faith in Islam is called the Shahada. It states: 'I bear witness that there is no deity worthy of worship except Allah, and I bear witness that Muhammad is His messenger.'",
          },
          {
            title: "Preparation",
            body: "Take a shower or perform ablution (wudu) if possible. Wear clean clothes and ensure you are in a calm, quiet environment.",
          },
          {
            title: "Declaration",
            body: "Pronounce the Shahada with sincere belief and understanding of its meaning. You can say it in Arabic or your own language.",
          },
          {
            title: "Next Steps",
            body: "After declaring your faith, begin learning about the five daily prayers, fasting in Ramadan, and other aspects of Islamic practice.",
          },
        ],
      },
      { type: "shahada", label: "Declaration", title: "The declaration of faith (Shahada)" },
      {
        type: "cta",
        title: "Need support?",
        body: "Our team is here to help you with your journey to Islam. We can provide guidance, answer questions, and connect you with your local Muslim community.",
        actions: [
          { label: "Contact us", href: "/contact" },
          { label: "New Muslim guidelines", href: "/new-muslim-guidelines", variant: "secondary" },
        ],
      },
    ],
  },
  {
    slug: "shahada",
    title: "The Shahada",
    description:
      "The Shahada is the declaration of faith that makes one a Muslim: belief in the One true God and His final messenger. Read it in Arabic and English.",
    hero: {
      label: "New Muslims",
      title: "The Shahada",
      lede: "Understanding the Islamic Declaration of Faith",
      image: { src: "photo-1749353709563-80a77c11465e", alt: "A mosque at dusk" },
    },
    blocks: [
      {
        type: "prose",
        label: "Introduction",
        title: "What is the Shahada?",
        body: [
          "The Shahada is the most important declaration in Islam. It is through this testimony that one becomes a Muslim, affirming their belief in the One true God and His final messenger.",
        ],
      },
      { type: "shahada", label: "Declaration", title: "The declaration of faith" },
      {
        type: "columns",
        label: "Understanding",
        title: "Understanding the Shahada",
        cols: 4,
        items: [
          {
            title: "Meaning",
            body: "The Shahada is the Muslim declaration of belief in the oneness of Allah and the messengership of Muhammad (peace be upon him).",
          },
          {
            title: "Significance",
            body: "It is the first pillar of Islam and the foundation of the Islamic faith. By declaring the Shahada with sincere belief, one enters the fold of Islam.",
          },
          {
            title: "Components",
            body: "The Shahada consists of two parts: declaring that there is no deity worthy of worship except Allah, and affirming that Muhammad is His messenger.",
          },
          {
            title: "Requirements",
            body: "The Shahada must be declared with understanding, conviction, certainty, sincerity, truthfulness, and love.",
          },
        ],
      },
      {
        type: "columns",
        label: "Requirements",
        title: "Requirements of the Shahada",
        cols: 4,
        tone: "alt",
        items: [
          { title: "Understanding", body: "Know the meaning of what you're declaring and its implications for your life." },
          { title: "Conviction", body: "Have firm belief in your heart about the truth of these words." },
          { title: "Sincerity", body: "Declare the Shahada purely for Allah's sake, not for worldly gains." },
          { title: "Love", body: "Have love for what the Shahada represents and what it calls to." },
        ],
      },
      {
        type: "cta",
        title: "Ready to take your Shahada?",
        body: "If you're ready to declare your faith or have questions, our team is here to support you.",
        actions: [
          { label: "Accept Islam now", href: "/accept-islam-now" },
          { label: "Contact us", href: "/contact", variant: "secondary" },
        ],
      },
    ],
  },
  {
    slug: "new-muslim-guidelines",
    title: "New Muslim Guidelines",
    description:
      "A practical, step-by-step guide for new Muslims to prayer, worship and daily Islamic practice. Allah knows your intention and your effort.",
    hero: {
      label: "New Muslims",
      title: "New Muslim guidelines",
      lede: "Your practical guide to embracing Islam in daily life",
      image: { src: "photo-1547119913-19b6afce361f", alt: "A person reading the Quran" },
    },
    blocks: [
      {
        type: "prose",
        label: "Introduction",
        title: "Welcome to Islam",
        body: [
          "This guide will help you understand and implement Islamic practices in your daily life. Take it step by step, and remember that Allah knows your intention and effort.",
        ],
      },
      {
        type: "columns",
        label: "Essentials",
        title: "Where to begin",
        cols: 4,
        items: [
          {
            title: "Prayer (Salah)",
            body: "Learn how to perform the five daily prayers, including the required purification (wudu) and the proper movements and recitations.",
          },
          {
            title: "Quran Reading",
            body: "Begin learning to read the Quran in Arabic and understand its meanings through translations and interpretations.",
          },
          {
            title: "Fasting (Sawm)",
            body: "Understand the importance of fasting in Ramadan and learn about the rules and spiritual benefits.",
          },
          {
            title: "Islamic Character",
            body: "Develop good character traits such as honesty, kindness, patience, and respect for others.",
          },
        ],
      },
      {
        type: "columns",
        label: "Practice",
        title: "Practical steps for new Muslims",
        cols: 3,
        tone: "alt",
        items: [
          {
            title: "Daily practices",
            list: [
              "Learn and practice the five daily prayers",
              "Read a portion of the Quran daily",
              "Remember Allah through dhikr",
              "Maintain personal hygiene",
            ],
          },
          {
            title: "Weekly practices",
            list: [
              "Attend Friday prayers at the mosque",
              "Join Islamic study circles",
              "Connect with the Muslim community",
              "Review and practice what you've learned",
            ],
          },
          {
            title: "Monthly goals",
            list: [
              "Learn new chapters of the Quran",
              "Improve prayer pronunciation",
              "Study Islamic history",
              "Participate in community service",
            ],
          },
        ],
      },
      {
        type: "quote",
        label: "Remember",
        quote: "Allah intends for you ease and does not intend for you hardship.",
        cite: "Quran 2:185",
        body: "Take your time to learn and implement these practices gradually. The journey of faith is a lifelong process of learning and growing.",
      },
      {
        type: "cta",
        title: "Need support?",
        body: "Our team and community are here to support you on your journey. Don't hesitate to reach out for guidance or answers to your questions.",
        actions: [
          { label: "Contact us", href: "/contact" },
          { label: "Read success stories", href: "/testimonies-of-new-muslims", variant: "secondary" },
        ],
      },
    ],
  },
  {
    slug: "testimonies-of-new-muslims",
    title: "Journey to Islam",
    description:
      "Stories of new Muslims: how people from different backgrounds found their way to Islam, and how their faith transformed their lives.",
    hero: {
      label: "New Muslims",
      title: "Journey to Islam",
      lede: "Inspiring stories of those who found their path to Islam",
      image: { src: "photo-1616596871445-bb8290a7a2c2", alt: "A mosque courtyard in soft light" },
    },
    blocks: [
      {
        type: "prose",
        label: "Introduction",
        title: "Stories of guidance",
        body: [
          "Every journey to Islam is unique and beautiful. These testimonies share how different people found their way to the truth and how Islam transformed their lives.",
        ],
      },
      {
        type: "testimonies",
        label: "Testimonies",
        title: "In their own words",
        items: [
          {
            name: "David",
            place: "United States",
            quote:
              "Islam brought peace to my heart and clarity to my mind. The concept of direct connection with Allah resonated deeply with me.",
            story:
              "I was searching for meaning in life when I first learned about Islam. The logical approach to faith and the emphasis on direct connection with God drew me in.",
            image: { src: "photo-1740620779952-17ab8c00de48", alt: "Portrait of David" },
          },
          {
            name: "Sarah Johnson",
            place: "Spain",
            quote:
              "The brotherhood and sisterhood in Islam is unlike anything I've experienced before. It truly feels like one global family.",
            story:
              "After studying various religions, I found that Islam's teachings about social justice and community responsibility aligned perfectly with my values.",
            image: { src: "photo-1508214751196-bcfd4ca60f91", alt: "Portrait of Sarah Johnson" },
          },
          {
            name: "Emma Wilson",
            place: "United Kingdom",
            quote:
              "The beautiful thing about Islam is how it guides every aspect of life while maintaining a balance between spiritual and worldly matters.",
            story:
              "My journey to Islam began through Muslim friends who showed me the beauty of their faith through their actions and character.",
            image: { src: "photo-1517841905240-472988babdf9", alt: "Portrait of Emma Wilson" },
          },
          {
            name: "Michael Chen",
            place: "Canada",
            quote:
              "Islam answered the deep philosophical questions I had about existence and purpose in a way that satisfied both my heart and mind.",
            story:
              "As a person with a scientific background, I found Islam's emphasis on seeking knowledge and understanding the natural world particularly appealing.",
            image: { src: "photo-1714331251780-db56109a9887", alt: "Portrait of Michael Chen" },
          },
        ],
      },
      {
        type: "quote",
        label: "Your journey awaits",
        quote: "Indeed, Allah guides whom He wills to His straight path.",
        cite: "Quran 2:213",
        body: "Every person's journey to Islam is different, but the destination is the same: peace through submission to Allah.",
      },
      {
        type: "cta",
        title: "Share your story",
        body: "Have you recently embraced Islam? We'd love to hear your story and share it to inspire others on their journey to Islam. If you're considering becoming a Muslim, we're here to help guide you on your journey.",
        actions: [
          { label: "Submit your story", href: "/contact" },
          { label: "Accept Islam now", href: "/accept-islam-now", variant: "secondary" },
          { label: "Contact us", href: "/contact", variant: "secondary" },
        ],
      },
    ],
  },
];
