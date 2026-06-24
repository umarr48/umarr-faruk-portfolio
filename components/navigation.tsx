"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Learning", href: "#currently-learning" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="inline-flex items-center gap-3 text-2xl font-bold text-primary glow-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Home"
            >
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 shadow-[0_0_20px_rgba(45,212,191,0.25)]">
                <Image src="/icon.svg" alt="Umarr logo" width={28} height={28} priority />
              </span>
              <span className="hidden sm:inline">
                U<span className="text-foreground">.</span>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navItems.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollToSection(href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm uppercase tracking-wider"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Resume Button - Desktop */}
            <div className="hidden md:block">
              <a
                href="https://drive.google.com/file/d/1npwlJpDMYRw9501V53wISobrb7a0IJ9-/view?pli=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:glow-cyan transition-all duration-300"
                >
                  Resume
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl pt-24 px-6">
              <ul className="flex flex-col items-center gap-8">
                {navItems.map(({ label, href }, index) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(href)}
                      className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {label}
                    </button>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href="https://drive.google.com/file/d/1npwlJpDMYRw9501V53wISobrb7a0IJ9-/view?pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="bg-primary text-primary-foreground px-8 py-6 text-lg hover:glow-cyan active:scale-95 touch-manipulation transition-all duration-300"
                    >
                      Resume
                    </Button>
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
