import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Flag } from "../../assets/images/flag.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="top">
        <Logo />
        <div className="footer_section">
          <p>Contact</p>
          <p>FAQ&apos;s</p>
        </div>
        <div className="footer_section">
          <p>Tutorials</p>
          <p>Blog</p>
        </div>
        <div className="footer_section">
          <p>Privacy</p>
          <p>Banned Items</p>
        </div>
        <div className="footer_section">
          <p>About</p>
          <p className="jobs">
            Jobs <span className="round">3</span>
          </p>
        </div>
        <div className="footer_section">
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Linkedin</p>
        </div>
      </div>
      <div className="bottom">
        <div className="copyright"> Dukaan 2020, All rights reserved.</div>
        <div className="country">
          Made in <Flag className="flag" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
