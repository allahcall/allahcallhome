import type { Page } from "../types";
import { whatsappLink } from "@/lib/site";

const title = "Modern Ideologies and Islam";
const enrollment = {
  label: "Ask about enrollment on WhatsApp",
  href: whatsappLink(`Assalamu alaikum, I am looking for more information regarding the course Modern Ideologies and Islam.`),
};

export const modernIdeologies = {
  slug: "modern-ideologies-and-islam",
  title,
  description: "Explore 60+ topics in modern political and philosophical thought through an Islamic lens with Maulana Engineer Muhammad Harris Suhaib.",
  hero: {
    label: "Coming soon · Live on Zoom · Recordings provided",
    title,
    lede: "Course instructor: Maulana Engineer Muhammad Harris Suhaib",
    poster: {
      src: "/images/courses/modern-ideologies-and-islam-poster.webp",
      alt: "Modern Ideologies and Islam course poster featuring Maulana Engineer Muhammad Harris Suhaib and announcing 60+ topics through an Islamic lens",
    },
  },
  blocks: [
    {
      type: "gallery",
      title: "Modern Ideologies and Islam",
      groups: [
        {
          title: "Course poster",
          items: [
            {
              src: "/images/courses/modern-ideologies-and-islam-poster.webp",
              alt: "Modern Ideologies and Islam course poster featuring Maulana Engineer Muhammad Harris Suhaib",
            },
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Course overview",
      action: enrollment,
      body: [
        "Two people can both call for justice and disagree about what anyone is owed. They may be drawing on different ideas about equality, duty or the purpose of the state. This course starts with those differences and follows them into debates about government, wealth, family and public life.",
        "Across seven themes, you will study how modern political and philosophical traditions frame these questions and how Muslim thinkers have approached them through Shariah, consultation, social obligation and accountability. The full lecture series is planned to cover 60+ topics. The outline gives you a guide to the questions we expect to discuss.",
      ],
    },
    {
      type: "columns",
      cols: 3,
      items: [
        {
          title: "Who the course is for",
          body: "This course is for students of Islamic studies, politics and philosophy, and for readers who meet terms such as liberalism, secularism or postmodernism in everyday conversation and want to understand what they mean. We begin with political theory before turning to particular ideologies and contemporary debates.",
        },
        {
          title: "Live lectures and recordings",
          body: "Maulana Engineer Muhammad Harris Suhaib will teach the lectures live on Zoom. The lectures will be recorded, and enrolled students will receive access to the recordings so they can catch up on a missed class or revisit an argument at their own pace.",
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
      lede: "These seven themes describe the proposed syllabus. The order and depth of individual topics may vary as the lectures develop.",
      items: [
        {
          title: "The foundations of political theory",
          body: "Why study politics, and why do states exist? Examine liberty, equality, justice and utilitarianism. Use debates about citizenship, democracy and punishment to see what happens when these principles come into conflict.",
        },
        {
          title: "Major political ideologies",
          body: "Compare liberalism, conservatism, socialism and anarchism on the proper limits of state power. Examine nationalism, fascism, feminism, multiculturalism, ecology and fundamentalism, then consider how political traditions approach difference and how they explain or criticize political violence.",
        },
        {
          title: "Political systems and Islamic political thought",
          body: "Does Islam prescribe a political system? Explore sovereignty, law and Shariah, the state and the caliphate. Study shura (consultation), rulers’ accountability, rights and duties, and Islamic conceptions of justice. Draw on these debates to examine religion and the state, democracy, human rights and social justice.",
        },
        {
          title: "Islamic economic thought",
          body: "Study how Islamic economic thought approaches ownership, welfare and the distribution of wealth. Trace how zakat works in practice, consider the idea of a welfare state, and examine why riba matters to the Islamic economic order.",
        },
        {
          title: "Islamic social thought",
          body: "Examine the family as a social institution and the ummah as a community of mutual obligation. Consider how Islamic social thought addresses brotherhood, gender, and the rights of minority communities.",
        },
        {
          title: "Modern intellectual and philosophical debates",
          body: "Distinguish modernism from postmodernism and compare Muslim responses to each. Examine secularism, colonialism, postcolonial thought and globalization, asking how each has influenced the terms in which religion and society are discussed.",
        },
        {
          title: "Contemporary social and political debates",
          body: "Study contemporary political debates concerning LGBTQ people and examine how questions of sexuality and identity are discussed in Islamic thought. Practice distinguishing theological, ethical and political claims and representing differing positions accurately and respectfully.",
        },
      ],
    },
    {
      type: "points",
      title: "Course learning outcomes",
      lede: "By the end of the lectures, you should be able to:",
      items: [
        "Explain liberty, equality, justice and sovereignty in your own words, and show how two of these principles can point toward different answers to the same political question.",
        "Compare two modern ideologies on a shared issue, such as the limits of state authority, identifying the assumption that leads each to its conclusion.",
        "Use Shariah, shura and accountability to explain an argument about Islamic governance, and distinguish consultation from a claim about a particular form of government.",
        "Explain how zakat can affect the distribution of wealth and distinguish its purpose from the reasoning behind the prohibition of riba.",
        "Identify how Muslim thinkers frame questions about family, community or minority rights, and distinguish an ethical obligation from a claim about state policy.",
        "Analyze a contemporary debate by separating its historical context, factual claims and moral premises. Present a reasoned Islamic response that addresses a serious objection fairly.",
      ],
    },
    {
      type: "columns",
      cols: 2,
      title: "Program learning outcomes",
      lede: "These are the broader abilities this course helps you develop for further study, writing and discussion:",
      items: [
        {
          title: "Interpret Islamic thought in context",
          body: "Explain how a concept such as justice functions across political, economic and social questions, recognizing where Muslim interpretations differ.",
        },
        {
          title: "Read across intellectual traditions",
          body: "Reconstruct a position in terms its advocates would recognize and identify what evidence or reasoning would challenge it.",
        },
        {
          title: "Apply ethical reasoning to unfamiliar problems",
          body: "Use a relevant Islamic principle to examine a new public question, explain your judgment and acknowledge its limits.",
        },
        {
          title: "Communicate across disagreement",
          body: "Defend an interpretation in speech or writing, distinguish your judgment from the position you are describing, and respond to objections with precision and respect.",
        },
      ],
    },
    {
      type: "cta",
      title: "Interested in enrolling?",
      actions: [enrollment],
    },
  ],
} satisfies Page;
