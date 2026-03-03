import { useState } from 'react'
import ScrollFadeIn from '../components/ScrollFadeIn'

// Google Calendar appointment scheduling URL.
// Replace CALENDAR_ID with the Google Calendar ID of the calendar you want
// prospects to book meetings on (found in Google Calendar Settings →
// "Integrate calendar" → Calendar ID).
//
// The URL below uses Google Calendar's built-in appointment scheduling page.
// After you set up "Appointment Schedules" in Google Calendar (available on
// Google Workspace), replace the placeholder with your public scheduling link.
//
// If you prefer to use Cal.com or Calendly, swap the GCAL_BOOKING_URL for
// your embed link and update the iframe src / anchor href below.
const GCAL_BOOKING_URL =
  'https://calendar.app.google/8uowrZv4gUo27EVx5'

// A Google Calendar "Add Event" link pre-filled for a 30-minute intro call.
// This is a fallback that lets prospects manually add a meeting to their
// own Google Calendar without requiring Appointment Schedules.
function buildGCalEventLink() {
  const title = encodeURIComponent('Luthen Platform Demo — Solution Blueprint Call')
  const details = encodeURIComponent(
    'A 30-minute call with the Luthen solutions team to walk through your use case and design a custom deployment blueprint.\n\nVisit: https://luthen.ai/demo'
  )
  const location = encodeURIComponent('https://meet.google.com (link sent after confirmation)')
  // Default to tomorrow at 10 AM UTC — prospects can adjust in their calendar
  const now = new Date()
  now.setDate(now.getDate() + 1)
  now.setHours(10, 0, 0, 0)
  const start = now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  const end = new Date(now.getTime() + 30 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  return `https://calendar.google.com/calendar/appointments/schedules/AcZssZ2lZMfv2zTT3zVKhqa9X8pCZx0bG80zRIBPSM3817wbQM_XLPd9UUi0QZubi5WrVOiqPMvZhUTt?gv=true`
}

const USE_INLINE_SCHEDULER = true // set to true once you have a real GCAL_BOOKING_URL

export default function Demo() {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.company) {
      setError('Please fill in all required fields.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Request Demo</div>
          <h1>Schedule Your Solution Blueprint.</h1>
          <p className="page-hero-sub">A 30-minute call with our solutions team. We'll walk through your use case, your existing systems, and design a custom deployment blueprint.</p>
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div className="demo-page">
          {/* Left — value props */}
          <div className="demo-left">
            <h2>What to expect</h2>
            <p>Our solutions team — not a sales SDR — will review your environment and design a concrete autonomy blueprint tailored to your operations.</p>
            <div className="demo-bullets">
              {[
                'Understand your existing systems and integration landscape',
                'Identify 2–3 high-value workflows to start with',
                'Walk through a live workflow demo in a similar vertical',
                'Receive a custom deployment timeline and ROI estimate',
                'Answer any technical, governance, or compliance questions',
              ].map(bullet => (
                <div className="demo-bullet" key={bullet}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l3.5 3.5 7.5-7" stroke="var(--turquoise)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {bullet}
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div style={{ background: 'var(--g50)', borderRadius: 'var(--r-lg)', padding: 24, border: '1px solid var(--g100)' }}>
              <div style={{ display: 'flex', gap: 3, marginBottom: 12 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#DCFF9B">
                    <path d="M7 1l1.5 4h4l-3.25 2.4 1.25 4L7 9.1l-3.5 2.3 1.25-4L1.5 5h4L7 1z"/>
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--g600)', fontStyle: 'italic', marginBottom: 16 }}>
                "The Solution Blueprint call gave us a clear roadmap. We went from evaluation to production in 11 days."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,var(--turquoise),var(--yellow))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11 }}>AK</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>Andrei Kowalski</div>
                  <div style={{ fontSize: 12, color: 'var(--g400)' }}>VP Operations · Axion Industries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — scheduling */}
          <div>
            {!submitted ? (
              <div className="cal-embed-card">
                <h3>Book a 30-minute call</h3>
                <p>Choose a time that works for your team. We'll send a confirmation with a Google Meet link.</p>

                {/* ── GOOGLE CALENDAR BOOKING OPTIONS ── */}
                <div style={{ marginBottom: 24 }}>
                  {USE_INLINE_SCHEDULER ? (
                    /* Option A: Inline Google Calendar Appointment Scheduler iframe */
                    /* Enable this once you have a real Google Workspace
                       "Appointment Schedule" URL configured. */
                    <iframe
                      src={GCAL_BOOKING_URL}
                      style={{ width: '100%', height: 480, border: 'none', borderRadius: 'var(--r-md)' }}
                      title="Book a time with Luthen"
                    />
                  ) : (
                    /* Option B: Time slot selection + form (default until scheduler is set up) */
                    <>
                      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--g400)', marginBottom: 12 }}>Available slots — this week</div>
                      <div className="cal-slots">
                        {[
                          { label: 'Tomorrow', time: '10:00 AM EST', day: 'Mon, Mar 2' },
                          { label: 'This week', time: '2:00 PM EST', day: 'Tue, Mar 3' },
                          { label: 'This week', time: '11:00 AM EST', day: 'Wed, Mar 4' },
                          { label: 'This week', time: '4:00 PM EST', day: 'Thu, Mar 5' },
                        ].map(slot => (
                          <a
                            key={slot.day + slot.time}
                            href={buildGCalEventLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cal-btn"
                          >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'left' }}>
                              <span style={{ fontSize: 13.5, fontWeight: 600 }}>{slot.day} · {slot.time}</span>
                              <span style={{ fontSize: 12, color: 'var(--g400)', fontWeight: 500 }}>30 min · Google Meet</span>
                            </div>
                            <div className="cal-btn-icon">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="#72CBD6" strokeWidth="1.4"/>
                                <path d="M5 2v2M11 2v2" stroke="#72CBD6" strokeWidth="1.4" strokeLinecap="round"/>
                                <path d="M2 7h12" stroke="#72CBD6" strokeWidth="1.4"/>
                              </svg>
                            </div>
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* ── DIRECT GOOGLE CALENDAR LINK ── */}
                <a
                  href={buildGCalEventLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gcal-link"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="3" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M5 2v2M13 2v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    <path d="M2 8h14" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M6 12h2v2H6zM8 12h2v2H8z" fill="currentColor" opacity="0.7"/>
                  </svg>
                  Add to Google Calendar
                </a>
                <p className="cal-note">
                  Clicking above opens Google Calendar pre-filled with a 30-min Luthen demo event. You can adjust the time before saving.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
                  <div style={{ flex: 1, height: 1, background: 'var(--g100)' }} />
                  <span style={{ fontSize: 12, color: 'var(--g400)', fontWeight: 500, whiteSpace: 'nowrap' }}>or leave your details</span>
                  <div style={{ flex: 1, height: 1, background: 'var(--g100)' }} />
                </div>

                {/* ── CONTACT FORM ── */}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {error && (
                    <div style={{ padding: '10px 14px', borderRadius: 'var(--r-md)', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', fontSize: 13, color: '#dc2626' }}>
                      {error}
                    </div>
                  )}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <input
                      name="name"
                      placeholder="Full name *"
                      value={form.name}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Work email *"
                      value={form.email}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                  </div>
                  <input
                    name="company"
                    placeholder="Company name *"
                    value={form.company}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                  <input
                    name="role"
                    placeholder="Your role (optional)"
                    value={form.role}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <textarea
                    name="message"
                    placeholder="Tell us about your use case (optional)"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                  />
                  <button type="submit" className="btn-hero" style={{ border: 'none', cursor: 'pointer', justifyContent: 'center' }}>
                    Request My Solution Blueprint
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <p style={{ fontSize: 12, color: 'var(--g400)', textAlign: 'center' }}>
                    We'll reach out within 1 business day to confirm a time.
                  </p>
                </form>
              </div>
            ) : (
              <div className="cal-embed-card" style={{ textAlign: 'center', padding: 48 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 12l5.5 5.5L20 7" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 style={{ marginBottom: 8 }}>You're on the list!</h3>
                <p style={{ fontSize: 14, color: 'var(--g600)', marginBottom: 24, lineHeight: 1.7 }}>
                  We've received your request, <strong>{form.name}</strong>. Our solutions team will reach out to <strong>{form.email}</strong> within 1 business day to confirm your Solution Blueprint call.
                </p>
                <a
                  href={buildGCalEventLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gcal-link"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="3" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M5 2v2M13 2v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    <path d="M2 8h14" stroke="currentColor" strokeWidth="1.4"/>
                  </svg>
                  Add placeholder to Google Calendar
                </a>
                <p className="cal-note">Add a placeholder so you don't forget. We'll send the confirmed time shortly.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <ScrollFadeIn>
        <div style={{ background: 'var(--g50)', borderTop: '1px solid var(--g100)', padding: '40px 40px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap', alignItems: 'center' }}>
            {['SOC 2 Type II', 'GDPR Ready', 'ISO 27001', 'No credit card required', 'Dedicated onboarding team'].map(trust => (
              <div key={trust} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600, color: 'var(--g600)' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5 6.5-6" stroke="#16a34a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {trust}
              </div>
            ))}
          </div>
        </div>
      </ScrollFadeIn>
    </>
  )
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
  transition: 'border-color 0.18s',
  width: '100%',
}
