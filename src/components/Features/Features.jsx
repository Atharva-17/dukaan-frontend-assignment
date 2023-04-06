import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
import { ReactComponent as SelectIcon } from "../../assets/images/select.svg";
import { ReactComponent as StandoutIcon } from "../../assets/images/standout.svg";
import "./Features.css";

const Features = () => {
  return (
    <div className="main_features container flex">
      <div className="feature">
        <SearchIcon className="icon" />
        <h4 className="head">Search</h4>
        <p>
          Simply add a keyword or a term related to your business in the slogan
          maker search box. Wait for the magic to happen.
        </p>
      </div>
      <div className="feature">
        <SelectIcon className="icon" />
        <h4>Select</h4>
        <p>
          Choose from thousands of options generated by the slogan maker that
          fit your needs.
        </p>
      </div>
      <div className="feature">
        <StandoutIcon className="icon" />
        <h4>Stand out</h4>
        <p>Congrats on your new slogan. It's time to win the world!</p>
      </div>
    </div>
  );
};

export default Features;
