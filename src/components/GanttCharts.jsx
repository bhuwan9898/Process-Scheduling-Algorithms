import React from "react";
import {Chart as ChartJS} from "chart.js/auto";
import {Bar, Doughnut, Line} from "react-chartjs-2";
function GanttCharts() {
  return (
    <div className="grid grid-cols-1 gap-4  lg:gap-8">
      <div className="h-96 rounded-lg bg-gray-100"></div>
      <div className="h-32 rounded-lg bg-gray-100"></div>
    </div>
  );
}

export default GanttCharts;
