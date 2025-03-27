import { useState, useEffect, useRef } from "react";

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
      className="relative transition text-gray-600 dark:text-white"
      ref={menuRef}
    >
      {/* Botón para abrir/cerrar el menú */}
      <button
        className="appearance-none border-none flex hover:scale-90 scale-70 stroke-[2.5] hover:stroke-2 transition"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* Íconos SVG en línea */}
        {theme === "light" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="transition-all"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12m10-6h1M12 2V1m0 22v-1m8-2l-1-1m1-15l-1 1M4 20l1-1M4 4l1 1m-4 7h1"
            />
          </svg>
        )}

        {theme === "dark" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="transition-all"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 11.507a9.493 9.493 0 0 0 18 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.49 9.49 0 0 0 3 11.507"
            />
          </svg>
        )}

        {theme === "system" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="transition-all"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 21h15m4 0h1"
                strokeWidth="2"
              />
              <path d="M2 16.4V3.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z" />
            </g>
          </svg>
        )}
      </button>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="absolute top-10 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-lg backdrop-blur-md">
          <ul className="flex flex-col m-0 p-0 text-gray-600 dark:text-white">
            <li
              className="px-2 py-1.5 cursor-pointer hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm flex items-center gap-2"
              onClick={() => toggleTheme("light")}
            >
              Light
            </li>

            <li
              className="px-2 py-1.5 cursor-pointer hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm flex items-center gap-2"
              onClick={() => toggleTheme("dark")}
            >
              Dark
            </li>

            <li
              className="px-2 py-1.5 cursor-pointer hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm flex items-center gap-2"
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
