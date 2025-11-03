"use client"

import { Github, Linkedin, Mail, Code2, Briefcase, BookOpen, Zap } from "lucide-react"

export function PortfolioSection() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my work, skills, and experience in web development and design
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* About Me Card */}
          <div className="group backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-8 hover:bg-background/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold">About Me</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Full-stack developer passionate about creating beautiful, performant web experiences. I specialize in
              React, Next.js, and modern web technologies.
            </p>
          </div>

          {/* Skills Card */}
          <div className="group backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-8 hover:bg-background/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold">Skills</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-cyan-400 mb-2">Frontend</p>
                <p className="text-sm text-muted-foreground">React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-cyan-400 mb-2">Backend</p>
                <p className="text-sm text-muted-foreground">Node.js, PostgreSQL, API Design</p>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="group backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-8 hover:bg-background/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold">Experience</h3>
            </div>
            <div className="space-y-3">
              <div className="border-l-2 border-cyan-500/50 pl-3">
                <p className="font-semibold text-sm">Senior Developer</p>
                <p className="text-xs text-muted-foreground">2022 - Present</p>
              </div>
              <div className="border-l-2 border-cyan-500/30 pl-3">
                <p className="font-semibold text-sm">Full Stack Developer</p>
                <p className="text-xs text-muted-foreground">2020 - 2022</p>
              </div>
            </div>
          </div>

          {/* Projects Highlight Card */}
          <div className="group backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-8 hover:bg-background/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold">Featured Projects</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background/50 rounded-lg p-4 border border-border/20 hover:border-cyan-500/50 transition-colors">
                <p className="font-semibold mb-1">E-Commerce Platform</p>
                <p className="text-sm text-muted-foreground">Next.js, Stripe, PostgreSQL</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4 border border-border/20 hover:border-cyan-500/50 transition-colors">
                <p className="font-semibold mb-1">Analytics Dashboard</p>
                <p className="text-sm text-muted-foreground">React, Chart.js, Real-time Data</p>
              </div>
            </div>
          </div>

          {/* Tools & Technologies Card */}
          <div className="group backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-8 hover:bg-background/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["VS Code", "Git", "Docker", "Vercel", "AWS", "Figma"].map((tool) => (
                <span key={tool} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="group backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-8 hover:bg-background/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-sm">B.S. Computer Science</p>
                <p className="text-xs text-muted-foreground">University Name, 2020</p>
              </div>
              <div>
                <p className="font-semibold text-sm">Web Development Certification</p>
                <p className="text-xs text-muted-foreground">Online Course, 2019</p>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="group backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-8 hover:bg-background/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold">Contact</h3>
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:hello@example.com"
                className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center hover:bg-cyan-500/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center hover:bg-cyan-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-cyan-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center hover:bg-cyan-500/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
