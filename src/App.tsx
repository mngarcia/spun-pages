import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServicePage from './pages/ServicePage'
import ScrollToTop from './components/ScrollToTop'

function Home() {
  return (
    <>
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

export default function App() {
  return (
    <LangProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Navigate to="/#services" replace />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LangProvider>
  )
}
