import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { aboutTeaser } from '../../data/home'
import { YEARS_OF_EXPERIENCE } from '../../data/site'
import Container from '../../components/ui/Container'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'

export default function AboutTeaser() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <img
            src={aboutTeaser.image}
            alt={aboutTeaser.imageAlt}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl shadow-navy-950/10"
          />
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-navy-950 px-6 py-5 text-white shadow-xl sm:left-auto sm:-right-6">
            <p className="text-4xl font-semibold tracking-tight text-gold-300">{YEARS_OF_EXPERIENCE}+</p>
            <p className="mt-1 text-sm text-navy-200">years of trusted partnerships</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow={aboutTeaser.eyebrow} title={aboutTeaser.title} />

          <Reveal delay={0.1} className="mt-6 space-y-4 text-base leading-relaxed text-navy-600">
            {aboutTeaser.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal as="ol" delay={0.15} className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {aboutTeaser.highlights.map((item) => (
              <li key={item.year} className="border-l-2 border-gold-400 pl-4">
                <p className="text-sm font-semibold text-gold-600">{item.year}</p>
                <p className="mt-1 text-sm text-navy-700">{item.text}</p>
              </li>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy-950"
            >
              More about our story
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
