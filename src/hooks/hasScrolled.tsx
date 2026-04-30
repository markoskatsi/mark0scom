import { useEffect, useState } from "react";

export const useHasScrolled = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return hasScrolled;
};
