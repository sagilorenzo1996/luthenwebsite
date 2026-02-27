import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    padding: '11px 14px',
    borderRadius: 'var(--r-md)',
    border: '1.5px solid var(--g200)',
    fontFamily: 'inherit',
    fontSize: 14,
    color: 'var(--black)',
    background: '#fff',
    outline: 'none',
    width: '100%',
  }

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Contact</div>
          <h1>Get in touch.</h1>
          <p className="page-hero-sub">Whether you have a question about the platform, pricing, or want to schedule a demo — our team is ready to help.</p>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <div className="s-label">Our Offices</div>
            <h2 className="s-h2" style={{ marginBottom: 32 }}>Find us.</h2>
            {[
              { city: 'San Francisco', addr: '535 Mission St, Suite 1400\nSan Francisco, CA 94105', type: 'HQ' },
              { city: 'New York', addr: '1 World Trade Center, Suite 8500\nNew York, NY 10007', type: 'East Coast' },
              { city: 'London', addr: '30 St Mary Axe, Floor 12\nLondon EC3A 8BF, UK', type: 'EMEA' },
            ].map(office => (
              <div key={office.city} style={{ marginBottom: 28, paddingBottom: 28, borderBottom: '1px solid var(--g100)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>{office.city}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--turquoise)', background: 'rgba(114,203,214,0.12)', padding: '2px 8px', borderRadius: 100 }}>{office.type}</span>
                </div>
                <p style={{ fontSize: 13.5, color: 'var(--g600)', whiteSpace: 'pre-line', lineHeight: 1.65 }}>{office.addr}</p>
              </div>
            ))}
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 8 }}>Email</div>
              <a href="mailto:hello@luthen.ai" style={{ color: 'var(--black)', fontWeight: 600, fontSize: 14 }}>hello@luthen.ai</a>
            </div>
          </div>

          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 4 }}>Send us a message</h3>
                <p style={{ fontSize: 14, color: 'var(--g600)', marginBottom: 8 }}>We respond to all messages within 1 business day.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required style={inputStyle} />
                  <input name="email" type="email" placeholder="Work email" value={form.email} onChange={handleChange} required style={inputStyle} />
                </div>
                <input name="company" placeholder="Company" value={form.company} onChange={handleChange} style={inputStyle} />
                <select name="subject" value={form.subject} onChange={handleChange} style={{ ...inputStyle, color: form.subject ? 'var(--black)' : 'var(--g400)' }}>
                  <option value="">Subject</option>
                  <option>Request a Demo</option>
                  <option>Pricing Inquiry</option>
                  <option>Technical Question</option>
                  <option>Partnership</option>
                  <option>Press / Media</option>
                  <option>Other</option>
                </select>
                <textarea name="message" placeholder="Your message" value={form.message} onChange={handleChange} rows={5} required style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />
                <button type="submit" className="btn-hero" style={{ border: 'none', cursor: 'pointer', justifyContent: 'center' }}>Send Message</button>
              </form>
            ) : (
              <div style={{ padding: 48, textAlign: 'center', background: 'var(--g50)', borderRadius: 'var(--r-xl)', border: '1px solid var(--g100)' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 11l5.5 5.5L19 6" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 style={{ marginBottom: 8 }}>Message sent!</h3>
                <p style={{ fontSize: 14, color: 'var(--g600)', lineHeight: 1.7 }}>We'll get back to you at <strong>{form.email}</strong> within 1 business day.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
