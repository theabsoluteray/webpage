import { Award, BookOpen } from "lucide-react"

const education = [
  {
    id: 1,
    type: "degree",
    title: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Sri sai college of engineering and technology",
    year: "2020 - 2027",
    description: "Specialization in ai and machine learning",
    icon: BookOpen,
  },
 
 
]

export function EducationSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground">My academic background and professional certifications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="backdrop-blur-md bg-background/20 border border-border/40 rounded-2xl p-6 transition-all duration-300 hover:bg-background/40 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-primary mb-2">{item.institution}</p>
                    <p className="text-xs text-muted-foreground mb-2">{item.year}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
