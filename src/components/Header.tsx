import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../assets/logo-no-tagline.png'
import logoWebp from '../assets/logo.webp'
import styles from './Header.module.css'
import { useLang } from '../context/LangContext'
import { translations } from '../i18n/translations'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggleLang } = useLang()
  const tx = translations[lang].header
  const { pathname } = useLocation()
  const isSpanish = pathname.startsWith('/es')
  const langBase = isSpanish ? '/es' : ''
  const isHome = pathname === '/' || pathname === '/es' || pathname === '/es/'
  const p = (anchor: string) => isHome ? anchor : `${langBase}/${anchor}`
  const langHref = isSpanish
    ? pathname.replace(/^\/es/, '') || '/'
    : `/es${pathname === '/' ? '/' : pathname}`

  const handleLangClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault()
      // Pin the section currently at the top of the viewport
      const sectionIds = ['services', 'work', 'about', 'contact']
      let pinned = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 100) pinned = id
      }
      toggleLang()
      // After React re-renders with new content heights, snap back to the pinned section
      if (pinned) {
        setTimeout(() => {
          document.getElementById(pinned)?.scrollIntoView({ behavior: 'instant' })
        }, 0)
      }
    }
  }

  const NAV_LINKS = [
    { label: tx.navServices, href: p('#services') },
    { label: tx.navWork,     href: p('#work') },
    { label: tx.navAbout,    href: p('#about') },
    { label: tx.navContact,  href: p('#contact') },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuActive : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo} aria-label="Spun Pages — home">
          <picture>
            <source srcSet={logoWebp} type="image/webp" />
            <img src={logo} alt="Spun Pages" className={styles.logoImg} width={636} height={446} fetchPriority="high" />
          </picture>
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
          <a href={p('#contact')} className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            {tx.cta}
          </a>
        </nav>

        <div className={styles.controls}>
          <a
            href={langHref}
            onClick={handleLangClick}
            className={styles.langToggle}
            aria-label={lang === 'en' ? 'Traducir al español' : 'Translate to English'}
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </a>

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
