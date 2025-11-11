"use client"

import { BackgroundAnimation } from "@/components/background-animation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import {
  SiGit,
  SiLinux,
  SiPython,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiC,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiFlask,
} from "react-icons/si"

const skills = {
  intermediate: [
    { name: "Git", icon: SiGit, color: "from-orange-400 to-orange-600" },
    { name: "Linux", icon: SiLinux, color: "from-gray-300 to-gray-500" },
    { name: "SQL", icon: SiPostgresql, color: "from-blue-400 to-blue-600" },
    { name: "Python", icon: SiPython, color: "from-yellow-300 to-blue-500" },
    { name: "CSS", icon: SiCss3, color: "from-blue-300 to-blue-500" },
    { name: "Tailwind", icon: SiTailwindcss, color: "from-cyan-300 to-cyan-500" },
    { name: "JavaScript", icon: SiJavascript, color: "from-yellow-300 to-yellow-500" },
    { name: "Flask", icon: SiFlask, color: "from-red-400 to-red-600" },
    { name: "Scripting & Automation", icon: SiLinux, color: "from-gray-400 to-gray-600" },
  ],
  beginner: [
    { name: "C", icon: SiC, color: "from-blue-400 to-blue-600" },
    { name: "C++", icon: SiCplusplus, color: "from-blue-500 to-cyan-500" },
    { name: "React", icon: SiReact, color: "from-cyan-300 to-blue-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "from-gray-300 to-gray-600" },
    { name: "Express", icon: SiExpress, color: "from-gray-400 to-gray-700" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "from-blue-400 to-blue-600" },
  ],
}

export default function Skills() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      <BackgroundAnimation />

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="z-50 fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl shadow-lg">
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

        {/* Skills Section */}
        <main className="container mx-auto px-4 py-20 pt-32">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Technical Skills</h1>
              <p className="text-gray-400 text-lg">Explore my expertise across different technologies and frameworks</p>
            </div>

            {/* Intermediate Skills */}
            <div className="mb-20">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white">Intermediate</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-white to-grey-100 rounded-full mt-2"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {skills.intermediate.map((skill) => {
                  const IconComponent = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="group cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-6 transition-all duration-300 hover:border-cyan-400/60 h-full flex flex-col items-center justify-center gap-3 relative overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        ></div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 rounded-2xl transition-all duration-300"></div>

                        <IconComponent className="text-3xl sm:text-4xl group-hover:scale-125 transition-transform duration-300 relative z-10" />
                        <p className="text-xs sm:text-sm font-medium text-center relative z-10">{skill.name}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Beginner Skills */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white">Beginner</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-white to-grey-100 rounded-full mt-2"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.beginner.map((skill) => {
                  const IconComponent = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="group cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-6 transition-all duration-300 hover:border-blue-400/60 h-full flex flex-col items-center justify-center gap-3 relative overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        ></div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 rounded-2xl transition-all duration-300"></div>

                        <IconComponent className="text-3xl sm:text-4xl group-hover:scale-125 transition-transform duration-300 relative z-10" />
                        <p className="text-xs sm:text-sm font-medium text-center relative z-10">{skill.name}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Skills Overview */}
            <div className="mt-20 grid md:grid-cols-3 gap-6">
              <div className="backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-300">
                <div className="text-white text-3xl mb-3">9</div>
                <h3 className="text-xl font-bold mb-2">Intermediate Skills</h3>
                <p className="text-gray-400 text-sm">Core technologies I work with regularly</p>
              </div>

              <div className="backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-8 hover:border-blue-400/60 transition-all duration-300">
                <div className="text-white text-3xl mb-3">6</div>
                <h3 className="text-xl font-bold mb-2">Beginner Skills</h3>
                <p className="text-gray-400 text-sm">Technologies I'm actively learning</p>
              </div>

              <div className="backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-8 hover:border-green-400/60 transition-all duration-300">
                <div className="text-white text-3xl mb-3">15</div>
                <h3 className="text-xl font-bold mb-2">Total Skills</h3>
                <p className="text-gray-400 text-sm">Continuously expanding my expertise</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}