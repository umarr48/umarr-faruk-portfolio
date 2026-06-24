"use client"

import { motion } from "framer-motion"
import { 
  Sparkles, 
  Rocket, 
  Brain, 
  Zap, 
  Code2, 
  GraduationCap,
  ArrowRight,
  Cpu,
  BookOpen
} from "lucide-react"

const learningTopics = [
  {
    name: "Next.js",
    icon: Code2,
    description: "Building modern React applications with server-side rendering and routing.",
    color: "cyan",
    progress: 75
  },
  {
    name: "TypeScript",
    icon: Cpu,
    description: "Adding type safety to JavaScript for scalable, maintainable applications.",
    color: "purple",
    progress: 70
  },
  {
    name: "Mobile App Development",
    icon: Rocket,
    description: "Creating cross-platform mobile experiences with modern frameworks.",
    color: "teal",
    progress: 60
  },
  {
    name: "Software Engineering",
    icon: Brain,
    description: "Mastering design patterns, architectures, and engineering best practices.",
    color: "pink",
    progress: 65
  },
]

export function CurrentlyLearning() {
  return (
    <section id="currently-learning" className="py-32 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-cyan absolute top-0 right-0 w-96 h-96 opacity-15" />
        <div className="orb orb-purple absolute bottom-0 left-0 w-80 h-80 opacity-10" />
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
            {"// Current Focus"}
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Currently </span>
            <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Areas I am actively exploring to strengthen my development workflow and expand my ability to build modern products.
          </p>
        </motion.div>

        {/* Learning Cards with premium styles */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {learningTopics.map((topic, index) => (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className={`card-premium p-6 rounded-2xl h-full border border-border/50 hover:border-${topic.color}-500/50 transition-all duration-300`}>
                {/* Header with Icon and Number */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${topic.color}-500/10 text-${topic.color}-500 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]`}>
                    <topic.icon className="h-6 w-6" />
                  </div>
                  <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full border border-${topic.color}-500/20 bg-${topic.color}-500/5 font-mono text-xs font-bold text-${topic.color}-500`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {topic.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {topic.description}
                </p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground font-mono">Progress</span>
                    <span className={`text-xs font-mono text-${topic.color}-500`}>{topic.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary/50 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r from-${topic.color}-500 to-${topic.color}-400 shadow-[0_0_20px_rgba(45,212,191,0.2)]`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${topic.progress}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: 0.3 + index * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>

                {/* Decorative Line */}
                <div className={`mt-4 h-0.5 w-8 bg-${topic.color}-500/30 rounded-full group-hover:w-full transition-all duration-500`} />

                {/* Learning Indicator */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${topic.color}-500 opacity-75`} />
                    <span className={`relative inline-flex rounded-full h-2 w-2 bg-${topic.color}-500`} />
                  </span>
                  <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                    Active Learning
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section - Learning Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <div className="glass p-8 rounded-2xl border border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">4</p>
                <p className="text-xs text-muted-foreground mt-1">Active Topics</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">68%</p>
                <p className="text-xs text-muted-foreground mt-1">Avg. Progress</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">∞</p>
                <p className="text-xs text-muted-foreground mt-1">Learning Mindset</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">🚀</p>
                <p className="text-xs text-muted-foreground mt-1">Growing Daily</p>
              </div>
            </div>
          </div>

          {/* Motivational Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-center"
          >
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-primary/30" />
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                "Learning is a lifelong journey"
                <Sparkles className="w-4 h-4 text-primary" />
              </span>
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-primary/30" />
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}