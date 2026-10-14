import { CheckCircle2 } from 'lucide-react'
import { complianceItems, sustainability } from '../../data/services'
import Container from '../../components/ui/Container'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'

export default function Sustainability() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl"
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <SectionHeading
          tone="light"
          eyebrow={sustainability.eyebrow}
          title={sustainability.title}
          text={sustainability.text}
        />

        <Reveal
          delay={0.1}
          className="rounded-4xl border border-white/10 bg-white/4 p-8 backdrop-blur-sm sm:p-10"
        >
          <h3 className="text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">Our compliance commitments</h3>
          <ul className="mt-6 space-y-4">
            {complianceItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-navy-100">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold-400" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
