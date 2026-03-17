import { Link } from 'react-router-dom'
import { LogoMark } from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand-name">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <LogoMark style={{ width: 20, height: 20, color: '#0A0A0F' }} />
              Luthen<sup style={{ fontSize: 9, fontWeight: 500 }}>®</sup>
            </Link>
          </div>
          <div className="footer-brand-tag">Enterprise Autonomy Layer</div>
          <div className="footer-cert-row">
            <span className="f-cert">SOC 2 Type II</span>
            <span className="f-cert">GDPR</span>
            <span className="f-cert">ISO 27001</span>
            <span className="f-cert">99.99% SLA</span>
          </div>
        </div>
        <div>
          <div className="f-col-hdr">Platform</div>
          <ul className="f-links">
            <li><Link to="/platform/connect">Connect</Link></li>
            <li><Link to="/platform/intelligence">Intelligence</Link></li>
            <li><Link to="/platform/builder">Builder</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <div className="f-col-hdr">Solutions</div>
          <ul className="f-links">
            <li><Link to="/solutions#manufacturing">Manufacturing</Link></li>
            <li><Link to="/solutions#logistics">Logistics</Link></li>
            <li><Link to="/solutions#telecom">Telecom / Utilities</Link></li>
            <li><Link to="/solutions#finance">Financial Services</Link></li>
            <li><Link to="/solutions#lab-management">Lab Management</Link></li>
          </ul>
        </div>
        {/* <div>
          <div className="f-col-hdr">Resources</div>
          <ul className="f-links">
            <li><Link to="/resources">Documentation</Link></li>
            <li><Link to="/resources#case-studies">Case Studies</Link></li>
            <li><Link to="/resources#blog">Blog</Link></li>
            <li><Link to="/docs">API Reference</Link></li>
          </ul>
        </div> */}
        <div>
          <div className="f-col-hdr">Company</div>
          <ul className="f-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/security">Security</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Luthen, Inc. All rights reserved.</span>
        <div className="footer-legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/security">Security</Link>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-prefs'))}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit', fontSize: 'inherit', color: 'inherit', textDecoration: 'none' }}
          >
            Cookie Preferences
          </button>
        </div>
      </div>
    </footer>
  )
}
