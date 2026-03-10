import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

const featureCategories = [
  {
    name: 'Platform Core',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L3 6v6c0 4.5 3 8 7 8s7-3.5 7-8V6l-7-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    features: [
      'Unlimited active workflows',
      '400+ pre-built system connectors',
      'Visual workflow builder',
      'Real-time monitoring & analytics',
      'Custom integrations & APIs',
      'Multi-environment deployment',
    ],
  },
  {
    name: 'Intelligence & Automation',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    features: [
      'Governed AI with pattern internalization',
      'Intelligent decision routing',
      'Context-aware automation',
      'Anomaly detection & alerts',
      'Predictive analytics',
      'Natural language processing',
    ],
  },
  {
    name: 'Security & Compliance',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 8V6a5 5 0 0110 0v2m-7 4h4M4 8h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    features: [
      'ISO 27001 compliance',
      'GDPR Complient',
      'Advanced RBAC & permissions',
      'Complete audit trail',
      'Encrypted data at rest & in transit',
    ],
  },
  {
    name: 'Governance & Control',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M9 2L2 6v7c0 4 3 7 7 7s7-3 7-7V6L9 2zm0 6v4m0-4L5 6m4 2l4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    features: [
      'Approval gates & workflows',
      'Custom policy engine',
      'Version control & rollback',
      'Change management',
      'Compliance reporting',
      'Risk assessment tools',
    ],
  },
  {
    name: 'Deployment Options',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 4h14M3 10h14M3 16h14M7 4v12M13 4v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    features: [
      'Cloud, on-premise, or hybrid',
      'Air-gapped deployment support',
      'Private cloud compatibility',
      'Custom data residency',
      'Multi-region failover',
      'Kubernetes & container support',
    ],
  },
  {
    name: 'Support & Services',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 10a3 3 0 106 0 3 3 0 00-6 0zm-4 8c0-2.5 2-4.5 5-4.5s5 2 5 4.5M3 5h3M3 9h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    features: [
      'Dedicated customer success manager',
      'Technical onboarding & training',
      'Priority support channels',
      '99.99% uptime SLA',
      'Proactive monitoring',
      'Custom contractual terms',
    ],
  },
]

export default function Pricing() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Pricing</div>
          <h1>One platform.<br/>Tailored pricing.</h1>
          <p className="page-hero-sub">We provide a complete enterprise autonomy platform with pricing customized to your deployment needs and scale.</p>
        </div>
      </section>

      <ScrollFadeIn>
        <section className="s" style={{ background: '#fff' }}>
          <div className="center" style={{ marginBottom: 56 }}>
            <div className="s-label">Platform Capabilities</div>
            <h2 className="s-h2">Everything you need, included.</h2>
            <p className="s-body">Access the full platform with all features. Pricing is determined through consultation based on your specific requirements.</p>
          </div>
          <div className="grid-3">
            {featureCategories.map(category => (
              <div key={category.name} className="card">
                <div className="card-icon" style={{ color: 'var(--black)' }}>
                  {category.icon}
                </div>
                <h3>{category.name}</h3>
                <div className="plan-divider" style={{ marginTop: 16, marginBottom: 16 }}></div>
                <div className="plan-features">
                  {category.features.map(feat => (
                    <div className="plan-feat" key={feat}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5 6.5-6" stroke="#16a34a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="s" style={{ background: 'var(--g50)' }}>
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="s-label">How It Works</div>
            <h2 className="s-h2">Custom pricing for your needs.</h2>
            <p className="s-body">We design pricing that aligns with your deployment model, scale, and expected ROI. No hidden fees or per-seat charges.</p>
          </div>
          <div className="shift-table">
            <div className="shift-col left">
              <div className="shift-col-hdr">Pricing Factors</div>
              <div className="shift-list">
                <div className="shift-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/></svg>
                  Number of active workflows
                </div>
                <div className="shift-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/></svg>
                  Data volume & throughput
                </div>
                <div className="shift-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/></svg>
                  Deployment model
                </div>
                <div className="shift-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/></svg>
                  SLA requirements
                </div>
                <div className="shift-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/></svg>
                  Support level needed
                </div>
              </div>
            </div>
            <div className="shift-col right">
              <div className="shift-col-hdr">What You Get</div>
              <div className="shift-list">
                <div className="shift-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="#16a34a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Full platform access
                </div>
                <div className="shift-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="#16a34a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  All features included
                </div>
                <div className="shift-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="#16a34a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Transparent pricing
                </div>
                <div className="shift-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="#16a34a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Flexible contract terms
                </div>
                <div className="shift-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="#16a34a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Dedicated support team
                </div>
              </div>
            </div>
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
            { q: 'How is pricing determined?', a: 'We tailor pricing based on your specific needs: number of workflows, data volume, deployment model (cloud, on-premise, or hybrid), and required SLA. Our goal is to create a commercial structure that aligns with your expected ROI and scales with your success.' },
            { q: 'What features are included?', a: 'Every customer gets access to the full platform with all features-400+ connectors, AI-powered automation, governance tools, security compliance, and dedicated support. There\'s no feature-gating or tiered capabilities.' },
            { q: 'Is there a trial or proof of concept?', a: 'Yes. We offer structured Proof of Value engagements where we deploy a production-grade workflow in your environment. Most customers complete this in 2–4 weeks and see immediate results.' },
            { q: 'What\'s the minimum contract term?', a: 'Enterprise agreements typically start at 12 months. We can accommodate multi-year arrangements with favorable pricing for longer commitments and volume scaling.' },
            { q: 'Can we start small and expand?', a: 'Absolutely. Most customers begin with one or two high-value workflows and expand incrementally as they see ROI. Our platform is designed for gradual deployment and growth.' },
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
          <div className="cta-s-lbl">Get Started</div>
          <h2 className="cta-h2">Ready to discuss pricing?</h2>
          <p className="cta-sub">Schedule a consultation with our team to explore how Luthen fits your needs and get a custom quote.</p>
          <div className="cta-btns">
            <Link to="/demo" className="btn-hero">Talk to Sales <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></Link>
          </div>
        </section>
      </ScrollFadeIn>
    </>
  )
}
