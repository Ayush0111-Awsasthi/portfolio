import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaHtml5 color="#E34F26" size={45} />, name: "HTML" },
  { icon: <FaCss3 color="#1572B6" size={45} />, name: "CSS" },
  { icon: <FaJs color="#F7DF1E" size={45} />, name: "JavaScript" },
  { icon: <FaReact color="#61DAFB" size={45} />, name: "React" },
  { icon: <FaNodeJs color="#339933" size={45} />, name: "Node.js" },
  { icon: <SiExpress color="#fff" size={45} />, name: "Express.js" },
  { icon: <SiMongodb color="#47A248" size={45} />, name: "MongoDB" },
  { icon: <SiTailwindcss color="#38B2AC" size={45} />, name: "Tailwind CSS" },
  { icon: <FaGithub color="#fff" size={45} />, name: "GitHub" },
];

const experiences = [
  {
    title: "MERN Stack Developer Training",
    company: "GRASTech – Noida",
    period: "June 2025 – July 2025",
    details: [
      "Engaged in intensive hands-on training on MongoDB, Express.js, React.js, and Node.js.",
      "Developed real-world web applications with RESTful APIs, authentication, and dynamic UIs.",
      "Enhanced skills in React Hooks, Redux, and backend integration.",
      "Collaborated on group projects simulating industry-standard workflows.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="Experience"
      className="relative p-10 md:p-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
        Experience
      </h1>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-6 justify-center mb-16"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="p-4 bg-zinc-900 rounded-xl shadow-lg hover:scale-110 transform transition duration-300"
            whileHover={{ rotate: 6, scale: 1.1 }}
          >
            {skill.icon}
          </motion.div>
        ))}
      </motion.div>

      {/* Internship / Training Section */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900 bg-opacity-60 rounded-lg p-6 shadow-xl hover:shadow-purple-500/40 transition-all"
          >
            <h2 className="text-2xl font-semibold text-purple-400">
              {exp.title}
            </h2>
            <p className="text-gray-300">{exp.company}</p>
            <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
            <ul className="text-gray-300 list-disc pl-5 space-y-1">
              {exp.details.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
