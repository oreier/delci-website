import { useState, useEffect } from 'react'
import SunflowerSVG from './SunflowerSVG'
import styles from './Nav.module.css'

/* ── Social icon SVGs ── */
const IG = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg>)
const TT = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.13 6.33 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>)
const YT = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.6 5 12 5 12 5s-4.6 0-7 .1c-.4.1-1.2.1-2 .9C2.4 6.6 2.2 8 2.2 8S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.8C7 19 12 19 12 19s4.6 0 7-.2c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9l5.5 2.8-5.5 2.7z"/></svg>)
const SP = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>)
const AM = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 1v16c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c1.1 0 2.1.3 3 .8V5.4L8 7.4V20c0 3.3-2.7 6-6 6S-4 23.3-4 20s2.7-6 6-6c1.1 0 2.1.3 3 .8V3l14-2z"/></svg>)
const AZ = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.96 15.34c-.2-.14-1.68.38-2.36.56-.19.05-.22-.14-.05-.26 1.15-.81 3.05-.58 3.28-.3.23.28-.08 2.15-1.14 3.05-.16.14-.32.07-.25-.11.24-.6.72-1.8.52-2.94zM15.62 4.5c0-1.1.89-2 1.99-2a2 2 0 0 1 0 4 2 2 0 0 1-1.99-2zm-8 0C7.62 3.4 8.51 2.5 9.61 2.5a2 2 0 0 1 0 4 2 2 0 0 1-1.99-2zm10.06 1.5h-1.37L14.5 3H9.5L7.69 6H6.32A2.32 2.32 0 0 0 4 8.32l1 8.36A2.32 2.32 0 0 0 7.32 19h9.36A2.32 2.32 0 0 0 19 16.68l1-8.36A2.32 2.32 0 0 0 17.68 6zM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-5.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>)
const IH = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21.593c-.525-.444-9-7.654-9-12.093A6 6 0 0 1 12 4.557a6 6 0 0 1 9 4.943c0 4.44-8.475 11.649-9 12.093z"/></svg>)

const socials = [
  { id:'ig', Icon:IG, label:'Instagram @delcimusic',     url:'https://www.instagram.com/delcimusic' },
  { id:'tt', Icon:TT, label:'TikTok @delcimusic',        url:'https://www.tiktok.com/@delcimusic' },
  { id:'yt', Icon:YT, label:'YouTube @delcimusic',       url:'https://www.youtube.com/@delcimusic' },
  { id:'sp', Icon:SP, label:'Spotify — Stream Delci',    url:'https://open.spotify.com/artist/264045j10lWRwqhUxKZBPP' },
  { id:'am', Icon:AM, label:'Apple Music — Stream Delci',url:'https://music.apple.com/us/artist/delci/1648386915' },
  { id:'az', Icon:AZ, label:'Amazon Music — Stream Delci',url:'https://music.amazon.com/artists/B0BHC5PBYP/delci' },
  { id:'ih', Icon:IH, label:'iHeart — Stream Delci',     url:'https://www.iheart.com/artist/delci-38926064/' },
]

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Get hero height after it has rendered
      const hero = document.getElementById('hero')
      const threshold = hero ? hero.offsetHeight * 0.8 : 500
      setScrolled(window.scrollY > threshold)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    // Run once after mount so it's correct if page loads mid-scroll
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      id="site-nav"
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.left}>
        <button
          className={styles.brand}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <SunflowerSVG className={styles.flower} color="rgba(251,184,37,0.9)" petals={16} />
          <span className={styles.brandName}>Delci</span>
        </button>

        <div className={styles.pageLinks}>
          <button className={styles.pageLink} onClick={() => scrollTo('music')}>Music</button>
          <span className={styles.dot} aria-hidden="true">·</span>
          <button className={styles.pageLink} onClick={() => scrollTo('tour')}>Tour</button>
          <span className={styles.dot} aria-hidden="true">·</span>
          <button className={styles.pageLink} onClick={() => scrollTo('contact')}>Contact</button>
        </div>
      </div>

      <div className={styles.socials} role="list" aria-label="Delci on social media">
        {socials.map(({ id, Icon, label, url }) => (
          <a key={id} href={url} target="_blank" rel="me noopener noreferrer"
             aria-label={label} className={styles.icon} role="listitem">
            <Icon />
          </a>
        ))}
      </div>
    </nav>
  )
}
