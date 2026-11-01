import type { Page } from "./types";

/**
 * Published research papers co-authored by Muhammad Harris Suhaib. The full
 * papers stay with their journals and on Zenodo (open access, CC BY 4.0); this
 * site lists them and, for papers with a `summary`, adds a plain-language page
 * at /research/[slug]. Papers without one link straight to their DOI.
 */

export type Topic = "god" | "modern" | "quran" | "society";

export type Paper = {
  slug: string;
  /** Title as published. */
  title: string;
  topic: Topic;
  /** In the order printed on the paper. */
  authors: string[];
  journal?: string;
  /** Publication date (YYYY-MM-DD), or just the year when the paper gives no day. */
  date: string;
  /** Zenodo DOI, e.g. "10.5281/zenodo.20780438". */
  doi: string;
  /** One line for the research index. */
  blurb: string;
  /** Our own write-up for a general reader. */
  summary?: {
    /** Short title for the page hero and nav. */
    title: string;
    lede: string;
    body: string[];
    points: string[];
  };
};

export const topics: { id: Topic; label: string; title: string; lede: string }[] = [
  {
    id: "god",
    label: "God and belief",
    title: "Arguments for God",
    lede: "Classical and modern arguments for the existence and oneness of God, and the innate disposition to believe.",
  },
  {
    id: "modern",
    label: "Modern thought",
    title: "Atheism, science and meaning",
    lede: "Responses to atheism, scientism, humanism and nihilism, and how modern authors explain religion away.",
  },
  {
    id: "quran",
    label: "Qur'an and Sunnah",
    title: "Qur'an, prophets and scholarship",
    lede: "Lessons from short surahs, the stories of the prophets, comparative scripture and the Islamic sciences.",
  },
  {
    id: "society",
    label: "Society and rights",
    title: "Rights, justice and society",
    lede: "Islamic perspectives on human rights, gender, family, slavery, free speech and the first Islamic polity.",
  },
];

const suhaib = "Muhammad Harris Suhaib";
const afzal = "Muhammad Afzal";
const aarifi = "Muhammad Ismail Aarifi";
const aminuddin = "M. Aminuddin";
const awan = "Talib Ali Awan";

