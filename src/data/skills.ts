export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "PHP"],
  },
  {
    category: "Frontend",
    skills: ["React", "React Native", "HTML", "CSS / SCSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "Oracle"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub Actions", "Linux", "CI/CD"],
  },
  {
    category: "Methodologies",
    skills: ["Agile / Scrum", "OOP", "MVC"],
  },
  {
    category: "Spoken Languages",
    skills: ["English", "Greek"],
  },
];
