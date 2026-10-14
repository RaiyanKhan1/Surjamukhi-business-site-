import { FileText, ShieldCheck } from 'lucide-react'
import { commercialTerms, qualityStandards } from '../../data/services'
import Container from '../../components/ui/Container'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'

export default function TermsQuality() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Terms & standards"
          title="Clear terms, measurable quality"
          text="No surprises: here is how we trade and the standards every shipment is checked against."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-4xl bg-navy-950 p-8 text-white sm:p-10">
            <div className="flex items-center gap-3">
              <FileText className="size-5 text-gold-300" aria-hidden />
              <h3 className="text-lg font-semibold">Commercial terms</h3>
            </div>
            <dl className="mt-8 divide-y divide-white/10">
              {commercialTerms.map((term) => (
                <div key={term.label} className="grid gap-1 py-5 first:pt-0 last:pb-0 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="text-sm text-navy-300">{term.label}</dt>
                  <dd className="font-medium text-white">{term.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.08} className="rounded-4xl border border-navy-100 bg-white p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-5 text-gold-600" aria-hidden />
              <h3 className="text-lg font-semibold text-navy-950">Quality standards</h3>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {qualityStandards.map((item) => (
                <div key={item.label} className="rounded-2xl bg-cream p-5">
                  <p className="text-2xl font-semibold tracking-tight text-navy-950">{item.value}</p>
                  <p className="mt-2 text-sm leading-snug text-navy-600">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
