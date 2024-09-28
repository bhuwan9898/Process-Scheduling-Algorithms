import React, { useState } from "react";
import { fcfs, sjf, ljf, roundRobin } from "../algorithms/schedulingAlgorithms";
import GanttCharts from "./GanttCharts";
import CpuFanControl from "./CPUFanControl";
import Modal from "./Modal";
const ProcessScheduler = () => {
  //list of algortithms implemented
  const algorithms = [
    "FCFS",
    "SJF",
    "LJF",
    "Round Robin",
    "SRTF",
    "LRTF",
    "HRRN",
  ];

  //this will list all the processes added by the user to run in the cpu
  const [selectedProcessList, setSelectedProcessList] = useState([]);
  //check and handle various state variables
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("FCFS");
  const [runClicked, setRunClicked] = useState(false);
  const [graphData, setGraphData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeQuantum, setTimeQuantum] = useState(null);
  const [isTimeQuantumSet, setIsTimeQuantumSet] = useState(false);
  //keep track of the form values that the user enters
  const [formValues, setFormValues] = useState({
    processName: "",
    arrivalTime: "",
    burstTime: "",
  });

  //keep track of the selection event from the list of options
  const handleAlgorithmChange = (event) => {
    const value = event.target.value;
    setSelectedAlgorithm(value);
  };

  //when add button is clicked it should add process to the process list
  const handleAddButton = (event) => {
    event.preventDefault();
    setSelectedProcessList([
      ...selectedProcessList,
      { ...formValues }, // Add the new process to the list
    ]);
    setFormValues({ processName: "", arrivalTime: "", burstTime: "" }); // Clear the form fields
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  //delete a process from the table
  const handleDelete = (index) => {
    const updatedAlgorithms = selectedProcessList.filter((_, i) => i !== index);
    setSelectedProcessList(updatedAlgorithms);
  };
  const handleRoundRobinInputChange = (e) => {
    e.preventDefault();
    const value = parseInt(e.target.value, 10); // Convert string input to a number
    if (!isNaN(value)) {
      // Ensure the value is a valid number
      setTimeQuantum(value); // Store the time quantum as a number
    }
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
      case "LJF":
        data = ljf(selectedProcessList);
        break;
      case "Round Robin":
        data = roundRobin(selectedProcessList, timeQuantum);
        break;
      // Other functions accordingly...
      default:
        console.error("Unknown algorithm selected");
        return;
    }
    setGraphData(data);
    setRunClicked(true);
  };

  const handleStopButton = () => {
    setRunClicked(false);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
              className="mt-1 block w-full pl-3 pr-10 py-3 text-base bg-gray-300 border-gray-500  sm:text-sm rounded-md"
            >
              {algorithms.map((algo) => (
                <option key={algo} value={algo}>
                  {algo}
                </option>
              ))}
            </select>
          </form>
          {selectedAlgorithm === "Round Robin" && !isTimeQuantumSet && (
            <>
              <label htmlFor="timeQuantum">Time Quantum</label>
              <input
                className="w-full rounded-lg bg-gray-200 p-3"
                placeholder="Time Quantum"
                type="number"
                min="1"
                required
                name="timeQuantum"
                value={timeQuantum}
                onChange={handleRoundRobinInputChange}
              />
              <button
                onClick={() => setIsTimeQuantumSet(true)}
                className="mt-1 p-2 bg-green-400 rounded-md"
              >
                Set
              </button>
            </>
          )}
          {isTimeQuantumSet && (
            <div className="flex gap-5 mt-3 items-center">
              <p>
                Time Quantum is set to: <b> {timeQuantum} </b>
              </p>
              <button
                onClick={() => setIsTimeQuantumSet(false)}
                className="p-1 text-blue-500"
              >
                Edit
              </button>
            </div>
          )}

          <div className="flex gap-3 items-center mt-8 p-4 rounded-md">
            <p className="text-sm font-semibold">Selected Algorithm:</p>
            <p className="text-md font-bold ">{selectedAlgorithm}</p>
            <button onClick={toggleModal} className="text-indigo-600">
              Learn more
            </button>
            <Modal open={isModalOpen} selectedAlgorithm={selectedAlgorithm}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Short Info</h2>
                <button onClick={closeModal} className="text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </Modal>
          </div>
          <div className="w-full">
            <div className="rounded-lg bg-white lg:col-span-3 lg:p-12">
              <form onSubmit={handleAddButton} className="space-y-2">
                <h1 className="mb-2">Add your customized processes:</h1>
                <label htmlFor="processName">Process Name</label>
                <input
                  className="w-full bg-gray-200 rounded-lg p-3"
                  placeholder="Process Name"
                  type="text"
                  name="processName"
                  required
                  value={formValues.processName}
                  onChange={handleInputChange}
                />
                <label htmlFor="arrivalTime">Arrival Time</label>

                <input
                  className="w-full rounded-lg bg-gray-200 p-3"
                  placeholder="Arrival Time"
                  type="number"
                  min="0"
                  required
                  name="arrivalTime"
                  value={formValues.arrivalTime}
                  onChange={handleInputChange}
                />
                <label htmlFor="burstTime">Burst Time</label>
                <input
                  className="w-full rounded-lg bg-gray-200 p-3"
                  placeholder="Burst Time"
                  type="number"
                  min="1"
                  required
                  name="burstTime"
                  value={formValues.burstTime}
                  onChange={handleInputChange}
                />
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full  rounded-3xl bg-green-600 px-5 py-3 font-medium text-white "
                  >
                    Add Process
                  </button>
                </div>
              </form>
            </div>
            <CpuFanControl
              onRunClick={handleRunButton}
              onStopClick={handleStopButton}
            />
          </div>
        </div>

        {/* Display the process list in a table */}
        <div className="lg:col-span-2 mt-8 p-2">
          <h4 className="text-2xl font-bold mb-4">Process List</h4>
          <h6>
            <i>You need to re-run CPU every time you add or delete a process</i>{" "}
          </h6>
          <table className="min-w-full bg-white mt-2">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="py-2 px-4  text-center">Process Name</th>
                <th className="py-2 px-4 text-center">Arrival Time</th>
                <th className="py-2 px-4  text-center">Burst Time</th>
                <th className="py-2 px-4  text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {selectedProcessList.length > 0 ? (
                selectedProcessList.map((process, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{process.processName}</td>
                    <td className="border px-4 py-2">{process.arrivalTime}</td>
                    <td className="border px-4 py-2">{process.burstTime}</td>
                    <td className="border px-4 py-2">
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
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>No process</td>
                </tr>
              )}
            </tbody>
          </table>
          {/* show the gnatt chart when the run button is clicked*/}
          {runClicked && <GanttCharts graphData={graphData} />}
        </div>
      </div>
    </>
  );
};

export default ProcessScheduler;
