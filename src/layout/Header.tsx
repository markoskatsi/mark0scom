import { useState } from "react";
import { Icon } from "../ui/Icon";
import { useTheme } from "../hooks/useTheme.tsx";
import "./Header.scss";

const icons = [Icon.Octopus, Icon.Cat, Icon.Fox, Icon.Panda];

const navItems = [
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
  { name: "projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  const [iconIndex, setIconIndex] = useState(0);

  const HeaderIcon = icons[iconIndex];

  const changeIcon = () => setIconIndex((prev) => (prev + 1) % icons.length);

  return (
    <header>
      <div className="header-logo" onClick={changeIcon}>
        <HeaderIcon size={28} noTitle />
      </div>
      {navItems.map((item) => (
        <div key={item.name}>
          <a href={item.href}>{item.name}</a>
        </div>
      ))}
      <div onClick={toggleTheme}>
        {isDark ? <Icon.Light size={28} /> : <Icon.Dark size={28} />}
      </div>
    </header>
  );
};
