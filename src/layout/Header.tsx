import "./Header.scss";
import { ThemeToggle } from "../ui/ThemeToggle";
import { IconCycle } from "../ui/IconCycle";

const navItems = [
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "experience", href: "#experience" },
  { name: "projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

export const Header = () => {
  return (
    <header>
      <IconCycle />
      <nav>
        {navItems.map((item) => (
          <a key={item.name} href={item.href}>{item.name}</a>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
};
