import type { MetaFunction } from 'react-router'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Work from '../components/Work'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export const meta: MetaFunction = () => [
  { title: 'Spun Pages — Freelance Web Developer in Rockville, MD' },
  {
    name: 'description',
    content:
      'Spun Pages is a freelance web development studio in Rockville, MD. Custom websites, online stores, and web apps for small businesses — fixed pricing, fast load times, SEO built in.',
  },
  { property: 'og:title', content: 'Spun Pages — Freelance Web Developer in Rockville, MD' },
  {
    property: 'og:description',
    content:
      'Custom websites, online stores, and web apps for small businesses in Rockville, MD and the DC metro area.',
  },
  { property: 'og:url', content: 'https://spunpages.com/' },
  { property: 'og:image', content: 'https://spunpages.com/og-image.png' },
  { name: 'twitter:title', content: 'Spun Pages — Freelance Web Developer in Rockville, MD' },
  {
    name: 'twitter:description',
    content:
      'Custom websites, online stores, and web apps for small businesses in Rockville, MD and the DC metro area.',
  },
  { tagName: 'link', rel: 'canonical', href: 'https://spunpages.com/' },
  { tagName: 'link', rel: 'alternate', hreflang: 'en', href: 'https://spunpages.com/' },
  { tagName: 'link', rel: 'alternate', hreflang: 'es', href: 'https://spunpages.com/es' },
  { tagName: 'link', rel: 'alternate', hreflang: 'x-default', href: 'https://spunpages.com/' },
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
        <Contact />
      </main>
      <Footer />
    </>
  )
}
