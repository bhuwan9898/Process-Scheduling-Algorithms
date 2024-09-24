import React from "react";
import process from "../assets/processScheduled.png";
import cpu from "../assets/cpuScheduling.png";
import main from "../assets/main.png";
function Sections() {
  return (
    <div>
      <section>
        <div className="flex mx-auto justify-items-center items-center max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <img src={main}></img>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-4xl font-bold sm:text-4xl text-black">
                What are process scheduling algorithms?
              </h2>

              <p className="mt-4 text-2xl text-gray-600">
                Process scheduling algorithms are methods used by operating
                systems to determine which process runs on the CPU at any given
                time. They aim to optimize system performance, ensure fairness,
                and maximize CPU utilization by allocating processor time among
                multiple ready processes.
              </p>
            </div>
            <div>
              <img src={process} alt="Process Scheduled" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <img src={cpu} alt="CPU Scheduling" />
            </div>
            <div>
              <h2 className="text-4xl font-bold sm:text-4xl text-black">
                What is CPU Scheduling?
              </h2>

              <p className="mt-4 text-2xl text-gray-600">
                CPU scheduling is the mechanism used by operating systems to
                decide which process or thread gets to use the CPU at any given
                moment. It aims to efficiently allocate CPU time among competing
                processes, maximizing overall system throughput and
                responsiveness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sections;
