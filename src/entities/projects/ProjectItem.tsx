import { Button, ButtonTray } from "../../ui/Button";

export const ProjectItem = ({ project }: { project: any }) => {
  return (
    <>
      <div className="img">
        {project.image && <img src={project.image} alt={project.title} />}
        <div className="overlay">
          <h3>{project.title}</h3>
          <ButtonTray>
            {project.live && <Button href={project.live}>View Live</Button>}
            {project.download && (
              <Button href={project.download}>Download</Button>
            )}
            {project.github && (
              <Button variant="outline" href={project.github}>
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
            {project.skills.map((s: string) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
