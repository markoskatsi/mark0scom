import { useState, useEffect } from "react";
import { Icon } from "../ui/Icon";

const icons = [Icon.Octopus, Icon.Cat, Icon.Fox, Icon.Panda];

const navItems = [
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
  { name: "projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

export const Header = () => {
  const [iconIndex, setIconIndex] = useState(0);

  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark-theme");
      return true;
    }
    return false;
  });

  const HeaderIcon = icons[iconIndex];

  const changeIcon = () => setIconIndex((prev) => (prev + 1) % icons.length);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark-theme");
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

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
