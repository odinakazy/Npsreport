import React from "react";
import PieChart from "./pieChart";
function customizePiechart() {
  return (
    <div className="container">
      <div className="frame1">
        <div className="piechart">
          <PieChart />
        </div>
        <div className="text">Net Promoter Score</div>
      </div>
    </div>
  );
}

export default customizePiechart;
