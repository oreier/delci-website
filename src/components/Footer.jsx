import styles from './Footer.module.css'
import SunflowerSVG from './SunflowerSVG'

const socials = [
  { label: 'Spotify',      url: 'https://open.spotify.com/artist/264045j10lWRwqhUxKZBPP' },
  { label: 'Apple Music',  url: 'https://music.apple.com/us/artist/delci/1648386915' },
  { label: 'Amazon Music', url: 'https://music.amazon.com/artists/B0BHC5PBYP/delci' },
  { label: 'iHeart',       url: 'https://www.iheart.com/artist/delci-38926064/' },
  { label: 'Instagram',    url: 'https://www.instagram.com/delcimusic' },
  { label: 'TikTok',       url: 'https://www.tiktok.com/@delcimusic' },
  { label: 'YouTube',      url: 'https://www.youtube.com/@delcimusic' },
]

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <SunflowerSVG className={styles.flower} color="rgba(251,184,37,0.4)" petals={12} />
          <span className={styles.name}>Delci</span>
        </div>
        <nav className={styles.links} aria-label="Footer links">
          {socials.map(s => (
            <a key={s.label} href={s.url} target="_blank"
               rel="me noopener noreferrer" className={styles.link}>
              {s.label}
            </a>
          ))}
        </nav>
        <p className={styles.copy}>
          © 2026 Delci &nbsp;·&nbsp;
          <a href="https://delcimusic.com" className={styles.domainLink}>delcimusic.com</a>
        </p>
      </div>
    </footer>
  )
}
