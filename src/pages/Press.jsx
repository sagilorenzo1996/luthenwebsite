import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

const pressReleases = [
  {
    date: 'February 2025',
    tag: 'Funding',
    title: 'Luthen Raises $47M Series B to Expand Enterprise Autonomy Layer',
    excerpt: 'The round, led by Sequoia Capital with participation from Benchmark and Andreessen Horowitz, will accelerate product development and international expansion across APAC and EMEA.',
    featured: true,
  },
  {
    date: 'October 2024',
    tag: 'Milestone',
    title: 'Luthen Surpasses 500 Enterprise Deployments and Achieves SOC 2 Type II Certification',
    excerpt: 'Luthen today announced it has crossed 500 active enterprise deployments across manufacturing, logistics, telecom, and financial services - achieving SOC 2 Type II and ISO 27001 certification in the same quarter.',
    featured: false,
  },
  {
    date: 'June 2024',
    tag: 'Product',
    title: 'Luthen Launches Intelligence Engine with Pattern Internalization',
    excerpt: 'The new Intelligence engine introduces a proprietary pattern-internalization layer that reduces the marginal cost of each workflow execution over time - breaking the linear cost curve of traditional AI API pricing.',
    featured: false,
  },
  {
    date: 'March 2023',
    tag: 'Funding',
    title: 'Luthen Closes $22M Series A to Scale Autonomous Workflow Platform',
    excerpt: 'Luthen has raised $22M in Series A funding led by Kleiner Perkins. The company will use the capital to expand its connector library, scale its enterprise customer success team, and deepen its governance capabilities.',
    featured: false,
  },
  {
    date: 'January 2022',
    tag: 'Launch',
    title: 'Luthen Launches with $8M Seed to Build the Enterprise Autonomy Layer',
    excerpt: 'Founded by former SAP and Google Cloud engineers, Luthen emerges from stealth with $8M in seed funding from Sequoia Capital, targeting the multi-trillion dollar enterprise workflow automation market.',
    featured: false,
  },
]

const coverage = [
  { outlet: 'TechCrunch', headline: '"Luthen wants to make enterprise AI actually work - starting with your existing systems"', date: 'Feb 2025' },
  { outlet: 'Forbes', headline: '"The Autonomous Enterprise Is Here. Luthen Is Building the Rails for It."', date: 'Feb 2025' },
  { outlet: 'VentureBeat', headline: '"How Luthen\'s cost internalization model is upending enterprise AI economics"', date: 'Jan 2025' },
  { outlet: 'The Information', headline: '"Inside the startup betting that enterprises won\'t rip and replace their ERP systems for AI"', date: 'Dec 2024' },
  { outlet: 'Bloomberg Technology', headline: '"SAP veterans raise $47M to bring autonomous workflows to the Fortune 500"', date: 'Feb 2025' },
  { outlet: 'Wired', headline: '"Luthen\'s governance-first approach to enterprise AI is winning over compliance teams"', date: 'Nov 2024' },
]

const tagColors = {
  Funding: { bg: 'rgba(114,203,214,0.12)', color: 'var(--turquoise)' },
  Milestone: { bg: 'rgba(186,219,160,0.15)', color: '#16a34a' },
  Product: { bg: 'rgba(139,92,246,0.1)', color: '#8b5cf6' },
  Launch: { bg: 'rgba(246,152,117,0.15)', color: '#e05c1b' },
}

