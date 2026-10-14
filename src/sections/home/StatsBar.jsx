import { stats } from '../../data/home'
import Container from '../../components/ui/Container'
import Counter from '../../components/ui/Counter'
import Reveal from '../../components/ui/Reveal'

// Floating stats card that overlaps the bottom edge of the hero.
export default function StatsBar() {
  return (
    <Container className="relative z-10 -mt-20 lg:-mt-24">
      <Reveal className="grid grid-cols-2 gap-y-8 rounded-3xl bg-white p-8 shadow-xl shadow-navy-950/10 ring-1 ring-navy-900/5 sm:p-10 lg:grid-cols-4 lg:divide-x lg:divide-navy-100">
        {stats.map((stat) => (
          <div key={stat.label} className="px-2 text-center lg:px-6">
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              className="block text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl"
            />
            <p className="mt-2 text-sm text-navy-500">{stat.label}</p>
          </div>
        ))}
      </Reveal>
    </Container>
  )
}
