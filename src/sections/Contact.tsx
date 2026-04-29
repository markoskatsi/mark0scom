import { personal } from "../data/personal.ts";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>You can reach me at {personal.email}</p>
      <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href={personal.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </section>
  );
};

export default Contact;
