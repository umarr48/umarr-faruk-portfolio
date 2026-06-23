"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

const techStack = ["PHP", "MySQL", "Bootstrap", "JavaScript"]
const demoVideoUrl = "https://youtu.be/1ZknT2V1zlc"
const projectImages = [
  { src: "/Projects/dashboard.png", alt: "Dashboard" },
  { src: "/Projects/Admin dashboard.png", alt: "Admin Dashboard" },
  { src: "/Projects/why we choose.png", alt: "Why We Choose Us" },
]

export function FeaturedProject() {
  const [showGallery, setShowGallery] = useState(false)
  return (
    <section id="featured-project" className="relative py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5 pointer-events-none" />
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="text-primary font-mono text-sm mb-3">⭐ Featured Project</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-foreground max-w-3xl">
            Umarr Driving School Management System
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            A practical management system for driving school operations, built to handle student workflows, scheduling, and everyday administration with a clean interface.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="space-y-5 rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-primary">
                  Featured Build
                </span>
                <span>Built for student and admin workflows</span>
              </div>

              <div className="space-y-3">
                <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                  A complete driving school management system designed to keep daily operations organized, responsive, and easy to maintain.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  It focuses on core administrative tasks while keeping the interface straightforward for instructors and staff.
                </p>
              </div>

              <p className="text-sm font-mono text-muted-foreground">
                Tech: PHP • MySQL • Bootstrap • JavaScript
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="glow-cyan bg-primary px-6 text-primary-foreground hover:bg-primary/90">
                  <a href={demoVideoUrl} target="_blank" rel="noopener noreferrer">
                    <span className="inline-flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Watch Demo
                    </span>
                  </a>
                </Button>

                <Button asChild size="lg" variant="outline" className="border-border hover:border-primary hover:text-primary px-6">
                  <a href="https://github.com/umarr48" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>

                <Button size="lg" variant="secondary" className="px-6" onClick={() => setShowGallery(true)}>
                  Screenshots
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono text-xs px-3 py-1.5">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            id="featured-project-preview"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_24px_90px_rgba(0,0,0,0.24)]">
              <div className="flex items-center gap-2 border-b border-border/70 bg-background/80 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs font-mono text-muted-foreground">dashboard.png</span>
              </div>

              <div className="relative aspect-[16/12] bg-[#050b0a]">
                <Image
                  src="/Projects/dashboard.png"
                  alt="Umarr Driving School Management System dashboard screenshot"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={showGallery} onOpenChange={setShowGallery}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Project Screenshots</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-6">
            {projectImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg border border-border">
                <div className="relative aspect-video bg-muted">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 90vw"
                  />
                </div>
                <div className="p-3 bg-background/50 border-t border-border">
                  <p className="text-sm font-medium text-foreground">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}