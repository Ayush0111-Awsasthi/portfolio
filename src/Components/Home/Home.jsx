import React from "react";
import { motion } from "framer-motion";
import AyushImg from "../../assets/AyushImg.jpeg";

const Home = () => {
  return (
    <section
      id="Home"
      className="relative flex flex-col md:flex-row items-center justify-between text-white w-full px-8 md:px-20 py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      {/* Background Glow Effects */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Left Side Content */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
        className="md:w-2/4 space-y-6 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Hello, I am{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Ayush Awasthi
          </span>
          <br />A Passionate Full-Stack Developer
        </h1>

        <p className="text-sm md:text-xl text-gray-300 leading-relaxed">
          I love transforming ideas into real-world applications. From designing
          intuitive user interfaces to building scalable backend systems, I
          strive to create solutions that are not only functional but also
          elegant, user-friendly, and efficient.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-6">
          <motion.a
            href="#Projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-3xl font-semibold text-sm md:text-lg shadow-lg hover:shadow-pink-500/40 transition duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#Footer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border border-purple-400 px-6 py-3 rounded-3xl font-semibold text-sm md:text-lg hover:bg-purple-600/30 transition duration-300"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
        className="flex justify-center md:justify-end w-full md:w-2/5 mt-12 md:mt-0 z-10"
      >
        <motion.img
          src={AyushImg}
          alt="Ayush Awasthi"
          className="w-3/4 md:w-full rounded-2xl shadow-2xl border-4 border-purple-500"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Home;
