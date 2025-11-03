"use client"

import { BackgroundAnimation } from "@/components/background-animation"
import { FeaturedProjects } from "@/components/featured-projects"
import { EducationSection } from "@/components/education-section"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <BackgroundAnimation />

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl shadow-lg z-50">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Code4fun</h1>

              <div className="hidden md:flex gap-6">
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
                <a href="/about" className="hover:text-primary transition-colors">
                  About
                </a>
                <a href="/skills" className="hover:text-primary transition-colors">
                  Skills
                </a>
                <a href="/projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </div>

              <button
                className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {isMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-border/40 flex flex-col gap-3">
                <a href="/" className="hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
                <a
                  href="/about"
                  className="hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/skills"
                  className="hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="/projects"
                  className="hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="/contact"
                  className="hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <main className="container mx-auto px-4 py-20 pt-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-5xl font-bold tracking-tight">Welcome to My Portfolio</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hi, I'm Harsh — an engineering student and generalist developer exploring full-stack, automation, and real-world software building. I enjoy experimenting with different technologies, working on practical projects, and learning through hackathons and hands-on development. This space grows as I do.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <a
                href="/projects"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                View My Work
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </main>

        <FeaturedProjects />
        <EducationSection />
      </div>
    </div>
  )
}
