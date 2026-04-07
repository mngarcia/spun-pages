import styles from './Services.module.css'

type Package = {
  icon: string
  name: string
  subtitle?: string
  desc: string
  tags: string[]
  turnaround?: string
  featured?: boolean
  retainer?: boolean
}

const BUILDER_PACKAGES: Package[] = [
  {
    icon: '🌱',
    name: 'Starter Presence',
    desc: '5-page Wix or Squarespace site — ideal for restaurants, salons, or service providers who just need to be found online. Includes branding setup and contact form.',
    tags: ['Wix / Squarespace', 'Mobile responsive'],
    turnaround: '~1 week',
  },
  {
    icon: '⭐',
    name: 'Business Pro',
    subtitle: 'React + TypeScript — up to 5 pages',
    desc: 'A hand-coded React and TypeScript site with SEO built in from the start. Fast, clean, and fully custom — no templates, no bloat. Best for businesses that want a professional web presence that actually performs.',
    tags: ['React', 'TypeScript', 'SEO included', 'Performance optimized'],
    turnaround: '2–4 weeks',
    featured: true,
  },
  {
    icon: '🛒',
    name: 'eCommerce Launch',
    desc: 'Online store setup with product catalog, payment processing, automated emails, and inventory basics. Includes Toast integration for restaurants and food businesses with online ordering needs.',
    tags: ['Shopify / Wix eCommerce', 'Toast (food ordering)', 'Payment setup'],
    turnaround: '2–3 weeks',
  },
]

const CUSTOM_PACKAGES: Package[] = [
  {
    icon: '🔧',
    name: 'Full Custom + Features',
    desc: 'Complex apps — custom portals, booking systems, dashboards, multi-location business sites. Scoped per project.',
    tags: ['Custom scope', 'Auth / dashboards', 'API integrations'],
  },
  {
    icon: '🔁',
    name: 'Maintenance & Updates',
    desc: 'Monthly content updates, performance monitoring, security patches, and priority support.',
    tags: ['Recurring retainer', 'Priority support'],
    retainer: true,
  },
]

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div className={[
      styles.card,
      pkg.featured ? styles.featured : '',
      pkg.retainer ? styles.retainer : '',
    ].join(' ')}>
      {pkg.featured && <span className={styles.badge}>Most popular</span>}
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
        Get a quote
      </a>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <span className="section-label">What I offer</span>
        <h2 className="section-title">Packages built<br />for where you are</h2>
        <p className="section-subtitle">
          Every site is built to your business — not assembled from a theme.
          Every quote is tailored.
        </p>

        <div className={styles.group}>
          <h3 className={styles.groupLabel}>Website builder packages</h3>
          <div className={`${styles.grid} ${styles.gridThree}`}>
            {BUILDER_PACKAGES.map(pkg => <PackageCard key={pkg.name} pkg={pkg} />)}
          </div>
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupLabel}>Custom coded packages</h3>
          <div className={`${styles.grid} ${styles.gridTwo}`}>
            {CUSTOM_PACKAGES.map(pkg => <PackageCard key={pkg.name} pkg={pkg} />)}
          </div>
        </div>

        <p className={styles.note}>
          Not sure which fits? <a href="#contact">Let's talk</a> — I'll point you in the right direction.
        </p>
      </div>
    </section>
  )
}
