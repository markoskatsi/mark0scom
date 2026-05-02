import "./Button.scss";

export const Button = ({
  children,
  variant = "primary",
  href,
  type = "button",
  disabled = false,
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "contact-icon";
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) => {
  if (href) {
    return (
      <a
        className={variant}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  } else {
    return (
      <button className={variant} disabled={disabled} type={type}>
        {children}
      </button>
    );
  }
};

export const ButtonTray = ({ children }: { children: React.ReactNode }) => {
  return <div className="buttonTray">{children}</div>;
};
