import { Icon } from "../ui/Icon";

const navItems = [
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
  { name: "projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

export const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <Icon.Octopus size={28} noTitle />
      </div>
      {navItems.map((item) => (
        <div key={item.name}>
          <a href={item.href}>{item.name}</a>
        </div>
      ))}
    </header>
  );
};
