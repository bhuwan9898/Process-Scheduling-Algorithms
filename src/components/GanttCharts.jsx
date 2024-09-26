import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import ProcessScheduled from "./ProcessScheduled";
function GanttCharts(props) {
  const [showPieChart, setShowPieChart] = useState(false);
  let graphData = props.graphData;
  return (
    <div className="grid grid-cols-1 p-2 justify-items-center gap-4  lg:gap-8">
      <div className="h-96 w-full rounded-lg shadow-md bg-white">
        <ProcessScheduled graphData={graphData} />
      </div>
      <div>
        <button
          onClick={() => {
            setShowPieChart(true);
          }}
          className="p-3 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
              fill="#ff9bcb"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
              fill="#2ec4b6"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            setShowPieChart(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75Z"
              fill="#2ec4b6" // Color for the first bar
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625Z"
              fill="#ff6f61" // Color for the second bar
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
              fill="#ff9bcb" // Color for the third bar
            />
          </svg>
        </button>
      </div>

      <div className=" grid justify-items-center h-96 w-full rounded-lg shadow-md bg-white p-2 ml-">
        {!showPieChart && (
          <Bar
            data={{
              labels: graphData.map((data) => data.processName),
              datasets: [
                {
                  label: "Turn Around Time",
                  data: graphData.map((data) => data.turnAroundTime),
                  backgroundColor: [
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
                  ],
                },
              ],
            }}
          />
        )}
        {showPieChart && (
          <Doughnut
            data={{
              labels: graphData.map((data) => data.processName),
              datasets: [
                {
                  label: "Turn Around Time",
                  data: graphData.map((data) => data.turnAroundTime),
                  backgroundColor: [
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
                  ],
                },
              ],
            }}
          />
        )}
      </div>
      <div className="grid justify-items-center h-96 w-full rounded-lg shadow-md bg-white">
        {!showPieChart && (
          <Bar
            data={{
              labels: graphData.map((data) => data.processName),
              datasets: [
                {
                  label: "Waiting Time",
                  data: graphData.map((data) => data.waitingTime),
                  backgroundColor: [
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
                  ],
                },
              ],
            }}
          />
        )}
        {showPieChart && (
          <Doughnut
            data={{
              labels: graphData.map((data) => data.processName),
              datasets: [
                {
                  label: "Waiting Time",
                  data: graphData.map((data) => data.waitingTime),
                  backgroundColor: [
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
                  ],
                },
              ],
            }}
          />
        )}
      </div>
    </div>
  );
}

export default GanttCharts;
