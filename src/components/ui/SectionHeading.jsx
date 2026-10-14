import Reveal from './Reveal'

// Eyebrow + title + optional intro text used at the top of each section.
export default function SectionHeading({ eyebrow, title, text, align = 'left', tone = 'dark', className = '' }) {
  const isCenter = align === 'center'
  const isLight = tone === 'light'

  return (
    <Reveal className={`${isCenter ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      {eyebrow && (
        <p className={`text-xs font-semibold tracking-[0.18em] uppercase ${isLight ? 'text-gold-300' : 'text-gold-600'}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 text-3xl leading-tight font-semibold sm:text-4xl ${isLight ? 'text-white' : 'text-navy-950'}`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-relaxed ${isLight ? 'text-navy-200' : 'text-navy-600'}`}>{text}</p>
      )}
    </Reveal>
  )
}
