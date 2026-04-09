import { useState, type FormEvent } from 'react'
import styles from './Contact.module.css'
import { useLang } from '../context/LangContext'
import { translations } from '../i18n/translations'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string

type FormState = {
  name: string
  email: string
  budget: string
  message: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', budget: '', message: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const { lang } = useLang()
  const tx = translations[lang].contact

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
          <span className="section-label">{tx.label}</span>
          <h2 className="section-title">{tx.title1}<br />{tx.title2}</h2>
          <p className={styles.sub}>{tx.sub}</p>
          <ul className={styles.perks}>
            {tx.perks.map(p => (
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
              <h3>{tx.successTitle}</h3>
              <p>{tx.successBody}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name">{tx.labelName}</label>
                  <input
                    id="name" name="name" type="text"
                    placeholder={tx.placeholderName} required
                    value={form.name} onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">{tx.labelEmail}</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder={tx.placeholderEmail} required
                    value={form.email} onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="budget">{tx.labelBudget}</label>
                <select
                  id="budget" name="budget"
                  value={form.budget} onChange={handleChange}
                >
                  <option value="">{tx.budgetPlaceholder}</option>
                  {tx.budgets.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">{tx.labelMessage}</label>
                <textarea
                  id="message" name="message" rows={5}
                  placeholder={tx.placeholderMessage}
                  required value={form.message} onChange={handleChange}
                />
              </div>

              {status === 'error' && (
                <p className={styles.errorMsg}>
                  {tx.errorMsg.split('info@spunpages.com')[0]}
                  <a href="mailto:info@spunpages.com">info@spunpages.com</a>
                  {tx.errorMsg.split('info@spunpages.com')[1]}
                </p>
              )}

              <button
                type="submit"
                className={`btn btn-primary ${styles.submit}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? tx.submitSending : tx.submitIdle}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
