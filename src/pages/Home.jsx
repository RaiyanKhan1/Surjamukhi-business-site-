import AboutTeaser from '../sections/home/AboutTeaser'
import Buyers from '../sections/home/Buyers'
import CtaBanner from '../sections/shared/CtaBanner'
import Hero from '../sections/home/Hero'
import Products from '../sections/home/Products'
import Quality from '../sections/home/Quality'
import Services from '../sections/home/Services'
import StatsBar from '../sections/home/StatsBar'
import Testimonials from '../sections/home/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutTeaser />
      <Services />
      <Products />
      <Quality />
      <Buyers />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
