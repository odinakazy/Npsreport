// ./components/BarChart.js

import React from "react";
import { useContext } from "react";
import { MyContext } from "./MyContext";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
const label = ["unlikely", "neutral", "likey"];
const BarChart = () => {
  const { unlikelyColor, likelyColor, neutralColor } = useContext(MyContext);
  console.log(unlikelyColor);
  //   const labels = ["unlikely", "neutral", "likey"];
  const data = {
    labels: label,
    datasets: [
      {
        data: [20, 30, 50],
        backgroundColor: [unlikelyColor, neutralColor, likelyColor],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
