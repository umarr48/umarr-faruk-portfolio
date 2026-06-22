"use client"

import { motion } from "framer-motion"
import { Code2, Brain, Rocket, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "BCA Gandu",
    description: "Built a strong academic foundation in computing, software concepts, and problem solving.",
  },
  {
    icon: Brain,
    title: "Full Stack Development Enthusiast",
    description: "Focused on building complete web applications using practical and modern technologies.",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description: "Enjoys breaking down real-world requirements into simple, working, user-friendly solutions.",
  },
  {
    icon: Sparkles,
    title: "Continuous Learner",
    description: "Consistently improving skills through hands-on projects, practice, and new technologies.",
  },
]

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">{"// About Me"}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Professional </span>
            <span className="text-primary">Profile</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a BCA graduate and passionate Full Stack Developer who enjoys building practical web applications, learning new technologies, and turning ideas into useful digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My interest in software development grew through hands-on learning with <span className="text-primary">PHP</span>, <span className="text-primary">MySQL</span>, <span className="text-primary">JavaScript</span>, and web development tools. I enjoy building complete applications that solve real-world problems and provide a smooth user experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I value clean implementation, continuous improvement, and consistent practice. My goal is to grow as a software engineer while contributing to meaningful projects and collaborative teams.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
              {[
                "BCA Graduate",
                "Full Stack Development Enthusiast",
                "Problem Solver",
                "Continuous Learner",
              ].map((label) => (
                <div key={label} className="text-center">
                  <p className="text-base md:text-lg font-semibold text-primary">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: "var(--primary)" }}
                className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
