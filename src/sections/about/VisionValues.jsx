import { values, vision } from '../../data/about'
import Container from '../../components/ui/Container'
import Reveal from '../../components/ui/Reveal'

export default function VisionValues() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-200 -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl"
      />

      <Container className="relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">{vision.eyebrow}</p>
          <blockquote className="mt-6 text-3xl leading-tight font-semibold tracking-tight text-balance text-white sm:text-5xl">
            “{vision.quote}”
          </blockquote>
        </Reveal>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal
              key={value.title}
              delay={i * 0.06}
              className="rounded-3xl border border-white/10 bg-white/4 p-7 backdrop-blur-sm"
            >
              <span className="text-sm font-semibold text-gold-400">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-lg font-semibold text-white">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-200">{value.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
