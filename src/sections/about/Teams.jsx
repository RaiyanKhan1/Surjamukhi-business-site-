import { leadership, teamIntro, teams } from '../../data/about'
import Container from '../../components/ui/Container'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'

export default function Teams() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow={teamIntro.eyebrow} title={teamIntro.title} text={teamIntro.text} />

          <Reveal delay={0.1} className="flex items-center gap-5 rounded-3xl bg-navy-950 p-6">
            {leadership.photo ? (
              <img src={leadership.photo} alt={leadership.name} className="size-16 rounded-full object-cover" />
            ) : (
              <span
                aria-hidden
                className="grid size-16 shrink-0 place-items-center rounded-full bg-gold-400 text-xl font-semibold text-navy-950"
              >
                {leadership.initials}
              </span>
            )}
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">Leadership</p>
              <p className="mt-1 text-lg font-semibold text-white">{leadership.name}</p>
              <p className="text-sm text-navy-300">{leadership.role}</p>
            </div>
          </Reveal>
        </div>

        <ul className="grid grid-cols-2 gap-3 self-start sm:gap-4 lg:grid-cols-3">
          {teams.map(({ icon: Icon, name, text }, i) => (
            <Reveal
              as="li"
              key={name}
              delay={(i % 3) * 0.06}
              className="group rounded-3xl border border-navy-100 bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-gold-300 hover:shadow-lg hover:shadow-navy-950/5"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-gold-100 text-gold-700 transition-transform duration-300 group-hover:-translate-y-0.5">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-semibold text-navy-950">{name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{text}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
