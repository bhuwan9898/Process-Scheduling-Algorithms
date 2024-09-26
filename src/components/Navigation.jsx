import { useState } from "react";
function Navigation({ sectionsRef, schedulerRef }) {
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("menu clicked in small screen");
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <header className=" bg-white text-4xl">
        <div className="lg:px-8">
          <div className="flex h-24 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block  h-fit" href="#">
                <iframe src="https://lottie.host/embed/584ff8d3-9833-4ccd-8d26-1a9693d148b3/xObMyBulQJ.json"></iframe>
              </a>
            </div>
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-48 text-xl">
                  <li
                    onClick={() => scrollToSection(sectionsRef)}
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    About
                  </li>
                  <li
                    onClick={() => scrollToSection(schedulerRef)}
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Scheduler
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button
                  onClick={toggleMenu}
                  className="rounded  p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                {/* Overlay */}
                {isOpen && (
                  <div
                    onClick={closeMenu}
                    className="fixed inset-0 bg-black bg-opacity-10"
                  ></div>
                )}

                {/* Navigation Menu */}
                <div
                  className={`fixed top-0 right-0 h-full w-60 bg-gray-800 text-white transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                  } transition-transform duration-300 ease-in-out z-50`}
                >
                  <ul className="flex flex-col space-y-6 p-6">
                    <li onClick={closeMenu}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 25"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="size-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                        />
                      </svg>
                    </li>
                    <li
                      onClick={() => {
                        scrollToSection(sectionsRef);
                        closeMenu();
                      }}
                      className="text-lg hover:text-gray-400"
                    >
                      About
                    </li>
                    <li
                      onClick={() => {
                        scrollToSection(schedulerRef);
                        closeMenu();
                      }}
                      className="text-lg hover:text-gray-400"
                    >
                      Scheduler
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
