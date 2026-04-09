import styles from './Hero.module.css'
import { useLang } from '../context/LangContext'
import { translations } from '../i18n/translations'

export default function Hero() {
  const { lang } = useLang()
  const tx = translations[lang].hero

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>{tx.badge}</div>

        <h1 className={styles.heading}>
          {tx.heading1}<br />
          <em>{tx.heading2}</em>
        </h1>

        <p className={styles.sub}>{tx.sub}</p>

        <div className={styles.actions}>
          <a href="#contact" className="btn btn-primary">{tx.ctaPrimary}</a>
          <a href="#work" className="btn btn-outline">{tx.ctaSecondary}</a>
        </div>

        <div className={styles.stats}>
          {tx.stats.map(stat => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.decoration} aria-hidden>
        <div className={styles.ring} />
        <div className={styles.ring2} />
      </div>
    </section>
  )
}
