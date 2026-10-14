import { ArrowRight } from 'lucide-react'
import { services } from '../../data/services'
import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'

export default function Services() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="End-to-end support from first sample to final shipment"
          text="One accountable team managing sourcing, development, quality and logistics, so you deal with a single partner instead of many."
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 0.06}
              className="group rounded-3xl border border-navy-100 bg-cream p-7 transition-[box-shadow,border-color] duration-300 hover:border-gold-300 hover:shadow-lg hover:shadow-navy-950/5"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-navy-950 text-gold-300 transition-transform duration-300 group-hover:-translate-y-0.5">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-navy-950">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-600">{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button to="/services" variant="outlineDark">
            Explore our services <ArrowRight className="size-4" aria-hidden />
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
