"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for work
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-foreground">{"Hi, I'm "}</span>
          <span className="text-primary glow-text">Umarr Faruk</span>
        </motion.h1>

        {/* Subtitle with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">
            <span className="text-primary">{"<"}</span>
            Final Year BCA Student
            <span className="text-primary">{" />"}</span>
            <span className="mx-3 text-border">|</span>
            <span className="text-primary">{"<"}</span>
            Full Stack Developer
            <span className="text-primary">{" />"}</span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I am a passionate software developer focused on building modern web applications 
          using PHP, MySQL, JavaScript, and emerging technologies. I enjoy solving real-world 
          problems and continuously improving my development skills.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            className="glow-cyan bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:border-primary hover:text-primary px-8 py-6 text-lg"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume.pdf';
              link.target = '_blank';
              link.click();
            }}
          >
            Download Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:border-primary hover:text-primary px-8 py-6 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-4 sm:gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/umarr48", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/umar-faruk-577b1034a", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:glow-cyan active:scale-95 touch-manipulation"
              aria-label={label}
            >
              <Icon className="w-6 h-6 sm:w-5 sm:h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.2 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  )
}
