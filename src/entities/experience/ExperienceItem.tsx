export const ExperienceItem = ({ experience }: { experience: any }) => {
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
