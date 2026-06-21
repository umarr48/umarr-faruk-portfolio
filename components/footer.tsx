"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/umarr48", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/umar-faruk-577b1034a/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:farukumarfaruk161@gmail.com", label: "Email" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#" className="text-2xl font-bold text-primary glow-text inline-block mb-2">
              U<span className="text-foreground">.</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © 2026 Umarr. All Rights Reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Designed & Developed by Umarr.
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 sm:gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-2 text-muted-foreground hover:text-primary transition-colors active:scale-95 touch-manipulation"
                aria-label={label}
              >
                <Icon className="w-6 h-6 sm:w-5 sm:h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
