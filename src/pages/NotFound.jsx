import { ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-navy-950 pt-32 pb-24">
      <Container className="text-center">
        <p className="text-6xl font-semibold tracking-tight text-gold-300">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-navy-200">The page you’re looking for doesn’t exist or has moved.</p>
        <Button to="/" variant="outlineLight" className="mt-10">
          <ArrowLeft className="size-4" aria-hidden /> Back to Home
        </Button>
      </Container>
    </section>
  )
}
