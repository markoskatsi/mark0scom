import { useState } from "react";
import { Icon } from "./Icon";

const icons = [Icon.Octopus, Icon.Cat, Icon.Fox, Icon.Panda];

export const IconCycle = () => {
  const [iconIndex, setIconIndex] = useState(0);

  const HeaderIcon = icons[iconIndex];

  const changeIcon = () => setIconIndex((prev) => (prev + 1) % icons.length);

  return (
    <div className="header-logo" onClick={changeIcon}>
      <HeaderIcon size={28} noTitle />
    </div>
  );
};
