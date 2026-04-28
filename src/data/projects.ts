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
      "SeAT is a React-based event seating + attendee management web app. Designed for a real client, it streamlines event setup, attendee intake, and seat allocation with reusable components, custom hooks, and clean data flows from REST APIs and CSV import/export.",
    skills: ["React", "JavaScript", "SCSS", "Pair Programming"],
    live: "https://seat.mark0s.com/",
    github: "https://github.com/markoskatsi/SeAT",
  },
  {
    title: "GeoQuest",
    description:
      "GeoQuest is a React Native mobile app for geocaching. It features map-based geocache discovery, user-generated cache creation with hints, and a gamified experience with points and badges. The app uses Expo for cross-platform development.",
    skills: ["React Native", "JavaScript", "Expo", "Map APIs"],
    github: "https://github.com/markoskatsi/GeoQuest",
  },
  {
    title: "HabitTracker",
    description:
      "HabitTracker is an Android App for tracking daily habits. It features a clean UI for habit creation with reminders, and progress visualisation through indidicatiors. Built with Kotlin and Android Jetpack components, it follows MVVM architecture for maintainability.",
    skills: ["Android", "Kotlin", "Jetpack", "MVVM"],
    github: "https://github.com/markoskatsi/HabitTracker",
  },
  {
    title: "Paws & Pixels",
    description:
      "Paws & Pixels is a full-stack PHP/MySQL app for a retro gaming + cat café. Users browse classic games, see platform compatibility, and book machines via an AJAX-driven UI. Built with a modular MVC.",
    skills: ["PHP", "JavaScript", "MySQL", "AJAX", "MVC"],
    live: "https://kunet.uk/k2328632/paws/index.php",
    github: "https://github.com/markoskatsi/PawsAndPixels",
  },
  {
    title: "CVBuilder",
    description:
      "CVBuilder is a Java Swing desktop app for curating CV content across two sections. It uses a tabbed interface with dynamic rows and single-choice radio groups so users can keep multiple versions and pick a preferred option per sub-section.",

    skills: ["Java", "Swing", "OOP", "MVC"],
    github: "https://github.com/markoskatsi/CVBuilder",
  },
];
