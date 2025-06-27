import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const menuLinks = [
  { label: "Home", icon: <i className="fa-solid fa-house" />, href: "#" },
  { label: "Resume", icon: <i className="fa-solid fa-file-alt" />, href: "#" },
  { label: "Works", icon: <i className="fa-solid fa-cube" />, href: "#" },
  { label: "Blogs", icon: <i className="fa-brands fa-blogger" />, href: "#" },
  { label: "Contact", icon: <i className="fa-regular fa-address-book" />, href: "#" },
];

export default function AppBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Cambia theme toggling si usas Tailwind darkMode
  const toggleTheme = () => setDark(!dark);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-info lg:bg-transparent backdrop-blur ">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo/nombre */}
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-2xl text-pink-500">Heydi</span>
          <span className="font-bold text-2xl text-gray-700">García</span>
        </div>
        {/* Acciones derecha */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-xl"
            onClick={toggleTheme}
            aria-label="Cambiar modo"
          >
            {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
          </button>
          {/* Botón hamburguesa solo en mobile */}
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-400 to-pink-500 text-white text-xl lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <FaBars />
          </button>
        </div>
      </div>
      {/* Menú mobile */}
      {menuOpen && (
        <div className=" lg:hidden fixed inset-0 bg-black/30 z-50 flex justify-end">
             {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/30"
      onClick={() => setMenuOpen(false)}
      aria-label="Cerrar menú"
    />

          <nav className=" w-full bg-gray-50 shadow-xl  h-full flex flex-col gap-6 relative .animate-slide-down">
            {/* Botón cerrar */}
            <button
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-gray-200 text-gray-600 text-xl"
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <FaTimes />
            </button>
            {/* Opciones de menú */}
            <ul className="mt-16 w-full flex flex-col p-0 rounded-b-3xl bg-white">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-3  transition text-gray-400
                      hover:bg-gradient-to-r hover:to-pink-400 hover:text-white font-semibold
                      "bg-gradient-to-r from-pink-500 to-pink-400 text-gray-500"}
                    `}
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
