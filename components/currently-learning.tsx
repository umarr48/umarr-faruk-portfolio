"use client"

import { motion } from "framer-motion"

const learningTopics = [
  "Next.js",
  "TypeScript",
  "Mobile App Development",
  "Software Engineering",
]

export function CurrentlyLearning() {
  return (
    <section id="currently-learning" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">{"// Current Focus"}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Currently </span>
            <span className="text-primary">Learning</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Areas I am actively exploring to strengthen my development workflow and expand my ability to build modern products.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {learningTopics.map((topic, index) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4, borderColor: "var(--primary)" }}
              className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 transition-colors duration-300"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary font-mono text-sm font-semibold">
                0{index + 1}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{topic}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}