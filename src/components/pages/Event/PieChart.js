import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartData = {
    labels: ["Participants", "Signups"],
    datasets: [
      {
        data: [data.participants, data.signups],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow flexibility in height
  };

  return (
    <div style={{ height: "200px", width: "100%" }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;

