import { useState, useEffect } from "react";
import sunIcon from "../assets/iconoir--sun-light.svg";
import moonIcon from "../assets/iconoir--half-moon.svg";
import systemIcon from "../assets/iconoir--computer.svg";
const ThemeToggle = () => {
  const [theme, setTheme] = useState("system"); // Estado inicial

  useEffect(() => {
    // Obtener el tema guardado en localStorage o usar el del sistema
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
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
  };

  return (
    <div className="relative cursor-pointer  px-1 py-2 transition text-gray-600 dark:text-white">
      {/* Botón para abrir el menú */}
      <button
        className="appearance-none border-none flex hover:scale-125"
        onClick={() =>
          document.getElementById("themes-menu").classList.toggle("hidden")
        }
      >
        {/* Íconos del Sol, Luna y PC */}
        {theme === "light" && (
          <img src={sunIcon} alt="Light Mode" className=" w-4.5 h-4.5 " />
        )}
        {theme === "dark" && (
          <img src={moonIcon} alt="Dark Mode" className=" w-4.5 h-4.5 " />
        )}

        {theme === "system" && (
          <img src={systemIcon} alt="System Mode" className=" w-4.5 h-4.5 " />
        )}
      </button>

      {/* Menú desplegable */}
      <div
        id="themes-menu"
        className="transition-discrete absolute top-10 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md"
      >
        <ul className="flex flex-col m-0 p-0">
          <li
            className="px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
            onClick={() => toggleTheme("light")}
          >
            Light
          </li>
          <li
            className="px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
            onClick={() => toggleTheme("dark")}
          >
            Dark
          </li>
          <li
            className="px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
            onClick={() => toggleTheme("system")}
          >
            System
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ThemeToggle;
