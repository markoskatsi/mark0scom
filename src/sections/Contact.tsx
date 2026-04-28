import { personal } from "../data/personal.ts";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>You can reach me at {personal.email}</p>
      <a href={personal.linkedin}>LinkedIn</a>
      <a href={personal.github}>GitHub</a>
    </section>
  );
};

export default Contact;
