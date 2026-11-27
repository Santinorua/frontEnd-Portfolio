import { useEffect, useRef, useState } from 'react'
import Section from './Section'
import Reveal from './Reveal'
import { GithubSmall } from './SkillIcons'
import projects from '../data/projects'

/* ------------------------------------------------------------------
 * Componente de Proyectos.
 * Los datos NO se escriben acá: se cargan desde src/data/projects.js
 * ------------------------------------------------------------------ */

function SkillChips({ skills }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((s) => (
        <li key={s} className="rounded-full bg-violet-chip px-3 py-1.5 font-mono text-xs font-medium text-violet-soft">
          {s}
        </li>
      ))}
    </ul>
  )
}

/** Consola de ejemplo que se muestra cuando un proyecto no tiene imagen. */
function PlaceholderImage({ title }) {
  return (
    <div className="flex h-full items-end justify-center bg-gradient-to-b from-[rgba(98,0,137,0.35)] to-card-hover px-6 pt-10">
      <div className="h-full w-full max-w-[560px] overflow-hidden rounded-t-2xl border border-b-0 border-line bg-ink">
        <div className="flex gap-1.5 py-3.5 pl-4">
          <span className="h-2 w-2 rounded-full bg-violet" />
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="h-2 w-2 rounded-full bg-line" />
        </div>
        <div className="flex flex-col gap-3.5 pt-7 pl-7">
          <p className="flex gap-2.5 truncate font-mono text-xl">
            <span className="font-bold text-violet-soft">&gt;</span>
            <span>{title}</span>
          </p>
          <div className="h-2.5 w-[68%] rounded-[5px] bg-line" />
          <div className="h-2.5 w-[54%] rounded-[5px] bg-line" />
          <div className="h-2.5 w-[61%] rounded-[5px] bg-line" />
        </div>
      </div>
    </div>
  )
}

/** Rectángulo grande con el proyecto seleccionado. */
export function ProjectPreview({ project }) {
  const { title, description, skills, image, demo, code } = project
  const scrollRef = useRef(null)
  const thumb = useCustomScrollbar(scrollRef)
  return (
    // `key` en el padre hace que se vuelva a montar y se anime al cambiar de proyecto
    // Alto fijo: si el contenido no entra, aparece un scroll adentro del rectángulo
    <article className="relative h-[520px] animate-[project-in_250ms_ease-out] overflow-hidden rounded-3xl border border-line bg-card sm:h-[600px] lg:h-full">
      <div ref={scrollRef} className="no-scrollbar h-full overflow-y-auto">
        <div>
          <div className="h-[220px] w-full overflow-hidden sm:h-[340px] lg:h-[calc((100svh-var(--sec-chrome))*0.61)] lg:max-h-[340px] lg:min-h-[150px]">
            {image ? (
              // object-contain: la imagen entra completa sin recortarse; el espacio sobrante queda en negro
              <img src={image} alt={`Imagen de ${title}`} className="h-full w-full bg-black object-contain" />
            ) : (
              <PlaceholderImage title={title} />
            )}
          </div>
          <div className="flex flex-col gap-3.5 px-6 pt-8 pb-9 sm:px-9 short:gap-3 short:pt-6 short:pb-7 tiny:gap-2.5 tiny:pt-5 tiny:pb-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-[32px] leading-[38px] font-semibold tracking-[-0.02em] short:text-[28px] short:leading-[34px] tiny:text-2xl">
                {title}
              </h3>
              <div className="flex gap-2">
                {demo && (
                  <a
                    href={demo}
                    className="rounded-full bg-violet px-4 py-[9px] text-sm font-medium transition hover:brightness-125"
                  >
                    Ver demo
                  </a>
                )}
                {code && (
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-line py-[9px] pr-4 pl-3.5 text-sm font-medium transition-colors hover:border-muted"
                  >
                    <GithubSmall className="h-4 w-4" /> Código
                  </a>
                )}
              </div>
            </div>
            <p className="text-base leading-[25px] text-muted">{description}</p>
            <SkillChips skills={skills} />
          </div>
        </div>
      </div>
      <ScrollBar thumb={thumb} />
    </article>
  )
}

