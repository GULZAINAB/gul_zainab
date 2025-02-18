import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/10">
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400">© 2025 Gul Zainab.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/GULZAINAB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          
            <a
              href="https://www.linkedin.com/in/gul-zainab-khanzada-80b708228/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

