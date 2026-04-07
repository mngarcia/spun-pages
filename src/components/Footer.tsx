import logo from '../assets/logo-no-tagline.png'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <a href="#" className={styles.logo} aria-label="Spun Pages — home">
            <img src={logo} alt="Spun Pages" className={styles.logoImg} />
          </a>
          <nav className={styles.links}>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} Spun Pages. Crafted with care.
          </p>
          <p className={styles.tagline}>Crafted Sites. Refined Details.</p>
        </div>
      </div>
    </footer>
  )
}
