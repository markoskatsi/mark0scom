import { personal } from "../data/personal";
import { education } from "../data/education";
import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";
import { useState } from "react";
import { API } from "../api/API";
import { CVForm, type Email } from "../entities/contact/CVForm";

const About = () => {
  const kingston = education.find(
    (e) => e.institution === "Kingston University",
  )!;
  const barnsley = education.find((e) => e.institution === "Barnsley College")!;

  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState<"Send" | "Sending" | "Sent" | "Error">(
    "Send",
  );

  const handleSubmit = async (email: Email) => {
    setStatus("Sending");
    const response = await API.post("/cv", undefined, email);
    if (response.isSuccess) {
      setStatus("Sent");
    } else {
      setStatus("Error");
    }
  };

  return (
    <section id="about">
      <h1>{personal.name}</h1>
      <p>
        I'm a First-Class Honours {kingston.degree} graduate from{" "}
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
      <Button variant="square" onClick={() => setShowForm(!showForm)}>
        <Icon.PDF />
        Get CV
      </Button>

      <div className={`cv-form-container${showForm ? " cv-form-container--open" : ""}`}>
        <CVForm
          onSubmit={handleSubmit}
          submitText={status === "Sending" ? "Sending..." : "Send CV"}
          message={
            status === "Sent" ? (
              <p style={{ color: "green" }}>
                CV sent! Please check your inbox.
              </p>
            ) : status === "Error" ? (
              <p style={{ color: "red" }}>
                Failed to send CV. Please try again.
              </p>
            ) : null
          }
        />
      </div>
    </section>
  );
};

export default About;
