import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Workflow } from "@/components/workflow"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { CurrentlyLearning } from "@/components/currently-learning"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Background gradient orbs - will be overridden by individual sections */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="orb orb-cyan absolute top-1/4 -left-40 w-[600px] h-[600px] opacity-10" />
        <div className="orb orb-purple absolute bottom-1/4 -right-40 w-[500px] h-[500px] opacity-10" />
        <div className="orb orb-teal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Workflow />
        <Projects />
        <Skills />
        <CurrentlyLearning />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}