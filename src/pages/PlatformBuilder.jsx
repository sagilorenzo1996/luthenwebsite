import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

export default function PlatformBuilder() {
  return (
    <>
      <section style={{ background: '#DCFF9B', padding: 'clamp(72px,10vw,110px) clamp(20px,4vw,40px) clamp(64px,8vw,96px)' }}>
        <div style={{ maxWidth: 880 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.42)', marginBottom: 20 }}>
            Luthen — Enterprise Autonomy Layer
          </div>
          <h1 style={{ fontSize: 'clamp(38px,5vw,64px)', fontWeight: 700, lineHeight: 1.04, letterSpacing: '-2.4px', color: 'var(--black)', marginBottom: 20 }}>
            Upgrade execution. Not your stack.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'rgba(0,0,0,0.58)', maxWidth: 860, fontWeight: 400, marginBottom: 34 }}>
            Connect your existing systems. Add self-improving intelligence. Build governed applications and autonomous workflows — without migration, without disruption, without rewriting anything.
          </p>
          <div className="hero-ctas" style={{ marginBottom: 0, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link to="/contact" className="btn-hero" style={{ borderRadius: 999 }}>
              Schedule a Blueprint Session
            </Link>
            <Link to="/demo" className="btn-hero-ghost" style={{ borderRadius: 999 }}>
              Watch 2-min Demo
            </Link>
            <Link to="/platform" className="btn-hero-ghost" style={{ borderRadius: 999 }}>
              Explore Builder
            </Link>
          </div>
        </div>
      </section>

      <ScrollFadeIn>
        <section style={{ background: '#fff', padding: 'clamp(72px,10vw,108px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(32px,4vw,50px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-1.6px', color: 'var(--black)', margin: '0 0 16px', textAlign: 'center' }}>
              One Platform. Three Engines.
            </h2>
            <p style={{ margin: '0 auto 40px', maxWidth: 760, fontSize: 18, lineHeight: 1.65, color: 'var(--g600)', textAlign: 'center' }}>
              Each engine works standalone or together — delivering governed autonomy on top of what you already have.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              {[
                ['Connect', 'Activate your existing data sources, systems, and APIs without migration.', '/platform/connect'],
                ['Intelligence', 'Apply self-improving reasoning and governance to every automated action.', '/platform/intelligence'],
                ['Builder', 'Generate new capabilities and structured workflows inside a consistent lifecycle.', null]
              ].map(([title, desc, link]) => (
                <article key={title} style={{ background: 'linear-gradient(180deg, #F8FBFB 0%, #F3F8F9 100%)', border: '1px solid rgba(114,203,214,0.35)', borderRadius: 'var(--r-xl)', padding: '28px' }}>
                  <h3 style={{ margin: '0 0 12px', fontSize: 24, fontWeight: 700, color: 'var(--black)' }}>{title}</h3>
                  <p style={{ margin: '0 0 20px', fontSize: 16, lineHeight: 1.6, color: 'var(--g600)' }}>{desc}</p>
                  {link ? (
                    <Link to={link} style={{ fontSize: 14, fontWeight: 700, color: 'var(--black)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      Explore {title} <span style={{ fontSize: 18 }}>&rarr;</span>
                    </Link>
                  ) : (
                    <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--g400)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      Current Engine
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: '#fff', padding: 'clamp(80px,10vw,120px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            {/* Connect Engine */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(40px, 8vw, 100px)', alignItems: 'center', marginBottom: 'clamp(80px, 12vw, 140px)' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, color: 'var(--black)', margin: '0 0 12px' }}>Connect</h2>
                <p style={{ fontSize: 'clamp(18px,2vw,22px)', lineHeight: 1.4, fontWeight: 600, color: 'var(--black)', marginBottom: 28 }}>
                  Bring legacy and modern systems into the AI era — fast and safely
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px' }}>
                  {[
                    "Activate SAP, Oracle, mainframes, custom ERPs, flat files, SOAP, FTP drops and more — in days, not months.",
                    "Secure, governed data flows with automatic audit trails from day one.",
                    "No rip-and-replace, no expensive middleware, no API rewrites required.",
                    "Real-time access to your current data for insights and workflows."
                  ].map((bullet, i) => (
                    <li key={i} style={{ display: 'flex', gap: 14, marginBottom: 18, fontSize: 16, lineHeight: 1.55, color: 'var(--g600)' }}>
                      <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', background: '#DCFF9B', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                        <svg width="12" height="10" viewBox="0 0 14 11" fill="none"><path d="M1 5.5L5 9.5L13 1.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--g400)', borderTop: '1px solid var(--g100)', paddingTop: 20 }}>
                  Powered by our enhanced, battle-tested integration layer — trusted by global enterprises for fast legacy bridging.
                </p>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #F8FBFB 0%, #F3F8F9 100%)', border: '1px solid rgba(114,203,214,0.3)', borderRadius: 'var(--r-xl)', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(114,203,214,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Connect Engine Visual</div>
              </div>
            </div>

            {/* Intelligence Engine */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(40px, 8vw, 100px)', alignItems: 'center', marginBottom: 'clamp(80px, 12vw, 140px)' }}>
              <div className="intelligence-text-container">
                <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, color: 'var(--black)', margin: '0 0 12px' }}>Intelligence</h2>
                <p style={{ fontSize: 'clamp(18px,2vw,22px)', lineHeight: 1.4, fontWeight: 600, color: 'var(--black)', marginBottom: 28 }}>
                  Talk to your enterprise data in plain English — answers get faster and cheaper every day
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px' }}>
                  {[
                    "Ask natural-language questions → receive instant visualizations, summaries and insights.",
                    "Self-improving system: positively rated answers become near-instant cached responses.",
                    "Every good interaction accelerates speed and reduces cost over time.",
                    "Human-in-the-loop governance — negative feedback triggers review and continuous learning.",
                    "Strict platform rules + project-specific scope + user preferences = safe, consistent results."
                  ].map((bullet, i) => (
                    <li key={i} style={{ display: 'flex', gap: 14, marginBottom: 18, fontSize: 16, lineHeight: 1.55, color: 'var(--g600)' }}>
                      <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', background: '#DCFF9B', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                        <svg width="12" height="10" viewBox="0 0 14 11" fill="none"><path d="M1 5.5L5 9.5L13 1.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--g400)', borderTop: '1px solid var(--g100)', paddingTop: 20 }}>
                  From legacy reports to real-time decisions — without building yet another dashboard.
                </p>
              </div>
              <div className="intelligence-visual-container" style={{ background: 'linear-gradient(135deg, #FCFEF7 0%, #F9F9F8 100%)', border: '1px solid rgba(220,255,155,0.4)', borderRadius: 'var(--r-xl)', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(0,0,0,0.15)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Intelligence Engine Visual</div>
              </div>
            </div>

            {/* Builder Engine */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(40px, 8vw, 100px)', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, color: 'var(--black)', margin: '0 0 12px' }}>Builder</h2>
                <p style={{ fontSize: 'clamp(18px,2vw,22px)', lineHeight: 1.4, fontWeight: 600, color: 'var(--black)', marginBottom: 28 }}>
                  From intent to production-ready applications & autonomous workflows — in minutes
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px' }}>
                  {[
                    "Define models once → platform generates complete CRUD APIs, forms, layouts, filters, security, audit trails and natural-language search.",
                    "Change data models, UI or permissions at runtime — no redeployment needed.",
                    "80% zero-boilerplate productivity + 20% native escape hatches for full control when required.",
                    "Build structured apps, dashboards, approval flows, operational tools or fully autonomous processes.",
                    "Embed conversational intelligence directly into your applications."
                  ].map((bullet, i) => (
                    <li key={i} style={{ display: 'flex', gap: 14, marginBottom: 18, fontSize: 16, lineHeight: 1.55, color: 'var(--g600)' }}>
                      <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', background: '#DCFF9B', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                        <svg width="12" height="10" viewBox="0 0 14 11" fill="none"><path d="M1 5.5L5 9.5L13 1.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.5, color: 'var(--black)', borderTop: '2px solid var(--black)', paddingTop: 24, letterSpacing: '-0.4px' }}>
                  No upper bound. Never blocked. Hot schema evolution. Governed from the start.
                </p>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #DCFF9B 0%, #F9F9F8 100%)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: 'var(--r-xl)', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(0,0,0,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Builder Engine Visual</div>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          @media (min-width: 769px) {
            .intelligence-text-container { order: 2; }
            .intelligence-visual-container { order: 1; }
          }
        `}</style>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: 'var(--g50)', padding: 'clamp(80px,10vw,120px) clamp(20px,4vw,40px)', borderTop: '1px solid var(--g100)', borderBottom: '1px solid var(--g100)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, color: 'var(--black)', margin: '0 0 16px' }}>
                How Luthen Works Together
              </h2>
              <p style={{ margin: '0 auto', maxWidth: 760, fontSize: 18, lineHeight: 1.6, color: 'var(--g600)' }}>
                One metadata foundation powers it all — adapt live, learn from every interaction, stay in complete control.
              </p>
            </div>

            <div className="architecture-flow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, overflowX: 'auto', padding: '20px 0' }}>
              {/* Existing Systems */}
              <div style={{ flex: '1', minWidth: 160, textAlign: 'center' }}>
                <div style={{ background: '#fff', border: '1px solid var(--g200)', borderRadius: 'var(--r-lg)', padding: '20px 16px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--g400)', textTransform: 'uppercase', marginBottom: 8, letterSpacing: '0.05em' }}>Start Point</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--black)' }}>Existing Systems</div>
                </div>
              </div>

              {/* Arrow 1 */}
              <div style={{ flexShrink: 0, color: 'var(--turquoise)', display: 'flex', alignItems: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>

              {/* Connect */}
              <div style={{ flex: '1', minWidth: 160, textAlign: 'center' }}>
                <div style={{ background: 'rgba(114,203,214,0.08)', border: '1px solid rgba(114,203,214,0.4)', borderRadius: 'var(--r-lg)', padding: '20px 16px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--black)', marginBottom: 4 }}>Connect</div>
                  <div style={{ fontSize: 12, lineHeight: 1.4, color: 'var(--g600)', fontWeight: 500 }}>Real-time data & events</div>
                </div>
              </div>

              {/* Arrow 2 */}
              <div style={{ flexShrink: 0, color: 'var(--turquoise)', display: 'flex', alignItems: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>

              {/* Intelligence */}
              <div style={{ flex: '1', minWidth: 160, textAlign: 'center' }}>
                <div style={{ background: 'rgba(220,255,155,0.15)', border: '1px solid rgba(220,255,155,0.6)', borderRadius: 'var(--r-lg)', padding: '20px 16px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--black)', marginBottom: 4 }}>Intelligence</div>
                  <div style={{ fontSize: 12, lineHeight: 1.4, color: 'var(--g600)', fontWeight: 500 }}>Ask questions & understand</div>
                </div>
              </div>

              {/* Two-way Arrow */}
              <div style={{ flexShrink: 0, color: 'var(--black)', display: 'flex', alignItems: 'center' }}>
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 8l-4 4 4 4M3 12h22M21 8l4 4-4 4" />
                </svg>
              </div>

              {/* Builder */}
              <div style={{ flex: '1', minWidth: 160, textAlign: 'center' }}>
                <div style={{ background: '#DCFF9B', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 'var(--r-lg)', padding: '20px 16px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: 'var(--sh-sm)' }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--black)', marginBottom: 4 }}>Builder</div>
                  <div style={{ fontSize: 12, lineHeight: 1.4, color: 'rgba(0,0,0,0.6)', fontWeight: 600 }}>Create apps & workflows</div>
                </div>
              </div>

              {/* Arrow 4 */}
              <div style={{ flexShrink: 0, color: 'var(--black)', display: 'flex', alignItems: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>

              {/* Outcomes */}
              <div style={{ flex: '1.2', minWidth: 180, textAlign: 'center' }}>
                <div style={{ background: 'var(--black)', border: '1px solid var(--black)', borderRadius: 'var(--r-lg)', padding: '20px 16px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#fff' }}>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Governed Outcomes</div>
                  <div style={{ fontSize: 11, opacity: 0.7, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.03em' }}>& Continuous Improvement</div>
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 900px) {
              .architecture-flow {
                flex-direction: column;
                gap: 20px;
              }
              .architecture-flow > div {
                width: 100%;
                max-width: 320px;
              }
              .architecture-flow svg {
                transform: rotate(90deg);
              }
            }
          `}</style>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ background: '#fff', padding: 'clamp(80px,10vw,120px) clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, color: 'var(--black)', margin: '0 0 52px', textAlign: 'center' }}>
              Why Teams Choose Luthen
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {[
                {
                  title: 'No Migration Needed',
                  desc: 'Layer intelligence and automation directly on your current infrastructure — keep your data where it is.',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                },
                {
                  title: 'Self-Improving Performance',
                  desc: 'The more you use it, the faster and more cost-effective it becomes through internalized patterns.',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                },
                {
                  title: 'Governed by Design',
                  desc: 'Security, role-based access, audit trails and traceability — built in, not added as an afterthought.',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                },
                {
                  title: 'Never Get Blocked',
                  desc: 'Start with no-code/low-code speed, but extend with native escape hatches whenever you need full control.',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                },
                {
                  title: 'Days Instead of Months',
                  desc: 'Integrations, insights and production-ready applications go live dramatically faster than traditional dev.',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                },
                {
                  title: 'No Lock-in',
                  desc: 'Open metadata architecture. Bring your own models. Extend anywhere without proprietary boundaries.',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
                }
              ].map((item, i) => (
                <article key={i} style={{ padding: '32px', borderRadius: 'var(--r-xl)', background: '#F8FBFB', border: '1px solid rgba(114,203,214,0.3)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ color: 'var(--turquoise)', background: 'rgba(114,203,214,0.1)', width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--black)', marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--g600)', margin: 0 }}>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section style={{ 
          background: 'var(--black)', 
          padding: 'clamp(80px, 12vw, 130px) 24px', 
          textAlign: 'center',
          color: '#fff',
          borderRadius: 'var(--r-xl)',
          margin: '0 20px 40px'
        }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: 'clamp(34px, 4.5vw, 56px)', 
              fontWeight: 700, 
              lineHeight: 1.05, 
              letterSpacing: '-2px', 
              margin: '0 0 20px',
              color: '#fff'
            }}>
              Ready to Upgrade Execution — Not Your Stack?
            </h2>
            <p style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)', 
              lineHeight: 1.5, 
              color: 'rgba(255,255,255,0.7)', 
              maxWidth: 820, 
              margin: '0 auto 48px' 
            }}>
              See what becomes possible when legacy systems, conversational intelligence and rapid application building work as one governed platform.
            </p>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 16, 
              justifyContent: 'center',
              marginBottom: 64
            }}>
              <Link to="/contact" className="btn-hero" style={{ borderRadius: 999, minWidth: 240 }}>
                Book a Blueprint Session
              </Link>
              <Link to="/platform" className="btn-hero-ghost" style={{ 
                borderRadius: 999, 
                minWidth: 240,
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.3)',
                background: 'rgba(255,255,255,0.05)'
              }}>
                Explore the Builder First
              </Link>
              <Link to="/demo" className="btn-hero-ghost" style={{ 
                borderRadius: 999, 
                minWidth: 240,
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.3)',
                background: 'rgba(255,255,255,0.05)'
              }}>
                Request a Demo for Your Use Case
              </Link>
            </div>
            <div style={{ 
              fontSize: 14, 
              fontWeight: 600, 
              letterSpacing: '0.05em', 
              textTransform: 'uppercase', 
              color: 'rgba(255,255,255,0.4)' 
            }}>
              Luthen — Build enterprise. Not boilerplate.
            </div>
          </div>
        </section>
      </ScrollFadeIn>


    </>
  )
}
