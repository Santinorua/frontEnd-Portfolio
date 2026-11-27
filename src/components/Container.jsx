/** Ancho de contenido del diseño: 1200px (márgenes de 120px en 1440). */
export default function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-[1248px] px-6 ${className}`}>{children}</div>
}
