import styles from './Services.module.css'
import { useLang } from '../context/LangContext'
import { translations, type Package } from '../i18n/translations'

function PackageCard({ pkg, badgeMostPopular, ctaGetQuote }: {
  pkg: Package
  badgeMostPopular: string
  ctaGetQuote: string
}) {
  return (
    <div className={[
      styles.card,
      pkg.featured ? styles.featured : '',
      pkg.retainer ? styles.retainer : '',
    ].join(' ')}>
      {pkg.featured && <span className={styles.badge}>{badgeMostPopular}</span>}
      <div className={styles.cardTop}>
        <span className={styles.icon}>{pkg.icon}</span>
        <div>
          <h3 className={styles.packageName}>{pkg.name}</h3>
          {pkg.subtitle && <span className={styles.subtitle}>{pkg.subtitle}</span>}
        </div>
      </div>
      <p className={styles.desc}>{pkg.desc}</p>
      <div className={styles.tags}>
        {pkg.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
        {pkg.turnaround && (
          <span className={`${styles.tag} ${styles.turnaround}`}>
            ⏱ {pkg.turnaround}
          </span>
        )}
      </div>
      <a
        href="#contact"
        className={`btn ${pkg.featured ? 'btn-primary' : 'btn-outline'} ${styles.cta}`}
      >
        {ctaGetQuote}
      </a>
    </div>
  )
}

export default function Services() {
  const { lang } = useLang()
  const tx = translations[lang].services

  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <span className="section-label">{tx.label}</span>
        <h2 className="section-title">{tx.title1}<br />{tx.title2}</h2>
        <p className="section-subtitle">{tx.subtitle}</p>

        <div className={styles.group}>
          <h3 className={styles.groupLabel}>{tx.groupBuilder}</h3>
          <div className={`${styles.grid} ${styles.gridThree}`}>
            {tx.builderPackages.map(pkg => (
              <PackageCard
                key={pkg.name}
                pkg={pkg}
                badgeMostPopular={tx.badgeMostPopular}
                ctaGetQuote={tx.ctaGetQuote}
              />
            ))}
          </div>
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupLabel}>{tx.groupCustom}</h3>
          <div className={`${styles.grid} ${styles.gridTwo}`}>
            {tx.customPackages.map(pkg => (
              <PackageCard
                key={pkg.name}
                pkg={pkg}
                badgeMostPopular={tx.badgeMostPopular}
                ctaGetQuote={tx.ctaGetQuote}
              />
            ))}
          </div>
        </div>

        <p className={styles.note}>
          {tx.noteText} <a href="#contact">{tx.noteCta}</a> — {lang === 'en' ? "I'll point you in the right direction." : 'te oriento.'}
        </p>
      </div>
    </section>
  )
}
