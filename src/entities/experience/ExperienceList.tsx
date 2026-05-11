import type { Experience } from "../../data/experience.ts";
import { CardContainer } from "../../ui/Card.tsx";
import { ExperienceItem } from "./ExperienceItem.tsx";

export const ExperienceList = ({
  experience,
}: {
  experience: Experience[];
}) => {
  return (
    <CardContainer>
      {experience.map((e: Experience) => (
        <ExperienceItem key={e.title} experience={e} />
      ))}
    </CardContainer>
  );
};
