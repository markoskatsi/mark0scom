import { useEffect, useState } from "react";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark-theme");
      return true;
    }
    return false;
  });

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark-theme");
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return { isDark, toggleTheme };
};
