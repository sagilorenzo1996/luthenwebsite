import { Link } from 'react-router-dom'
import ScrollFadeIn from '../components/ScrollFadeIn'

const certifications = [
  {
    name: 'SOC 2 Type II',
    body: 'AICPA',
    desc: 'Luthen undergoes an annual SOC 2 Type II audit conducted by an independent third-party auditor. The audit covers security, availability, processing integrity, confidentiality, and privacy trust service criteria.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 6v6c0 6 4 10 9 11 5-1 9-5 9-11V6L12 2z" stroke="#0A0A0F" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8 12l3 3 5-5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    status: 'Certified',
    color: '#16a34a',
  },
  {
    name: 'ISO 27001',
    body: 'BSI Group',
    desc: 'Our information security management system (ISMS) is certified to ISO/IEC 27001:2022, the international standard for information security. This covers all aspects of our platform operations and data handling.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9.5" stroke="#0A0A0F" strokeWidth="1.5"/><path d="M8 12l3 3 5-5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    status: 'Certified',
    color: '#16a34a',
  },
  {
    name: 'GDPR',
    body: 'EU Regulation 2016/679',
    desc: 'Luthen is fully compliant with the General Data Protection Regulation. We offer Standard Contractual Clauses (SCCs), Data Processing Agreements (DPAs), and data residency options for EU customers.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9S3 16.97 3 12z" stroke="#0A0A0F" strokeWidth="1.5"/><path d="M8 12l3 3 5-5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    status: 'Compliant',
    color: '#16a34a',
  },
  {
    name: 'HIPAA Ready',
    body: 'US HHS',
    desc: 'For healthcare customers, Luthen supports HIPAA-compliant deployments with BAA availability, PHI isolation, and dedicated infrastructure. Contact our team for HIPAA deployment documentation.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="14" rx="2" stroke="#0A0A0F" strokeWidth="1.5"/><path d="M16 7V5a4 4 0 00-8 0v2" stroke="#0A0A0F" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    status: 'Available',
    color: '#2563eb',
  },
]

const controls = [
  {
    category: 'Data Encryption',
    items: [
      { label: 'Data at rest', detail: 'AES-256 encryption for all stored data' },
      { label: 'Data in transit', detail: 'TLS 1.3 for all network communication' },
      { label: 'Key management', detail: 'AWS KMS with customer-managed key (CMK) option' },
      { label: 'Database encryption', detail: 'Encrypted at field level for sensitive workflow payloads' },
    ],
  },
  {
    category: 'Access Controls',
    items: [
      { label: 'Authentication', detail: 'SSO, SAML 2.0, and OIDC support' },
      { label: 'Authorization', detail: 'Role-based access control (RBAC) at resource granularity' },
      { label: 'MFA', detail: 'Enforced for all human operator accounts' },
      { label: 'Session management', detail: 'Configurable session timeouts with device revocation' },
    ],
  },
  {
    category: 'Network Security',
    items: [
      { label: 'Network isolation', detail: 'VPC-isolated deployment with private subnets' },
      { label: 'DDoS protection', detail: 'AWS Shield Advanced on all public endpoints' },
      { label: 'WAF', detail: 'Web Application Firewall with OWASP rule sets' },
      { label: 'IP allowlisting', detail: 'Configurable IP restriction per organization' },
    ],
  },
  {
    category: 'Monitoring & Response',
    items: [
      { label: 'Security monitoring', detail: '24/7 automated threat detection and alerting' },
      { label: 'Incident response', detail: 'Defined runbooks with < 1hr response SLA for P0 incidents' },
      { label: 'Vulnerability management', detail: 'Weekly automated scanning + annual third-party pen test' },
      { label: 'Audit logging', detail: 'Immutable audit logs for all platform and user activity' },
    ],
  },
  {
    category: 'Deployment Options',
    items: [
      { label: 'Cloud (multi-tenant)', detail: 'Luthen-managed, shared infrastructure — SOC 2 certified' },
      { label: 'Cloud (single-tenant)', detail: 'Dedicated cloud environment with VPC isolation' },
      { label: 'On-premise', detail: 'Customer-managed deployment in your own infrastructure' },
      { label: 'Air-gapped', detail: 'Fully disconnected deployment for classified or restricted environments' },
    ],
  },
  {
    category: 'Data Residency',
    items: [
      { label: 'US regions', detail: 'us-east-1 (Virginia), us-west-2 (Oregon)' },
      { label: 'EU regions', detail: 'eu-west-1 (Ireland), eu-central-1 (Frankfurt)' },
      { label: 'APAC regions', detail: 'ap-southeast-1 (Singapore), ap-northeast-1 (Tokyo)' },
      { label: 'Custom residency', detail: 'Custom region deployment available for Enterprise Air-Gap plans' },
    ],
  },
]

const faqs = [
  { q: 'Does Luthen store our enterprise data?', a: 'Luthen stores only the metadata required to execute and audit workflows (execution IDs, timestamps, status codes, audit events). Payload data passes through our execution engine and is not persisted beyond the execution window unless you explicitly configure a data retention policy. Customer data never leaves your infrastructure perimeter in on-premise deployments.' },
  { q: 'Can we bring our own encryption keys?', a: 'Yes. Enterprise customers can configure customer-managed encryption keys (CMK) via AWS KMS or GCP Cloud KMS. Your keys, your data.' },
  { q: 'How do you handle security vulnerabilities?', a: 'We run automated vulnerability scanning weekly across all infrastructure and dependencies. We maintain a responsible disclosure program and conduct an annual third-party penetration test. Critical vulnerabilities are patched within 24 hours.' },
  { q: 'Is a Data Processing Agreement (DPA) available?', a: 'Yes. GDPR-compliant DPAs are available for all paying customers. Contact your account manager or email security@luthen.ai to request a signed DPA.' },
  { q: 'Do you conduct background checks on employees?', a: 'All Luthen employees and contractors who have access to customer infrastructure undergo background verification as part of the onboarding process, in compliance with applicable local law.' },
]

