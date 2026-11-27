import { useEffect, useState } from 'react'
import useScrollProgress from '../hooks/useScrollProgress'

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
]

export default function Navbar() {
  const progress = useScrollProgress()
  const scrolled = progress > 0.005
  const [active, setActive] = useState('')

  // resalta el link de la sección que está en pantalla
  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line/60 bg-ink/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-[1248px] items-center justify-between px-6">
        <a href="#inicio" className="font-mono text-[15px] font-medium">
          Santino Ruani
        </a>
        <div className="flex items-center gap-9">
          <ul className="hidden items-center gap-9 text-[15px] md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`transition-colors hover:text-fg ${active === l.href ? 'text-fg' : 'text-muted'}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            className="rounded-full border border-line px-[18px] py-2.5 text-[15px] font-medium transition-colors hover:border-violet hover:bg-violet"
          >
            Contacto
          </a>
        </div>
      </nav>
      {/* barra de progreso de lectura */}
      <div
        className="absolute bottom-0 left-0 h-[2px] origin-left bg-violet"
        style={{ width: '100%', transform: `scaleX(${progress})` }}
      />
    </header>
  )
}
