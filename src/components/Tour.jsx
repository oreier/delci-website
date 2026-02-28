import styles from './Tour.module.css'

export default function Tour() {
  return (
    <section className={styles.section} id="tour" aria-labelledby="tour-heading">
      <h2 className={styles.heading} id="tour-heading">Tour</h2>
      <p className={styles.message} data-animate>
        No dates scheduled currently — check back for future dates.
      </p>
    </section>
  )
}
