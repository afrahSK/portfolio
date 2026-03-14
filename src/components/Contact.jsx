import { useState } from 'react'
import './Contact.css'

const infoItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'your@email.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Response Time',
    value: 'Within 24 hours',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    label: 'Availability',
    value: 'Worldwide (Remote)',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSent(true)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-wrapper">

          <div className="contact-left">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Let's Build Something Great Together</h2>
            <p className="section-subtitle">
              Have a project in mind? Fill out the form and we'll get back to you within 24 hours.
            </p>

            <div className="contact-info">
              {infoItems.map(item => (
                <div className="info-item" key={item.label}>
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <p className="info-label">{item.label}</p>
                    <p className="info-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper">
            {sent ? (
              <div className="success-msg">
                <span>✦</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll reply within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Service Needed</label>
                  <select name="service" value={form.service} onChange={handleChange} required>
                    <option value="">Select a service...</option>
                    <option>Business Website Development</option>
                    <option>Landing Page Design & Development</option>
                    <option>UI/UX Design (Figma)</option>
                    <option>Frontend Development</option>
                    <option>Figma to Code</option>
                    <option>REST API Development</option>
                    <option>Website Maintenance</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Tell Us About Your Project</label>
                  <textarea name="message" placeholder="Describe your project, timeline, budget..." rows="5" value={form.message} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn-primary submit-btn">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}