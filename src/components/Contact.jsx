import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // Connect to your email service (EmailJS, Formspree, etc.)
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
              Have a project in mind? Fill out the form and I'll get back to you within 24 hours.
            </p>

            <div className="contact-info">
              {[
                { icon: '📧', label: 'Email', value: 'your@email.com' },
                { icon: '💬', label: 'Response Time', value: 'Within 24 hours' },
                { icon: '🌍', label: 'Availability', value: 'Worldwide (Remote)' },
              ].map(item => (
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
                <span>✅</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll reply within 24 hours.</p>
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
                  <label>Tell Me About Your Project</label>
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