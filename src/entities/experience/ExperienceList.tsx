import type { Experience } from "../../data/experience.ts";
import { ExperienceItem } from "./ExperienceItem.tsx";

export const ExperienceList = ({ experience }: { experience: Experience[] }) => {
  return (
    <>
      {experience.map((e: Experience) => (
        <ExperienceItem key={e.title} experience={e} />
      ))}
    </>
  );
};
