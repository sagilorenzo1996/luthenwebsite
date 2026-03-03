import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

const departments = ['All', 'Engineering', 'Product', 'Sales', 'Customer Success', 'Marketing', 'Operations']

const roles = [
  {
    title: 'Staff Software Engineer — Platform Core',
    dept: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    level: 'Senior',
    desc: 'Own and evolve the core execution engine that powers thousands of enterprise workflows. You\'ll work on distributed systems, workflow orchestration, and the low-latency infrastructure Luthen runs on.',
  },
  {
    title: 'Senior Software Engineer — Connectors',
    dept: 'Engineering',
    location: 'San Francisco, CA / Remote',
    type: 'Full-time',
    level: 'Senior',
    desc: 'Build and maintain Luthen\'s library of 200+ enterprise system connectors — from SAP and Oracle to Salesforce and Workday. Deep integration engineering and API design.',
  },
  {
    title: 'ML Engineer — Intelligence Engine',
    dept: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    level: 'Senior',
    desc: 'Design and implement the pattern internalization algorithms that reduce workflow cost over time. Work at the intersection of LLMs, fine-tuning, and production inference infrastructure.',
  },
  {
    title: 'Senior Product Manager — Builder',
    dept: 'Product',
    location: 'San Francisco, CA',
    type: 'Full-time',
    level: 'Senior',
    desc: 'Define and ship the Builder engine roadmap — the visual workflow designer used by operations teams across enterprise customers. Customer obsession and a technical background required.',
  },
  {
    title: 'Enterprise Account Executive — EMEA',
    dept: 'Sales',
    location: 'London, UK',
    type: 'Full-time',
    level: 'Senior',
    desc: 'Own and grow a portfolio of enterprise accounts across the EMEA region. You\'ll run complex multi-stakeholder deals with VP-level buyers in manufacturing, logistics, and financial services.',
  },
  {
    title: 'Enterprise Account Executive — North America',
    dept: 'Sales',
    location: 'New York, NY / San Francisco, CA',
    type: 'Full-time',
    level: 'Mid / Senior',
    desc: 'Drive new business with Fortune 1000 companies. You\'ll work closely with the solutions engineering team to run technical evaluations and close multi-year enterprise contracts.',
  },
  {
    title: 'Customer Success Manager — Manufacturing & Logistics',
    dept: 'Customer Success',
    location: 'Remote (US)',
    type: 'Full-time',
    level: 'Mid',
    desc: 'Own the post-sales journey for a portfolio of manufacturing and logistics customers. Drive deployment success, measure ROI, and expand usage across accounts.',
  },
  {
    title: 'Solutions Engineer',
    dept: 'Sales',
    location: 'San Francisco, CA / New York, NY',
    type: 'Full-time',
    level: 'Mid / Senior',
    desc: 'Partner with AEs to run technical evaluations and proof-of-value engagements. You\'ll be the technical voice in the room — configuring live workflows and connecting to customer systems.',
  },
  {
    title: 'Head of Product Marketing',
    dept: 'Marketing',
    location: 'San Francisco, CA',
    type: 'Full-time',
    level: 'Lead',
    desc: 'Own Luthen\'s positioning, messaging, and go-to-market strategy. You\'ll define how the world understands the enterprise autonomy category and drive demand through content, campaigns, and sales enablement.',
  },
  {
    title: 'Revenue Operations Manager',
    dept: 'Operations',
    location: 'San Francisco, CA / Remote',
    type: 'Full-time',
    level: 'Mid',
    desc: 'Build the operational backbone of Luthen\'s go-to-market engine. Own CRM hygiene, forecasting, territory design, and the tooling that makes our sales and CS teams more effective.',
  },
]

const values = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2.2 6.8H20l-5.7 4.1 2.2 6.8L11 15.6l-5.5 4.1 2.2-6.8L2 8.8h6.8L11 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
    title: 'Enterprise Obsession',
    desc: 'We work backwards from what enterprises actually need — not what\'s technically interesting. If it doesn\'t make a customer\'s operation better, it doesn\'t ship.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8.5" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Governance First',
    desc: 'We believe AI should be accountable before it\'s capable. We build governance into everything — not as a constraint, but as a product feature.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 11h16M11 3v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M6 6l10 10M16 6L6 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/></svg>,
    title: 'Compound Thinking',
    desc: 'We\'re building for the long term. Like the cost curve we help customers escape, we invest in things that get better over time — people, architecture, and trust.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 17V7a2 2 0 012-2h10a2 2 0 012 2v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M2 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M9 10h4M11 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    title: 'Ownership',
    desc: 'Every person at Luthen owns outcomes, not tasks. We hire people who think like founders and give them the scope to act like one.',
  },
]

const perks = [
  { icon: '💰', label: 'Competitive salary + equity', desc: 'Top-of-market comp with meaningful equity across all levels' },
  { icon: '🏥', label: 'Full health coverage', desc: 'Medical, dental, and vision for you and your family — 100% covered' },
  { icon: '🌍', label: 'Remote-friendly', desc: 'Work from our SF, NYC, or London offices or fully remote where roles allow' },
  { icon: '📈', label: 'Growth budget', desc: '$3,000/year for conferences, courses, and learning materials' },
  { icon: '🏖️', label: 'Unlimited PTO', desc: 'With a minimum 15-day policy — we mean it' },
  { icon: '🍽️', label: 'Daily meals', desc: 'Catered lunch and a stocked kitchen at all office locations' },
  { icon: '🤝', label: 'Parental leave', desc: '16 weeks fully paid for all parents, primary and secondary' },
  { icon: '💻', label: 'Home office stipend', desc: '$1,500 to set up your workspace the way you work best' },
]

