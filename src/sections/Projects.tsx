import { projects } from "../data/projects.ts";
import { Card } from "../ui/Card.tsx";
import { Button, ButtonTray } from "../ui/Button.tsx";
import AliceCarouselModule from "react-alice-carousel";
const AliceCarousel =
  (AliceCarouselModule as any).default ?? AliceCarouselModule;
import "react-alice-carousel/lib/scss/alice-carousel.scss";

const Projects = () => {
  
  const handleDragStart = (e: React.DragEvent) => e.preventDefault();

  const projectsCarousel = projects.map((p) => (
    <div key={p.title} onDragStart={handleDragStart}>
      <Card>
        <div className="img">
          {p.image && <img src={p.image} alt={p.title} />}
          <div className="overlay">
            <h3>{p.title}</h3>
            <ButtonTray>
              {p.live && <Button href={p.live}>View Live</Button>}
              {p.download && <Button href={p.download}>Download</Button>}
              {p.github && (
                <Button variant="outline" href={p.github}>
                  Code
                </Button>
              )}
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
    </div>
  ));

  return (
    <section id="projects">
      <h2>Projects</h2>
      <AliceCarousel mouseTracking items={projectsCarousel} />
    </section>
  );
};

export default Projects;
