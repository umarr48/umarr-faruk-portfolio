"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Sparkles, Car, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const featuredProjects = [
  {
    title: "Driving School Management System",
    description:
      "A complete driving school management platform that handles student registration, instructor assignment, booking management, mock tests, certificate generation, and administrative operations. Features comprehensive dashboards for both students and administrators with real-time updates.",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    features: ["Student Dashboard", "Admin Dashboard", "Booking System", "Mock Tests", "Vehicle Management", "Certificate Generation"],
    liveUrl: "#",
    githubUrl: "https://github.com/umarr48",
    icon: Car,
  },
  {
    title: "Daily Coding Coach",
    description:
      "An AI-powered coding learning platform that helps beginners improve programming skills through guided practice, coding challenges, and progress tracking. Provides personalized learning paths and real-time feedback to accelerate skill development.",
    tags: ["AI", "Python", "JavaScript", "Learning Platform"],
    features: ["Guided Practice", "Coding Challenges", "Progress Tracking", "Personalized Learning", "Real-time Feedback", "Skill Assessment"],
    liveUrl: "#",
    githubUrl: "https://github.com/umarr48",
    icon: Sparkles,
  },
]



export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">{"// My Work"}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Featured </span>
            <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Practical applications demonstrating full-stack development capabilities, database design, and real-world problem solving.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-24 mb-32">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Project image */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-video rounded-xl overflow-hidden border border-border bg-card relative">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center relative">
                    <div className="text-center p-8">
                      <motion.div 
                        className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <project.icon className="w-10 h-10 text-primary" />
                      </motion.div>
                      <p className="text-foreground font-semibold text-lg">{project.title}</p>
                    </div>
                  </div>
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
              </motion.div>

              {/* Project info */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{project.title}</h3>
                <div className="p-6 rounded-xl bg-card border border-border mb-6">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                {project.features && (
                  <div className="mb-6">
                    <p className="text-sm text-primary font-semibold mb-3">Key Features:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-all duration-300 active:scale-95 touch-manipulation text-sm"
                    aria-label="View source code"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 active:scale-95 touch-manipulation text-sm"
                      aria-label="View live site"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/umarr48"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-border hover:border-primary hover:text-primary gap-2 active:scale-95 touch-manipulation">
              <Github className="w-4 h-4" />
              View All Projects on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
