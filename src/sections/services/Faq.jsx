import { ArrowRight, Plus } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { faqs } from '../../data/services'
import { quoteLink } from '../../data/site'
import Container from '../../components/ui/Container'
import Reveal from '../../components/ui/Reveal'
import SectionHeading from '../../components/ui/SectionHeading'
import { softSpring } from '../../lib/motion'

function FaqItem({ q, a, open, onToggle }) {
  const id = useId()
  const reduceMotion = useReducedMotion()

  return (
    <li className="border-b border-navy-100">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-semibold text-navy-950 sm:text-lg"
        >
          {q}
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={reduceMotion ? { duration: 0 } : { ...softSpring, duration: 0.35 }}
            className={`grid size-8 shrink-0 place-items-center rounded-full transition-colors duration-200 ${
              open ? 'bg-gold-400 text-navy-950' : 'bg-navy-50 text-navy-700'
            }`}
          >
            <Plus className="size-4" aria-hidden />
          </motion.span>
        </button>
      </h3>

      {/* Height springs from its current value, so rapid clicks reverse smoothly mid-animation */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={reduceMotion ? { duration: 0.15 } : { ...softSpring, duration: 0.4 }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 leading-relaxed text-navy-600">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions buyers ask us"
            text="Can’t find what you’re looking for? Our team usually replies within one working day."
          />
          <Reveal delay={0.1}>
            <Link
              to={quoteLink}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-950"
            >
              Ask us directly
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <Reveal as="ul" delay={0.05} className="border-t border-navy-100">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
