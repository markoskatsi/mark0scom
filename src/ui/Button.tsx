import "./Button.scss";

export const Button = ({
  children,
  variant = "primary",
  href,
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
}) => {
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
};

export const ButtonTray = ({ children }: { children: React.ReactNode }) => {
  return <div className="buttonTray">{children}</div>;
};
