import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

export default function PlatformBuilder() {
  return (
    <>
      <section style={{ background: '#DCFF9B', padding: 'clamp(72px,10vw,110px) clamp(20px,4vw,40px) clamp(64px,8vw,96px)' }}>
        <div style={{ maxWidth: 880 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.42)', marginBottom: 20 }}>
            LUTHEN BUILDER
          </div>
          <h1 style={{ fontSize: 'clamp(38px,5vw,64px)', fontWeight: 700, lineHeight: 1.04, letterSpacing: '-2.4px', color: 'var(--black)', marginBottom: 20 }}>
            Turn Intent Into Production Workflows.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'rgba(0,0,0,0.58)', maxWidth: 860, fontWeight: 400, marginBottom: 34 }}>
            Luthen Builder converts structured intent into enterprise-grade modules with validation, approvals, and controlled deployment.
          </p>
          <div className="hero-ctas" style={{ marginBottom: 0 }}>
            <Link to="/contact" className="btn-hero" style={{ borderRadius: 999 }}>
              Request Architecture Pack
            </Link>
            <Link to="/demo" className="btn-hero-ghost" style={{ borderRadius: 999 }}>
              Schedule a Solution Blueprint
            </Link>
          </div>
        </div>
      </section>

      <ScrollFadeIn>
        <section style={{ background: '#DCFF9B', padding: 'clamp(72px,10vw,112px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 980 }}>
            <h2 style={{ fontSize: 'clamp(34px,4.2vw,56px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-2px', color: 'var(--black)', marginBottom: 22 }}>
              Shipping Is Easy. Maintaining Coherence Is Hard.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.72, color: 'rgba(0,0,0,0.58)', maxWidth: 900, margin: 0 }}>
              AI can generate endpoints. The real challenge is ensuring consistency across lifecycle rules, policies, audit trails, and deployment standards. Builder enforces that structure.
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: '#fff', padding: 'clamp(72px,10vw,108px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-1.8px', color: 'var(--black)', marginBottom: 30, textAlign: 'center' }}>
              From Intent to Governed Execution.
            </h2>
            <div style={{ display: 'flex', alignItems: 'stretch', gap: 10, overflowX: 'auto', paddingBottom: 4 }}>
              {[
                ['1', 'Intake', 'Structured story or requirement.'],
                ['2', 'Analyze', 'Detect dependencies and constraints.'],
                ['3', 'Generate', 'Create backend entities, UI schemas, workflow definitions.'],
                ['4', 'Validate', 'Apply lifecycle rules and automated checks.'],
                ['5', 'Approve', 'Human gate before deployment.'],
                ['6', 'Deploy', 'Controlled release with rollback capability.']
              ].map(([index, title, body], i, arr) => (
                <div key={title} style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto' }}>
                  <article
                    style={{
                      minWidth: 182,
                      maxWidth: 200,
                      background: title === 'Generate' ? 'rgba(114,203,214,0.12)' : '#fff',
                      border: title === 'Generate' ? '1px solid rgba(114,203,214,0.5)' : '1px solid var(--g100)',
                      borderRadius: 'var(--r-lg)',
                      padding: '16px 14px',
                      boxShadow: title === 'Generate' ? 'var(--sh-md)' : 'none',
                      transform: title === 'Generate' ? 'translateY(-4px)' : 'none'
                    }}
                  >
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--g400)', marginBottom: 7 }}>{index}</div>
                    <h3 style={{ margin: '0 0 7px', fontSize: 17, fontWeight: 700, letterSpacing: '-0.4px', color: 'var(--black)' }}>{title}</h3>
                    <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: 'rgba(0,0,0,0.58)' }}>{body}</p>
                  </article>
                  {i < arr.length - 1 && (
                    <span style={{ color: 'var(--g400)', fontSize: 22, fontWeight: 600, margin: '0 8px' }}>&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: 'var(--g50)', padding: 'clamp(72px,10vw,108px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-1.8px', color: 'var(--black)', marginBottom: 28, textAlign: 'center' }}>
              Consistency at Scale.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
              {[
                ['Lifecycle Consistency', 'Every entity follows the same governance rules.'],
                ['Reduced Architectural Drift', 'Avoid inconsistent patterns across teams.'],
                ['Faster Internal Delivery', 'Ship workflows without reinventing infrastructure.']
              ].map(([title, body]) => (
                <article key={title} style={{ background: '#fff', border: '1px solid var(--g100)', borderRadius: 'var(--r-xl)', padding: '24px 22px' }}>
                  <h3 style={{ margin: '0 0 8px', fontSize: 22, lineHeight: 1.35, color: 'var(--black)' }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.68, color: 'rgba(0,0,0,0.58)' }}>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: '#fff', padding: 'clamp(72px,10vw,108px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-1.8px', color: 'var(--black)', marginBottom: 30, textAlign: 'center' }}>
              Built-In Control. Not Bolted-On Control.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
              <article style={{ background: '#fff', border: '1px solid var(--g100)', borderRadius: 'var(--r-xl)', padding: '24px 22px' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ marginBottom: 12 }}><rect x="3" y="3" width="16" height="16" rx="3" stroke="#0A0A0F" strokeWidth="1.5"/><path d="m7.2 11.3 2.3 2.3 5.3-5.5" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <h3 style={{ margin: '0 0 8px', fontSize: 20, color: 'var(--black)' }}>Approval Gates</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'rgba(0,0,0,0.58)' }}>Human checkpoints before production.</p>
              </article>
              <article style={{ background: '#fff', border: '1px solid var(--g100)', borderRadius: 'var(--r-xl)', padding: '24px 22px' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ marginBottom: 12 }}><path d="M11 3.1 17.5 5.7v5c0 4.1-2.5 6.6-6.5 9.2-4-2.6-6.5-5.1-6.5-9.2v-5L11 3.1Z" stroke="#0A0A0F" strokeWidth="1.5" strokeLinejoin="round"/><path d="m8.1 11.1 2.1 2.1 3.8-4" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <h3 style={{ margin: '0 0 8px', fontSize: 20, color: 'var(--black)' }}>Policy Enforcement</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'rgba(0,0,0,0.58)' }}>Rules applied at generation time.</p>
              </article>
              <article style={{ background: '#fff', border: '1px solid var(--g100)', borderRadius: 'var(--r-xl)', padding: '24px 22px' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ marginBottom: 12 }}><path d="M6 3.5h8l3 3v12H6z" stroke="#0A0A0F" strokeWidth="1.5" strokeLinejoin="round"/><path d="M14 3.5v3h3M8.5 11h5M8.5 14h5" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <h3 style={{ margin: '0 0 8px', fontSize: 20, color: 'var(--black)' }}>Audit Logging</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'rgba(0,0,0,0.58)' }}>Complete trail of changes and approvals.</p>
              </article>
              <article style={{ background: '#fff', border: '1px solid var(--g100)', borderRadius: 'var(--r-xl)', padding: '24px 22px' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ marginBottom: 12 }}><path d="M9 6 4.5 10.5 9 15" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.2 10.5h6.3c3.3 0 6 2.7 6 6" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <h3 style={{ margin: '0 0 8px', fontSize: 20, color: 'var(--black)' }}>Rollback Capability</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'rgba(0,0,0,0.58)' }}>Safe reversion when needed.</p>
              </article>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: '#DCFF9B', padding: 'clamp(72px,10vw,104px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-1.8px', color: 'var(--black)', marginBottom: 28, textAlign: 'center' }}>
              Not a Low-Code Toy.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
              {[
                'Not uncontrolled AI code generation',
                'Not free-form scripting',
                'Not rapid prototypes that collapse in year two'
              ].map(item => (
                <article key={item} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.12)', borderRadius: 'var(--r-lg)', padding: '20px 18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 20, height: 20, borderRadius: 999, border: '1px solid rgba(0,0,0,0.24)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M1 1 9 9M9 1 1 9" stroke="rgba(0,0,0,0.62)" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </span>
                    <p style={{ margin: 0, fontSize: 16, lineHeight: 1.45, color: 'rgba(0,0,0,0.56)', fontWeight: 500 }}>
                      {item}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: '#fff', padding: 'clamp(72px,10vw,108px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 900 }}>
            <h2 style={{ fontSize: 'clamp(32px,4vw,50px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-1.6px', color: 'var(--black)', margin: '0 0 24px' }}>
              Builder Is One Engine of the Autonomy Layer
            </h2>
            <div style={{ maxWidth: 620, border: '1px solid rgba(114,203,214,0.35)', borderRadius: 'var(--r-xl)', background: 'linear-gradient(180deg, #F8FBFB 0%, #F3F8F9 100%)', padding: '18px 16px', marginBottom: 18 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--g600)', marginBottom: 12 }}>
                Luthen Platform
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                <Link to="/platform/connect" style={{ textDecoration: 'none', padding: '10px 16px', borderRadius: 999, border: '1px solid rgba(114,203,214,0.45)', background: '#fff', color: 'var(--black)', fontSize: 14, fontWeight: 600 }}>
                  Connect
                </Link>
                <Link to="/platform/intelligence" style={{ textDecoration: 'none', padding: '10px 16px', borderRadius: 999, border: '1px solid rgba(114,203,214,0.45)', background: '#fff', color: 'var(--black)', fontSize: 14, fontWeight: 600 }}>
                  Intelligence
                </Link>
                <span style={{ padding: '10px 16px', borderRadius: 999, border: '1px solid rgba(114,203,214,0.55)', background: 'rgba(114,203,214,0.25)', color: 'var(--black)', fontSize: 14, fontWeight: 700 }}>
                  Builder
                </span>
              </div>
            </div>
            <p style={{ margin: 0, maxWidth: 760, fontSize: 17, lineHeight: 1.7, color: 'var(--g600)' }}>
              Connect activates systems. Intelligence governs reasoning. Builder generates new capabilities inside the same consistent lifecycle.
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: 'linear-gradient(180deg, #F9F9F8 0%, #F3F8F9 100%)', padding: 'clamp(72px,10vw,108px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(32px,4vw,50px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-1.6px', color: 'var(--black)', margin: '0 0 28px', textAlign: 'center' }}>
              What You Can Build.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
              {[
                ['Supply Chain Workflow', 'Detect delays \u2192 route approvals \u2192 trigger actions.'],
                ['Finance Automation', 'Invoice ingestion \u2192 policy routing \u2192 audit-ready trail.'],
                ['Internal Operations Tool', 'Custom entity \u2192 role-based UI \u2192 governed workflow.']
              ].map(([title, body]) => (
                <article key={title} style={{ background: '#fff', border: '1px solid rgba(114,203,214,0.35)', borderRadius: 'var(--r-xl)', boxShadow: '0 10px 20px rgba(0,0,0,0.04)', padding: '24px 22px' }}>
                  <h3 style={{ margin: '0 0 8px', fontSize: 22, fontWeight: 700, lineHeight: 1.3, color: 'var(--black)' }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: 'var(--g600)' }}>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: '#fff', padding: 'clamp(76px,10vw,120px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(34px,4.2vw,54px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-1.8px', color: 'var(--black)', margin: '0 0 14px' }}>
              Ship Faster. Stay Structured.
            </h2>
            <p style={{ margin: '0 0 30px', fontSize: 18, lineHeight: 1.65, color: 'rgba(0,0,0,0.58)' }}>
              Upgrade delivery without sacrificing governance.
            </p>
            <div className="hero-ctas" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn-hero" style={{ borderRadius: 999 }}>
                Request Architecture Pack
              </Link>
              <Link to="/platform" className="btn-hero-ghost" style={{ borderRadius: 999, borderColor: 'rgba(114,203,214,0.6)', background: 'rgba(114,203,214,0.08)' }}>
                Explore the Platform
              </Link>
            </div>
          </div>
        </section>
      </ScrollFadeIn>


    </>
  )
}
