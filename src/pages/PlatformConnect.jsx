import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

export default function PlatformConnect() {
  return (
    <>
      <section className="hero" style={{ background: 'linear-gradient(180deg, #fff 0%, #FCFEF7 100%)', padding: '110px 24px 96px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'left' }}>
          <p className="hero-eyebrow" style={{ marginBottom: 16 }}>
            Luthen Connect
          </p>
          <h1 style={{ color: 'var(--black)', marginBottom: 20 }}>
            Enterprise Integration Engine
          </h1>
          <p className="hero-sub" style={{ color: 'var(--black)', fontSize: 24, fontWeight: 600, maxWidth: 860, marginBottom: 20 }}>
            Activate your existing systems with AI power — fast, safely, and without disruption.
          </p>
          <div style={{ color: 'rgba(0,0,0,0.58)', fontSize: 18, maxWidth: 860, marginBottom: 32 }}>
            <p style={{ margin: '0 0 8px' }}>Days to live integrations. No migration. No rip-and-replace.</p>
            <p style={{ margin: 0 }}>Governed connections that feed real-time data into intelligence and workflows.</p>
          </div>
          <div className="hero-ctas" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/demo" className="btn-hero">
              Request Live Demo
            </Link>
            <Link to="/demo" className="btn-hero-ghost" style={{ borderColor: 'rgba(114,203,214,0.6)', background: 'rgba(114,203,214,0.08)' }}>
              See It in Action
            </Link>
            <Link to="/demo" className="btn-hero-ghost" style={{ borderColor: 'rgba(114,203,214,0.6)', background: 'rgba(114,203,214,0.08)' }}>
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <ScrollFadeIn>
        <section className="s" style={{ background: '#fff', padding: '104px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 className="s-h2 center" style={{ color: 'var(--black)', marginBottom: 20 }}>
              What Luthen Connect Delivers
            </h2>
            <p className="s-body center" style={{ color: 'rgba(0,0,0,0.58)', maxWidth: 860, margin: '0 auto 52px', textAlign: 'center', fontSize: 19 }}>
              Bridge your current infrastructure directly into governed AI execution — no forklift upgrades required:
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginBottom: 52 }}>
              {[
                {
                  title: "Legacy & Modern Connectivity",
                  body: "Connect to legacy and modern systems — SAP, Oracle, mainframes, custom ERPs, flat files, SOAP services, FTP drops, databases, cloud APIs and more"
                },
                {
                  title: "Secure Data Governance",
                  body: "Secure, governed data flows — automatic enforcement of your security policies and audit trails"
                },
                {
                  title: "Real-time & Batch Access",
                  body: "Real-time and batch access — pull or push data exactly when needed for insights and automation"
                },
                {
                  title: "Pre-built Patterns",
                  body: "Pre-built patterns for common enterprise scenarios — polling queues, transforming formats, handling exceptions — all configurable via metadata"
                },
                {
                  title: "400+ Connectors",
                  body: "400+ connectors available out-of-the-box — if yours isn't listed, we add it quickly"
                },
                {
                  title: "No New Infrastructure",
                  body: "No new infrastructure or expensive middleware — layer on top of what you already run"
                }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, background: '#F8FBFB', border: '1px solid rgba(114,203,214,0.3)', borderRadius: 'var(--r-lg)', padding: '24px' }}>
                  <div style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', background: '#DCFF9B', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                      <path d="M1 5.5L5 9.5L13 1.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 700, color: 'var(--black)' }}>{item.title}</h3>
                    <p style={{ margin: 0, color: 'var(--g600)', fontSize: 15, lineHeight: 1.6 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center', margin: 0, fontSize: 18, fontWeight: 600, color: 'var(--black)' }}>
              Integrations go live in days because the hard parts are already solved.
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="s" style={{ background: '#F9F9F8', padding: '104px 24px', borderTop: '1px solid #eee' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 className="s-h2 center" style={{ color: 'var(--black)', marginBottom: 60, textAlign: 'center' }}>
              How It Works
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32, position: 'relative' }}>
              {[
                {
                  step: "1",
                  title: "Map Your Systems Once",
                  body: "Point to your sources — on-prem, cloud, legacy, custom — using simple, governed configuration."
                },
                {
                  step: "2",
                  title: "Platform Builds Secure Routes",
                  body: "Auto-generates connections with your security rules, audit hooks, and transformation logic applied automatically."
                },
                {
                  step: "3",
                  title: "Data Flows in Real Time",
                  body: "Feed clean, governed events and records directly into Intelligence for natural-language questions or Builder for applications and workflows."
                },
                {
                  step: "4",
                  title: "Adapt Without Downtime",
                  body: "Change mappings, add sources, or update policies at runtime — no redeployment, no interruption."
                }
              ].map((item, i) => (
                <div key={i} style={{ position: 'relative' }}>
                  <div style={{ 
                    fontSize: 48, 
                    fontWeight: 800, 
                    color: 'rgba(114,203,214,0.15)', 
                    lineHeight: 1,
                    marginBottom: 12,
                    fontFamily: 'var(--font-mono, monospace)'
                  }}>
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--black)', marginBottom: 12, lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, color: 'var(--g600)', fontSize: 15, lineHeight: 1.6 }}>
                    {item.body}
                  </p>
                </div>
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
        <section className="s" style={{ background: '#fff', padding: 'clamp(72px,10vw,108px) 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 className="s-h2 center" style={{ fontSize: 'clamp(32px,4vw,50px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-1.6px', color: 'var(--black)', margin: '0 0 52px', textAlign: 'center' }}>
              Key Advantages
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              {[
                ['Days, Not Months', 'Integrations that typically take quarters launch in days — no heavy lifting or shifting required.'],
                ['No Migration Tax', 'Avoid multimillion-dollar rip-and-replace projects. Keep running your core systems as-is.'],
                ['Governed from the Start', 'Every connection inherits platform-wide security, role-based access, and full traceability.'],
                ['Never Blocked by Compatibility', 'Broad coverage for legacy patterns + fast custom extensions when needed.'],
                ['Unified with the Rest of Luthen', 'Real-time data powers self-improving conversational intelligence. Feeds directly into rapid application and workflow building. One foundation — connect once, enable autonomy everywhere.']
              ].map(([title, body]) => (
                <article key={title} style={{ 
                  background: '#fff', 
                  border: '1px solid rgba(114,203,214,0.35)', 
                  borderRadius: 'var(--r-xl)', 
                  padding: '32px 28px',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.03)'
                }}>
                  <h3 style={{ margin: '0 0 16px', fontSize: 22, fontWeight: 700, lineHeight: 1.3, color: 'var(--black)' }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--g600)' }}>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="s" style={{ background: '#F8FBFB', padding: 'clamp(72px,10vw,108px) 24px', borderTop: '1px solid rgba(114,203,214,0.1)' }}>
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <h2 className="s-h2 center" style={{ fontSize: 'clamp(32px,4vw,50px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-1.6px', color: 'var(--black)', margin: '0 0 52px', textAlign: 'center' }}>
              Real-World Examples
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {[
                {
                  title: "Finance Operations",
                  body: "Connect legacy ERP for real-time invoice data → feed into Intelligence for natural-language audit queries → trigger Builder approval workflows — all governed and auditable."
                },
                {
                  title: "Supply Chain",
                  body: "Link mainframe inventory feeds → ask questions about stock levels in plain English → auto-generate replenishment dashboards — no data duplication or ETL overhead."
                },
                {
                  title: "Sales & CRM",
                  body: "Integrate on-prem CRM with cloud tools → enable conversational reporting across silos → build custom territory assignment apps — changes live without downtime."
                }
              ].map((item, i) => (
                <article key={i} style={{ 
                  background: '#fff', 
                  border: '1px solid rgba(114,203,214,0.35)', 
                  borderRadius: 'var(--r-xl)', 
                  padding: '32px 28px',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.03)'
                }}>
                  <h3 style={{ margin: '0 0 16px', fontSize: 22, fontWeight: 700, lineHeight: 1.3, color: 'var(--black)' }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--g600)' }}>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="s" style={{ background: '#F8FBFB', padding: 'clamp(72px,10vw,112px) 24px', borderTop: '1px solid rgba(114,203,214,0.1)' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-1.8px', color: 'var(--black)', marginBottom: 28, textAlign: 'center' }}>
              Why Connect Stands Out
            </h2>

            <div style={{ background: 'black', border: '1px solid rgba(114,203,214,0.42)', borderRadius: 'var(--r-xl)', padding: 'clamp(20px,3vw,28px)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 14 }}>
                {[
                  "Eliminates the biggest barrier to enterprise AI — legacy drag",
                  "Delivers production-grade integrations without production-grade pain",
                  "No vendor lock-in — open, extensible connections",
                  "Continuous improvement when paired with Intelligence and Builder",
                  "Enterprise-grade governance without added complexity"
                ].map(point => (
                  <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ marginTop: 2, width: 22, height: 22, borderRadius: 999, background: '#72CBD6', color: 'black', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, flexShrink: 0 }}>
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
        <section style={{ 
          background: 'var(--black)', 
          padding: 'clamp(80px, 12vw, 130px) 24px', 
          textAlign: 'center',
          color: '#fff'
        }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: 'clamp(36px, 5vw, 62px)', 
              fontWeight: 700, 
              lineHeight: 1.05, 
              letterSpacing: '-2px', 
              margin: '0 0 16px' 
            }}>
              Ready to Connect?
            </h2>
            <p style={{ 
              fontSize: 'clamp(18px, 2.2vw, 22px)', 
              lineHeight: 1.5, 
              color: 'rgba(255,255,255,0.7)', 
              maxWidth: 700, 
              margin: '0 auto 48px' 
            }}>
              See how your systems become the foundation for governed autonomy in days.
            </p>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 16, 
              justifyContent: 'center',
              marginBottom: 64
            }}>
              <Link to="/demo" className="btn-hero" style={{ borderRadius: 999, minWidth: 240 }}>
                Schedule a Blueprint Session
              </Link>
              <Link to="/platform" className="btn-hero-ghost" style={{ 
                borderRadius: 999, 
                minWidth: 240,
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.3)',
                background: 'rgba(255,255,255,0.05)'
              }}>
                Explore Integration Examples
              </Link>
              <Link to="/contact" className="btn-hero-ghost" style={{ 
                borderRadius: 999, 
                minWidth: 240,
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.3)',
                background: 'rgba(255,255,255,0.05)'
              }}>
                Request Your System Check
              </Link>
            </div>
            <div style={{ 
              fontSize: 14, 
              fontWeight: 600, 
              letterSpacing: '0.05em', 
              textTransform: 'uppercase', 
              color: 'rgba(255,255,255,0.4)' 
            }}>
              Luthen Connect — Activate legacy. Not replace it.
            </div>
          </div>
        </section>
      </ScrollFadeIn>
    </>
  )
}
