import { ExternalLink, Github } from "lucide-react"

const featuredProjects = [
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
]

export function FeaturedProjects() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">Check out some of my best work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative backdrop-blur-md bg-background/20 border border-border/40 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-background/40 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-3 border-t border-border/40">
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-xs font-medium"
                  >
                    <ExternalLink size={14} />
                    View
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-border/40 rounded-lg hover:bg-accent transition-colors text-xs font-medium"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/projects"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
