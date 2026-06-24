"use client"

import { motion } from "framer-motion"
import { Sparkles, Code2, Database, Terminal, Wrench, Cpu } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "cyan",
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
    icon: Database,
    color: "teal",
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
    icon: Terminal,
    color: "purple",
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
    icon: Wrench,
    color: "pink",
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
  "XAMPP", "Responsive Design", "Data Structures", "Algorithms", 
  "Full Stack Development", "Mobile Application Development", 
  "Software Engineering", "React", "Next.js", "TypeScript",
  "Tailwind CSS", "Framer Motion", "REST APIs", "OOP",
]

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-purple absolute top-0 right-0 w-96 h-96 opacity-20" />
        <div className="orb orb-cyan absolute bottom-0 left-0 w-80 h-80 opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent" />
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
            {"// Skills & Expertise"}
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Skills & </span>
            <span className="gradient-text">Learning Areas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A practical skill set focused on building responsive interfaces, backend workflows, and reliable web applications.
          </p>
        </motion.div>

        {/* Skill bars with premium styles */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover-lift"
            >
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-${category.color}-500/10 flex items-center justify-center`}>
                  <category.icon className={`w-5 h-5 text-${category.color}-500`} />
                </div>
                <span className="gradient-text">{category.title}</span>
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-primary glow-text-cyan">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-400 shadow-[0_0_20px_rgba(45,212,191,0.2)]`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: categoryIndex * 0.1 + skillIndex * 0.08,
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

        {/* Technology cloud with premium styles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="text-center mb-8">
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-foreground flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="gradient-text">Currently Using & Learning</span>
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.h3>
          </div>
          
          <div className="glass p-8 rounded-2xl border border-border/30">
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.02 }}
                  whileHover={{ 
                    scale: 1.1, 
                    borderColor: "var(--primary)",
                    boxShadow: "0 0 30px rgba(45,212,191,0.2)"
                  }}
                  className="px-4 py-2 rounded-full border border-border/50 bg-card/30 text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default glass-light"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                    {tech}
                  </span>
                </motion.span>
              ))}
            </div>
          </div>

          {/* Decorative note */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-muted-foreground mt-6 flex items-center justify-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
            Continuously learning and expanding my skill set
            <span className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}