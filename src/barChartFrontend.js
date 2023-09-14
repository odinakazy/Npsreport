import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
const label = ["unlikely", "neutral", "likey"];
function barChartFrontend({ unlikelyColor, neutralColor, likelyColor }) {
  const data = {
    labels: label,
    datasets: [
      {
        data: [20, 30, 50],
        backgroundColor: ["#FF6384", neutralColor, likelyColor],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
}

export default barChartFrontend;
