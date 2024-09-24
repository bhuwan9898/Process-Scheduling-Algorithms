import React, { useState } from "react";

const CpuFanControl = ({onRunClick, onStopClick}) => {
  const [isFanOn, setIsFanOn] = useState(false);

  return (
    <div className="flex justify-center items-center h-fit">
      <div className="flex flex-col items-center justify-center bg-gray-800 w-64 h-96 rounded-lg shadow-lg">
        <div className="w-full flex items-center justify-between px-10 py-3">
          <button className="rounded-full w-3 h-3 bg-red-500 shadow-lg"></button>
          <button className="w-20 h-2 bg-teal-500"></button>
          <button className="w-7 h-2 bg-green-300"></button>
        </div>
        <div className="w-52 h-3 bg-gray-500 mb-2"></div>
        <div className="w-52 h-3 bg-gray-600 mb-2"></div>
        <div className="w-32 h-32 bg-zinc-600 rounded-full flex justify-center items-center relative shadow-inner">
          <div
            className={`w-30 h-30 rounded-full bg-gray-400 flex justify-center items-center relative transition-transform duration-500 ${
              isFanOn ? "animate-spin" : ""
            }`}
          >
            <div className="w-14 h-2 bg-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded shadow-lg" />
            <div className="w-14 h-2 bg-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 rounded shadow-lg" />
            <div className="w-14 h-2 bg-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded shadow-lg" />
            <div className="w-14 h-2 bg-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rotate-90 rounded shadow-lg" />
          </div>
        </div>
        <div className="mt-5 flex gap-2">
          <button
            className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-500 transition"
            onClick={
                () => 
                    {
                        setIsFanOn(true);
                        onRunClick();
                    }
            }
          >
            Run
          </button>
          <button
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-500 transition"
            onClick={() => {
                setIsFanOn(false);
                onStopClick();
            }}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default CpuFanControl;
