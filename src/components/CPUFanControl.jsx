import React, { useState } from "react";

const CpuFanControl = ({ onRunClick, onStopClick }) => {
  const [isFanOn, setIsFanOn] = useState(false);
  let mySound = new Audio("my_audio_file.wav");
  return (
    <div className="flex justify-center items-center h-fit">
      <div className="flex flex-col items-center justify-center bg-gray-700 w-64 h-96 rounded-lg shadow-lg">
        <div className="w-52 h-8 bg-gray-500 mb-2"></div>
        <div className="w-52 h-8 bg-gray-500 mb-2"></div>
        <div className="w-32 h-32 bg-slate-300 rounded-full flex justify-center items-center relative shadow-inner">
          <div
            className={`w-30 h-30 rounded-full bg-gray-400 flex justify-center items-center relative transition-transform duration-500 ${
              isFanOn ? "animate-spin-slow-stop " : ""
            }`}
          >
            <div className="w-14 h-2 bg-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded shadow-lg" />
            <div className="w-14 h-2 bg-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 rounded shadow-lg" />
            <div className="w-14 h-2 bg-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded shadow-lg" />
            <div className="w-14 h-2 bg-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rotate-90 rounded shadow-lg" />
          </div>
        </div>
        <div className="w-full flex items-center justify-between px-10 py-3">
          <button className="rounded w-5 h-5 bg-red-500 shadow-lg"></button>
          <button className="rounded w-5 h-5 bg-teal-500 shadow-lg"></button>
          <button className=" rounded w-5 h-5 bg-green-300 shadow-lg"></button>
        </div>
        <div className="mt-5 flex gap-2">
          <button
            className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-500 transition"
            onClick={() => {
              mySound.play();
              setIsFanOn(true);
              onRunClick();
            }}
          >
            Run
          </button>
          <button
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-500 transition"
            onClick={() => {
              mySound.pause();
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
