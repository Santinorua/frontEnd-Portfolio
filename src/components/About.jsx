import { useEffect, useState } from 'react'
import Section from './Section'
import Reveal from './Reveal'
import useInView from '../hooks/useInView'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'
import projects from '../data/projects'
import skills from '../data/skills'

/** Número que cuenta desde 0 cada vez que la tarjeta aparece en pantalla. */
function CountUp({ value, suffix = '', pad = 2 }) {
  const [ref, visible] = useInView()
  const [n, setN] = useState(0)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (!visible || reduced) return
    const duration = 1100
    const start = performance.now()
    let frame
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setN(Math.round(eased * value))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible, value, reduced])

  return (
    <span ref={ref}>
      {String(reduced ? value : n).padStart(pad, '0')}
      {suffix}
    </span>
  )
}

const stats = [
  { value: projects.length, label: 'Proyectos' },
  { value: 5, suffix: '°', pad: 1, label: 'Año de secundaria' },
  { value: skills.length, label: 'Tecnologías con las que trabajo' },
  { value: 38, label: 'Repositorios en GitHub' },
]

export default function About() {
  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="grid gap-6 short:gap-4 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-5 rounded-3xl border border-line bg-card p-8 md:p-10 short:gap-4 short:p-8 tiny:gap-3 tiny:p-6">
          <h3 className="text-[28px] leading-[34px] font-medium tracking-[-0.01em] short:text-2xl tiny:text-[22px]">Hola, soy Santino.</h3>
          <p className="text-lg leading-[29px] text-muted short:text-base short:leading-[26px] tiny:text-[15px] tiny:leading-6">
            Tengo 18 años, estudio en ORT, y el año que viene empiezo Ingeniería informática en el ITBA. A lo largo de
            estos últimos años en la secundaria estuve haciendo proyectos personales, además de los proyectos grupales
            que nos pone el colegio.
          </p>
          <p className="text-lg leading-[29px] text-muted short:text-base short:leading-[26px] tiny:text-[15px] tiny:leading-6">
            Datos curiosos: Tengo una gata, toco el piano (8 años de experiencia) y canto.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-6 short:gap-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={120 + i * 110}
              className="flex min-h-[168px] flex-col justify-end gap-2 rounded-[20px] border border-line bg-card p-7 transition-colors hover:border-violet short:min-h-[136px] short:p-6 tiny:min-h-[112px] tiny:gap-1 tiny:p-5"
            >
              <span className="text-5xl leading-[52px] font-bold tracking-[-0.03em] short:text-[42px] short:leading-[46px] tiny:text-4xl tiny:leading-10">
                <CountUp value={s.value} suffix={s.suffix} pad={s.pad} />
              </span>
              <span className="text-[15px] leading-[21px] text-muted">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
