import { useState } from "react";
import { ReactComponent as Clear } from "../../assets/images/cross.svg";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";
import SloganCard from "../SloganCard/SloganCard";
import "./Results.css";

const sloganResults = [
  `There is no Sore it will Not Heal, No cool it will not Subdue.`,
  `coziness building for tomorrow`,
  `There is no Sore it will Not Heal, No cool it will not Subdue.`,
  `Review the facts cool is the best.`,
  `There is no Sore it will Not Heal, No cool it will not Subdue.`,
  `coziness building for tomorrow`,
  `There is no Sore it will Not Heal, No cool it will not Subdue.`,
  `Review the facts cool is the best.`,
  `There is no Sore it will Not Heal, No cool it will not Subdue.`,
  `coziness building for tomorrow`,
  `There is no Sore it will Not Heal, No cool it will not Subdue.`,
  `Review the facts cool is the best.`,
  `There is no Sore it will Not Heal, No cool it will not Subdue.`,
  `coziness building for tomorrow`,
  `There is no Sore it will Not Heal, No cool it will not Subdue.`,
  `Review the facts cool is the best.`,
  `There is no Sore it will Not Heal, No cool it will not Subdue.`,
  `Review the facts cool is the best.`,
];

const Results = () => {
  const [inputWord, setInputWord] = useState("cozy");

  const handleInputChange = (e) => {
    setInputWord(e.target.value);
  };

  const handleClear = () => {
    setInputWord("");
  };

  return (
    <div className="results container">
      <div className="top">
        <h1 className="heading_title">Free slogan maker</h1>
        <p>
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
        </p>

        <form action="">
          <label className="label_heading" htmlFor="word-input">
            Word for your slogan
          </label>
          <input
            type="text"
            id="word-input"
            value={inputWord}
            onChange={handleInputChange}
          />
          <Clear className="clear" onClick={handleClear} />
          <input type="submit" value="Generate slogans" />
        </form>
      </div>
      <div className="center_1">
        <div className="center_top">
          <h2 className="results_heading">
            We have generated 1,023 slogans for “cozy”
          </h2>
          <button>Download all</button>
        </div>
        <ul className="slogans">
          {sloganResults.map((slogan, index) => (
            <SloganCard key={index} slogan={slogan} />
          ))}
        </ul>
      </div>
      <div className="bottom flex pagination">
        <button className="prev hidden">
          <Arrow className="prev_arrow" /> &nbsp; Prev
        </button>
        <div className="pages">
          <span className="round1">1</span>
          <span className="number">2</span>
          <span className="number">3</span>
          <span className="delimiter">...</span>
          <span className="number">21</span>
        </div>
        <div className="next">
          Next <Arrow />
        </div>
      </div>
    </div>
  );
};

export default Results;
