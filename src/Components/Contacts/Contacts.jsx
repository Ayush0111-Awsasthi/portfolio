import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contacts = () => {
  return (
    <footer
      id="Footer"
      className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 text-white py-12 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
          <h3 className="text-md md:text-xl font-light mt-2">
            Feel free to reach out anytime!
          </h3>
        </div>

        {/* Right Side */}
        <ul className="space-y-4 text-sm md:text-lg">
          <li className="flex gap-3 items-center hover:text-yellow-300 transition duration-300 transform hover:scale-105">
            <MdOutlineEmail size={22} />
            <a href="mailto:ayushawasthi8299@bbdu.ac.in">
              ayushawasthi8299@bbdu.ac.in
            </a>
          </li>
          <li className="flex gap-3 items-center hover:text-yellow-300 transition duration-300 transform hover:scale-105">
            <CiLinkedin size={22} />
            <a
              href="https://www.linkedin.com/in/ayushi-avasthi-ab26761a5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/ayush-awasthi-37a7ab299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
            </a>
          </li>
          <li className="flex gap-3 items-center hover:text-yellow-300 transition duration-300 transform hover:scale-105">
            <FaGithub size={22} />
            <a
              href="https://github.com/Ayush0111-Awsasthi"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Ayush0111-Awsasthi
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-gray-200 text-sm">
        © {new Date().getFullYear()} Ayush Awasthi • All Rights Reserved
      </div>
    </footer>
  );
};

export default Contacts;
