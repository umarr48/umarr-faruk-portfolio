"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "Bootstrap", level: 88 },
      { name: "Responsive Design", level: 94 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", level: 90 },
      { name: "MySQL", level: 88 },
      { name: "REST APIs", level: 80 },
      { name: "XAMPP", level: 85 },
      { name: "Database Design", level: 82 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 82 },
      { name: "Data Structures", level: 80 },
      { name: "Algorithms", level: 78 },
      { name: "Problem Solving", level: 86 },
      { name: "OOP Concepts", level: 84 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "XAMPP", level: 85 },
      { name: "Debugging", level: 84 },
    ],
  },
]

const technologies = [
  "HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP",
  "MySQL", "Python", "Git", "GitHub", "VS Code",
  "XAMPP", "Responsive Design", "Data Structures", "Algorithms", "Full Stack Development",
  "Mobile Application Development", "Software Engineering",
]

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">{"// Skills & Expertise"}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Skills & </span>
            <span className="text-primary">Learning Areas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A practical skill set focused on building responsive interfaces, backend workflows, and reliable web applications.
          </p>
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-xs font-mono text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground">Currently Using and Learning</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                whileHover={{ scale: 1.1, borderColor: "var(--primary)" }}
                className="px-4 py-2 rounded-full border border-border bg-card/50 text-sm text-muted-foreground hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
