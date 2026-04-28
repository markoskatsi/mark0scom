import { experience } from "../data/Experience";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experience.map((e) => (
        <div key={e.title}>
          <h3>
            {e.title} at {e.company}
          </h3>
          <p> {e.duration}</p>
          <p>{e.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
