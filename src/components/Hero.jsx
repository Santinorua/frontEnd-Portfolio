import useTypewriter from '../hooks/useTypewriter'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'
import useScrollY from '../hooks/useScrollY'

const PHRASES = [
  'Me llamo Santino Ruani y estudio ingeniería informática',
  "I'm Santino Ruani and I study Software Engineering",
]

export default function Hero() {
  const reduced = usePrefersReducedMotion()
  const text = useTypewriter(PHRASES, { disabled: reduced })
  const scrollY = useScrollY()

  // Al bajar, la consola se aleja (sube, se achica y pierde opacidad).
  // Arriba de todo no lleva ninguna transformación, así el texto se ve nítido.
  const away = reduced ? 0 : Math.min(1, scrollY / 600)
  const consoleStyle =
    away > 0 ? { transform: `translateY(${away * -30}px) scale(${1 - away * 0.06})`, opacity: 1 - away * 0.6 } : undefined

  return (
    <section id="inicio" className="flex min-h-svh flex-col justify-center pt-28 pb-16">
      <div className="mx-auto w-full max-w-[1008px] px-6">
        <div
          style={consoleStyle}
          className="overflow-hidden rounded-3xl border border-line bg-card shadow-[0_40px_120px_-20px_rgba(98,0,137,0.28)]"
        >
          <div className="flex items-center gap-6 border-b border-line px-6 py-[18px]">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-violet" />
              <span className="h-3 w-3 rounded-full bg-gold" />
              <span className="h-3 w-3 rounded-full bg-line" />
            </div>
            <span className="font-mono text-[13px] text-muted">santino.txt</span>
          </div>
          <div className="min-h-[200px] px-6 pt-10 pb-12 font-mono text-[26px] leading-[1.45] tracking-[-0.02em] sm:px-12 sm:pt-[52px] sm:pb-[60px] md:min-h-[240px] md:text-[36px] lg:text-[44px] lg:leading-[64px]">
            <p aria-label={PHRASES[0]} className="flex cursor-default gap-4 select-none sm:gap-6">
              <span className="font-bold text-violet-soft" aria-hidden="true">
                &gt;
              </span>
              <span aria-hidden="true">{text}</span>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[560px] text-lg leading-[30px] text-muted md:text-xl">
            Estudiante de Ingeniería Informática. Me gusta la música, las carreras y el ajedrez.
          </p>
          <div className="flex shrink-0 gap-3">
            <a
              href="#proyectos"
              className="rounded-full bg-violet px-6 py-3.5 text-base font-medium transition hover:brightness-125"
            >
              Ver proyectos
            </a>
            <a
              href="/cv.pdf"
              download
              className="rounded-full border border-line px-6 py-3.5 text-base font-medium transition-colors hover:border-muted"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
