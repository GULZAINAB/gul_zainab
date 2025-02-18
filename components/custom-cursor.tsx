"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateCursorPosition)

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-50 transition-transform duration-100 ease-out"
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
      }}
    >
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
    </div>
  )
}

