import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form,   setForm]   = useState({ name: '', email: '', type: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xbdaqzdd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-heading">

      <h2 className={styles.heading} id="contact-heading">Contact</h2>

      {status === 'sent' ? (
        <div className={styles.success} role="alert">
          <p className={styles.successMsg}>Message received — we'll be in touch soon.</p>
          <button
            className={styles.resetBtn}
            onClick={() => { setForm({ name:'', email:'', type:'', message:'' }); setStatus('idle') }}
          >
            Send another
          </button>
        </div>
      ) : (
        <form
          className={styles.form}
          onSubmit={submit}
          noValidate
          aria-label="Contact Delci"
          data-animate
        >
          <div className={styles.row}>
            <label className={styles.field}>
              <span className={styles.label}>Name</span>
              <input
                className={styles.input}
                type="text" name="name"
                placeholder="Your name"
                value={form.name} onChange={set}
                required autoComplete="name"
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Email</span>
              <input
                className={styles.input}
                type="email" name="email"
                placeholder="your@email.com"
                value={form.email} onChange={set}
                required autoComplete="email"
              />
            </label>
          </div>

          <label className={styles.field}>
            <span className={styles.label}>Inquiry type</span>
            <select className={styles.input} name="type" value={form.type} onChange={set} required>
              <option value="" disabled>Select one…</option>
              <option value="booking">Booking / Shows</option>
              <option value="press">Press / Media</option>
              <option value="collab">Collaboration</option>
              <option value="sync">Sync / Licensing</option>
              <option value="general">General</option>
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Message</span>
            <textarea
              className={styles.textarea}
              name="message"
              placeholder="Tell us more…"
              value={form.message} onChange={set}
              required
              rows={5}
            />
          </label>

          {status === 'error' && (
            <p className={styles.errMsg}>Something went wrong — try again or DM @delcimusic.</p>
          )}

          <button
            type="submit"
            className={styles.submit}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

        </form>
      )}
    </section>
  )
}
