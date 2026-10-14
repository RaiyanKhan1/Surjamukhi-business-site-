import { ArrowRight, Check } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { hero } from '../../data/home'
import { quoteLink } from '../../data/site'
import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import { softSpring } from '../../lib/motion'

export default function Hero() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  // Gentle parallax: the photo drifts slower than the page as you scroll past the hero.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '18%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, reduceMotion ? 1 : 0])

  const enter = (delay) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion ? { duration: 0.2 } : { ...softSpring, delay },
  })

  return (
    <section ref={ref} className="relative isolate flex min-h-svh flex-col overflow-hidden bg-navy-950">
      {/* Background photo — settles from a slight zoom on load, then parallaxes on scroll */}
      <motion.div aria-hidden className="absolute inset-y-0 right-0 left-0 -z-20 lg:left-[36%]" style={{ y: imageY }}>
        <motion.img
          src={hero.image}
          alt=""
          fetchPriority="high"
          className="size-full object-cover object-[60%_center]"
          initial={{ scale: reduceMotion ? 1 : 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: reduceMotion ? 0.3 : 2.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      {/* Navy overlays keep the text legible: strong on the left, fading to show the photo on the right */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-navy-950/75 lg:bg-transparent lg:bg-linear-to-r lg:from-navy-950 lg:from-38% lg:via-navy-950/50 lg:via-55% lg:to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-linear-to-t from-navy-950 via-navy-950/60 to-transparent"
      />

      <motion.div style={{ opacity: contentOpacity }} className="flex flex-1 flex-col">
        <Container className="flex flex-1 flex-col justify-center pt-32 pb-16">
          <div className="max-w-4xl">
            <motion.p
              {...enter(0.3)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-200 backdrop-blur-md"
            >
              <span className="size-1.5 rounded-full bg-gold-400" aria-hidden />
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              {...enter(0.4)}
              className="mt-7 text-5xl leading-[1.02] font-semibold tracking-[-0.03em] text-white sm:text-7xl lg:text-[5.5rem]"
            >
              {hero.title}
              <br />
              <span className="bg-linear-to-r from-gold-200 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                {hero.titleHighlight}
              </span>
            </motion.h1>

            <motion.p {...enter(0.5)} className="mt-7 max-w-xl text-lg leading-relaxed text-navy-100 sm:text-xl">
              {hero.text}
            </motion.p>

            <motion.div {...enter(0.6)} className="mt-10 flex flex-wrap gap-3">
              <Button to={quoteLink} className="px-7! py-3.5! text-base!">
                Request a Quote <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button to="/products" variant="outlineLight" className="px-7! py-3.5! text-base! backdrop-blur-md">
                Explore Products
              </Button>
            </motion.div>

            <motion.ul {...enter(0.7)} className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {hero.proofPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm font-medium text-navy-100">
                  <span className="grid size-5 place-items-center rounded-full bg-gold-400/20 text-gold-300">
                    <Check className="size-3" strokeWidth={3} aria-hidden />
                  </span>
                  {point}
                </li>
              ))}
            </motion.ul>
          </div>
        </Container>

        {/* Trusted-by strip; extra bottom padding leaves room for the overlapping stats card */}
        <motion.div {...enter(0.85)} className="pb-32 lg:pb-36">
          <Container>
            <div className="flex flex-col gap-4 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:gap-10">
              <p className="shrink-0 text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">Trusted by</p>
              <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {hero.trustedBy.map((brand) => (
                  <li key={brand} className="text-base font-semibold tracking-wide text-white/55 uppercase sm:text-lg">
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </motion.div>
      </motion.div>
    </section>
  )
}
