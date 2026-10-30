import type { Page } from "../types";

export const servicePages: Page[] = [
  {
    slug: "articles-books",
    title: "Articles & Books",
    description:
      "Access a wealth of authentic Islamic knowledge through our carefully curated collection of articles, books, and educational materials.",
    hero: {
      label: "Services",
      title: "Articles & books",
      lede: "Explore our collection of Islamic literature and educational resources.",
      image: { src: "photo-1599488059966-a42a2ab36991", alt: "A mosque, representing our library of Islamic resources" },
    },
    blocks: [
      {
        type: "prose",
        label: "Resources",
        title: "Islamic resources",
        body: [
          "Access a wealth of authentic Islamic knowledge through our carefully curated collection of articles, books, and educational materials.",
        ],
      },
      {
        type: "columns",
        cols: 4,
        items: [
          {
            title: "Islamic Beliefs",
            body: "Articles and books explaining core Islamic beliefs and principles.",
            list: ["The Six Articles of Faith", "Understanding Tawheed", "The Concept of Prophethood", "The Day of Judgment"],
          },
          {
            title: "Quran & Tafseer",
            body: "Resources for understanding and studying the Quran.",
            list: ["Quran Translations", "Tafseer Studies", "Quranic Sciences", "Memorization Guides"],
          },
          {
            title: "Hadith & Sunnah",
            body: "Collections and explanations of prophetic traditions.",
            list: ["Major Hadith Collections", "Hadith Sciences", "Prophetic Biography", "Daily Sunnah Practices"],
          },
          {
            title: "Fiqh & Islamic Law",
            body: "Guidance on Islamic jurisprudence and legal matters.",
            list: ["Prayer & Purification", "Zakat & Charity", "Marriage & Family", "Business Ethics"],
          },
        ],
      },
      {
        type: "books",
        label: "Reading",
        title: "Featured books",
        items: [
          {
            title: "The Sealed Nectar",
            author: "Safiur-Rahman Al-Mubarakpuri",
            body: "A comprehensive biography of Prophet Muhammad (PBUH).",
            image: { src: "/images/books/sealed-nectar.png", alt: "Cover of The Sealed Nectar" },
          },
          {
            title: "The Divine Reality",
            author: "Hamza Andreas Tzortzis",
            body: "A philosophical exploration of God's existence.",
            image: { src: "/images/books/divine-reality.png", alt: "Cover of The Divine Reality" },
          },
          {
            title: "There is a GOD",
            author: "Engineer Hafiz Muhammad Haris",
            body: "Islamic proofs of God's existence through Quran and logic.",
            image: { src: "/images/books/there-is-a-god.png", alt: "Cover of There is a GOD" },
          },
        ],
      },
      {
        type: "quote",
        label: "Seeking knowledge",
        quote: "Seeking knowledge is an obligation upon every Muslim.",
        cite: "Ibn Majah",
        body: "Explore our resources to enhance your understanding of Islam and grow in your faith.",
      },
      {
        type: "cta",
        title: "Start reading today",
        body: "Access our complete collection of articles and books to deepen your Islamic knowledge.",
        actions: [{ label: "Contact us", href: "/contact" }],
      },
    ],
  },
  {
    slug: "muslim-revival",
    title: "Muslim Revival",
    description:
      "Our Muslim Revival programs are designed to help you strengthen your connection with Allah, increase your Islamic knowledge, and build a strong Muslim community.",
    hero: {
      label: "Services",
      title: "Muslim revival",
      lede: "Strengthen your faith and reconnect with Islamic teachings.",
      image: { src: "photo-1744264362119-bd94511b0597", alt: "A mosque, a place to revive one's faith" },
    },
    blocks: [
      {
        type: "prose",
        label: "Revival",
        title: "Revive your faith",
        body: [
          "Our Muslim Revival programs are designed to help you strengthen your connection with Allah, increase your Islamic knowledge, and build a strong Muslim community.",
        ],
      },
      {
        type: "cards",
        cols: 2,
        items: [
          {
            title: "Faith Strengthening",
            body: "Programs designed to deepen your connection with Allah and strengthen your faith.",
            list: ["Daily Remembrance Sessions", "Quran Reflection Circles", "Spiritual Retreats", "Faith Workshops"],
            image: { src: "photo-1589366786784-20a72800cebb", alt: "Faith strengthening programs" },
          },
          {
            title: "Knowledge Enhancement",
            body: "Structured learning programs to increase your Islamic knowledge.",
            list: ["Islamic Courses", "Study Circles", "Scholarly Lectures", "Book Clubs"],
            image: { src: "photo-1544685584-9d18c3420eb4", alt: "Study materials for knowledge enhancement" },
          },
          {
            title: "Community Building",
            body: "Initiatives to foster strong Muslim communities and brotherhood.",
            list: ["Community Gatherings", "Volunteer Programs", "Youth Activities", "Family Events"],
            image: { src: "photo-1719988176478-7f4cc9f60568", alt: "Muslim community gathering" },
          },
          {
            title: "Personal Development",
            body: "Programs focusing on character building and self-improvement.",
            list: ["Character Workshops", "Mentorship Programs", "Leadership Training", "Life Skills Sessions"],
            image: { src: "photo-1553484771-371a605b060b", alt: "Personal development and mentorship" },
          },
        ],
      },
      {
        type: "columns",
        label: "Benefits",
        title: "Program benefits",
        cols: 4,
        tone: "alt",
        items: [
          { title: "Spiritual Growth", body: "Deepen your connection with Allah and strengthen your faith." },
          { title: "Knowledge Increase", body: "Gain authentic Islamic knowledge from qualified scholars." },
          { title: "Community Support", body: "Connect with like-minded Muslims for mutual support and growth." },
          { title: "Practical Guidance", body: "Learn how to implement Islamic teachings in your daily life." },
        ],
      },
      {
        type: "quote",
        label: "Revival of faith",
        quote:
          "Allah will raise those who have believed among you and those who were given knowledge, by degrees.",
        cite: "Quran 58:11",
        body: "Join our programs to revive your faith and grow spiritually in a supportive environment.",
      },
      {
        type: "cta",
        title: "Ready to revive your faith?",
        body: "Join our Muslim Revival programs and take the first step towards strengthening your faith.",
        actions: [{ label: "Contact us", href: "/contact" }],
      },
    ],
  },
  {
    slug: "rejoining-muslim-ummah",
    title: "Rejoining Muslim Ummah",
    description:
      "Our Rejoining Muslim Ummah program provides comprehensive support and guidance for those seeking to reconnect with the Muslim community and strengthen their faith.",
    hero: {
      label: "Services",
      title: "Rejoining Muslim Ummah",
      lede: "Support and guidance for reconnecting with the Muslim community.",
      image: { src: "/images/congregation.webp", alt: "A congregation of Muslims gathered together" },
    },
    blocks: [
      {
        type: "prose",
        label: "Welcome",
        title: "Welcome back",
        body: [
          "Our Rejoining Muslim Ummah program provides comprehensive support and guidance for those seeking to reconnect with the Muslim community and strengthen their faith.",
        ],
      },
      {
        type: "columns",
        cols: 4,
        items: [
          {
            title: "Personal Guidance",
            body: "One-on-one support from experienced mentors to help you reconnect with your faith.",
            list: ["Personal Mentorship", "Faith Counseling", "Spiritual Guidance", "Progress Tracking"],
          },
          {
            title: "Community Integration",
            body: "Programs to help you become an active member of the Muslim community.",
            list: ["Community Events", "Group Activities", "Volunteer Opportunities", "Social Gatherings"],
          },
          {
            title: "Educational Support",
            body: "Resources and learning opportunities to strengthen your Islamic knowledge.",
            list: ["Islamic Classes", "Study Groups", "Workshops", "Online Resources"],
          },
          {
            title: "Practical Assistance",
            body: "Help with practical aspects of rejoining the Muslim community.",
            list: ["Mosque Integration", "Family Support", "Social Services", "Cultural Adaptation"],
          },
        ],
      },
      {
        type: "columns",
        label: "Benefits",
        title: "Program benefits",
        cols: 4,
        tone: "alt",
        items: [
          { title: "Spiritual Support", body: "Receive guidance and support in your journey back to the Muslim community." },
          {
            title: "Community Connection",
            body: "Build meaningful relationships with fellow Muslims and become part of a supportive community.",
          },
          {
            title: "Knowledge Enhancement",
            body: "Access resources and learning opportunities to strengthen your Islamic understanding.",
          },
          { title: "Practical Help", body: "Get assistance with practical aspects of rejoining the Muslim community." },
        ],
      },
      {
        type: "quote",
        label: "The believers are brothers",
        quote: "The believers are but brothers, so make settlement between your brothers.",
        cite: "Quran 49:10",
        body: "We welcome you back to the Muslim community with open arms and support.",
      },
      {
        type: "cta",
        title: "Ready to reconnect?",
        body: "Take the first step towards rejoining the Muslim community with our support and guidance.",
        actions: [
          { label: "Get started", href: "/contact" },
          { label: "Contact us", href: "/contact", variant: "secondary" },
        ],
      },
    ],
  },
  {
    slug: "publish-your-work",
    title: "Publish Your Work",
    description:
      "We provide a platform for scholars, researchers, and writers to publish their Islamic works and contribute to the spread of authentic knowledge.",
    hero: {
      label: "Services",
      title: "Publish your work",
      lede: "Share your Islamic knowledge and research with the world.",
      image: { src: "photo-1432821596592-e2c18b78144f", alt: "A writer's desk, ready for publishing Islamic works" },
    },
    blocks: [
      {
        type: "prose",
        label: "Publishing",
        title: "Share your knowledge",
        body: [
          "We provide a platform for scholars, researchers, and writers to publish their Islamic works and contribute to the spread of authentic knowledge.",
        ],
      },
      {
        type: "columns",
        cols: 4,
        items: [
          {
            title: "Articles",
            body: "Share your insights and research on Islamic topics.",
            listLabel: "Requirements",
            list: ["Original content", "Proper references", "Clear writing style", "Relevant to Islamic studies"],
          },
          {
            title: "Books",
            body: "Publish your Islamic books and research works.",
            listLabel: "Requirements",
            list: ["Comprehensive content", "Scholarly review", "Proper formatting", "Clear objectives"],
          },
          {
            title: "Research Papers",
            body: "Contribute to Islamic academic research.",
            listLabel: "Requirements",
            list: ["Academic rigor", "Proper methodology", "Detailed references", "Clear conclusions"],
          },
          {
            title: "Educational Materials",
            body: "Create resources for Islamic education.",
            listLabel: "Requirements",
            list: ["Educational value", "Age-appropriate content", "Clear instructions", "Engaging format"],
          },
        ],
      },
      {
        type: "columns",
        label: "Benefits",
        title: "Publishing benefits",
        cols: 4,
        tone: "alt",
        items: [
          { title: "Wide Reach", body: "Your work will be accessible to a global audience of Muslims and researchers." },
          {
            title: "Professional Support",
            body: "Receive guidance and support from our editorial team throughout the publishing process.",
          },
          { title: "Quality Assurance", body: "Your work will be reviewed by qualified scholars to ensure authenticity and accuracy." },
          { title: "Community Impact", body: "Contribute to the spread of authentic Islamic knowledge and benefit the Ummah." },
        ],
      },
      {
        type: "quote",
        label: "Spreading knowledge",
        quote: "The best charity is that a Muslim learns knowledge and then teaches it to others.",
        cite: "Ibn Majah",
        body: "Share your knowledge and contribute to the spread of authentic Islamic teachings.",
      },
      {
        type: "cta",
        title: "Ready to publish?",
        body: "Submit your work and join our community of Islamic scholars and writers.",
        actions: [
          { label: "Submit work", href: "/contact" },
          { label: "Contact us", href: "/contact", variant: "secondary" },
        ],
      },
    ],
  },
];
