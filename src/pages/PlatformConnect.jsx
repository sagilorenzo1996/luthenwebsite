import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

export default function PlatformConnect() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="hero-eyebrow"><span className="hero-eyebrow-dot"></span>Enterprise Autonomy Layer</p>
          <h1>Upgrade Execution.<br/>Not Your Stack.</h1>
          <p className="hero-sub">Deploy intelligent, governed workflows across your existing systems without migration and without disruption.</p>
          <div className="hero-ctas">
            <Link to="/demo" className="btn-hero">
              Schedule a Solution Blueprint
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link to="/demo" className="btn-hero-ghost">See Connect in Action</Link>
          </div>
          <p className="hero-micro">Dedicated onboarding and enterprise governance by default.</p>
          <div className="hero-badges">
            <span className="hero-badge"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 6.5l3 3 7-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> No migration required</span>
            <span className="hero-badge"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 6.5l3 3 7-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> 400+ connectors</span>
            <span className="hero-badge"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 6.5l3 3 7-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> Audit-ready</span>
          </div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.78)', border: '1px solid var(--g100)', borderRadius: 'var(--r-xl)', padding: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--g400)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Live Connect Monitor</div>
            <span className="wf-live">Live</span>
          </div>
          {[
            { name: 'SAP ERP', status: 'connected', latency: '12ms' },
            { name: 'Oracle Fusion', status: 'connected', latency: '8ms' },
            { name: 'Salesforce CRM', status: 'connected', latency: '15ms' },
            { name: 'Workday HCM', status: 'syncing', latency: '--' },
          ].map(conn => (
            <div key={conn.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: 'var(--r-md)', background: '#fff', border: '1px solid var(--g100)', marginBottom: 8 }}>
              <span style={{ fontWeight: 600, fontSize: 13 }}>{conn.name}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: conn.status === 'connected' ? '#16a34a' : 'var(--g400)', fontWeight: 600 }}>{conn.status}</span>
                <span style={{ fontSize: 12, color: 'var(--g400)', fontFamily: 'monospace' }}>{conn.latency}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ScrollFadeIn>
        <section className="tax-s s">
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="s-label">The Problem</div>
            <h2 className="s-h2">The Enterprise AI Tax</h2>
            <p className="s-body">Three structural forces are draining ROI from enterprise AI initiatives before a single workflow ships.</p>
          </div>
          <div className="grid-3">
            {[
              {
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 17L17 3M17 3H9M17 3v8" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                title: 'Migration Tax',
                desc: 'Replacing legacy systems costs millions and takes years, creating execution gaps that compound over time.',
                outcome: 'Avg. $4.2M rip-and-replace cost',
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M13 6l3 4-3 4M7 6L4 10l3 4" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                title: 'Linear AI Cost',
                desc: 'Every external API call costs the same forever, with no compounding efficiency curve.',
                outcome: 'No improvement over 18 months',
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 2L3 13h8l-1 7 9-11h-8l1-7z" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                title: 'Rigidity Tax',
                desc: 'Workflows are brittle and every change requires dev cycles, slowing business execution.',
                outcome: '6-12 week change cycles',
              },
            ].map((c, i) => (
              <div className="card" key={i} style={{ '--i': i }}>
                <div className="card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="card-outcome">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5l3 3 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {c.outcome}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="s" style={{ background: '#fff' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="s-label">Engine 01</div>
              <h2 className="s-h2">Connect</h2>
              <p className="s-body" style={{ marginBottom: 32 }}>Activate your legacy systems without migration. Luthen's Connect engine creates secure, governed integrations that go live in days, not months. No API rewrites, no rip-and-replace.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {['400+ pre-built connectors for enterprise systems', 'Secure, encrypted data channels with zero trust', 'Role-based access control at the connector level', 'Live in days with dedicated implementation support'].map(feat => (
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
                { name: 'Workday HCM', status: 'syncing', latency: '--' },
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

      <ScrollFadeIn>
        <section className="cta-s">
          <div className="cta-s-lbl">Platform</div>
          <h2 className="cta-h2">Explore More Engines</h2>
          <p className="cta-sub">See how Intelligence and Builder complete the autonomy layer.</p>
          <div className="cta-btns">
            <Link to="/platform/intelligence" className="btn-hero">Intelligence</Link>
            <Link to="/platform/builder" className="btn-hero-ghost">Builder</Link>
          </div>
        </section>
      </ScrollFadeIn>
    </>
  )
}
