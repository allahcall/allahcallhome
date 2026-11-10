import type { Page } from "../types";

export const aboutPages: Page[] = [
  {
    slug: "about",
    title: "About Us",
    description:
      "Discover how AllahCall helps spread the message of Islam through Quran learning, Islamic education and counseling.",
    hero: {
      label: "About",
      title: "About us",
      lede: "Discover how we help spread the message of Islam.",
      image: { src: "/images/mosque-window.webp", alt: "Light through a mosque window" },
    },
    blocks: [
      {
        type: "prose",
        label: "Mission",
        title: "Mission statement",
        body: [
          "Our mission is to make Islamic knowledge accessible to everyone, providing a platform where individuals can learn and understand the teachings of Islam in a comprehensive and authentic manner.",
          "We strive to create an inclusive learning environment that promotes understanding, respect, and spiritual growth while maintaining the highest standards of Islamic scholarship.",
        ],
      },
      {
        type: "points",
        label: "Our commitment",
        title: "What we stand for",
        tone: "alt",
        items: [
          "Providing authentic Islamic education based on reliable sources",
          "Creating an inclusive and welcoming learning environment for all",
          "Supporting spiritual growth through knowledge and understanding",
        ],
      },
      {
        type: "columns",
        label: "Services",
        title: "Our services",
        cols: 3,
        items: [
          {
            title: "Quran Learning",
            body: "Learn Quran with proper Tajweed from qualified instructors through our online platform.",
            href: "/courses",
          },
          {
            title: "Islamic Education",
            body: "Access authentic Islamic knowledge through structured courses and expert guidance.",
            href: "/courses",
          },
          {
            title: "Islamic Counseling",
            body: "Get personal guidance and support from experienced Islamic scholars.",
            href: "/contact",
          },
        ],
      },
      {
        type: "stats",
        label: "In numbers",
        title: "The beauty of Islam",
        items: [
          { value: "5000+", label: "Students Worldwide" },
          { value: "100+", label: "Islamic Courses" },
          { value: "50+", label: "Expert Teachers" },
          { value: "24/7", label: "Support Available" },
        ],
      },
      {
        type: "people",
        label: "Team",
        title: "Our team",
        items: [
          {
            name: "Hafiz Muhammad Harris Suhaib",
            role: "Founder & CEO",
            image: { src: "/images/team/hafiz.jpg", alt: "Portrait of Hafiz Muhammad Harris Suhaib" },
          },
          {
            name: "Muhammad Zeeshan",
            role: "Marketing Manager",
            image: { src: "/images/team/zeeshan.jpg", alt: "Portrait of Muhammad Zeeshan" },
          },
        ],
      },
      {
        type: "cta",
        title: "Meet the leadership guiding AllahCall's mission.",
        actions: [
          { label: "Board of directors", href: "/board-of-directors" },
          { label: "Contact us", href: "/contact", variant: "secondary" },
        ],
      },
    ],
  },
  {
    slug: "our-work",
    title: "Our Work",
    description: "Making a difference through Islamic education and community service.",
    hero: {
      label: "About",
      title: "Our work",
      lede: "Making a difference through Islamic education and community service.",
      image: { src: "/images/gathering.webp", alt: "A community gathering at an AllahCall event" },
    },
    blocks: [
      {
        type: "stats",
        label: "Impact",
        title: "Our impact",
        items: [
          { value: "50,000+", label: "Global Dawah Impact", body: "People reached through our dawah programs worldwide" },
          { value: "5,000+", label: "New Muslims Support", body: "New Muslims guided and supported in their journey" },
          { value: "10,000+", label: "Islamic Education", body: "Students enrolled in our various Islamic courses" },
          { value: "100+", label: "Community Building", body: "Community events and programs organized annually" },
        ],
      },
      {
        type: "columns",
        label: "Projects",
        title: "Our projects",
        cols: 2,
        tone: "alt",
        items: [
          {
            title: "Youth Development",
            body: "Empowering Muslim youth through leadership and spiritual development programs.",
            list: [
              "Youth Mentorship Program",
              "Islamic Summer Camps",
              "Youth Leadership Training",
              "Sports & Recreation Activities",
            ],
          },
          {
            title: "Community Outreach",
            body: "Building bridges and fostering understanding between communities.",
            list: [
              "Interfaith Dialogues",
              "Open Mosque Days",
              "Community Service Projects",
              "Cultural Exchange Programs",
            ],
          },
          {
            title: "Educational Initiatives",
            body: "Providing quality Islamic education and resources.",
            list: [
              "Online Learning Platform",
              "Weekend Islamic School",
              "Adult Education Classes",
              "Teacher Training Programs",
            ],
          },
          {
            title: "Social Services",
            body: "Supporting the community through various social services.",
            list: ["Marriage Counseling", "New Muslim Support", "Family Services", "Youth Counseling"],
          },
        ],
      },
      {
        type: "columns",
        label: "Stories",
        title: "Impact stories",
        cols: 3,
        items: [
          {
            title: "Sarah, New Muslim · United Kingdom",
            body: "AllahCall's programs have transformed my understanding of Islam and helped me grow spiritually.",
          },
          {
            title: "Ahmad · United States",
            body: "The youth programs have given my children a strong Islamic foundation while keeping them engaged.",
          },
          {
            title: "Dr. James · Canada",
            body: "The interfaith dialogues have helped bridge gaps and build understanding in our community.",
          },
        ],
      },
      {
        type: "quote",
        label: "Making a difference",
        quote: "Whoever guides someone to goodness will have a reward similar to the one who does it.",
        cite: "Muslim",
        body: "Join us in our mission to spread the message of Islam and serve humanity.",
      },
      {
        type: "cta",
        title: "Get involved",
        body: "Support our work and be part of making a positive impact in the community.",
        actions: [
          { label: "Support our work", href: "/contact" },
          { label: "Volunteer with us", href: "/volunteers", variant: "secondary" },
        ],
      },
    ],
  },
  {
    slug: "our-services",
    title: "Our Services",
    description:
      "AllahCall provides a range of services to support Muslims in their journey of faith, learning, and community engagement.",
    hero: {
      label: "About",
      title: "Our services",
      lede: "Comprehensive resources and support for your Islamic journey.",
      image: { src: "photo-1521898284481-a5ec348cb555", alt: "A mosque, home to the services we offer" },
    },
    blocks: [
      {
        type: "columns",
        label: "Services",
        title: "Our services",
        lede: "AllahCall provides a range of services to support Muslims in their journey of faith, learning, and community engagement.",
        cols: 4,
        items: [
          {
            title: "Articles & Books",
            body: "Access a rich collection of Islamic literature, articles, and educational materials.",
            href: "/articles-books",
          },
          {
            title: "Muslim Revival",
            body: "Programs and resources to strengthen faith and reconnect with Islamic teachings.",
            href: "/muslim-revival",
          },
          {
            title: "Rejoining Muslim Ummah",
            body: "Support and guidance for those seeking to reconnect with the Muslim community.",
            href: "/rejoining-muslim-ummah",
          },
          {
            title: "Publish Your Work",
            body: "Platform for scholars and writers to share their Islamic knowledge and research.",
            href: "/publish-your-work",
          },
        ],
      },
      {
        type: "columns",
        label: "Features",
        title: "Service features",
        cols: 4,
        tone: "alt",
        items: [
          {
            title: "Authentic Content",
            body: "All materials are carefully reviewed by qualified scholars to ensure authenticity.",
          },
          { title: "Easy Access", body: "Resources available online and offline, accessible anytime, anywhere." },
          { title: "Community Support", body: "Connect with scholars and fellow Muslims for guidance and support." },
          {
            title: "Regular Updates",
            body: "New content and resources added regularly to support continuous learning.",
          },
        ],
      },
      {
        type: "quote",
        label: "Serving the Ummah",
        quote: "The best of people are those that bring most benefit to the rest of mankind.",
        cite: "Daraqutni",
        body: "Our services are designed to benefit the Muslim community and support the spread of authentic Islamic knowledge.",
      },
      {
        type: "cta",
        title: "Need more information?",
        body: "Contact us to learn more about our services or to discuss your specific needs.",
        actions: [
          { label: "Contact us", href: "/contact" },
          { label: "Browse resources", href: "/articles-books", variant: "secondary" },
        ],
      },
    ],
  },
  {
    slug: "board-of-directors",
    title: "Board of Directors",
    description:
      "Meet AllahCall's Board of Directors: leaders in Islamic scholarship, education and community service who guide our dawah mission.",
    hero: {
      label: "About",
      title: "Board of directors",
      image: { src: "/images/board.webp", alt: "AllahCall's Board of Directors" },
    },
    blocks: [
      {
        type: "prose",
        label: "Leadership",
        title: "Our visionary leadership",
        body: [
          "The distinguished members of our Board of Directors bring together centuries of combined experience in Islamic scholarship, education, and community service to guide AllahCall's sacred mission.",
        ],
      },
      {
        type: "people",
        label: "Board",
        title: "Members of the board",
        items: [
          {
            name: "Maulana Engr. Hafiz Muhammad Harris Suhaib",
            role: "Founder & CEO · Islamic scholar and electrical engineer",
            image: { src: "/images/team/hafiz.jpg", alt: "Portrait of Hafiz Muhammad Harris Suhaib" },
            bio: "Founder of AllahCall and co-founder of Savvy Engineer Pvt. Ltd. He studies Islamic theology, philosophy, comparative religion, logic and science, and teaches courses worldwide, including Islam and Rationality, Modern Ideologies and Islam, Philosophy of Science, and Philosophy and Islam, along with the Why Islam Is True workshop. He is the author of There Is a God, Reasoning with Atheist and The Rational Foundations of Faith.",
            highlights: [
              "200+ people have accepted Islam through his dialogues",
              "1,000+ hours of debate with non-believers and people of other faiths, and 10,000+ doubts answered",
              "Trained 300+ scholars and 500+ students",
              "30+ seminars across Pakistan, including Faisal Mosque, NUST, CUST, HITEC, Punjab University and Al-Ghazali University",
              "Up to 50 research papers published",
              "3 patents in engineering and 2 gold medals in business",
            ],
          },
          {
            name: "Mufti Saifullah Taunsvi",
            role: "Islamic scholar · Mufti · Teacher",
            image: { src: "/images/team/saifullah.jpg", alt: "Portrait of Mufti Saifullah Taunsvi" },
            bio: "Mufti at Jamia-tur-Rasheed, Karachi, with 18 years of work in fiqh and fatwa. He heads the Department of Fiqh al-Halal and teaches in the Takhassus fil-Hadith and Takhassus fil-Ifta programmes. He graduated in Dars-e-Nizami from Jamia Dar-ul-Uloom Karachi, completed specialisations in ifta, hadith and halal jurisprudence at Jamia-tur-Rasheed, and holds an M.A. in English from NUML. He is the author of Munazara ke Usool wa Aadab, on the principles and etiquette of scholarly debate.",
            highlights: [
              "400+ fatwas issued",
              "Head of the Department of Fiqh al-Halal, Jamia-tur-Rasheed",
              "Has lectured on Sunan Abi Dawud for 8 years",
              "Teaches Fiqh al-Halal to BS students, covering the rulings across the madhhabs",
              "Trained as a Halal Lead Auditor (OIC/SMIIC, GSO, MS 1500 and ISO 22000 standards)",
              "Hafiz of the Qur'an",
            ],
          },
          {
            name: "Muaz Bin Zia",
            role: "Islamic scholar · Islamic psychotherapy practitioner",
            image: { src: "/images/team/muaz.jpg", alt: "Portrait of Muaz Bin Zia" },
            bio: "Islamic scholar and psychology professional working where Islamic scholarship meets psychotherapy and mental health. He holds the Shahadah A'lamiyyah (Dars-e-Nizami), specialises in Islamic fiqh and research, and has studied psychology and, at postgraduate level, Islamic psychotherapy. His work brings the intellectual and spiritual heritage of Islam together with modern psychology to care for the mental health of Muslims. He founded the International Faculty for Educational & Psychological Studies (IFEPS), which works on education, Islamic psychology and mental health awareness.",
            highlights: [
              "Offers counselling and psychotherapy, with a focus on Muslim mental health and faith-sensitive care",
              "Researches and writes on bringing Islamic scholarship and modern psychology together",
              "Teaches Fiqh, Usul al-Fiqh, Arabic and Islamic studies, and leads curriculum development",
              "Runs sessions, workshops and training for scholars, teachers, students and the wider community",
              "Founder of IFEPS",
            ],
          },
          {
            name: "Muhammad Zeeshan",
            role: "Marketing Manager",
            image: { src: "/images/team/zeeshan.jpg", alt: "Portrait of Muhammad Zeeshan" },
            bio: "Dynamic marketing professional with a talent for digital strategy and community engagement. Zeeshan has successfully elevated AllahCall's presence and impact through innovative campaigns.",
            highlights: [
              "Launched successful digital campaigns for AllahCall",
              "Increased community engagement by 300% in one year",
              "Awarded 'Best Islamic Marketing Initiative' 2023",
            ],
          },
          {
            name: "Ustadh Yusuf Rahman",
            role: "Director of Education",
            image: { src: "photo-1623031251275-b5603cfada6b", alt: "Portrait of Ustadh Yusuf Rahman" },
            bio: "Dedicated specialist in Islamic education and curriculum development with over 15 years of teaching experience. Ustadh Yusuf has pioneered innovative digital Islamic learning solutions, empowering students of all ages to access authentic knowledge.",
            highlights: [
              "Developed award-winning online courses",
              "Trained over 500 Islamic educators",
              "Fluent in 4 languages",
            ],
          },
        ],
      },
      {
        type: "points",
        label: "Mission",
        title: "Our sacred mission",
        lede: "The Board of Directors at AllahCall is divinely inspired to fulfill these sacred responsibilities:",
        tone: "alt",
        items: [
          "Providing authentic Islamic education grounded in the Quran and Sunnah",
          "Supporting new Muslims with comprehensive guidance and mentorship",
          "Promoting global interfaith understanding and harmony",
          "Developing innovative digital Islamic learning solutions",
          "Ensuring financial sustainability through ethical practices",
          "Fostering community engagement and spiritual growth",
        ],
      },
      {
        type: "columns",
        label: "Vision",
        title: "Our vision",
        cols: 3,
        items: [
          {
            title: "Community Growth",
            body: "Fostering a strong, united Muslim community through education and support.",
          },
          { title: "Islamic Education", body: "Promoting authentic Islamic knowledge and understanding." },
          { title: "Social Impact", body: "Making a positive difference in society through Islamic values." },
        ],
      },
      {
        type: "cta",
        title: "Join us in our mission",
        body: "The Board of Directors invites you to contribute your talents and resources to this noble cause. Together, we can illuminate hearts with divine guidance.",
        actions: [
          { label: "Volunteer opportunities", href: "/volunteers" },
          { label: "Contact the board", href: "/contact", variant: "secondary" },
        ],
      },
    ],
  },
  {
    slug: "volunteers",
    title: "Volunteers",
    description:
      "Become part of our mission to spread authentic Islamic knowledge and support the Muslim community. Your time and skills can make a lasting impact.",
    hero: {
      label: "About",
      title: "Join our volunteer team",
      lede: "Become part of our mission to spread authentic Islamic knowledge and support the Muslim community. Your time and skills can make a lasting impact.",
      image: { src: "/images/volunteers.webp", alt: "Volunteers supporting community service" },
    },
    blocks: [
      {
        type: "columns",
        label: "Roles",
        title: "Make a difference",
        cols: 4,
        items: [
          {
            title: "Dawah Team Member",
            body: "Engage in meaningful conversations about Islam and answer questions from interested individuals.",
            listLabel: "Requirements",
            list: ["Basic knowledge of Islamic teachings", "Good communication skills", "Patience and empathy"],
          },
          {
            title: "Event Coordinator",
            body: "Help organize and manage Islamic events, workshops, and community gatherings.",
            listLabel: "Requirements",
            list: ["Organizational skills", "Team management experience", "Event planning knowledge"],
          },
          {
            title: "Content Creator",
            body: "Create engaging Islamic content for social media and website platforms.",
            listLabel: "Requirements",
            list: [
              "Writing or video production skills",
              "Understanding of Islamic principles",
              "Social media experience",
            ],
          },
          {
            title: "Educational Assistant",
            body: "Support Islamic education programs and help students in their learning journey.",
            listLabel: "Requirements",
            list: ["Teaching experience", "Knowledge of Islamic studies", "Mentoring skills"],
          },
        ],
      },
      {
        type: "columns",
        label: "Benefits",
        title: "Benefits of volunteering",
        cols: 3,
        tone: "alt",
        items: [
          { title: "Personal Growth", body: "Develop new skills and deepen your Islamic knowledge" },
          { title: "Community Building", body: "Connect with like-minded individuals and build lasting relationships" },
          { title: "Spiritual Rewards", body: "Earn blessings by serving the community and spreading Islamic knowledge" },
        ],
      },
      {
        type: "form",
        label: "Apply",
        form: "volunteer",
        title: "Apply to volunteer",
        lede: "Tell us a little about yourself, the role you'd like and why you want to volunteer with us.",
      },
    ],
  },
  {
    slug: "events",
    title: "Events & Activities",
    description:
      "Participate in our diverse range of events designed to educate, inspire, and bring the community together.",
    hero: {
      label: "About",
      title: "Events & activities",
      lede: "Participate in our diverse range of events designed to educate, inspire, and bring the community together.",
      image: { src: "/images/congregation.webp", alt: "A congregation gathered at an AllahCall event" },
    },
    blocks: [
      {
        type: "events",
        label: "Events",
        title: "Join our events",
        items: [
          {
            title: "Islamic Knowledge Conference",
            date: "2024-03-15",
            time: "10:00 AM - 5:00 PM",
            location: "Islamic Center, New York",
            body: "A day-long conference featuring renowned scholars discussing various aspects of Islamic knowledge and contemporary issues.",
            image: { src: "/images/gathering.webp", alt: "Islamic Knowledge Conference" },
            action: { label: "Register", href: "/contact" },
          },
          {
            title: "Quran Recitation Competition",
            date: "2024-04-05",
            time: "2:00 PM - 6:00 PM",
            location: "Community Hall, Chicago",
            body: "Annual Quran recitation competition for all age groups with exciting prizes, certificates, special guest appearances, and community-wide participation.",
            image: { src: "photo-1712249239061-7d4f49ec9d44", alt: "Quran Recitation Competition" },
            action: { label: "Register", href: "/contact" },
          },
          {
            title: "New Muslims Support Group",
            recurring: "Every Saturday",
            time: "3:00 PM - 5:00 PM",
            location: "Online",
            body: "Weekly support group for new Muslims to learn about Islam, share personal experiences, ask meaningful questions, and build a strong, supportive community.",
            image: { src: "photo-1712249237537-8c5a0420653b", alt: "New Muslims Support Group" },
            action: { label: "Register", href: "/contact" },
          },
          {
            title: "Interfaith Dialogue",
            date: "2024-02-10",
            location: "Community Center, Los Angeles",
            body: "A successful event bringing together people of different faiths to promote understanding and harmony.",
            image: { src: "photo-1627818653012-054f17eb0648", alt: "Interfaith Dialogue" },
          },
          {
            title: "Islamic Art Exhibition",
            date: "2024-01-20",
            location: "Art Gallery, Houston",
            body: "Showcasing beautiful Islamic calligraphy and artwork from local artists.",
            image: { src: "photo-1549128967-147ab17d5415", alt: "Islamic Art Exhibition" },
          },
        ],
      },
      {
        type: "form",
        label: "Stay updated",
        title: "Hear about upcoming events",
        lede: "Leave your email and we will let you know about upcoming events and activities.",
        form: "updates",
      },
      {
        type: "cta",
        title: "Want to help run our events?",
        actions: [
          { label: "Volunteer with us", href: "/volunteers" },
          { label: "Contact us", href: "/contact", variant: "secondary" },
        ],
      },
    ],
  },
  {
    slug: "gallery",
    title: "Our Gallery",
    description:
      "Explore our collection of images showcasing Islamic events, architecture, art, and community activities.",
    hero: {
      label: "About",
      title: "Our gallery",
      lede: "Explore our collection of images showcasing Islamic events, architecture, art, and community activities.",
      image: { src: "photo-1623439844752-524658b16ce6", alt: "Islamic architecture from our gallery" },
    },
    blocks: [
      {
        type: "gallery",
        label: "Gallery",
        title: "Visual journey",
        groups: [
          {
            title: "Events",
            items: [
              { src: "photo-1547119879-c379a507fd2a", alt: "Islamic Conference" },
              { src: "photo-1712249239061-7d4f49ec9d44", alt: "Quran Competition" },
              { src: "photo-1712249237537-8c5a0420653b", alt: "Community Gathering" },
              { src: "photo-1558617861-07ffd51a4782", alt: "Interfaith Dialogue" },
            ],
          },
          {
            title: "Islamic Architecture",
            items: [
              { src: "photo-1597329084427-64a6518d0445", alt: "Grand Mosque" },
              { src: "photo-1671882151764-65e08a0325ba", alt: "Islamic Center" },
              { src: "photo-1640774328301-cb95cdc3a8d6", alt: "Prayer Hall" },
              { src: "photo-1566213729219-bb86d09c4189", alt: "Islamic Design" },
            ],
          },
          {
            title: "Islamic Art",
            items: [
              { src: "photo-1685594425042-dbdcc7710da2", alt: "Calligraphy" },
              { src: "photo-1676607185227-4f0e70228d3f", alt: "Geometric Patterns" },
              { src: "photo-1624140931502-278f30d90a96", alt: "Islamic Design" },
              { src: "photo-1605469798293-4637e243844c", alt: "Traditional Art" },
            ],
          },
          {
            title: "Community Activities",
            items: [
              { src: "photo-1641569707854-c80945fb4719", alt: "Volunteer Work" },
              { src: "photo-1562709911-a355229de124", alt: "Charity Event" },
              { src: "photo-1660795591590-65c3bbbada48", alt: "Educational Program" },
              { src: "photo-1649822574475-b4a49f3d8496", alt: "Youth Activity" },
            ],
          },
        ],
      },
      {
        type: "cta",
        title: "Be part of the moments we share.",
        actions: [
          { label: "Upcoming events", href: "/events" },
          { label: "Volunteer with us", href: "/volunteers", variant: "secondary" },
        ],
      },
    ],
  },
  {
    slug: "contact",
    title: "Contact Us",
    description:
      "Our team is here to help. We can provide guidance, answer questions, and connect you with your local Muslim community.",
    hero: {
      label: "Contact",
      title: "Get in touch",
      lede: "Our team is here to help you. We can provide guidance, answer questions, and connect you with your local Muslim community.",
      image: { src: "/images/mosque-window.webp", alt: "Light through a mosque window" },
    },
    blocks: [
      {
        type: "form",
        label: "Message",
        title: "Send us a message",
        form: "contact",
      },
      {
        type: "faq",
        label: "Questions",
        title: "Frequently asked questions",
        items: [
          {
            q: "What is AllahCall's dawah mission?",
            a: "AllahCall is a platform dedicated to sharing the beautiful message of Islam through authentic knowledge and understanding. We provide resources, guidance, and support for both Muslims and those interested in learning about Islam.",
          },
          {
            q: "How can I learn about Islam?",
            a: "You can start by exploring our free resources, joining our online classes, or scheduling a one-on-one session with our qualified scholars. We offer various learning paths tailored to your level of understanding.",
          },
          {
            q: "Are your teachings authentic?",
            a: "Yes! All our content is based on authentic sources from the Quran and Sunnah, verified by qualified scholars. We ensure that all information provided is accurate and properly referenced.",
          },
          {
            q: "Can I ask questions about Islam?",
            a: "Absolutely! We encourage questions and open dialogue. You can ask questions during live sessions, through our community forum, or schedule a private consultation with our scholars.",
          },
          {
            q: "Do you offer support for new Muslims?",
            a: "Yes! We provide special support and guidance for new Muslims, including beginner courses, mentorship programs, and a welcoming community to help you on your journey.",
          },
          {
            q: "How can I support the dawah work?",
            a: "You can support our dawah work by sharing our content, volunteering, donating to our projects, or participating in our community events. Every contribution helps spread the message of Islam.",
          },
        ],
      },
    ],
  },
];
