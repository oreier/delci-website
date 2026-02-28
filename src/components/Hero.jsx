import styles from './Hero.module.css'
import runningBg from '../assets/running.png'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-label="Delci — Ice Cream out now">

      {/* Full-bleed background photo */}
      <div className={styles.bg} aria-hidden="true">
        <img src={runningBg} alt="" className={styles.bgImg} />
        {/* Gradient veil so white text reads cleanly over any part of the photo */}
        <div className={styles.veil} />
      </div>

      {/* Centred content — sits at 58% down the screen */}
      <div className={styles.content}>
        <p className={styles.outNow}>out now</p>
        <h1 className={styles.songName}>Ice Cream</h1>
        <a
          href="https://linktr.ee/delcimusic"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.listenBtn}
          aria-label="Listen to Ice Cream by Delci"
        >
          Listen Now
        </a>
      </div>

      {/* Subtle scroll indicator */}
      <div className={styles.scrollCue} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>

    </section>
  )
}