export const papers: Paper[] = [
  // God and belief
  {
    slug: "craig-kalam-and-classical-kalam",
    title:
      "Craig's Kalam Cosmological Argument and the Classical Kalam of the Mutakallimun: A Comparative Philosophical and Metaphysical Study",
    topic: "god",
    authors: [suhaib, afzal, aminuddin, awan],
    journal: "Journal of Social Signs Review",
    date: "2025-09-22",
    doi: "10.5281/zenodo.18297623",
    blurb: "Why the classical Muslim kalam argument proves more than William Lane Craig's popular version.",
    summary: {
      title: "Craig's Kalam and the classical Kalam",
      lede: "The modern Kalam argument stops at “the universe has a cause”. The original argument of the Muslim theologians goes on to show who that cause is.",
      body: [
        "The Kalam cosmological argument is one of the best-known arguments for God today, mostly through the work of the Christian philosopher William Lane Craig. His version is short: whatever begins to exist has a cause, the universe began to exist, so the universe has a cause. The argument itself, though, was developed centuries earlier by Muslim theologians, the mutakallimun, such as al-Juwayni, al-Ghazali and Fakhr al-Din al-Razi.",
        "This paper rebuilds the classical argument from its sources and compares the two. Craig's syllogism only concludes that some cause exists. To show that the cause is personal and one, he has to add separate arguments afterwards. The classical version builds these steps into the argument itself: the cause of a universe that began in time must be eternal and necessary; it must act by will, because an eternal cause that acted automatically would have produced an eternal effect; and there can be only one such being, because more than one would make each of them composite and dependent.",
        "The paper also traces how Muslim scholars thought about infinity. Early theologians rejected infinity outright. Later, Imam al-Taftazani distinguished infinities that exist only in the mind, as in mathematics, from infinities of real things in the world, and held that only the second kind is impossible. The authors connect this distinction to Cantor's set theory and to Hilbert's Hotel, the thought experiment Craig himself uses against an actual infinite.",
      ],
      points: [
        "Craig's syllogism ends at a cause; the classical argument ends at a unique, necessary being who acts by will.",
        "The classical argument grounds causation in reason (nothing comes from nothing), not only in observation.",
        "A cause that is eternal but produces a world with a beginning must be acting by choice.",
        "Al-Taftazani's split between abstract and real infinity anticipates the modern debate over Cantor and Hilbert's Hotel.",
      ],
    },
  },
  {
    slug: "naturalness-of-religious-belief",
    title:
      "The Naturalness of Religious Belief and the Non-Default Status of Atheism: Anthropological, Cognitive, and Historical Evidence",
    topic: "god",
    authors: [suhaib, "Zainab Akmal", "Haroon Saif"],
    journal: "Policy Journal of Social Science Review",
    date: "2026-02-25",
    doi: "10.5281/zenodo.18809220",
    blurb: "Evidence from anthropology and cognitive science that people are not “born atheists”.",
    summary: {
      title: "Are we born atheists?",
      lede: "A popular claim says everyone is born an atheist and only learns religion later. The research on children, cultures and history points the other way.",
      body: [
        "It is often said online that every child is born an atheist and that belief in God comes only from upbringing or indoctrination. This paper tests that claim against three bodies of evidence: anthropology, the cognitive science of religion, and history.",
        "Anthropologists have found religion in every known human society. The old idea that religion evolved in a straight line, from “primitive” animism up to modern science, has been dropped by the field. What remains is the observation that sacred rituals, sacred time and belief in unseen agents appear everywhere, in many different forms.",
        "Cognitive scientists such as Justin Barrett, Pascal Boyer and Deborah Kelemen have studied how children think. Young children readily see purpose in nature, assume that someone made the world, and imagine minds that know more than any human. Many non-religious adults show the same instincts when they have to answer quickly. Large research projects at Oxford concluded that the pull towards religion is part of ordinary human thinking, and that atheism is a considered position people arrive at rather than a starting point.",
        "History tells a similar story. Religion has lasted across every era and often revives after periods of decline, while sustained atheism has appeared only under particular social and intellectual conditions. The authors conclude that belief is the more natural human state. For Muslim readers this fits the Qur'anic idea of fitrah, the innate disposition to recognise the Creator.",
      ],
      points: [
        "Religion appears in every known human society, in many forms.",
        "Children naturally see design and purpose in the world and imagine all-knowing minds.",
        "Researchers describe atheism as a learned position rather than the human default.",
        "Lasting atheism has needed specific social conditions; religion tends to return.",
      ],
    },
  },
  {
    slug: "cumulative-case-for-god",
    title:
      "A Cumulative Case for the Existence of God (Allah): Integrating Cosmological, Contingency, Design, and Oneness Arguments",
    topic: "god",
    authors: [suhaib, "Haroon Saif", "Gulam Akbar"],
    journal: "Journal of Social Signs Review",
    date: "2025-11-24",
    doi: "10.5281/zenodo.17908306",
    blurb: "How the cosmological, contingency, design and oneness arguments support one another.",
    summary: {
      title: "Four arguments, one God",
      lede: "No single argument has to carry the whole weight. The paper combines four classical arguments to show that one personal, necessary being explains the universe.",
      body: [
        "Debates about God often pit one argument against one objection. A cumulative case works differently: several independent lines of reasoning, each answering a different question, are combined so that together they reach further than any one of them alone. This paper builds such a case for God (Allah) in three steps: that at least one necessary being exists, that this being is personal, and that there can be only one.",
        "The first step draws on the Kalam cosmological argument, in the form made popular by William Lane Craig, and on the contingency argument. A contingent thing is one that could have failed to exist, so it needs something outside itself to explain why it exists. Ibn Sina (Avicenna), Aquinas and Leibniz each argued that such dependent things must ultimately rest on a necessary being, one that exists by its own nature (wajib al-wujud). Modern cosmology, which dates the beginning of the universe to about 13.8 billion years ago, is cited in support.",
        "The second step asks what kind of being this is. Because the cause of space, time and matter cannot itself be part of the physical world, the paper argues that it must be an agent who chooses, not a blind force: in Islamic theology, al-fa'il al-mukhtar. The design argument adds intelligence. The paper points to the fine-tuning of physics, such as the cosmological constant and the strong nuclear force, which must fall within very narrow ranges for stars and life to exist. The third step is oneness. If God is simple, without parts, two such beings could not be told apart; two perfect beings would require one to lack something the other has; and two all-powerful wills could block each other.",
        "The authors conclude that the arguments converge on exactly one personal, necessary being, whom they identify with Allah, while noting that critics offer alternatives such as the multiverse. They close with the Qur'an's invitation to find “signs for those of understanding” in the creation of the heavens and the earth (3:190).",
      ],
      points: [
        "The Kalam and contingency arguments point to at least one necessary, uncaused being.",
        "A cause outside space and time must act by choice, not as a blind force.",
        "Fine-tuning in physics suggests that this cause also has knowledge and purpose.",
        "Simplicity, perfection and the clash of two all-powerful wills rule out more than one God.",
      ],
    },
  },
  {
    slug: "design-argument-in-classical-theism",
    title: "The Design Argument in Classical Theism: Philosophical, Theological, and Islamic Perspectives",
    topic: "god",
    authors: [suhaib, "Bisma Tariq", "Farheen Iqbal"],
    journal: "Journal for Current Sign",
    date: "2025-12-12",
    doi: "10.5281/zenodo.17908437",
    blurb: "The argument from design in philosophy, theology and the Islamic tradition.",
    summary: {
      title: "What the design argument can prove",
      lede: "Order and fine-tuning in nature point to an intelligent Creator. The paper argues this is real evidence, but on its own it cannot show that God is one, necessary and perfect.",
      body: [
        "The design argument starts from something everyone can see: nature is ordered, complex and seemingly purposeful. Its classic image comes from William Paley: if you found a watch on the ground you would conclude that someone made it, and an eye is far more intricate than a watch. This paper asks how much that kind of argument can actually prove.",
        "The authors set out four forms of the argument: Paley's analogy; fine-tuning, the observation that the constants of physics fall within the narrow ranges that allow stars and life; biological design, as argued by Michael Behe and William Dembski; and inference to the best explanation, which asks which hypothesis best accounts for the evidence. They then weigh the main objections. David Hume said the universe is too unlike a watch to support a firm analogy, and that order could point to several limited designers. Darwin's theory of natural selection explains much biological complexity. The multiverse and the anthropic principle (we could only ever observe a universe that allows us to exist) offer other explanations of fine-tuning. In reply, Richard Swinburne argues that each piece of evidence adds to the probability of God, John Leslie compares fine-tuning to surviving a firing squad, and many theists see evolution as a means God uses rather than a rival to Him.",
        "On the Islamic side, the paper links the argument to the Qur'an's language of ayat, signs in creation, citing verses such as 2:164 and 67:3. Al-Ghazali wrote of the design of the eye and the regular orbits of the planets, and Ibn Rushd called the order of nature an argument from providence (dalil al-'inayah). But classical scholars treated design as support for the cosmological proof, not a replacement for it.",
        "The paper's central conclusion is about limits. Design alone cannot show that the designer is one (tawhid), that He exists necessarily, or that He has every divine attribute, and its evidence could one day be explained in other ways. Other arguments and revelation are needed. Its real value, the authors conclude, is as one strand in a cumulative case for God.",
      ],
      points: [
        "Design arguments take four main forms: analogy, fine-tuning, biological design and best explanation.",
        "Hume, Darwin and multiverse theories pose real challenges, and theists have replies to each.",
        "On its own, design cannot prove that God is one, necessary or perfectly good.",
        "Classical Muslim scholars used design to support the cosmological proof, not to replace it.",
      ],
    },
  },
  {
    slug: "critiquing-intelligent-design",
    title: "Critiquing Intelligent Design Without Rejecting Qurʾānic Design",
    topic: "god",
    authors: ["Ifra Javed", afzal, suhaib],
    journal: "Journal for Current Sign",
    date: "2025",
    doi: "10.5281/zenodo.23423993",
    blurb: "Why criticising the modern Intelligent Design movement does not weaken the Qur'an's view of purposeful creation.",
    summary: {
      title: "Criticising ID without denying design",
      lede: "Some assume that criticising Intelligent Design means denying that God designed the world. The paper argues these are different claims, and the Qur'anic one does not depend on ID.",
      body: [
        "In some Muslim discussions, criticising the modern Intelligent Design (ID) movement is treated as if it were the same as denying that God created the world, or that creation is full of signs. This paper argues that this does not follow. ID is one specific modern argument; the Qur'an's teaching about purposeful creation is a much broader claim.",
        "ID, associated with Michael Behe's idea of “irreducible complexity”, reasons from selected biological structures that seem hard to explain by gradual evolution to an intelligent cause. The paper points out two limits. Even if that inference were granted, it would not show that the designer is God: one, eternal, all-powerful and the creator of everything. And because it depends on what science cannot yet explain, it runs into the “God of the gaps” problem: when a natural explanation is found, the argument loses its force.",
        "The Qur'an's approach is different. It presents the heavens and the earth, the alternation of night and day, rain, lightning and mountains as signs to reflect on (3:190–191, 30:24, 31:10, 88:17–20), and they remain signs even when science explains how they work. Drawing on kalam, the classical Islamic tradition of rational theology, and on Ibn Sina's distinction between what is necessary and what is contingent, the paper argues that everything that exists contingently depends on God: simple things and complex ones, natural laws and miracles alike. A cell is not more created because it is complicated, and a law of physics is not less created because it is regular. Science asks how things happen within nature; metaphysics asks why a dependent natural order exists at all. Accepting evolution as a scientific account of biological change, the authors note, does not by itself prove that nature is all there is.",
        "The authors conclude that ID can be judged on its merits, and well-supported science accepted, without weakening the Qur'anic view of purposeful creation. They are careful about the limits of their claim: questions about Adam, human uniqueness and particular verses need separate study.",
      ],
      points: [
        "ID argues from particular biological puzzles; the Qur'an presents all of creation as signs.",
        "Even a successful ID argument would not show that the designer is God.",
        "Basing faith on gaps in science leaves it exposed whenever science advances.",
        "On the kalam view, everything contingent depends on God, whether science explains it or not.",
      ],
    },
  },
  {
    slug: "ontological-arguments",
    title: "Ontological Arguments in Classical and Contemporary Philosophy: A Comprehensive Philosophical Review",
    topic: "god",
    authors: [suhaib, "Shiza Fatima", "Hazrat Ali"],
    journal: "International Journal of Islamic Studies & Culture",
    date: "2025",
    doi: "10.5281/zenodo.18201156",
    blurb: "The ontological argument from Anselm and Descartes to Plantinga, and the main objections to it.",
    summary: {
      title: "Can God be proven by reason alone?",
      lede: "The ontological argument tries to prove God from the very idea of God. The paper finds every version logically valid, but each rests on a premise that can be reasonably disputed.",
      body: [
        "Most arguments for God start from the world: its beginning, its order, its dependence. The ontological argument starts from the idea of God alone. In the 11th century Anselm of Canterbury defined God as “that than which nothing greater can be conceived” and argued that such a being must exist in reality, since a being that existed only in the mind would not be the greatest conceivable.",
        "The paper traces the argument and its critics across nearly a thousand years. Gaunilo, a monk of Anselm's own time, replied that the same reasoning could prove a perfect island. Aquinas objected that people do not all share Anselm's concept of God. Descartes restated the argument: existence belongs to a supremely perfect being as surely as angles adding up to 180 degrees belong to a triangle. Kant's reply, that existence is not a property added to a thing's description, was long taken as decisive. In 1974 Alvin Plantinga revived the argument using the logic of possible worlds: if it is even possible that a maximally great being exists, then it exists necessarily. Critics answer that one can just as easily assume it is possible that no such being exists, and reach the opposite conclusion.",
        "The paper also turns to Islamic philosophy. Ibn Sina (Avicenna) argued from contingent things, things that could have not existed, to a Necessary Existent (wajib al-wujud), and the paper notes that this proof became a cornerstone of later Islamic thought. Mulla Sadra, a 17th-century Persian philosopher, argued from the nature of existence itself, treating it as one reality in degrees with God at its summit. The authors explain that this rests on ideas close to wahdat al-wujud, the “unity of existence”, which Sunni scholars such as Ibn Taymiyyah and Ahmad Sirhindi opposed for blurring the line between Creator and creation, so Sadra's proof was not accepted in Sunni theology.",
        "The authors conclude that no ontological argument is a knock-down proof, since each depends on a premise a sceptic can reject. Its lasting value, they argue, lies in clarifying what God would be: not one being among others, but a necessary being than whom none is greater.",
      ],
      points: [
        "Anselm's, Descartes' and Plantinga's arguments are logically valid, but each rests on a disputed premise.",
        "Kant's objection that existence is not a property remains the classic reply to the older versions.",
        "Plantinga's version turns the debate into whether God's existence is possible at all.",
        "Ibn Sina's necessary-being proof shaped Islamic thought; Mulla Sadra's was not accepted by Sunni theologians.",
      ],
    },
  },
  {
    slug: "oneness-of-god-in-islamic-theology",
    title: "The Oneness of God in Islamic Theology: Qur'anic Foundations and Classical Rational Arguments",
    topic: "god",
    authors: [suhaib, "Bisma Tariq", "Hazrat Ali"],
    journal: "Annual Methodological Archive Research Review",
    date: "2025",
    doi: "10.5281/zenodo.18194272",
    blurb: "Tawhid in the Qur'an and the rational proofs of Divine Oneness given by classical Muslim scholars.",
    summary: {
      title: "Why there can be only one God",
      lede: "The Qur'an declares that God is one and also gives reasons. Classical Muslim scholars built those reasons into rational proofs that two gods are impossible.",
      body: [
        "Tawhid, the oneness of God, is the heart of Islamic belief. This paper argues that the Qur'an does not only proclaim it but points to reasons for it, and that classical Muslim philosophers and theologians turned those reasons into careful rational arguments.",
        "The starting point is the Qur'an: “Had there been within them [the heavens and the earth] other gods besides Allah, they both would have been ruined” (21:22). Another verse, 23:91, says that each god would have taken away what he created and some would have tried to overcome others. Kalam theologians, who defended belief through rational argument, developed this into the proof from mutual hindrance (burhan al-tamanu'). Al-Juwayni and al-Ghazali asked what would happen if two all-powerful gods willed opposite things, one wanting an object to move and the other wanting it to stay still. Both wills cannot be carried out; if neither is, both are powerless; if only one is, the other is not truly God. Fakhr al-Din al-Razi added that even two gods who always agreed would each depend on the other's agreement.",
        "The paper sets out further arguments. Ibn Sina (Avicenna) reasoned from contingent things, which could have failed to exist, to a Necessary Existent, and argued that two necessary beings would have to differ in some way, which would limit them. The paper links this to al-Samad in Surah al-Ikhlas (112:2), the Self-Sufficient on whom all depend. Maturidi and Ash'ari scholars argued that God has no parts, since anything made of parts depends on them. A redundancy argument asks what work a second god would do if one is all-powerful. The unified order of the cosmos, one set of laws from galaxies to atoms, is read as the work of one will. The paper also outlines Mulla Sadra's view of the unity of existence, noting that it has been widely rejected by Sunni theologians.",
        "The authors conclude that revelation and reason converge: whether one starts from the order of nature, from logic or from metaphysics, the answer is the same. They add that modern philosophers asking whether there could be more than one almighty being have reached conclusions consistent with these classical proofs.",
      ],
      points: [
        "The Qur'an argues that rival gods would bring ruin to the heavens and the earth.",
        "Two all-powerful wills could conflict, so at least one would not truly be all-powerful.",
        "A necessary, self-sufficient being cannot have parts, rivals or equals.",
        "Revelation and classical reason, the paper argues, arrive at the same conclusion: God is one.",
      ],
    },
  },
  {
    slug: "ghazali-infinite-regress",
    title: "Al-Ghazali and the Impossibility of Infinite Regress: A Rational Proof of God's Existence",
    topic: "god",
    authors: [suhaib, "Shiza Fatima", "Muhammad Aslam"],
    journal: "Al-Raqīm",
    date: "2025-10-04",
    doi: "10.5281/zenodo.23093773",
    blurb: "Al-Ghazali's case that the universe cannot have an endless past, and so must have a beginning.",
    summary: {
      title: "Can the past go back forever?",
      lede: "Al-Ghazali argued that an endless chain of past events is impossible, so the universe must have begun. The paper finds that modern mathematics and cosmology add weight to his claim.",
      body: [
        "Has the universe always existed, or did it begin? In The Incoherence of the Philosophers (Tahafut al-Falasifa), al-Ghazali argued that it must have begun, because an actual infinite, a real and completed infinite number of things, cannot exist. If the past had no beginning, an infinite series of events would already have been completed to reach today, which he held to be impossible. For al-Ghazali that beginning pointed to God, who creates by choice; the paper cites the verse “When He decrees a matter, He only says to it, ‘Be,’ and it is” (2:117).",
        "Al-Ghazali illustrated the problem with thought experiments. Imagine two spheres, one turning once a day and one once a year: over an infinite past both would have made infinitely many turns, even though one turns far faster. A chain with no first link could never hang. The paper connects these to Hilbert's Hotel, a modern puzzle in which a hotel with infinitely many rooms, all full, can still take in new guests. Such infinities work in mathematics, the authors note, but lead to absurdities when applied to real events.",
        "The paper weighs three classic objections. Ibn Rushd (Averroes) held that the world could be eternal and still depend on God, as light depends on the sun; the authors reply that this still requires an infinite past to have been crossed, and makes creation automatic rather than willed. David Hume doubted that cause and effect apply to the universe as a whole, and Immanuel Kant held that such reasoning goes beyond any possible experience; the authors answer that modern cosmology does study the universe as a whole. They then turn to science: the expansion of the universe; the Borde–Guth–Vilenkin theorem, which shows that a universe that has on average been expanding cannot be infinitely old; the second law of thermodynamics; and measurements giving the universe an age of about 13.8 billion years.",
        "The authors stop short of calling this a strict proof of God. They conclude that it makes a strong case that the universe is not eternal, and that its beginning points to a necessary cause beyond it.",
      ],
      points: [
        "Al-Ghazali held that a real, completed infinite series of past events cannot exist.",
        "Puzzles like Hilbert's Hotel show infinities breaking down when applied to real things.",
        "Ibn Rushd, Hume and Kant raised serious objections, which the paper answers in turn.",
        "Cosmic expansion, thermodynamics and the universe's measured age all point to a finite past.",
      ],
    },
  },
  {
    slug: "fitrah-beyond-arguments",
    title: "Beyond Arguments: Fitrah as a Pre-Discursive Awareness of the Divine",
    topic: "god",
    authors: [suhaib, "Muhammad Qasim Majeed", aminuddin, awan],
    journal: "Policy Journal of Social Science Review",
    date: "2025-11-08",
    doi: "10.5281/zenodo.17559521",
    blurb: "Fitrah, the God-given disposition to believe, as a basis for faith that does not depend on argument.",
    summary: {
      title: "Knowing God before any argument",
      lede: "Must belief in God rest on philosophical proofs? This paper argues that fitrah, an inborn awareness of the Creator, gives people a rational basis for belief even without them.",
      body: [
        "Belief in God is often defended with formal proofs: the universe needs a cause, the order of nature points to a designer. Yet most believers never study these arguments, and the Qur'an speaks of something more basic. It calls it fitrah, the natural disposition placed in every person: “the fitrah of Allah upon which He has created [all] people” (30:30). The paper asks whether this inborn awareness can count, on its own, as a reasonable ground for faith.",
        "The authors begin with scripture: the primordial covenant in which the children of Adam answer “Yes, we testify” to their Lord (7:172), and the hadith in Bukhari and Muslim that every child is born upon fitrah and is then made a Jew, a Christian or a Magian by their parents. They then turn to classical scholars. Ibn Taymiyya held that knowledge of the Creator is innate and necessary, not reached by syllogism, and that without this readiness in the heart no argument could work at all. Al-Ghazali treated fitrah as one faculty alongside the senses and reason; al-Taftazani said children are born with sound natures that would choose knowledge over denial; Shah Waliullah described it as a divine imprint guiding people to God and to moral truth.",
        "The paper compares fitrah with the Christian philosopher Alvin Plantinga's sensus divinitatis, a God-given faculty that produces belief in God. Plantinga argues that such belief can be “properly basic”: rational without argument, as trust in memory or in other minds is, unless something defeats it. The authors also draw on cognitive science: Deborah Kelemen's studies of children who see purpose in nature, a study in which Finnish atheists fell back on design explanations when their minds were under load, Olivera Petrovich's work with preschoolers, and an Oxford project led by Justin Barrett. They answer the objections that the instinct is cultural, an evolutionary by-product or circular, arguing that explaining how a faculty arose does not show that it is unreliable.",
        "The authors conclude that fitrah yields rational, warranted belief when it is working properly and nothing undermines it. Arguments still matter: they defend and deepen faith, and they help people whose fitrah has been clouded by sin, neglect or upbringing. But on this view the first awareness of God comes from within, and arguments build on it rather than create it.",
      ],
      points: [
        "The Qur'an and hadith describe every person as born with a natural awareness of their Creator.",
        "Ibn Taymiyya held that knowing God is innate and does not depend on formal proofs.",
        "Like Plantinga's sensus divinitatis, fitrah can make belief rational without argument, unless something defeats it.",
        "Studies of children and adults suggest people naturally see purpose and design in the world.",
      ],
    },
  },

  // Modern thought
  {
    slug: "quranic-response-to-nihilism",
    title: "Created Without Purpose? A Qur'anic Response to Nihilism and the Modern Crisis of Meaning",
    topic: "modern",
    authors: [afzal, suhaib, "Ifra Javed"],
    journal: "Annual Methodological Archive Research Review",
    date: "2026-06-21",
    doi: "10.5281/zenodo.20780438",
    blurb: "How the Qur'an answers the modern claim that life has no ultimate meaning.",
    summary: {
      title: "Created without purpose?",
      lede: "Nihilism says life has no final meaning and death erases it. The Qur'an answers that we were not created in vain, and explains why.",
      body: [
        "Nihilism is the view that human life has no ultimate meaning, that moral values have no real foundation, and that death cancels whatever significance a life seemed to have. It has grown as belief in God has weakened and as more people come to see human life as a brief biological accident.",
        "This paper reads the modern crisis of meaning alongside Western thinkers who wrestled with it: Nietzsche, who announced the “death of God” and feared what would follow; Camus, who called life absurd and urged people to rebel against it; Sartre, who said we must invent our own meaning; and Viktor Frankl, who survived the Nazi camps and argued that people can bear almost anything if they have a reason to live. These thinkers describe the problem well, the authors argue, but none of them can say why life should matter in the end.",
        "The Qur'an addresses the question directly: “Did you think We had created you in vain, and that you would not be brought back to Us?” (23:115). Read together with other verses, it gives a complete answer. People were created to worship Allah (51:56). Life and death are a test of who does best (67:2). The materialist claim that “nothing destroys us but time” is answered (45:24). And Surah al-‘Asr names the way out of loss: faith, good deeds, and urging one another to truth and to patience (103:1–3).",
        "The authors conclude that the Qur'an does more than declare that life has meaning. It explains where that meaning comes from: a Creator, a moral test, and a return to Him in which every life is accounted for.",
      ],
      points: [
        "Nihilism grows where belief in God and in a final accountability fades.",
        "Nietzsche, Camus, Sartre and Frankl diagnose the crisis but cannot ground meaning beyond ourselves.",
        "The Qur'an ties meaning to creation, worship, moral testing and the return to Allah.",
        "Surah al-‘Asr sets out a practical path: faith, righteous action, truth and patience.",
      ],
    },
  },
  {
    slug: "harari-sapiens-and-religion",
    title:
      "From Social Function to Ontological Conclusion: Reassessing Yuval Noah Harari's Account of Religion in Sapiens",
    topic: "modern",
    authors: [aarifi, suhaib],
    journal: "Policy Journal of Social Science Review",
    date: "2026-03-24",
    doi: "10.5281/zenodo.21916930",
    blurb: "Where the bestseller Sapiens goes too far in explaining religion as an invented story.",
    summary: {
      title: "Harari's Sapiens and religion",
      lede: "Sapiens says people invented gods so large societies could cooperate. Religion may help people cooperate, but that alone does not show it was invented, or that it is false.",
      body: [
        "Yuval Noah Harari's bestseller Sapiens has shaped how millions of readers think about religion. In his telling, once farming led to cities and empires, people “invented stories about great gods” to bind strangers together. He also presents belief in one God as something that grew out of belief in many gods, and says biology leaves only a blind evolutionary process with no Creator and no purpose.",
        "This paper agrees that religion can strengthen shared morals, identity and cooperation. Its objection is that Harari moves too quickly between three different kinds of claim. Saying what religion does in a society is one claim. Saying how religion began is a second, which needs historical evidence. Saying whether God exists is a third, which needs philosophical argument. Evidence for the first does not settle the second, and neither settles the third.",
        "The authors draw on anthropology to make the point. Franz Boas and E. E. Evans-Pritchard warned against grand stories of how religion “must have” started, and Clifford Geertz showed that religion is a whole way of seeing reality, not a tool someone built for a purpose. Language and family structures help people cooperate too, but nobody thinks they were consciously invented for that. On monotheism, the authors argue that a few historical cases do not make a universal law. On science, they distinguish studying the world without reference to God, which is how science works, from concluding that there is no God, which science cannot show.",
        "Their conclusion is that Sapiens offers a provocative way of looking at religion, not a settled finding of history, anthropology or philosophy.",
      ],
      points: [
        "Showing what religion does for a society is different from showing how it began.",
        "Neither of those settles whether religious belief is true.",
        "A few cases of monotheism emerging from polytheism do not make it a universal rule.",
        "Science can study religion without assuming God, but it cannot prove there is no God.",
      ],
    },
  },
  {
    slug: "re-evaluating-scientism",
    title:
      "Re-Evaluating Scientism: Verificationism, Falsificationism and the Epistemic Status of Religious Discourse",
    topic: "modern",
    authors: [suhaib, "Zainab Akmal", "Farheen Iqbal"],
    journal: "Pakistan Journal of Social Sciences Review",
    date: "2025",
    doi: "10.5281/zenodo.18194325",
    blurb: "Why the claim that science is the only route to knowledge cannot be proven by science itself.",
    summary: {
      title: "Is science the only way to know?",
      lede: "Scientism says only science gives real knowledge. The paper argues that this claim fails its own test, and that ethics, history and theology have their own sound ways of reasoning.",
      body: [
        "Many public voices hold that science is the only reliable route to knowledge: if a claim cannot be tested by experiment, it is either false or meaningless. Philosophers call this view scientism. It is different from science itself, which is a method for studying the natural world and is always open to revision. Scientism is a philosophical claim about all knowledge, and it has often been used to dismiss belief in God as superstition.",
        "The paper examines two ideas that gave scientism its force. The first is verificationism, the view of A. J. Ayer, Rudolf Carnap and the logical positivists that a sentence means something only if it can be checked by experience or is true by definition. On this test, “God exists” was declared meaningless. The authors point out the problem: the verification principle can neither be checked by experience nor is it true by definition, so by its own rule it is meaningless. It would also rule out moral statements, claims about the past, and even general scientific laws, which can never be checked case by case. By the 1960s the theory was widely regarded as untenable.",
        "The second is Karl Popper's falsificationism: a theory is scientific only if some observation could prove it wrong. Popper meant this to separate science from other fields, not to decide what is meaningful or rational, and he accepted that untestable metaphysical claims can have meaning. The paper adds the Duhem–Quine point that a failed test can be blamed on background assumptions, and Thomas Kuhn's observation that scientists rarely drop a theory after one failed prediction. It then sets out alternatives: Alvin Plantinga's case that belief in God can be rational without being inferred from other beliefs, William Alston's view that experience of God can justify belief much as sense perception does, Wittgenstein's idea that words gain meaning from their use within a way of life, and the critical realism of Ian Barbour and Nancey Murphy.",
        "The authors conclude that knowledge is plural. Science remains the best tool for studying nature, though it rests on assumptions it cannot test, such as the uniformity of nature. History, law, ethics and religion each use methods suited to their questions, and questions of meaning, value and ultimate reality are not settled by measurement alone.",
      ],
      points: [
        "Scientism is a philosophical claim about knowledge, not a finding of science.",
        "The verification principle fails its own test, so by its own standard it is meaningless.",
        "Popper's falsifiability separates science from other fields; it does not make other claims irrational.",
        "The authors argue for several valid ways of knowing, each suited to its own kind of question.",
      ],
    },
  },
  {
    slug: "spirituality-between-atheism-and-theism",
    title: "Spirituality Between Atheism and Theism: Meaning, Experience, and Social Function",
    topic: "modern",
    authors: [suhaib, "Shiza Fatima", aminuddin],
    journal: "Journal for Current Sign",
    date: "2026-06-06",
    doi: "10.5281/zenodo.20568769",
    blurb: "Whether “spiritual but not religious” can stand on its own, apart from belief in God.",
    summary: {
      title: "Spiritual but not religious?",
      lede: "Can spirituality hold together without God? This review finds that spiritual experience without belief is real, but whether it can ground lasting morality and community remains disputed.",
      body: [
        "More and more people describe themselves as “spiritual but not religious”. They step away from organised religion but still speak of meaning, transcendence and inner change, and Pew Research Center surveys now treat them as a substantial group. Writers such as Sam Harris argue that what religion offers, from moral seriousness to spiritual experience, does not need God. Others reply that once God is removed, meaning and morality become personal preference. The paper reviews research from psychology, sociology and philosophy to weigh the two sides.",
        "On experience, the evidence is fairly clear. Researchers increasingly define spirituality as self-transcendence and meaning rather than belief in God. Studies of mindfulness, awe and other self-transcendent experiences, by Yaden and colleagues and by Keltner and Haidt, find these states among religious and non-religious people alike, and Piff and colleagues link awe to more helpful behaviour towards others. Work going back to Viktor Frankl, and Park's review of research on meaning-making, shows that a sense of meaning helps people cope with suffering whatever their worldview.",
        "The harder questions concern community and foundations. Durkheim saw religion as the glue of social life, and Norenzayan links belief in morally concerned “big gods” to large-scale cooperation. Alain de Botton proposes borrowing religion's rituals and consolations without its beliefs, and the review finds this works in part. Practices are easy to take up alone; lasting communities, passed on across generations, are much harder to build without a shared account of reality. John Gray argues that many atheists quietly replace God with progress or politics, and Nietzsche warned that the real crisis comes when inherited values erode. The authors sort spirituality without God into five types, from meditation-based practice to a “tragic” acceptance of suffering with no hope of salvation.",
        "Their conclusion separates two levels. As experience and practice, spirituality without God is real and can help people. Whether it can supply a binding basis for morality and lasting communal authority is, the authors say, still philosophically contested, and they call for long-term studies comparing religious and secular communities.",
      ],
      points: [
        "Researchers now often define spirituality as self-transcendence and meaning, not belief in God.",
        "Meditation, awe and meaning-making benefit religious and non-religious people alike.",
        "Rituals can be borrowed without belief, but lasting communities are much harder to sustain.",
        "Whether spirituality without God can ground binding morality remains philosophically disputed.",
      ],
    },
  },
  {
    slug: "man-or-god",
    title: "Man or God: A Comparative Analysis of Islamic and Humanist Worldviews",
    topic: "modern",
    authors: [suhaib, "Shiza Fatima", "Haroon Saif"],
    journal: "Journal of Social Signs Review",
    date: "2025",
    doi: "10.5281/zenodo.18297575",
    blurb: "Islam and secular humanism compared on reality, knowledge, ethics, purpose and destiny.",
    summary: {
      title: "Man or God?",
      lede: "Should God or humanity sit at the centre of meaning and morality? The paper compares Islam and secular humanism on five basic questions and finds deep differences alongside shared values.",
      body: [
        "Secular humanism holds that people can and must create their own values and meaning without God. Islam holds that God is at the centre of reality and is the source of truth and morality. The paper notes that these are not just ideas in books: they shape law, education, debates about human rights, and personal ethics. It sets the two side by side to show where they part ways and where they meet.",
        "The comparison covers five questions: what is ultimately real, how we know things, what grounds morality, what life is for, and what happens after death. For the Islamic view the authors draw on the Qur'an: humans as khalifa, or stewards, on earth (2:30), and the verse “I did not create jinn and mankind except to worship Me” (51:56). Revelation (wahy) is the primary source of knowledge; reason and observation are valued but may not override it, as al-Ghazali warned. Morality rests on God's command, and life is a test that leads to resurrection, judgement, and Paradise or Hell. The paper also notes Muslim thinkers such as Seyyed Hossein Nasr, who argue that making humanity the final measure leads to spiritual impoverishment.",
        "For the humanist view, the paper traces a line from Protagoras's “Man is the measure of all things” through the Renaissance and Kant's “Dare to know” to the Humanist Manifestos. The first, in 1933, called the universe self-existing and not created; the second, in 1973, declared “No deity will save us; we must save ourselves.” Corliss Lamont describes humanism as rejecting the supernatural in favour of reason, science, democracy and compassion. On this view morality comes from human needs and empathy, meaning comes from developing one's potential, and death ends consciousness, so legacy and memory take the place of eternal reward.",
        "The authors conclude that the two worldviews differ at the root: one theocentric (God-centred), the other anthropocentric (human-centred). That difference explains many clashes over law, rights and education. Yet both value justice, compassion, charity and the pursuit of knowledge, which the authors see as room for shared humanitarian work and respectful dialogue in plural societies.",
      ],
      points: [
        "Islam places God at the centre of reality; secular humanism places human beings there.",
        "Islam treats revelation as the primary source of knowledge; humanism relies on reason and science.",
        "Islam grounds morality in God's command; humanism grounds it in human needs and empathy.",
        "Despite deep differences, both value justice, compassion and knowledge, leaving room for dialogue.",
      ],
    },
  },
  {
    slug: "surah-al-asr-crisis-of-humanism",
    title: "The Crisis of Humanism: Surah al-‘Asr and the Qur'anic Model of True Success",
    topic: "modern",
    authors: ["Muhammad Shahid", "Ifra Javed", suhaib],
    journal: "Journal of Social Signs Review",
    date: "2026-04-24",
    doi: "10.5281/zenodo.19724117",
    blurb: "Surah al-‘Asr's four conditions for success, read as an answer to self-sufficient humanism.",
    summary: {
      title: "Surah al-‘Asr and true success",
      lede: "Modern humanism trusts people to find meaning and morality by themselves. The paper reads Surah al-‘Asr as the Qur'an's answer: without faith, good deeds, truth and patience, people are in loss.",
      body: [
        "Surah al-‘Asr is one of the shortest chapters of the Qur'an. In three verses it swears by time, declares “indeed, mankind is in loss”, and names four qualities that rescue people from that loss: faith, righteous deeds, urging one another to truth, and urging one another to patience (103:1–3). Classical commentary, the authors note citing Ibn Kathir, treats it as a compact map of salvation. The paper reads it alongside modern humanism, especially the kind that makes the human being the final authority on meaning, morality and success.",
        "The authors are careful with the word humanism. Drawing on works such as Copson and Grayling's Wiley Blackwell Handbook of Humanism, they note that it covers civic, literary, secular and religious traditions, and that Lenn Goodman has written of an Islamic humanism. Their critique is aimed only at self-sufficient humanism. They draw on philosophical debates over whether life can have ultimate meaning without God (Metz) and how morality relates to the transcendent (Hare), and on inequality data from the World Inequality Report and the OECD, which suggest material progress alone does not bring social cohesion.",
        "They then read each condition in turn. Loss, khusr in Arabic, is the default human state unless God's guidance transforms it. Faith is a whole worldview that gives purpose and accountability. Righteous deeds must follow divine truth, not shifting public approval. Urging one another to truth makes morality a shared public duty rather than a private preference, a point the authors support with hadith describing believers as one body and as a building whose parts strengthen each other. Urging patience means principled steadfastness under pressure, not resignation. The four belong together: faith without action is an empty claim, action without truth drifts, truth without patience is short-lived, and patience without faith becomes mere stoicism.",
        "The authors conclude that the surah affirms human dignity but rejects human self-sufficiency. It values action but ties it to accountability before God, and it orders social life around truth rather than desire. In their reading, the surah restores the human being not by raising him above everything else, but by placing him before God, within a community, and under the discipline of truth.",
      ],
      points: [
        "Surah al-‘Asr declares that people are in loss, except those with four qualities.",
        "The four are faith, righteous deeds, urging one another to truth, and urging one another to patience.",
        "The authors argue that the surah affirms human dignity but rejects human self-sufficiency.",
        "Its call to mutual truth and patience makes salvation a shared, social responsibility.",
      ],
    },
  },
  {
    slug: "maududi-response-to-atheism",
    title:
      "Response to Contemporary Atheistic Thought: The Methodologies of Maulānā Syed Abul Aaʻlā Maudūdī",
    topic: "modern",
    authors: [suhaib, "Muhammad Atta ul Baseer"],
    journal: "Al-Mīthāq",
    date: "2024-12-31",
    doi: "10.5281/zenodo.23095411",
    blurb: "How Maulana Maududi answered atheism as it reached the Indian subcontinent in the 20th century.",
  },
  {
    slug: "ghazali-and-the-decline-of-science",
    title:
      "Al-Ghazālī, Philosophy, and the Decline of Science in the Islamic World: A Historiographical and Textual Reassessment",
    topic: "modern",
    authors: [aarifi, suhaib],
    journal: "Annual Methodological Archive Research Review",
    date: "2025-08-22",
    doi: "10.5281/zenodo.23423492",
    blurb: "Testing the popular claim that al-Ghazali caused science to decline in the Muslim world.",
    summary: {
      title: "Did al-Ghazali kill science?",
      lede: "A popular story blames al-Ghazali for ending science in the Muslim world. His own books, and what happened after him, tell a different story.",
      body: [
        "A well-known story says that science flourished in the early Muslim world until the theologian Abu Hamid al-Ghazali (c. 1056–1111) turned people against philosophy and reason, after which it declined. The story took shape in 19th-century European scholarship, especially Ernest Renan's, and has been repeated more recently by the physicist Pervez Hoodbhoy, the Nobel Prize-winning physicist Steven Weinberg and the science communicator Neil deGrasse Tyson, who said al-Ghazali called working with numbers “the work of the devil”.",
        "The paper separates two claims: that al-Ghazali rejected philosophy and the sciences, and that his influence caused their decline. To test the first, it reads three of his books closely: The Incoherence of the Philosophers, Deliverance from Error and The Book of Knowledge. His target was a set of metaphysical teachings of al-Farabi and Ibn Sina, such as the eternity of the world, and their claim to have proved them with the certainty of mathematics. Mathematics itself he accepted as rigorous proof. He even warned that a believer who denies proven facts, such as the calculation of eclipses, harms religion. He used logic extensively, and he counted medicine and mathematics as a communal obligation (fard kifaya): a community must have people skilled in them.",
        "His famous example of fire and cotton is often read as a denial of natural law. Drawing on the historian Frank Griffel, the authors argue that al-Ghazali denied only that fire burns cotton by a necessity independent of God, not that it normally does or that this can be studied. On the second claim, they point to George Saliba's history of astronomy: the Maragha tradition and Ibn al-Shatir produced major innovations centuries after al-Ghazali. Philosophy also continued under new names, inside kalam (Islamic theology) and in thinkers such as Fakhr al-Din al-Razi.",
        "The authors do not make al-Ghazali a modern secular rationalist: he placed revelation above human reasoning and opposed key philosophical doctrines. But they conclude that his legacy was transformation, not termination. Explaining later changes in Muslim science means looking at patronage, institutions, economics and politics across many regions, not blaming one theologian.",
      ],
      points: [
        "Al-Ghazali attacked specific metaphysical doctrines, not mathematics, logic, medicine or the study of nature.",
        "He warned that denying proven facts, such as eclipse calculations, in the name of Islam harms religion.",
        "Denying that causes act by their own necessity is not the same as denying that nature is regular.",
        "Astronomy and philosophy kept developing for centuries after him, which the decline story cannot explain.",
      ],
    },
  },

  // Qur'an and Sunnah
  {
    slug: "surah-al-fil-and-imperialism",
    title: "Imperialism in the Modern Age: Surah al-Fil's Timeless Warning to Today's Empires",
    topic: "quran",
    authors: [afzal, suhaib, aminuddin],
    journal: "Journal for Current Sign",
    date: "2026-06-06",
    doi: "10.5281/zenodo.20568594",
    blurb: "The army of the elephant as a lesson on the limits of imperial power, then and now.",
    summary: {
      title: "Surah al-Fil and modern empires",
      lede: "Surah al-Fil tells how Abraha's army, elephants and all, came to nothing. The authors read it as a warning that no empire's power is final.",
      body: [
        "Surah al-Fil (Qur'an 105) is five verses long. It recalls how Abraha, a ruler who led an army with elephants against the Ka'bah, was brought down not by a rival power but by an unexpected act of God, his army left “like eaten straw”. The authors read the surah as a lesson about imperial arrogance: the belief that weapons, planning and wealth make a power untouchable.",
        "They place this reading alongside writers on imperialism, from J. A. Hobson and Lenin to Edward Said and David Harvey, who in different ways describe empire as a matter of military force, economic interest and the stories powers tell to justify themselves. Today, the paper argues, empire often works without using the name, through military bases, alliances, sanctions and occupation as well as direct conquest.",
        "The paper then applies this lens to present-day cases, focusing on the United States and Israel, with Iraq, Iran and Venezuela as supporting examples. The authors cite official reviews that found the Iraq war rested on flawed intelligence, human-rights reports and International Court of Justice orders on Gaza, and the contrast between international scrutiny of Iran's nuclear programme and Israel's estimated arsenal outside the non-proliferation treaty. In their reading, these cases show the overconfidence the surah describes, and powers that apply rules to others while exempting themselves. They add that the surah does not predict particular modern states, that not every conflict fits one template, and that disputed claims should be attributed to the bodies that make them.",
        "The surah's “birds”, the authors suggest, may today take the form of legal challenges, public conscience, economic strain or a people's refusal to disappear. They also connect it to the teaching, drawn from hadith, that the return of Isa (Jesus) and the appearance of Imam Mahdi will finally end oppression. Their conclusion is that domination is never permanent and no power escapes divine justice.",
      ],
      points: [
        "Surah al-Fil shows a powerful army undone in a way its planners never expected.",
        "The authors argue that modern empire works through bases, alliances and sanctions as well as war.",
        "They apply the surah to US and Israeli power, citing UN, court and human-rights reports.",
        "In their reading, the surah teaches that might without right is brittle and no power is final.",
      ],
    },
  },
  {
    slug: "surah-al-humazah-and-materialism",
    title: "The Trap of Endless Wealth: Surah al-Humazah on the Dangers of Capitalism and Materialism",
    topic: "quran",
    authors: [afzal, suhaib, "Saeed Ahmed"],
    journal: "Pakistan Journal of Social Sciences Review",
    date: "2026-06-06",
    doi: "10.5281/zenodo.20568823",
    blurb: "Surah al-Humazah on hoarding wealth, mocking others and the illusion that money lasts.",
    summary: {
      title: "Surah al-Humazah and the love of wealth",
      lede: "Surah al-Humazah condemns the one who hoards wealth, counts it and thinks it will make him last forever. The authors read it as a warning to a culture built on accumulation.",
      body: [
        "Surah al-Humazah (Qur'an 104) is a short chapter that condemns the slanderer and mocker, the one “who amasses wealth and counts it” and imagines his wealth will make him immortal. The authors argue that it describes more than one person's greed. It describes a whole outlook in which money becomes the measure of a person's worth, and people with less are looked down on.",
        "They read the surah alongside modern discussions of capitalism, an economy built on private ownership and profit, and materialism, an outlook that places too much importance on possessions and status. The two are not the same, the paper notes, but they often reinforce each other. Drawing on the commentary of Ibn Kathir, the authors pick out four themes in the surah: mockery, accumulation, delusion and destruction. Counting wealth again and again suggests anxious attachment, not simple bookkeeping. Believing wealth brings permanence is the delusion that money, technology or comfort can remove human fragility and accountability. And opening with the mocker ties wealth to contempt for others.",
        "The authors then turn to present-day evidence. They cite reports from the OECD, the World Bank, the IMF and the World Inequality Report on persistent poverty and highly concentrated wealth, and psychological research linking materialism to lower well-being. In Islamic thought, they note, wealth itself is not condemned; it comes with duties of accountability, circulation and justice. The surah's image of a fire that reaches the hearts suggests to them that the deepest damage is spiritual, so technical fixes for inequality, without moral change, remain incomplete.",
        "The paper is careful not to turn the surah into a slogan against every market or treat it as an economics textbook. Its conclusion is moral: the surah denies wealth the right to become ultimate, and reminds readers that wealth without accountability is unstable and status without humility corrupts.",
      ],
      points: [
        "The surah condemns making wealth the centre of the self, not owning wealth as such.",
        "Counting and hoarding wealth reflects anxious attachment and a false hope of permanence.",
        "The authors link the surah's mockery to contempt for people who have less.",
        "They argue that economic growth alone cannot secure justice or well-being without moral change.",
      ],
    },
  },
  {
    slug: "quranic-and-biblical-accounts-of-nuh",
    title: "The Qur'anic and Biblical Accounts of Hazrat Nooh (A.S): A Comparative Review",
    topic: "quran",
    authors: [aarifi, suhaib],
    journal: "Research Consortium Archive",
    date: "2026-06-08",
    doi: "10.5281/zenodo.23697705",
    blurb: "The story of Prophet Nuh (Noah) in the Qur'an and the Bible, compared.",
    summary: {
      title: "Nuh in the Qur'an and the Bible",
      lede: "The Qur'an and the Bible both tell the story of Nuh (Noah) and the flood. The authors argue that the Qur'an gives the fuller and more consistent picture of him as a prophet.",
      body: [
        "Nuh (Noah) is one of the great prophets in Islam, sometimes called the “second Adam” because human life began again with him after the flood. The Qur'an mentions him in twenty-eight surahs; the Bible tells his story in Genesis, chapters 5 to 10. Writing from a Muslim perspective, the authors compare the two accounts of his character and his mission.",
        "In the Qur'an, the paper shows, Nuh is above all a caller to tawhid, the worship of the One God. Passages such as 7:59–64 and 10:71–73 show him urging his people to worship Allah alone, answering their insults calmly, asking no reward from them and trusting Allah against their plots. The authors note that the opposition was led by the chiefs of his people, and draw lessons from his patience for preachers today. Genesis, they argue, says almost nothing about his preaching and concentrates on the ark and the flood.",
        "The authors then point to tensions they see within the Genesis text. Noah is told in one place to take two of every animal and in another seven pairs of clean animals; one verse gives forty days of rain while another says the waters prevailed for 150 days; and the ark rests on the mountains of Ararat months before the mountain tops are seen. They contrast the statement that God “smelled a sweet savor” from Noah's offering with Qur'an 22:37, which says that neither the flesh nor the blood of a sacrifice reaches Allah, only taqwa (God-consciousness). They also argue that because Noah's companions were saved through faith and obedience, the story shows salvation without the Christian doctrine of atonement.",
        "Finally, the paper rejects the Genesis passage in which Noah becomes drunk and uncovered after the flood, arguing that it cannot be true of a prophet, whom Islam holds to be protected from grave sin. In the Qur'an, by contrast, Nuh is a model of faith and humility, as when he asks Allah about his drowned son and at once seeks forgiveness. The authors conclude that the Qur'anic portrait is the more exalted and consistent one.",
      ],
      points: [
        "The Qur'an presents Nuh mainly as a patient caller to the worship of the One God.",
        "The authors argue that Genesis focuses on the flood and says little about his preaching.",
        "They point to differing animal numbers and flood durations within the Genesis account.",
        "They reject the Genesis story of Noah's drunkenness as unworthy of a prophet.",
      ],
    },
  },
  {
    slug: "kalam-cosmology-and-the-trinity",
    title: "The Incompatibility Between Kalam Cosmology and Trinitarian Doctrine",
    topic: "quran",
    authors: [suhaib, "Muhammad Uman Shoukat", "Arham Khan"],
    journal: "Policy Research Journal",
    date: "2025-11-16",
    doi: "10.5281/zenodo.17627826",
    blurb: "Why the Kalam argument, used widely by Christian apologists, points to strict monotheism.",
    summary: {
      title: "Does Kalam lead to the Trinity?",
      lede: "Christian apologists often use the Kalam argument to argue for God. The authors argue it points to one necessary creator, and cannot by itself lead to the Trinity.",
      body: [
        "The Kalam cosmological argument is short: whatever begins to exist has a cause; the universe began to exist; so the universe has a cause. It was developed by medieval Muslim theologians, including al-Ghazali, and made popular today by the Christian philosopher William Lane Craig, who argues that the cause must be uncaused, timeless, spaceless, immaterial, personal and one. Christians then identify this cause with the God of the Trinity: one God in three persons, Father, Son and Holy Spirit. The paper asks whether that step holds.",
        "The authors start from the idea of a necessary being, one that cannot fail to exist, unlike contingent things that might never have existed. Kalam, they argue, points to a single necessary cause. Quoting Craig himself, they note that Christ's human nature is contingent: “there are possible worlds in which it never exists”. Christian teaching also holds that the Son is begotten of the Father and that the Spirit proceeds from the Father (and, in Western theology, from the Son), which suggests their existence is derived. A being with contingent or derived elements, the paper argues, cannot be wholly necessary.",
        "Next they examine the two main ways philosophers explain the Trinity, drawing on the Stanford Encyclopedia of Philosophy. “One-self” models, associated with Karl Barth and Karl Rahner, treat Father, Son and Spirit as modes of one divine self; the authors argue this slides towards modalism, a view the early church rejected. “Three-self” or social models treat them as three centres of mind and will; the authors argue this yields three necessary beings, against Kalam's conclusion of one. Attempts to rescue this through “relative identity” they call controversial and arguably unintelligible.",
        "Finally, the authors stress that the argument was first built to defend tawhid, the absolute oneness of God. Even Craig, they note, accepts that natural theology can establish only a general theism. They conclude that Kalam can show there is a necessary creator, but moving from there to the Trinity requires revelation and further premises, and that the argument fits the Islamic concept of God more naturally.",
      ],
      points: [
        "Kalam concludes that the universe has a single, necessary and personal cause.",
        "The authors argue that the incarnation and the Spirit's procession bring contingency into the Trinity.",
        "One-self models risk modalism; three-self models imply several necessary beings, they argue.",
        "Getting from Kalam to the Trinity needs revelation, not the argument alone.",
      ],
    },
  },
  {
    slug: "seerah-and-islamophobia",
    title:
      "Seerah as a Model of Communication Excellence: Responding to Islamophobia through the Prophetic Method of Peaceful Engagement",
    topic: "quran",
    authors: [suhaib, "Shiza Fatima", aminuddin],
    journal: "Contemporary Journal of Social Science Review",
    date: "2026-03-08",
    doi: "10.5281/zenodo.18905889",
    blurb: "The Prophet's way of communicating as a guide to answering Islamophobia, online and off.",
    summary: {
      title: "Answering Islamophobia the Prophet's way",
      lede: "Islamophobia spreads fast online. The authors argue that the Prophet's way of meeting hostility, with wisdom, gentleness and patience, offers Muslims a practical guide for responding today.",
      body: [
        "Social media lets Muslims share their faith with the world, but it also spreads hostility towards Muslims quickly and widely. The paper cites research finding that Islamophobia is more common online than offline, including a report by Butler that counted at least 3.7 million Islamophobic posts on Twitter between 2019 and 2021, of which only about 15% were removed. It links online hate to attacks such as the 2019 Christchurch mosque killings, and asks how Muslims should respond.",
        "The authors turn to the Seerah, the life of the Prophet Muhammad (S.A.W.), and draw out five principles: wisdom (hikmah), meaning adapting the message to the audience; gentleness (rifq); patience (sabr); clarity; and moral consistency. They illustrate these with familiar episodes: accepting hard terms at the Treaty of Hudaybiyyah for the sake of peace; courteous letters to rulers such as Heraclius and the Negus of Abyssinia; praying for the people of Ta'if instead of seeking revenge; the general amnesty at the conquest of Mecca, “Go, for you are free”; the kindness that led the captive Thumamah ibn Uthal to accept Islam; and the calm correction of a Bedouin who urinated in the mosque.",
        "The paper connects these principles to Aristotle's ethos, pathos and logos, and to techniques online preachers already use, such as plain explanation, personal stories and mixing languages. In practice the authors recommend courteous replies that do not mirror insults, patience rather than quick wins, accurate claims free of conspiracy theories, and knowing when not to engage with trolls. They distinguish criticism of Islam, which they accept is protected in free societies, from speech that dehumanises Muslims or incites harm, and they call for fair moderation rather than blanket censorship.",
        "The authors conclude that communication modelled on the Seerah is both a religious duty and an effective way to counter Islamophobia: by humanising Muslims, correcting misinformation and answering hostility with dignity instead of anger.",
      ],
      points: [
        "Research cited in the paper finds Islamophobia is more widespread online than offline.",
        "The Seerah shows five principles: wisdom, gentleness, patience, clarity and moral consistency.",
        "Hudaybiyyah, the letters to rulers and the amnesty at Mecca model peaceful engagement.",
        "The authors urge courteous, accurate replies and knowing when to disengage from trolls.",
      ],
    },
  },
  {
    slug: "science-of-hidden-hadith-defects",
    title: "The Science of Hidden Hadith Defects: An Analytical Study of its Pillars, Methodology and Importance",
    topic: "quran",
    authors: ["Noor Ur Rehman Hazarvi", suhaib],
    journal: "Bannu University Research Journal in Islamic Studies",
    date: "2025-08-31",
    doi: "10.5281/zenodo.23093846",
    blurb: "ʿIlal al-hadith: how scholars detect subtle flaws in narrations that look sound.",
    summary: {
      title: "Finding hidden flaws in hadith",
      lede: "A hadith can have a sound-looking chain and still be flawed. The science of ʿilal, the paper explains, is how master scholars detect those hidden errors.",
      body: [
        "A hadith is judged authentic when its chain of narrators is unbroken, its narrators are upright and precise, and it does not contradict stronger reports. Classical scholars added a fifth condition: it must also be free of any hidden defect, or ʿilla. Hadith scholars define an ʿilla as “a subtle, hidden cause” that damages a report even though it looks sound on the surface. The discipline that finds these defects is called ʿilal al-hadith, and the authors argue it is the hardest condition to check, because the flaw is invisible to anyone but expert critics.",
        "The paper traces the science back to the Followers of the Companions, such as Muhammad ibn Sirin, and to Shuʿbah ibn al-Hajjaj, whom Ibn Rajab names as the first to search out defects in depth. Imams such as Yahya ibn Saʿid al-Qattan, ʿAli ibn al-Madini, Ahmad ibn Hanbal, al-Bukhari and Muslim then laid its foundations. The paper sets out four pillars for studying a defect: identify the type of error (for example, presenting a broken chain as connected, or dropping or adding a narrator), find its cause (a slip of memory, a misread name, old age), show how it was detected, and weigh the evidence between conflicting versions.",
        "The central method is to collect every route of a hadith and compare them. Ahmad ibn Hanbal is quoted as saying: “If you do not gather the paths of a hadith, you will not understand it.” When students of the same teacher disagree, critics prefer the version reported by more narrators or by those with stronger memories. The paper works through three examples from Abu Zurʿah and al-Daraqutni, including a report about tayammum in which a narrator's father was misnamed, and a hadith on the tooth stick attributed to Abu Bakr when the correct chain runs through ʿAʾishah. It also introduces the classic books of the field by al-Tirmidhi, Ibn Abi Hatim, al-Daraqutni and Muslim.",
        "The authors conclude that knowledge of defects belongs to master memorisers who know the narrators and their routes thoroughly. Al-Khatib al-Baghdadi called it the noblest of the hadith sciences, and the paper argues it is what keeps the Sunnah a trustworthy source of law. It urges today's researchers to keep studying and applying it.",
      ],
      points: [
        "A sound-looking chain is not enough; a hadith must also be free of hidden defects.",
        "Studying a defect means naming the error, its cause, how it was found, and which version wins.",
        "The key method is gathering every route of a hadith and comparing them side by side.",
        "Al-Khatib al-Baghdadi called knowledge of defects the noblest of the hadith sciences.",
      ],
    },
  },
  {
    slug: "conditions-for-ijtihad",
    title:
      "The Rationality and Necessity of the Classical Conditions for Ijtihad and Their Fulfillment in the Modern Era: A Cross-Madhhab Perspective",
    topic: "quran",
    authors: [suhaib, "Abdul Majid", "Rizwan Haider"],
    journal: "International Journal of Islamic Studies & Culture",
    date: "2025-10-15",
    doi: "10.5281/zenodo.17361870",
    blurb: "Why the four schools set strict conditions for independent legal reasoning, and how scholars could meet them today.",
    summary: {
      title: "Who is qualified for ijtihad?",
      lede: "Islamic law leaves room for fresh reasoning on new questions, but not for anyone. The paper argues the classical qualifications are sensible safeguards, and proposes how scholars could meet them today.",
      body: [
        "Ijtihad is the effort a qualified jurist makes to work out a ruling of Islamic law where the Qur'an and Sunnah give no explicit answer. Today, the authors say, two extremes dominate: treating the “gate of ijtihad” as permanently closed, and letting anyone with minimal training issue rulings. Both, they argue, come from not understanding why the classical conditions for a mujtahid, a jurist entitled to ijtihad, exist in the first place.",
        "The paper traces ijtihad from the Prophet's time, citing the well-known report, whose authenticity it notes is debated, in which Muʿadh ibn Jabal said he would judge by the Book of Allah, then the Sunnah, then his own reasoning. It points to ʿUmar's suspension of the penalty for theft during a famine, to al-Shafiʿi and Abu Hanifah, and to Wael Hallaq's argument that ijtihad never really stopped. Across the Hanafi, Maliki, Shafiʿi and Hanbali schools the requirements broadly agree: mastery of the Qur'an, hadith and Arabic, and knowledge of consensus (ijmaʿ) and analogy (qiyas). Each school stresses different points, such as the Malikis' weight on the practice of the people of Madinah.",
        "The authors argue these conditions are safeguards for reliable knowledge, not elitism. They quote al-Ghazali's image of reason as an instrument and the Shariʿah as light, each useless without the other, and al-Amidi's statement that the conditions protect the law from tampering. As a warning they point to the Khawarij, who, the paper says, read verses in isolation without the needed training. They then list modern obstacles: weakened traditional institutions, declining classical Arabic, online fatwas from unqualified people, political pressure on state muftis, narrow specialisation, and secular frameworks adopted uncritically.",
        "Their answer is not to lower the bar but to build a route to it: eight to ten years of classical study in Qur'an, hadith, legal theory, comparative fiqh and Arabic, then several years of economics, bioethics, comparative law and social science, and finally practical training in mock fatwa councils under senior scholars. The paper concludes that disciplined ijtihad is the middle path between blind imitation and reckless rulings.",
      ],
      points: [
        "Ijtihad is legitimate and necessary, but classical jurists limited it to people with deep training.",
        "All four Sunni schools require mastery of the Qur'an, hadith, Arabic, consensus and analogy.",
        "The authors see weak Arabic, online fatwas and political pressure as today's main obstacles.",
        "They propose a long curriculum combining classical sciences, modern disciplines and supervised fatwa practice.",
      ],
    },
  },

  // Society and rights
  {
    slug: "locke-natural-rights-and-islamic-rights",
    title:
      "Locke's Natural Rights and Islamic Rights: Life, Liberty, Property, and Human Dignity in the Light of Maqasid al-Shariʿah",
    topic: "society",
    authors: [afzal, "Abdul Majid", suhaib],
    journal: "Policy Journal of Social Science Review",
    date: "2026-03-13",
    doi: "10.5281/zenodo.23423559",
    blurb: "John Locke's natural rights compared with the objectives of Islamic law.",
    summary: {
      title: "Locke's rights and the maqasid",
      lede: "Locke grounded rights to life, liberty and property in natural law. The paper argues Islam protects these too, and more, through the objectives of Islamic law.",
      body: [
        "The modern language of rights owes much to the English philosopher John Locke. In his Second Treatise of Government he argued that people are naturally free and equal, that no one should harm another in “life, health, liberty, or possessions”, and that government is legitimate only when it protects these through law and consent. Islamic law has its own framework, the maqasid al-shariʿah, or objectives of the Shariʿah, which al-Ghazali summarised as the preservation of religion, life, intellect, lineage and property. The paper asks how the two compare.",
        "On life, both agree it must be protected. The paper cites the Qur'an's ban on unlawful killing (17:33), the regulated law of retaliation (2:178–179) and the Farewell Pilgrimage, where the Prophet declared people's blood, property and honour sacred. On liberty, both reject arbitrary domination; the Qur'an's “There is no compulsion in religion” (2:256) and the Medinan agreement with Jewish communities are given as examples. The authors add a caution: classical jurists debated apostasy and the limits of religious freedom, so Islamic law should not be presented as identical to modern liberal freedom of conscience.",
        "On property, Locke grounds ownership in a person's own labour. Islam also protects property, forbidding wrongful consumption of wealth (4:29) and guarding orphans' wealth (4:6), but ties it to duties such as zakat (9:60). The biggest difference, the paper argues, is scope. The maqasid also protect intellect, reflected in the ban on intoxicants (5:90–91); family, through rules on marriage and inheritance; and dignity, since Allah has honoured the children of Adam (17:70). Drawing on Jasser Auda, the authors note that modern maqasid scholars extend these into education, freedom of belief and human rights. They also argue these protections were practised in Madinah from the start, not invented later by jurists.",
        "The authors conclude that the maqasid framework is more coherent, because it joins rights with duties and individual protection with public welfare. They stress that this is an evaluative judgment, and that it does not deny Locke's major contribution to limiting tyranny and defending individual freedom.",
      ],
      points: [
        "Locke and Islamic law both protect life and property and reject arbitrary rule.",
        "The maqasid also protect religion, intellect, family and dignity, which Locke's core triad leaves out.",
        "In Islam, owning property comes with duties such as zakat and fair dealing.",
        "The authors call the Islamic framework more coherent but credit Locke for limiting tyranny.",
      ],
    },
  },
  {
    slug: "constitution-of-madina",
    title:
      "The Constitution of Madina as a Covenantal Social Contract: Consent, Citizenship, and Pluralism in the First Islamic Polity",
    topic: "society",
    authors: [aarifi, suhaib],
    journal: "Journal of Social Signs Review",
    date: "2026-03-30",
    doi: "10.5281/zenodo.21917019",
    blurb: "The Charter of Madina as a pact of consent, shared security and pluralism.",
    summary: {
      title: "Was Madina a social contract?",
      lede: "After the Hijrah, Madina's new order was built through pledges and a written covenant. The paper calls it a covenantal social contract, but not a modern constitution.",
      body: [
        "When the Prophet migrated from Makkah to Madina, the city was divided by old rivalries, especially between the Arab tribes of Aws and Khazraj, while Jewish tribes were also part of its life. A written agreement, known today as the Constitution or Charter of Madina, set out how the Muhajirun (the emigrants), the Ansar (the helpers), the Jewish tribes and their allies would live together. The paper asks whether this document can be called a social contract: the idea in Western political thought that legitimate government rests on an agreement among the governed.",
        "The authors work from Ibn Ishaq's biography of the Prophet, where the text is preserved, along with the Qur'an, hadith and modern scholarship. They take seriously Ilyas Ahmad's 1944 argument that Madina was a real, not imaginary, social contract, while warning that he fits it too neatly into Western theory. They also note the cautions of Michael Lecker, R. B. Serjeant and Uri Rubin, who question whether the document was one text written at one time. Even so, the paper finds real contractual elements: the Pledges of ʿAqabah, in which Madinans invited the Prophet and promised to protect him; a clause making the believers “one community”; shared defence; rules on blood money that moved disputes away from tribal revenge; and the referral of serious disputes to Allah and His Messenger.",
        "Jewish groups kept their religion while sharing duties of defence and peace, which the authors call treaty-based or covenantal pluralism. It had limits: groups that broke the agreement or joined hostile coalitions lost its protection. Compared with Hobbes, Locke and Rousseau, Madina shared their concerns with security, consent and community, but its final authority was revelation and prophethood, not consent alone. The Qur'an's commands to fulfil agreements (5:1) and to judge with justice (4:58) frame this order.",
        "The authors conclude that the document is best read as a covenantal political compact. It was neither a modern liberal constitution nor merely a symbolic text. Its lessons for today, they argue, are principles such as justice, keeping covenants, accountable leadership and shared membership across communities, not a blueprint to copy.",
      ],
      points: [
        "Madina's order was built through real pledges and agreements, not conquest or hereditary rule.",
        "Jewish tribes kept their religion while sharing duties of defence and public peace.",
        "Unlike Western contract theory, legitimacy rested on revelation and prophethood as well as consent.",
        "The authors treat the Charter as a source of principles, not a ready-made modern constitution.",
      ],
    },
  },
  {
    slug: "human-rights-epistemological-basis",
    title: "Human Rights: Epistemological Basis and Application",
    topic: "society",
    authors: [afzal, "Ehsan Waqaur Ahmad", suhaib],
    journal: "Dialogue Social Science Review",
    date: "2026-06-21",
    doi: "10.5281/zenodo.20780415",
    blurb: "Where modern human rights come from, and what changes when their basis is secular.",
  },
  {
    slug: "islamic-and-atlantic-slavery",
    title: "Islamic Slavery and Colonial Atlantic Slavery: A Comparative Historical, Legal, and Rational Analysis",
    topic: "society",
    authors: [aarifi, suhaib],
    journal: "Journal of Social Signs Review",
    date: "2026-06-06",
    doi: "10.5281/zenodo.20780463",
    blurb: "Slavery under Islamic law and in the colonial Atlantic trade, compared on history and law.",
    summary: {
      title: "Islamic and Atlantic slavery compared",
      lede: "Were slavery under Islamic law and the Atlantic slave trade the same kind of system? The authors argue they differed sharply in law, race, treatment and routes to freedom.",
      body: [
        "Slavery is a painful subject, and the authors note that it is often discussed either defensively or accusingly. Their question is narrower: was slavery as regulated by Islamic law the same kind of system as the slavery European colonial powers built across the Atlantic? They state openly that they approach the question from an Islamic and rational standpoint rather than treating modern secular human-rights theory as the final authority, and that Islam should be judged by what its law commands and forbids, not by Muslims who broke it.",
        "On the Atlantic side, the paper draws on Britannica, the National Endowment for the Humanities and the sociologist Orlando Patterson. It describes a racialised, hereditary, commercial system: around 12.5 million Africans forced onto slave ships, an estimated 15 to 25 percent dying on the Middle Passage, slave codes that defined enslaved people as property and passed slave status down through the mother, and the Zong massacre of 1781, when more than 130 Africans were thrown overboard and the owners later pursued an insurance claim.",
        "On the Islamic side, the authors argue that Islam did not create slavery but regulated an institution that already existed worldwide. They cite the Qur'an's praise of freeing a slave (90:13), the mukatabah contract by which an enslaved person could seek freedom, with owners told to help them financially (24:33), and verses on the marriage of enslaved people (24:32, 4:25). From hadith they cite the Prophet calling enslaved people brothers who must be fed and clothed as their masters are (Bukhari 2545), and condemning anyone who sells a free person (Bukhari 2227). Drawing on Kecia Ali and Dror Ze'evi, they note that mistreatment could lead to forced manumission, that the legal starting point was freedom, and that enslaved people came from many ethnic backgrounds, some later rising to rule, as in the Mamluk Sultanate.",
        "The authors acknowledge that Muslims did abuse enslaved people, that racism existed among some Muslims, and that some rulers and courts failed to uphold the law. They conclude that these were failures of Muslims, not of Islam, and that Islamic law created a regulated, accountable and emancipation-oriented framework, while Atlantic slavery was built on racial hierarchy, hereditary bondage and commercial exploitation.",
      ],
      points: [
        "The authors argue Islam regulated an existing institution rather than creating slavery.",
        "Atlantic slavery was racial and hereditary, with slave codes defining people as property.",
        "The paper cites Qur'an and hadith requiring humane treatment and repeatedly encouraging manumission.",
        "It distinguishes Islamic law from abuses by Muslims, which it says did occur.",
      ],
    },
  },
  {
    slug: "gender-equality-vs-gender-justice",
    title: "Gender Equality vs. Gender Justice: An Islamic Ethical Perspective",
    topic: "society",
    authors: [aarifi, suhaib],
    journal: "Policy Research Journal",
    date: "2026-06-02",
    doi: "10.5281/zenodo.20510615",
    blurb: "The difference between treating men and women the same and treating them justly.",
    summary: {
      title: "Gender equality or gender justice?",
      lede: "Much modern policy treats fairness as identical treatment for men and women. The authors argue Islam aims instead at justice: equal worth, with some duties assigned differently.",
      body: [
        "When people argue about women and religion, a great deal depends on what “equality” means. In much modern policy language, and in a liberal tradition running from John Stuart Mill to Susan Moller Okin and Martha Nussbaum, equality means sameness: men and women should have identical rights and roles, and any rule that treats them differently is presumed unfair. Many Muslim scholars prefer another vocabulary, justice (ʿadl) and equity (qist), meaning giving each person what is due to them, which is not always the same thing.",
        "The paper separates equal worth from identical function. On worth, it argues, the Qur'an is explicit: men and women come “from one soul” (4:1), “you are of one another” (3:195), believing men and women are promised the same forgiveness and reward (33:35), and the measure of honour is taqwa, or God-consciousness, not gender (49:13). A hadith calls women “the counterparts (twin halves) of men”. Where the law does treat them differently, mainly in the family, the authors argue the differences are tied to responsibility, not superiority, and should be read through the maqasid al-shari'ah, the higher aims of Islamic law such as protecting life, family and dignity. On that reading, any practice that leads to coercion or harm goes against the law's own purposes.",
        "Two case studies carry the argument. On inheritance, the paper notes that the “two to one” rule of 4:11 applies only in certain family situations; citing Egypt's Dar al-Ifta, it says women sometimes inherit equally, sometimes more, and sometimes when a comparable male relative receives nothing. A woman's inheritance stays her own, while a man must pay dower and support his wife, children and, when needed, his parents. On qiwamah, the role of men as “maintainers/protectors” in 4:34, the authors read the verse alongside the Qur'an's description of marriage as affection and mercy (30:21) and the command to “live with them in kindness” (4:19). They describe it as responsibility-based leadership tied to providing for the family, within a wider web of care from father to husband to son, and point to the hadith that names the mother first as most deserving of good companionship. Engaging Muslim feminist writers such as Amina Wadud, Asma Barlas and Fatima Mernissi, they too separate revelation from patriarchal cultural practice.",
        "The authors conclude that Islamic ethics can give strong protection to women's dignity and rights without adopting a “sameness” model, provided men's responsibilities are actually enforced and harmful applications are rejected.",
      ],
      points: [
        "The authors argue Islam affirms equal spiritual worth and moral agency for men and women.",
        "Differences in family law are tied to responsibility and welfare, not to male superiority.",
        "The two-to-one inheritance rule applies only in some cases and comes with men's duty to provide.",
        "Qiwamah is read as accountable leadership and service, never a licence for harm.",
      ],
    },
  },
  {
    slug: "womens-rights-islam-and-the-west",
    title: "Women's Rights in Historical Perspective: A Comparative Study of Islam and the West",
    topic: "society",
    authors: [suhaib, "Abdul Majid", afzal, awan],
    journal: "Dialogue Social Science Review",
    date: "2025-10-29",
    doi: "10.5281/zenodo.17470946",
    blurb: "Women's legal rights in Islam compared with the West before and after its 19th-century reforms.",
    summary: {
      title: "Women's rights in Islam and the West",
      lede: "Women's rights are often seen as a modern Western achievement. The authors argue Islam set out many of them in the seventh century, over a thousand years before Western reform.",
      body: [
        "A common assumption holds that women's rights began with Western liberalism and the campaign for the vote. This paper tests that assumption by comparing the legal position of women in nineteenth-century Britain and America with the rights set out in the Qur'an and hadith during Islam's formative period.",
        "On the Western side, the authors draw on the 1848 Declaration of Sentiments from Seneca Falls and on historians such as Linda Kerber and Gerda Lerner. Under the English common-law doctrine of coverture, a married woman's legal identity was absorbed into her husband's: she could not own property, sign contracts or go to court, and her wages belonged to him. The Declaration protested that married women were “civilly dead”. Change came slowly, through the Married Women's Property Acts between 1839 and 1882, and votes for women in the United States in 1920 and in Britain, partly in 1918 and fully in 1928.",
        "On the Islamic side, the paper cites the Qur'an's guarantee that women, like men, have “an obligatory share” of what their parents and relatives leave (4:7), that men and women are each rewarded for their own deeds (4:32), and that believing men and women alike are promised forgiveness and a great reward (33:35). Hadith in al-Bukhari require a woman's permission before she is married, and record the Prophet granting a divorce to the wife of Thabit ibn Qays once she agreed to return the garden he had given her as her mahr, or marriage gift, a form of divorce known as khul'. The saying “Seeking knowledge is an obligation upon every Muslim” is used to support women's education. The authors point to early Muslim women who ran businesses, farmed, traded or taught, such as Khadija, Aisha, Asma' bint Abi Bakr and Zaynab bint Jahsh.",
        "The authors conclude that Islam codified these rights long before similar reforms in the West. They add that practice has often fallen short on both sides: some Muslim societies still deny women inheritance, education or mobility despite the Qur'an, while coverture became entrenched in the West through custom rather than scripture. They call for separating religious texts from cultural practice, and for avoiding sweeping claims about “Islamic” or “Western” views.",
      ],
      points: [
        "Under coverture, a married woman in England or America had no separate legal identity.",
        "The Qur'an gave women fixed inheritance shares and the reward of their own earnings in the seventh century.",
        "Hadith affirm a woman's consent to marriage and her right to seek divorce through khul'.",
        "The authors stress that culture often fell short of scripture in Muslim and Western societies alike.",
      ],
    },
  },
  {
    slug: "feminism-and-the-family",
    title: "Feminism and the Family: An Islamic Civilizational Lens",
    topic: "society",
    authors: [suhaib, afzal, "Farheen Iqbal"],
    journal: "Dialogue Social Science Review",
    date: "2026-02-28",
    doi: "10.5281/zenodo.18809234",
    blurb: "How feminist movements changed family life, read against the Islamic aim of preserving lineage.",
    summary: {
      title: "Feminism and the family",
      lede: "Feminist movements have reshaped modern family life. The paper compares that change with Islam's view of the family as a sacred institution, and finds deep differences but some common ground.",
      body: [
        "Over the past century, feminist movements have changed how many societies think about marriage and the family. Feminists argued that the home is not a purely private space but a place where power is exercised, a view summed up in the slogan “the personal is political”. Islam, by contrast, treats the family as the cornerstone of society. This paper sets the two views side by side and says it aims for a balanced comparison rather than taking sides.",
        "On the feminist side, the authors survey thinkers from Mary Wollstonecraft to Simone de Beauvoir, Betty Friedan and Shulamith Firestone, and the trends that accompanied the spread of feminist ideas in the West: later marriage, more cohabitation, higher divorce rates, smaller families and more varied household forms. They note that feminists themselves read many of these changes positively, for example as women no longer being trapped in abusive marriages, while recognising problems such as the “double shift” of working mothers.",
        "On the Islamic side, the paper centres on hifz al-nasl, the preservation of lineage, one of the five higher aims of Islamic law. It cites the Qur'an's description of spouses as a source of tranquillity, with “affection and mercy” placed between them (30:21), of marriage as a “solemn covenant” (4:21), and the command “Do not approach adultery” (17:32). From al-Ghazali's writing on marriage and the hadith collections it draws sayings such as “Marriage is my sunnah” and “The best of you are the best to their families”, along with the duty to keep ties of kinship. The husband's qiwamah (4:34) is presented as financial responsibility and protection, bounded by justice, consultation and compassion, while women keep their own property, their mahr and access to divorce.",
        "The authors find the two frameworks different at the root: feminism centres the family on individual fulfilment and choice, while Islam sees it as a civilisational institution for passing faith and morals from one generation to the next. Some feminist positions, such as same-sex marriage or abortion as an unconditional right, they say, remain incompatible with Islamic law. Yet both condemn domestic abuse, value women's education and care about children's welfare. They call for a contextual ijtihad, careful independent reasoning, that separates fixed Islamic principles from cultural habit, and useful feminist insights from what they call ideological excesses.",
      ],
      points: [
        "Feminist movements accompanied later marriage, higher divorce rates and smaller families in the West.",
        "Islam treats the family as a sacred institution, protected by the legal aim of preserving lineage.",
        "The authors find deep differences in foundations, but agreement on opposing abuse and educating women.",
        "They call for fresh reasoning that separates fixed principles from cultural custom.",
      ],
    },
  },
  {
    slug: "colonization-and-liberalism",
    title:
      "Colonization and the Secular Ideology of Liberalism: Contradictions of Universal Freedom and Exclusions of Women and Colonized Peoples",
    topic: "society",
    authors: ["Abdul Majid", suhaib, aminuddin],
    date: "2025-10-28",
    doi: "10.5281/zenodo.17461873",
    blurb: "How liberalism's promise of universal freedom excluded women and colonised peoples.",
    summary: {
      title: "Freedom for whom?",
      lede: "Liberalism promised liberty and equality for all. The authors argue that its leading thinkers attached conditions that shut out women and colonised peoples.",
      body: [
        "Liberalism presents itself as a secular philosophy of individual rights, equality under law and government by consent. Its ideals shaped the American Declaration of Independence, with its claim that “all men are created equal”, and the French Declaration of the Rights of Man and of the Citizen. Yet the same countries ruled colonial empires and denied women the vote, property rights and higher education. This paper asks how liberalism squared its universal language with these exclusions.",
        "The authors read key liberal texts closely. John Locke held that people come to own what they mix their labour with. By contrasting the English farmer who improves the land with the “wild Indian” who only gathers fruit and game, the paper argues, his theory denied Indigenous peoples lasting rights to their land and gave a moral cover for taking it. John Stuart Mill wrote in On Liberty that despotism was a legitimate way to govern “barbarians” if it aimed at improving them, and argued that India was not yet ready for representative government. Drawing on historians such as Uday Singh Mehta and Jennifer Pitts, the authors call this “conditional universalism”: rights for everyone, but only once a people met standards set by the coloniser.",
        "Women were left out in a similar way. James Mill argued that women's interests were already represented by their fathers and husbands, so they did not need the vote. The political theorist Carole Pateman argues that the liberal social contract rested on an earlier “sexual contract” that placed women under male heads of household. Feminists turned liberal language back on itself: Olympe de Gouges wrote a Declaration of the Rights of Woman in 1791, and the 1848 Seneca Falls declaration rewrote the American one to say that “all men and women are created equal”.",
        "The paper concludes that these exclusions were built into liberalism rather than accidental. Rights were extended to colonised peoples and women, the authors argue, mainly because those excluded kept pressing for them through anticolonial movements and suffrage campaigns, not because liberalism corrected itself. They see the pattern continuing in today's debates on race, migration and inequality, and argue that a truly universal idea of freedom has to reckon with this history.",
      ],
      points: [
        "The authors argue Locke's theory of property was used to deny Indigenous peoples their land.",
        "Mill held that despotism was legitimate for peoples he judged not ready for self-government.",
        "Liberal thinkers excluded women by claiming men already represented their interests.",
        "Rights widened mainly through pressure from those excluded, the paper concludes.",
      ],
    },
  },
  {
    slug: "loneliness-solidarity-and-democide",
    title: "Loneliness, Solidarity, and Democide: An Islamic Reconsideration of Individualism and Collectivism",
    topic: "society",
    authors: [suhaib, "Hazrat Ali", "Arham Khan"],
    date: "2025-10-17",
    doi: "10.5281/zenodo.17380049",
    blurb: "An Islamic middle way between the loneliness of individualism and the dangers of collectivism.",
    summary: {
      title: "Self or society?",
      lede: "Extreme individualism leaves people lonely; extreme collectivism has crushed individuals under the state. The authors argue Islam offers a middle path that protects the person and binds the community.",
      body: [
        "Modern societies are often described as either individualist, putting personal autonomy first, or collectivist, putting the family, group or state first. This paper asks whether Islam leans to one side, and argues that both extremes do serious harm.",
        "On individualism, the authors review research linking it to loneliness. A pilot study during the COVID-19 pandemic found higher loneliness among people from Western individualist societies, and a large European study by Beller and Wagner linked chronic loneliness to depression, high blood pressure and earlier death. The paper adds three case studies: isolation in care homes in both Denmark and Shanghai, anxiety and depression among carers living in Hong Kong's tiny subdivided flats, and hikikomori, the severe social withdrawal recorded in Japan. On collectivism, it notes that some collectivist cultures show higher social anxiety, and turns to the political scientist R. J. Rummel's work on democide, killing by governments, to show how totalitarian regimes sacrificed individuals to the collective on a vast scale in the twentieth century.",
        "Against both extremes, the paper sets the Qur'an and Sunnah. The maqasid, the higher aims of Islamic law, protect each person's religion, life, intellect, lineage and property. The Qur'an says that whoever kills a soul unjustly, “it is as if he had slain humanity entirely” (5:32), and commands kindness to parents, relatives, orphans, the poor and neighbours both near and distant (4:36). The Prophet said, “None of you [truly] believes until he loves for his brother that which he loves for himself”, warned that a person whose neighbour is not safe from his harm is not a believer, and likened the believers to one body that shares the pain of any part. The Constitution of Madina, which the paper reads with the historian Lecker, joined Muslims, Jews and other tribes into one community with duties of mutual defence and support, while leaving each group its religion and internal affairs.",
        "The authors conclude that Islam can be described as an “ethical collectivism anchored in individual dignity”: it builds strong ties of community without letting the group override each person's basic rights. They suggest this balance could inform modern policy on neighbourhoods, intergenerational living and social support.",
      ],
      points: [
        "Research links highly individualist societies with loneliness, which in turn harms health.",
        "Totalitarian collectivist regimes caused mass killing, the paper notes, citing R. J. Rummel's work on democide.",
        "Islamic law protects each person's life, mind and property while commanding care for neighbours.",
        "The Constitution of Madina united diverse groups in one community without erasing their rights.",
      ],
    },
  },
  {
    slug: "free-speech-and-the-muslim-exception",
    title: "Free Speech and the “Muslim Exception”: Harm, Dignity, and Selective Enforcement",
    topic: "society",
    authors: [suhaib, "Shiza Fatima", "Rizwan Haider"],
    journal: "The Study of Religion and History",
    date: "2025-08-20",
    doi: "10.5281/zenodo.23093572",
    blurb: "Why free-speech limits are applied unevenly when Muslims are the ones offended.",
    summary: {
      title: "Free speech and the Muslim exception",
      lede: "Liberal democracies already restrict some speech to prevent harm. The authors argue these limits are applied unevenly, so that speech insulting Islam is protected where similar speech about other groups is not.",
      body: [
        "Free speech is often presented as a near-absolute liberal value: open debate exposes error, helps people develop, and keeps governments accountable. The paper accepts these aims but points out that no democracy treats speech as unlimited. Defamation, threats and incitement are punished everywhere, and many states go further.",
        "The authors start with John Stuart Mill. His On Liberty defends wide freedom of discussion, but his harm principle allows limits to prevent harm to others: an article accusing corn dealers of starving the poor should be tolerated, while the same message shouted to an angry mob outside a corn dealer's house may be punished. Later thinkers widened the case for limits. Joel Feinberg argued that serious offence can sometimes justify restriction, and Jeremy Waldron that hate speech attacks the dignity of groups as equal members of society. International law agrees: Article 20(2) of the International Covenant on Civil and Political Rights requires states to prohibit advocacy of religious hatred that incites discrimination, hostility or violence.",
        "The paper then lists limits that liberal states already enforce: Germany's 2020 law against desecrating EU and foreign flags, France's Gayssot Act and Austria's laws against Holocaust denial, and court rulings in Iceland, Sweden and Canada upholding penalties for leaflets or comments vilifying gay people. Against these it sets cases involving Islam: a Paris court's 2007 acquittal of Charlie Hebdo's editor over cartoons of the Prophet Muhammad, a UK law that expressly protects ridicule and insult of religions, a Swedish court overturning a ban on Qur'an-burning protests, and France's ban on its athletes wearing the hijab at the 2024 Paris Olympics, which Amnesty International criticised as discriminatory.",
        "The authors conclude that free speech, as practised, depends on power and political context rather than working as a neutral principle. They do not call for abandoning open debate. Instead they ask liberal states to apply the harm principle consistently, treating the vilification of Muslims as they treat the vilification of Jewish or gay people, while protecting peaceful religious expression such as wearing the hijab and peaceful protest.",
      ],
      points: [
        "Mill's harm principle already allows limits on speech that incites harm, the paper notes.",
        "Many democracies criminalise Holocaust denial, some flag desecration, or the vilification of gay people.",
        "The authors argue insults to Islam are protected where comparable speech about other groups is not.",
        "They call for applying hate-speech rules equally, whichever group is targeted.",
      ],
    },
  },
];

