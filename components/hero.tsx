"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDown, Github, Linkedin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const roles = [
  "Full Stack Developer",
  "PHP Developer",
  "React Learner",
  "AI Enthusiast",
]

function TypingRoles() {
  const [displayText, setDisplayText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeoutId: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === currentRole) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1400)
    } else if (isDeleting && displayText === "") {
      timeoutId = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length)
      }, 250)
    } else {
      timeoutId = setTimeout(() => {
        const nextLength = isDeleting ? displayText.length - 1 : displayText.length + 1
        setDisplayText(currentRole.slice(0, nextLength))
      }, isDeleting ? 55 : 95)
    }

    return () => clearTimeout(timeoutId)
  }, [displayText, isDeleting, roleIndex])

  return (
    <span className="inline-flex items-center gap-1">
      <span className="gradient-text">{displayText}</span>
      <span className="inline-block h-6 w-[2px] bg-primary animate-pulse align-middle" />
    </span>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-24 lg:py-0 noise-overlay">
      {/* Premium Background Orbs */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <motion.div
        className="orb orb-cyan absolute top-20 left-10 w-72 h-72"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb orb-purple absolute bottom-20 right-10 w-96 h-96"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb orb-teal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Navigation - Top with Premium Styles */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-light flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm text-muted-foreground mb-8 pt-4 px-6 py-3 rounded-full mx-auto max-w-fit"
        >
          <a href="#about" className="underline-animate hover:text-primary transition-colors font-medium">ABOUT</a>
          <span className="text-border">|</span>
          <a href="#projects" className="underline-animate hover:text-primary transition-colors font-medium">PROJECTS</a>
          <span className="text-border">|</span>
          <a href="#skills" className="underline-animate hover:text-primary transition-colors font-medium">SKILLS</a>
          <span className="text-border">|</span>
          <a href="#learning" className="underline-animate hover:text-primary transition-colors font-medium">LEARNING</a>
          <span className="text-border">|</span>
          <a href="#contact" className="underline-animate hover:text-primary transition-colors font-medium">CONTACT</a>
          <span className="text-border">|</span>
          <a href="/resume" className="underline-animate hover:text-primary transition-colors font-medium">Resume</a>
        </motion.div>

        {/* Premium Badge - After Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <span className="badge-glow inline-flex items-center gap-2 px-5 py-2.5 text-sm">
            <Sparkles className="w-4 h-4" />
            Open to Internship & Entry-Level Opportunities 2026
            <span className="relative flex h-2 w-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
          </span>
        </motion.div>

        {/* Hero Content */}
        <div className="flex flex-col gap-14 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,380px)] lg:items-center">
          {/* Profile Photo with Premium Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full orb-cyan blur-3xl opacity-40 animate-pulse-glow" />
              <div className="absolute inset-0 rounded-full border border-cyan-400/30 shadow-[0_0_60px_rgba(34,211,238,0.35)]" />
              <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[340px] lg:w-[340px] rounded-full border-4 border-cyan-300/80 bg-[#050b0a] p-2 shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_0_80px_rgba(34,211,238,0.22)] hover-lift">
                <div className="absolute inset-3 rounded-full border border-cyan-400/30" />
                <Image
                  src="/placeholder-user.jpg"
                  alt="Umarr portrait"
                  fill
                  priority
                  className="rounded-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content with Premium Styles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            >
              <span className="text-foreground">Hi, I&apos;m </span>
              <span className="gradient-text glow-text-cyan">Umarr</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-xl md:text-2xl text-muted-foreground font-mono flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1">
                <span className="text-foreground/80">BCA Graduate |</span>
                <TypingRoles />
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed"
            >
              I build modern web applications, create intuitive user experiences, and continuously learn emerging technologies to become a better software developer.
            </motion.p>

            {/* Premium Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Button
                size="lg"
                className="btn-glow-premium px-8 py-6 text-lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <a href="https://drive.google.com/file/d/1npwlJpDMYRw9501V53wISobrb7a0IJ9-/view?pli=1" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="btn-outline-premium px-8 py-6 text-lg">
                  Download Resume
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="btn-outline-premium px-8 py-6 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links with Premium Styles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <a
                href="https://github.com/umarr48"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-light inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary hover-glow transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/umar-faruk-577b1034a/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-light inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary hover-glow transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="glass-light rounded-full p-2">
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </motion.div>
    </section>
  )
}