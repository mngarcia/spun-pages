import type { MetaFunction } from 'react-router'
import { useParams, Navigate, Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { translations } from '../i18n/translations'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import styles from './ServicePage.module.css'

export const meta: MetaFunction = ({ params }) => {
  const slug = params.slug ?? ''
  const es = translations.es.services
  const allPkgs = [...es.builderPackages, ...es.customPackages]
  const pkg = allPkgs.find(p => p.slug === slug)

  if (!pkg) return [{ title: 'Spun Pages' }]

  return [
    { title: pkg.pageTitle },
    { name: 'description', content: pkg.pageMetaDesc },
    { property: 'og:title', content: pkg.pageTitle },
    { property: 'og:description', content: pkg.pageMetaDesc },
    { property: 'og:url', content: `https://spunpages.com/es/services/${slug}/` },
    { property: 'og:image', content: 'https://spunpages.com/og-image.png' },
    { name: 'twitter:title', content: pkg.pageTitle },
    { name: 'twitter:description', content: pkg.pageMetaDesc },
    { tagName: 'link', rel: 'canonical', href: `https://spunpages.com/es/services/${slug}/` },
    { tagName: 'link', rel: 'alternate', hrefLang: 'en', href: `https://spunpages.com/services/${slug}/` },
    { tagName: 'link', rel: 'alternate', hrefLang: 'es', href: `https://spunpages.com/es/services/${slug}/` },
    { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: `https://spunpages.com/services/${slug}/` },
  ]
}

export default function ServicePageEs() {
  const { slug } = useParams<{ slug: string }>()
  const { lang } = useLang()
  const tx = translations[lang].services

  const allPkgs = [...tx.builderPackages, ...tx.customPackages]
  const pkg = allPkgs.find(p => p.slug === slug)

  if (!pkg) return <Navigate to="/es" replace />

  const features = pkg.turnaround ? [...pkg.tags, pkg.turnaround] : pkg.tags

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://spunpages.com/es/' },
      { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://spunpages.com/es/#services' },
      { '@type': 'ListItem', position: 3, name: pkg.name, item: `https://spunpages.com/es/services/${slug}/` },
    ],
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link to="/es">{lang === 'en' ? 'Home' : 'Inicio'}</Link>
              <span aria-hidden="true"> / </span>
              <Link to="/es#services">{lang === 'en' ? 'Services' : 'Servicios'}</Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">{pkg.name}</span>
            </nav>

            <span className="section-label">{tx.label}</span>
            <h1 className={styles.heading}>{pkg.name}</h1>
            {pkg.subtitle && <p className={styles.subtitle}>{pkg.subtitle}</p>}
            <p className={styles.intro}>{pkg.desc}</p>

            <div className={styles.meta}>
              {features.map(f => (
                <span key={f} className={styles.tag}>{f}</span>
              ))}
              {pkg.retainer && (
                <span className={styles.retainerBadge}>
                  {lang === 'en' ? 'Monthly retainer' : 'Plan mensual'}
                </span>
              )}
            </div>

            <a href="#contact" className="btn btn-primary">{tx.ctaGetQuote}</a>
          </div>
        </section>

        <section className={`section ${styles.details}`}>
          <div className={`container ${styles.detailsGrid}`}>
            <div>
              <h2 className={styles.sectionHeading}>
                {lang === 'en' ? "What's included" : 'Qué incluye'}
              </h2>
              <ul className={styles.includesList}>
                {pkg.includes.map(item => (
                  <li key={item} className={styles.includesItem}>
                    <span className={styles.checkmark} aria-hidden="true">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.sideCard}>
                <h2 className={styles.sectionHeading}>
                  {lang === 'en' ? 'Ideal for' : 'Ideal para'}
                </h2>
                <p className={styles.goodFor}>{pkg.goodFor}</p>
              </div>

              {pkg.turnaround && (
                <div className={styles.sideCard}>
                  <h2 className={styles.sectionHeading}>
                    {lang === 'en' ? 'Typical timeline' : 'Tiempo estimado'}
                  </h2>
                  <p className={styles.turnaround}>{pkg.turnaround}</p>
                </div>
              )}

              <div className={styles.sideCard}>
                <h2 className={styles.sectionHeading}>
                  {lang === 'en' ? 'Pricing' : 'Precio'}
                </h2>
                <p className={styles.pricingNote}>
                  {lang === 'en'
                    ? 'Every project is scoped and quoted individually — no vague day rates or hidden fees. Get a straight answer within one business day.'
                    : 'Cada proyecto se cotiza individualmente — sin tarifas vagas ni cargos ocultos. Respuesta en un día hábil.'}
                </p>
                <a href="#contact" className={`btn btn-primary ${styles.ctaBtn}`}>
                  {tx.ctaGetQuote}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.otherServices}`}>
          <div className="container">
            <h2 className={styles.otherHeading}>
              {lang === 'en' ? 'Other services' : 'Otros servicios'}
            </h2>
            <div className={styles.otherGrid}>
              {allPkgs.filter(p => p.slug !== slug).slice(0, 3).map(p => (
                <Link key={p.slug} to={`/es/services/${p.slug}`} className={styles.otherCard}>
                  <span className={styles.otherName}>{p.name}</span>
                  <span className={styles.otherArrow} aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  )
}
