import React from "react";
import "./index.scss";
import CustomizePiechart from "./customizePiechart";
import CustomizeBarchart from "./customizeBarchart";
import Setting from "./setting";
import { MyContext } from "./MyContext";
import BarChart from "./barChart";
import customizeBarchart from "./customizeBarchart";
wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  title: "Nps report",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    skyColor: { type: "string" },
    grassColor: { type: "string" },
  },
  edit: EditComponent,
  save: function () {
    return null;
  },
});

function EditComponent(props) {
  const [hideTemplate, setHideTemplate] = React.useState(true);
  const [showPiechart, setShowPiechart] = React.useState(false);
  const [showBarchart, setShowBarchart] = React.useState(false);
  const [unlikelyColor, setUnlikeyColor] = React.useState("#FF6384");
  const [neutralColor, setNeutralColor] = React.useState("#88DD81");
  const [likelyColor, setLikeyColor] = React.useState("#ffce56");
  const [showSetting, setShowSetting] = React.useState(false);
  function updateSkyColor(e) {
    props.setAttributes({ skyColor: e.target.value });
  }

  function updateGrassColor(e) {
    props.setAttributes({ grassColor: e.target.value });
  }
  const customizeHandler = () => {
    setShowSetting(true);
    setHideTemplate(false);
    setShowPiechart(true);
  };
  const customizeHandler1 = () => {
    setShowSetting(true);
    setHideTemplate(false);
    setShowBarchart(true);
  };
  return (
    <MyContext.Provider
      value={{
        unlikelyColor,
        setUnlikeyColor,
        neutralColor,
        setNeutralColor,
        likelyColor,
        setLikeyColor,
      }}
    >
      <div className="setting__flex">
        {showSetting && (
          <Setting
            unlikelyColor={unlikelyColor}
            setUnlikeyColor={setUnlikeyColor}
            neutralColor={neutralColor}
            setNeutralColor={setNeutralColor}
            likelyColor={likelyColor}
            setLikeyColor={setLikeyColor}
          />
        )}
        <div className="set">
          {showPiechart && <CustomizePiechart />}
          {showBarchart && <CustomizeBarchart />}
        </div>
      </div>
      {hideTemplate && (
        <>
          <div className="title">
            <h1 className="textcolor">NPS Reports</h1>
            <div className="setting">
              <input
                className="textinputed"
                type="text"
                placeholder="Search Report Template"
              />
              <div className="svg-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M31.1251 18.0001C31.1251 17.5976 31.1076 17.2126 31.0726 16.8101L34.3276 14.3426C35.0276 13.8176 35.2201 12.8376 34.7826 12.0676L31.5101 6.41512C31.3003 6.04444 30.9609 5.76437 30.5571 5.62871C30.1534 5.49304 29.7137 5.51135 29.3226 5.68012L25.5601 7.27262C24.9126 6.81762 24.2301 6.41512 23.5126 6.08262L23.0051 2.04012C22.9001 1.16512 22.1476 0.500122 21.2726 0.500122H14.7451C13.8526 0.500122 13.1001 1.16512 12.9951 2.04012L12.4876 6.08262C11.7701 6.41512 11.0876 6.81762 10.4401 7.27262L6.67765 5.68012C5.87265 5.33012 4.92765 5.64512 4.49015 6.41512L1.21765 12.0851C0.780146 12.8551 0.972646 13.8176 1.67265 14.3601L4.92765 16.8276C4.8551 17.6135 4.8551 18.4043 4.92765 19.1901L1.67265 21.6576C0.972646 22.1826 0.780146 23.1626 1.21765 23.9326L4.49015 29.5851C4.92765 30.3551 5.87265 30.6701 6.67765 30.3201L10.4401 28.7276C11.0876 29.1826 11.7701 29.5851 12.4876 29.9176L12.9951 33.9601C13.1001 34.8351 13.8526 35.5001 14.7276 35.5001H21.2551C22.1301 35.5001 22.8826 34.8351 22.9876 33.9601L23.4951 29.9176C24.2126 29.5851 24.8951 29.1826 25.5426 28.7276L29.3051 30.3201C30.1101 30.6701 31.0551 30.3551 31.4926 29.5851L34.7651 23.9326C35.2026 23.1626 35.0101 22.2001 34.3101 21.6576L31.0551 19.1901C31.1076 18.7876 31.1251 18.4026 31.1251 18.0001ZM18.0701 24.1251C14.6926 24.1251 11.9451 21.3776 11.9451 18.0001C11.9451 14.6226 14.6926 11.8751 18.0701 11.8751C21.4476 11.8751 24.1951 14.6226 24.1951 18.0001C24.1951 21.3776 21.4476 24.1251 18.0701 24.1251Z"
                    fill="#9A96B8"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="browse">
            <h2 className="header">Browse Report</h2>
            <p className="paragraph">See All</p>
          </div>
          <div className="chart">
            <div className="wrapper1">
              <CustomizePiechart />

              <button onClick={customizeHandler} className="customize-button">
                Customize
              </button>
              <div className="footer">
                <p>Scale Template 1</p>
                <div>
                  <button className="btn">Use</button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10 4.0625C10.5178 4.0625 10.9375 3.64277 10.9375 3.125C10.9375 2.60723 10.5178 2.1875 10 2.1875C9.48223 2.1875 9.0625 2.60723 9.0625 3.125C9.0625 3.64277 9.48223 4.0625 10 4.0625Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 10.9375C10.5178 10.9375 10.9375 10.5178 10.9375 10C10.9375 9.48223 10.5178 9.0625 10 9.0625C9.48223 9.0625 9.0625 9.48223 9.0625 10C9.0625 10.5178 9.48223 10.9375 10 10.9375Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 17.8125C10.5178 17.8125 10.9375 17.3928 10.9375 16.875C10.9375 16.3572 10.5178 15.9375 10 15.9375C9.48223 15.9375 9.0625 16.3572 9.0625 16.875C9.0625 17.3928 9.48223 17.8125 10 17.8125Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <CustomizeBarchart />
              <button onClick={customizeHandler1} className="customize">
                Customize
              </button>
              <div className="footer">
                <p>Scale Template 2</p>
                <div>
                  <button className="btn">Use</button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10 4.0625C10.5178 4.0625 10.9375 3.64277 10.9375 3.125C10.9375 2.60723 10.5178 2.1875 10 2.1875C9.48223 2.1875 9.0625 2.60723 9.0625 3.125C9.0625 3.64277 9.48223 4.0625 10 4.0625Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 10.9375C10.5178 10.9375 10.9375 10.5178 10.9375 10C10.9375 9.48223 10.5178 9.0625 10 9.0625C9.48223 9.0625 9.0625 9.48223 9.0625 10C9.0625 10.5178 9.48223 10.9375 10 10.9375Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 17.8125C10.5178 17.8125 10.9375 17.3928 10.9375 16.875C10.9375 16.3572 10.5178 15.9375 10 15.9375C9.48223 15.9375 9.0625 16.3572 9.0625 16.875C9.0625 17.3928 9.48223 17.8125 10 17.8125Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </MyContext.Provider>
  );
}
