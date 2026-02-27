import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

const industries = [
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    eyebrow: 'Industry Solution',
    headline: 'Manufacturing Autonomy',
    desc: 'Reduce production coordination overhead, accelerate quality workflows, and gain real-time visibility across your factory floor — without replacing your MES or ERP.',
    stat: '60%',
    statLabel: 'reduction in coordination time',
    outcomes: [
      'Automated production order routing and scheduling',
      'Real-time quality control workflow triggers',
      'Cross-system inventory and demand signal integration',
      'Governed approval flows for change orders',
    ],
    icon: <svg width="24" height="24" viewBox="0 0 20 20" fill="none"><rect x="2" y="9" width="16" height="9" rx="1.5" stroke="#0A0A0F" strokeWidth="1.5"/><path d="M5.5 9V7a4.5 4.5 0 019 0v2" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/><line x1="5" y1="13" x2="15" y2="13" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    id: 'logistics',
    label: 'Logistics',
    eyebrow: 'Industry Solution',
    headline: 'Logistics Autonomy',
    desc: 'Automate cross-system routing decisions, carrier selection, and exception management — giving your ops team real-time control without drowning in manual coordination.',
    stat: '3×',
    statLabel: 'faster exception resolution',
    outcomes: [
      'Real-time shipment routing and re-routing decisions',
      'Automated carrier selection and rate comparison',
      'Cross-border compliance and documentation workflows',
      'Exception detection and escalation management',
    ],
    icon: <svg width="24" height="24" viewBox="0 0 20 20" fill="none"><rect x="2" y="7.5" width="12" height="8" rx="1.5" stroke="#0A0A0F" strokeWidth="1.5"/><path d="M14 10.5h2.5a2 2 0 012 2v1.5a2 2 0 01-2 2H14" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/><circle cx="5.5" cy="17.5" r="1.5" stroke="#0A0A0F" strokeWidth="1.5"/><circle cx="11" cy="17.5" r="1.5" stroke="#0A0A0F" strokeWidth="1.5"/></svg>,
  },
  {
    id: 'telecom',
    label: 'Telecom / Utilities',
    eyebrow: 'Industry Solution',
    headline: 'Telecom & Utilities Autonomy',
    desc: 'Enable sub-second service provisioning, automate network change management, and reduce time-to-resolution on service incidents — all with full compliance traceability.',
    stat: '<1s',
    statLabel: 'service provisioning time',
    outcomes: [
      'Automated network provisioning and de-provisioning',
      'Incident detection and remediation workflow triggers',
      'Regulatory reporting and compliance automation',
      'Multi-system service order orchestration',
    ],
    icon: <svg width="24" height="24" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="2.5" stroke="#0A0A0F" strokeWidth="1.5"/><path d="M5.86 5.86a6 6 0 000 8.28M14.14 5.86a6 6 0 010 8.28" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/><path d="M3.22 3.22a9.5 9.5 0 000 13.56M16.78 3.22a9.5 9.5 0 010 13.56" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    id: 'finance',
    label: 'Financial Services',
    eyebrow: 'Industry Solution',
    headline: 'Financial Services Autonomy',
    desc: 'Automate complex approval chains, streamline compliance reporting, and deploy AI-governed decision workflows — purpose-built for regulated financial environments.',
    stat: '85%',
    statLabel: 'reduction in manual processing',
    outcomes: [
      'Automated KYC and AML screening workflows',
      'Governed loan origination and approval pipelines',
      'Real-time regulatory reporting and audit trails',
      'Cross-system reconciliation and exception handling',
    ],
    icon: <svg width="24" height="24" viewBox="0 0 20 20" fill="none"><rect x="2" y="5" width="16" height="12" rx="2" stroke="#0A0A0F" strokeWidth="1.5"/><path d="M2 9h16" stroke="#0A0A0F" strokeWidth="1.5"/><path d="M6 13h3" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
]

export default function Solutions() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Solutions</div>
          <h1>Built for Enterprise Operations.</h1>
          <p className="page-hero-sub">Deployed across regulated, high-volume industries where reliability, governance, and performance are non-negotiable.</p>
        </div>
      </section>

      {industries.map((ind, idx) => (
        <ScrollFadeIn key={ind.id}>
          <section
            id={ind.id}
            className="s"
            style={{ background: idx % 2 === 0 ? '#fff' : 'var(--g50)' }}
          >
            <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
              {idx % 2 === 0 ? (
                <>
                  <div>
                    <div className="s-label">{ind.eyebrow}</div>
                    <h2 className="s-h2">{ind.headline}</h2>
                    <p className="s-body" style={{ marginBottom: 28 }}>{ind.desc}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                      {ind.outcomes.map(o => (
                        <div key={o} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 500, color: 'var(--g600)' }}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l3.5 3.5 7.5-7" stroke="var(--turquoise)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          {o}
                        </div>
                      ))}
                    </div>
                    <Link to="/demo" className="btn-hero">
                      Talk to a {ind.label} Expert
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                  </div>
                  <div style={{ background: 'var(--yellow)', borderRadius: 'var(--r-xl)', padding: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 12 }}>
                    <div style={{ width: 64, height: 64, borderRadius: 'var(--r-lg)', background: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>{ind.icon}</div>
                    <div style={{ fontSize: 'clamp(48px,5vw,72px)', fontWeight: 700, letterSpacing: '-3px', color: 'var(--black)', lineHeight: 1 }}>{ind.stat}</div>
                    <div style={{ fontSize: 15, color: 'rgba(0,0,0,0.55)', fontWeight: 500 }}>{ind.statLabel}</div>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ background: 'var(--black)', borderRadius: 'var(--r-xl)', padding: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 12 }}>
                    <div style={{ width: 64, height: 64, borderRadius: 'var(--r-lg)', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                      <span style={{ color: '#fff' }}>{ind.icon}</span>
                    </div>
                    <div style={{ fontSize: 'clamp(48px,5vw,72px)', fontWeight: 700, letterSpacing: '-3px', color: 'var(--turquoise)', lineHeight: 1 }}>{ind.stat}</div>
                    <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{ind.statLabel}</div>
                  </div>
                  <div>
                    <div className="s-label">{ind.eyebrow}</div>
                    <h2 className="s-h2">{ind.headline}</h2>
                    <p className="s-body" style={{ marginBottom: 28 }}>{ind.desc}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                      {ind.outcomes.map(o => (
                        <div key={o} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 500, color: 'var(--g600)' }}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l3.5 3.5 7.5-7" stroke="var(--turquoise)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          {o}
                        </div>
                      ))}
                    </div>
                    <Link to="/demo" className="btn-hero">
                      Talk to a {ind.label} Expert
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </section>
        </ScrollFadeIn>
      ))}

      <ScrollFadeIn>
        <section className="cta-s">
          <div className="cta-s-lbl">Your Industry</div>
          <h2 className="cta-h2">Don't see your vertical?</h2>
          <p className="cta-sub">Luthen's autonomy layer is flexible. Talk to our team about your specific use case.</p>
          <div className="cta-btns">
            <Link to="/demo" className="btn-hero">Schedule a Discovery Call <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></Link>
          </div>
        </section>
      </ScrollFadeIn>
    </>
  )
}
