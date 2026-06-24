"use client"

import { motion } from "framer-motion"
import { Code2, GitBranch, Github, Server, Globe } from "lucide-react"

const workflowSteps = [
  {
    icon: Code2,
    title: "VS Code",
    description: "Write, edit, and refine the portfolio locally in the editor.",
  },
  {
    icon: GitBranch,
    title: "Git",
    description: "Track changes in the local repository and keep version history clean.",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Push the local repository to the online repository for collaboration and backup.",
  },
  {
    icon: Server,
    title: "Vercel",
    description: "Deploy the project from GitHub so every main branch update goes live.",
  },
  {
    icon: Globe,
    title: "Your Portfolio Website",
    description: "Deliver the final live portfolio website to visitors.",
  },
]

export function Workflow() {
  return (
    <section id="workflow" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">{"// Workflow"}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">From </span>
            <span className="text-primary">Editor</span>
            <span className="text-foreground"> to </span>
            <span className="text-primary">Live Site</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            The build and deployment path for this portfolio, shown in the same order the project moves from local development to the public website.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-5">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -4, borderColor: "var(--primary)" }}
              className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 transition-colors duration-300"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" />
              </div>

              <div className="mb-3 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-mono text-xs font-semibold text-primary">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>

              {index < workflowSteps.length - 1 && (
                <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 bg-primary/40 lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}