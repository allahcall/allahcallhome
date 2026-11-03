/**
 * Student reviews of our courses, workshops and sessions, in the students’ own
 * words (from Student_Course_Reviews.docx, November 2026). Only `rating` comes
 * from a star score the student gave; workshop comments were collected without one.
 */

export type Program = "why-islam" | "management" | "quran" | "workshop";

export type Review = {
  name: string;
  program: Program;
  /** Paragraphs, verbatim. */
  quote: string[];
  rating?: 5;
};

export const programs: Record<Program, string> = {
  "why-islam": "Why Islam Is True! · Course",
  management: "Islam on Management",
  quran: "The Quran in depth",
  workshop: "Why Islam Is True! · Workshop",
};

/** Shown in the home page wall before “Show all”, in this order. */
export const featured = [
  "Mugheera",
  "Sahar Qureshi",
  "Ayesha Zulfiqar",
  "Muhammad Saad",
  "Abeer Odho",
  "Ruqiya Korai",
  "Javeria Mumtaz",
  "Muneeb Ahmed Khan",
  "Romana Mustafa",
];

export const reviews: Review[] = [
  {
    name: "Mugheera",
    program: "why-islam",
    rating: 5,
    quote: [
      "Alhamdulillah, as expected, the course was very well delivered and prepared by Molana Engr. Hafiz Harris. All the questions were excellently presented with examples from daily life.",
      "As the instructor is a professional himself—a profound engineer—it was truly motivating for me to see that, regardless of one’s profession, if one is willing, they can easily balance Deen and Dunya. Engineer Hafiz Harris is a true inspiration for people.",
      "I highly recommend joining his courses, workshops, or Halaqas. Jazak Allah Khair.",
    ],
  },
  {
    name: "Rizwan Ahmad Malla",
    program: "why-islam",
    rating: 5,
    quote: [
      "Undoubtedly, this course is a fundamental need for those who wish to delve deep into Deen and follow the commands of Allah (SWT) and Muhammad (SAW). If someone does not have knowledge about Allah (SWT), how can they truly obey His commands? More importantly, how can they guide (preach to) others about Allah (SWT)?",
      "Eng. Muhammad Harris is truly a blessed personality. Allah (SWT) has accepted him for this noble mission, Masha’Allah. The way he teaches is outstanding and deeply satisfying.",
      "May Allah (SWT) be pleased with him. Aameen.",
    ],
  },
  {
    name: "Ayesha Zulfiqar",
    program: "why-islam",
    rating: 5,
    quote: [
      "Alhamdulillah, it was a very healthy and insightful discussion with Sir Haris. I gained a deeper understanding of many concepts that I had never thought about in this way before.",
      "The best part of the session was the opportunity to participate and critically think about the questions assigned as a task. I truly appreciate the efforts and dedication of Sir Haris, who humbly shared his knowledge throughout the session while maintaining an encouraging environment for everyone.",
      "May Allah (SWT) bless him and assist him in his Dawah work! Ameen.",
    ],
  },
  {
    name: "Irem Sajid",
    program: "why-islam",
    rating: 5,
    quote: [
      "Alhamdulillah, being a part of this group feels truly wonderful. I have learned so much, and I have gained awareness about important matters that I had never paid attention to before.",
      "Our respected teacher, Muhammad Harris Sahb, is incredibly kind, intelligent, and humble. His lectures have been a great source of learning, and he answered all questions in a clear and well-explained manner.",
      "May Allah (SWT) accept your efforts and bless you. Ameen. Jazak Allah!",
    ],
  },
  {
    name: "Romana Mustafa",
    program: "why-islam",
    rating: 5,
    quote: [
      "Having knowledge in any field is not enough; knowing how to use it is what truly matters.",
      "There is a God, written by Eng. Hafiz Muhammad Haris as a rebuttal to an atheist, presents very strong arguments with clear examples.",
      "The course related to this book was truly amazing and highly useful in guiding people towards Islam.",
    ],
  },
  {
    name: "Javeria Mumtaz",
    program: "why-islam",
    rating: 5,
    quote: [
      "First of all, I would like to thank Sir Harris for designing such a well-structured course.",
      "It provides answers to those who believe science is everything. Personally, I also benefited greatly from it.",
    ],
  },
  {
    name: "Abeer Odho",
    program: "why-islam",
    rating: 5,
    quote: [
      "This course by Haris Bhai has greatly helped me in developing a true understanding of the proper way to invite people toward Allah. More specifically, it has taught me how to engage with non-believers effectively.",
      "He emphasized the importance of tolerance and patience in Dawah work, which is essential for personal development. Additionally, he explained theories of morality, which have been invaluable in understanding and countering evolving concepts in the light of Islam.",
    ],
  },
  {
    name: "Farhana Hafeez",
    program: "why-islam",
    rating: 5,
    quote: ["The session was very interesting, informative, and eye-opening. The instructor’s teaching method was excellent. 👍"],
  },
  {
    name: "Areesha Batool",
    program: "why-islam",
    rating: 5,
    quote: [
      "This course has just begun, and I really appreciate how the instructor values students’ questions and considers their opinions.",
      "I also want to mention that the instructor is friendly and encourages critical thinking, helping students become capable of handling difficult religious questions.",
      "The course is well-suited for both fresh learners and scholars seeking to strengthen their critical thinking skills.",
    ],
  },
  {
    name: "Munazza Zubair",
    program: "why-islam",
    rating: 5,
    quote: [
      "Assalamualaikum wa Rahmatullahi wa Barakatuhu,",
      "This is a very beneficial course. I feel that after completing it, we will be capable of debating with non-Muslims and atheists and answering their questions effectively.",
      "Engr. Hafiz M. Harris is an excellent instructor, and we will, In Sha Allah, learn a lot from him.",
    ],
  },
  {
    name: "Bisma Liaqat",
    program: "why-islam",
    rating: 5,
    quote: [
      "Jazak Allah Khairan for this beautiful and informative course.",
      "After completing this course, In Shaa Allah, we will be able to answer the questions of non-Muslims and atheists and guide them about Allah (SWT).",
      "Engr. Hafiz M. Harris is an excellent instructor. Thank you for this insightful session—I learned a lot!",
    ],
  },
  {
    name: "Khola Hussain",
    program: "why-islam",
    rating: 5,
    quote: [
      "Ma Sha Allah, it was truly a great and amazing session. Sir Haris keeps the audience engaged while teaching, making the learning experience impactful.",
      "I am proud to be a part of this course, which will help us renew our faith, In Sha Allah. Jazak Allah Khair for your efforts. May Allah (SWT) accept them. Ameen.",
    ],
  },
  {
    name: "Binte Abdullah",
    program: "why-islam",
    rating: 5,
    quote: [
      "The session covered key qualities of a successful teacher, emphasizing both practical and theoretical aspects of teaching.",
      "This session provided valuable insights into effective teaching methods, making learning more impactful and engaging.",
    ],
  },
  {
    name: "Syed Muhammad",
    program: "management",
    rating: 5,
    quote: [
      "A very well-organized event in a very well-structured manner. Highlighted the importance of sleep management and spirituality. The lecture helps in practical implementation.",
      "I hope that if we implement it gradually and consistently, it can lead to improvement in life. I request you to kindly continue organizing such events, as they have ultimately fruitful results.",
    ],
  },
  {
    name: "Ahmad Taimoor",
    program: "management",
    rating: 5,
    quote: ["A very well-thought-out lecture—practical and easy to implement. The discussion about sleep was extremely helpful."],
  },
  {
    name: "Muneeb Ahmed Khan",
    program: "management",
    rating: 5,
    quote: [
      "MashaAllah, very well said. The use of hadiths to support the statements felt very appropriate, and the way the questions were answered at the end was very well put together.",
    ],
  },
  {
    name: "Syed Bilal Qaiser",
    program: "management",
    rating: 5,
    quote: ["MashaAllah, we gained great knowledge of Islam and Sunnah in this program, which brings a positive change in our lives."],
  },
  {
    name: "Rabia",
    program: "management",
    rating: 5,
    quote: ["The session was amazing. I would love to join it again and again."],
  },
  {
    name: "Sahar Qureshi",
    program: "management",
    rating: 5,
    quote: [
      "Loved it! I gained practical insights on optimizing sleep, nutrition, and spiritual well-being through a balanced routine rooted in Islamic principles. The emphasis on self-discipline, good company, and gradual habit change was particularly beneficial.",
      "The speaker was knowledgeable, blending scientific reasoning with Islamic teachings, making the advice both practical and spiritually enriching. Alhamdulillah.",
    ],
  },
  {
    name: "Aqsa Aslam",
    program: "management",
    rating: 5,
    quote: ["Interactive and informative session with a lot of knowledge about Islam and the Ramadan routine."],
  },
  {
    name: "Aisha Ali",
    program: "management",
    rating: 5,
    quote: ["Quite an informative and unique session, different from conventional ones. May Allah (SWT) make it beneficial for all."],
  },
  {
    name: "Asma",
    program: "management",
    rating: 5,
    quote: [
      "The session was really amazing. The Shaykh concisely delivered the lecture and covered the essential components like sleep, spiritual, and physical management for Ramadan.",
    ],
  },
  {
    name: "Ruqiya Korai",
    program: "management",
    rating: 5,
    quote: [
      "Alhamdulillah, this session was really amazing. The thing that stood out to me was when Maulana Harris spoke about the harm caused by sleeping between 6:30 - 9:00 a.m.",
    ],
  },
  { name: "Amna Sadia", program: "management", rating: 5, quote: ["This session covered all the topics we needed."] },
  {
    name: "Maheem Khan",
    program: "management",
    rating: 5,
    quote: ["This session provided to-the-point insights on topics related to hadith. The points discussed were very beneficial."],
  },
  {
    name: "Tooba Khan",
    program: "management",
    rating: 5,
    quote: ["This session was really good. Hafiz Sahab covered all the important points, which are essential for Ramadan."],
  },
  { name: "Memoona", program: "management", rating: 5, quote: ["This session was very good and informative."] },
  {
    name: "Arsheen Bhatti",
    program: "management",
    rating: 5,
    quote: ["The session covered all the topics of everyday life, and we can implement the knowledge."],
  },
  { name: "Farwa Shaikh", program: "management", rating: 5, quote: ["This session was quite informative and religious in all aspects."] },
  {
    name: "Muhammad Saad",
    program: "quran",
    quote: [
      "You are the best teacher! Masha Allah. Privileged to be taught by you. You go into immense details word by word. Its an absolute pleasure to listen and expand my islamic knowledge. May Allah bless you.",
    ],
  },
  { name: "Farman Hameed", program: "workshop", quote: ["Alhamdulillah, the discussion was very good."] },
  { name: "Zulnoorain Farooq", program: "workshop", quote: ["The session exceeded my expectations."] },
  { name: "Allah Rakha", program: "workshop", quote: ["It was a good session."] },
  { name: "Danish Shehzad", program: "workshop", quote: ["The session directed our attention towards something beneficial."] },
  { name: "Salman Younus", program: "workshop", quote: ["It was a good discussion."] },
  { name: "Mir Huzaifa Noor", program: "workshop", quote: ["Alhamdulillah, the session was very informative."] },
  { name: "Ibtisam Ahmed", program: "workshop", quote: ["MashaAllah, it was time well spent and very beneficial."] },
  { name: "Taha Rasool", program: "workshop", quote: ["MashaAllah, I benefited greatly from the session."] },
  { name: "Huzaifa Zahoor", program: "workshop", quote: ["MashaAllah, things are improving."] },
  { name: "Ishaq-ud-Din", program: "workshop", quote: ["Excellent. I benefited considerably."] },
  { name: "Razaullah", program: "workshop", quote: ["Alhamdulillah, the session was very good, and I learned a lot."] },
  { name: "Umair Ali", program: "workshop", quote: ["The session was good, but more time was needed for questions and answers."] },
  { name: "Afaq Raheem", program: "workshop", quote: ["Excellent and outstanding."] },
  { name: "Muhammad Isa", program: "workshop", quote: ["I benefited from the lecture."] },
];
