"use client";

import { motion } from "framer-motion";

export function Hero() {
  // Animation variants for fade-in from bottom
  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 }, // Start from below
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Parent container animation to stagger child animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Delay between each element
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-screen w-full bg-black text-white flex flex-col justify-center px-6 sm:px-10 md:px-20 mt-16 md:mt-28"
    >
      {/* Main Title */}
      <motion.h1
        variants={fadeInFromBottom}
        className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-semibold leading-none"
      >
        {Array.from("HI, I'M GUL ZAINAB").map((char, index) => (
          <span
            key={index}
            className={`inline-block hover:scale-110 transition-transform duration-200 ${
              char === " " ? "w-3 sm:w-4" : ""
            }`}
          >
            {char}
          </span>
        ))}
      </motion.h1>

      {/* Web Developer */}
      <motion.h2
        variants={fadeInFromBottom}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-semibold leading-none mt-1 sm:mt-2"
      >
        {Array.from("WEB DEVELOPER").map((char, index) => (
          <span
            key={index}
            className={`inline-block hover:scale-110 transition-transform duration-200 ${
              char === " " ? "w-3 sm:w-4" : ""
            }`}
          >
            {char}
          </span>
        ))}
      </motion.h2>

      {/* AI Enthusiast */}
      <motion.h2
        variants={fadeInFromBottom}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-semibold leading-none mt-1 sm:mt-2"
      >
        {Array.from("& AI ENTHUSIAST").map((char, index) => (
          <span
            key={index}
            className={`inline-block hover:scale-110 transition-transform duration-200 ${
              char === " " ? "w-3 sm:w-4" : ""
            }`}
          >
            {char}
          </span>
        ))}
      </motion.h2>

      {/* Divider with Extra Space */}
      <motion.div
        variants={fadeInFromBottom}
        className="border-t border-white mt-16 sm:mt-20 md:mt-24 w-full"
      ></motion.div>

      {/* Footer Text */}
      <motion.div
        variants={fadeInFromBottom}
        className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-6 text-sm sm:text-base md:text-xl"
      >
        <p className="text-center sm:text-left">Based in Pakistan & Working Worldwide.</p>
        <p className="text-400 text-center sm:text-right">
          Passionate about Decentralized Tech & AI-driven Solutions.
        </p>
      </motion.div>
    </motion.section>
  );
}
