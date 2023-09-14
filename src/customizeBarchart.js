import React from "react";
import BarChart from "./barChart";
function customizeBarchart({ unlikelyColor }) {
  return (
    <div className="container2">
      <div className="frame2">
        <div className="barchart">
          <BarChart unlikelyColor={unlikelyColor} />
        </div>
        <div className="text">Net Promoter Score</div>
      </div>
    </div>
  );
}

export default customizeBarchart;
