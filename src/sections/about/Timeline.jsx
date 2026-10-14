import { milestones } from '../../data/about'
import Container from '../../components/ui/Container'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'

// Vertical timeline: line on the left on mobile, centred with alternating sides on large screens.
export default function Timeline() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Milestones" title="Our journey so far" align="center" />

        <ol className="relative mx-auto mt-16 max-w-5xl">
          <span aria-hidden className="absolute top-2 bottom-2 left-4 w-0.5 bg-navy-100 lg:left-1/2 lg:-translate-x-1/2" />

          {milestones.map((m, i) => {
            const right = i % 2 === 1
            return (
              <Reveal
                as="li"
                key={m.year}
                delay={0.05}
                className={`relative pb-12 pl-12 last:pb-0 lg:w-1/2 lg:pl-0 ${
                  right ? 'lg:ml-auto lg:pl-14' : 'lg:pr-14 lg:text-right'
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute top-1.5 left-4 size-4 -translate-x-1/2 rounded-full bg-gold-400 ring-4 ring-gold-100 ${
                    right ? 'lg:left-0' : 'lg:right-0 lg:left-auto lg:translate-x-1/2'
                  }`}
                />
                <p className="text-4xl font-semibold tracking-tight text-gold-500 sm:text-5xl">{m.year}</p>
                <h3 className="mt-3 text-xl font-semibold text-navy-950">{m.title}</h3>
                <p className="mt-2 leading-relaxed text-navy-600">{m.text}</p>
              </Reveal>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
