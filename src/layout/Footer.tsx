import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import "./Footer.scss";
import { Button } from "../ui/Button";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-welcome">
        <div>Thanks for visiting!</div>
      </div>
      <div className="footer-right">
        <div className="footer-info">
          Built with{" "}
          <span title="React">
            <FaReact />
          </span>
          ,{" "}
          <span title="TypeScript">
            <BiLogoTypescript />
          </span>
          ,{" "}
          <span title="SCSS">
            <BsFiletypeScss />
          </span>
          , and hosted on my{" "}
          <span title="Home Server">
            <FaHome />
            <FaServer />
          </span>
        </div>
        <div className="footer-source">
          Source code available on{" "}
          <Button href="https://github.com/markoskatsi/mark0scom">
            <FaGithub />
          </Button>
        </div>
      </div>
    </footer>
  );
};
