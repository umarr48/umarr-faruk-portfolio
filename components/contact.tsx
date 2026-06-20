"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Clock, CheckCircle2, XCircle, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import emailjs from "@emailjs/browser"

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      
      setIsSubmitted(true)
      setShowToast(true)
      formRef.current?.reset()
      
      // Hide toast after 5 seconds
      setTimeout(() => setShowToast(false), 5000)
    } catch (err) {
      console.error("EmailJS Error:", err)
      setError("Failed to send message. Please try again or email me directly.")
      setShowToast(true)
      
      // Hide error toast after 5 seconds
      setTimeout(() => {
        setShowToast(false)
        setError(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">{"// Get In Touch"}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{"Let's Build "}</span>
            <span className="text-primary">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to chat? {"I'm"} always open to discussing new opportunities and creative ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Connect With Me</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "farukumarfaruk161@gmail.com", href: "mailto:farukumarfaruk161@gmail.com" },
                  { icon: Github, label: "GitHub", value: "github.com/umarr48", href: "https://github.com/umarr48" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/umar-faruk", href: "https://linkedin.com/in/umar-faruk-577b1034a" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a 
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel={label !== "Email" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{label}</p>
                      <p className="text-foreground font-medium">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick response time */}
            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">
                    I usually respond within a few hours. Feel free to contact me for collaborations, freelance work, or project discussions.
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                </span>
                <span className="font-semibold text-foreground">Currently Available</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {"I'm"} open to freelance projects and full-time opportunities in AI/ML and web development.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex items-center justify-center"
              >
                <div className="text-center p-8 rounded-xl border border-primary/30 bg-primary/5">
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. {"I'll"} get back to you as soon as possible.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                    className="bg-card border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full glow-cyan bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full inline-block"
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
