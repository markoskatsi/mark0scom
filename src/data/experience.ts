import CSEConnectLogo from "../assets/experience/cseconnect.jpg";
import KingstonUniversityLogo from "../assets/experience/kingstonuni.png";
import MarksAndSpencerLogo from "../assets/experience/marksandspencers.png";

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  image?: string;
}

export const experience: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "CSE Connect",
    duration: "Jun 25 - Aug 25",
    description:
      "Worked in an Agile team to build a product for an actual client, coding only in pairs and shaping the work around sprint planning and regular feedback. We stayed in near-constant contact with the client throughout, turning their needs into features and keeping them in the loop as it came together. You can see it under SeAT in my projects, currently self-hosted on my home server.",
    image: CSEConnectLogo,
  },
  {
    title: "Teaching Assistant",
    company: "Kingston University",
    duration: "Sep 24 - Apr 26",
    description:
      "Supported teaching staff and mentored first and second year Computer Science students during workshops, helping them break down complex problems, build independent problem-solving skills, and grow in confidence. Also self-hosted a containerised backend app used by staff and students, handling deployment, updates, and uptime on my home server.",
    image: KingstonUniversityLogo,
  },
  {
    title: "Customer Assistant",
    company: "Marks and Spencer",
    duration: "Apr 2025 - Jul 2026",
    description:
      "Worked in a fast-paced retail environment to help fund my studies, balancing shifts around my degree. It kept me sharp under pressure and taught me how to communicate and stay reliable when things get busy.",
    image: MarksAndSpencerLogo,
  },
];
