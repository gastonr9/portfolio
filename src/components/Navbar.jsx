import { useState, useEffect } from "react";
import { handleEmail } from "./MailTo";
import ThemeToggle from "./ThemeToggle";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Estado para la sección activa

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detectar qué sección está visible
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Ajuste para que detecte bien
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2 ">
      <nav
        className={`flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center ${
          scrolled ? "shadow-lg backdrop-blur-sm" : ""
        }`}
      >
        <a href="#inicio" className=" relative block px-2 py-2  pr-3">
          {/* Texto completo en pantallas medianas y grandes */}
          <span className="hidden md:inline text-gray-600 dark:text-white">
            Gastón<span className="text-blue-500">.Rodriguez</span>
          </span>

          {/* Versión reducida en pantallas pequeñas */}
          <span className="md:hidden">
            G<span className="text-blue-500">.R</span>
          </span>
        </a>
        <span className=" md:w-30">{""}</span>
        <a
          href="#proyectos"
          className={`relative block px-2 py-2 transition ${
            activeSection === "proyectos"
              ? "text-blue-500 "
              : "hover:text-blue-500"
          }`}
        >
          Proyectos
        </a>
        <a
          href="#sobre-mi"
          className={`relative block px-2 py-2 transition ${
            activeSection === "sobre-mi"
              ? "text-blue-500 "
              : "hover:text-blue-500"
          }`}
        >
          Sobre mí
        </a>
        <a
          onClick={handleEmail}
          href="mailto:gastonhr.contacto@gmail.com"
          className="relative block px-2 py-2 transition hover:text-blue-500 "
        >
          Contacto
        </a>
        <ThemeToggle /> {/* Botón de cambio de tema */}
      </nav>
    </header>
  );
};
