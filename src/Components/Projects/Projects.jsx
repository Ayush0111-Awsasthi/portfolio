import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

import portfolioImage from "../../assets/portfolio.jpeg";
import AmazonImg from "../../assets/AmazonImg.png";
import AppBackened from "../../assets/AppBackened.jpg";

const Projects = () => {
  return (
    <section id="Projects" className="p-10 md:p-24 text-white relative">
      {/* Background glow effects */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Projects
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 px-8 flex flex-wrap gap-8 justify-center"
      >
        {/* Portfolio Project */}
        <ProjectCard
          title="Personal Portfolio Website"
          main="A responsive portfolio built with HTML, CSS, Tailwind, and JavaScript to showcase projects, skills, and resume with smooth animations."
          liveLink="https://your-portfolio-link.com"
          githubLink="https://github.com/yourusername/portfolio"
          image={portfolioImage}
        />

        {/* Amazon Clone */}
        <ProjectCard
          title="Amazon Clone"
          main="An e-commerce UI inspired by Amazon, built using HTML5 and CSS3 with Flexbox, Grid, and Media Queries for responsiveness."
          githubLink="https://github.com/Ayush0111-Awsasthi/Amazon"
          image={AmazonImg}
        />

        {/* Movies App Backend */}
        <ProjectCard
          title="Movies App Backend"
          main="A backend service built using MongoDB, Express.js, and Node.js. Features REST APIs for movies, comments, and users. Deployed on Render."
          liveLink="https://movies-app-backend-main.onrender.com"
          githubLink="https://github.com/Ayush0111-Awsasthi/movies-app-backend-main"
          image={AppBackened}
        />
      </motion.div>
    </section>
  );
};

export default Projects;
