import logoSvg from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logoSvg} alt="Masarat Talent Logo" style={{height: '40px'}} />
                        </div>
          <p className="footer__tagline italic">
            "Africa doesn't have a talent problem.<br />It has an access problem."
          </p>
          <p className="footer__reg">
            Masarat Talent Limited · Rwanda Reg: REG-2026-757135<br />
            TIN: 156063202 · Tony Elumelu Foundation Entrepreneur 2026
          </p>
        </div>

        <div className="footer__links">
          <h4>Platform</h4>
          <Link to="/">Home</Link>
          <Link to="/demo">Live Demo</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__links">
          <h4>Connect</h4>
          <a href="https://www.linkedin.com/company/masarat-talent/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:hello@masaratalent.com">hello@masaratalent.com</a>
          <a href="https://github.com/elhadiabdelmuneim-sketch/masarat-talent" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© 2026 Masarat Talent Limited. All rights reserved. Built on AWS.</p>
        </div>
      </div>
    </footer>
  )
}
