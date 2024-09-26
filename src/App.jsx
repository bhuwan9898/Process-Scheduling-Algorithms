import { useRef } from "react";

//pages
import ProcessScheduler from "./components/ProcessScheduler";
import Footer from "./components/Footer";
import Sections from "./components/Sections";
import Navigation from "./components/Navigation";

import React from "react";
function App() {
  const sectionsRef = useRef(null);
  const schedulerRef = useRef(null);
  return (
    <>
      <Navigation sectionsRef={sectionsRef} schedulerRef={schedulerRef} />
      <div ref={sectionsRef}>
        <Sections />
      </div>
      <div ref={schedulerRef}>
        <ProcessScheduler />
      </div>
      <Footer />
    </>
  );
}

export default App;
