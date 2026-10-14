import { Check } from 'lucide-react'
import { services } from '../../data/services'
import Container from '../../components/ui/Container'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'

export default function ServiceCards() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Four services, one accountable partner"
          text="Use us end-to-end or for a single stage. Either way, you get one point of contact who knows your order inside out."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, text, points }, i) => (
            <Reveal
              as="article"
              key={title}
              delay={(i % 2) * 0.08}
              className="group relative flex flex-col overflow-hidden rounded-4xl border border-navy-100 bg-white p-8 transition-[border-color,box-shadow] duration-300 hover:border-gold-300 hover:shadow-xl hover:shadow-navy-950/5 sm:p-10"
            >
              <span
                aria-hidden
                className="absolute top-6 right-8 text-6xl font-semibold tracking-tight text-navy-50 transition-colors duration-300 group-hover:text-gold-100 sm:text-7xl"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <span className="relative grid size-14 place-items-center rounded-2xl bg-navy-950 text-gold-300">
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="relative mt-8 text-2xl font-semibold text-navy-950">{title}</h3>
              <p className="relative mt-3 leading-relaxed text-navy-600">{text}</p>

              <ul className="relative mt-8 grid gap-3 border-t border-navy-100 pt-8">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-navy-800">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold-100 text-gold-700">
                      <Check className="size-3" strokeWidth={3} aria-hidden />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
