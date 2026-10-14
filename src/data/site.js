// Company-wide information used across every page (navbar, footer, contact).
// Edit text here — components read from this file.

export const FOUNDED_YEAR = 1997 // TODO(confirm): old site says both 1996 and 1997
export const CURRENT_YEAR = new Date().getFullYear()
export const YEARS_OF_EXPERIENCE = CURRENT_YEAR - FOUNDED_YEAR

export const company = {
  name: 'Surjamukhi Tex Concern',
  shortName: 'STC',
  tagline: 'Garment Manufacturer, Exporter & Buying House',
  description:
    'A Dhaka-based apparel manufacturer, exporter and buying & sourcing agent, delivering consistent quality to international brands since 1997.',
  ceo: 'Sayedul Islam Khan',
  email: '', // TODO: add email — it is hidden/obfuscated on the old site
}

export const locations = [
  {
    label: 'Head Office',
    address: '8/2 Shiddeshwari Road, Ramna, Dhaka-1217, Bangladesh',
    phones: ['+880 1817 001989', '+880 1611 444506'],
  },
  {
    label: 'Factory',
    address: 'Fatullah, Narayanganj, Bangladesh',
    phones: ['+880 1611 444506'],
  },
]

// Strips spaces so a display number becomes a valid tel: link.
export const toTelLink = (phone) => `tel:${phone.replace(/\s/g, '')}`

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Contact', to: '/contact' },
]

export const quoteLink = '/contact'
