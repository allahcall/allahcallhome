export const letter = {
  to: "complaints@pemra.gov.pk",
  subject: "Formal complaint requesting review of The Witches",
  videoUrl: "https://youtu.be/GpadCHtRaqo",
  body: `Dear PEMRA Complaints Team,

I am writing to request a formal review of the music video The Witches, reportedly released on 31 October.

Video link:
https://youtu.be/GpadCHtRaqo

I am concerned about scenes that I consider vulgar, disturbing imagery, and the portrayal of witchcraft and occult practices. In my view, certain elements appear to glorify Satanism and present themes that conflict with my religious and moral convictions.

In particular, the portrayal of friendly relationships between witches and humans raises concerns for me about how the video presents witchcraft to younger viewers. I ask that reviewers assess whether the imagery and narrative merely depict supernatural fiction or actively encourage admiration for occult practices.

I also find several scenes distressing and request an assessment of their suitability for children and younger audiences, including whether appropriate age restrictions or content warnings are warranted.

Please review the video in its full context against the standards applicable to services within PEMRA's jurisdiction. If violations are established, I request appropriate regulatory action, including restrictions on or prohibition of its broadcast and promotional clips.

As the supplied link is hosted on YouTube, please advise whether this complaint should also be submitted to another competent authority or through YouTube's reporting process.

Please acknowledge receipt, provide a complaint reference number, and inform me of the outcome of the review.

Thank you for your understanding and attention to this matter.`,
};

const q = (s: string) => encodeURIComponent(s);

export const mailtoHref = `mailto:${letter.to}?subject=${q(letter.subject)}&body=${q(letter.body)}`;

export const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${q(letter.to)}&su=${q(letter.subject)}&body=${q(letter.body)}`;
