import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProcessScheduled = ({ graphData }) => {
  const colors = [
    "#2ec4b6",
    "#ff6f61",
    "#f77f00",
    "#ff9bcb",
    "#cdb4db",
    "#f4a261",

    // Neutrals
    "#333333",
    "#8d99ae",
    "#f7f7f7",
    "#b0b0b0",

    // Accent Colors
    "#3a86ff",
    "#80ed99",
    "#ff595e",
  ];

  if (!graphData || graphData.length === 0) {
    return <div>No data available</div>;
  }

  const data = {
    labels: [""],
    datasets: graphData.map((item, index) => ({
      label: item.processName,
      data: [item.completionTime],
      backgroundColor: colors[index % colors.length],
      borderColor: colors[index % colors.length].replace("0.6", "1"),
      borderWidth: 1,
    })),
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "Time (in s)",
        },
      },
      y: {
        stacked: false,
        title: {
          display: true,
          text: "Processes",
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Process Execution Timeline",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ProcessScheduled;
