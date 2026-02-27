import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

const team = [
  { name: 'Elena Vasquez', role: 'CEO & Co-founder', initials: 'EV', gradient: 'linear-gradient(135deg,var(--turquoise),var(--yellow))', bio: 'Former VP Engineering at SAP. 15 years building enterprise infrastructure.' },
  { name: 'David Chen', role: 'CTO & Co-founder', initials: 'DC', gradient: 'linear-gradient(135deg,var(--yellow),var(--salmon))', bio: 'Previously Staff Engineer at Google Cloud. Led the Platform Intelligence team.' },
  { name: 'Priya Nair', role: 'Chief Revenue Officer', initials: 'PN', gradient: 'linear-gradient(135deg,var(--green),var(--turquoise))', bio: '10 years enterprise sales at ServiceNow and Salesforce. $500M+ in ARR closed.' },
  { name: 'Marcus Webb', role: 'VP Product', initials: 'MW', gradient: 'linear-gradient(135deg,var(--salmon),var(--mint))', bio: 'Product leader at Palantir and Snowflake. Passionate about workflow automation.' },
]

const investors = ['Sequoia Capital', 'Benchmark', 'Kleiner Perkins', 'Andreessen Horowitz', 'General Catalyst']

const milestones = [
  { year: '2022', event: 'Luthen founded. $8M seed round from Sequoia.' },
  { year: '2023', event: 'First 50 enterprise deployments. Series A — $22M.' },
  { year: '2024', event: '500+ enterprise deployments. 99.99% uptime achieved. SOC 2 Type II certified.' },
  { year: '2025', event: '$47M Series B. Expansion into APAC and EMEA markets.' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Company</div>
          <h1>We're building the Enterprise Autonomy Layer.</h1>
          <p className="page-hero-sub">Luthen was founded on a simple belief: enterprises shouldn't have to replace their systems to deploy intelligent workflows. Execution should be upgradeable.</p>
        </div>
      </section>

      {/* Mission */}
      <ScrollFadeIn>
        <section className="s" style={{ background: 'var(--yellow)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <div className="s-label" style={{ justifyContent: 'center' }}>Our Mission</div>
            <h2 className="s-h2">"Upgrade execution. Not your stack."</h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(0,0,0,0.6)', marginTop: 16 }}>
              The world's most complex operations run on decades of institutional infrastructure. We believe that intelligence should flow through those systems — not replace them. Luthen makes that possible at enterprise scale.
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Stats */}
      <div className="stats-strip">
        <div className="stat-item">
          <div className="stat-num">500<em>+</em></div>
          <div className="stat-lbl">Enterprise deployments worldwide</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">47<em>M</em></div>
          <div className="stat-lbl">Series B funding raised in 2025</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">99<em>.99%</em></div>
          <div className="stat-lbl">Platform uptime SLA</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">3<em>+</em></div>
          <div className="stat-lbl">Years of enterprise-grade production</div>
        </div>
      </div>

      {/* Team */}
      <ScrollFadeIn>
        <section className="s" style={{ background: '#fff' }}>
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="s-label">Leadership</div>
            <h2 className="s-h2">The Team</h2>
            <p className="s-body">Built by enterprise infrastructure veterans who've been inside the systems Luthen connects to.</p>
          </div>
          <div className="grid-4">
            {team.map(member => (
              <div className="card" key={member.name}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: member.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, color: 'var(--black)', marginBottom: 16 }}>{member.initials}</div>
                <h3 style={{ marginBottom: 4 }}>{member.name}</h3>
                <div style={{ fontSize: 12.5, color: 'var(--turquoise)', fontWeight: 600, marginBottom: 10 }}>{member.role}</div>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--g600)' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* Timeline */}
      <ScrollFadeIn>
        <section className="s" style={{ background: 'var(--g50)' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div className="center" style={{ marginBottom: 52 }}>
              <div className="s-label">History</div>
              <h2 className="s-h2">Our Journey</h2>
            </div>
            {milestones.map((m, i) => (
              <div key={m.year} style={{ display: 'flex', gap: 28, paddingBottom: i < milestones.length - 1 ? 32 : 0, position: 'relative' }}>
                <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--black)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, color: '#fff', flexShrink: 0 }}>{m.year}</div>
                  {i < milestones.length - 1 && <div style={{ width: 1, flex: 1, background: 'var(--g200)', marginTop: 8 }}></div>}
                </div>
                <div style={{ paddingTop: 10, paddingBottom: 24 }}>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--g600)' }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* Investors */}
      <ScrollFadeIn>
        <section className="s" style={{ background: '#fff' }}>
          <div className="center" style={{ marginBottom: 40 }}>
            <div className="s-label">Backers</div>
            <h2 className="s-h2">Backed by the best.</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, maxWidth: 760, margin: '0 auto' }}>
            {investors.map(inv => (
              <span key={inv} style={{ padding: '10px 22px', borderRadius: 100, border: '1px solid var(--g200)', fontSize: 14, fontWeight: 700, color: 'var(--g600)' }}>{inv}</span>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* Security */}
      <ScrollFadeIn>
        <section id="security" className="s" style={{ background: 'var(--yellow)' }}>
          <div className="center" style={{ marginBottom: 48 }}>
            <div className="s-label">Security</div>
            <h2 className="s-h2">Enterprise-grade security by design.</h2>
            <p className="s-body">Security and compliance are built into Luthen's architecture — not bolted on afterward.</p>
          </div>
          <div className="grid-4">
            {[
              { cert: 'SOC 2 Type II', desc: 'Annual third-party audit of security controls.' },
              { cert: 'ISO 27001', desc: 'Information security management system certified.' },
              { cert: 'GDPR Ready', desc: 'Data residency and processing controls for EU compliance.' },
              { cert: '99.99% SLA', desc: 'Contractual uptime guarantee with financial penalties.' },
            ].map(item => (
              <div className="card" key={item.cert} style={{ background: 'rgba(255,255,255,0.55)', borderColor: 'rgba(0,0,0,0.07)' }}>
                <div className="card-icon" style={{ background: 'rgba(255,255,255,0.6)' }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5L4 4.5v4.5c0 4 2.5 7 5 8 2.5-1 5-4 5-8V4.5L9 1.5z" stroke="#0A0A0F" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                </div>
                <h3>{item.cert}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* Careers */}
      <ScrollFadeIn>
        <section id="careers" className="cta-s">
          <div className="cta-s-lbl">Careers</div>
          <h2 className="cta-h2">Join the team.</h2>
          <p className="cta-sub">We're hiring engineers, product managers, and enterprise sales leaders who believe in autonomous enterprise.</p>
          <div className="cta-btns">
            <a href="#" className="btn-hero">View Open Roles <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            <Link to="/contact" className="btn-hero-ghost">Get in Touch</Link>
          </div>
        </section>
      </ScrollFadeIn>
    </>
  )
}
