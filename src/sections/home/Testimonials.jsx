import { Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import Container from '../../components/ui/Container'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What our buyers say" align="center" />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal
              as="figure"
              key={t.name}
              delay={i * 0.08}
              className="flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-navy-900/5 sm:p-10"
            >
              <Quote className="size-8 text-gold-400" aria-hidden />
              <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-navy-800">“{t.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-navy-100 pt-6">
                <span
                  aria-hidden
                  className="grid size-11 place-items-center rounded-full bg-navy-950 text-sm font-semibold text-gold-300"
                >
                  {t.name
                    .split(' ')
                    .map((w) => w[0])
                    .join('')}
                </span>
                <span>
                  <span className="block font-semibold text-navy-950">{t.name}</span>
                  <span className="block text-sm text-navy-500">
                    {t.role}, {t.company}
                  </span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
