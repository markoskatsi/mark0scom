import { personal } from "../data/personal.ts";
import { Button, ButtonTray } from "../ui/Button.tsx";
import { Icon } from "../ui/Icon.tsx";
import { Card } from "../ui/Card.tsx";
import { ContactForm } from "../entities/contact/ContactForm.tsx";
import type { ContactRecord } from "../entities/contact/ContactForm.tsx";
import { API } from "../api/API.ts";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState<"Send" | "Sending" | "Sent" | "Error">(
    "Send",
  );

  const handleSubmit = async (data: ContactRecord) => {
    setStatus("Sending");
    const response = await API.post("/contact", data);
    if (response.isSuccess) {
      setStatus("Sent");
    } else {
      setStatus("Error");
    }
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
          <ContactForm
            onSubmit={handleSubmit}
            submitText={status}
            message={
              status === "Sent" ? (
                <p style={{ color: "green", margin: "4px 0" }}>Message sent successfully!</p>
              ) : status === "Error" ? (
                <p style={{ color: "red", margin: "4px 0" }}>Failed to send message.</p>
              ) : null
            }
          />
        </div>
      </Card>
    </section>
  );
};

export default Contact;
