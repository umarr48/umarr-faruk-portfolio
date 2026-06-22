"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Code2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Project = {
  title: string
  description: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  icon: LucideIcon
  screenshot?: string
}

const featuredProjects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A futuristic developer portfolio showcasing projects, technical skills, achievements, and professional experience using modern UI/UX principles.",
    tags: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://v0-futuristic-developer-portfolio-iota.vercel.app",
    githubUrl: "https://github.com/umarr48",
    icon: Code2,
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
            Selected projects that highlight practical problem solving, complete application building, and a strong focus on user experience.
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
                  {project.screenshot ? (
                    <Image
                      src={project.screenshot}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <>
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
                    </>
                  )}
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
                    <span>GitHub Repository</span>
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
              View GitHub Repository
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
