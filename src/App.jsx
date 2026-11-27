import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {/* Contactos + pie ocupan juntos la última pantalla */}
        <div className="flex min-h-[calc(100svh-5rem)] flex-col">
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}
