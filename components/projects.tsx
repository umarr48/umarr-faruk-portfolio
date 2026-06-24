"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Code2, Sparkles, Eye } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

type Project = {
  title: string
  description: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  icon: LucideIcon
  screenshot?: string
  screenshotGallery?: { src: string; alt: string }[]
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
  {
    title: "Umarr Car Driving School Management System",
    description:
      "A practical management system for driving school operations, built to handle student workflows, scheduling, and everyday administration with a clean interface.",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    liveUrl: "https://youtu.be/1ZknT2V1zlc",
    githubUrl: "https://github.com/umarr48",
    icon: Code2,
    screenshot: "/Projects/dashboard.png",
    screenshotGallery: [
      { src: "/Projects/dashboard.png", alt: "Dashboard" },
      { src: "/Projects/Admin dashboard.png", alt: "Admin Dashboard" },
      { src: "/Projects/why we choose.png", alt: "Why We Choose Us" },
    ],
  },
]

export function Projects() {
  const [openGallery, setOpenGallery] = useState(false)
  const [galleryImages, setGalleryImages] = useState<{ src: string; alt: string }[]>([])

  const openScreenshots = (images: { src: string; alt: string }[]) => {
    setGalleryImages(images)
    setOpenGallery(true)
  }

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-cyan absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 opacity-20" />
        <div className="orb orb-teal absolute bottom-0 right-0 w-80 h-80 opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header with premium styles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm mb-3 inline-flex items-center gap-2 badge-premium"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {"// My Work"}
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Selected projects that highlight practical problem solving, complete application building, and a strong focus on user experience.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-32 mb-32">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Project image with premium styles */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-video rounded-2xl overflow-hidden border border-border/50 bg-card relative card-premium">
                  {project.screenshot ? (
                    <>
                      <Image
                        src={project.screenshot}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 grid-bg opacity-30" />
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center relative">
                        <div className="text-center p-8">
                          <motion.div 
                            className="w-20 h-20 mx-auto mb-4 rounded-2xl glass-cyan border border-primary/30 flex items-center justify-center"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <project.icon className="w-10 h-10 text-primary" />
                          </motion.div>
                          <p className="text-foreground font-semibold text-lg gradient-text">{project.title}</p>
                        </div>
                      </div>
                    </>
                  )}
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" />
                </div>
              </motion.div>

              {/* Project info with premium styles */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <p className="text-primary font-mono text-sm mb-3 inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Featured Project
                </p>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground gradient-text">
                  {project.title}
                </h3>
                <div className="glass p-6 rounded-2xl border border-border/50 mb-6">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="font-mono text-xs px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:border-primary/50 transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass hover:border-primary/50 hover:text-primary transition-all duration-300 hover-lift text-sm"
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
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-glow-premium text-sm"
                      aria-label="Watch demo video"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Watch Demo</span>
                    </a>
                  )}
                  {project.screenshotGallery && project.screenshotGallery.length > 0 && (
                    <button
                      type="button"
                      onClick={() => openScreenshots(project.screenshotGallery!)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass hover:border-primary/50 hover:text-primary transition-all duration-300 hover-lift text-sm"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Screenshots</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button with premium styles */}
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
            <Button variant="outline" className="btn-outline-premium gap-2 px-8 py-6 text-lg">
              <Github className="w-5 h-5" />
              View GitHub Repository
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Premium Dialog for Screenshots */}
      <Dialog open={openGallery} onOpenChange={setOpenGallery}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-dark border-border/30 rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text">Project Screenshots</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-6 py-4">
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl border border-border/30 card-premium"
              >
                <div className="relative aspect-video bg-muted">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 90vw"
                  />
                </div>
                <div className="p-4 glass-light border-t border-border/30">
                  <p className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}