export default function Careers() {
  const [activeDept, setActiveDept] = useState('All')
  const [openRole, setOpenRole] = useState(null)

  const filtered = activeDept === 'All' ? roles : roles.filter(r => r.dept === activeDept)

  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Careers</div>
          <h1>Build the future of enterprise execution.</h1>
          <p className="page-hero-sub">We're a team of engineers, product leaders, and enterprise operators who believe that intelligence should upgrade execution — not replace the infrastructure behind it.</p>
        </div>
      </section>

      {/* ── MISSION STRIP ── */}
      <div style={{ background: 'var(--black)', padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
        {[['~120', 'People globally'], ['3', 'Offices (SF · NYC · London)'], ['500+', 'Enterprise customers'], ['$77M', 'Raised to date']].map(([num, label]) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-1.5px', color: 'var(--yellow)', lineHeight: 1 }}>{num}</div>
            <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.45)', marginTop: 4, fontWeight: 500 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* ── VALUES ── */}
      <ScrollFadeIn>
        <section className="s" style={{ background: 'var(--yellow)' }}>
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="s-label">How We Work</div>
            <h2 className="s-h2">What we believe.</h2>
            <p className="s-body">Four values that shape every decision we make — in product, in hiring, and in how we work with customers.</p>
          </div>
          <div className="grid-4">
            {values.map(v => (
              <div className="card" key={v.title} style={{ background: 'rgba(255,255,255,0.55)', borderColor: 'rgba(0,0,0,0.07)' }}>
                <div className="card-icon" style={{ background: 'rgba(255,255,255,0.7)', color: 'var(--black)' }}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── PERKS ── */}
      <ScrollFadeIn>
        <section className="s" style={{ background: '#fff' }}>
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="s-label">Benefits</div>
            <h2 className="s-h2">We take care of our people.</h2>
            <p className="s-body">Benefits that reflect what matters — not a list of table-stakes checkbox perks.</p>
          </div>
          <div className="grid-4">
            {perks.map(p => (
              <div className="card" key={p.label}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{p.icon}</div>
                <h3 style={{ marginBottom: 6 }}>{p.label}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── OPEN ROLES ── */}
      <ScrollFadeIn>
        <section className="s" style={{ background: 'var(--g50)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ marginBottom: 40 }}>
              <div className="s-label">Open Roles</div>
              <h2 className="s-h2">{roles.length} positions open.</h2>
            </div>

            {/* Department filter */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  style={{
                    padding: '7px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                    border: `1.5px solid ${activeDept === dept ? 'var(--black)' : 'var(--g200)'}`,
                    background: activeDept === dept ? 'var(--black)' : '#fff',
                    color: activeDept === dept ? '#fff' : 'var(--g600)',
                    transition: 'all 0.18s var(--ease)',
                    fontFamily: 'inherit',
                  }}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Role list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {filtered.map((role, i) => (
                <div key={role.title}>
                  <div
                    style={{ padding: '22px 0', borderBottom: '1px solid var(--g100)', display: 'flex', alignItems: 'flex-start', gap: 24, cursor: 'pointer' }}
                    onClick={() => setOpenRole(openRole === i ? null : i)}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.3px', margin: 0 }}>{role.title}</h3>
                        <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--turquoise)', background: 'rgba(114,203,214,0.12)', padding: '2px 8px', borderRadius: 100, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{role.dept}</span>
                      </div>
                      <div style={{ display: 'flex', gap: 16, fontSize: 13, color: 'var(--g400)', fontWeight: 500 }}>
                        <span>{role.location}</span>
                        <span>·</span>
                        <span>{role.type}</span>
                        <span>·</span>
                        <span>{role.level}</span>
                      </div>
                    </div>
                    <div style={{ flexShrink: 0, color: 'var(--g400)', transition: 'transform 0.2s', transform: openRole === i ? 'rotate(180deg)' : 'none' }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 6.5l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>

                  {/* Expanded details */}
                  {openRole === i && (
                    <div style={{ padding: '20px 0 28px', borderBottom: '1px solid var(--g100)' }}>
                      <p style={{ fontSize: 14.5, lineHeight: 1.75, color: 'var(--g600)', marginBottom: 20, maxWidth: 680 }}>{role.desc}</p>
                      <a
                        href={`mailto:careers@luthen.ai?subject=Application: ${encodeURIComponent(role.title)}`}
                        className="btn-hero"
                        style={{ display: 'inline-flex' }}
                      >
                        Apply for This Role
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--g400)' }}>
                <p style={{ fontSize: 15, fontWeight: 500 }}>No open roles in {activeDept} right now.</p>
                <p style={{ fontSize: 13.5, marginTop: 8 }}>We hire proactively. <a href="mailto:careers@luthen.ai" style={{ color: 'var(--black)', fontWeight: 600 }}>Send us your CV anyway →</a></p>
              </div>
            )}
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── DON'T SEE A FIT ── */}
      <ScrollFadeIn>
        <section className="cta-s">
          <div className="cta-s-lbl">Don't see a fit?</div>
          <h2 className="cta-h2">We'd still love to hear from you.</h2>
          <p className="cta-sub">We hire exceptional people before roles are open. Send us your CV and tell us where you think you'd have the most impact.</p>
          <div className="cta-btns">
            <a href="mailto:careers@luthen.ai" className="btn-hero">
              Send a Speculative Application
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <Link to="/about" className="btn-hero-ghost">Meet the Team</Link>
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: 'var(--g400)' }}>careers@luthen.ai</p>
        </section>
      </ScrollFadeIn>
    </>
  )
}
