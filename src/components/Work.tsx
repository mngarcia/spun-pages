import styles from './Work.module.css'
import desktopImg from '../assets/portfolio - webpage.png'
import mobileImg from '../assets/portfolio - mobile.png'

export default function Work() {
  return (
    <section id="work" className={`section ${styles.work}`}>
      <div className="container">
        <span className="section-label">Selected work</span>
        <h2 className="section-title">Latest concept project</h2>
        <p className="section-subtitle">
          Every project is built from scratch — no themes, no shortcuts,
          no cut corners.
        </p>

        <div className={styles.project}>
          {/* Screenshots */}
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

          {/* Details */}
          <div className={styles.details}>
            <span className={styles.category}>Home Services</span>
            <h3 className={styles.name}>Reborn Remodeling & Repairs</h3>
            <p className={styles.desc}>
              Full business site for a residential remodeling contractor. Includes
              service pages for kitchen, bathroom, and basement remodels, a
              reviews section, and a contact form for online quotes.
            </p>
            <div className={styles.tags}>
              {['React', 'TypeScript', 'Mobile Responsive'].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
