"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <div className="py-4 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="lg:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-10">
            <a href="#home" className="hover:text-gray-400 transition">
              HOME
            </a>
            <a href="#about" className="hover:text-gray-400 transition">
              ABOUT
            </a>
          </div>

          {/* Center Name with Underline */}
          <div className="text-base tracking-wide">
            ZAINAB
            <div className="w-10 h-[1px] bg-white mx-auto mt-1"></div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-10">
            <a href="#projects" className="hover:text-gray-400 transition">
              WORK
            </a>
            <a href="#contact" className="hover:text-gray-400 transition">
              CONTACT
            </a>
          </div>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <a href="#home" className="block py-2 hover:text-gray-400 transition">
              HOME
            </a>
            <a href="#about" className="block py-2 hover:text-gray-400 transition">
              ABOUT
            </a>
            <a href="#projects" className="block py-2 hover:text-gray-400 transition">
              WORK
            </a>
            <a href="#contact" className="block py-2 hover:text-gray-400 transition">
              CONTACT
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

