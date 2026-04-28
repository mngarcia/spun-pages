import type { MetaFunction } from 'react-router'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Work from '../components/Work'
import About from '../components/About'
import LocationArea from '../components/LocationArea'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export const meta: MetaFunction = () => [
  { title: 'Custom Website Designer in Rockville, MD | Hand-Coded Sites for Small Businesses' },
  {
    name: 'description',
    content:
      'Hand-coded custom website design for small businesses in Rockville, MD and the DC metro area. No templates, SEO built in. Serving Montgomery County, MD and Northern Virginia — Gaithersburg, Bethesda, Arlington, Alexandria & beyond.',
  },
  { property: 'og:title', content: 'Custom Website Designer in Rockville, MD | Hand-Coded Sites for Small Businesses' },
  {
    property: 'og:description',
    content:
      'Hand-coded custom website design for small businesses in Rockville, MD and Montgomery County. No templates, SEO built in.',
  },
  { property: 'og:url', content: 'https://spunpages.com/' },
  { property: 'og:image', content: 'https://spunpages.com/og-image.png' },
  { name: 'twitter:title', content: 'Custom Website Designer in Rockville, MD | Hand-Coded Sites for Small Businesses' },
  {
    name: 'twitter:description',
    content:
      'Hand-coded custom website design for small businesses in Rockville, MD and Montgomery County. No templates, SEO built in.',
  },
  { tagName: 'link', rel: 'canonical', href: 'https://spunpages.com/' },
  { tagName: 'link', rel: 'alternate', hrefLang: 'en', href: 'https://spunpages.com/' },
  { tagName: 'link', rel: 'alternate', hrefLang: 'es', href: 'https://spunpages.com/es' },
  { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: 'https://spunpages.com/' },
]

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <LocationArea />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
