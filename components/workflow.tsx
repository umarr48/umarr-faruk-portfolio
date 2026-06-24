"use client"

import { motion } from "framer-motion"
import { Code2, GitBranch, Github, Server, Globe, Sparkles, ArrowRight } from "lucide-react"

const workflowSteps = [
  {
    icon: Code2,
    title: "VS Code",
    description: "Write, edit, and refine the portfolio locally in the editor.",
    color: "cyan"
  },
  {
    icon: GitBranch,
    title: "Git",
    description: "Track changes in the local repository and keep version history clean.",
    color: "teal"
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Push the local repository to the online repository for collaboration and backup.",
    color: "purple"
  },
  {
    icon: Server,
    title: "Vercel",
    description: "Deploy the project from GitHub so every main branch update goes live.",
    color: "pink"
  },
  {
    icon: Globe,
    title: "Live Website",
    description: "Deliver the final live portfolio website to visitors.",
    color: "cyan"
  },
]

export function Workflow() {
  return (
    <section id="workflow" className="py-32 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-cyan absolute top-0 left-0 w-96 h-96 opacity-15" />
        <div className="orb orb-purple absolute bottom-0 right-0 w-80 h-80 opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
            {"// Workflow"}
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">From </span>
            <span className="gradient-text">Editor</span>
            <span className="text-foreground"> to </span>
            <span className="gradient-text">Live Site</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            The build and deployment path for this portfolio, shown in the same order the project moves from local development to the public website.
          </p>
        </motion.div>

        {/* Workflow Steps with premium styles */}
        <div className="grid gap-6 lg:grid-cols-5 relative">
          {/* Connection Line - Desktop */}
          <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] hidden lg:block">
            <div className="w-full h-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
          </div>

          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative group"
            >
              <div className={`card-premium p-6 rounded-2xl h-full border border-border/50 hover:border-${step.color}-500/50 transition-all duration-300`}>
                {/* Step Number with Gradient */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-${step.color}-500/30 bg-${step.color}-500/10 font-mono text-xs font-bold text-${step.color}-500`}>
                    0{index + 1}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">STEP</span>
                </div>

                {/* Icon with Premium Style */}
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-${step.color}-500/10 text-${step.color}-500 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]`}>
                  <step.icon className="h-7 w-7" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* Decorative Line */}
                <div className={`mt-4 h-0.5 w-8 bg-${step.color}-500/30 rounded-full group-hover:w-full transition-all duration-500`} />

                {/* Arrow Indicator for Mobile */}
                {index < workflowSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <ArrowRight className="w-4 h-4 text-primary/30" />
                  </div>
                )}
              </div>

              {/* Connection Arrow - Desktop */}
              {index < workflowSteps.length - 1 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden lg:block z-20">
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-px bg-gradient-to-r from-primary/40 to-transparent" />
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-primary/40 border-b-[6px] border-b-transparent" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-primary/30" />
            <span className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-primary" />
              Continuous Integration & Deployment Pipeline
              <Sparkles className="w-3 h-3 text-primary" />
            </span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-primary/30" />
          </p>
        </motion.div>
      </div>
    </section>
  )
}