import { personal } from "../data/personal.ts";
import { Button, ButtonTray } from "../ui/Button.tsx";
import { Icon } from "../ui/Icon.tsx";
import { Card } from "../ui/Card.tsx";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <Card>
        <div className="contact-wrapper">
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
      </Card>
    </section>
  );
};

export default Contact;
