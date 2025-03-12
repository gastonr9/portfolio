import { useEffect } from "react";
import { handleEmail } from "./Mailto";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#inicio" className="font-mono text-xl font-bold text-white">
            {" "}
            Gastón<span className="text-blue-500">.Rodriguez</span>{" "}
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8 ">
            <a
              href="#sobre-mi"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Sobre mí{" "}
            </a>
            <a
              href="#proyectos"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Proyectos{" "}
            </a>

            <a
              onClick={handleEmail}
              href="mailto:gastonhr.contacto@gmail.com"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Contacto{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
