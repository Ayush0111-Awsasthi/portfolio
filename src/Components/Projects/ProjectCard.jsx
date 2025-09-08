import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, main, image, liveLink, githubLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-900 bg-opacity-70 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 max-w-sm overflow-hidden"
    >
      {/* Image Section */}
      <div className="h-48 w-full bg-gray-800 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <span className="text-gray-400">No Preview</span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-sm text-gray-400 mb-4">{main}</p>

        {/* Buttons */}
        <div className="flex gap-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm"
            >
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg text-sm"
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
