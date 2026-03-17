import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

export default function PlatformIntelligence() {
  return (
    <>
      <section style={{ background: 'linear-gradient(180deg, #fff 0%, #FCFEF7 100%)', padding: 'clamp(72px,10vw,110px) clamp(20px,4vw,40px) clamp(64px,8vw,96px)' }}>
        <div style={{ maxWidth: 860 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g600)', marginBottom: 20 }}>
            LUTHEN INTELLIGENCE
          </div>
          <h1 style={{ fontSize: 'clamp(38px,5vw,64px)', fontWeight: 700, lineHeight: 1.04, letterSpacing: '-2.4px', color: 'var(--black)', marginBottom: 20 }}>
            Intelligence That Improves Over Time.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'rgba(0,0,0,0.58)', maxWidth: 860, fontWeight: 400, marginBottom: 34 }}>
            Apply governed reasoning to enterprise workflows while reducing repeated external dependency and improving execution reliability.
          </p>
          <div className="hero-ctas" style={{ marginBottom: 0 }}>
            <Link to="/demo" className="btn-hero" style={{ borderRadius: 999 }}>
              Schedule a Solution Blueprint
            </Link>
            <Link to="/contact" className="btn-hero-ghost" style={{ borderRadius: 999, borderColor: 'rgba(114,203,214,0.6)', background: 'rgba(114,203,214,0.08)' }}>
              Request Architecture Pack
            </Link>
          </div>
        </div>
      </section>

      <ScrollFadeIn>
        <section style={{ background: 'linear-gradient(180deg, #F9F9F8 0%, #F4FAFB 100%)', padding: 'clamp(72px,10vw,112px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 980 }}>
            <h2 style={{ fontSize: 'clamp(34px,4.2vw,56px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-2px', color: 'var(--black)', marginBottom: 22 }}>
              Intelligence With Boundaries.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.72, color: 'rgba(0,0,0,0.58)', maxWidth: 900, margin: 0 }}>
              Most AI systems increase risk and cost as usage grows. Luthen Intelligence operates inside policy-defined boundaries - improving consistency while reducing repeated external model dependency.
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: '#DCFF9B', padding: 'clamp(72px,10vw,112px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(34px,4.2vw,54px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-2px', color: 'var(--black)', marginBottom: 28, textAlign: 'center' }}>
              Escape the Linear AI Cost Curve.
            </h2>

            <div style={{ background: 'linear-gradient(180deg, #FAFBF8 0%, #F4FAFB 100%)', border: '1px solid rgba(114,203,214,0.35)', borderRadius: 'var(--r-xl)', padding: 'clamp(18px,3vw,30px)' }}>
              <svg viewBox="0 0 760 420" width="100%" role="img" aria-label="Cost over usage chart comparing linear external model cost growth versus declining marginal cost over time">
                <line x1="110" y1="60" x2="110" y2="320" stroke="rgba(0,0,0,0.42)" strokeWidth="1.5" />
                <line x1="110" y1="320" x2="680" y2="320" stroke="rgba(0,0,0,0.42)" strokeWidth="1.5" />

                {[0, 150, 300, 450, 600].map((tick, index) => {
                  const y = 320 - index * 65
                  return (
                    <g key={`y-${tick}`}>
                      <line x1="110" y1={y} x2="680" y2={y} stroke="rgba(114,203,214,0.28)" strokeWidth="1" />
                      <text x="95" y={y + 5} textAnchor="end" fontSize="13" fill="rgba(0,0,0,0.52)">{tick}</text>
                    </g>
                  )
                })}

                {[0, 1, 2, 3, 4, 5].map((tick, index) => {
                  const x = 110 + index * 114
                  return (
                    <g key={`x-${tick}`}>
                      <line x1={x} y1="320" x2={x} y2="326" stroke="rgba(0,0,0,0.45)" strokeWidth="1" />
                      <text x={x} y="346" textAnchor="middle" fontSize="13" fill="rgba(0,0,0,0.52)">{tick}</text>
                    </g>
                  )
                })}

                <text x="36" y="190" transform="rotate(-90 36 190)" textAnchor="middle" fontSize="14" fontWeight="600" fill="rgba(0,0,0,0.62)">Cost</text>
                <text x="395" y="382" textAnchor="middle" fontSize="14" fontWeight="600" fill="rgba(0,0,0,0.62)">Usage Over Time</text>

                <polyline
                  points="110,320 224,268 338,216 452,164 566,112 680,60"
                  fill="none"
                  stroke="rgba(0,0,0,0.4)"
                  strokeWidth="2"
                />
                <polyline
                  points="110,320 224,281 338,246 452,218 566,197 680,179"
                  fill="none"
                  stroke="var(--black)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 26, flexWrap: 'wrap', marginTop: 6 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(0,0,0,0.52)', fontSize: 13 }}>
                  <span style={{ width: 26, height: 2, background: 'rgba(0,0,0,0.4)', display: 'inline-block' }}></span>
                  Linear external model cost growth
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--black)', fontSize: 14, fontWeight: 700 }}>
                  <span style={{ width: 26, height: 5, borderRadius: 5, background: 'var(--black)', display: 'inline-block' }}></span>
                  Declining marginal cost over time
                </div>
              </div>
            </div>

            <p style={{ textAlign: 'center', margin: '20px auto 0', maxWidth: 860, fontSize: 16, lineHeight: 1.68, color: 'rgba(0,0,0,0.55)' }}>
              First execution may require external reasoning. Repeated workflows internalize patterns, reducing dependency and improving cost efficiency over time.
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: 'var(--g50)', padding: 'clamp(64px,9vw,96px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 18 }}>
            <article style={{ background: '#fff', border: '1px solid rgba(114,203,214,0.35)', borderRadius: 'var(--r-xl)', padding: '26px 24px 24px' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(114,203,214,0.12)', border: '1px solid rgba(114,203,214,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 2.2 15.9 4.6v4.6c0 3.8-2.3 6.1-5.9 8.6-3.6-2.5-5.9-4.8-5.9-8.6V4.6L10 2.2Z" stroke="#267A84" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="m7.2 10.1 2 2 3.6-3.8" stroke="#267A84" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--black)', marginBottom: 10 }}>Governed Reasoning</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: 'rgba(0,0,0,0.58)', margin: 0 }}>
                Operate inside defined contracts and policy boundaries.
              </p>
            </article>

            <article style={{ background: '#fff', border: '1px solid rgba(186,219,160,0.65)', borderRadius: 'var(--r-xl)', padding: '26px 24px 24px' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(186,219,160,0.2)', border: '1px solid rgba(186,219,160,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M6 4.8h8.4l-2-2" stroke="#4E7E37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 15.2H5.6l2 2" stroke="#4E7E37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.4 4.8A5.4 5.4 0 0 1 16 8.6" stroke="#4E7E37" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M5.6 15.2A5.4 5.4 0 0 1 4 11.4" stroke="#4E7E37" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--black)', marginBottom: 10 }}>Intent Reuse</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: 'rgba(0,0,0,0.58)', margin: 0 }}>
                Reuse workflow patterns instead of re-calling external models.
              </p>
            </article>

            <article style={{ background: '#fff', border: '1px solid rgba(206,224,202,0.9)', borderRadius: 'var(--r-xl)', padding: '26px 24px 24px' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(206,224,202,0.35)', border: '1px solid rgba(206,224,202,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="7.2" stroke="#4B6250" strokeWidth="1.5" />
                  <path d="m6.7 10.2 2.1 2.1 4.4-4.6" stroke="#4B6250" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--black)', marginBottom: 10 }}>Reliable Execution</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: 'rgba(0,0,0,0.58)', margin: 0 }}>
                Agents operate through safe tools and contracts - not unrestricted access.
              </p>
            </article>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: '#fff', padding: 'clamp(72px,10vw,112px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 980 }}>
            <h2 style={{ fontSize: 'clamp(34px,4.2vw,56px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-2px', color: 'var(--black)', marginBottom: 34 }}>
              From AI Experimentation to AI Infrastructure.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {[
                'Reduced model spend volatility',
                'Increased execution consistency',
                'Improved auditability',
                'Safer automation expansion'
              ].map(item => (
                <div key={item} style={{ borderLeft: '3px solid rgba(114,203,214,0.7)', padding: '10px 0 10px 18px' }}>
                  <p style={{ margin: 0, fontSize: 28, lineHeight: 1.28, letterSpacing: '-0.8px', fontWeight: 700, color: 'var(--black)' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: '#DCFF9B', padding: 'clamp(72px,10vw,104px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-1.8px', color: 'var(--black)', marginBottom: 28, textAlign: 'center' }}>
              What Luthen Intelligence Is Not.
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
              {[
                'Not uncontrolled AI agents',
                'Not unrestricted model access',
                'Not prompt engineering workflows'
              ].map(item => (
                <article key={item} style={{ background: '#fff', border: '1px solid rgba(246,152,117,0.35)', borderRadius: 'var(--r-lg)', padding: '20px 18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 20, height: 20, borderRadius: 999, border: '1px solid rgba(246,152,117,0.7)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: 'rgba(246,152,117,0.1)' }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M1 1 9 9M9 1 1 9" stroke="rgba(186,73,37,0.92)" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </span>
                    <p style={{ margin: 0, fontSize: 16, lineHeight: 1.45, color: 'rgba(0,0,0,0.56)', fontWeight: 500 }}>
                      {item}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p style={{ textAlign: 'center', margin: '18px auto 0', fontSize: 16, lineHeight: 1.65, maxWidth: 860, color: 'rgba(0,0,0,0.55)' }}>
              Luthen applies intelligence inside deterministic rails and governance controls.
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: '#fff', padding: 'clamp(72px,10vw,108px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 980 }}>
            <h2 style={{ fontSize: 'clamp(34px,4.2vw,54px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-1.9px', color: 'var(--black)', marginBottom: 24 }}>
              Intelligence Is One Engine of the Platform.
            </h2>

            <div style={{ border: '1px solid rgba(114,203,214,0.35)', borderRadius: 'var(--r-xl)', background: 'linear-gradient(180deg, #F8FBFB 0%, #F3F8F9 100%)', padding: '18px 16px' }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.45)', marginBottom: 12 }}>
                Luthen Platform
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link to="/platform/connect" style={{ textDecoration: 'none', padding: '10px 16px', borderRadius: 999, border: '1px solid rgba(114,203,214,0.45)', background: '#fff', color: 'var(--black)', fontSize: 14, fontWeight: 600 }}>
                  Connect
                </Link>
                <span style={{ padding: '10px 16px', borderRadius: 999, border: '1px solid rgba(114,203,214,0.55)', background: 'rgba(114,203,214,0.25)', color: 'var(--black)', fontSize: 14, fontWeight: 700 }}>
                  Intelligence
                </span>
                <Link to="/platform/builder" style={{ textDecoration: 'none', padding: '10px 16px', borderRadius: 999, border: '1px solid rgba(114,203,214,0.45)', background: '#fff', color: 'var(--black)', fontSize: 14, fontWeight: 600 }}>
                  Builder
                </Link>
              </div>
            </div>

            <p style={{ fontSize: 17, lineHeight: 1.72, color: 'rgba(0,0,0,0.56)', maxWidth: 920, margin: '20px 0 0' }}>
              Connect activates systems. Intelligence applies governed reasoning. Builder generates capabilities. Together, they form the autonomy layer.
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: '#DCFF9B', padding: 'clamp(72px,10vw,108px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-1.8px', color: 'var(--black)', marginBottom: 28, textAlign: 'center' }}>
              Designed for Enterprise Governance.
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              {[
                ['Policy Enforcement', 'Rules enforced at execution level.'],
                ['Field-Level Controls', 'Granular permissions and boundaries.'],
                ['Approval Gates', 'Human-in-loop checkpoints.'],
                ['Traceable Actions', 'Complete audit trail of decisions.']
              ].map(([title, body]) => (
                <article key={title} style={{ background: '#fff', border: '1px solid rgba(114,203,214,0.32)', borderRadius: 'var(--r-xl)', padding: '22px 20px' }}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--black)', marginBottom: 8 }}>
                    {title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: 'rgba(0,0,0,0.58)' }}>
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: '#fff', padding: 'clamp(72px,10vw,112px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 920, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(34px,4.2vw,56px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-2px', color: 'var(--black)', marginBottom: 16 }}>
              Improve Your AI Cost Curve.
            </h2>
            <p style={{ margin: '0 auto 28px', maxWidth: 760, fontSize: 17, lineHeight: 1.7, color: 'rgba(0,0,0,0.56)' }}>
              Move from experimental AI usage to governed, compounding intelligence.
            </p>
            <div className="hero-ctas" style={{ justifyContent: 'center', marginBottom: 0 }}>
              <Link to="/demo" className="btn-hero" style={{ borderRadius: 999 }}>
                Schedule a Solution Blueprint
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
