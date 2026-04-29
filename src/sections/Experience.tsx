import { experience } from "../data/experience.ts";
import { ExperienceList } from "../entities/experience/ExperienceList.tsx";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <ExperienceList experience={experience} />
    </section>
  );
};

export default Experience;
