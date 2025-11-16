"use client"

import { BackgroundAnimation } from "@/components/background-animation"
import { ExternalLink, Github } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"
const projects = [
  {
    id: 1,
    title: "EduHome",
    description: "Ai powered educational platform offering personalized learning experiences and resources for students and educators.",
    image: "https://media.discordapp.net/attachments/1375952821140193352/1437857265599123600/image.png?ex=691a0a6e&is=6918b8ee&hm=c4f0b8dbe3e4d5d6630ffbee45638e8d6d7444831206cdbc7a9577bcbad74cc2&=&format=webp&quality=lossless&width=1658&height=810",
    tags: ["Next.js", "Node.js", "Groq"],
    link: "https://eduhome-one.vercel.app",
    github: "https://github.com/theabsoluteray/eduhome",
  },
  {
    id: 2,
    title: "Fakebuster",
    description: "Detects the Ai generated images and text using pretrained models.", 
    image: "https://media.discordapp.net/attachments/1375952821140193352/1437858193060532387/Screenshot_2025-11-11_224858.png?ex=691a0b4b&is=6918b9cb&hm=8b182b9fa15c773586b525c2b5da7cfaa8acbd9dde7706331f4019a36c62a2fd&=&format=webp&quality=lossless&width=1658&height=810",
    tags: ["Next.js", "Tailwind", "TypeScript","HuggingFace"],
    link: "https://fakebuster-rose.vercel.app/",
    github: "https://github.com/theabsoluteray/fakebuster",
  },
  {
    id: 3,
    title : "Automated content publication system",
    description : "A system that automatically downloads and uploads content on instagram ",
    image : "https://media.discordapp.net/attachments/1436640801592709194/1439339211818795038/bmUuc3Zn.png?ex=691a2899&is=6918d719&hm=feca4a0d0d2565ce0b39c5af5ded186f565977261f163de6a77b9b0531b0330b&=&format=webp&quality=lossless&width=1075&height=716",
    tags : ["Python", "Selenium", "Instagram API","Openai"],
    link : "",
    github :"https://github.com/theabsoluteray/acp",
  },
  {
    id: 4,
    title : "Flux music",
    description : "A music streaming web application with personalized playlists and social features. [under development]",
    image : "https://media.discordapp.net/attachments/1370958073102991463/1409531360422531152/image.png?ex=6919d2e0&is=69188160&hm=03d76eb9538256c5c37e0769e410c3532f8be594622f8077047b57c82e682e95&=&format=webp&quality=lossless&width=1440&height=810",
    tags : ["Next.js", "Tailwind CSS", "FFMPEG","YT-DLP","python","Flask"],
    link : "",
    github :"https://github.com/theabsoluteray/flux-music",
  },
]

export default function ProjectsPage() {
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
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="/skills" className="hover:text-primary transition-colors">
                  Skills
                </Link>
                <Link href="/projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
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
                <Link href="/" className="hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/skills"
                  className="hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  href="/projects"
                  className="hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Projects Section */}
        <main className="container mx-auto px-4 py-20 pt-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold tracking-tight mb-4">My Projects</h1>
              <p className="text-xl text-muted-foreground">
                Explore my latest work and creative projects built with modern technologies
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative backdrop-blur-md bg-background/20 border border-border/40 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-background/40 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-border/40">
                      <a
                        href={project.link}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        View
                      </a>
                      <a
                        href={project.github}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-border/40 rounded-lg hover:bg-accent transition-colors text-sm font-medium"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
