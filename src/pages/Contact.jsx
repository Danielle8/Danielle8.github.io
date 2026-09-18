import { useState } from 'react'
import Footer from '../components/footer/Footer'
import './Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio contact from ${form.firstName} ${form.lastName}`.trim()
    const body = `${form.message}\n\nFrom: ${form.firstName} ${form.lastName}\nEmail: ${form.email}`
    window.location.href = `mailto:crevecoeurdanielle@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const isFormComplete = Object.values(form).every((value) => value.trim() !== '')

  return (
    <div className="contact-page">
      <div className="contact-section">
        <h1 className="contact-title">
          <span className="accent">Contact</span>Me
        </h1>
        <p className="contact-subtitle">Let&rsquo;s get in touch!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name <span className="required-mark">*</span></label>
              <input id="firstName" name="firstName" type="text" value={form.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name <span className="required-mark">*</span></label>
              <input id="lastName" name="lastName" type="text" value={form.lastName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email <span className="required-mark">*</span></label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group form-group-message">
            <label htmlFor="message">Message <span className="required-mark">*</span></label>
            <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} required></textarea>
          </div>

          <button type="submit" className="send-btn" disabled={!isFormComplete}>Send</button>
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default Contact
