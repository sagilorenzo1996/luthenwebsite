import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

// -- Workflow card with cycling animation --------------------------------------
function WorkflowCard() {
  const steps = [
    { label: 'Connect ? SAP ERP' },
    { label: 'Execute ? Invoice Processing' },
    { label: 'Internalize ? Cost -40%' },
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
          <span className="wf-t-arr">?</span>
          <span className="wf-t-new">0.8s</span>
        </div>
      </div>
    </div>
  )
}

// -- Stat counter --------------------------------------------------------------
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
      {/* -- TRUST BAR -- */}
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

      {/* -- HERO -- */}
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
            <Link to="/platform/connect" className="btn-hero-ghost">Watch a Workflow Run</Link>
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

      {/* -- SHIFT -- */}
      <ScrollFadeIn>
        <section className="shift-s s">
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="s-label">Solution</div>
            <h2 className="s-h2">The Shift to Autonomous Enterprise</h2>
            <p className="s-body">Legacy AI deployments optimise for capability. The autonomous enterprise optimises for execution.</p>
          </div>
          <div className="shift-table">
            <div className="shift-col left">
              <div className="shift-col-hdr">Traditional Approach</div>
              <div className="shift-list">
                {['Manual coordination','Static dashboards','Linear AI spend','Slow workflow delivery'].map(item => (
                  <div className="shift-item shift-item-x" key={item}>
                    <span className="shift-mark shift-mark-x" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 2l9 9M11 2L2 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="shift-col right">
              <div className="shift-col-hdr">Autonomous Enterprise</div>
              <div className="shift-list">
                {['Governed execution','Repeatable workflows','Improving cost curve','Capability generation'].map(item => (
                  <div className="shift-item shift-item-check" key={item}>
                    <span className="shift-mark shift-mark-check" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5l3.5 3.5 6-6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* -- THREE ENGINES -- */}
      <ScrollFadeIn>
        <section className="eng-s s">
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="s-label">Platform</div>
            <h2 className="s-h2">One Platform. Three Engines.</h2>
            <p className="s-body">Each engine works standalone or together — delivering governed autonomy on top of what you already have.</p>
          </div>
          <div className="eng-grid">
            <article className="engine-panel" style={{ '--i': 0 }}>
              <div className="card-icon icon-blue">
                <img src="/assets/icons/pulse.svg" alt="Connect icon" width="50" height="50" />
              </div>
              <h3 className="engine-title">Connect</h3>
              <p className="engine-tagline">Bring legacy and modern systems into the AI era — fast and safely</p>
              <ul className="engine-bullets">
                <li>Activate SAP and Oracle in days.</li>
                <li>Secure data flows with automatic audit trails.</li>
                <li>No rip-and-replace requirements.</li>
                <li>Real-time data access.</li>
              </ul>
              <p className="engine-note">Powered by a battle-tested integration layer.</p>
            </article>
            <article className="engine-panel" style={{ '--i': 1 }}>
              <div className="card-icon icon-purple">
                <img src="/assets/icons/lens.svg" alt="Intelligence icon" width="50" height="50" />
              </div>
              <h3 className="engine-title">Intelligence</h3>
              <p className="engine-tagline">Talk to your enterprise data in plain English — answers get faster and cheaper every day</p>
              <ul className="engine-bullets">
                <li>Natural-language questions across your enterprise data.</li>
                <li>Self-improving cached responses.</li>
                <li>Speed acceleration over time.</li>
                <li>Human-in-the-loop governance.</li>
                <li>Strict platform rules.</li>
              </ul>
            </article>
            <article className="engine-panel" style={{ '--i': 2 }}>
              <div className="card-icon icon-green">
                <img src="/assets/icons/neurocore.svg" alt="Builder icon" width="50" height="50" />
              </div>
              <h3 className="engine-title">Builder</h3>
              <p className="engine-tagline">From intent to production-ready applications &amp; autonomous workflows — in minutes</p>
              <ul className="engine-bullets">
                <li>Generated CRUD APIs.</li>
                <li>Runtime data model changes.</li>
                <li>80% zero-boilerplate productivity.</li>
                <li>Build structured apps and workflows.</li>
                <li>Embed conversational intelligence.</li>
              </ul>
            </article>
          </div>
        </section>
      </ScrollFadeIn>

      {/* -- HOW IT WORKS -- */}
      <ScrollFadeIn>
        <section className="hiw-s s">
          <div className="center" style={{ marginBottom: 56 }}>
            <div className="s-label">Process</div>
            <h2 className="s-h2">How Luthen Works Together</h2>
            <p className="s-body">One metadata foundation powers it all — adapt live, learn from every interaction, stay in complete control.</p>
          </div>
          <div className="workflow-flow">
            {[
              'Existing Systems',
              'Connect — real-time data & events',
              'Intelligence — ask questions & understand',
              'Builder — create applications & execute workflows',
              'Governed Outcomes & Continuous Improvement',
            ].map((step, i) => (
              <div key={step} className="workflow-step">
                <div className="workflow-index">{String(i + 1).padStart(2, '0')}</div>
                <p className="workflow-text">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* -- VALUE PROPOSITION -- */}
      <ScrollFadeIn>
        <section className="value-s s">
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="s-label">Value</div>
            <h2 className="s-h2">Why Teams Choose Luthen</h2>
          </div>
          <div className="grid-3">
            {[
              {
                title: 'No Migration Needed',
                desc: 'Layer intelligence and automation directly on your current infrastructure.',
              },
              {
                title: 'Self-Improving Performance',
                desc: 'The more you use it, the faster and more cost-effective it becomes.',
              },
              {
                title: 'Governed by Design',
                desc: 'Security, role-based access, audit trails and traceability — built in, not added later.',
              },
              {
                title: 'Never Get Blocked',
                desc: 'Start with no-code/low-code speed, extend with custom code whenever needed.',
              },
              {
                title: 'Days Instead of Months',
                desc: 'Integrations, insights and applications go live dramatically faster.',
              },
              {
                title: 'No Lock-in',
                desc: 'Open architecture. Bring your own team. Extend anywhere..',
              },
            ].map((item, i) => (
              <div className="card value-card" key={item.title} style={{ '--i': i }}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* -- CTA -- */}
      <ScrollFadeIn>
        <section className="cta-s">
          <div className="cta-s-lbl">Get Started</div>
          <h2 className="cta-h2">Ready to Upgrade Execution — Not Your Stack?</h2>
          <p className="cta-sub">See what becomes possible when legacy systems, conversational intelligence and rapid application building work as one governed platform.</p>
          <div className="cta-btns">
            <Link to="/demo" className="btn-hero">
              Book a Blueprint Session
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link to="/platform/builder" className="btn-hero-ghost">Explore the Builder First</Link>
            <Link to="/demo" className="btn-hero-ghost">Request a Demo for Your Use Case</Link>
          </div>
          <p className="cta-tagline">Luthen — Build enterprise. Not boilerplate.</p>
        </section>
      </ScrollFadeIn>
    </>
  )
}

