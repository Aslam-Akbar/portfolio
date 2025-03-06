import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import ParticleBackground from "@/components/particle-background"
// Import the Header component
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  )
}

