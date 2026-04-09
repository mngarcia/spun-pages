import { useState, useEffect } from 'react'
import logo from '../assets/logo-no-tagline.png'
import styles from './Header.module.css'
import { useLang } from '../context/LangContext'
import { translations } from '../i18n/translations'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggleLang } = useLang()
  const tx = translations[lang].header

  const NAV_LINKS = [
    { label: tx.navServices, href: '#services' },
    { label: tx.navWork, href: '#work' },
    { label: tx.navAbout, href: '#about' },
    { label: tx.navContact, href: '#contact' },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuActive : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo} aria-label="Spun Pages — home">
          <img src={logo} alt="Spun Pages" className={styles.logoImg} />
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            {tx.cta}
          </a>
        </nav>

        <div className={styles.controls}>
          <button
            className={styles.langToggle}
            onClick={toggleLang}
            aria-label={lang === 'en' ? 'Traducir al español' : 'Translate to English'}
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>

          <button
            className={styles.menuToggle}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </div>
    </header>
  )
}
