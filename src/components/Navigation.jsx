import React from "react";

function Navigation() {
  return (
    <div>
      <header className="sticky top-0 z-10 bg-white  text-4xl">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block  h-fit" href="#">
                <iframe src="https://lottie.host/embed/584ff8d3-9833-4ccd-8d26-1a9693d148b3/xObMyBulQJ.json"></iframe>
              </a>
            </div>
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-48 text-xl">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Scheduler{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
