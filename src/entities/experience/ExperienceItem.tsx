import type { Experience } from "../../data/experience";

export const ExperienceItem = ({ experience }: { experience: Experience }) => {
  return (
    <div key={experience.title}>
      <h3>
        {experience.title} at {experience.company}
      </h3>
      <p> {experience.duration}</p>
      <p>{experience.description}</p>
    </div>
  );
};
