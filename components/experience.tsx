"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const experiences = [
    {
      period: "June - Aug 2023",
      role: "Blockchain Developer Intern",
      company: "Vanar",
      description: "Worked on blockchain-based solutions, contributing to smart contract development and decentralized application integration.",
    },
    {
      period: "2022 - 2025",
      role: "Network Administrator",
      company: "Netronix (Handzone Experience in Networking)",
      description: "Managed and optimized network infrastructure at GIKI, ensuring secure and efficient connectivity across campus.",
    },
    
  ]

  return (
    <section id="experience" className="relative py-16 md:py-24 border-t border-white/10 bg-black-950">
      <div
        className={`container mx-auto px-4 transition-opacity duration-1000 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">My professional journey</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`relative pl-8 pb-12 last:pb-0 transition-all duration-1000 ease-in-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 200 + 500}ms` }}
            >
              <div
                className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary to-primary/0"
                style={{
                  transition: "height 1s ease-in-out",
                  height: isLoaded ? "100%" : "0%",
                  transitionDelay: `${index * 200 + 500}ms`,
                }}
              />
              <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-white animate-ping" />
              <div className="space-y-2">
                <span className="text-sm text-gray-400">{experience.period}</span>
                <h3 className="text-xl font-semibold">{experience.role}</h3>
                <p className="text-gray-600">{experience.company}</p>
                <p className="text-gray-400">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

