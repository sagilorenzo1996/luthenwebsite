export default function Terms() {
  return (
    <section style={{ maxWidth: 780, margin: '0 auto', padding: '80px 40px' }}>
      <div className="s-label">Legal</div>
      <h1 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 700, letterSpacing: '-2px', marginBottom: 16 }}>Terms of Service</h1>
      <p style={{ fontSize: 14, color: 'var(--g400)', marginBottom: 40 }}>Effective date: September 20, 2025</p>
      {[
        { heading: '1. Acceptance of Terms', body: 'By accessing or using Luthen\'s platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you are entering into these Terms on behalf of an organization, you represent that you have the authority to do so.' },
        { heading: '2. Use of the Platform', body: 'You may use Luthen\'s platform only for lawful enterprise automation purposes in accordance with these Terms. You agree not to misuse the platform or attempt to access it using unauthorized methods.' },
        { heading: '3. Intellectual Property', body: 'Luthen retains all intellectual property rights in the platform, including all software, documentation, and content. Customer data remains the property of the customer.' },
        { heading: '4. Confidentiality', body: 'Both parties agree to maintain the confidentiality of the other\'s proprietary information. Luthen will not use customer data except to provide the contracted services.' },
        { heading: '5. Warranties & Disclaimers', body: 'The platform is provided with a 99.99% uptime SLA as specified in your enterprise agreement. Luthen disclaims all other warranties to the extent permitted by law.' },
        { heading: '6. Governing Law', body: 'These Terms are governed by the laws of the State of California, without regard to conflict of laws principles. Disputes shall be resolved in the courts of San Francisco County, California.' },
        { heading: '7. Contact', body: 'For legal inquiries, contact support@behaviol.com or write to Luthen, Inc., Unit 105 29-31, Lexington Drive, Bella Vista NSW 2153.' },
      ].map(section => (
        <div key={section.heading} style={{ marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid var(--g100)' }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{section.heading}</h2>
          <p style={{ fontSize: 14.5, lineHeight: 1.75, color: 'var(--g600)' }}>{section.body}</p>
        </div>
      ))}
    </section>
  )
}
