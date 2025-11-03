"use client"

import { BackgroundAnimation } from "@/components/background-animation"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and payment integration.",
    image: "/ecommerce-dashboard.png",
    tags: ["Next.js", "React", "Stripe", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat application powered by AI with natural language processing and sentiment analysis.",
    image: "/ai-chat-interface.png",
    tags: ["React", "Node.js", "WebSocket", "OpenAI"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates, team collaboration, and analytics.",
    image: "/task-management-dashboard.png",
    tags: ["Next.js", "Supabase", "Tailwind", "TypeScript"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with real-time updates and custom charts.",
    image: "/data-visualization-dashboard.png",
    tags: ["React", "D3.js", "Chart.js", "API"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Mobile Fitness Tracker",
    description: "Cross-platform fitness tracking app with workout logging, progress analytics, and social features.",
    image: "/fitness-tracker-mobile-app.jpg",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Content Management System",
    description: "Headless CMS with powerful content management, version control, and multi-language support.",
    image: "/content-management-system.png",
    tags: ["Next.js", "GraphQL", "MongoDB", "Vercel"],
    link: "#",
    github: "#",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <BackgroundAnimation />

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl shadow-lg z-50">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold hover:text-primary transition-colors">
                Code4fun
              </a>

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
                <a href="/projects" className="text-primary transition-colors font-semibold">
                  Projects
                </a>
                <a href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>
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
