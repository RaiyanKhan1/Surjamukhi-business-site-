import { ClipboardCheck, Layers, Scissors, Search } from 'lucide-react'
import { YEARS_OF_EXPERIENCE } from './site'

// Core services, reused by the Home and Services pages.
// `points` only appear on the Services page.
export const services = [
  {
    icon: Search,
    title: 'Buying & Sourcing',
    text: 'Since 1997 we have matched international buyers with the right partner factories, fabrics and price points across Bangladesh.',
    points: [
      'Factory selection from our vetted partner network',
      'Fabric, trims and accessories sourcing',
      'Costing, price negotiation and order placement',
      'Production planning and order follow-up',
    ],
  },
  {
    icon: Scissors,
    title: 'Sampling',
    text: 'Research, salesman, photo, pre-production and shipping samples, plus lab dips and artwork, tailored to every stage of your order.',
    points: [
      'Proto and research samples',
      'Salesman and photo samples',
      'Pre-production (PP) and shipping samples',
      'Lab dips, strike-offs and artwork approvals',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Assurance',
    text: 'Our Process Control Team works on the factory floor, monitoring production and solving issues before they reach your shipment.',
    points: [
      'Inline inspections during production',
      'Final audit to MIL-STD-105, AQL 2.5',
      'In-house textile lab for fabric and garment tests',
      '20% packing audit with zero defect tolerance',
    ],
  },
  {
    icon: Layers,
    title: 'Sales & Product Development',
    text: 'Sales directors, designers and in-house fabric specialists guide each style from concept through bulk production.',
    points: [
      'Dedicated sales director for every account',
      'Design team with seasonal trend input',
      'In-house fabric specialists',
      'Development support from tech pack to bulk',
    ],
  },
]

// Services page header.
export const servicesHeader = {
  eyebrow: 'Our services',
  title: 'Everything between your design and your warehouse',
  text: `${YEARS_OF_EXPERIENCE}+ years of sourcing, sampling, quality control and product development, managed by one accountable team in Dhaka.`,
  facts: ['Quotes in 1–2 days', 'Proto in 6–7 days', 'FOB or CIF delivery'],
}

// Order journey with lead times from the old site.
export const processSteps = [
  { step: 'Inquiry', time: 'Day 0', text: 'Share your tech pack, reference samples or target price.' },
  { step: 'Quotation', time: '1–2 days', text: 'Costing with fabric options, MOQs and lead times.' },
  { step: 'Proto sample', time: '6–7 days', text: 'First sample for fit, construction and approval.' },
  { step: 'Sales samples', time: '3–4 weeks', text: 'Salesman and photo samples, depending on fabric and style.' },
  {
    step: 'Bulk production',
    time: '60–120 days',
    text: 'Delivered to your warehouse. Longer for specialised fabrics or designs.',
  },
  { step: 'Shipment', time: 'FOB / CIF', text: 'Final audit, packing audit and shipping documents.' },
]

export const commercialTerms = [
  { label: 'Payment', value: 'Letter of Credit (LC) or Wire Transfer (TT)' },
  { label: 'Delivery', value: 'FOB or CIF' },
  { label: 'MOQ', value: 'Flexible, depending on style and fabric. Ask us' },
  { label: 'Production lead time', value: '60–120 days to your warehouse' },
]

// Quality standards from the old site's QA section.
export const qualityStandards = [
  { value: 'AQL 2.5', label: 'Final audit to MIL-STD-105 sampling' },
  { value: '20%', label: 'Of cartons opened in final packing audit' },
  { value: '0%', label: 'Defect tolerance on packing' },
  { value: 'In-house', label: 'Textile lab for fabric & garment testing' },
]

export const complianceItems = [
  'Full compliance with local labour laws',
  'Zero child labour — no workers under 15',
  'Health & safety standards on every floor',
  'Environmental responsibility',
  'Customs & anti-transshipment compliance',
]

export const sustainability = {
  eyebrow: 'Sustainability',
  title: 'Stronger supply chains, shared responsibility',
  text: 'We build long-term partnerships and share knowledge with our factories to strengthen supply-chain capacity, helping people and organisations adopt sustainable practices, reduce negative impacts and amplify positive ones.',
}

export const faqs = [
  {
    q: 'What is your minimum order quantity (MOQ)?',
    a: 'Our MOQs are flexible and depend on the style, fabric and colour count. Send us your requirements and we’ll suggest the most cost-effective quantity.',
  },
  {
    q: 'How quickly can I get a quotation?',
    a: 'Usually within 1–2 working days of receiving your tech pack or reference sample.',
  },
  {
    q: 'How long does bulk production take?',
    a: 'Typically 60–120 days to your warehouse. Specialised fabrics or complex designs may need longer; we confirm the exact timeline with your quotation.',
  },
  {
    q: 'What payment and delivery terms do you accept?',
    a: 'We work with Letter of Credit (LC) or Wire Transfer (TT), and ship on FOB or CIF terms.',
  },
  {
    q: 'Can you develop a product from my tech pack?',
    a: 'Yes. Our design and fabric specialists turn your tech pack into a proto sample in about 6–7 days, then refine it through sales and pre-production samples.',
  },
  {
    q: 'How do you make sure quality is consistent?',
    a: 'Our Process Control Team inspects inline on the factory floor, runs a final audit to MIL-STD-105 at AQL 2.5, and opens 20% of cartons in a zero-tolerance packing audit before shipment.',
  },
]
