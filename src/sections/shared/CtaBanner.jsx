import { ArrowRight, Phone } from 'lucide-react'
import { locations, quoteLink, toTelLink } from '../../data/site'
import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import Reveal from '../../components/ui/Reveal'

const mainPhone = locations[0].phones[0]

export default function CtaBanner() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <Reveal className="relative overflow-hidden rounded-4xl bg-linear-to-br from-gold-300 via-gold-400 to-gold-500 px-8 py-14 sm:px-14 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-white/25 blur-2xl"
          />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl leading-tight font-semibold text-navy-950 sm:text-4xl">
                Planning your next collection?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-900/80">
                Send us your tech pack or reference samples. We’ll come back with costing, lead times and sampling
                options.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to={quoteLink} variant="dark">
                Request a Quote <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button href={toTelLink(mainPhone)} variant="outlineDark">
                <Phone className="size-4" aria-hidden /> {mainPhone}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
