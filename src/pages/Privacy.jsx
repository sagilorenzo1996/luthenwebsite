export default function Privacy() {
  return (
    <section style={{ maxWidth: 780, margin: '0 auto', padding: '80px 40px' }}>
      <div className="s-label">Legal</div>
      <h1 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 700, letterSpacing: '-2px', marginBottom: 16 }}>Privacy Policy</h1>
      <p style={{ fontSize: 14, color: 'var(--g400)', marginBottom: 40 }}>Effective date: January 1, 2025</p>
      {[
        { heading: '1. Information We Collect', body: 'Luthen collects information you provide directly — such as name, email, company, and usage information — as well as information automatically collected through your use of the platform, including log data, device information, and cookies.' },
        { heading: '2. How We Use Your Information', body: 'We use the information we collect to provide, maintain, and improve our services; communicate with you; ensure security and compliance; and fulfil our contractual obligations.' },
        { heading: '3. Data Retention', body: 'We retain personal data only as long as necessary to fulfil the purposes described in this policy or as required by law. Enterprise customers may configure custom data retention policies.' },
        { heading: '4. Security', body: 'Luthen is SOC 2 Type II certified and ISO 27001 compliant. We employ industry-standard encryption, access controls, and monitoring to protect your data.' },
        { heading: '5. GDPR & Data Transfers', body: 'For customers in the European Economic Area, Luthen acts as a data processor. We offer Standard Contractual Clauses and support data residency requirements. Contact privacy@luthen.ai for a Data Processing Agreement.' },
        { heading: '6. Contact Us', body: 'If you have questions about this policy, email privacy@luthen.ai or write to Luthen, Inc., 535 Mission St, Suite 1400, San Francisco, CA 94105.' },
      ].map(section => (
        <div key={section.heading} style={{ marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid var(--g100)' }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{section.heading}</h2>
          <p style={{ fontSize: 14.5, lineHeight: 1.75, color: 'var(--g600)' }}>{section.body}</p>
        </div>
      ))}
    </section>
  )
}
