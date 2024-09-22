import React, { useState } from "react";

const ProcessScheduler = () => {
  const [selectedAlgorithmsList, setSelectedAlgorithmsList] = useState([
    { name: "FCFS", arrivalTime: 0, burstTime: 0 },
  ]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("FCFS");

  const algorithms = [
    "FCFS",
    "SJF",
    "LJF",
    "Round Robin",
    "SRTF",
    "LRTF",
    "HRRN",
  ];
  //for the form with radio button
  const handleAlgorithmChange = (event) => {
    const value = event.target.value;
    setSelectedAlgorithm(value);
  };
  //this willl handle the add button which will add the algorithm to the list
  const handleAddButton = () => {
    setSelectedAlgorithmsList([
      ...selectedAlgorithmsList,
      { name: selectedAlgorithm, arrivalTime: 0, burstTime: 0 },
    ]);
  };
  //this will keep track of the changes made in the arrival time and Burst time within the table
  const handleInputChange = (index, field, value) => {
    const updatedData = [...selectedAlgorithmsList];
    updatedData[index][field] = value;
    setSelectedAlgorithmsList(updatedData);
    console.log(selectedAlgorithmsList);
  };
  const handleDelete = (index) => {
    const updatedAlgorithms = selectedAlgorithmsList.filter(
      (_, i) => i !== index
    );
    setSelectedAlgorithmsList(updatedAlgorithms);
  };

  return (
    <div className="p-3 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="h-32 rounded-lg">
        <div className="rounded-lg shadow-xl p-6 w-full max-w-md">
          <h3 className="text-2xl font-bold mb-6 text-indigo-500 text-center">
            Process Scheduler
          </h3>
          <h3 className="text-2xl  mb-6 text-indigo-500">
            Choose your algorithm
          </h3>
          <form className="space-y-4">
            {algorithms.map((algo) => (
              <div key={algo} className="flex items-center">
                <input
                  type="radio"
                  id={algo}
                  name="algo"
                  value={algo}
                  checked={selectedAlgorithm === algo}
                  onChange={handleAlgorithmChange}
                  className="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label
                  htmlFor={algo}
                  className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer hover:text-indigo-600 transition duration-150 ease-in-out"
                >
                  {algo}
                </label>
              </div>
            ))}
          </form>
          <div className="flex gap-3 items-center mt-8 p-4 bg-indigo-100 rounded-md">
            <p className="text-sm font-semibold text-indigo-700">
              Selected Algorithm:
            </p>
            <p className="text-lg font-bold text-indigo-900">
              {selectedAlgorithm}
            </p>
            <button onClick={handleAddButton} className="bg-indigo-100">
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {
        <div className="rounded-lg lg:col-span-2">
          <div className="overflow-x-auto rounded-lg border">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr className="bg-indigo-300  divide-x-2 divide-indigo-900">
                  <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 text-lg">
                    Process ID
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 text-lg">
                    Arrival Time
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900 text-lg">
                    {"Burst Time(CPU)"}
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-indigo-900 bg-indigo-100">
            
      
                {selectedAlgorithmsList.map((algorithm, index) => (
                  <tr key={index} className="divide-x-2 divide-indigo-900">
                    <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                      {algorithm.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={algorithm.arrivalTime}
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "arrivalTime",
                            e.target.value
                          )
                        }
                        className="w-full h-7 bg-indigo-200 rounded text-center font-mono font-semibold"
                      />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={algorithm.burstTime}
                        onChange={(e) =>
                          handleInputChange(index, "burstTime", e.target.value)
                        }
                        className="w-full h-7 bg-indigo-200 text-center font-mono font-semibold"
                      />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <button
                        onClick={() => handleDelete(index)}
                        className="text-red-500 hover:text-red-700 transition-colors duration-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button>Run</button>
        </div>
      }
    </div>
  );
};

export default ProcessScheduler;
