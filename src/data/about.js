import { Database, FlaskConical, ShieldCheck, Ship, Truck, Wrench } from 'lucide-react'
import bdMap from '../assets/images/about/bd-map.png'
import buyerMeeting from '../assets/images/home/buyer-meeting.jpg'
import { company, FOUNDED_YEAR, YEARS_OF_EXPERIENCE } from './site'

// Content for the About page.

export const aboutHeader = {
  eyebrow: 'About us',
  title: `Built on trust, since ${FOUNDED_YEAR}`,
  text: `${company.name} is one of Bangladesh’s most respected garment manufacturers, exporters and buying & sourcing agents, headquartered in Dhaka and serving international brands for ${YEARS_OF_EXPERIENCE}+ years.`,
  facts: [`Since ${FOUNDED_YEAR}`, 'Own knit factory', '31+ trained professionals'],
}

export const story = {
  eyebrow: 'Our story',
  title: 'From sourcing agent to manufacturer and exporter',
  paragraphs: [
    'We started in 1997 as a buying and sourcing agent, connecting European buyers with Bangladesh’s best garment factories. Fast, accurate communication and honest dealing quickly turned first orders into long-term partnerships.',
    'As our buyers grew, so did we. In 2010 we opened our own knit factory in Fatullah, Narayanganj, giving us direct control over quality and lead times across sweaters, knitwear and woven garments.',
    'Today our management stays involved in every order, from pre-assessment to shipping, so buyers always deal with people who know their product.',
  ],
  image: buyerMeeting,
  imageAlt: 'STC CEO Sayedul Islam Khan reviewing samples with a buyer in Europe',
}

// TODO(confirm): 2002 wording is generic — the old site only said "completed an order milestone".
export const milestones = [
  { year: '1997', title: 'The beginning', text: 'Started as a buying and sourcing agent in Dhaka.' },
  {
    year: '2002',
    title: 'Long-term partnerships',
    text: 'Established lasting relationships with European buyers that continue today.',
  },
  { year: '2010', title: 'Our own factory', text: 'Opened our knit factory in Fatullah, Narayanganj.' },
  { year: '2015', title: 'Supplier of the Year', text: 'Recognised as Supplier of the Year for the first time.' },
  { year: '2023', title: 'Launched Buruj', text: 'Introduced Buruj, our own clothing brand.' },
]

export const vision = {
  eyebrow: 'Our vision',
  quote: 'A global textile industry that protects and restores the environment and enhances lives.',
}

export const values = [
  {
    title: 'Integrity',
    text: 'Honest pricing, realistic lead times and straight answers, even when the news isn’t what you hoped.',
  },
  {
    title: 'Ethical business',
    text: 'Fair treatment of workers, full legal compliance and zero tolerance for child labour.',
  },
  {
    title: 'Close relationships',
    text: 'Many of our buyers have been with us for over two decades. We grow when they grow.',
  },
  {
    title: 'End-to-end ownership',
    text: 'Management oversees every order from pre-assessment to shipping, with no hand-offs and no excuses.',
  },
]

export const teams = [
  { icon: Wrench, name: 'Technical', text: 'Patterns, fit and construction' },
  { icon: FlaskConical, name: 'R&D', text: 'Fabrics, finishes and new development' },
  { icon: ShieldCheck, name: 'Process Control', text: 'Inline and final quality audits' },
  { icon: Database, name: 'MIS', text: 'Order tracking and reporting' },
  { icon: Truck, name: 'Distribution', text: 'Coordinating factories and suppliers' },
  { icon: Ship, name: 'Logistics', text: 'Fast, accurate shipping and documents' },
]

export const teamIntro = {
  eyebrow: 'Our people',
  title: 'In-house teams behind every order',
  text: 'Over 31 trained professionals and technicians, supported by continuing education, so your order is handled by specialists at every stage.',
}

export const leadership = {
  name: company.ceo,
  role: 'Chief Executive Officer',
  initials: 'SK',
  // TODO: add a portrait at assets/images/about/ceo.jpg and import it here to replace the initials.
  photo: null,
}

export const locationsIntro = {
  eyebrow: 'Where we are',
  title: 'Rooted in Bangladesh’s garment heartland',
  text: 'Our head office in Dhaka sits minutes from our factory in Fatullah, Narayanganj, one of the country’s major knitwear hubs.',
  map: bdMap,
  // Pin position on the map image (percent), calculated from Dhaka's coordinates.
  pin: { left: '50.5%', top: '47%' },
}
