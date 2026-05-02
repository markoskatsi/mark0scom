import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../../ui/Button.tsx";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const ContactForm = () => {
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
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="form-title">Send me a message</div>
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
        <p className="form-status error">Something went wrong. Try again.</p>
      )}
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send"}
      </Button>
    </form>
  );
};
