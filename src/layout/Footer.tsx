import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-welcome">
        <div>Thanks for visiting!</div>
      </div>
      <div className="footer-right">
        <div className="footer-info">
          Built with React, TypeScript and FastAPI.
        </div>
        <div className="footer-source">
          Source code available on{" "}
          <a
            href="https://github.com/markoskatsi/mark0scom"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