export default function Security() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Security</div>
          <h1>Security is not a feature. It's the foundation.</h1>
          <p className="page-hero-sub">Every layer of Luthen is designed to meet the governance, compliance, and security requirements of the world's most demanding enterprise environments.</p>
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <div style={{ background: 'var(--black)', padding: '28px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
        {['SOC 2 Type II', 'ISO 27001', 'GDPR Ready', '99.99% Uptime SLA', 'On-premise & Air-gap'].map(item => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5 6.5-6" stroke="#4ade80" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {item}
          </div>
        ))}
      </div>

      {/* ── CERTIFICATIONS ── */}
      <ScrollFadeIn>
        <section className="s" style={{ background: '#fff' }}>
          <div className="center" style={{ marginBottom: 52 }}>
            <div className="s-label">Compliance</div>
            <h2 className="s-h2">Certifications &amp; Standards</h2>
            <p className="s-body">Luthen maintains certifications across the major international security and compliance frameworks.</p>
          </div>
          <div className="grid-4">
            {certifications.map(cert => (
              <div className="card" key={cert.name}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div className="card-icon" style={{ margin: 0 }}>{cert.icon}</div>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: cert.color, background: `${cert.color}14`, padding: '2px 8px', borderRadius: 100 }}>{cert.status}</span>
                </div>
                <h3 style={{ marginBottom: 2 }}>{cert.name}</h3>
                <div style={{ fontSize: 11.5, color: 'var(--g400)', fontWeight: 500, marginBottom: 10 }}>{cert.body}</div>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--g600)' }}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── SECURITY CONTROLS ── */}
      <ScrollFadeIn>
        <section className="s" style={{ background: 'var(--g50)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="center" style={{ marginBottom: 52 }}>
              <div className="s-label">Controls</div>
              <h2 className="s-h2">Security architecture.</h2>
              <p className="s-body">A comprehensive overview of Luthen's security controls across encryption, access, network, and deployment.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
              {controls.map(section => (
                <div key={section.category} className="card">
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--turquoise)', marginBottom: 16 }}>{section.category}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {section.items.map(item => (
                      <div key={item.label}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--black)', marginBottom: 2 }}>{item.label}</div>
                        <div style={{ fontSize: 12.5, color: 'var(--g600)', lineHeight: 1.5 }}>{item.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── PENTEST / RESPONSIBLE DISCLOSURE ── */}
      <ScrollFadeIn>
        <section className="s" style={{ background: 'var(--black)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="con-s-lbl">Responsible Disclosure</div>
              <h2 className="con-h2">Found a vulnerability?<br />Tell us first.</h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', marginBottom: 32 }}>
                We operate a responsible disclosure program. If you discover a potential security issue in Luthen's platform, please report it privately and we'll work with you to resolve it quickly.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                {[
                  'We acknowledge receipt within 24 hours',
                  'We provide status updates every 72 hours',
                  'We do not pursue legal action against good-faith reporters',
                  'We credit reporters in our security changelog',
                ].map(item => (
                  <div key={item} className="cfeat">
                    <div className="cfeat-icon">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1.5 7l3 3 8-7" stroke="#72CBD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <a href="mailto:security@luthen.ai" className="btn-console">
                Report a Vulnerability
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Security Contact', value: 'security@luthen.ai', mono: true },
                { label: 'PGP Key', value: 'Available on request', mono: false },
                { label: 'Response SLA', value: '< 24 hours', mono: false },
                { label: 'Pen Test Frequency', value: 'Annual (third-party)', mono: false },
                { label: 'Vuln Scanning', value: 'Weekly automated', mono: false },
                { label: 'Bug Bounty', value: 'Invite-only programme', mono: false },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderRadius: 'var(--r-md)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{item.label}</span>
                  <span style={{ fontSize: 13, color: '#fff', fontWeight: 600, fontFamily: item.mono ? 'monospace' : 'inherit' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── FAQ ── */}
      <ScrollFadeIn>
        <section className="s" style={{ background: '#fff' }}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div className="center" style={{ marginBottom: 48 }}>
              <div className="s-label">FAQ</div>
              <h2 className="s-h2">Security questions.</h2>
            </div>
            {faqs.map(({ q, a }) => (
              <div key={q} style={{ paddingBottom: 24, marginBottom: 24, borderBottom: '1px solid var(--g100)' }}>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{q}</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.75, color: 'var(--g600)' }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* ── CTA ── */}
      <ScrollFadeIn>
        <section className="cta-s">
          <div className="cta-s-lbl">Security Review</div>
          <h2 className="cta-h2">Need a security review?</h2>
          <p className="cta-sub">Our security team is available to work through your organisation's specific requirements — including custom DPAs, pen test reports, and air-gap deployment scoping.</p>
          <div className="cta-btns">
            <a href="mailto:security@luthen.ai" className="btn-hero">
              Contact Security Team
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <Link to="/demo" className="btn-hero-ghost">Request a Demo</Link>
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: 'var(--g400)' }}>security@luthen.ai &nbsp;·&nbsp; SOC 2 report available under NDA</p>
        </section>
      </ScrollFadeIn>
    </>
  )
}
