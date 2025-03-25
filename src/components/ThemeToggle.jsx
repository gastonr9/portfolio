import { useState, useEffect, useRef } from "react";
import sunIcon from "../assets/iconoir--sun-light.svg";
import moonIcon from "../assets/iconoir--half-moon.svg";
import systemIcon from "../assets/iconoir--computer.svg";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("system"); // Estado inicial
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado del menú
  const menuRef = useRef(null); // Referencia al menú

  useEffect(() => {
    // Obtener el tema guardado en localStorage o usar el del sistema
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);

    // Cerrar el menú al hacer clic fuera
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const applyTheme = (selectedTheme) => {
    if (selectedTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (selectedTheme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      // Modo "system"
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", "system");
    }
  };

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    setIsMenuOpen(false); // Cierra el menú al seleccionar un tema
  };

  return (
    <div
      className="relative  px-1 py-2 transition text-gray-600 dark:text-white"
      ref={menuRef}
    >
      {/* Botón para abrir/cerrar el menú */}
      <button
        className="appearance-none border-none flex hover:scale-125"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* Íconos del Sol, Luna y PC */}
        <img
          src={
            theme === "light"
              ? sunIcon
              : theme === "dark"
              ? moonIcon
              : systemIcon
          }
          alt="Theme-Icon"
          className="w-5 h-5 cursor-pointer transition-all dark:invert"
        />
      </button>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="absolute top-10 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-lg backdrop-blur-md ">
          <ul className="flex flex-col m-0 p-0 text-gray-600 dark:text-white ">
            <li
              className="px-2 py-1.5 cursor-pointer hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
              onClick={() => toggleTheme("light")}
            >
              Light
            </li>
            <li
              className="px-2 py-1.5 cursor-pointer hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
              onClick={() => toggleTheme("dark")}
            >
              Dark
            </li>
            <li
              className="px-2 py-1.5 cursor-pointer hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
              onClick={() => toggleTheme("system")}
            >
              System
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
