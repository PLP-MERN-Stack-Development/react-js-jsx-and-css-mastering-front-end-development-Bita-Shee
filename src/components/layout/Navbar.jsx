import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center relative">
      <h1 className="text-lg font-bold">Task Manager</h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            className="px-3 py-2 rounded hover:bg-gray-700 flex items-center gap-1"
          >
            Menu <span className="text-sm">▼</span>
          </button>

          <div
            className={`absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg border border-gray-200 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 transform transition-all duration-200 ease-in-out ${
              menuOpen
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/tasks"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Tasks
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded bg-blue-500 text-white dark:bg-yellow-500"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}
