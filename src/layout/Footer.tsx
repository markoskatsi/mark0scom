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
          Built with <Icon.React />, <Icon.TypeScript />, <Icon.SCSS />, and
          hosted on my <Icon.Home /> <Icon.Server />
        </div>
        <div className="footer-source">
          Source code available on{" "}
          <Button href="https://github.com/markoskatsi/mark0scom">
            <Icon.GitHub />
          </Button>
        </div>
      </div>
    </footer>
  );
};
