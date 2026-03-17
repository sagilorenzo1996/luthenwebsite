import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogoMark } from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav style={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none' }}>
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <LogoMark className="logo-mark" style={{ color: '#0A0A0F' }} />
          <span className="logo-wordmark">Luthen<sup>®</sup></span>
        </Link>

        <ul className="nav-links">
          <li className="nav-item-dropdown">
            <NavLink to="/platform/connect" className={({ isActive }) => isActive ? 'active' : ''}>
              Platform
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavLink>
            <div className="dropdown-menu">
              <Link to="/platform/connect" className="dropdown-link">Connect</Link>
              <Link to="/platform/intelligence" className="dropdown-link">Intelligence</Link>
              <Link to="/platform/builder" className="dropdown-link">Builder</Link>
              <Link to="/pricing" className="dropdown-link">Pricing</Link>
            </div>
          </li>
          <li><NavLink to="/solutions" className={({ isActive }) => isActive ? 'active' : ''}>Solutions</NavLink></li>
          {/* <li><NavLink to="/resources" className={({ isActive }) => isActive ? 'active' : ''}>Resources</NavLink></li> */}
          <li><NavLink to="/pricing" className={({ isActive }) => isActive ? 'active' : ''}>Pricing</NavLink></li>
        </ul>

        <div className="nav-right">
          <Link to="/demo" className="nav-demo">Request Demo</Link>
          <Link to="/demo" className="btn-nav">Get Started</Link>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </nav>

      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        <Link to="/platform/connect" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Platform</Link>
        <div className="nav-mobile-sublinks">
          <Link to="/platform/connect" className="nav-mobile-sublink" onClick={() => setMenuOpen(false)}>Connect</Link>
          <Link to="/platform/intelligence" className="nav-mobile-sublink" onClick={() => setMenuOpen(false)}>Intelligence</Link>
          <Link to="/platform/builder" className="nav-mobile-sublink" onClick={() => setMenuOpen(false)}>Builder</Link>
          <Link to="/pricing" className="nav-mobile-sublink" onClick={() => setMenuOpen(false)}>Pricing</Link>
        </div>
        <Link to="/solutions" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Solutions</Link>
        {/* <Link to="/resources" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Resources</Link> */}
        <Link to="/pricing" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Pricing</Link>
        <div className="nav-mobile-divider" />
        {/* <Link to="/about" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>About</Link> */}
        <Link to="/contact" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Contact</Link>
        <div className="nav-mobile-divider" />
        <div className="nav-mobile-ctas">
          <Link to="/demo" className="btn-hero" onClick={() => setMenuOpen(false)}>Request Demo</Link>
        </div>
      </div>
    </>
  )
}
