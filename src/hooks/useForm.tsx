import { useState } from "react";

export const useForm = <T extends Record<string, unknown>>(
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
) => {
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
};
