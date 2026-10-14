import { buyers } from '../../data/buyers'
import Container from '../../components/ui/Container'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'

export default function Buyers() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Brands we’ve worked with"
          title="Trusted by fashion labels across Europe and beyond"
          align="center"
        />

        <Reveal
          as="ul"
          delay={0.1}
          className="mt-14 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-5"
        >
          {buyers.map((buyer, i) => (
            <li
              key={`${buyer.name}-${i}`}
              className="group grid h-20 place-items-center rounded-2xl border border-navy-100 bg-white px-4 sm:h-24 sm:px-6"
            >
              <img
                src={buyer.logo}
                alt={buyer.name}
                loading="lazy"
                className="max-h-10 max-w-full object-contain opacity-70 mix-blend-multiply grayscale transition-[filter,opacity] duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-12"
              />
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
