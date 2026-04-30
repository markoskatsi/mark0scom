export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export const experience: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "CSE Connect",
    duration: "Jun 25 - Aug 25",
    description:
      "Worked within an Agile team to deliver a real client product, contributing through sprint planning, pair programming, and regular feedback sessions. Translated client requirements into actionable tasks, communicated progress directly with stakeholders, and iterated on solutions to meet their needs.",
  },
  {
    title: "Teaching Assistant",
    company: "Kingston University",
    duration: "Sep 24 - Apr 26",
    description:
      "Supported teaching staff and mentored first and second year Computer Science students during workshops, helping them break down complex problems, build independent problem-solving skills, and grow in confidence.",
  },
  {
    title: "Customer Assistant",
    company: "Marks and Spencer",
    duration: "Apr 2025 - Present",
    description:
      "Working alongside my studies to develop communication, teamwork, and adaptability in a fast-paced customer-facing environment. Supporting day-to-day store operations has strengthened my ability to stay focused and efficient under pressure, skills I bring directly into my work as a developer.",
  },
];
