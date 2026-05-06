import Form from "../../ui/Form";

export interface Email extends Record<string, unknown> {
  email: string;
}

const emptyEmail: Email = {
  email: "",
};

export const CVForm = ({
  onSubmit,
  initialEmail = emptyEmail,
  submitText,
  message,
}: {
  onSubmit: (data: Email) => void;
  initialEmail?: Email;
  submitText?: string;
  message?: React.ReactNode;
}) => {
  const validation = {
    isValid: {
      email: (v: unknown) =>
        typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    },
    errorMessage: {
      email: "Please provide a valid email address :)",
    },
  };

  const [contact, errors, handleChange, handleSubmit] = Form.useForm(
    initialEmail,
    validation,
    onSubmit,
  );

  return (
    <Form onSubmit={handleSubmit} submitText={submitText} message={message}>
      <Form.Item label="Email" htmlFor="email" error={errors.email}>
        <input
          className="FormInput"
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email to receive my CV"
          value={contact.email}
          onChange={handleChange}
        />
      </Form.Item>
    </Form>
  );
};
