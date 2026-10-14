import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ' +
  'transition-[transform,background-color,color,border-color] duration-150 ease-out active:scale-[0.97]'

const variants = {
  primary: 'bg-gold-400 text-navy-950 hover:bg-gold-300',
  dark: 'bg-navy-950 text-white hover:bg-navy-800',
  outlineLight: 'border border-white/30 text-white hover:border-white/60 hover:bg-white/5',
  outlineDark: 'border border-navy-900/20 text-navy-900 hover:border-navy-900/50 hover:bg-navy-900/5',
}

// Renders a router <Link> for internal paths (`to`) or an <a> for external ones (`href`).
export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  )
}