/** Item del selector de la derecha. */
export function ProjectListItem({ project, selected, onSelect }) {
  return (
    <li>
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={selected}
        className={`group relative flex h-[104px] w-full short:h-[88px] tiny:h-[76px] flex-col justify-center gap-1.5 border-b border-line pr-6 pl-7 text-left transition-colors duration-200 ${
          selected ? 'bg-violet-active' : 'hover:bg-card-hover'
        }`}
      >
        <span
          className={`absolute inset-y-0 left-0 w-[3px] bg-violet transition-transform duration-300 ${
            selected ? 'scale-y-100' : 'scale-y-0'
          }`}
        />
        <span
          className={`block truncate text-xl leading-[26px] font-semibold transition-colors ${
            selected ? 'text-fg' : 'text-muted group-hover:text-fg'
          }`}
        >
          {project.title}
        </span>
        <span className={`block truncate font-mono text-xs ${selected ? 'text-violet-soft' : 'text-muted opacity-70'}`}>
          {project.skills.join(', ')}
        </span>
      </button>
    </li>
  )
}

/** Barra de scroll fina y violeta, con 40px de margen arriba y abajo. */
function useCustomScrollbar(scrollRef) {
  const [thumb, setThumb] = useState({ size: 0, offset: 0, visible: false })

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const INSET = 40
    const update = () => {
      const track = el.clientHeight - INSET * 2
      const ratio = el.clientHeight / el.scrollHeight
      const size = Math.max(32, track * ratio)
      const max = el.scrollHeight - el.clientHeight
      const offset = max > 0 ? (el.scrollTop / max) * (track - size) : 0
      setThumb({ size, offset, visible: ratio < 1 })
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    // también cuando cambia el contenido (por ejemplo, al cargar una imagen)
    if (el.firstElementChild) ro.observe(el.firstElementChild)
    return () => {
      el.removeEventListener('scroll', update)
      ro.disconnect()
    }
  }, [scrollRef])

  return thumb
}

/** Riel gris + indicador violeta, a 40px del borde de arriba y de abajo. */
function ScrollBar({ thumb }) {
  if (!thumb.visible) return null
  return (
    <div className="pointer-events-none absolute top-10 right-[7px] bottom-10 w-1 rounded-[2px] bg-line">
      <div
        className="absolute left-0 w-full rounded-[2px] bg-violet"
        style={{ height: thumb.size, transform: `translateY(${thumb.offset}px)` }}
      />
    </div>
  )
}

export default function Projects({ items = projects }) {
  const [selected, setSelected] = useState(0)
  const listRef = useRef(null)
  const thumb = useCustomScrollbar(listRef)
  const current = items[selected]

  if (!current) return null

  return (
    <Section id="proyectos" title="Proyectos">
      {/* alto de diseño 554px, pero nunca más alto que lo que entra en la pantalla */}
      <div className="grid gap-6 lg:h-[min(554px,max(320px,calc(100svh-var(--sec-chrome))))] lg:grid-cols-[1fr_376px] lg:grid-rows-[minmax(0,1fr)]">
        <Reveal className="h-full min-h-0">
          <ProjectPreview key={selected} project={current} />
        </Reveal>

        <Reveal
          delay={150}
          className="relative h-[420px] overflow-hidden rounded-3xl border border-line bg-card lg:h-full"
        >
          <ul ref={listRef} className="no-scrollbar h-full overflow-y-auto">
            {items.map((p, i) => (
              <ProjectListItem key={p.title} project={p} selected={i === selected} onSelect={() => setSelected(i)} />
            ))}
          </ul>
          <ScrollBar thumb={thumb} />
        </Reveal>
      </div>
    </Section>
  )
}
