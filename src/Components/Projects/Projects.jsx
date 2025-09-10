import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

import portfolioImage from "../../assets/Portfolio.jpeg";
import AmazonImg from "../../assets/AmazonImg.png";
import AppBackened from "../../assets/AppBackened.jpg";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="px-6 sm:px-10 md:px-24 py-16 text-white relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute -top-32 -left-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Section Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-12 relative z-10">
        Projects
      </h1>

      {/* Project Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {/* Portfolio Project */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <ProjectCard
            title="Personal Portfolio Website"
            main="A responsive portfolio built with React, Tailwind CSS, and Framer Motion to showcase projects, skills, and resume with smooth animations."
            liveLink="https://your-portfolio-link.com"
            githubLink="https://github.com/yourusername/portfolio"
            image={portfolioImage}
          />
        </motion.div>

        {/* Amazon Clone */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <ProjectCard
            title="Amazon Clone"
            main="An e-commerce UI inspired by Amazon, built using HTML5, CSS3, and responsive design with Flexbox and Grid."
            githubLink="https://github.com/Ayush0111-Awsasthi/Amazon"
            image={AmazonImg}
          />
        </motion.div>

        {/* Movies App Backend */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <ProjectCard
            title="Movies App Backend"
            main="A backend service built using MongoDB, Express.js, and Node.js. Features REST APIs for movies, comments, and users. Deployed on Render."
            liveLink="https://movies-app-backend-main.onrender.com"
            githubLink="https://github.com/Ayush0111-Awsasthi/movies-app-backend-main"
            image={AppBackened}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
