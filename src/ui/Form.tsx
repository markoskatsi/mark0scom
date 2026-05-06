import { Icon } from "./Icon";
import { Button, ButtonTray } from "./Button";
import { useState } from "react";
import "./Form.scss";

export default function Form({
  children,
  onSubmit,
  onCancel,
  submitText,
  message,
}: {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
  onCancel?: () => void;
  submitText?: string;
  message?: React.ReactNode;
}) {
  return (
    <form className="Form Bordered" onSubmit={onSubmit}>
      <div className="FormTray">{children}</div>
      {message}
      <ButtonTray>
        <Button type="submit">
          <Icon.Tick />
          {submitText}
        </Button>
        {onCancel && (
          <Button onClick={onCancel} variant="darkDanger" type="button">
            <Icon.Cross />
            Cancel
          </Button>
        )}
      </ButtonTray>
    </form>
  );
}

function Item({
  children,
  label,
  htmlFor,
  error,
}: {
  children: React.ReactNode;
  label: string;
  htmlFor: string;
  error?: string | null;
}) {
  return (
    <div className="FormItem">
      <label className="FormLabel" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {error && <p className="FormError">{error}</p>}
    </div>
  );
}

function useForm<T extends Record<string, unknown>>(
  initialRecord: T,
  {
    isValid,
    errorMessage,
  }: {
    isValid: Partial<Record<string, (v: unknown) => boolean>>;
    errorMessage: Partial<Record<string, string>>;
  },
  onSubmit: (record: T) => void | Promise<void>,
  onCancel?: () => void,
) {
  const [record, setRecord] = useState<T>(initialRecord);
  const [errors, setErrors] = useState<Record<string, string | null>>(
    Object.keys(initialRecord).reduce(
      (accum, key) => ({ ...accum, [key]: null }),
      {},
    ),
  );
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setRecord({ ...record, [name]: value } as T);
    if (submitted) {
      setErrors({
        ...errors,
        [name]: isValid[name]
          ? isValid[name]!(value)
            ? null
            : (errorMessage[name] ?? null)
          : null,
      });
    }
  };

  const isValidRecord = (rec: T) => {
    let valid = true;
    const next = { ...errors };
    Object.keys(rec).forEach((key) => {
      if (isValid[key]) {
        if (isValid[key]!(rec[key])) {
          next[key] = null;
        } else {
          next[key] = errorMessage[key] ?? null;
          valid = false;
        }
      }
    });
    Object.assign(errors, next);
    return valid;
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (isValidRecord(record)) {
      await onSubmit(record);
      setRecord(initialRecord);
      setErrors(
        Object.keys(initialRecord).reduce(
          (acc, key) => ({ ...acc, [key]: null }),
          {},
        ),
      );
      setSubmitted(false);
    } else {
      setErrors({ ...errors });
    }
  };

  const handleCancel = () => {
    onCancel?.();
  };

  return [record, errors, handleChange, handleSubmit, handleCancel] as const;
}

Form.Item = Item;
Form.useForm = useForm;
