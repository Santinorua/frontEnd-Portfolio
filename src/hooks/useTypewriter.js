import { useEffect, useState } from 'react'

/**
 * Escribe cada frase letra por letra, la borra letra por letra y pasa a la siguiente, en loop.
 */
export default function useTypewriter(
  phrases,
  { typeSpeed = 55, deleteSpeed = 28, pauseAfterType = 1800, pauseAfterDelete = 450, disabled = false } = {},
) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (disabled) return
    const phrase = phrases[index]
    let delay
    let next

    if (!deleting && text === phrase) {
      delay = pauseAfterType
      next = () => setDeleting(true)
    } else if (deleting && text === '') {
      delay = pauseAfterDelete
      next = () => {
        setDeleting(false)
        setIndex((i) => (i + 1) % phrases.length)
      }
    } else if (deleting) {
      delay = deleteSpeed
      next = () => setText(phrase.slice(0, text.length - 1))
    } else {
      // pequeña variación para que parezca tipeado a mano
      delay = typeSpeed + Math.random() * 40
      next = () => setText(phrase.slice(0, text.length + 1))
    }

    const id = setTimeout(next, delay)
    return () => clearTimeout(id)
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete, disabled])

  return disabled ? phrases[0] : text
}
