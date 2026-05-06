import Form from "../../ui/Form";

export interface ContactRecord extends Record<string, unknown> {
  name: string;
  email: string;
  message: string;
}

const emptyContact: ContactRecord = {
  name: "",
  email: "",
  message: "",
};

export const ContactForm = ({
  onSubmit,
  initialContact = emptyContact,
  submitText,
  message,
}: {
  onSubmit: (data: ContactRecord) => void;
  initialContact?: ContactRecord;
  submitText?: string;
  message?: React.ReactNode;
}) => {
  const validation = {
    isValid: {
      name: (v: unknown) => typeof v === "string" && v.length > 2,
      email: (v: unknown) =>
        typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: (v: unknown) => typeof v === "string" && v.length > 2,
    },
    errorMessage: {
      name: "Surely your name is longer :)",
      email: "Please provide a valid email address :)",
      message: "Please provide a more meaningful message :)",
    },
  };

  const [contact, errors, handleChange, handleSubmit] = Form.useForm(
    initialContact,
    validation,
    onSubmit,
  );

  return (
    <Form onSubmit={handleSubmit} submitText={submitText} message={message}>
      <Form.Item label="Name" htmlFor="name" error={errors.name}>
        <input
          className="FormInput"
          type="text"
          name="name"
          id="name"
          value={contact.name}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item label="Email" htmlFor="email" error={errors.email}>
        <input
          className="FormInput"
          type="text"
          name="email"
          id="email"
          value={contact.email}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item label="Message" htmlFor="message" error={errors.message}>
        <textarea
          className="FormInput"
          name="message"
          id="message"
          value={contact.message}
          onChange={handleChange}
          rows={4}
        />
      </Form.Item>
    </Form>
  );
};