export default function Press() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Newsroom</div>
          <h1>Press &amp; Media.</h1>
          <p className="page-hero-sub">The latest news, announcements, and media coverage from Luthen. For press inquiries, contact <a href="mailto:support@behaviol.com" style={{ color: 'var(--black)', fontWeight: 600, borderBottom: '1px solid rgba(0,0,0,0.2)' }}>support@behaviol.com</a></p>
        </div>
      </section>

      {/* ── FEATURED RELEASE ── */}
      <ScrollFadeIn>
        <section className="s" style={{ background: '#fff' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="s-label" style={{ marginBottom: 32 }}>Latest Announcement</div>

            {/* Featured card */}
            <div style={{ background: 'var(--yellow)', borderRadius: 'var(--r-xl)', padding: '48px 52px', marginBottom: 48, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: -120, top: -120, width: 400, height: 400, background: 'radial-gradient(circle,rgba(114,203,214,0.2) 0%,transparent 65%)', pointerEvents: 'none' }} />
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--turquoise)', background: 'rgba(255,255,255,0.6)', padding: '3px 10px', borderRadius: 100, marginBottom: 20 }}>
                Funding
              </div>
              <h2 style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 700, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 16, maxWidth: 680 }}>
                Luthen Raises $47M Series B to Expand Enterprise Autonomy Layer
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(0,0,0,0.6)', maxWidth: 620, marginBottom: 28 }}>
                The round, led by Sequoia Capital with participation from Benchmark and Andreessen Horowitz, will accelerate product development and international expansion across APAC and EMEA markets.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 13, color: 'rgba(0,0,0,0.45)', fontWeight: 500 }}>February 2025</span>
                <a href="mailto:support@behaviol.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 20px', borderRadius: 'var(--r-md)', background: 'var(--black)', color: '#fff', fontWeight: 600, fontSize: 13.5, textDecoration: 'none' }}>
                  Request Full Release
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>

            {/* Press release list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {pressReleases.slice(1).map((pr, i) => {
                const tc = tagColors[pr.tag] || { bg: 'var(--g100)', color: 'var(--g600)' }
                return (
                  <div key={pr.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 28, padding: '28px 0', borderBottom: '1px solid var(--g100)' }}>
                    <div style={{ flexShrink: 0, minWidth: 110 }}>
                      <div style={{ fontSize: 12.5, color: 'var(--g400)', fontWeight: 500 }}>{pr.date}</div>
                      <div style={{ display: 'inline-flex', alignItems: 'center', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: tc.color, background: tc.bg, padding: '2px 8px', borderRadius: 100, marginTop: 6 }}>{pr.tag}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.3px', marginBottom: 8, lineHeight: 1.35 }}>{pr.title}</h3>
                      <p style={{ fontSize: 13.5, lineHeight: 1.65, color: 'var(--g600)' }}>{pr.excerpt}</p>
                    </div>
                    <a href="mailto:support@behaviol.com" style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: 5, padding: '8px 14px', borderRadius: 'var(--r-sm)', border: '1.5px solid var(--g200)', fontSize: 12.5, fontWeight: 600, color: 'var(--black)', textDecoration: 'none', transition: 'all 0.18s', whiteSpace: 'nowrap' }}>
                      Full Release
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── MEDIA COVERAGE ── */}
      <ScrollFadeIn>
        <section className="s" style={{ background: 'var(--g50)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="center" style={{ marginBottom: 52 }}>
              <div className="s-label">As Seen In</div>
              <h2 className="s-h2">Media Coverage</h2>
              <p className="s-body">How the world's leading technology publications are covering the autonomous enterprise movement.</p>
            </div>
            <div className="grid-3">
              {coverage.map(item => (
                <div className="card" key={item.headline}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--g400)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 14 }}>{item.outlet}</div>
                  <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.5, color: 'var(--black)', marginBottom: 16, letterSpacing: '-0.2px' }}>"{item.headline}"</p>
                  <div style={{ fontSize: 12, color: 'var(--g400)', fontWeight: 500 }}>{item.date}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── BRAND KIT ── */}
      <ScrollFadeIn>
        <section className="s" style={{ background: 'var(--black)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="con-s-lbl">Media Kit</div>
              <h2 className="con-h2">Brand assets &amp;<br/>press resources.</h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', marginBottom: 32 }}>
                Download our official logos, product screenshots, executive headshots, and company fact sheet. All assets are approved for editorial use.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="mailto:support@behaviol.com" className="btn-console">
                  Request Brand Kit
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a href="mailto:support@behaviol.com" className="btn-console">
                  Press Enquiries
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Logo Package', desc: 'SVG, PNG - light & dark variants', icon: '🖼️' },
                { label: 'Fact Sheet', desc: 'Company overview, stats, key milestones', icon: '📄' },
                { label: 'Executive Headshots', desc: 'High-res photos of leadership team', icon: '👤' },
                { label: 'Product Screenshots', desc: 'Platform UI, workflow console, dashboard', icon: '💻' },
              ].map(asset => (
                <div key={asset.label} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', borderRadius: 'var(--r-md)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <span style={{ fontSize: 22 }}>{asset.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: '#fff' }}>{asset.label}</div>
                    <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{asset.desc}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', flexShrink: 0 }}>
                    <a href="mailto:support@behaviol.com" style={{ fontSize: 12, fontWeight: 600, color: 'var(--turquoise)', textDecoration: 'none' }}>Request →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── PRESS CONTACT ── */}
      <ScrollFadeIn>
        <section className="cta-s">
          <div className="cta-s-lbl">Media Enquiries</div>
          <h2 className="cta-h2">Let's talk.</h2>
          <p className="cta-sub">Our communications team responds to all media enquiries within 4 business hours.</p>
          <div className="cta-btns">
            <a href="mailto:support@behaviol.com" className="btn-hero">
              Contact Press Team
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <Link to="/about" className="btn-hero-ghost">About Luthen</Link>
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: 'var(--g400)' }}>support@behaviol.com &nbsp;·&nbsp; Available Mon–Fri, 8am–6pm PT</p>
        </section>
      </ScrollFadeIn>
    </>
  )
}
