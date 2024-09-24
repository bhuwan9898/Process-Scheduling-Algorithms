import React from "react";

function Sections() {
  return (
    <div>
      <section>
        <img
          className="w-full h-96 object-fill"
          src="https://i0.wp.com/mburkeonmbd.com/wp-content/uploads/2020/11/process.jpg?fit=940%2C455&ssl=1"
        />
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 rounded-sm overflow-hidden sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/10/CPU_Shutterstock.jpg?q=50&fit=crop&w=1500&dpr=1.5"
                className="absolute h-96 w-fit"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                What are process scheduling algorithms?
              </h2>

              <p className="mt-4 text-gray-600">
                Process scheduling algorithms are methods used by operating
                systems to determine which process runs on the CPU at any given
                time. They aim to optimize system performance, ensure fairness,
                and maximize CPU utilization by allocating processor time among
                multiple ready processes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              What is CPU Scheduling?
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                className="absolute  h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <article className="space-y-4 text-gray-600">
                <p>CPU Scheduling</p>

                <p>
                  CPU scheduling is the mechanism used by operating systems to
                  decide which process or thread gets to use the CPU at any
                  given moment. It aims to efficiently allocate CPU time among
                  competing processes, maximizing overall system throughput and
                  responsiveness.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sections;
