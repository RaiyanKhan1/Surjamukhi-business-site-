import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

const format = (n) => Math.round(n).toLocaleString('en-US')

// Counts up from 0 to `value` the first time it scrolls into view.
export default function Counter({ value, suffix = '', className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    if (!inView || reduceMotion) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setDisplay,
    })
    return () => controls.stop()
  }, [inView, reduceMotion, value])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {format(reduceMotion ? value : display)}
      {suffix}
    </span>
  )
}
