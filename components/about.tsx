"use client"

import { motion } from "framer-motion"
import { Code2, Brain, Rocket, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code that stands the test of time.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Leveraging cutting-edge AI technologies to build intelligent, adaptive applications.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing every aspect for speed, efficiency, and exceptional user experience.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Constantly exploring new technologies and pushing the boundaries of what is possible.",
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
              {"I'm a Final Year BCA student with a passion for building modern web applications. My journey in tech started with curiosity about how applications work, and it has evolved into a dedicated pursuit of creating elegant solutions to real-world problems."}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Throughout my academic years and personal projects, I've built practical experience with <span className="text-primary">PHP</span>, <span className="text-primary">MySQL</span>, <span className="text-primary">JavaScript</span>, and modern web frameworks. I believe in the power of clean code, user-centered design, and continuous learning to build better applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m constantly learning new technologies and frameworks to expand my skillset. My goal is to develop impactful applications that solve real problems and contribute to the tech community through quality work and knowledge sharing.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { value: "Final Year", label: "BCA Student" },
                { value: "5+", label: "Key Projects" },
                { value: "Strong", label: "Learning Mindset" },
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
