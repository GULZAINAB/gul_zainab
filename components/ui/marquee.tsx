"use client"

import React, { useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  isPaused: boolean
}

export const Marquee = ({ children, className, isPaused }: MarqueeProps) => {
  const controls = useAnimation()

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: ["0%", "-50%"], // Loop smoothly without stopping
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        },
      })
    }

    if (!isPaused) {
      animate()
    } else {
      controls.stop()
    }

    return () => controls.stop()
  }, [controls, isPaused])

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div className="flex whitespace-nowrap" animate={controls}>
        <div className="flex">{children}{children}</div> {/* Duplicate content for smooth looping */}
      </motion.div>
    </div>
  )
}
