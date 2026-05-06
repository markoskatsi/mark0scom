import { personal } from "../data/personal";
import { education } from "../data/education";
import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";
import { useState } from "react";
import { API } from "../api/API";

const About = () => {
  const kingston = education.find(
    (e) => e.institution === "Kingston University",
  )!;
  const barnsley = education.find((e) => e.institution === "Barnsley College")!;

  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "typing" | "sending" | "sent" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const response = await API.post("/cv", undefined, { email });
    if (response.isSuccess) {
      setEmail("");
      setShowForm(false);
      setStatus("sent");
    } else {
      setStatus("error");
    }
  };

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
      <Button variant="square" onClick={() => setShowForm(!showForm)}>
        <Icon.PDF />
        Get CV
      </Button>
      {status === "sent" && (
        <p style={{ color: "green" }}>CV sent! Please check your inbox.</p>
      )}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Enter your email to receive my CV:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button type="submit">
            {status === "sending" ? "Sending..." : "Send"}
          </Button>
          {status === "error" && (
            <p style={{ color: "red" }}>
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      )}
    </section>
  );
};

export default About;
