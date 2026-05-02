import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { personal } from "../data/personal.ts";
import { Button, ButtonTray } from "../ui/Button.tsx";
import { Icon } from "../ui/Icon.tsx";
import { Card } from "../ui/Card.tsx";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("sent");
        formRef.current?.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <Card>
        <div className="contact-wrapper">
          <div className="contact-top">
            <div className="contact-bio">
              <p className="contact-tagline">
                Open to opportunities, conversations, and building things
                together.
              </p>
              <a href={`mailto:${personal.email}`} className="contact-email">
                {personal.email}
              </a>
            </div>
            <div className="contact-info">
              <ButtonTray>
                <Button href={personal.linkedin} variant="contact-icon">
                  <Icon.Linkedin size={22} />
                </Button>
                <Button href={personal.github} variant="contact-icon">
                  <Icon.GitHub size={22} />
                </Button>
              </ButtonTray>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Send me a message:</label>
            <textarea id="message" name="message" rows={4} required />
            {status === "sent" && (
              <p className="form-status success">Message sent!</p>
            )}
            {status === "error" && (
              <p className="form-status error">
                Something went wrong. Try again.
              </p>
            )}
            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send"}
            </Button>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Contact;
