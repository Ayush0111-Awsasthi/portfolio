import React from "react";
import AboutImg from "../../assets/AboutImg.png";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20 overflow-hidden">
      {/* Background graphics */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Animated Image */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="flex justify-center md:w-1/2"
        >
          <motion.img
            src={AboutImg}
            alt="About Me"
            className="h-80 md:h-96 rounded-2xl shadow-2xl border-4 border-purple-500"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="md:w-1/2 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <ul className="space-y-8">
            {[
              {
                title: "Frontend Developer",
                desc: "I have solid experience in HTML, CSS, and JavaScript, along with React.js and Tailwind CSS. I specialize in responsive, visually appealing, and user-friendly interfaces.",
              },
              {
                title: "Backend Developer",
                desc: "Expertise in the MERN stack (Node.js, Express.js, MongoDB). Built REST APIs, authentication systems, and scalable applications like a Movies App Backend.",
              },
              {
                title: "Version Control & Collaboration",
                desc: "Skilled with Git and GitHub for smooth collaboration, branching strategies, and clean commit histories in professional workflows.",
              },
              {
                title: "Java & DSA",
                desc: "Strong foundation in Java and DSA. I solve coding challenges regularly to sharpen problem-solving and algorithmic efficiency.",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex gap-4"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <IoArrowForward
                  size={28}
                  className="mt-1 text-purple-400 animate-pulse"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