export const doiUrl = (p: Paper) => `https://doi.org/${p.doi}`;
export const paperPath = (p: Paper) => `/research/${p.slug}`;
/** Papers with our own write-up, which get a page on this site. */
export const summarized = papers.filter((p) => p.summary);

export function getPaper(slug: string): Paper | undefined {
  return summarized.find((p) => p.slug === slug);
}

export function citeLine(p: Paper) {
  return [p.journal, p.date.slice(0, 4)].filter(Boolean).join(" · ");
}

export const researchPage: Page = {
  slug: "research",
  title: "Research Papers",
  description:
    "Peer-reviewed papers by Muhammad Harris Suhaib and colleagues on God, atheism, the Qur'an and Islam in modern society, with plain-language summaries.",
  hero: {
    label: "Research",
    title: "Research papers",
    lede: "Peer-reviewed papers on God, atheism, the Qur'an and Islam in modern society, by Muhammad Harris Suhaib and colleagues.",
  },
  blocks: [
    {
      type: "prose",
      label: "About",
      title: "Scholarship you can read",
      body: [
        `These ${papers.length} papers were published in academic journals between 2024 and 2026. Each one is open access: you can read and download the full paper for free.`,
        "Most papers have a short write-up on this site that explains the argument in plain language, with a link to the full paper. Papers marked “Full paper” open the original directly.",
      ],
    },
    {
      type: "prose",
      label: "The author",
      title: "Engr. Hafiz Muhammad Harris Suhaib",
      body: [
        "Muhammad Harris Suhaib is a research scholar in the Department of Islamic Studies at Al-Ghazali University, Karachi. An engineer and a hafiz of the Qur'an, he writes on the philosophy of religion, atheism and Islam's encounter with modern thought.",
        "He is the author of There is a GOD, a book of Islamic proofs for the existence of God, listed in our articles and books. Most of these papers were written with colleagues and teachers, including Dr. Muhammad Afzal and Dr. Muhammad Ismail Aarifi.",
      ],
    },
    ...topics.map((t, i) => ({
      type: "columns" as const,
      label: t.label,
      title: t.title,
      lede: t.lede,
      cols: 3 as const,
      ...(i % 2 ? { tone: "alt" as const } : {}),
      items: papers
        .filter((p) => p.topic === t.id)
        .sort((a, b) => Number(!!b.summary) - Number(!!a.summary))
        .map((p) => ({
          title: p.summary?.title ?? p.title,
          meta: p.summary ? citeLine(p) : `Full paper · ${citeLine(p)}`,
          body: p.blurb,
          href: p.summary ? paperPath(p) : doiUrl(p),
        })),
    })),
    {
      type: "cta",
      title: "Have a question about one of these papers?",
      body: "Ask us about anything you read here, or about Islam in general.",
      actions: [
        { label: "Ask a question", href: "/contact" },
        { label: "Articles & books", href: "/articles-books", variant: "secondary" },
      ],
    },
  ],
};

