"use client"

import { BackgroundAnimation } from "@/components/background-animation"
import { useState } from "react"
import { Menu, X, Download } from "lucide-react"
export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const downloadResume = () => {
      // Create a link element and trigger download
      const link = document.createElement("a")
      link.href = "/resume.pdf"
      link.download = "resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  return (
    <div className="min-h-screen">
      <BackgroundAnimation />

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl shadow-lg">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Coode4fun</h1>

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

        {/* About Section */}
        <main className="container mx-auto px-4 py-20 pt-32">
          <div className="max-w-4xl mx-auto">
             <div className="flex items-center justify-between mb-8">
              <h1 className="text-5xl font-bold">About Me</h1>
              <button
                onClick={downloadResume}
                className="flex items-center gap-2 backdrop-blur-md bg-white/80 border border-white/60 text-black hover:bg-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-white/50 font-semibold"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Main Bio */}
              <div className="backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                 Hi , I'm ray an engineering student focused on software development and automation. I have experience working with web technologies, Python scripting, and hosting environments, building applications, tools, and deployment workflows.

I'm an active hackathon participant and enjoy solving real-world problems through clean, efficient code and practical design. I’m currently strengthening my full-stack skills while exploring modern frameworks, cloud platforms, and automation pipelines.

                </p>  
                <p className="text-muted-foreground leading-relaxed">
              
I'm an active hackathon participant and enjoy solving real-world problems through clean, efficient code and practical design. I’m currently strengthening my full-stack skills while exploring modern frameworks, cloud platforms, and automation pipelines.

                </p>
              </div>

              {/* Quick Facts */}
              <div className="space-y-4">
                <div className="backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">India,HP</p>
                </div>
                <div className="backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2">Experience</h3>
                  <p className="text-muted-foreground">working since 2021</p>
                </div>
             {/* <div className="backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2">Specialization</h3>
                  <p className="text-muted-foreground">Full-Stack Development</p>

                </div> */}
              </div>
            </div>

            {/* Journey */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-8">My Journey</h2>
              <div className="space-y-6">
                <div className="backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold">Student Developer & Hackathon Participant</h3>
                      <p className="text-sm text-muted-foreground">2023 - Present</p>
                      <p className="text-muted-foreground mt-2">
                        Learning and building projects across web development, Python automation, and cloud deployment.
  Actively participating in hackathons and exploring modern full-stack technologies.
                      </p>
                    </div>
                  </div>
                </div>

                

                
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
