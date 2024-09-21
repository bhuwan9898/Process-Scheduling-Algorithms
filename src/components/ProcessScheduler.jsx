import React, { useState } from "react";
const ProcessScheduler = () => {
  const [selectedAlgo, setSelectedAlgo] = useState(["FCFS"]);
  const [showSelectedAlgo, setShowSelectedAlgo] = useState('FCFS')
  const [displayTable, setDisplayTable] = useState(false);

  const algorithms = [
    "FCFS",
    "SJF",
    "LJF",
    "Round Robin",
    "SRTF",
    "LRTF",
    "HRRN",
  ];

  const handleAlgoChange = (event) => {
    const value = event.target.value;
    setShowSelectedAlgo(value);
    setSelectedAlgo([...selectedAlgo, value]);
  };

  const handleAddButton = () => {
    setDisplayTable((prevState) => !prevState);
  };
{console.log(selectedAlgo)}
  return (
    <div class="p-3 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div class="h-32 rounded-lg">
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
                  checked={showSelectedAlgo === algo}
                  onChange={handleAlgoChange}
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
            <p className="text-lg font-bold text-indigo-900">{showSelectedAlgo}</p>
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
      {displayTable && (
        <div class="rounded-lg lg:col-span-2">
          <div className="overflow-x-auto rounded-lg border">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr className="bg-indigo-300">
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Process ID
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Arrival Time
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {"Burst Time(CPU)"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-indigo-100">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    John Doe
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <input type="number" min="0" step="1" value="0" />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 col-span-1">
                    <input type="number" min="0" step="1" value="0" />
                  </td>
                </tr>

                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Jane Doe
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    04/11/1980
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Web Designer
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Gary Barlow
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Singer
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessScheduler;
