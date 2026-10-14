import { Link } from 'react-router-dom'
import logo from '../../assets/images/brand/logo.png'
import { company } from '../../data/site'

// Brand mark + wordmark. `tone="light"` for dark backgrounds.
export default function Logo({ tone = 'light', className = '' }) {
  const isLight = tone === 'light'

  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`} aria-label={`${company.name} — Home`}>
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-200 group-active:scale-95">
        <img src={logo} alt="" className="size-8" />
      </span>
      <span className="leading-tight">
        <span className={`block text-[15px] font-semibold tracking-tight ${isLight ? 'text-white' : 'text-navy-950'}`}>
          Surjamukhi
        </span>
        <span
          className={`block text-[10px] font-medium tracking-[0.22em] uppercase ${isLight ? 'text-gold-300' : 'text-gold-600'}`}
        >
          Tex Concern
        </span>
      </span>
    </Link>
  )
}
