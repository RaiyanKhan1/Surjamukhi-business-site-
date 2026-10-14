import { story } from '../../data/about'
import { YEARS_OF_EXPERIENCE } from '../../data/site'
import Container from '../../components/ui/Container'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'

export default function Story() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow={story.eyebrow} title={story.title} />
          <Reveal delay={0.1} className="mt-6 space-y-5 text-base leading-relaxed text-navy-600 sm:text-lg">
            {story.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.05} className="relative">
          <img
            src={story.image}
            alt={story.imageAlt}
            className="aspect-[4/5] w-full rounded-4xl object-cover object-[30%_center] shadow-xl shadow-navy-950/10 sm:aspect-[4/3] lg:aspect-[4/5]"
          />
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-gold-400 px-6 py-5 shadow-xl sm:-left-6">
            <p className="text-4xl font-semibold tracking-tight text-navy-950">{YEARS_OF_EXPERIENCE}+</p>
            <p className="mt-1 text-sm font-medium text-navy-900">years of exporting</p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
