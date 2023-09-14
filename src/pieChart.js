// ./components/PieChart.js
import React from "react";
import Chart from "chart.js/auto";
import { useContext } from "react";
import { MyContext } from "./MyContext";
import { Pie } from "react-chartjs-2";
const labels = ["unlikely", "neutral", "likey"];
//
const PieChart = () => {
  const { unlikelyColor, likelyColor, neutralColor } = useContext(MyContext);
  const data = {
    // labels: labels,
    datasets: [
      {
        data: [20, 30, 50],
        backgroundColor: [unlikelyColor, neutralColor, likelyColor],
      },
    ],
  };
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};
export default PieChart;
