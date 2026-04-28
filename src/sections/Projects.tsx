import { projects } from "../data/projects.ts";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((p) => (
        <div key={p.title}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          {p.live && <a href={p.live}>Live</a>}
          {p.github && <a href={p.github}>GitHub</a>}
        </div>
      ))}
    </section>
  );
};

export default Projects;
