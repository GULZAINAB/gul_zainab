"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function Contact() {
  const [isHovered, setIsHovered] = useState(false)

  // Animation variants for the main text
  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  // Letter animation for "LET'S WORK TOGETHER"
  const letters = "LET'S WORK TOGETHER".split("")

  return (
    <div id="contact">
    <div className="border-t border-white mt-16 sm:mt-20 md:mt-24 w-full"></div>
    <motion.section
      className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.3 }} // Ensures animation triggers on scroll
    >
      <div className="text-center">
        <motion.p
          variants={{
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-white/80 mb-6 text-sm sm:text-base"
        >
          HAVE A PROJECT IN MIND ?
        </motion.p>

        <motion.div variants={{ initial: {}, animate: {} }} className="overflow-hidden">
          <div className="flex flex-wrap justify-center gap-x-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-12">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  initial: { y: 100, opacity: 0 },
                  animate: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, delay: index * 0.05 },
                  },
                }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-3 text-white border border-white/20 rounded-full 
                          hover:border-white/40 transition-colors duration-300"
              >
                Get In Touch
              </motion.button>
            </TooltipTrigger>
            <TooltipContent className="bg-white text-black p-4 rounded-lg shadow-lg" sideOffset={5}>
              <div className="space-y-2">
                <p>Email: gulzainab04@gmail.com</p>
                <p>Phone: +92 3308658916</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </motion.section>
    </div>
  )
}

