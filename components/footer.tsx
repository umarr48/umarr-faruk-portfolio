"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Sparkles, Heart, Code2 } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/umarr48", label: "GitHub", color: "cyan" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/umar-faruk-577b1034a/", label: "LinkedIn", color: "purple" },
  { icon: Mail, href: "mailto:farukumarfaruk161@gmail.com", label: "Email", color: "pink" },
]

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-border/30 bg-background/50 backdrop-blur-sm">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-cyan absolute -bottom-40 -left-20 w-80 h-80 opacity-10" />
        <div className="orb orb-purple absolute -top-40 -right-20 w-80 h-80 opacity-10" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <a 
              href="#" 
              className="text-3xl font-bold inline-flex items-center gap-2 group"
            >
              <span className="gradient-text">U</span>
              <span className="text-foreground">.</span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-primary"
              >
                <Sparkles className="w-4 h-4" />
              </motion.span>
            </a>
            
            <p className="text-sm text-muted-foreground mt-3 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Building modern web applications and creating intuitive user experiences with a passion for continuous learning.
            </p>
            
            {/* Made with love */}
            <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-xs text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 animate-pulse" />
              <span>and</span>
              <Code2 className="w-3 h-3 text-primary" />
              <span>by Umarr</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1 h-4 bg-primary rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:pl-2 inline-block underline-animate"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1 h-4 bg-primary rounded-full" />
              Connect With Me
            </h4>
            
            {/* Social Links with Premium Styles */}
            <div className="flex justify-center md:justify-start gap-3 mb-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative group p-3 rounded-xl glass-light border border-border/30 hover:border-${color}-500/50 transition-all duration-300`}
                  aria-label={label}
                >
                  <Icon className={`w-5 h-5 text-muted-foreground group-hover:text-${color}-500 transition-all duration-300`} />
                  
                  {/* Glow Effect on Hover */}
                  <div className={`absolute inset-0 rounded-xl bg-${color}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10`} />
                  
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span>Available for opportunities</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border/30 py-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-muted-foreground">
              © {currentYear} Umarr. All Rights Reserved.
            </p>

            {/* Built with */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>Built with</span>
              <div className="flex items-center gap-1">
                <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-[10px]">Next.js</span>
                <span className="text-border">•</span>
                <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-[10px]">React</span>
                <span className="text-border">•</span>
                <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-[10px]">Tailwind</span>
              </div>
            </div>

            {/* Version */}
            <p className="text-[10px] text-muted-foreground font-mono">
              v2.0.0
            </p>
          </div>

          {/* Bottom decorative line */}
          <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </motion.div>
      </div>
    </footer>
  )
}