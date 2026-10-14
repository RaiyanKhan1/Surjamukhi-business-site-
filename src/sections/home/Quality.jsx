import { CheckCircle2 } from 'lucide-react'
import { complianceItems, qualityStandards } from '../../data/services'
import Container from '../../components/ui/Container'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'

export default function Quality() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl"
      />

      <Container className="relative grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            tone="light"
            eyebrow="Quality & compliance"
            title="Standards we hold every order to"
            text="Every shipment passes a structured final audit, and every partner factory meets our ethical and legal requirements."
          />

          <Reveal as="ul" delay={0.1} className="mt-10 space-y-4">
            {complianceItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-navy-100">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold-400" aria-hidden />
                {item}
              </li>
            ))}
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 self-center">
          {qualityStandards.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 0.06}
              className="rounded-3xl border border-white/10 bg-white/4 p-6 backdrop-blur-sm sm:p-8"
            >
              <p className="text-2xl font-semibold tracking-tight text-gold-300 sm:text-3xl">{item.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy-200">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