/** The site page for a summarized paper, built from the shared blocks. */
export function paperPage(p: Paper & { summary: NonNullable<Paper["summary"]> }): Page {
  const topic = topics.find((t) => t.id === p.topic)!;
  return {
    slug: `research/${p.slug}`,
    title: p.summary.title,
    description: p.summary.lede,
    hero: { label: `Research · ${topic.label}`, title: p.summary.title, lede: p.summary.lede },
    blocks: [
      { type: "prose", label: "Summary", title: "In brief", body: p.summary.body },
      { type: "points", label: "Key points", title: "What the paper argues", items: p.summary.points, tone: "alt" },
      {
        type: "columns",
        label: "The paper",
        title: p.title,
        cols: 3,
        items: [
          { title: "Authors", body: p.authors.join(", ") },
          { title: "Published", body: [p.journal, longDate(p.date)].filter(Boolean).join(", ") },
          { title: "Full paper", body: `Free to read under CC BY 4.0. DOI ${p.doi}`, href: doiUrl(p) },
        ],
      },
      {
        type: "cta",
        title: "Read the full paper",
        body: "This page is our summary. The paper itself sets out the full argument with its sources.",
        actions: [
          { label: "Read the paper", href: doiUrl(p) },
          { label: "All research", href: "/research", variant: "secondary" },
        ],
      },
    ],
  };
}

function longDate(iso: string) {
  if (iso.length === 4) return iso;
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
