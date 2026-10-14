import { ArrowUpRight, Building2, Factory, Phone } from 'lucide-react'
import { locationsIntro } from '../../data/about'
import { locations, toTelLink } from '../../data/site'
import Container from '../../components/ui/Container'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'

const icons = { 'Head Office': Building2, Factory }
const mapsLink = (address) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

export default function Locations() {
  const { map, pin } = locationsIntro

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Dotted map recoloured with a CSS mask, so it follows the brand palette */}
        <Reveal className="relative mx-auto aspect-[369/507] w-full max-w-sm">
          <div
            aria-hidden
            className="absolute inset-0 bg-navy-200"
            style={{ mask: `url(${map}) center / contain no-repeat`, WebkitMask: `url(${map}) center / contain no-repeat` }}
          />
          <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: pin.left, top: pin.top }}>
            <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-gold-400/60 motion-reduce:hidden" />
            <span className="relative block size-4 rounded-full bg-gold-500 ring-4 ring-white" />
            <span className="absolute top-1/2 left-7 -translate-y-1/2 rounded-full bg-navy-950 px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white shadow-lg">
              Dhaka · Narayanganj
            </span>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow={locationsIntro.eyebrow} title={locationsIntro.title} text={locationsIntro.text} />

          <div className="mt-10 grid gap-4">
            {locations.map((loc, i) => {
              const Icon = icons[loc.label] ?? Building2
              return (
                <Reveal key={loc.label} delay={0.08 + i * 0.06} className="rounded-3xl border border-navy-100 bg-cream p-6">
                  <div className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-navy-950 text-gold-300">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-navy-950">{loc.label}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy-600">{loc.address}</p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                        {loc.phones.map((phone) => (
                          <a
                            key={phone}
                            href={toTelLink(phone)}
                            className="flex items-center gap-1.5 font-medium text-navy-800 transition-colors hover:text-gold-600"
                          >
                            <Phone className="size-3.5" aria-hidden /> {phone}
                          </a>
                        ))}
                        <a
                          href={mapsLink(loc.address)}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 font-medium text-gold-700 transition-colors hover:text-gold-600"
                        >
                          Directions <ArrowUpRight className="size-3.5" aria-hidden />
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
