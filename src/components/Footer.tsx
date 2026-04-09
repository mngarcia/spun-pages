import logo from '../assets/logo-no-tagline.png'
import styles from './Footer.module.css'
import { useLang } from '../context/LangContext'
import { translations } from '../i18n/translations'

export default function Footer() {
  const year = new Date().getFullYear()
  const { lang } = useLang()
  const tx = translations[lang].footer

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <a href="#" className={styles.logo} aria-label="Spun Pages — home">
            <img src={logo} alt="Spun Pages" className={styles.logoImg} />
          </a>
          <nav className={styles.links}>
            <a href="#services">{tx.navServices}</a>
            <a href="#work">{tx.navWork}</a>
            <a href="#about">{tx.navAbout}</a>
            <a href="#contact">{tx.navContact}</a>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} Spun Pages. {tx.copy}
          </p>
          <p className={styles.tagline}>{tx.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
