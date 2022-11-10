import "./App.css";
import Abilities from "./components/Abilities";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Presentation from "./components/Presentation";


function App() {
  return (
    <>
      <div className="bg-gray-200">
        <Navbar />
      </div>
      <div className="container mx-auto">
        <Presentation />
        <About />
        <Abilities />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}

export default App;
