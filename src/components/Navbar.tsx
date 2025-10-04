import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "About Me", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
    { name: "Resume", to: "/resume" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <h1 className="text-xl font-bold text-teal-600">
          <Link to="/">Stephen Wilson</Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="hover:text-teal-600 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col px-4 py-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="py-2 border-b"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
