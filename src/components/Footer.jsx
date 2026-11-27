import Container from './Container'

export default function Footer() {
  return (
    <footer className="pt-6 pb-8">
      <Container className="flex items-center justify-between font-mono text-[13px] text-muted">
        <span>© 2026 Santino Ruani</span>
        <a href="#inicio" className="transition-colors hover:text-fg">
          Volver arriba
        </a>
      </Container>
    </footer>
  )
}
