import seatImage from "../assets/projects/seat.jpg";
import pawsImage from "../assets/projects/paws.png";
import cvbuilderImage from "../assets/projects/cvbuilder.jpg";

export interface Project {
  title: string;
  description: string;
  skills: string[];
  live?: string;
  image?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "SeAT",
    description:
      "React web app for event seating and attendee management, built for a real client.",
    skills: ["React", "JavaScript", "SCSS", "Pair Programming"],
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
  },
  {
    title: "HabitTracker",
    description:
      "Android habit tracker with reminders and progress indicators, built in Kotlin with MVVM architecture.",
    skills: ["Android", "Kotlin", "Jetpack", "MVVM"],
    github: "https://github.com/markoskatsi/HabitTracker",
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
    title: "CVBuilder",
    description:
      "Java Swing desktop app for building and managing CV content across multiple versioned sections.",

    skills: ["Java", "Swing", "OOP", "MVC"],
    github: "https://github.com/markoskatsi/CVBuilder",
    image: cvbuilderImage,
  },
];
