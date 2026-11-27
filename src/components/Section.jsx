import useInView from '../hooks/useInView'
import Reveal from './Reveal'
import Container from './Container'

/**
 * Sección de pantalla completa (alto visible debajo de la barra de navegación).
 * El título queda arriba y el contenido se centra en vertical en el espacio que sobra,
 * así hay el mismo aire entre el título y el contenido que entre el contenido y el
 * título de la sección siguiente.
 */
export default function Section({ id, title, children }) {
  const [lineRef, lineVisible] = useInView({ threshold: 0 })
  return (
    <section id={id} className="flex min-h-[calc(100svh-5rem)] flex-col pt-6 short:pt-4 tiny:pt-3">
      <Container className="flex flex-1 flex-col">
        <div
          ref={lineRef}
          className={`h-px origin-left bg-line transition-transform duration-1000 ease-out ${
            lineVisible ? 'scale-x-100' : 'scale-x-0'
          }`}
        />
        <Reveal
          as="h2"
          className="pt-10 text-[40px] leading-[1.07] font-semibold tracking-[-0.03em] md:text-[56px] short:pt-6 short:text-[44px] tiny:pt-4 tiny:text-[36px]"
        >
          {title}
        </Reveal>
        {/* contenido centrado, un poco más cerca del título que del título siguiente */}
        <div className="flex flex-1 flex-col justify-center-safe pt-10 pb-10 short:py-6 tiny:py-4">{children}</div>
      </Container>
    </section>
  )
}
