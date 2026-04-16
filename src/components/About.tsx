import styles from './About.module.css'
import { useLang } from '../context/LangContext'
import { translations } from '../i18n/translations'

export default function About() {
  const { lang } = useLang()
  const tx = translations[lang].about

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className="section-label">{tx.label}</span>
          <h2 className="section-title">{tx.title1}<br />{tx.title2}</h2>
          <p className={styles.body}>{tx.body1}</p>
          <p className={styles.body}>{tx.body2}</p>
          <p className={styles.body}>{tx.body3}</p>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.howBox}>
            <p className={styles.howLabel}>{tx.howLabel}</p>
            <ul className={styles.howList}>
              {tx.howItems.map(item => (
                <li key={item} className={styles.howItem}>
                  <span className={styles.howMark}>✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
