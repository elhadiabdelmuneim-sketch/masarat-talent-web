import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  const links = [
    { to: '/',        label: 'Home'    },
    { to: '/demo',    label: 'Live Demo' },
    { to: '/about',   label: 'About'   },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="logo-mark">م</span>
          <span className="logo-text">
            <span className="logo-main">Masarat</span>
            <span className="logo-sub">Talent</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`navbar__link ${location.pathname === to ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link to="/demo" className="btn btn-primary btn-sm">
            Try Demo →
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`navbar__burger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="navbar__mobile">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className="navbar__mobile-link">{label}</Link>
          ))}
          <Link to="/demo" className="btn btn-primary" style={{ margin: '12px 24px 0' }}>
            Try Live Demo →
          </Link>
        </div>
      )}
    </header>
  )
}
