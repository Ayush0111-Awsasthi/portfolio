import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, main, image, liveLink, githubLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-900 bg-opacity-70 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 w-full max-w-sm sm:max-w-md overflow-hidden"
    >
      {/* Image Section */}
      <div className="h-40 sm:h-48 md:h-56 w-full bg-gray-800 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <span className="text-gray-400">No Preview</span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 flex flex-col justify-between h-full">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 text-center sm:text-left">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mb-4 text-center sm:text-left leading-relaxed">
          {main}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm text-center w-full sm:w-auto"
            >
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg text-sm text-center w-full sm:w-auto"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
