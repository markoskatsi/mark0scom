import factcheckImage from "../assets/projects/factcheck.png";
import seatImage from "../assets/projects/seat.jpg";
import pawsImage from "../assets/projects/paws.png";
import cvbuilderImage from "../assets/projects/cvbuilder.jpg";
import codesheildImage from "../assets/projects/codeshield.png";

export interface Project {
  title: string;
  description: string;
  skills: string[];
  live?: string;
  image?: string;
  github?: string;
  download?: string;
}

export const projects: Project[] = [
  {
    title: "FactCheck",
    description:
      "Full-stack fact-checking app with a React frontend, containerised Node.js/Express API, and MySQL database. Self-hosted on a personal Ubuntu server with a CI/CD pipeline via GitHub Actions.",
    skills: [
      "React",
      "Express",
      "JavaScript",
      "CI/CD pipelines",
      "Docker",
      "MySQL",
      "SCSS",
    ],
    live: "https://factcheck.mark0s.com/",
    github: "https://github.com/markoskatsi/factcheck-frontend",
    image: factcheckImage,
  },
  {
    title: "SeAT",
    description:
      "React web app for event seating and attendee management, built for a real client.",
    skills: [
      "React",
      "JavaScript",
      "SCSS",
      "Pair Programming",
      "CI/CD pipelines",
    ],
    live: "https://seat.mark0s.com/",
    github: "https://github.com/markoskatsi/SeAT",
    image: seatImage,
  },
  {
    title: "GeoQuest",
    description:
      "React Native geocaching app with map-based discovery, user-created caches, and gamified points system.",
    skills: ["React Native", "JavaScript", "Expo", "Map APIs"],
    github: "https://github.com/markoskatsi/GeoQuest",
    download: "https://expo.dev/@markoskatsi/geoquest",
  },
  {
    title: "HabitTracker",
    description:
      "Android habit tracker with reminders and progress indicators, built in Kotlin with MVVM architecture.",
    skills: ["Android", "Kotlin", "Jetpack", "MVVM"],
    github: "https://github.com/markoskatsi/HabitTracker",
    download:
      "https://play.google.com/store/apps/details?id=com.markoskatsi.habittracker",
  },
  {
    title: "Paws & Pixels",
    description:
      "Full-stack PHP/MySQL app for a retro gaming café with game browsing and machine booking.",
    skills: ["PHP", "JavaScript", "MySQL", "AJAX", "MVC"],
    live: "https://kunet.uk/k2328632/paws/index.php",
    github: "https://github.com/markoskatsi/PawsAndPixels",
    image: pawsImage,
  },
  {
    title: "CodeShield",
    description:
      "Pytest test suite for a FastAPI backend with mocking, plus manual UI testing of a React frontend.",
    skills: ["Pytest", "Mocking", "Testing"],
    github: "https://github.com/XP-Elites/XP-Backend/tree/main/tests",
    live: "https://xp.cattoindustries.com/",
    image: codesheildImage,
  },
  {
    title: "CVBuilder",
    description:
      "Java Swing desktop app for building and managing CV content across multiple versioned sections.",

    skills: ["Java", "Swing", "OOP", "MVC"],
    github: "https://github.com/markoskatsi/CVBuilder",
    image: cvbuilderImage,
    download: "https://expo.dev/@markoskatsi/cvbuilder",
  },
];
