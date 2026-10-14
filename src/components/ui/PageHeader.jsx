import { Check, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from './Container'
import Reveal from './Reveal'

// Navy header used at the top of every inner page (About, Services, Products, Contact).
export default function PageHeader({ eyebrow, title, text, facts = [], breadcrumb }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 size-168 rounded-full bg-gold-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-40%] left-[-15%] -z-10 size-144 rounded-full bg-navy-500/25 blur-3xl"
      />

      <Container>
        {breadcrumb && (
          <Reveal as="nav" aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1.5 text-sm text-navy-300">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="size-3.5" />
              </li>
              <li aria-current="page" className="text-white">
                {breadcrumb}
              </li>
            </ol>
          </Reveal>
        )}

        <Reveal delay={0.05} className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">{eyebrow}</p>
          <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-[-0.025em] text-white sm:text-6xl">
            {title}
          </h1>
          {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">{text}</p>}
        </Reveal>

        {facts.length > 0 && (
          <Reveal as="ul" delay={0.15} className="mt-10 flex flex-wrap gap-3">
            {facts.map((fact) => (
              <li
                key={fact}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-navy-100"
              >
                <Check className="size-4 text-gold-400" strokeWidth={2.5} aria-hidden />
                {fact}
              </li>
            ))}
          </Reveal>
        )}
      </Container>
    </section>
  )
}
