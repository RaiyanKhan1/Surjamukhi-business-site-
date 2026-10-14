import buyerMeeting from '../assets/images/home/buyer-meeting.jpg'
import heroImage from '../assets/images/home/hero-sweater.jpg'
import { FOUNDED_YEAR, YEARS_OF_EXPERIENCE } from './site'

// Content specific to the Home page.

export const hero = {
  eyebrow: `Dhaka, Bangladesh · Since ${FOUNDED_YEAR}`,
  title: 'Apparel made right,',
  titleHighlight: 'shipped on time.',
  text: `${YEARS_OF_EXPERIENCE}+ years of manufacturing, exporting and sourcing for international fashion brands, with fast sampling, consistent quality and responsive communication.`,
  image: heroImage,
  imageAlt: 'A stack of knitted sweaters in mustard, olive, amber and teal',
  proofPoints: ['AQL 2.5 audited', 'Own knit factory', 'On-time delivery'],
  // Shown as text wordmarks — most logo files have solid backgrounds that clash with the photo.
  trustedBy: ['H&M', 'Mango', 'DKNY', 'Max Mara', 'Club Monaco', 'OVS', 'Halti'],
}

// Animated counters. The old site showed "0 Countries" (broken), so it's left out.
export const stats = [
  { value: YEARS_OF_EXPERIENCE, suffix: '+', label: 'Years exporting' },
  { value: 1000, suffix: '+', label: 'Shipments completed' },
  { value: 1000, suffix: '+', label: 'Tons of garments delivered' },
  { value: 31, suffix: '+', label: 'Trained professionals' },
]

export const aboutTeaser = {
  eyebrow: 'Who we are',
  title: 'A trusted partner between your brand and Bangladesh’s factories',
  paragraphs: [
    'Surjamukhi Tex Concern began in 1997 as a buying and sourcing agent and has grown into a garment manufacturer and exporter, opening its own knit factory in 2010.',
    'Our technical, R&D, logistics and MIS teams stay close to every order, from pre-assessment to the day it ships, so buyers always know where their goods stand.',
  ],
  image: buyerMeeting,
  imageAlt: 'STC CEO Sayedul Islam Khan reviewing samples with a buyer in Europe',
  highlights: [
    { year: '1997', text: 'Started as a buying & sourcing agent' },
    { year: '2010', text: 'Opened our own knit factory' },
    { year: '2015', text: 'Named Supplier of the Year' },
    { year: '2023', text: 'Launched the Buruj clothing brand' },
  ],
}
