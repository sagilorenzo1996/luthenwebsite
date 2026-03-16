import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

export default function PlatformIntelligence() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Platform</div>
          <h1>Intelligence Engine</h1>
          <p className="page-hero-sub">Governed AI reasoning with an improving cost curve for enterprise workflows.</p>
        </div>
      </section>

      <ScrollFadeIn>
        <section className="s" style={{ background: 'var(--yellow)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div style={{ background: 'rgba(255,255,255,0.65)', borderRadius: 'var(--r-xl)', padding: 36, border: '1px solid rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)' }}>
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--g400)', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Cost Efficiency Over Time</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-2px', color: '#16a34a' }}>-40%</span>
                  <span style={{ fontSize: 14, color: 'var(--g600)' }}>at month 12</span>
                </div>
              </div>
              <div style={{ height: 4, borderRadius: 2, background: 'var(--g100)', marginBottom: 8, overflow: 'hidden' }}>
                <div style={{ width: '60%', height: '100%', background: 'linear-gradient(90deg, #2563eb, #16a34a)', borderRadius: 2 }}></div>
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--g600)' }}>Marginal cost curve improving as patterns internalize</div>
            </div>
            <div>
              <div className="s-label">Engine 02</div>
              <h2 className="s-h2">Intelligence</h2>
              <p className="s-body" style={{ marginBottom: 32 }}>Governed AI reasoning with an improving cost curve. Unlike per-call API pricing, Luthen's Intelligence engine internalizes your patterns, making every workflow cheaper as it runs.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {['Governed AI with enterprise-grade auditability', 'Pattern internalization reduces marginal cost over time', 'Works with Claude, GPT-4, Gemini, Grok, and private models', 'Full inference explainability and decision logs'].map(feat => (
                  <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 500, color: 'var(--g600)' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l3.5 3.5 7.5-7" stroke="#0A0A0F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {feat}
                  </div>
                ))}
              </div>
              <Link to="/demo" className="btn-hero">Explore Intelligence Engine
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="cta-s">
          <div className="cta-s-lbl">Platform</div>
          <h2 className="cta-h2">Explore More Engines</h2>
          <p className="cta-sub">Pair Intelligence with Connect and Builder for full execution coverage.</p>
          <div className="cta-btns">
            <Link to="/platform/connect" className="btn-hero">Connect</Link>
            <Link to="/platform/builder" className="btn-hero-ghost">Builder</Link>
          </div>
        </section>
      </ScrollFadeIn>
    </>
  )
}
