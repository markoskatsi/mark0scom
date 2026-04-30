import AliceCarouselModule from "react-alice-carousel";
const AliceCarousel =
  (AliceCarouselModule as any).default ?? AliceCarouselModule;
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { Card } from "../../ui/Card.tsx";
import { ProjectItem } from "./ProjectItem.tsx";
import type { Project } from "../../data/projects.ts";

export const ProjectList = ({ projects }: { projects: Project[] }) => {
  const handleDragStart = (e: React.DragEvent) => e.preventDefault();

  const projectsCarousel = projects.map((p) => (
    <div key={p.title} onDragStart={handleDragStart}>
      <Card>
        <ProjectItem project={p} />
      </Card>
    </div>
  ));

  return <AliceCarousel mouseTracking items={projectsCarousel} />;
};
