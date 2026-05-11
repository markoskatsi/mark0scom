import type { Experience } from "../../data/experience";
import { Card } from "../../ui/Card";

export const ExperienceItem = ({ experience }: { experience: Experience }) => {
  return (
    <Card key={experience.title}>
      <div className="experience-card">
        <div className="experience-header">
          <div className="experience-details">
            {experience.image && (
              <img
                src={experience.image}
                alt={`${experience.company} logo`}
                className="company-logo"
              />
            )}
            <div className="experience-role">
              <h3 className="title">{experience.title}</h3>
              <span className="company">{experience.company}</span>
            </div>
          </div>
          <span className="duration">{experience.duration}</span>
        </div>
        <p className="description">{experience.description}</p>
      </div>
    </Card>
  );
};
