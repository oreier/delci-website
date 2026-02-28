import { useState } from 'react'
import styles from './Music.module.css'
import SunflowerSVG from './SunflowerSVG'
import iceCreamArt from '../assets/icecream.jpeg'
import temptedArt  from '../assets/tempted.png'
import delciArt    from '../assets/delci.png'

function SubscribeCard() {
  const [email,  setEmail]  = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  const submit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      // Separate Formspree form just for email collection
      const res = await fetch('https://formspree.io/f/mnjbrlda', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          _subject: 'New Music 2026 — email signup',
          type: 'newsletter',
        }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.card} data-animate>
      <div className={styles.artWrap}>
        <img src={delciArt} alt="Delci — new music coming 2026" className={styles.artImg} />
        <div className={styles.subscribeOverlay}>
          <span className={styles.newLabel}>New Music</span>
          <span className={styles.newYear}>2026</span>
        </div>
      </div>
      <div className={styles.cardBody}>
        <span className={styles.releaseType}>Coming 2026</span>
        <span className={styles.trackName}>New Music</span>
        {status === 'done' ? (
          <p className={styles.thanks}>You're on the list ✦</p>
        ) : (
          <form className={styles.subForm} onSubmit={submit} aria-label="Get notified for new music">
            <input
              className={styles.subInput}
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              className={styles.subBtn}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? '…' : 'Notify Me'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className={styles.errNote}>Try again or DM @delcimusic</p>
        )}
      </div>
    </div>
  )
}

export default function Music() {
  return (
    <section className={styles.section} id="music" aria-labelledby="music-heading">
      {/* Decorative background watermark */}
      <SunflowerSVG className={styles.watermark} color="rgba(200,104,16,1)" petals={20} />

      <h2 className={styles.heading} id="music-heading">Music</h2>

      <div className={styles.grid}>

        {/* ── Ice Cream ── */}
        <a
          href="https://linktr.ee/delcimusic"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
          data-animate
          aria-label="Stream Ice Cream by Delci"
        >
          <div className={styles.artWrap}>
            <img
              src={iceCreamArt}
              alt="Ice Cream by Delci — single artwork"
              className={styles.artImg}
            />
            <div className={styles.artOverlay} />
          </div>
          <div className={styles.cardBody}>
            <span className={styles.releaseType}>Single</span>
            <span className={styles.trackName}>Ice Cream</span>
            <span className={styles.listenHint}>Listen Now →</span>
          </div>
        </a>

        {/* ── Tempted ── */}
        <a
          href="https://linktr.ee/delcimusic"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
          data-animate
          aria-label="Stream Tempted by Delci"
        >
          <div className={styles.artWrap}>
            <img
              src={temptedArt}
              alt="Tempted by Delci — single artwork"
              className={styles.artImg}
            />
            <div className={styles.artOverlay} />
          </div>
          <div className={styles.cardBody}>
            <span className={styles.releaseType}>Single</span>
            <span className={styles.trackName}>Tempted</span>
            <span className={styles.listenHint}>Listen Now →</span>
          </div>
        </a>

        {/* ── New Music subscribe ── */}
        <SubscribeCard />

      </div>

      {/* Streaming links strip */}
      <div className={styles.platforms}>
        <span className={styles.streamLabel}>Stream on</span>
        {[
          { name: 'Spotify',      url: 'https://open.spotify.com/artist/264045j10lWRwqhUxKZBPP' },
          { name: 'Apple Music',  url: 'https://music.apple.com/us/artist/delci/1648386915' },
          { name: 'Amazon Music', url: 'https://music.amazon.com/artists/B0BHC5PBYP/delci' },
          { name: 'iHeart',       url: 'https://www.iheart.com/artist/delci-38926064/' },
          { name: 'All Links',    url: 'https://linktr.ee/delcimusic' },
        ].map(p => (
          <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className={styles.platformBtn}>
            {p.name}
          </a>
        ))}
      </div>

    </section>
  )
}
