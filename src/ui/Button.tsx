import "./Button.scss";

export const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled = false,
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "contact-icon" | "square" | "darkDanger";
  href?: string;
  onClick?: () => void;
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
      <button
        className={variant}
        disabled={disabled}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
};

export const ButtonTray = ({ children }: { children: React.ReactNode }) => {
  return <div className="buttonTray">{children}</div>;
};
