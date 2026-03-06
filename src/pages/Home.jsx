import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

// ── Workflow card with cycling animation ──────────────────────────────────────
function WorkflowCard() {
  const steps = [
    { label: 'Connect → SAP ERP' },
    { label: 'Execute → Invoice Processing' },
    { label: 'Internalize → Cost −40%' },
  ]
  const [cur, setCur] = useState(2)

  useEffect(() => {
    const id = setInterval(() => setCur(c => (c + 1) % steps.length), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="wf-card">
      <div className="wf-header">
        <div className="wf-status">
          <div className="wf-pulse"><div className="wf-dot"></div></div>
          Active Workflow
        </div>
        <span className="wf-live">Live</span>
      </div>
      <div className="wf-steps">
        {steps.map((step, i) => {
          const isDone = i < cur
          const isActive = i === cur
          return (
            <div key={i} className={`wf-step ${isDone ? 'done' : ''} ${isActive ? 'active' : ''}`}>
              <div className="wf-num">
                {isDone ? (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5l2.5 2.5 5-5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : i + 1}
              </div>
              <span className="wf-label">{step.label}</span>
            </div>
          )
        })}
      </div>
      <div className="wf-footer">
        <span className="wf-foot-lbl">Avg. Time</span>
        <div className="wf-timing">
          <span className="wf-t-old">2.3s</span>
          <span className="wf-t-arr">→</span>
          <span className="wf-t-new">0.8s</span>
        </div>
      </div>
    </div>
  )
}

// ── Stat counter ──────────────────────────────────────────────────────────────
function StatItem({ num, suffix, label, src }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.animation = 'statPop 0.5s cubic-bezier(0.34,1.56,0.64,1) both'
        obs.unobserve(el)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="stat-item">
      <div className="stat-num" ref={ref}>{num}<em>{suffix}</em></div>
      <div className="stat-lbl">{label}</div>
      <div className="stat-src">{src}</div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="trust-item">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="2" y="5.5" width="9" height="6.5" rx="1.2" stroke="currentColor" strokeWidth="1.1"/><path d="M4 5.5V4a2.5 2.5 0 015 0v1.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>
          GDPR Compliant
        </div>
        <div className="trust-div"></div>
        <div className="trust-item">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.1"/><path d="M4 6.5l2 2 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          99.99% Uptime SLA
        </div>
        <div className="trust-div"></div>
        <div className="trust-item">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1.5L3 4v3.5c0 2.5 1.5 4.2 3.5 5 2-.8 3.5-2.5 3.5-5V4L6.5 1.5z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/></svg>
          On-premise &amp; Cloud Support
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="hero">
        <div>
          <p className="hero-eyebrow"><span className="hero-eyebrow-dot"></span>Enterprise Autonomy Layer</p>
          <h1>Upgrade Execution.<br/>Not Your Stack.</h1>
          <p className="hero-sub">Deploy intelligent, governed workflows across your existing systems — without migration, without disruption.</p>
          <div className="hero-ctas">
            <Link to="/demo" className="btn-hero">
              Schedule a Solution Blueprint
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link to="/platform" className="btn-hero-ghost">Watch a Workflow Run</Link>
          </div>
          <p className="hero-micro">·&nbsp; Dedicated onboarding &nbsp;·&nbsp; Custom SLA available</p>
          <div className="hero-badges">
            <span className="hero-badge"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 6.5l3 3 7-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> No migration required</span>
            <span className="hero-badge"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 6.5l3 3 7-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> Governed by default</span>
            <span className="hero-badge"><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 6.5l3 3 7-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> Audit-ready</span>
          </div>
        </div>
        <WorkflowCard />
      </section>

      {/* ── TICKER ── */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          <span className="ticker-lbl">Trusted by global enterprises</span>
          <div className="ticker-mask">
            <div className="ticker-track">
              {['Axion Industries','Meridian Global','Fortis Systems','Caldwell & Co.','Orion Logistics','Vesper Corp','Northvault Bank','Pulsar Networks','Synapse AI',
                'Axion Industries','Meridian Global','Fortis Systems','Caldwell & Co.','Orion Logistics','Vesper Corp','Northvault Bank','Pulsar Networks','Synapse AI'].map((co, i) => (
                <span key={i} className="ticker-co">{co}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── ENTERPRISE AI TAX ── */}
      <ScrollFadeIn>
        <section className="tax-s s">
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="s-label">The Problem</div>
            <h2 className="s-h2">The Enterprise AI Tax</h2>
            <p className="s-body">Three structural forces are draining ROI from every enterprise AI investment — before a single workflow ships.</p>
          </div>
          <div className="grid-3">
            {[
              {
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 17L17 3M17 3H9M17 3v8" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                title: 'Migration Tax',
                desc: 'Replacing legacy systems costs millions and takes years — creating execution gaps that compound over time.',
                outcome: 'Avg. $4.2M rip-and-replace cost',
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M13 6l3 4-3 4M7 6L4 10l3 4" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                title: 'Linear AI Cost',
                desc: 'Every external API call costs the same forever. No efficiency curve, no learning — just recurring spend at scale.',
                outcome: 'No improvement over 18 months',
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 2L3 13h8l-1 7 9-11h-8l1-7z" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                title: 'Rigidity Tax',
                desc: 'Workflows are brittle. Every change requires dev cycles. Business agility stalls while the market moves.',
                outcome: '6–12 week change cycles on average',
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
          <p style={{ textAlign: 'center', fontSize: 15, color: 'var(--g400)', fontWeight: 500, marginTop: 40, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Luthen upgrades execution instead of replacing systems.
          </p>
        </section>
      </ScrollFadeIn>

      {/* ── SHIFT ── */}
      <ScrollFadeIn>
        <section className="shift-s s">
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="s-label">Repositioning</div>
            <h2 className="s-h2">The Shift to Autonomous Enterprise</h2>
            <p className="s-body">Legacy AI deployments optimise for capability. The autonomous enterprise optimises for execution.</p>
          </div>
          <div className="shift-table">
            <div className="shift-col left">
              <div className="shift-col-hdr">Traditional Approach</div>
              <div className="shift-list">
                {['Manual coordination','Static dashboards','Linear AI spend','Slow workflow delivery'].map(item => (
                  <div className="shift-item" key={item}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 2l9 9M11 2L2 11" stroke="var(--g200)" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="shift-col right">
              <div className="shift-col-hdr">Autonomous Enterprise</div>
              <div className="shift-list">
                {['Governed execution','Repeatable workflows','Improving cost curve','Capability generation'].map(item => (
                  <div className="shift-item" key={item}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5l3.5 3.5 6-6.5" stroke="var(--black)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: 15, color: 'var(--g400)', fontWeight: 500 }}>This reframes the category.</p>
        </section>
      </ScrollFadeIn>

      {/* ── THREE ENGINES ── */}
      <ScrollFadeIn>
        <section className="eng-s s">
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="s-label">Platform</div>
            <h2 className="s-h2">One Platform. Three Engines.</h2>
            <p className="s-body">Each engine is production-ready and works independently — or as a unified autonomy layer across your enterprise.</p>
          </div>
          <div className="grid-3">
            <div className="card" style={{ '--i': 0 }}>
              <div className="card-icon icon-blue">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="2.5" stroke="#3b82f6" strokeWidth="1.5"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.34 4.34l1.41 1.41M14.25 14.25l1.41 1.41M4.34 15.66l1.41-1.41M14.25 5.75l1.41-1.41" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <h3>Connect</h3>
              <p>Activate legacy systems without migration. Secure, governed integrations that go live in days, not months.</p>
            </div>
            <div className="card" style={{ '--i': 1 }}>
              <div className="card-icon icon-purple">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 7c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.5-.82 2.81-2.04 3.5L11 13H9l-.96-2.5C6.82 9.81 6 8.5 6 7z" stroke="#8b5cf6" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8 16h4M9 13v3M11 13v3" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <h3>Intelligence</h3>
              <p>Governed reasoning with an improving cost curve. AI that learns your patterns and gets cheaper over time.</p>
            </div>
            <div className="card" style={{ '--i': 2 }}>
              <div className="card-icon icon-green">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10h14M3 5.5h14M3 14.5h9" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/><path d="M14 12.5l3 2-3 2" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3>Builder</h3>
              <p>Turn intent into production workflows. Build, test, and deploy without writing infrastructure code.</p>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── HOW IT WORKS ── */}
      <ScrollFadeIn>
        <section className="hiw-s s">
          <div className="center" style={{ marginBottom: 56 }}>
            <div className="s-label">Process</div>
            <h2 className="s-h2">How It Works</h2>
            <p className="s-body">Three steps from legacy system to autonomous execution — no rip-and-replace required.</p>
          </div>
          <div className="hiw-grid">
            <div className="hiw-step">
              <div className="hiw-num">01</div>
              <div className="hiw-title">Connect</div>
              <p className="hiw-desc">Integrate with your existing systems through secure, governed connections.</p>
            </div>
            <div className="hiw-conn">
              <svg width="28" height="18" viewBox="0 0 28 18" fill="none"><path d="M4 9h20M18 3l6 6-6 6" stroke="var(--g200)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="hiw-step">
              <div className="hiw-num">02</div>
              <div className="hiw-title">Execute</div>
              <p className="hiw-desc">Deploy intelligent workflows that learn and adapt over time across your operations.</p>
            </div>
            <div className="hiw-conn">
              <svg width="28" height="18" viewBox="0 0 28 18" fill="none"><path d="M4 9h20M18 3l6 6-6 6" stroke="var(--g200)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="hiw-step">
              <div className="hiw-num">03</div>
              <div className="hiw-title">Internalize &amp; Scale</div>
              <p className="hiw-desc">Improve efficiency, reduce costs, and expand capabilities continuously over time.</p>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── STATS STRIP ── */}
      <div className="stats-strip">
        <StatItem num="60" suffix="%" label="Reduction in production coordination time" src="Manufacturing customer avg." />
        <StatItem num="2.9" suffix="×" label="Faster workflow delivery vs. traditional dev" src="Based on 2024 deployment data" />
        <StatItem num="40" suffix="%" label="Average cost reduction after 12-month internalization" src="Across 120+ enterprise deployments" />
        <StatItem num="500" suffix="+" label="Enterprise deployments across manufacturing, logistics & telecom" src="As of Q4 2024" />
      </div>

      {/* ── COST CURVE ── */}
      <ScrollFadeIn>
        <section className="cost-s s">
          <div className="center" style={{ marginBottom: 40 }}>
            <div className="s-label">Economics</div>
            <h2 className="s-h2">Escape the Linear AI Cost Curve</h2>
            <p className="s-body">Unlike per-call API pricing, Luthen's Intelligence engine internalizes patterns — so every workflow gets cheaper as it runs.</p>
          </div>
          <div className="chart-card">
            <div className="chart-area">
              <svg width="100%" height="100%" viewBox="0 0 820 240" preserveAspectRatio="none" fill="none">
                <line x1="58" y1="20" x2="800" y2="20" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4"/>
                <line x1="58" y1="58" x2="800" y2="58" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4"/>
                <line x1="58" y1="96" x2="800" y2="96" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4"/>
                <line x1="58" y1="134" x2="800" y2="134" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4"/>
                <line x1="58" y1="172" x2="800" y2="172" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4"/>
                <line x1="58" y1="210" x2="800" y2="210" stroke="#e5e7eb" strokeWidth="1"/>
                <text x="48" y="24" textAnchor="end" fontSize="11" fill="#9A9A94" fontFamily="Space Grotesk,sans-serif">100</text>
                <text x="48" y="62" textAnchor="end" fontSize="11" fill="#9A9A94" fontFamily="Space Grotesk,sans-serif">75</text>
                <text x="48" y="100" textAnchor="end" fontSize="11" fill="#9A9A94" fontFamily="Space Grotesk,sans-serif">50</text>
                <text x="48" y="138" textAnchor="end" fontSize="11" fill="#9A9A94" fontFamily="Space Grotesk,sans-serif">25</text>
                <text x="48" y="214" textAnchor="end" fontSize="11" fill="#9A9A94" fontFamily="Space Grotesk,sans-serif">0</text>
                <text x="14" y="115" textAnchor="middle" fontSize="11" fill="#9A9A94" fontFamily="Space Grotesk,sans-serif" transform="rotate(-90,14,115)">Relative Cost</text>
                <text x="58" y="226" textAnchor="middle" fontSize="11" fill="#9A9A94" fontFamily="Space Grotesk,sans-serif">0</text>
                <text x="168" y="226" textAnchor="middle" fontSize="11" fill="#9A9A94" fontFamily="Space Grotesk,sans-serif">3</text>
                <text x="278" y="226" textAnchor="middle" fontSize="11" fill="#9A9A94" fontFamily="Space Grotesk,sans-serif">6</text>
                <text x="388" y="226" textAnchor="middle" fontSize="11" fill="#9A9A94" fontFamily="Space Grotesk,sans-serif">9</text>
                <text x="498" y="226" textAnchor="middle" fontSize="11" fill="#9A9A94" fontFamily="Space Grotesk,sans-serif">12</text>
                <text x="608" y="226" textAnchor="middle" fontSize="11" fill="#9A9A94" fontFamily="Space Grotesk,sans-serif">15</text>
                <text x="800" y="226" textAnchor="middle" fontSize="11" fill="#9A9A94" fontFamily="Space Grotesk,sans-serif">18</text>
                <text x="429" y="240" textAnchor="middle" fontSize="11" fill="#9A9A94" fontFamily="Space Grotesk,sans-serif">Months</text>
                <line x1="58" y1="20" x2="800" y2="20" stroke="rgba(0,0,0,0.22)" strokeWidth="2"/>
                <text x="612" y="14" fontSize="10" fill="rgba(0,0,0,0.3)" fontFamily="Space Grotesk,sans-serif">External API cost (flat)</text>
                <path d="M58,20 C130,21 210,44 300,78 C390,114 470,150 560,174 C640,193 720,202 800,206 L800,210 L58,210 Z" fill="rgba(37,99,235,0.06)"/>
                <path d="M58,20 C130,21 210,44 300,78 C390,114 470,150 560,174 C640,193 720,202 800,206" stroke="#2563eb" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                <circle cx="498" cy="150" r="5" fill="#2563eb"/>
                <line x1="498" y1="145" x2="498" y2="108" stroke="#2563eb" strokeWidth="1.2" strokeDasharray="3 2"/>
                <rect x="456" y="90" width="84" height="20" rx="5" fill="#2563eb"/>
                <text x="498" y="104" textAnchor="middle" fontSize="10.5" fill="#fff" fontFamily="Space Grotesk,sans-serif" fontWeight="600">−40% at month 12</text>
              </svg>
            </div>
            <div className="chart-leg">
              <div className="leg-item"><div className="leg-line leg-gray"></div>Linear external AI spend</div>
              <div className="leg-item"><div className="leg-line leg-blue"></div><strong>Improving marginal cost over time</strong></div>
            </div>
            <p className="chart-caption">As your workflows internalize knowledge and optimize execution patterns, the marginal cost of each operation decreases. What started as equivalent to external API calls becomes increasingly efficient — creating compound value over time.</p>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── CONSOLE (DARK) ── */}
      <ScrollFadeIn>
        <div className="console-s">
          <div className="console-wrap">
            <div className="console-box">
              <div className="con-titlebar">
                <div className="tdot" style={{ background: '#ef4444' }}></div>
                <div className="tdot" style={{ background: '#f59e0b' }}></div>
                <div className="tdot" style={{ background: '#22c55e' }}></div>
                <span className="con-title-lbl">Workflow Console</span>
              </div>
              <div className="con-body">
                <div className="cl"><span className="ci ci-g">✓</span><span className="ct-g">Connected to Oracle ERP</span></div>
                <div className="cl"><span className="ci ci-g">✓</span><span className="ct-g">Workflow initialized: PO_APPROVAL_v2</span></div>
                <div className="con-div"></div>
                <div className="cl"><span className="ci ci-y">○</span><span className="ct-y">Awaiting approval gate [Manager: J. Chen]</span></div>
                <div className="cl"><span className="ci ci-a">→</span><span className="ct-w">Approved. Executing...</span></div>
                <div className="con-div"></div>
                <div className="cl"><span className="ci ci-g">✓</span><span className="ct-g">Transaction logged [TX-4829]</span></div>
                <div className="cl"><span className="ci ci-g">✓</span><span className="ct-g">Audit trail updated</span></div>
              </div>
              <div className="con-footer">
                <span className="con-foot-lbl">Execution Time</span>
                <span className="con-foot-val">1.2s</span>
              </div>
            </div>
          </div>
          <div>
            <div className="con-s-lbl">Governance</div>
            <h2 className="con-h2">Built-in oversight<br/>at every step.</h2>
            <div className="con-feats">
              {[
                'Connect legacy systems without API rewrites',
                'Governed execution with approval gates',
                'Complete audit trail for compliance',
                'Real-time observability across workflows',
              ].map(feat => (
                <div className="cfeat" key={feat}>
                  <div className="cfeat-icon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1.5 7l3 3 8-7" stroke="#72CBD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {feat}
                </div>
              ))}
            </div>
            <Link to="/platform" className="btn-console">
              See Full Workflow
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </ScrollFadeIn>

      {/* ── ARCHITECTURE ── */}
      <ScrollFadeIn>
        <section className="arch-s s">
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="s-label">Infrastructure</div>
            <h2 className="s-h2">Enterprise-Grade Architecture</h2>
            <p className="s-body">Every layer of Luthen is built for the reliability, governance, and flexibility that enterprise operations demand.</p>
          </div>
          <div className="grid-4">
            {[
              { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1.5l1.8 5.3H18l-4.6 3.4 1.75 5.3L10 12.3l-5.15 3.2 1.75-5.3L2 6.8h6.2L10 1.5z" stroke="#0A0A0F" strokeWidth="1.4" strokeLinejoin="round"/></svg>, title: 'Reliable Rails', desc: 'Deterministic execution with fallback strategies and failure handling built in.' },
              { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3" stroke="#0A0A0F" strokeWidth="1.5"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.1 4.1l1.4 1.4M14.5 14.5l1.4 1.4M4.1 15.9l1.4-1.4M14.5 5.5l1.4-1.4" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/></svg>, title: 'Governance by Default', desc: 'Approval gates, role-based access, and policy enforcement at every layer.' },
              { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5.5 10a4.5 4.5 0 019 0" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/><path d="M3 10a7 7 0 0114 0" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/><line x1="10" y1="10" x2="10" y2="16" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/><line x1="7.5" y1="16" x2="12.5" y2="16" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/></svg>, title: 'Deployment Flexibility', desc: 'Cloud, on-premise, or hybrid. Your infrastructure, your control.' },
              { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="#0A0A0F" strokeWidth="1.5"/><circle cx="10" cy="10" r="4" stroke="#0A0A0F" strokeWidth="1.5"/><circle cx="10" cy="10" r="1.2" fill="#0A0A0F"/></svg>, title: 'Observability & Traceability', desc: 'Complete visibility into every workflow execution and decision path.' },
            ].map((c, i) => (
              <div className="card" key={i} style={{ '--i': i }}>
                <div className="card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── INDUSTRIES ── */}
      <ScrollFadeIn>
        <section className="ops-s s">
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="s-label">Industries</div>
            <h2 className="s-h2">Built for Enterprise Operations</h2>
            <p className="s-body">Deployed across regulated, high-volume industries where reliability and governance are non-negotiable.</p>
          </div>
          <div className="grid-3">
            {[
              { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="9" width="16" height="9" rx="1.5" stroke="#0A0A0F" strokeWidth="1.5"/><path d="M5.5 9V7a4.5 4.5 0 019 0v2" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/><line x1="5" y1="13" x2="15" y2="13" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/></svg>, title: 'Manufacturing', desc: 'Reduced production coordination time by 60%', outcome: '60% faster coordination' },
              { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="7.5" width="12" height="8" rx="1.5" stroke="#0A0A0F" strokeWidth="1.5"/><path d="M14 10.5h2.5a2 2 0 012 2v1.5a2 2 0 01-2 2H14" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/><circle cx="5.5" cy="17.5" r="1.5" stroke="#0A0A0F" strokeWidth="1.5"/><circle cx="11" cy="17.5" r="1.5" stroke="#0A0A0F" strokeWidth="1.5"/></svg>, title: 'Logistics', desc: 'Automated cross-system routing decisions', outcome: 'Real-time routing at scale' },
              { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="2.5" stroke="#0A0A0F" strokeWidth="1.5"/><path d="M5.86 5.86a6 6 0 000 8.28M14.14 5.86a6 6 0 010 8.28" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/><path d="M3.22 3.22a9.5 9.5 0 000 13.56M16.78 3.22a9.5 9.5 0 010 13.56" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/></svg>, title: 'Telecom / Utilities', desc: 'Enabled real-time service provisioning', outcome: 'Sub-second provisioning' },
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

      {/* ── INTEGRATIONS ── */}
      <ScrollFadeIn>
        <section className="int-s s">
          <div className="center" style={{ marginBottom: 40 }}>
            <div className="s-label">Compatibility</div>
            <h2 className="s-h2">Works with your existing stack.</h2>
            <p className="s-body">Luthen connects to the systems already running your enterprise — no rip-and-replace, no new infrastructure.</p>
          </div>
          <div className="int-grid">
            {[
              { name: 'Salesforce', color: '#0070d2' },
              { name: 'SAP ERP', color: '#007db8' },
              { name: 'Oracle', color: '#e8232a' },
              { name: 'ServiceNow', color: '#00b4e5' },
              { name: 'Microsoft 365', color: '#185abd' },
              { name: 'AWS', color: '#ff9900' },
              { name: 'Google Cloud', color: '#4285f4' },
              { name: 'Azure', color: '#0078d4' },
              { name: 'Slack', color: '#611f69' },
              { name: 'Workday', color: '#1264a3' },
              { name: 'Jira', color: '#0052cc' },
              { name: 'Shopify', color: '#17b897' },
            ].map(({ name, color }) => (
              <span className="int-pill" key={name}>
                <span className="int-dot" style={{ background: color }}></span>
                {name}
              </span>
            ))}
          </div>
          <p className="int-note">200+ connectors available. Don't see yours? <Link to="/contact">Request an integration →</Link></p>
        </section>
      </ScrollFadeIn>

      {/* ── TESTIMONIALS ── */}
      <ScrollFadeIn>
        <section className="testi-s">
          <div className="testi-header">
            <div className="testi-s-lbl">Customer Stories</div>
            <h2 className="testi-h2">Enterprises that chose autonomy.</h2>
          </div>
          <div className="testi-grid">
            {[
              { initials: 'AK', name: 'Andrei Kowalski', role: 'VP Operations · Axion Industries', gradient: 'linear-gradient(135deg,var(--turquoise),var(--yellow))', quote: 'We connected our SAP environment in under two weeks. The governance layer gave our compliance team confidence we\'d never had with any AI vendor before.' },
              { initials: 'SM', name: 'Sarah Mensah', role: 'Chief Digital Officer · Meridian Global', gradient: 'linear-gradient(135deg,var(--salmon),var(--yellow))', quote: 'The cost internalization is real. By month 10 our per-workflow cost had dropped 38%. That\'s compound efficiency we couldn\'t get from any API-first vendor.' },
              { initials: 'TN', name: 'Takeshi Nishi', role: 'Head of IT · Fortis Systems', gradient: 'linear-gradient(135deg,var(--green),var(--turquoise))', quote: 'Audit readiness used to require a dedicated team. Luthen\'s traceability layer means every decision is logged, attributed, and accessible in one click.' },
            ].map((t, i) => (
              <div className="testi-card" key={i} style={{ '--i': i }}>
                <div className="testi-stars">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="testi-star" viewBox="0 0 14 14" fill="currentColor">
                      <path d="M7 1l1.5 4h4l-3.25 2.4 1.25 4L7 9.1l-3.5 2.3 1.25-4L1.5 5h4L7 1z"/>
                    </svg>
                  ))}
                </div>
                <p className="testi-quote">{t.quote}</p>
                <div className="testi-meta">
                  <div className="testi-avatar" style={{ background: t.gradient }}>{t.initials}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── CTA ── */}
      <ScrollFadeIn>
        <section className="cta-s">
          <div className="cta-s-lbl">Get Started</div>
          <h2 className="cta-h2">Build Your Autonomy Layer.</h2>
          <p className="cta-sub">Join 500+ enterprises running intelligent, governed workflows on Luthen.</p>
          <div className="cta-btns">
            <Link to="/demo" className="btn-hero">
              Schedule a Solution Blueprint
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link to="/demo" className="btn-hero-ghost">Take the Enterprise Autonomy Assessment</Link>
          </div>
          <div className="cta-micro">
            {['No credit card required', 'Dedicated onboarding team', 'Custom enterprise SLA available'].map(item => (
              <span className="cta-micro-item" key={item}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.5 6l3 3 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {item}
              </span>
            ))}
          </div>
        </section>
      </ScrollFadeIn>
    </>
  )
}
