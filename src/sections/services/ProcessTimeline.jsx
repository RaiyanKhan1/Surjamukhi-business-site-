import { processSteps } from '../../data/services'
import Container from '../../components/ui/Container'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'

// Vertical timeline on mobile, horizontal on large screens.
export default function ProcessTimeline() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How an order works"
          title="From first message to final shipment"
          text="Typical lead times at each stage. We confirm exact dates with every quotation."
          align="center"
        />

        <ol className="mt-16 grid lg:grid-cols-6">
          {processSteps.map((item, i) => {
            const isLast = i === processSteps.length - 1
            return (
              <Reveal
                as="li"
                key={item.step}
                delay={i * 0.07}
                className={`relative border-l-2 pb-10 pl-10 lg:border-t-2 lg:border-l-0 lg:pt-10 lg:pr-6 lg:pb-0 lg:pl-0 ${
                  isLast ? 'border-transparent' : 'border-navy-100'
                }`}
              >
                {/* Step marker centred on the 2px line */}
                <span
                  aria-hidden
                  className="absolute top-0 -left-4.25 grid size-8 place-items-center rounded-full bg-navy-950 text-xs font-semibold text-gold-300 ring-8 ring-white lg:-top-4.25 lg:left-0"
                >
                  {i + 1}
                </span>

                <p className="inline-block rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">
                  {item.time}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-navy-950">{item.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.text}</p>
              </Reveal>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
