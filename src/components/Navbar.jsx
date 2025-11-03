import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-600 dark:bg-blue-800 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">My React App</h1>

      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/posts" className="hover:underline">Posts</Link>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          title="Toggle Theme"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
