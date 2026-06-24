"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Github, Linkedin, CheckCircle2, Sparkles, Clock, Briefcase } from "lucide-react"
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

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    if (!serviceId || !templateId || !publicKey) {
      setError("EmailJS is not configured yet. Please add the service, template, and public key environment variables.")
      setShowToast(true)
      setIsSubmitting(false)
      return
    }
    
    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      )
      
      setIsSubmitted(true)
      setShowToast(true)
      formRef.current?.reset()
      
      setTimeout(() => setShowToast(false), 5000)
    } catch (err) {
      console.error("EmailJS Error:", err)
      setError("Failed to send message. Please try again or email me directly.")
      setShowToast(true)
      
      setTimeout(() => {
        setShowToast(false)
        setError(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-cyan absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 opacity-20" />
        <div className="orb orb-pink absolute bottom-0 right-0 w-80 h-80 opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header with premium styles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm mb-3 inline-flex items-center gap-2 badge-premium"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {"// Get In Touch"}
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Let's Connect</span>
            <span className="gradient-text"> Professionally</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            I'm open to internship opportunities, entry-level roles, collaborations, and project discussions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info with premium styles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl border border-border/50">
              <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="gradient-text">Contact Information</span>
              </h3>
              <div className="space-y-6">
                {[
                  { icon: Github, label: "GitHub", value: "github.com/umarr48", href: "https://github.com/umarr48", color: "cyan" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/umar-faruk-577b1034a", href: "https://www.linkedin.com/in/umar-faruk-577b1034a/", color: "purple" },
                  { icon: Mail, label: "Email", value: "farukumarfaruk161@gmail.com", href: "mailto:farukumarfaruk161@gmail.com", color: "pink" },
                ].map(({ icon: Icon, label, value, href, color }) => (
                  <motion.a 
                    key={label} 
                    href={href} 
                    target={href.startsWith("http") ? "_blank" : undefined} 
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined} 
                    className="flex items-center gap-4 group p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 hover-lift"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-${color}-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 text-${color}-500`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                        {value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick response time with premium styles */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 animate-breathe">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                    Quick Response
                    <span className="text-xs text-primary font-mono badge-premium px-2 py-0.5">~2-4 hours</span>
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I usually respond within a few hours. Feel free to reach out for internships, entry-level roles, collaborations, or project discussions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Availability with premium styles */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-cyan p-6 rounded-2xl border border-primary/30 bg-primary/5 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                </span>
                <span className="font-semibold text-foreground flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  Currently Available
                </span>
                <span className="text-xs text-primary font-mono bg-primary/10 px-2 py-0.5 rounded-full">Open to Work</span>
              </div>
              <p className="text-sm text-muted-foreground pl-6">
                I'm open to internship and entry-level opportunities in full stack development and web technologies.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact form with premium styles */}
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
                <div className="glass text-center p-12 rounded-2xl border border-primary/30 max-w-md mx-auto">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 animate-float">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 gradient-text">Message Sent!</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span>I appreciate your interest</span>
                    <Sparkles className="w-3 h-3 text-primary" />
                  </div>
                </div>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-border/50 space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium flex items-center gap-2">
                      <span className="text-primary">*</span> Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-card/50 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
                      <span className="text-primary">*</span> Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="bg-card/50 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium flex items-center gap-2">
                    <span className="text-primary">*</span> Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the opportunity or project..."
                    rows={6}
                    required
                    className="bg-card/50 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="btn-glow-premium w-full text-lg py-6"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-3">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full inline-block"
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-3">
                      <Send className="w-4 h-4" />
                      Send Message
                      <Sparkles className="w-4 h-4" />
                    </span>
                  )}
                </Button>

                {showToast && error && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-destructive bg-destructive/10 p-3 rounded-xl border border-destructive/20"
                    role="alert"
                  >
                    {error}
                  </motion.p>
                )}

                {showToast && isSubmitted && !error && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-primary bg-primary/10 p-3 rounded-xl border border-primary/20 flex items-center gap-2"
                    role="status"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Your message was sent successfully.
                  </motion.p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}