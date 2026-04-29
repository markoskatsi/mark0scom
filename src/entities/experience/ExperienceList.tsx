import { ExperienceItem } from "./ExperienceItem.tsx";

export const ExperienceList = ({ experience }: { experience: any[] }) => {
  return (
    <>
      {experience.map((e: any) => (
        <ExperienceItem key={e.title} experience={e} />
      ))}
    </>
  );
};
