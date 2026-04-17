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
  { title: 'Spun Pages — Desarrolladora Web Freelance en Rockville, MD' },
  {
    name: 'description',
    content:
      'Spun Pages es un estudio de desarrollo web freelance en Rockville, MD. Sitios web personalizados, tiendas en línea y aplicaciones web para pequeños negocios — precios fijos, carga rápida, SEO incluido.',
  },
  { property: 'og:title', content: 'Spun Pages — Desarrolladora Web Freelance en Rockville, MD' },
  {
    property: 'og:description',
    content:
      'Sitios web personalizados, tiendas en línea y aplicaciones web para pequeños negocios en Rockville, MD y el área metropolitana de DC.',
  },
  { property: 'og:url', content: 'https://spunpages.com/es' },
  { property: 'og:image', content: 'https://spunpages.com/og-image.png' },
  { name: 'twitter:title', content: 'Spun Pages — Desarrolladora Web Freelance en Rockville, MD' },
  {
    name: 'twitter:description',
    content:
      'Sitios web personalizados, tiendas en línea y aplicaciones web para pequeños negocios en Rockville, MD y el área metropolitana de DC.',
  },
  { tagName: 'link', rel: 'canonical', href: 'https://spunpages.com/es' },
  { tagName: 'link', rel: 'alternate', hrefLang: 'en', href: 'https://spunpages.com/' },
  { tagName: 'link', rel: 'alternate', hrefLang: 'es', href: 'https://spunpages.com/es' },
  { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: 'https://spunpages.com/' },
]

export default function HomeEs() {
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
