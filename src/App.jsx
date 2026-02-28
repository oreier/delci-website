import { useEffect } from 'react'
import Nav     from './components/Nav'
import Hero    from './components/Hero'
import Music   from './components/Music'
import Tour    from './components/Tour'
import Contact from './components/Contact'
import Footer  from './components/Footer'

export default function App() {
  useEffect(() => {
    // Scroll-triggered section reveals only — nav handles itself
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.06 }
    )
    document.querySelectorAll('[data-animate]').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="section-divider" aria-hidden="true" />
        <Music />
        <div className="section-divider" aria-hidden="true" />
        <Tour />
        <div className="section-divider" aria-hidden="true" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
