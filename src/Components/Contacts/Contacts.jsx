import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contacts = () => {
  return (
    <footer
      id="Footer"
      className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 text-white py-10 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Contact
          </h1>
          <h3 className="text-sm sm:text-md md:text-xl font-light mt-2">
            Feel free to reach out anytime!
          </h3>
        </div>

        {/* Right Side */}
        <ul className="space-y-6 sm:space-y-4 text-sm sm:text-base md:text-lg w-full md:w-auto text-center md:text-left mx-auto md:mx-0">
          <li>
            <a
              href="mailto:ayushawasthi8299@bbdu.ac.in"
              className="inline-flex gap-3 items-center hover:text-yellow-300 transition duration-300 transform hover:scale-105 break-all"
              aria-label="Send Email"
            >
              <MdOutlineEmail size={20} className="sm:size-22" />
              <span className="truncate">ayushawasthi8299@bbdu.ac.in</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ayush-awasthi-37a7ab299/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="inline-flex gap-3 items-center hover:text-yellow-300 transition duration-300 transform hover:scale-105 break-all"
            >
              <CiLinkedin size={20} className="sm:size-22" />
              <span className="truncate">
                linkedin.com/in/ayush-awasthi-37a7ab299
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Ayush0111-Awsasthi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="inline-flex gap-3 items-center hover:text-yellow-300 transition duration-300 transform hover:scale-105 break-all"
            >
              <FaGithub size={20} className="sm:size-22" />
              <span className="truncate">github.com/Ayush0111-Awsasthi</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Note */}
      <div className="mt-8 text-center text-gray-200 text-xs sm:text-sm">
        © {new Date().getFullYear()} Ayush Awasthi • All Rights Reserved
      </div>
    </footer>
  );
};

export default Contacts;
