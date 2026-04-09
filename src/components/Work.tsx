import styles from './Work.module.css'
import desktopImg from '../assets/portfolio - webpage.png'
import mobileImg from '../assets/portfolio - mobile.png'
import { useLang } from '../context/LangContext'
import { translations } from '../i18n/translations'

export default function Work() {
  const { lang } = useLang()
  const tx = translations[lang].work

  return (
    <section id="work" className={`section ${styles.work}`}>
      <div className="container">
        <span className="section-label">{tx.label}</span>
        <h2 className="section-title">{tx.title}</h2>
        <p className="section-subtitle">{tx.subtitle}</p>

        <div className={styles.project}>
          <div className={styles.screens}>
            <img
              src={desktopImg}
              alt="Reborn Remodeling & Repairs — desktop"
              className={styles.desktop}
            />
            <img
              src={mobileImg}
              alt="Reborn Remodeling & Repairs — mobile"
              className={styles.mobile}
            />
          </div>

          <div className={styles.details}>
            <span className={styles.category}>{tx.category}</span>
            <h3 className={styles.name}>{tx.projectName}</h3>
            <p className={styles.desc}>{tx.projectDesc}</p>
            <div className={styles.tags}>
              {tx.tags.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
