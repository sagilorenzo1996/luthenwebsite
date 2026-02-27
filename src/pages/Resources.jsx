import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

const caseStudies = [
  {
    company: 'Axion Industries',
    industry: 'Manufacturing',
    metric: '60%',
    metricLabel: 'reduction in coordination time',
    summary: 'How Axion Industries connected their SAP environment in under two weeks and achieved governance their compliance team finally trusted.',
    initials: 'AI',
    gradient: 'linear-gradient(135deg,var(--turquoise),var(--yellow))',
  },
  {
    company: 'Meridian Global',
    industry: 'Financial Services',
    metric: '38%',
    metricLabel: 'per-workflow cost reduction at month 10',
    summary: 'How Meridian Global\'s CDO achieved compound cost efficiency through Luthen\'s intelligence internalization engine.',
    initials: 'MG',
    gradient: 'linear-gradient(135deg,var(--salmon),var(--yellow))',
  },
  {
    company: 'Fortis Systems',
    industry: 'Telecom',
    metric: '1-click',
    metricLabel: 'audit trail access for compliance',
    summary: 'How Fortis Systems replaced their dedicated audit team with Luthen\'s traceability layer without losing any compliance coverage.',
    initials: 'FS',
    gradient: 'linear-gradient(135deg,var(--green),var(--turquoise))',
  },
]

const blogPosts = [
  {
    category: 'Insight',
    title: 'The Enterprise AI Tax: Why Most AI Projects Fail Before They Ship',
    desc: 'Migration costs, linear spend, and workflow rigidity are draining ROI from every enterprise AI investment. Here\'s how to escape.',
    readTime: '8 min read',
    date: 'Jan 2025',
  },
  {
    category: 'Product',
    title: 'Pattern Internalization: How Luthen\'s Intelligence Engine Gets Cheaper Over Time',
    desc: 'Unlike per-call API pricing, Luthen internalizes your workflow patterns. A deep dive into the economics of autonomous execution.',
    readTime: '6 min read',
    date: 'Dec 2024',
  },
  {
    category: 'Guide',
    title: 'Governing AI in Regulated Industries: A Practical Framework',
    desc: 'How to deploy enterprise AI that satisfies compliance teams without sacrificing agility. SOC 2, GDPR, and ISO 27001 considerations.',
    readTime: '11 min read',
    date: 'Nov 2024',
  },
]

export default function Resources() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Resources</div>
          <h1>Learn from the best-in-class.</h1>
          <p className="page-hero-sub">Case studies, documentation, and insight from 500+ enterprise deployments across manufacturing, logistics, telecom, and financial services.</p>
        </div>
      </section>

      {/* Case Studies */}
      <ScrollFadeIn>
        <section id="case-studies" className="s" style={{ background: '#fff' }}>
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="s-label">Customer Stories</div>
            <h2 className="s-h2">Case Studies</h2>
            <p className="s-body">Real results from enterprises that chose to upgrade execution, not their stack.</p>
          </div>
          <div className="grid-3">
            {caseStudies.map(cs => (
              <div className="card" key={cs.company} style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: cs.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, color: 'var(--black)', flexShrink: 0 }}>{cs.initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{cs.company}</div>
                    <div style={{ fontSize: 12, color: 'var(--g400)' }}>{cs.industry}</div>
                  </div>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <span style={{ fontSize: 'clamp(32px,3.5vw,48px)', fontWeight: 700, letterSpacing: '-2px', color: 'var(--black)', lineHeight: 1 }}>{cs.metric}</span>
                  <div style={{ fontSize: 12.5, color: 'var(--g600)', marginTop: 4 }}>{cs.metricLabel}</div>
                </div>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: 'var(--g600)' }}>{cs.summary}</p>
                <div className="card-outcome" style={{ marginTop: 16 }}>
                  Read Case Study →
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* Blog */}
      <ScrollFadeIn>
        <section id="blog" className="s" style={{ background: 'var(--g50)' }}>
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="s-label">Insights</div>
            <h2 className="s-h2">Blog</h2>
            <p className="s-body">Perspectives on enterprise autonomy, AI governance, and the economics of intelligent execution.</p>
          </div>
          <div className="grid-3">
            {blogPosts.map(post => (
              <div className="card" key={post.title} style={{ cursor: 'pointer' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--turquoise)', background: 'rgba(114,203,214,0.12)', padding: '3px 10px', borderRadius: 100, marginBottom: 14 }}>
                  {post.category}
                </div>
                <h3 style={{ marginBottom: 10, lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ marginBottom: 16 }}>{post.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12, color: 'var(--g400)', fontWeight: 500 }}>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* Documentation & API */}
      <ScrollFadeIn>
        <section id="api" className="s" style={{ background: 'var(--black)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <div className="con-s-lbl">Developer Resources</div>
              <h2 className="con-h2">Docs & API Reference</h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', marginBottom: 32 }}>Everything your team needs to connect, configure, and extend Luthen's autonomy layer — from quickstart guides to full API reference documentation.</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="#" className="btn-console">API Reference <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
                <a href="#" className="btn-console">Quickstart Guide <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              </div>
            </div>
            <div className="console-box">
              <div className="con-titlebar">
                <div className="tdot" style={{ background: '#ef4444' }}></div>
                <div className="tdot" style={{ background: '#f59e0b' }}></div>
                <div className="tdot" style={{ background: '#22c55e' }}></div>
                <span className="con-title-lbl">luthen-sdk · TypeScript</span>
              </div>
              <div className="con-body">
                <div className="cl"><span className="ci ci-a" style={{ color: 'rgba(114,203,214,0.8)' }}>import</span><span className="ct-w"> {'{'} LuthenClient {'}'} </span><span className="ci ci-a" style={{ color: 'rgba(114,203,214,0.8)' }}>from</span><span className="ct-y"> 'luthen'</span></div>
                <div className="con-div"></div>
                <div className="cl"><span className="ct-d">const</span><span className="ct-w"> client = </span><span className="ct-y">new</span><span className="ct-w"> LuthenClient({'{'}</span></div>
                <div className="cl" style={{ paddingLeft: 20 }}><span className="ct-g">apiKey</span><span className="ct-w">: process.env.</span><span className="ct-y">LUTHEN_API_KEY</span></div>
                <div className="cl"><span className="ct-w">{'}'})</span></div>
                <div className="con-div"></div>
                <div className="cl"><span className="ct-d">const</span><span className="ct-w"> result = </span><span className="ct-a">await</span><span className="ct-w"> client.workflows.</span><span className="ct-g">run</span><span className="ct-w">({'{'}</span></div>
                <div className="cl" style={{ paddingLeft: 20 }}><span className="ct-g">id</span><span className="ct-w">: </span><span className="ct-y">'PO_APPROVAL_v2'</span><span className="ct-w">,</span></div>
                <div className="cl" style={{ paddingLeft: 20 }}><span className="ct-g">payload</span><span className="ct-w">: invoiceData</span></div>
                <div className="cl"><span className="ct-w">{'}'})</span></div>
              </div>
              <div className="con-footer">
                <span className="con-foot-lbl">npm install luthen</span>
                <span className="con-foot-val">v2.4.1</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <section className="cta-s">
          <div className="cta-s-lbl">Get Started</div>
          <h2 className="cta-h2">Ready to see it live?</h2>
          <p className="cta-sub">Schedule a personalized demo with our solutions team.</p>
          <div className="cta-btns">
            <Link to="/demo" className="btn-hero">Request a Demo <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></Link>
          </div>
        </section>
      </ScrollFadeIn>
    </>
  )
}
