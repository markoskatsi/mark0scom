import { personal } from "../data/personal";
import { education } from "../data/education";

const About = () => {
  const kingston = education[0];
  const barnsley = education[1];

  return (
    <section id="about">
      <h1>{personal.name}</h1>
      <p>
        I am currently a final-year {kingston.degree} student @{" "}
        <strong>{kingston.institution}</strong>. I'm passionate about full-stack
        development and building projects that make a real difference in
        people's daily lives. I'm currently looking for{" "}
        <strong>opportunities</strong> to contribute and grow as a developer.
      </p>
      <p>
        My interest in computers started young, getting my first PC and wanting
        to know how everything worked behind the scenes. That curiosity grew
        into tinkering with hardware, becoming the tech support for my parents,
        and eventually studying {barnsley.degree} @{" "}
        <strong>{barnsley.institution}</strong>. Once I was introduced to
        programming, I knew I wanted to take it further, which led me to{" "}
        {kingston.degree} @ {kingston.institution}.
      </p>
      <p>
        I enjoy taking applications through the full development process, from
        initial concept to final deployment, and I'm always eager to pick up new
        technologies along the way. Right now I'm using my home lab to host all
        my projects and take them through the entire lifecycle from design to
        development and deployment, using modern tools and practices.
      </p>
    </section>
  );
};

export default About;
