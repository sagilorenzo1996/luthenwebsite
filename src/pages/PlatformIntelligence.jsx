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
            Luthen Intelligence: Self-Improving Conversational Layer
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'rgba(0,0,0,0.58)', maxWidth: 860, fontWeight: 400, marginBottom: 34 }}>
            Talk to your enterprise data in plain English — get instant insights that get faster and cheaper every day.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'rgba(0,0,0,0.58)', maxWidth: 860, fontWeight: 400, marginBottom: 34 }}>
            Natural-language questions. Self-improving answers. Governed from the start. No more building endless dashboards — just ask, understand, and act.
          </p>
          <div className="hero-ctas" style={{ marginBottom: 0 }}>
            <Link to="/get-started" className="btn-hero" style={{ borderRadius: 999 }}>
              Get Started
            </Link>
            <Link to="/contact" className="btn-hero-ghost" style={{ borderRadius: 999, borderColor: 'rgba(114,203,214,0.6)', background: 'rgba(114,203,214,0.08)' }}>
              Request Live Demo
            </Link>
            <Link to="/demo" className="btn-hero-ghost" style={{ borderRadius: 999, borderColor: 'rgba(114,203,214,0.6)', background: 'rgba(114,203,214,0.08)' }}>
              See It in Action
            </Link>
          </div>
        </div>
      </section>

      <ScrollFadeIn>
        <section style={{ background: 'linear-gradient(180deg, #F9F9F8 0%, #F4FAFB 100%)', padding: 'clamp(72px,10vw,112px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(34px,4.2vw,56px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-2px', color: 'var(--black)', marginBottom: 22 }}>
              What Luthen Intelligence Delivers
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.72, color: 'rgba(0,0,0,0.58)', maxWidth: 900, margin: '0 auto' }}>
              Ask business questions naturally and receive accurate, visual, governed responses — powered by a system that learns from every interaction:
            </p>

            <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
              {[
                'Plain-English answers with visual summaries built for business users.',
                'Self-improving response caching that reuses proven patterns and context.',
                'Lower AI operating costs over time by reducing repetitive model calls.',
                'Human-in-the-loop governance with approvals for sensitive actions.',
                'Strict access and policy controls enforced at query and execution time.',
                'Full traceability of every question, answer, source, and decision path.',
                'Seamless embedding into dashboards, portals, and existing enterprise workflows.'
              ].map((item, index) => (
                <article
                  key={item}
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(114,203,214,0.34)',
                    borderRadius: 'var(--r-lg)',
                    padding: '18px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: 10,
                    gridColumn: index === 6 ? '1 / -1' : 'auto',
                    maxWidth: index === 6 ? 620 : 'none',
                    justifySelf: index === 6 ? 'center' : 'stretch'
                  }}
                >
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 999,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      background: 'rgba(114,203,214,0.18)',
                      border: '1px solid rgba(114,203,214,0.5)',
                      color: 'var(--black)',
                      fontSize: 12,
                      fontWeight: 700
                    }}
                  >
                    {index + 1}
                  </span>
                  <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: 'rgba(0,0,0,0.62)', textAlign: 'center' }}>
                    {item}
                  </p>
                </article>
              ))}
            </div>

            <blockquote
              style={{
                margin: '22px 0 0',
                padding: '16px 18px',
                borderRadius: 'var(--r-lg)',
                border: '1px solid rgba(114,203,214,0.45)',
                background: 'rgba(114,203,214,0.12)',
                fontSize: 20,
                fontWeight: 700,
                lineHeight: 1.45,
                letterSpacing: '-0.3px',
                color: 'var(--black)',
                textAlign: 'center'
              }}
            >
              From legacy reports to real-time decisions — the system gets smarter with use.
            </blockquote>
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
          <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(34px,4.2vw,56px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-2px', color: 'var(--black)', marginBottom: 34, textAlign: 'center' }}>
              Key Advantages
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              <article style={{ background: '#F8FBFB', border: '1px solid rgba(114,203,214,0.4)', borderRadius: 'var(--r-xl)', padding: '20px 18px' }}>
                <h3 style={{ margin: '0 0 10px', fontSize: 22, lineHeight: 1.3, letterSpacing: '-0.4px', fontWeight: 700, color: 'var(--black)', textAlign: 'center' }}>
                  Gets Faster &amp; Cheaper Over Time
                </h3>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: 'rgba(0,0,0,0.58)', textAlign: 'center' }}>
                  Repeated intents are reused and refined, improving response speed while reducing marginal cost.
                </p>
              </article>

              <article style={{ background: '#F8FBFB', border: '1px solid rgba(114,203,214,0.4)', borderRadius: 'var(--r-xl)', padding: '20px 18px' }}>
                <h3 style={{ margin: '0 0 10px', fontSize: 22, lineHeight: 1.3, letterSpacing: '-0.4px', fontWeight: 700, color: 'var(--black)', textAlign: 'center' }}>
                  Governed by Design
                </h3>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: 'rgba(0,0,0,0.58)', textAlign: 'center' }}>
                  Policy boundaries, approvals, and permissions are enforced from the first interaction.
                </p>
              </article>

              <article style={{ background: '#F8FBFB', border: '1px solid rgba(114,203,214,0.4)', borderRadius: 'var(--r-xl)', padding: '20px 18px' }}>
                <h3 style={{ margin: '0 0 10px', fontSize: 22, lineHeight: 1.3, letterSpacing: '-0.4px', fontWeight: 700, color: 'var(--black)', textAlign: 'center' }}>
                  No Dashboard Overload
                </h3>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: 'rgba(0,0,0,0.58)', textAlign: 'center' }}>
                  Teams ask directly in plain English instead of navigating endless reports and static dashboards.
                </p>
              </article>

              <article style={{ background: '#F8FBFB', border: '1px solid rgba(114,203,214,0.4)', borderRadius: 'var(--r-xl)', padding: '20px 18px' }}>
                <h3 style={{ margin: '0 0 10px', fontSize: 22, lineHeight: 1.3, letterSpacing: '-0.4px', fontWeight: 700, color: 'var(--black)', textAlign: 'center' }}>
                  Human Always in Control
                </h3>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: 'rgba(0,0,0,0.58)', textAlign: 'center' }}>
                  High-impact steps can route through human review so autonomy scales without losing accountability.
                </p>
              </article>

              <article style={{ background: '#F8FBFB', border: '1px solid rgba(114,203,214,0.4)', borderRadius: 'var(--r-xl)', padding: '20px 18px' }}>
                <h3 style={{ margin: '0 0 10px', fontSize: 22, lineHeight: 1.3, letterSpacing: '-0.4px', fontWeight: 700, color: 'var(--black)', textAlign: 'center' }}>
                  Unified with the Rest of Luthen
                </h3>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: 'rgba(0,0,0,0.58)', textAlign: 'center' }}>
                  Pulls legacy data into one conversational interface and embeds directly in Builder experiences and workflows.
                </p>
              </article>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: '#DCFF9B', padding: 'clamp(72px,10vw,104px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-1.8px', color: 'var(--black)', marginBottom: 28, textAlign: 'center' }}>
              Real-World Examples
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
              {[
                {
                  persona: 'Finance Analyst',
                  query: 'How did Q1 expense trends shift by department, and where are anomalies?',
                  action: 'Resulting action: Prioritize budget adjustments and investigate abnormal cost centers before month-end.',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M3.3 15.8h13.4" stroke="#2B6F77" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M5.3 12.8V9.6M9 12.8V6.8M12.7 12.8V8.3M16.4 12.8V5.3" stroke="#2B6F77" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )
                },
                {
                  persona: 'Supply Chain Manager',
                  query: 'Which suppliers are at highest delay risk over the next 30 days?',
                  action: 'Resulting action: Trigger alternate supplier routing and rebalance procurement before disruptions escalate.',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M2.8 6.5h9.1v6.9H2.8z" stroke="#2B6F77" strokeWidth="1.5" />
                      <path d="M11.9 8.2h2.9l2.3 2.5v2.7h-5.2V8.2Z" stroke="#2B6F77" strokeWidth="1.5" />
                      <circle cx="6.1" cy="14.8" r="1.3" stroke="#2B6F77" strokeWidth="1.5" />
                      <circle cx="14.8" cy="14.8" r="1.3" stroke="#2B6F77" strokeWidth="1.5" />
                    </svg>
                  )
                },
                {
                  persona: 'Sales Leader',
                  query: 'Where are pipeline conversion rates improving or dropping this cycle?',
                  action: 'Resulting action: Focus coaching and deal strategy on weak stages to recover conversion performance.',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M3.4 14.7 8 10.1l3.1 3.1 5.5-5.5" stroke="#2B6F77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13.9 7.7h2.7v2.7" stroke="#2B6F77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )
                }
              ].map(item => (
                <article key={item.persona} style={{ background: '#fff', border: '1px solid rgba(114,203,214,0.4)', borderRadius: 'var(--r-xl)', padding: '20px 18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                    <span style={{ width: 34, height: 34, borderRadius: 10, border: '1px solid rgba(114,203,214,0.55)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: 'rgba(114,203,214,0.14)' }}>
                      {item.icon}
                    </span>
                    <p style={{ margin: 0, fontSize: 18, lineHeight: 1.35, color: 'var(--black)', fontWeight: 700 }}>
                      {item.persona}
                    </p>
                  </div>

                  <div style={{ border: '1px solid rgba(114,203,214,0.42)', background: '#F5FCFD', borderRadius: 14, padding: '12px 13px', marginBottom: 12 }}>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'rgba(0,0,0,0.64)' }}>
                      {item.query}
                    </p>
                  </div>

                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.68, color: 'rgba(0,0,0,0.6)', fontWeight: 500 }}>
                    {item.action}
                  </p>
                </article>
              ))}
            </div>
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
              Why Intelligence Stands Out
            </h2>

            <div style={{ background: 'black', border: '1px solid rgba(114,203,214,0.42)', borderRadius: 'var(--r-xl)', padding: 'clamp(20px,3vw,28px)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 14 }}>
                {[
                  'Instant access to enterprise answers in plain English, not query syntax.',
                  'Improves cost efficiency over time as intents are reused and refined.',
                  'Built-in safety with governance rails, approvals, and full policy enforcement.',
                  'No lock-in: works with your existing systems, models, and data environment.',
                  'Amplifies Connect and Builder to turn insight into governed autonomous action.'
                ].map(point => (
                  <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ marginTop: 2, width: 22, height: 22, borderRadius: 999, background: '#DCFF9B', color: 'black', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, flexShrink: 0 }}>
                      ✓
                    </span>
                    <p style={{ margin: 0, fontSize: 16, lineHeight: 1.68, color: 'rgba(255,255,255,0.92)', fontWeight: 500 }}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: 'black', padding: 'clamp(72px,10vw,112px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 920, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(34px,4.2vw,56px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-2px', color: 'var(--black)', marginBottom: 16 }}>
              <span style={{ color: '#F8FFEC' }}>Ready to Ask?</span>
            </h2>
            <p style={{ margin: '0 auto 28px', maxWidth: 760, fontSize: 17, lineHeight: 1.7, color: 'rgba(248,255,236,0.86)' }}>
              See how your data starts answering questions — and keeps getting better.
            </p>
            <div className="hero-ctas" style={{ justifyContent: 'center', marginBottom: 0 }}>
              <Link to="/demo" className="btn-hero" style={{ borderRadius: 999 }}>
                Schedule a Blueprint Session
              </Link>
              <Link to="/demo#sample-questions" className="btn-hero-ghost" style={{ borderRadius: 999, borderColor: 'rgba(220,255,155,0.75)', background: 'rgba(220,255,155,0.14)', color: '#F8FFEC' }}>
                Try Sample Questions
              </Link>
              <Link to="/contact" className="btn-hero-ghost" style={{ borderRadius: 999, borderColor: 'rgba(220,255,155,0.75)', background: 'rgba(220,255,155,0.14)', color: '#F8FFEC' }}>
                Request Your Use Case Review
              </Link>
            </div>
            <p style={{ margin: '22px auto 0', maxWidth: 820, fontSize: 15.5, lineHeight: 1.55, color: 'rgba(248,255,236,0.78)', fontWeight: 600, letterSpacing: '0.02em' }}>
              Luthen Intelligence — Ask enterprise. Not query it.
            </p>
          </div>
        </section>
      </ScrollFadeIn>
    </>
  )
}
