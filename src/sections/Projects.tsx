import { projects } from "../data/projects.ts";
import { ProjectList } from "../entities/projects/ProjectList.tsx";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ProjectList projects={projects} />
    </section>
  );
};

export default Projects;
