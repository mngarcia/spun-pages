import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>Available for new projects</div>

        <h1 className={styles.heading}>
          Crafted sites.<br />
          <em>Refined details.</em>
        </h1>

        <p className={styles.sub}>
          I'm a freelance web developer specialising in clean, fast, beautifully
          considered websites for small businesses, creatives, and founders who
          care about the details as much as I do.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className="btn btn-primary">Start a project</a>
          <a href="#work" className="btn btn-outline">See my work</a>
        </div>

        <div className={styles.stats}>
          {[
            { value: '5 yrs', label: 'in software development' },
            { value: '50+', label: 'projects delivered' },
            { value: '100%', label: 'on-time delivery' },
          ].map(stat => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.decoration} aria-hidden>
        <div className={styles.ring} />
        <div className={styles.ring2} />
      </div>
    </section>
  )
}
