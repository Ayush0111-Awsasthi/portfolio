import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-lg shadow-md">
      <div className="flex justify-between items-center text-white px-6 md:px-20 py-7">
        {/* Logo / Name */}
        <span className="text-2xl font-extrabold tracking-wide cu text-purple-400 transition">
          Ayush Awasthi
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold">
          <li>
            <a
              href="#About"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Experience"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Contacts"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Contacts
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        {isMenuOpen ? (
          <RiCloseLine
            size={30}
            className="md:hidden cursor-pointer transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="md:hidden cursor-pointer transition-all duration-300"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden flex flex-col items-center gap-6 font-semibold text-lg text-white bg-black bg-opacity-80 backdrop-blur-xl py-6 transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-96 pointer-events-none"
        }`}
      >
        <a
          href="#About"
          className="hover:text-blue-400 transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#Experience"
          className="hover:text-blue-400 transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Experience
        </a>
        <a
          href="#Projects"
          className="hover:text-blue-400 transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#Contacts"
          className="hover:text-blue-400 transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Contacts
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
