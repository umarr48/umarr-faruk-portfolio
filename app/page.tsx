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
    <main className="relative overflow-hidden noise-overlay">
      <Navigation />
      <Hero />
      <About />
      <Workflow />
      <Projects />
      <Skills />
      <CurrentlyLearning />
      <Contact />
      <Footer />
    </main>
  )
}
