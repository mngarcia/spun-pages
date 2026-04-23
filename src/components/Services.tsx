import { Link } from 'react-router-dom'
import styles from './Services.module.css'
import { useLang } from '../context/LangContext'
import { translations, type Package } from '../i18n/translations'

function PackageCard({ pkg, index, ctaGetQuote, lang }: {
  pkg: Package
  index: number
  ctaGetQuote: string
  lang: string
}) {
  const num = String(index + 1).padStart(2, '0')
  const features = pkg.turnaround ? [...pkg.tags, pkg.turnaround] : pkg.tags
  const langPrefix = lang === 'es' ? '/es' : ''

  return (
    <Link
      to={`${langPrefix}/services/${pkg.slug}/`}
      className={[
        styles.card,
        pkg.featured ? styles.featured : '',
        pkg.retainer ? styles.retainer : '',
      ].join(' ')}
    >
      <div className={styles.cardTop}>
        <span className={styles.num} aria-hidden>{num}</span>
        <div>
          <h3 className={styles.packageName}>{pkg.name}</h3>
          {pkg.subtitle && <span className={styles.subtitle}>{pkg.subtitle}</span>}
        </div>
      </div>

      <p className={styles.desc}>{pkg.desc}</p>

      <p className={styles.features}>{features.join(' · ')}</p>

      {pkg.featured ? (
        <span className={`btn btn-primary ${styles.cta}`}>
          {ctaGetQuote}
        </span>
      ) : (
        <span className={styles.ctaLink}>
          {ctaGetQuote}
        </span>
      )}
    </Link>
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
            {tx.builderPackages.map((pkg, i) => (
              <PackageCard
                key={pkg.name}
                pkg={pkg}
                index={i}
                ctaGetQuote={tx.ctaGetQuote}
                lang={lang}
              />
            ))}
          </div>
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupLabel}>{tx.groupCustom}</h3>
          <div className={`${styles.grid} ${styles.gridTwo} ${styles.alignStart}`}>
            {tx.customPackages.map((pkg, i) => (
              <PackageCard
                key={pkg.name}
                pkg={pkg}
                index={tx.builderPackages.length + i}
                ctaGetQuote={tx.ctaGetQuote}
                lang={lang}
              />
            ))}
          </div>
        </div>

        <p className={styles.note}>
          {tx.noteText} <a href="#contact">{tx.noteCta}</a>
          {lang === 'en' ? " — I'll point you in the right direction." : ' — te oriento.'}
        </p>
      </div>
    </section>
  )
}
