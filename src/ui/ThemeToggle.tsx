import { useTheme } from "../hooks/useTheme.tsx";
import { Icon } from "./Icon.tsx";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme}>
      {isDark ? <Icon.Light size={28} /> : <Icon.Dark size={28} />}
    </div>
  );
};
