import { projects } from "../data/projects.ts";
import { CardContainer, Card } from "../ui/Card.tsx";

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
                <div className="actions">
                  {p.live && (
                    <a href={p.live} className="btn-primary">
                      View Live
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} className="btn-outline">
                      Code
                    </a>
                  )}
                </div>
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
