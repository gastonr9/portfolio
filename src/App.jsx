import "./App.css";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";

function App() {
  return (
    <>
      <div className="absolute bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))] bg-gray-50 bottom-0 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-gray-950 min-h-screen top-0 w-full z-[-2]"></div>
      <Navbar />
      <main className="px-4 ">
        <Home />
        <Projects />
        <About />
      </main>
    </>
  );
}

export default App;
