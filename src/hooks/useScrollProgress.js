import { useEffect, useState } from 'react'

/**
 * Progreso de scroll (0 → 1).
 * - Sin ref: progreso de toda la página.
 * - Con ref: cuánto avanzó el elemento a través de la pantalla
 *   (0 = su borde superior toca el fondo de la pantalla, 1 = su borde inferior pasa el centro).
 */
export default function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const vh = window.innerHeight
      let value
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect()
        const total = rect.height + vh / 2
        value = (vh - rect.top) / total
      } else {
        const max = document.documentElement.scrollHeight - vh
        value = max > 0 ? window.scrollY / max : 0
      }
      setProgress(Math.min(1, Math.max(0, value)))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ref])

  return progress
}
