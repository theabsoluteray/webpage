"use client"

import type React from "react"

import { BackgroundAnimation } from "@/components/background-animation"
import { useState } from "react"
import { Menu, X, Linkedin, Github, Instagram ,} from "lucide-react"

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setFormStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setFormStatus({
          type: "error",
          message: data.error || "Failed to send message",
        })
        return
      }

      setFormStatus({
        type: "success",
        message: "Message sent successfully ! Thanks for reaching out.",
      })
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

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

        {/* Contact Section */}
        <main className="container mx-auto px-4 py-20 pt-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
                {formStatus.type && (
                  <div
                    className={`p-4 rounded-lg mb-4 border backdrop-blur-md ${
                      formStatus.type === "success"
                        ? "bg-background/30 border-white text-white shadow-lg shadow-cyan-500/20"
                        : "bg-background/30 border-red-500/50 text-red shadow-lg shadow-red-500/20"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-background/50 border border-border/40 rounded-lg focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-background/50 border border-border/40 rounded-lg focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 bg-background/50 border border-border/40 rounded-lg focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-3 bg-white text-black rounded-lg hover:opacity-90 transition-opacity font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {/* Email */}
                <div className="backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg">
                      <Instagram className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Instagram</h3>
                      <a
                        href="https://www.instagram.com/rayuwu04"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Instagram.com/rayuwu04
                      </a>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg">
                      <Linkedin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/in/rayuwu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        www.linkedin.com/in/rayuwu
                      </a>
                    </div>
                  </div>
                </div>

                {/* GitHub */}
                <div className="backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg">
                      <Github className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">GitHub</h3>
                      <a
                        href="https://github.com/theabsoluteray"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/theabsoluteray
                      </a>
                    </div>
                  </div>
                </div>

                {/* Twitter */}
                <div className="backdrop-blur-md bg-background/30 border border-border/40 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="p-3  rounded-lg">
                      <X className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">X</h3>
                      <a
                        href="https://x.com/HarshThaku45623"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        X.com/harsh
                      </a>
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
