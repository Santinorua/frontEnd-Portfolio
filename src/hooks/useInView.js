import { useEffect, useRef, useState } from 'react'

/**
 * Devuelve [ref, visible]. `visible` es true mientras el elemento está en pantalla,
 * así la animación se repite cada vez que volvés a llegar a él.
 * Con `once: true` queda visible para siempre después de la primera vez.
 */
export default function useInView({ threshold = 0.15, rootMargin = '0px 0px -8% 0px', once = false } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
        if (once && entry.isIntersecting) observer.disconnect()
      },
      { threshold, rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, visible]
}
