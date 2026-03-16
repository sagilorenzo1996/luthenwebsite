import { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PlatformConnect from './pages/PlatformConnect'
import PlatformIntelligence from './pages/PlatformIntelligence'
import PlatformBuilder from './pages/PlatformBuilder'
import Solutions from './pages/Solutions'
import Pricing from './pages/Pricing'
// import Resources from './pages/Resources'
import About from './pages/About'
import Demo from './pages/Demo'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Press from './pages/Press'
import Careers from './pages/Careers'
import Docs from './pages/Docs'
import Security from './pages/Security'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Navigate to="/platform/connect" replace />} />
          <Route path="/platform/connect" element={<PlatformConnect />} />
          <Route path="/platform/intelligence" element={<PlatformIntelligence />} />
          <Route path="/platform/builder" element={<PlatformBuilder />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* <Route path="/resources" element={<Resources />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/press" element={<Press />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </Layout>
    </>
  )
}
