import { FaArrowUp } from "react-icons/fa";
import { useHasScrolled } from "../hooks/hasScrolled.tsx";

const ScrollToTop = () => {
  const hasScrolled = useHasScrolled();

  if (!hasScrolled) return null;

  return (
    <FaArrowUp
      size={18}
      className="up-arrow"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    />
  );
};

export default ScrollToTop;
