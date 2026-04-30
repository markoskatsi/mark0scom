import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { GiOctopus } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
import "./Icon.scss";

export const Icon = ({ children }: { children: React.ReactNode }) => {
  return <div className="icon">{children}</div>;
};

function GitHub({ size = 18 }: { size?: number }) {
  return (
    <span title="GitHub" className="icon">
      <FaGithub size={size} />
    </span>
  );
}

function Linkedin({ size = 18 }: { size?: number }) {
  return <FaLinkedin size={size} />;
}

function React({ size = 18 }: { size?: number }) {
  return (
    <span title="React" className="icon">
      <FaReact size={size} />
    </span>
  );
}

function TypeScript({ size = 18 }: { size?: number }) {
  return (
    <span title="TypeScript" className="icon">
      <BiLogoTypescript size={size} />
    </span>
  );
}

function SCSS({ size = 18 }: { size?: number }) {
  return (
    <span title="SCSS" className="icon">
      <BsFiletypeScss size={size} />
    </span>
  );
}

function Home({ size = 18 }: { size?: number }) {
  return (
    <span title="Home" className="icon">
      <FaHome size={size} />
    </span>
  );
}

function Server({ size = 18 }: { size?: number }) {
  return (
    <span title="Server" className="icon">
      <FaServer size={size} />
    </span>
  );
}

function Linux({ size = 18 }: { size?: number }) {
  return (
    <span title="Linux" className="icon">
      <FaLinux size={size} />
    </span>
  );
}

function Octopus({
  size = 18,
  noTitle = false,
}: {
  size?: number;
  noTitle?: boolean;
}) {
  if (noTitle) {
    return <GiOctopus size={size} />;
  }
  return (
    <span title="Octopus" className="icon">
      <GiOctopus size={size} />
    </span>
  );
}

Icon.GitHub = GitHub;
Icon.React = React;
Icon.TypeScript = TypeScript;
Icon.SCSS = SCSS;
Icon.Home = Home;
Icon.Server = Server;
Icon.Linux = Linux;
Icon.Octopus = Octopus;
Icon.Linkedin = Linkedin;
