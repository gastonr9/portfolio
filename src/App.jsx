import "./App.css";
import { useState } from "react";
import "./index.css";
import { MobileMenu } from "./components/MobileMenu";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="px-4">
        <Home />
        <Projects />
        <About />
      </main>
    </>
  );
}

export default App;
