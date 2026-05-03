import { Button, ButtonTray } from "../../ui/Button";
import React from "react";
import ReactDOM from "react-dom";
import { Icon } from "../../ui/Icon";
import type { Project } from "../../data/projects";

export const ProjectItem = ({ project }: { project: Project }) => {
  const [showImage, setShowImage] = React.useState(false);

  return (
    <>
      {showImage &&
        project.image &&
        ReactDOM.createPortal(
          <div className="lightbox" onClick={() => setShowImage(false)}>
            <img src={project.image} alt={project.title} />
          </div>,
          document.body,
        )}
      <div className="img">
        {project.image && <img src={project.image} alt={project.title} />}
        <div className="expand-icon" onClick={() => setShowImage(true)}>
          <Icon.Expand size={26} />
        </div>
        <div className="overlay">
          <h3>{project.title}</h3>
          <ButtonTray>
            {project.live && <Button href={project.live}>View Live</Button>}
            {project.github && (
              <Button variant="outline" href={project.github}>
                <Icon.GitHub size={16} />
                Code
              </Button>
            )}
          </ButtonTray>
        </div>
      </div>
      <div className="content">
        <p>{project.description}</p>
        {project.skills && (
          <div className="skills">
            {project.skills.map((skill: string) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
