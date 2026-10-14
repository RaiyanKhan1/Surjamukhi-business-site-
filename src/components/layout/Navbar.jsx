import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks, quoteLink } from '../../data/site'
import useScrolled from '../../hooks/useScrolled'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Logo from '../ui/Logo'
import { softSpring } from '../../lib/motion'

const linkClass = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 ${
    isActive ? 'text-white bg-white/10' : 'text-navy-200 hover:text-white'
  }`

export default function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const closeMenu = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        solid ? 'bg-navy-950/80 shadow-[0_1px_0_rgb(255_255_255/0.06)] backdrop-blur-xl backdrop-saturate-150' : ''
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button to={quoteLink} className="px-5! py-2.5!">
              Request a Quote
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-11 place-items-center rounded-full text-white transition-transform active:scale-90 lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu enters from and exits back to the header it belongs to. */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="overflow-hidden border-t border-white/10 lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={reduceMotion ? { duration: 0.15 } : { ...softSpring, duration: 0.4 }}
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium ${isActive ? 'bg-white/10 text-white' : 'text-navy-100'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-3 sm:hidden">
                <Button to={quoteLink} onClick={closeMenu} className="w-full">
                  Request a Quote
                </Button>
              </div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
