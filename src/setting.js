import React from "react";
import "./index.scss";
import Toggle from "./toggle";

function setting({
  unlikelyColor,
  setUnlikeyColor,
  neutralColor,
  setNeutralColor,
  likelyColor,
  setLikeyColor,
}) {
  const [display, setDisplay] = React.useState(true);

  const configurationHandler = () => {
    setDisplay(false);
  };
  const settingHandler = () => {
    setDisplay(true);
  };
  const unlikelyColorHandler = (e) => {
    setUnlikeyColor(e.target.value);
    console.log(unlikelyColor);
  };
  const NeutralColorHandler = (e) => {
    setNeutralColor(e.target.value);
    console.log(neutralColor);
  };

  const likelyColorHandler = (e) => {
    setLikeyColor(e.target.value);
    console.log(likelyColor);
  };

  return (
    <div className="setting__container">
      <div className="setting__buttons">
        <button onClick={settingHandler} className="setting__btn">
          Settings
        </button>
        <button onClick={configurationHandler} className="setting__btn">
          Configurations
        </button>
      </div>
      <div className="setting__frame">
        {display ? (
          <>
            <div className="setting__text">
              <div className="setting__label">
                <span>Show labels</span>
                <div>
                  <Toggle />
                </div>
              </div>
              <div className="setting__color">
                <span>Set Very Unlikely Color:</span>
                <input
                  className="setting__input"
                  type="color"
                  onChange={unlikelyColorHandler}
                  value={unlikelyColor}
                />
              </div>
              <div className="setting__color">
                <span>Set Neutral Color:</span>
                <input
                  className="setting__input"
                  onChange={NeutralColorHandler}
                  type="color"
                  value={neutralColor}
                />
              </div>
              <div className="setting__color">
                <span>Set likely Color:</span>
                <input
                  className="setting__input"
                  type="color"
                  onChange={likelyColorHandler}
                  value={likelyColor}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="configuration__container">
            <div className="score__container">
              <label>Very Unlikely Score:</label>
              <span>14%</span>
            </div>
            <div className="score__container">
              <label>Neutral Score:</label>
              <span>68%</span>
            </div>
            <div className="score__container">
              <label>Very Likely Score:</label>
              <span>18%</span>
            </div>
          </div>
        )}
        <button className="setting__button">Use Report</button>
      </div>

      {/* <div>
        <label>Very Unlikely Score</label>
        <input type="text" />
      </div>
      <div>
        <label>Neutral Score</label>
        <input type="text" />
      </div>
      <div>
        <label>Very Likely Score</label>
        <input type="text" />
      </div> */}
    </div>
  );
}

export default setting;
