import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import adaptive_icon from "./assets/adaptive_icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // get current path

  // Links array for easy mapping
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "How It Works", path: "/usage" },
    { name: "Reviews", path: "/reviews" },
  ];

  return (
    <nav className="bg-white shadow-md fixed mb-30 w-full z-50">
      <div className="px-6 md:px-16">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <div className="flex items-center justify-center">
            <div className="bg-white shadow-2xl rounded-full flex items-center justify-center p-2 mb-0">
              <img src={adaptive_icon} className="h-8 w-6 md:h-10 md:w-8" alt="UTUNE LOGO" />
            </div>
            <div className="ml-3 text-center md:text-left">
              <p className="font-bold text-md md:text-xl">UTUNE</p>
              <p className="text-gray-800 text-sm md:text-md">Your Unique RBT</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium ${
                  location.pathname === item.path
                    ? "text-purple-600" // active link
                    : "text-gray-800 hover:text-purple-600" // inactive
                }`}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="https://admin.utune.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md font-semibold text-gray-800 hover:bg-gray-100 transition"
            >
              Admin
            </a>

            <Link
              to="/signup"
              className="text-white bg-gradient-to-r font-bold from-blue-600 to-pink-500 p-3 rounded-full"
            >
              Download Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block font-medium ${
                location.pathname === item.path
                  ? "text-purple-600" // active link
                  : "text-gray-800 hover:text-purple-600 " // inactive
              }`}
            >
              {item.name}
            </Link>
          ))}

          <a
            href="https://admin.utune.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md font-semibold text-gray-800 hover:text-purple-600"
          >
            Admin
          </a>

          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="block bg-purple-600 mt-3 text-white px-5 py-2 rounded-lg text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;