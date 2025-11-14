import { ExternalLink, Github } from "lucide-react"
import Image from "next/image";
const featuredProjects = [
 
  {
    id: 1,
    title: "Edu Home",
    description: "AI-powered chat interface for personalized learning experiences and instant doubt resolution.",
    image: "https://media.discordapp.net/attachments/1375952821140193352/1437857265599123600/image.png?ex=6914c46e&is=691372ee&hm=672c4f21e09e91764be8bf0ff149a44af57863014806ead2e0a6c4ea63e31970&=&format=webp&quality=lossless&width=1658&height=810",
    tags: ["Next.js", "Node.js", "Groq"],
    link: "https://eduhome-one.vercel.app",
    github: "/https://github.com/theabsoluteray/eduhome",
  },
  {
    id: 2,
    title: "Fakebuster",
    description: "Detects the Ai generated images and text using pretrained models.",
    image: "https://media.discordapp.net/attachments/1375952821140193352/1437858193060532387/Screenshot_2025-11-11_224858.png?ex=6914c54b&is=691373cb&hm=4671db8131e5f70d292a836f66d20bc7cc2f4452aaf9ede6f92e9333c7d7de07&=&format=webp&quality=lossless&width=1658&height=810",
    tags: ["Next.js", "Tailwind", "TypeScript","HuggingFace"],
    link: "https://fakebuster-rose.vercel.app/",
    github: "https://github.com/theabsoluteray/fakebuster",
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
                <Image src={project.image} width={500} height={500} alt={project.title}></Image>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary/100 text-white rounded-full border border-primary/20 group-hover:bg-primary/100 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-3 border-t border-border/40">
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 bg-primary/100 hover:bg-white/60 transition-colors text-xs font-medium"
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
