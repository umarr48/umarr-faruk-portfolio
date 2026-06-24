"use client"

import { motion } from "framer-motion"
import { Code2, Brain, Rocket, Sparkles, Award, Users, Zap, Target } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "BCA Graduate",
    description: "Built a strong academic foundation in computing, software concepts, and problem solving.",
    color: "cyan"
  },
  {
    icon: Brain,
    title: "Full Stack Developer",
    description: "Focused on building complete web applications using practical and modern technologies.",
    color: "purple"
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description: "Enjoys breaking down real-world requirements into simple, working, user-friendly solutions.",
    color: "teal"
  },
  {
    icon: Sparkles,
    title: "Continuous Learner",
    description: "Consistently improving skills through hands-on projects, practice, and new technologies.",
    color: "pink"
  },
]

const stats = [
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Happy Clients", value: "5+" },
  { label: "Learning Hours", value: "1000+" },
]

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-cyan absolute top-0 -left-20 w-96 h-96 opacity-20" />
        <div className="orb orb-purple absolute bottom-0 -right-20 w-96 h-96 opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header with premium styles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm mb-3 inline-flex items-center gap-2 badge-premium"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {"// About Me"}
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">Professional </span>
            <span className="gradient-text">Profile</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto lg:mx-0">
            Get to know my background, skills, and what drives me as a developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio with premium styles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a <span className="gradient-text font-semibold">BCA graduate</span> and passionate Full Stack Developer who enjoys building practical web applications, learning new technologies, and turning ideas into useful digital experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My interest in software development grew through hands-on learning with <span className="text-primary font-medium glow-text-cyan">PHP</span>, <span className="text-primary font-medium glow-text-cyan">MySQL</span>, <span className="text-primary font-medium glow-text-cyan">JavaScript</span>, and web development tools. I enjoy building complete applications that solve real-world problems and provide a smooth user experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I value clean implementation, continuous improvement, and consistent practice. My goal is to grow as a software engineer while contributing to meaningful projects and collaborative teams.
              </p>
            </div>

            {/* Stats with premium styles */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass text-center p-4 rounded-xl hover:border-primary/30 transition-all duration-300 hover-lift"
                >
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlight cards with premium styles */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, description, color }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`card-premium p-6 rounded-2xl group hover:border-${color}-500/50`}
              >
                <div className={`w-12 h-12 rounded-xl bg-${color}-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 text-${color}-500`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground gradient-text">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                
                {/* Decorative line */}
                <div className={`mt-4 h-0.5 w-8 bg-${color}-500/30 rounded-full group-hover:w-full transition-all duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}