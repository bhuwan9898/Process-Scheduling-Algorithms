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

const TestChart = () => {
  const colors = [
    "#2ec4b6",
    "#ff6f61",
    "#f77f00",
    "#ff9bcb",
    "#cdb4db",
    "#f4a261",
    "#333333",
    "#8d99ae",
    "#f7f7f7",
    "#b0b0b0",
    "#3a86ff",
    "#80ed99",
    "#ff595e",
  ];

  const graphData = [
    {
      processName: "Process A",
      startTime: 2,
      endTime: 5,
    },
    {
      processName: "Process B",
      startTime: 5,
      endTime: 8,
    },
    {
      processName: "Process C",
      startTime: 8,
      endTime: 12,
    },
    {
      processName: "Process D",
      startTime: 12,
      endTime: 15,
    },
    {
      processName: "Process E",
      startTime: 15,
      endTime: 20,
    },
    {
      processName: "Process F",
      startTime: 20,
      endTime: 26,
    },
    {
      processName: "Process G",
      startTime: 26,
      endTime: 30,
    },
  ];

  if (!graphData || graphData.length === 0) {
    return <div>No data available</div>;
  }

  const data = {
    labels: graphData.map((item) => item.processName),
    datasets: [
      {
        label: "Execution Time",
        data: graphData.map((item) => ({
          x: [item.startTime, item.endTime], // Setting the start and end times
          y: item.processName,
        })),
        backgroundColor: graphData.map((_, index) => colors[index % colors.length]),
        borderColor: graphData.map((_, index) => colors[index % colors.length].replace("0.6", "1")),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y", // This makes the chart horizontal
    responsive: true,
    scales: {
      x: {
        type: "linear", // Use a linear scale for the x-axis
        position: "bottom",
        title: {
          display: true,
          text: "Time (in seconds)",
        },
        ticks: {
          stepSize: 1,
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

export default TestChart;

