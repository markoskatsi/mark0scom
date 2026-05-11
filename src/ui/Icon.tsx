import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { GiOctopus } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
import { FaExpand } from "react-icons/fa";
import { GiCat } from "react-icons/gi";
import { GiFox } from "react-icons/gi";
import { GiPanda } from "react-icons/gi";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import "./Icon.scss";

export const Icon = ({ children }: { children: React.ReactNode }) => {
  return <div className="icon">{children}</div>;
};

function Expand({ size = 18 }: { size?: number }) {
  return (
    <span title="Expand" className="icon">
      <FaExpand size={size} />
    </span>
  );
}

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

function PDF({ size = 18 }: { size?: number }) {
  return (
    <span title="Download CV" className="icon">
      <FaFilePdf size={size} />
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

function FastAPI({ size = 18 }: { size?: number }) {
  return (
    <span title="FastAPI" className="icon">
      <SiFastapi size={size} />
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

function Cat({
  size = 18,
  noTitle = false,
}: {
  size?: number;
  noTitle?: boolean;
}) {
  if (noTitle) return <GiCat size={size} />;
  return (
    <span title="Cat" className="icon">
      <GiCat size={size} />
    </span>
  );
}

function Fox({
  size = 18,
  noTitle = false,
}: {
  size?: number;
  noTitle?: boolean;
}) {
  if (noTitle) return <GiFox size={size} />;
  return (
    <span title="Fox" className="icon">
      <GiFox size={size} />
    </span>
  );
}

function Panda({
  size = 18,
  noTitle = false,
}: {
  size?: number;
  noTitle?: boolean;
}) {
  if (noTitle) return <GiPanda size={size} />;
  return (
    <span title="Panda" className="icon">
      <GiPanda size={size} />
    </span>
  );
}

function Light({ size = 18 }: { size?: number }) {
  return (
    <div className="theme">
      <MdLightMode size={size} />
    </div>
  );
}

function Dark({ size = 18 }: { size?: number }) {
  return (
    <div className="theme">
      <MdDarkMode size={size} />
    </div>
  );
}

function Tick({ size = 16 }: { size?: number }) {
  return <FaCheck size={size} />;
}

function Cross({ size = 16 }: { size?: number }) {
  return <FaTimes size={size} />;
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
Icon.Expand = Expand;
Icon.Cat = Cat;
Icon.Fox = Fox;
Icon.Panda = Panda;
Icon.Light = Light;
Icon.Dark = Dark;
Icon.PDF = PDF;
Icon.Tick = Tick;
Icon.Cross = Cross;
Icon.FastAPI = FastAPI;
