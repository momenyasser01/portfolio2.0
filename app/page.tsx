import Contact from '@/components/contact'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-950 text-white font-sans">
      <div className="flex flex-col py-40">
        <Hero />
        <Skills />
      </div>

      <Projects />
      <Contact />
    </div>
  )
}
