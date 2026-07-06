import { skillCategories } from "../data/skills";
import "./Skills.scss";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillCategories.map(({ category, skills }) => (
          <div key={category} className="skills-group">
            <h3>{category}</h3>
            <div className="skills-pills">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
