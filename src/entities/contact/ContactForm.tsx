import { useState } from "react";
import { Button } from "../../ui/Button.tsx";
import { API } from "../../api/API.ts";

const emptyForm = {
  name: "",
  email: "",
  message: "",
};

export const ContactForm = () => {
  const [fields, setFields] = useState(emptyForm);

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await API.post("/contact", fields);
      setStatus("sent");
      setFields(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-title">Send me a message</div>
      <label htmlFor="name">Your Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={fields.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Your Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={fields.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="message">Your Message:</label>
      <textarea
        id="message"
        name="message"
        rows={4}
        value={fields.message}
        onChange={handleChange}
        required
      />
      {status === "sent" && (
        <p className="form-status success">Message sent!</p>
      )}
      {status === "error" && (
        <p className="form-status error">
          Something went wrong. Please try again.
        </p>
      )}
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send"}
      </Button>
    </form>
  );
};
