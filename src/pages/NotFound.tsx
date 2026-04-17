import type { MetaFunction } from 'react-router'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './NotFound.module.css'

export const meta: MetaFunction = () => [
  { title: 'Page Not Found | Spun Pages' },
  { name: 'robots', content: 'noindex' },
]

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={`container ${styles.inner}`}>
          <span className={styles.code}>404</span>
          <h1 className={styles.heading}>Page not found</h1>
          <p className={styles.body}>
            This page doesn't exist or may have moved. Head back to the homepage to find what you're looking for.
          </p>
          <div className={styles.actions}>
            <Link to="/" className="btn btn-primary">Back to home</Link>
            <Link to="/#services" className="btn btn-outline">View services</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
