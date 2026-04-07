import { useState, type FormEvent } from 'react'
import styles from './Contact.module.css'

// Sign up at formspree.io, create a form pointed at info@spunpages.com,
// then add VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/<your-id> to .env
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string

type FormState = {
  name: string
  email: string
  budget: string
  message: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

const BUDGETS = [
  'Under $1,000',
  '$1,000 – $2,000',
  'Over $2,000',
  'Not sure yet',
]

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', budget: '', message: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          budget: form.budget,
          message: form.message,
        }),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className="section-label">Get in touch</span>
          <h2 className="section-title">Let's build something<br />worth noticing</h2>
          <p className={styles.sub}>
            Tell me about your project and I'll get back to you within one business
            day. No hard sell, no vague estimates — just a straight conversation
            about what you need.
          </p>
          <ul className={styles.perks}>
            {[
              'Free 30-min discovery call',
              'Clear proposal within 3 business days',
              'Fixed-price or retainer engagements',
              'Source code is always yours',
            ].map(p => (
              <li key={p} className={styles.perk}>
                <span className={styles.check}>✦</span> {p}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.formWrap}>
          {status === 'success' ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>✦</span>
              <h3>Message received</h3>
              <p>I'll be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="Your name" required
                    value={form.name} onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="you@company.com" required
                    value={form.email} onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="budget">Budget range</label>
                <select
                  id="budget" name="budget"
                  value={form.budget} onChange={handleChange}
                >
                  <option value="">Select a range…</option>
                  {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">About your project</label>
                <textarea
                  id="message" name="message" rows={5}
                  placeholder="What are you building? Any deadlines or must-haves to know about?"
                  required value={form.message} onChange={handleChange}
                />
              </div>

              {status === 'error' && (
                <p className={styles.errorMsg}>
                  Something went wrong — please try again or email{' '}
                  <a href="mailto:info@spunpages.com">info@spunpages.com</a> directly.
                </p>
              )}

              <button
                type="submit"
                className={`btn btn-primary ${styles.submit}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
