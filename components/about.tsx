"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const scrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/path-to-your-cv.pdf";
    link.download = "YourName_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation variant for fade-in-left effect
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="about"
      className="relative py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // Ensures animation triggers on scroll
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center text-center space-y-6"
          variants={fadeInLeft}
        >
          <h2 className="text-3xl md:text-4xl font-bold">About me</h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            I am a Computer Engineering major with a passion for pushing the boundaries of technology.
            My expertise spans across web development, artificial intelligence, blockchain, and hardware systems,
            allowing me to build innovative solutions from the ground up. From crafting seamless web applications
            to designing decentralized systems and exploring the intersection of AI and hardware, I thrive on solving
            complex problems and bringing ideas to life. Constantly learning and evolving, I aim to bridge the gap
            between cutting-edge software and next-gen hardware, shaping the future of tech with every project I undertake.
          </p>

          <div className="flex items-center gap-4 pt-6">
            <Button size="lg" onClick={scrollToProjects}>
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={downloadCV}>
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
