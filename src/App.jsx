import ProcessScheduler from "./components/ProcessScheduler";
import Footer from "./components/Footer";
import Sections from "./components/Sections";
import Navigation from "./components/Navigation";
import CpuFanControl from "./components/CPUFanControl";
function App() {
  return (
    <>
      
      <Navigation />
      <Sections />
      <ProcessScheduler />
      <Footer />
    </>
  );
}

export default App;
