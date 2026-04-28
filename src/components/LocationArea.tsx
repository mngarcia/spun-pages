import styles from './LocationArea.module.css'
import { useLang } from '../context/LangContext'
import { translations } from '../i18n/translations'

export default function LocationArea() {
  const { lang } = useLang()
  const tx = translations[lang].location

  return (
    <section className={`section ${styles.location}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className="section-label">{tx.label}</span>
          <h2 className={`section-title ${styles.title}`}>{tx.title}</h2>
          <p className={styles.body}>{tx.body}</p>
        </div>
        <ul className={styles.cities} aria-label="Cities served">
          {tx.cities.map(city => (
            <li key={city} className={styles.city}>{city}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
