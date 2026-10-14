import { MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company, CURRENT_YEAR, locations, navLinks, toTelLink } from '../../data/site'
import Container from '../ui/Container'
import Logo from '../ui/Logo'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-300">{company.description}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-gold-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {locations.map((loc) => (
          <div key={loc.label}>
            <h3 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">{loc.label}</h3>
            <p className="mt-5 flex gap-3 text-sm leading-relaxed">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
              {loc.address}
            </p>
            {loc.phones.map((phone) => (
              <a
                key={phone}
                href={toTelLink(phone)}
                className="mt-3 flex items-center gap-3 text-sm transition-colors hover:text-gold-300"
              >
                <Phone className="size-4 shrink-0 text-gold-400" aria-hidden />
                {phone}
              </a>
            ))}
          </div>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-navy-400 sm:flex-row sm:justify-between">
          <p>
            © {CURRENT_YEAR} {company.name}. All rights reserved.
          </p>
          <p>Made in Bangladesh, worn around the world.</p>
        </Container>
      </div>
    </footer>
  )
}
