import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

const plans = [
  {
    name: 'Starter',
    price: 'Custom',
    desc: 'For teams exploring enterprise autonomy with focused, single-domain deployments.',
    features: [
      'Up to 5 active workflows',
      '10 system connectors',
      'Basic governance & audit logs',
      'Email & chat support',
      'Shared cloud deployment',
      'Standard SLA',
    ],
    cta: 'Talk to Sales',
    ctaClass: 'plan-cta-ghost',
    featured: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For organizations deploying autonomy across multiple functions and systems.',
    features: [
      'Unlimited active workflows',
      '200+ connectors',
      'Advanced governance & RBAC',
      'Approval gates & policy engine',
      'Dedicated CSM & onboarding',
      'Cloud, on-premise, or hybrid',
      '99.99% uptime SLA',
      'SOC 2 Type II + ISO 27001',
    ],
    cta: 'Request a Demo',
    ctaClass: 'plan-cta-primary',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Air-Gap / Sovereign',
    price: 'Custom',
    desc: 'For regulated environments requiring fully isolated, on-premise or sovereign cloud deployment.',
    features: [
      'Everything in Enterprise',
      'Air-gapped deployment option',
      'Private model support',
      'Custom data residency',
      'Dedicated security review',
      'Custom contractual terms',
    ],
    cta: 'Contact Us',
    ctaClass: 'plan-cta-ghost',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Pricing</div>
          <h1>Enterprise-grade.<br/>Priced to scale.</h1>
          <p className="page-hero-sub">All plans are tailored to your specific deployment needs. No hidden fees, no per-seat surprises.</p>
        </div>
      </section>

      <ScrollFadeIn>
        <section className="s" style={{ background: '#fff' }}>
          <div className="center" style={{ marginBottom: 56 }}>
            <div className="s-label">Plans</div>
            <h2 className="s-h2">Choose your starting point.</h2>
            <p className="s-body">Every plan includes access to the full platform. Pricing scales with deployment complexity and volume.</p>
          </div>
          <div className="pricing-grid">
            {plans.map(plan => (
              <div key={plan.name} className={`plan-card${plan.featured ? ' featured' : ''}`}>
                {plan.badge && <div className="plan-badge">{plan.badge}</div>}
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">{plan.price}</div>
                <p className="plan-desc">{plan.desc}</p>
                <div className="plan-divider"></div>
                <div className="plan-features">
                  {plan.features.map(feat => (
                    <div className="plan-feat" key={feat}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5 6.5-6" stroke="#16a34a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {feat}
                    </div>
                  ))}
                </div>
                <Link to="/demo" className={`plan-cta ${plan.ctaClass}`}>{plan.cta}</Link>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="s" style={{ background: 'var(--g50)' }}>
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="s-label">What's included</div>
            <h2 className="s-h2">Every plan includes the full platform.</h2>
            <p className="s-body">No feature-gating on core capabilities. Pricing is based on deployment scale, not capability access.</p>
          </div>
          <div className="grid-3" style={{ maxWidth: 900, margin: '0 auto' }}>
            {[
              { title: 'Connect Engine', desc: 'All 200+ connectors included. No per-connector fees.' },
              { title: 'Intelligence Engine', desc: 'Governed AI with pattern internalization on all plans.' },
              { title: 'Builder Engine', desc: 'Visual workflow builder with full deployment capabilities.' },
              { title: 'Governance & Audit', desc: 'Full audit trail, approval gates, and RBAC on every plan.' },
              { title: 'Security & Compliance', desc: 'SOC 2, GDPR, ISO 27001 coverage for all deployments.' },
              { title: 'Implementation Support', desc: 'Dedicated onboarding team for every new deployment.' },
            ].map(item => (
              <div className="card" key={item.title}>
                <div className="card-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9l4 4 9-8" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* FAQ */}
      <ScrollFadeIn>
        <section className="s" style={{ background: '#fff', maxWidth: 780, margin: '0 auto' }}>
          <div className="center" style={{ marginBottom: 48 }}>
            <div className="s-label">FAQ</div>
            <h2 className="s-h2">Common questions.</h2>
          </div>
          {[
            { q: 'How is pricing determined?', a: 'Pricing is scoped based on the number of active workflows, data volume, deployment model (cloud vs. on-premise), and SLA requirements. We work with your team to design a commercial structure that aligns with expected ROI.' },
            { q: 'Is there a trial or proof of concept?', a: 'Yes. We offer a structured Proof of Value engagement where we deploy one production-grade workflow in your environment. Most customers complete this in 2–4 weeks.' },
            { q: 'What\'s the minimum contract term?', a: 'Enterprise agreements start at 12 months. We can accommodate multi-year arrangements with favorable pricing for longer commitments.' },
            { q: 'Do you charge per AI model call?', a: 'No. Luthen\'s Intelligence engine internalizes patterns over time, reducing your marginal cost per operation. You pay for the platform, not per-inference.' },
            { q: 'Can we start with one workflow and expand?', a: 'Absolutely. Most customers start with one or two high-value workflows and expand as they see results. Our platform is designed for incremental deployment.' },
          ].map(({ q, a }) => (
            <div key={q} style={{ paddingBottom: 24, marginBottom: 24, borderBottom: '1px solid var(--g100)' }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{q}</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--g600)' }}>{a}</p>
            </div>
          ))}
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="cta-s">
          <div className="cta-s-lbl">Get a Quote</div>
          <h2 className="cta-h2">Let's scope your deployment.</h2>
          <p className="cta-sub">Talk to our team and get a tailored commercial proposal within 48 hours.</p>
          <div className="cta-btns">
            <Link to="/demo" className="btn-hero">Schedule a Call <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></Link>
          </div>
        </section>
      </ScrollFadeIn>
    </>
  )
}
