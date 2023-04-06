import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar container flex">
      <Logo />
      <nav>
        <ul>
          <li>Sign In</li>
          <li className="button">Dukaan for PC</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
