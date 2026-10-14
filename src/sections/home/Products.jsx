import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { productCategories } from '../../data/products'
import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'

export default function Products() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Product range"
            title="Nine categories, one reliable source"
            text="From knit basics to denim and outerwear, we manufacture and source across the full apparel range."
          />
          <Reveal className="shrink-0">
            <Button to="/products" variant="outlineDark">
              Full catalogue <ArrowRight className="size-4" aria-hidden />
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {productCategories.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 3) * 0.06}>
              <Link
                to={`/products/${product.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-navy-900 transition-transform duration-150 active:scale-[0.98] sm:aspect-[5/4]"
              >
                <img
                  src={product.image}
                  alt=""
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-950/85 via-navy-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-6">
                  <div>
                    <h3 className="text-base font-semibold text-white sm:text-xl">{product.name}</h3>
                    <p className="mt-1 hidden text-sm text-navy-200 sm:block">{product.blurb}</p>
                  </div>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors duration-200 group-hover:bg-gold-400 group-hover:text-navy-950 sm:size-10">
                    <ArrowUpRight className="size-4" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
