import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri"; // using react-icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-lg shadow-md">
      <div className="flex justify-between items-center text-white px-6 md:px-20 py-5">
        {/* Logo */}
        <span className="text-xl md:text-2xl font-extrabold tracking-wide text-purple-400">
          Ayush Awasthi
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold">
          <li>
            <a href="#About" className="hover:text-blue-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#Experience"
              className="hover:text-blue-400 transition-colors"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Contacts"
              className="hover:text-blue-400 transition-colors"
            >
              Contacts
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RiCloseLine size={28} /> : <RiMenu2Line size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden flex flex-col items-center gap-6 font-semibold text-lg text-white bg-black bg-opacity-90 backdrop-blur-xl py-8 absolute top-full left-0 w-full transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <a
          href="#About"
          className="hover:text-blue-400 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#Experience"
          className="hover:text-blue-400 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Experience
        </a>
        <a
          href="#Projects"
          className="hover:text-blue-400 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#Contacts"
          className="hover:text-blue-400 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Contacts
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
