import { ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'

// Temporary placeholder for pages that haven't been built yet.
export default function ComingSoon({ title }) {
  return (
    <section className="flex min-h-[80vh] items-center bg-navy-950 pt-32 pb-24">
      <Container className="text-center">
        <p className="text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">Coming soon</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-md text-navy-200">This page is being redesigned. Please check back shortly.</p>
        <Button to="/" variant="outlineLight" className="mt-10">
          <ArrowLeft className="size-4" aria-hidden /> Back to Home
        </Button>
      </Container>
    </section>
  )
}
