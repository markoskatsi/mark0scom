import "./Header.scss";
import { ThemeToggle } from "../ui/ThemeToggle";
import { IconCycle } from "../ui/IconCycle";

const navItems = [
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
  { name: "projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

export const Header = () => {
  return (
    <header>
      <IconCycle />
      {navItems.map((item) => (
        <div key={item.name}>
          <a href={item.href}>{item.name}</a>
        </div>
      ))}
      <ThemeToggle />
    </header>
  );
};
