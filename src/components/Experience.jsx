import { useRef } from 'react'
import Section from './Section'
import Reveal from './Reveal'
import experience from '../data/experience'
import useScrollProgress from '../hooks/useScrollProgress'

export default function Experience() {
  const listRef = useRef(null)
  const progress = useScrollProgress(listRef)

  return (
    <Section id="experiencia" title="Experiencia">
      <div ref={listRef} className="relative">
        {/* línea de tiempo que se va dibujando con el scroll */}
        <div className="absolute top-4 bottom-4 left-0 hidden w-px bg-line/50 md:block">
          <div
            className="h-full w-full origin-top bg-violet"
            style={{ transform: `scaleY(${Math.min(1, progress * 1.25)})` }}
          />
        </div>

        <ol className="space-y-2 md:pl-6 short:space-y-1">
          {experience.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 120}
              className={`grid gap-2 rounded-[20px] border p-6 md:grid-cols-[160px_1fr] md:gap-10 md:p-8 short:py-5 tiny:py-3.5 ${
                item.highlight ? 'border-violet bg-card' : 'border-transparent opacity-85'
              }`}
            >
              <span className={`font-mono text-[13px] leading-7 font-medium ${item.highlight ? 'text-gold' : 'text-muted'}`}>
                {item.period}
              </span>
              <div>
                <h3 className="text-[22px] leading-7 font-semibold short:text-xl tiny:text-lg tiny:leading-6">{item.title}</h3>
                <p className={`mt-0.5 text-[17px] leading-6 short:text-[15px] tiny:leading-5 ${item.highlight ? 'text-violet-soft' : 'text-muted'}`}>
                  {item.place}
                </p>
                <p className="mt-3 text-base leading-[25px] text-muted short:mt-2 short:text-[15px] short:leading-[23px] tiny:mt-1.5 tiny:leading-[21px]">{item.text}</p>
                {item.chips && (
                  <ul className="mt-3 flex flex-wrap gap-2 short:mt-2.5">
                    {item.chips.map((c) => (
                      <li key={c} className="rounded-full bg-violet-chip px-3 py-1.5 font-mono text-xs font-medium text-violet-soft">
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  )
}
