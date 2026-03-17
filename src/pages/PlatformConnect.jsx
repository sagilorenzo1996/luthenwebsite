import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

export default function PlatformConnect() {
  return (
    <>
      <section className="hero" style={{ background: 'linear-gradient(180deg, #fff 0%, #FCFEF7 100%)', padding: '110px 24px 96px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'left' }}>
          <p className="hero-eyebrow" style={{ marginBottom: 16 }}>
            LUTHEN CONNECT
          </p>
          <h1 style={{ color: 'var(--black)', marginBottom: 20 }}>
            Connect Legacy. Move Nothing.
          </h1>
          <p className="hero-sub" style={{ color: 'rgba(0,0,0,0.58)', maxWidth: 860, marginBottom: 32 }}>
            Activate <span style={{ color: 'var(--turquoise)', fontWeight: 600 }}>ERP</span>,{' '}
            <span style={{ color: 'var(--turquoise)', fontWeight: 600 }}>SQL</span>,{' '}
            <span style={{ color: 'var(--turquoise)', fontWeight: 600 }}>SAP</span>,{' '}
            <span style={{ color: 'var(--turquoise)', fontWeight: 600 }}>Oracle</span>, and{' '}
            line-of-business systems where they live - without rip-and-replace migration.
          </p>
          <div className="hero-ctas">
            <Link to="/demo" className="btn-hero">
              Schedule a Solution Blueprint
            </Link>
            <Link to="/demo" className="btn-hero-ghost" style={{ borderColor: 'rgba(114,203,214,0.6)', background: 'rgba(114,203,214,0.08)' }}>
              Request Architecture Pack
            </Link>
          </div>
        </div>
      </section>

      <ScrollFadeIn>
        <section className="s" style={{ background: 'linear-gradient(180deg, #F9F9F8 0%, #F4FAFB 100%)', padding: '108px 24px' }}>
          <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'left' }}>
            <h2 className="s-h2" style={{ color: 'var(--black)', maxWidth: 820, marginBottom: 22 }}>
              Legacy Is Not the Problem. Inaccessibility Is.
            </h2>
            <p className="s-body" style={{ color: 'rgba(0,0,0,0.58)', maxWidth: 860 }}>
              Most enterprises don't need new systems. They need a consistent way to activate{' '}
              <span style={{ color: 'var(--turquoise)', fontWeight: 600 }}>what</span> already exists - without
              destabilizing <span style={{ color: 'var(--turquoise)', fontWeight: 600 }}>infrastructure</span>.
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="s" style={{ background: '#DCFF9B', padding: '108px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 className="s-h2 center" style={{ color: 'var(--black)', marginBottom: 56 }}>
              How Luthen Connect Activates Legacy
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                <div style={{ border: '1px solid var(--g200)', borderRadius: 'var(--r-lg)', background: '#fff', padding: 20 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--black)', marginBottom: 14 }}>Existing Systems</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {['ERP', 'SQL', 'SAP', 'Oracle', 'CRM'].map(tag => (
                      <span key={tag} style={{ fontSize: 12, color: 'var(--g600)', fontWeight: 600, background: 'var(--g50)', border: '1px solid var(--g200)', borderRadius: 999, padding: '6px 12px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: 'center', fontSize: 22, lineHeight: 1, color: 'var(--g400)', margin: '16px 0' }}>&darr;</div>
                <div style={{ border: '1px solid var(--turquoise)', borderRadius: 'var(--r-lg)', background: 'linear-gradient(180deg, #F8FFFE 0%, #F1FBFC 100%)', padding: 20 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--black)', marginBottom: 12 }}>Semantic Bridge</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {['Entity mapping', 'Relationship interpretation', 'Policy boundaries'].map(item => (
                      <div key={item} style={{ fontSize: 13, color: 'var(--g600)', display: 'flex', gap: 8 }}>
                        <span style={{ color: 'var(--turquoise)', fontWeight: 700 }}>&bull;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: 'center', fontSize: 22, lineHeight: 1, color: 'var(--g400)', margin: '16px 0' }}>&darr;</div>
                <div style={{ border: '1px solid rgba(114,203,214,0.35)', borderRadius: 'var(--r-lg)', background: '#fff', padding: 20 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--black)' }}>AI-Ready & Workflow-Ready Execution</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--black)', marginBottom: 6 }}>Existing Systems</div>
                  <p style={{ margin: 0, color: 'var(--g600)', fontSize: 14, lineHeight: 1.7 }}>
                    Your current infrastructure remains unchanged and operational.
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--black)', marginBottom: 6 }}>Semantic Bridge</div>
                  <p style={{ margin: 0, color: 'var(--g600)', fontSize: 14, lineHeight: 1.7 }}>
                    Creates consistent access patterns and enforces governance without migration.
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--black)', marginBottom: 6 }}>Ready Execution</div>
                  <p style={{ margin: 0, color: 'var(--g600)', fontSize: 14, lineHeight: 1.7 }}>
                    Systems become accessible for governed workflows and intelligent automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="s" style={{ background: '#fff', padding: '104px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 className="s-h2 center" style={{ color: 'var(--black)', marginBottom: 40 }}>
              What Changes After Activation
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 16 }}>
              {[
                ['No Migration Required', 'Modernize incrementally.'],
                ['AI-Ready Data Access', 'Structured and interpretable.'],
                ['Governed Execution', 'Operate inside policy boundaries.'],
                ['Workflow Acceleration', 'Automation across systems.']
              ].map(([title, body]) => (
                <article key={title} style={{ background: '#fff', border: '1px solid rgba(114,203,214,0.35)', borderRadius: 'var(--r-lg)', padding: '24px 20px' }}>
                  <h3 style={{ margin: '0 0 8px', fontSize: 19, lineHeight: 1.35, color: 'var(--black)' }}>{title}</h3>
                  <p style={{ margin: 0, color: 'var(--g600)', fontSize: 15, lineHeight: 1.65 }}>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="s" style={{ background: '#DCFF9B', padding: '104px 24px' }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.03em', color: 'var(--g400)', marginBottom: 20 }}>
                  Before Connect
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, color: 'var(--g400)', fontSize: 19, lineHeight: 1.45 }}>
                  <div>Tickets to IT</div>
                  <div>Manual SQL queries</div>
                  <div>Static dashboards</div>
                  <div>Brittle integrations</div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.03em', color: 'var(--black)', marginBottom: 20 }}>
                  After Connect
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 19, lineHeight: 1.45, fontWeight: 700, color: 'var(--black)' }}>
                  <div>Intent-driven execution</div>
                  <div style={{ color: 'var(--turquoise)' }}>Cross-system workflows</div>
                  <div>Repeatable behavior</div>
                  <div style={{ color: 'var(--turquoise)' }}>Traceable outcomes</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="s" style={{ background: 'linear-gradient(180deg, #F9F9F8 0%, #F3F8F9 100%)', padding: '108px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 className="s-h2 center" style={{ color: 'var(--black)', marginBottom: 52 }}>
              Designed for Enterprise Infrastructure
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 24 }}>
              <div style={{ background: '#fff', border: '1px solid rgba(114,203,214,0.35)', borderRadius: 'var(--r-lg)', padding: 28 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(114,203,214,0.12)', border: '1px solid rgba(114,203,214,0.4)', display: 'grid', placeItems: 'center', marginBottom: 16 }}>
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="6" rx="1.5" stroke="#267A84" strokeWidth="1.5"/>
                    <rect x="4" y="14" width="16" height="6" rx="1.5" stroke="#267A84" strokeWidth="1.5"/>
                    <circle cx="8" cy="7" r="1" fill="#267A84"/>
                    <circle cx="8" cy="17" r="1" fill="#267A84"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 18, lineHeight: 1.35, marginBottom: 8, color: 'var(--black)' }}>On-Prem / Private Cloud</h3>
                <p style={{ margin: 0, color: 'var(--g600)', fontSize: 14, lineHeight: 1.7 }}>Deploy within existing boundaries.</p>
              </div>
              <div style={{ background: '#fff', border: '1px solid rgba(186,219,160,0.7)', borderRadius: 'var(--r-lg)', padding: 28 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(186,219,160,0.2)', border: '1px solid rgba(186,219,160,0.7)', display: 'grid', placeItems: 'center', marginBottom: 16 }}>
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l7 3v5c0 4.5-2.7 7.8-7 10-4.3-2.2-7-5.5-7-10V6l7-3z" stroke="#4E7E37" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M9.5 12.2l1.8 1.8 3.4-3.4" stroke="#4E7E37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 18, lineHeight: 1.35, marginBottom: 8, color: 'var(--black)' }}>Integrates With Existing Identity</h3>
                <p style={{ margin: 0, color: 'var(--g600)', fontSize: 14, lineHeight: 1.7 }}>Works with enterprise SSO and access controls.</p>
              </div>
              <div style={{ background: '#fff', border: '1px solid rgba(206,224,202,0.95)', borderRadius: 'var(--r-lg)', padding: 28 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(206,224,202,0.35)', border: '1px solid rgba(206,224,202,0.95)', display: 'grid', placeItems: 'center', marginBottom: 16 }}>
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
                    <path d="M20 7a8 8 0 0 0-13.66-2.83L4 6.5M4 6.5V3m0 3.5h3.5M4 17a8 8 0 0 0 13.66 2.83L20 17.5M20 17.5V21m0-3.5h-3.5" stroke="#4B6250" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 18, lineHeight: 1.35, marginBottom: 8, color: 'var(--black)' }}>No Rip-and-Replace</h3>
                <p style={{ margin: 0, color: 'var(--g600)', fontSize: 14, lineHeight: 1.7 }}>Gradual rollout possible.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="s" style={{ background: '#fff', padding: '104px 24px' }}>
          <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'left' }}>
            <h2 className="s-h2" style={{ color: 'var(--black)', marginBottom: 28 }}>
              Built for Complex System Environments
            </h2>
            <ul style={{ margin: 0, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 12, color: 'var(--g600)', fontSize: 16, lineHeight: 1.7 }}>
              <li>
                Supports <span style={{ color: 'var(--turquoise)', fontWeight: 600 }}>relational</span> and <span style={{ color: 'var(--turquoise)', fontWeight: 600 }}>enterprise systems</span>
              </li>
              <li>
                <span style={{ color: 'var(--turquoise)', fontWeight: 600 }}>Policy-based</span> access enforcement
              </li>
              <li>
                <span style={{ color: 'var(--turquoise)', fontWeight: 600 }}>Event-capable</span> integration
              </li>
              <li>
                Works alongside existing <span style={{ color: 'var(--turquoise)', fontWeight: 600 }}>CI/CD</span> and <span style={{ color: 'var(--turquoise)', fontWeight: 600 }}>monitoring</span>
              </li>
            </ul>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="s" style={{ background: 'linear-gradient(180deg, #F9F9F8 0%, #F3F8F9 100%)', padding: '108px 24px' }}>
          <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'left' }}>
            <h2 className="s-h2" style={{ color: 'var(--black)', marginBottom: 16 }}>
              Connect Is the Foundation.
            </h2>
            <p className="s-body" style={{ color: 'var(--g600)', maxWidth: 900, marginBottom: 30 }}>
              Connect activates systems. Intelligence applies governed reasoning. Builder ships new capabilities.
              Together, they form the autonomy layer.
            </p>
            <div style={{ border: '1px solid rgba(114,203,214,0.35)', borderRadius: 'var(--r-xl)', background: 'linear-gradient(180deg, #F8FBFB 0%, #F3F8F9 100%)', padding: '18px 16px' }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--g600)', marginBottom: 12 }}>
                Luthen Platform
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <span style={{ padding: '10px 16px', borderRadius: 999, border: '1px solid rgba(114,203,214,0.55)', background: 'rgba(114,203,214,0.25)', color: 'var(--black)', fontSize: 14, fontWeight: 700 }}>
                  Connect
                </span>
                <Link to="/platform/intelligence" style={{ textDecoration: 'none', padding: '10px 16px', borderRadius: 999, border: '1px solid rgba(114,203,214,0.45)', background: '#fff', color: 'var(--black)', fontSize: 14, fontWeight: 600 }}>
                  Intelligence
                </Link>
                <Link to="/platform/builder" style={{ textDecoration: 'none', padding: '10px 16px', borderRadius: 999, border: '1px solid rgba(114,203,214,0.45)', background: '#fff', color: 'var(--black)', fontSize: 14, fontWeight: 600 }}>
                  Builder
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="cta-s" style={{ background: '#fff' }}>
          <h2 className="cta-h2">Activate Your Existing Systems.</h2>
          <p className="cta-sub">Modernize execution without destabilizing your stack.</p>
          <div className="cta-btns">
            <Link to="/demo" className="btn-hero">Schedule a Solution Blueprint</Link>
            <Link to="/platform" className="btn-hero-ghost" style={{ borderColor: 'rgba(114,203,214,0.6)', background: 'rgba(114,203,214,0.08)' }}>Explore the Platform</Link>
          </div>
        </section>
      </ScrollFadeIn>
    </>
  )
}
