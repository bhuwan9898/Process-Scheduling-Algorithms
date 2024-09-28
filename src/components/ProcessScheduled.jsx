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
    "#333333",
    "#b0b0b0",
    "#3a86ff",
    "#80ed99",
    "#1f6f8b",
    "#ffc300",
    "#9d4edd",
    "#e07a5f",
    "#81b29a",
    "#ffca3a",
    "#6a0572",
    "#ff4d6d",
    "#c7f9cc",
    "#7209b7",
    "#4361ee",
    "#fee440",
    "#4ecdc4",
    "#ffbe0b",
  ];

  const data = {
    labels: graphData.map((item) => item.processName), // Use process names as labels
    datasets: [
      {
        label: "Execution Time Period",
        data: graphData.map((item) => ({
          x: [item.startTime, item.endTime], // Define each bar as a range from start to end
          y: item.processName, // Process name on the Y-axis
        })),
        backgroundColor: graphData.map(
          (_, index) => colors[index % colors.length]
        ),
        borderColor: graphData.map((_, index) =>
          colors[index % colors.length].replace("0.6", "1")
        ),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y", // Horizontal chart
    responsive: true,
    scales: {
      x: {
        type: "linear", // Linear scale for time
        position: "bottom",
        min: graphData[0].startTime, // Start x-axis from 1
        title: {
          display: true,
          text: "Time (in seconds)",
        },
        ticks: {
          stepSize: 1, // Adjust to control interval ticks if necessary
        },
      },
      y: {
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
