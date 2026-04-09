import './App.css'
import { LangProvider } from './context/LangContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LangProvider>
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}
