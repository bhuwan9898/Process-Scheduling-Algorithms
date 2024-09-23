import React, { useState } from "react";
import { fcfs, sjf } from "../algorithms/schedulingAlgotrithms";
import GanttCharts from "./GanttCharts";

const ProcessScheduler = () => {
  const [selectedProcessList, setSelectedProcessList] = useState([
    {
      processName: "Default Process",
      arrivalTime: 1,
      burstTime: 1,
      completionTime: 1,
      waitingTime: 1,
      turnAroundTime: 1,
    },
  ]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("FCFS");
  const [runClicked, setRunClicked] = useState(false);
  const [graphData, setGraphData] = useState(null);
  const [formValues, setFormValues] = useState({
    processName: "",
    arrivalTime: 0,
    burstTime: 0,
  });

  const algorithms = [
    "FCFS",
    "SJF",
    "LJF",
    "Round Robin",
    "SRTF",
    "LRTF",
    "HRRN",
  ];

  const handleAlgorithmChange = (event) => {
    const value = event.target.value;
    setSelectedAlgorithm(value);
  };

  const handleAddButton = (event) => {
    event.preventDefault(); // Prevents the form from reloading the page
    console.log(formValues); // This will log the current form values
    setSelectedProcessList([
      ...selectedProcessList,
      { ...formValues }, // Add the new process to the list
    ]);
    setFormValues({ processName: "", arrivalTime: 0, burstTime: 0 }); // Clear the form fields
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleDelete = (index) => {
    const updatedAlgorithms = selectedProcessList.filter((_, i) => i !== index);
    setSelectedProcessList(updatedAlgorithms);
  };
  const handleRunButton = () => {
    let data;
    switch (selectedAlgorithm) {
      case "FCFS":
        data = fcfs(selectedProcessList);
        break;
      case "SJF":
        data = sjf(selectedProcessList);
        break;
      // Other functions accordingly...
      default:
        console.error("Unknown algorithm selected");
        return;
    }
    setGraphData(data);
    setRunClicked(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="h-fit rounded-lg shadow-xl p-6 m-6 w-full max-w-3xl bg-white">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Process Scheduler
          </h3>
          <form className="space-y-4">
            <label
              htmlFor="algorithm"
              className="block text-2xl font-medium text-gray-700"
            >
              Select an algorithm:
            </label>
            <select
              id="algorithm"
              name="algorithm"
              value={selectedAlgorithm}
              onChange={handleAlgorithmChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-blue-100 border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              {algorithms.map((algo) => (
                <option key={algo} value={algo}>
                  {algo}
                </option>
              ))}
            </select>
          </form>

          <div className="flex gap-3 items-center mt-8 p-4 rounded-md">
            <p className="text-sm font-semibold">Selected Algorithm:</p>
            <p className="text-lg font-bold">{selectedAlgorithm}</p>
          </div>
          <div className="w-full">
            <div className="rounded-lg bg-white lg:col-span-3 lg:p-12">
              <form onSubmit={handleAddButton} className="space-y-4">
                <h1>Add your customized processes:</h1>

                <input
                  className="w-full rounded-lg bg-blue-100 p-3"
                  placeholder="Process Name"
                  type="text"
                  name="processName"
                  value={formValues.processName}
                  onChange={handleInputChange}
                />
                <label className="" htmlFor="processName">
                  Process Name
                </label>

                <input
                  className="w-full rounded-lg bg-blue-100 p-3"
                  placeholder="Arrival Time"
                  type="number"
                  min="0"
                  name="arrivalTime"
                  value={formValues.arrivalTime}
                  onChange={handleInputChange}
                />
                <label className="" htmlFor="arrivalTime">
                  Arrival Time
                </label>

                <input
                  className="w-full rounded-lg bg-blue-100 p-3"
                  placeholder="Burst Time"
                  type="number"
                  min="1"
                  name="burstTime"
                  value={formValues.burstTime}
                  onChange={handleInputChange}
                />
                <label className="" htmlFor="burstTime">
                  Burst Time
                </label>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-3xl bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Add Process
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Display the process list in a table */}
        <div className="lg:col-span-2 mt-8 p-2">
          <h4 className="text-2xl font-bold mb-4">{"Process List:"}</h4>
          <h1>
            <i>You can delete the default process once you add one</i>
          </h1>
          <table className="min-w-full bg-white mt-2">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-blue-100 text-center">
                  Process Name
                </th>
                <th className="py-2 px-4 bg-blue-100 text-center">
                  Arrival Time
                </th>
                <th className="py-2 px-4 bg-blue-100 text-center">
                  Burst Time
                </th>
                <th className="py-2 px-4 bg-blue-100 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {selectedProcessList.map((process, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{process.processName}</td>
                  <td className="border px-4 py-2">{process.arrivalTime}</td>
                  <td className="border px-4 py-2">{process.burstTime}</td>
                  <td className="border px-4 py-2">
                    {/* Conditionally render the delete button if there is more than 1 process */}
                    {selectedProcessList.length > 1 && (
                      <button
                        className="text-red-500 px-3 py-1 rounded"
                        onClick={() => handleDelete(index)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={handleRunButton}
            className=" w-full rounded-3xl bg-black mt-3 px-5 py-3 font-medium text-white sm:w-auto"
          >
            Run
          </button>
          {/* show the gnatt chart when the run button is clicked*/}
          {runClicked && <GanttCharts graphData={graphData} />}
        </div>
      </div>
    </>
  );
};

export default ProcessScheduler;
