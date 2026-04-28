import { projects } from "../data/projects.ts";
import { CardContainer, Card } from "../ui/Card.tsx";
import { Button, ButtonTray } from "../ui/Button.tsx";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <CardContainer>
        {projects.map((p) => (
          <Card key={p.title}>
            <div className="img">
              {p.image && <img src={p.image} alt={p.title} />}
              <div className="overlay">
                <h3>{p.title}</h3>
                <ButtonTray>
                  {p.live && <Button href={p.live}>View Live</Button>}
                  {p.download && <Button href={p.download}>Download</Button>}
                  {p.github && <Button variant="outline" href={p.github}>Code</Button>}
                </ButtonTray>
              </div>
            </div>
            <div className="content">
              <p>{p.description}</p>
              {p.skills && (
                <div className="skills">
                  {p.skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              )}
            </div>
          </Card>
        ))}
      </CardContainer>
    </section>
  );
};

export default Projects;
