"use client"

import { motion } from "framer-motion"
import { Code2, Brain, Rocket, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices and design patterns.",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description: "Breaking down complex problems and building efficient, practical solutions.",
  },
  {
    icon: Rocket,
    title: "Full Stack",
    description: "Building complete applications from database design to user interface.",
  },
  {
    icon: Sparkles,
    title: "Continuous Learning",
    description: "Dedicated to mastering new technologies and industry best practices.",
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
            <span className="text-foreground">Crafting Digital </span>
            <span className="text-primary">Experiences</span>
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
              I&apos;m a Final Year BCA student specializing in Full Stack Development with hands-on experience building practical web applications. My passion lies in creating efficient, user-friendly solutions that solve real-world problems. I&apos;ve developed strong fundamentals in software development through both academic coursework and personal projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My technical foundation includes <span className="text-primary">PHP</span>, <span className="text-primary">MySQL</span>, <span className="text-primary">JavaScript</span>, and modern web development practices. I excel at designing scalable database architectures, building responsive user interfaces, and writing clean, maintainable backend code. I&apos;m committed to best practices and writing code that other developers can easily understand and build upon.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I&apos;m dedicated to continuous learning and staying current with industry developments. I approach each project with a focus on quality, reliability, and delivering tangible value. I&apos;m ready to bring strong technical skills and a strong work ethic to my first professional role.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { value: "BCA", label: "Final Year" },
                { value: "5+", label: "Live Projects" },
                { value: "Eager", label: "To Grow" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">{value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{label}</p>
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
