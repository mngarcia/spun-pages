import styles from './About.module.css'
import { useLang } from '../context/LangContext'
import { translations } from '../i18n/translations'

const STACK = [
  'React', 'Next.js', 'TypeScript', 'Vite',
  'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Figma',
  'Shopify', 'Sanity', 'Vercel', 'AWS',
]

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
          <div className={styles.stackBox}>
            <p className={styles.stackLabel}>{tx.stackLabel}</p>
            <div className={styles.tags}>
              {STACK.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
