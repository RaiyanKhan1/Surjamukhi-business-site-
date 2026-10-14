import { motion, useReducedMotion } from 'motion/react'
import { softSpring } from '../../lib/motion'

// Fades + lifts its children into view once, the first time they scroll on screen.
// With reduced motion enabled it becomes a plain opacity fade.
export default function Reveal({ as = 'div', delay = 0, y = 24, className = '', children, ...props }) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={reduceMotion ? { duration: 0.2, delay } : { ...softSpring, delay }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
