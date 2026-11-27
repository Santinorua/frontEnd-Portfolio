import { useRef } from 'react'
import Reveal from './Reveal'
import Container from './Container'
import { GithubSmall } from './SkillIcons'
import useScrollProgress from '../hooks/useScrollProgress'

const EMAIL = 'santinoruani@gmail.com'

export default function Contact() {
  const ref = useRef(null)
  const progress = useScrollProgress(ref)

  return (
    <section id="contacto" ref={ref} className="flex flex-1 flex-col justify-center pt-16 pb-10">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[32px] border border-line bg-card p-8 md:p-16 short:p-12 tiny:p-10">
          {/* resplandor violeta que se mueve con el scroll */}
          <div
            className="pointer-events-none absolute -top-24 h-64 w-64 rounded-full bg-violet/30 blur-[80px]"
            style={{ left: `${-10 + progress * 70}%` }}
          />
          <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="text-6xl leading-none font-semibold tracking-[-0.04em] md:text-[80px] md:leading-[84px] short:text-[68px] short:leading-[72px] tiny:text-[56px] tiny:leading-[60px]">
                Contacto
              </h2>
              <p className="max-w-[460px] text-lg leading-[30px] text-muted md:text-xl">
                Escribime por propuestas o preguntas que tengas para hacerme
              </p>
            </div>
            <div className="flex flex-col items-start gap-5 md:items-end">
              <a
                href={`mailto:${EMAIL}`}
                className="border-b-2 border-violet pb-1.5 font-mono text-lg font-medium transition-colors hover:text-violet-soft md:text-[22px]"
              >
                {EMAIL}
              </a>
              <div className="flex gap-2.5">
                <a
                  href="https://github.com/Santinorua"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-line px-[18px] py-2.5 text-[15px] font-medium transition-colors hover:border-muted"
                >
                  <GithubSmall className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line px-[18px] py-2.5 text-[15px] font-medium transition-colors hover:border-muted"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
