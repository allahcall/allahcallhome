import type { Page } from "../types";

const contactCta = (title: string) => ({
  type: "cta" as const,
  title,
  actions: [
    { label: "Contact us", href: "/contact" },
    { label: "All religions", href: "/religions", variant: "secondary" as const },
  ],
});

export const religionPages: Page[] = [
  {
    slug: "religions",
    title: "Understanding World Religions",
    description:
      "Islam encourages understanding and respectful dialogue with people of all faiths. Explore the beliefs, practices, and shared values of different religions.",
    hero: {
      label: "Religions",
      title: "Understanding world religions",
      lede: "Promoting interfaith dialogue and mutual understanding through knowledge and respect",
      image: { src: "photo-1742223996745-cedb68f57e52", alt: "Places of worship of different world religions" },
    },
    blocks: [
      {
        type: "prose",
        label: "Interfaith",
        title: "Interfaith understanding",
        body: [
          "Islam encourages understanding and respectful dialogue with people of all faiths. Explore the beliefs, practices, and shared values of different religions to foster mutual respect and peaceful coexistence.",
        ],
      },
      {
        type: "cards",
        label: "Explore",
        title: "Faiths of the world",
        cols: 3,
        items: [
          {
            title: "Christianity",
            body: "Explore the relationship between Islam and Christianity, common grounds, and respectful dialogue.",
            href: "/christianity",
            image: { src: "/images/christianity.webp", alt: "An open Bible" },
          },
          {
            title: "Judaism",
            body: "Understand the historical and theological connections between Islam and Judaism.",
            href: "/judaism",
            image: { src: "/images/judaism.webp", alt: "Symbols of the Jewish faith" },
          },
          {
            title: "Hinduism",
            body: "Learn about Hindu beliefs and practices, and Islamic perspectives on interfaith dialogue.",
            href: "/hinduism",
            image: { src: "photo-1625050795880-ae615b56da68", alt: "A Hindu temple" },
          },
          {
            title: "Buddhism",
            body: "Discover Buddhist teachings and opportunities for meaningful interfaith understanding.",
            href: "/buddhism",
            image: { src: "/images/buddhism.webp", alt: "A statue of the Buddha" },
          },
          {
            title: "Sikhism",
            body: "Explore Sikh beliefs and traditions, and the importance of mutual respect and understanding.",
            href: "/sikhism",
            image: { src: "photo-1642355099716-a88a41a17887", alt: "A Sikh gurdwara" },
          },
        ],
      },
      {
        type: "quote",
        label: "Quranic guidance",
        title: "Quranic guidance on interfaith relations",
        quote:
          "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another.",
        cite: "Quran 49:13",
        body: "Islam teaches us to engage in respectful dialogue and to understand different beliefs while staying true to our own faith. This understanding helps build bridges between communities and promotes peaceful coexistence.",
      },
      {
        type: "columns",
        label: "Take part",
        title: "Join the conversation",
        cols: 2,
        tone: "alt",
        items: [
          {
            title: "Interfaith dialogue",
            list: [
              "Join our monthly interfaith discussions",
              "Participate in community events",
              "Access educational materials",
            ],
          },
          {
            title: "Get involved",
            list: ["Volunteer for interfaith projects", "Attend workshops and seminars", "Join our mailing list"],
          },
        ],
      },
      {
        type: "cta",
        title: "Interested in interfaith dialogue? We would love to hear from you.",
        actions: [
          { label: "Contact us", href: "/contact" },
          { label: "Volunteer with us", href: "/volunteers", variant: "secondary" },
        ],
      },
    ],
  },
  {
    slug: "christianity",
    title: "Understanding Christianity",
    description:
      "Islam and Christianity share many values and beliefs. Explore the similarities, respect the differences and build meaningful interfaith dialogue.",
    hero: {
      label: "Religions",
      title: "Understanding Christianity",
      lede: "Building bridges through knowledge and mutual respect",
      image: { src: "/images/christianity.webp", alt: "An open Bible" },
    },
    blocks: [
      {
        type: "prose",
        label: "Introduction",
        title: "Christianity and Islam",
        body: [
          "Islam and Christianity share many common values and beliefs. Understanding these similarities while respecting our differences helps build meaningful dialogue and peaceful coexistence.",
        ],
      },
      {
        type: "columns",
        label: "Common grounds",
        title: "What we share",
        cols: 4,
        items: [
          {
            title: "Belief in One God",
            body: "Both Islam and Christianity are monotheistic religions that believe in One Supreme Creator.",
          },
          {
            title: "Prophets and Messengers",
            body: "Muslims respect Jesus (peace be upon him) as one of God's mighty messengers and honor Mary, his mother.",
          },
          {
            title: "Moral Values",
            body: "Both religions emphasize love, mercy, charity, and good conduct towards all of humanity.",
          },
          {
            title: "Sacred Texts",
            body: "Both traditions have revealed scriptures that guide their followers in faith and practice.",
          },
        ],
      },
      {
        type: "columns",
        label: "Key topics",
        title: "Key topics",
        cols: 3,
        tone: "alt",
        items: [
          {
            title: "Jesus in Islam",
            body: "Muslims believe that Jesus (Isa) was one of the most important prophets of God, born miraculously to Mary, and honored in both this world and the hereafter.",
          },
          {
            title: "Mary in Islam",
            body: "Mary (Maryam) is highly respected in Islam. An entire chapter of the Quran is named after her, and she is considered one of the most pious women in history.",
          },
          {
            title: "Interfaith Dialogue",
            body: "Islam encourages respectful dialogue with Christians to build understanding and cooperation for the common good of society.",
          },
        ],
      },
      {
        type: "quote",
        label: "Quranic references",
        quote:
          "Say, 'O People of the Book! Come to a word common between us and you: that we shall worship none but God and that we shall not associate anything with Him.'",
        cite: "Quran 3:64",
        body: "The Quran encourages dialogue with Christians and Jews (People of the Book) and emphasizes our common heritage of monotheism and moral values.",
        image: { src: "photo-1652535281291-e818d4bcf5b9", alt: "People of different faiths in conversation" },
      },
      {
        type: "columns",
        label: "Resources",
        title: "Learn and take part",
        cols: 2,
        tone: "alt",
        items: [
          {
            title: "Learn more",
            list: [
              "Download comparative study materials",
              "Watch interfaith dialogue videos",
              "Access scholarly articles",
            ],
          },
          {
            title: "Get involved",
            list: ["Join interfaith discussion groups", "Participate in community events", "Attend workshops and seminars"],
          },
        ],
      },
      contactCta("Want to join an interfaith discussion? Get in touch."),
    ],
  },
  {
    slug: "judaism",
    title: "Understanding Judaism",
    description:
      "Judaism and Islam share deep historical and theological connections. Understanding these connections helps build bridges between our communities.",
    hero: {
      label: "Religions",
      title: "Understanding Judaism",
      lede: "Exploring our shared heritage and fostering mutual understanding",
      image: { src: "/images/judaism.webp", alt: "Symbols of the Jewish faith" },
    },
    blocks: [
      {
        type: "prose",
        label: "Introduction",
        title: "Judaism and Islam",
        body: [
          "Judaism and Islam share deep historical and theological connections. Understanding these connections helps build bridges between our communities while respecting our unique traditions.",
        ],
      },
      {
        type: "columns",
        label: "Common grounds",
        title: "What we share",
        cols: 4,
        items: [
          {
            title: "Monotheism",
            body: "Both Judaism and Islam are strictly monotheistic religions, believing in One God who is the Creator and Sustainer of all existence.",
          },
          {
            title: "Prophetic Tradition",
            body: "Muslims and Jews share many prophets, including Abraham, Moses, David, and Solomon (peace be upon them all).",
          },
          {
            title: "Divine Law",
            body: "Both religions emphasize the importance of divine law and guidance in daily life, with similar principles regarding worship and ethics.",
          },
          {
            title: "Ethical Values",
            body: "Both traditions emphasize justice, charity, family values, and moral conduct in personal and social life.",
          },
        ],
      },
      {
        type: "cards",
        label: "Key topics",
        title: "Key topics",
        cols: 3,
        tone: "alt",
        items: [
          {
            title: "Abrahamic Heritage",
            body: "Both Judaism and Islam trace their spiritual lineage to Prophet Abraham (peace be upon him), who is considered the patriarch of monotheism.",
            image: { src: "photo-1671653250785-8e1c8e8f1148", alt: "Desert landscape evoking the land of Abraham" },
          },
          {
            title: "Moses in Islam",
            body: "Prophet Moses (Musa) is mentioned more times in the Quran than any other prophet, and his story is central to Islamic teachings.",
            image: { src: "photo-1620653514733-f510d2b478f4", alt: "Mountain landscape recalling the story of Moses" },
          },
          {
            title: "Jerusalem",
            body: "Jerusalem holds special significance in both religions as a holy city and has been a center of worship and spiritual life for millennia.",
            image: { src: "photo-1587297069400-6cc5da81658a", alt: "The old city of Jerusalem" },
          },
        ],
      },
      {
        type: "columns",
        label: "History",
        title: "Shared history, shared future",
        cols: 2,
        items: [
          {
            title: "Historical coexistence",
            body: "Throughout history, there have been many periods of peaceful coexistence and mutual enrichment between Jewish and Muslim communities, particularly in:",
            list: ["Medieval Spain (Al-Andalus)", "Ottoman Empire", "North African Communities"],
          },
          {
            title: "Building bridges today",
            body: "We can learn from our shared history to build better understanding and cooperation today through:",
            list: [
              "Interfaith dialogue initiatives",
              "Joint community service projects",
              "Educational exchanges and programs",
            ],
          },
        ],
      },
      {
        type: "quote",
        label: "Quranic references",
        quote:
          "We sent down the Torah, containing guidance and light, by which the prophets who submitted themselves to Allah judged the Jews.",
        cite: "Quran 5:44",
        body: "The Quran acknowledges the Torah as a divine scripture and recognizes the special status of the Children of Israel in receiving divine guidance through numerous prophets.",
      },
      {
        type: "columns",
        label: "Resources",
        title: "Learning resources",
        cols: 2,
        tone: "alt",
        items: [
          {
            title: "Educational materials",
            list: ["Comparative religious studies", "Historical documents and research", "Scholarly articles and books"],
          },
          {
            title: "Get involved",
            list: ["Join interfaith discussion groups", "Attend cultural exchange events", "Volunteer for community projects"],
          },
        ],
      },
      contactCta("Want to join an interfaith discussion? Get in touch."),
    ],
  },
  {
    slug: "hinduism",
    title: "Understanding Hinduism",
    description:
      "While Islam and Hinduism have distinct beliefs, they share many universal values that can foster mutual respect and peaceful coexistence.",
    hero: {
      label: "Religions",
      title: "Understanding Hinduism",
      lede: "Building bridges through knowledge and mutual respect",
      image: { src: "photo-1625050795880-ae615b56da68", alt: "A Hindu temple" },
    },
    blocks: [
      {
        type: "prose",
        label: "Introduction",
        title: "Hinduism and Islam",
        body: [
          "Understanding different faiths helps build bridges between communities. While Islam and Hinduism have distinct beliefs, they share many universal values that can foster mutual respect and peaceful coexistence.",
        ],
      },
      {
        type: "columns",
        label: "Shared values",
        title: "Values we share",
        cols: 4,
        items: [
          { title: "Moral Ethics", body: "Both traditions emphasize moral conduct, truthfulness, and ethical behavior in daily life." },
          {
            title: "Respect for Knowledge",
            body: "Both religions place high value on seeking knowledge and wisdom for spiritual growth.",
          },
          {
            title: "Family Values",
            body: "Strong emphasis on family bonds, respect for elders, and maintaining family traditions.",
          },
          { title: "Charitable Acts", body: "Both faiths encourage charity, helping the needy, and serving humanity." },
        ],
      },
      {
        type: "cards",
        label: "Key topics",
        title: "Key topics",
        cols: 3,
        tone: "alt",
        items: [
          {
            title: "Understanding Hinduism",
            body: "Hinduism is one of the world's oldest religions, with rich traditions of philosophy, spirituality, and cultural practices spanning thousands of years.",
            image: { src: "photo-1622633942053-003f7d31c07d", alt: "Hindu religious tradition" },
          },
          {
            title: "Cultural Heritage",
            body: "India's rich cultural heritage has historically fostered peaceful coexistence between Hindu and Muslim communities, sharing art, literature, and music.",
            image: { src: "photo-1664532673307-91bf52511020", alt: "Historic architecture of the Indian subcontinent" },
          },
          {
            title: "Interfaith Dialogue",
            body: "Building bridges through understanding and respect, focusing on shared values and peaceful coexistence.",
            image: { src: "photo-1652535281291-e818d4bcf5b9", alt: "People of different faiths in conversation" },
          },
        ],
      },
      {
        type: "columns",
        label: "History",
        title: "Shared history, shared future",
        cols: 2,
        items: [
          {
            title: "Historical coexistence",
            body: "The Indian subcontinent has a rich history of Hindu-Muslim cultural synthesis in various fields:",
            list: ["Architecture and Art", "Music and Literature", "Philosophy and Science"],
          },
          {
            title: "Building bridges today",
            body: "Modern initiatives for fostering Hindu-Muslim understanding include:",
            list: ["Interfaith dialogue programs", "Cultural exchange events", "Joint community service"],
          },
        ],
      },
      {
        type: "quote",
        label: "Islamic perspective",
        title: "Islamic perspective on interfaith relations",
        quote:
          "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another.",
        cite: "Quran 49:13",
        body: "Islam encourages peaceful coexistence and mutual understanding with people of different faiths while maintaining our own beliefs and practices.",
      },
      {
        type: "columns",
        label: "Resources",
        title: "Learn and take part",
        cols: 2,
        tone: "alt",
        items: [
          {
            title: "Learn more",
            list: ["Comparative religious studies", "Cultural heritage resources", "Historical documentation"],
          },
          {
            title: "Get involved",
            list: ["Join interfaith dialogues", "Participate in cultural events", "Support community initiatives"],
          },
        ],
      },
      contactCta("Want to join an interfaith dialogue? Get in touch."),
    ],
  },
  {
    slug: "buddhism",
    title: "Understanding Buddhism",
    description:
      "Buddhism and Islam differ in belief and practice but share universal values. A respectful guide to common ground and mutual understanding.",
    hero: {
      label: "Religions",
      title: "Understanding Buddhism",
      lede: "Exploring Buddhist traditions with respect and understanding",
      image: { src: "/images/buddhism.webp", alt: "A statue of the Buddha" },
    },
    blocks: [
      {
        type: "prose",
        label: "Introduction",
        title: "Buddhism and Islam",
        body: [
          "While Buddhism and Islam have distinct beliefs and practices, both traditions share universal values that can serve as a foundation for mutual understanding and respect.",
        ],
      },
      {
        type: "columns",
        label: "Shared values",
        title: "Values we share",
        cols: 4,
        items: [
          { title: "Peace and Compassion", body: "Both traditions emphasize peace, compassion, and kindness towards all beings." },
          { title: "Ethical Living", body: "Both religions stress the importance of moral conduct and ethical behavior." },
          { title: "Mindfulness", body: "Both traditions value mindfulness, self-reflection, and spiritual awareness." },
          { title: "Service to Humanity", body: "Both faiths encourage serving others and helping those in need." },
        ],
      },
      {
        type: "cards",
        label: "Key topics",
        title: "Key topics",
        cols: 3,
        tone: "alt",
        items: [
          {
            title: "Understanding Buddhism",
            body: "Buddhism is a path of spiritual development leading to insight into the true nature of reality, founded by Siddhartha Gautama in ancient India.",
            image: { src: "/images/buddhism.webp", alt: "A statue of the Buddha" },
          },
          {
            title: "Historical Connections",
            body: "Muslims and Buddhists have interacted throughout history along the Silk Road and in various Asian regions, sharing knowledge and cultural exchanges.",
            image: { src: "photo-1664532673307-91bf52511020", alt: "Historic architecture along old trade routes" },
          },
          {
            title: "Contemporary Dialogue",
            body: "Modern initiatives focus on finding common ground and promoting mutual understanding between Buddhist and Muslim communities.",
            image: { src: "photo-1652535281291-e818d4bcf5b9", alt: "People of different faiths in conversation" },
          },
        ],
      },
      {
        type: "columns",
        label: "History",
        title: "Past and present",
        cols: 2,
        items: [
          {
            title: "Historical interactions",
            body: "Buddhist-Muslim interactions have occurred throughout history in various regions:",
            list: ["The Silk Road Trade Routes", "Southeast Asian Civilizations", "Central Asian Cultures"],
          },
          {
            title: "Modern dialogue",
            body: "Contemporary initiatives for Buddhist-Muslim understanding include:",
            list: ["Interfaith conferences", "Academic exchanges", "Community outreach programs"],
          },
        ],
      },
      {
        type: "quote",
        label: "Islamic perspective",
        title: "Islamic perspective on interfaith relations",
        quote: "And We have sent you not but as a mercy for all creation.",
        cite: "Quran 21:107",
        body: "Islam teaches respect for all of humanity and encourages peaceful coexistence while maintaining our own beliefs and practices.",
      },
      {
        type: "columns",
        label: "Resources",
        title: "Learn and take part",
        cols: 2,
        tone: "alt",
        items: [
          {
            title: "Learn more",
            list: ["Comparative religious studies", "Historical research materials", "Cultural exchange resources"],
          },
          {
            title: "Get involved",
            list: ["Join interfaith dialogues", "Attend cultural events", "Support peace initiatives"],
          },
        ],
      },
      contactCta("Want to join an interfaith dialogue? Get in touch."),
    ],
  },
  {
    slug: "sikhism",
    title: "Understanding Sikhism",
    description:
      "While Sikhism and Islam have their own unique beliefs and practices, both faiths share important values that can foster mutual understanding and respect.",
    hero: {
      label: "Religions",
      title: "Understanding Sikhism",
      lede: "Exploring Sikh traditions with respect and understanding",
      image: { src: "photo-1642355099716-a88a41a17887", alt: "A Sikh gurdwara" },
    },
    blocks: [
      {
        type: "prose",
        label: "Introduction",
        title: "Sikhism and Islam",
        body: [
          "While Sikhism and Islam have their own unique beliefs and practices, both faiths share important values that can foster mutual understanding and respect.",
        ],
      },
      {
        type: "columns",
        label: "Shared values",
        title: "Values we share",
        cols: 4,
        items: [
          { title: "Monotheism", body: "Both Sikhism and Islam believe in One Supreme Being and reject idol worship." },
          { title: "Social Justice", body: "Both faiths emphasize equality, social justice, and helping the less fortunate." },
          { title: "Community Service", body: "Both traditions value serving the community and practicing charity." },
          { title: "Moral Living", body: "Both religions stress the importance of living an ethical and moral life." },
        ],
      },
      {
        type: "cards",
        label: "Key topics",
        title: "Key topics",
        cols: 3,
        tone: "alt",
        items: [
          {
            title: "Understanding Sikhism",
            body: "Sikhism is a monotheistic religion founded by Guru Nanak Dev Ji in the Punjab region, emphasizing devotion to one God and service to humanity.",
            image: { src: "photo-1546688532-18292333f5a6", alt: "The Golden Temple in Amritsar" },
          },
          {
            title: "Historical Relations",
            body: "The history of Sikh-Muslim relations spans centuries, with periods of both cooperation and challenges, particularly in the Indian subcontinent.",
            image: { src: "photo-1733158175513-9427291425a8", alt: "Historic site in the Punjab region" },
          },
          {
            title: "Modern Dialogue",
            body: "Contemporary initiatives focus on building bridges between Sikh and Muslim communities through dialogue and mutual understanding.",
            image: { src: "photo-1652535281291-e818d4bcf5b9", alt: "People of different faiths in conversation" },
          },
        ],
      },
      {
        type: "columns",
        label: "Understanding",
        title: "Beliefs and bridges",
        cols: 2,
        items: [
          {
            title: "Core beliefs in Sikhism",
            list: [
              "Belief in One God (Waheguru)",
              "Equality of all human beings",
              "Service to humanity (Seva)",
              "Honest living and sharing",
            ],
          },
          {
            title: "Building bridges",
            body: "Ways to promote understanding between Sikh and Muslim communities:",
            list: ["Interfaith dialogue events", "Joint community service", "Cultural exchange programs"],
          },
        ],
      },
      {
        type: "quote",
        label: "Islamic perspective",
        title: "Islamic perspective on interfaith relations",
        quote:
          "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another.",
        cite: "Quran 49:13",
        body: "Islam encourages peaceful coexistence and mutual understanding while maintaining our respective beliefs and practices.",
      },
      {
        type: "columns",
        label: "Resources",
        title: "Learn and take part",
        cols: 2,
        tone: "alt",
        items: [
          {
            title: "Learn more",
            list: ["Comparative religious studies", "Historical research materials", "Cultural exchange resources"],
          },
          {
            title: "Get involved",
            list: ["Join interfaith dialogues", "Attend cultural events", "Support community initiatives"],
          },
        ],
      },
      contactCta("Want to join an interfaith dialogue? Get in touch."),
    ],
  },
];
