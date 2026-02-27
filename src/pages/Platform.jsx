import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

export default function Platform() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Platform</div>
          <h1>One Platform.<br/>Three Engines.</h1>
          <p className="page-hero-sub">Connect, intelligent, and build across your enterprise — without replacing a single system.</p>
        </div>
      </section>

      {/* ── CONNECT ── */}
      <ScrollFadeIn>
        <section id="connect" className="s" style={{ background: '#fff' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="s-label">Engine 01</div>
              <h2 className="s-h2">Connect</h2>
              <p className="s-body" style={{ marginBottom: 32 }}>Activate your legacy systems without migration. Luthen's Connect engine creates secure, governed integrations that go live in days — not months. No API rewrites, no rip-and-replace.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {['200+ pre-built connectors for enterprise systems','Secure, encrypted data channels with zero trust','Role-based access control at the connector level','Live in days with dedicated implementation support'].map(feat => (
                  <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 500, color: 'var(--g600)' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l3.5 3.5 7.5-7" stroke="var(--turquoise)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {feat}
                  </div>
                ))}
              </div>
              <Link to="/demo" className="btn-hero">Request a Connect Demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
            <div style={{ background: 'var(--g50)', borderRadius: 'var(--r-xl)', padding: 36, border: '1px solid var(--g100)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div className="card-icon icon-blue" style={{ margin: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="2.5" stroke="#3b82f6" strokeWidth="1.5"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.34 4.34l1.41 1.41M14.25 14.25l1.41 1.41M4.34 15.66l1.41-1.41M14.25 5.75l1.41-1.41" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Active Connections</span>
              </div>
              {[
                { name: 'SAP ERP', status: 'connected', latency: '12ms' },
                { name: 'Oracle Fusion', status: 'connected', latency: '8ms' },
                { name: 'Salesforce CRM', status: 'connected', latency: '15ms' },
                { name: 'Workday HCM', status: 'syncing', latency: '—' },
              ].map(conn => (
                <div key={conn.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: 'var(--r-md)', background: '#fff', border: '1px solid var(--g100)', marginBottom: 8 }}>
                  <span style={{ fontWeight: 600, fontSize: 13.5 }}>{conn.name}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 12, color: conn.status === 'connected' ? '#16a34a' : 'var(--g400)', fontWeight: 600 }}>{conn.status}</span>
                    <span style={{ fontSize: 12, color: 'var(--g400)', fontFamily: 'monospace' }}>{conn.latency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── INTELLIGENCE ── */}
      <ScrollFadeIn>
        <section id="intelligence" className="s" style={{ background: 'var(--yellow)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div style={{ background: 'rgba(255,255,255,0.65)', borderRadius: 'var(--r-xl)', padding: 36, border: '1px solid rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)' }}>
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--g400)', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Cost Efficiency Over Time</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-2px', color: '#16a34a' }}>−40%</span>
                  <span style={{ fontSize: 14, color: 'var(--g600)' }}>at month 12</span>
                </div>
              </div>
              <div style={{ height: 4, borderRadius: 2, background: 'var(--g100)', marginBottom: 8, overflow: 'hidden' }}>
                <div style={{ width: '60%', height: '100%', background: 'linear-gradient(90deg, #2563eb, #16a34a)', borderRadius: 2 }}></div>
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--g600)' }}>Marginal cost curve improving as patterns internalize</div>
            </div>
            <div>
              <div className="s-label">Engine 02</div>
              <h2 className="s-h2">Intelligence</h2>
              <p className="s-body" style={{ marginBottom: 32 }}>Governed AI reasoning with an improving cost curve. Unlike per-call API pricing, Luthen's Intelligence engine internalizes your patterns — making every workflow cheaper as it runs.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {['Governed AI with enterprise-grade auditability','Pattern internalization reduces marginal cost over time','Works with Claude, GPT-4, Gemini, and private models','Full inference explainability and decision logs'].map(feat => (
                  <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 500, color: 'var(--g600)' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l3.5 3.5 7.5-7" stroke="#0A0A0F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {feat}
                  </div>
                ))}
              </div>
              <Link to="/demo" className="btn-hero">Explore Intelligence Engine
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── BUILDER ── */}
      <ScrollFadeIn>
        <section id="builder" className="s" style={{ background: 'var(--g50)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="s-label">Engine 03</div>
              <h2 className="s-h2">Builder</h2>
              <p className="s-body" style={{ marginBottom: 32 }}>Turn intent into production workflows. Luthen's Builder engine lets your team design, test, and deploy complex workflows — without writing infrastructure code or waiting on engineering cycles.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {['Visual workflow designer with drag-and-drop simplicity','Instant testing against live or sandbox environments','One-click production deployment with governance checks','Version control and rollback for every workflow'].map(feat => (
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
                <span style={{ fontSize: 13, fontWeight: 600 }}>PO_APPROVAL_v3 — Draft</span>
              </div>
              {['Trigger: Invoice received via email','Extract: Vendor, amount, line items','Route: Amount > $10k → Manager approval','Execute: Post to Oracle ERP','Notify: Slack + audit log entry'].map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 'var(--r-md)', background: i === 2 ? 'rgba(114,203,214,0.12)' : 'var(--g50)', border: `1px solid ${i === 2 ? 'rgba(114,203,214,0.3)' : 'transparent'}`, marginBottom: 6, fontSize: 12.5, fontFamily: 'Courier New, monospace', color: i === 2 ? 'var(--black)' : 'var(--g600)', fontWeight: i === 2 ? 600 : 400 }}>
                  <span style={{ width: 20, height: 20, borderRadius: '50%', background: i === 2 ? 'var(--turquoise)' : 'var(--g200)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, flexShrink: 0, color: i === 2 ? 'var(--black)' : 'var(--g600)' }}>{i + 1}</span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── CTA ── */}
      <ScrollFadeIn>
        <section className="cta-s">
          <div className="cta-s-lbl">Get Started</div>
          <h2 className="cta-h2">Start Building.</h2>
          <p className="cta-sub">See the full platform in action with a personalized demo for your team.</p>
          <div className="cta-btns">
            <Link to="/demo" className="btn-hero">Request a Platform Demo <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></Link>
            <Link to="/pricing" className="btn-hero-ghost">View Pricing</Link>
          </div>
        </section>
      </ScrollFadeIn>
    </>
  )
}
