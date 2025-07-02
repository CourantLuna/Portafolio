import { useEffect, useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const menuLinks = [
  { label: "Inicio", icon: <i className="fa-solid fa-house" />, href: "#" },
  { label: "Curriculum", icon: <i className="fa-solid fa-file-alt" />, href: "#" },
  { label: "Trabajos", icon: <i className="fa-solid fa-cube" />, href: "#" },
  { label: "Blogs", icon: <i className="fa-brands fa-blogger" />, href: "#" },
  { label: "Contacto", icon: <i className="fa-regular fa-address-book" />, href: "#" },
];

export default function AppBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Estado para el theme
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Cambia el tema
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    }
  };

  // Al montar, lee la preferencia previa
  useEffect(() => {
    const userTheme = window.localStorage.getItem("theme");
    if (userTheme === "dark" || (!userTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-gray-200/20 dark:border-pink-500/20">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo/nombre */}
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-2xl text-pink-500 dark:text-pink-400">Heydi</span>
          <span className="font-bold text-2xl text-gray-700 dark:text-gray-300">García</span>
        </div>
        {/* Acciones derecha */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-400 dark:hover:from-pink-600 dark:hover:to-pink-500 text-xl transition-all duration-300 shadow-sm dark:shadow-pink-500/10 hover:shadow-lg hover:shadow-pink-500/30 group"
            onClick={toggleTheme}
            aria-label="Cambiar modo"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400 group-hover:text-white transition-colors duration-300" />
            ) : (
              <FaMoon className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
            )}
          </button>
          {/* Botón hamburguesa solo en mobile */}
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-400 to-pink-500 dark:from-pink-500 dark:to-pink-600 text-white text-xl lg:hidden shadow-lg dark:shadow-pink-500/30 hover:scale-105 transition-all duration-300"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <FaBars />
          </button>
        </div>
      </div>
      {/* Menú mobile */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex justify-end backdrop-blur-sm">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 dark:bg-black/50"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
          />
          <nav className="w-full bg-gray-50 dark:bg-gray-900/95 dark:border-l dark:border-pink-500/20 shadow-xl h-full flex flex-col gap-6 relative animate-slide-down backdrop-blur-md">
            {/* Botón cerrar */}
            <button
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xl hover:scale-110 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <FaTimes />
            </button>
            {/* Opciones de menú */}
            <ul className="mt-16 w-full flex flex-col p-0 rounded-b-3xl bg-white dark:bg-gray-800/50 dark:backdrop-blur-sm">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3 transition text-gray-400 dark:text-gray-300 hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-500 dark:hover:from-pink-500 dark:hover:to-pink-600 hover:text-white font-semibold"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
