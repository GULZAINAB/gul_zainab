"use client"

import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { useState } from "react"

const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
]
const SkillCard = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative h-24 w-24 cursor-pointer overflow-hidden rounded-xl border p-4 flex flex-col items-center justify-center mx-2",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <img className="w-12 h-12 mb-2" alt={name} src={icon || "/placeholder.svg"} />
      <figcaption className="text-xs font-medium text-center dark:text-white">{name}</figcaption>
    </figure>
  )
}

export function Skills() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    
    <div
      className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">My Skills</h2>
      <Marquee className="py-4" isPaused={isHovered}>
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>
    </div>
  )
}

