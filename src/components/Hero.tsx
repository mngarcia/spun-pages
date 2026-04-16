import styles from './Hero.module.css'
import { useLang } from '../context/LangContext'
import { translations } from '../i18n/translations'

export default function Hero() {
  const { lang } = useLang()
  const tx = translations[lang].hero

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.top}>
          <h1 className={styles.heading}>
            {tx.heading1}<br />
            <em>{tx.heading2}</em>
          </h1>
          <p className={styles.sub}>{tx.sub}</p>
          <div className={styles.actions}>
            <a href="#contact" className="btn btn-primary">{tx.ctaPrimary}</a>
            <a href="#work" className="btn btn-outline">{tx.ctaSecondary}</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.qualifiers}>
            {tx.qualifiers.map(q => (
              <span key={q} className={styles.qualItem}>
                <span className={styles.qualDot} aria-hidden="true">✦</span>
                {q}
              </span>
            ))}
          </div>
          <a href="#services" className={styles.scrollCue} aria-label="Scroll to services">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
