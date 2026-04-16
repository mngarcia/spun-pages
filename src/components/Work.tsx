import styles from './Work.module.css'
import desktopImg from '../assets/portfolio - webpage.png'
import desktopWebp from '../assets/portfolio - webpage.webp'
import mobileImg from '../assets/portfolio - mobile.png'
import mobileWebp from '../assets/portfolio - mobile.webp'
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
            <picture>
              <source srcSet={desktopWebp} type="image/webp" />
              <img
                src={desktopImg}
                alt="Reborn Remodeling & Repairs — desktop"
                className={styles.desktop}
                loading="lazy"
                width={2000}
                height={1089}
              />
            </picture>
            <picture>
              <source srcSet={mobileWebp} type="image/webp" />
              <img
                src={mobileImg}
                alt="Reborn Remodeling & Repairs — mobile"
                className={styles.mobile}
                loading="lazy"
                width={807}
                height={1499}
              />
            </picture>
          </div>

          <div className={styles.details}>
            <span className={styles.category}>{tx.category}</span>
            <h3 className={styles.name}>{tx.projectName}</h3>
            <p className={styles.desc}>{tx.projectDesc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
