import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

export default function PlatformBuilder() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Platform</div>
          <h1>Builder Engine</h1>
          <p className="page-hero-sub">Turn intent into production workflows with visual design, testing, and one-click deployment.</p>
        </div>
      </section>

      <ScrollFadeIn>
        <section className="s" style={{ background: 'var(--g50)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="s-label">Engine 03</div>
              <h2 className="s-h2">Builder</h2>
              <p className="s-body" style={{ marginBottom: 32 }}>Turn intent into production workflows. Luthen's Builder engine lets your team design, test, and deploy complex workflows without writing infrastructure code or waiting on engineering cycles.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {['Visual workflow designer with drag-and-drop simplicity', 'Instant testing against live or sandbox environments', 'One-click production deployment with governance checks', 'Version control and rollback for every workflow'].map(feat => (
                  <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 500, color: 'var(--g600)' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l3.5 3.5 7.5-7" stroke="var(--turquoise)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {feat}
                  </div>
                ))}
              </div>
              <Link to="/demo" className="btn-hero">Try the Builder
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
            <div style={{ background: '#fff', borderRadius: 'var(--r-xl)', padding: 24, border: '1px solid var(--g100)', boxShadow: 'var(--sh-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid var(--g100)' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }}></div>
                <span style={{ fontSize: 13, fontWeight: 600 }}>PO_APPROVAL_v3 - Draft</span>
              </div>
              {['Trigger: Invoice received via email', 'Extract: Vendor, amount, line items', 'Route: Amount > $10k -> Manager approval', 'Execute: Post to Oracle ERP', 'Notify: Slack + audit log entry'].map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 'var(--r-md)', background: i === 2 ? 'rgba(114,203,214,0.12)' : 'var(--g50)', border: `1px solid ${i === 2 ? 'rgba(114,203,214,0.3)' : 'transparent'}`, marginBottom: 6, fontSize: 12.5, fontFamily: 'Courier New, monospace', color: i === 2 ? 'var(--black)' : 'var(--g600)', fontWeight: i === 2 ? 600 : 400 }}>
                  <span style={{ width: 20, height: 20, borderRadius: '50%', background: i === 2 ? 'var(--turquoise)' : 'var(--g200)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, flexShrink: 0, color: i === 2 ? 'var(--black)' : 'var(--g600)' }}>{i + 1}</span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="cta-s">
          <div className="cta-s-lbl">Platform</div>
          <h2 className="cta-h2">Explore More Engines</h2>
          <p className="cta-sub">Combine Builder with Connect and Intelligence to ship faster.</p>
          <div className="cta-btns">
            <Link to="/platform/connect" className="btn-hero">Connect</Link>
            <Link to="/platform/intelligence" className="btn-hero-ghost">Intelligence</Link>
          </div>
        </section>
      </ScrollFadeIn>
    </>
  )
}
